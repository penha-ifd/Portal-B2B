import { useState } from "react";
import { useNavigate } from "react-router";
import { usePlano } from "../state/plano-context";
import { SegmentosTab } from "./SegmentosTab";

const CLIENTE_PROFILE: Record<string, { tags: string[]; frequencia: string; horario: string; ticket: string; canais: string[]; whatsapp: boolean; comunicacao: boolean; aniversario: string }> = {
  "Clara L.": { tags: ["Alta frequência", "Jantar", "Vem acompanhado", "Ticket alto"], frequencia: "alta", horario: "jantar", ticket: "acima da média do salão", canais: ["Delivery", "Salão"], whatsapp: true, comunicacao: true, aniversario: "14 de março" },
  "Luiza V.": { tags: ["Baixa frequência", "Almoço"], frequencia: "baixa", horario: "almoço", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: false, aniversario: "não informado" },
  "Julia A.": { tags: ["Média frequência", "Jantar", "Ticket alto"], frequencia: "média", horario: "jantar", ticket: "acima da média do salão", canais: ["Salão"], whatsapp: true, comunicacao: true, aniversario: "22 de agosto" },
  "Duilio B.": { tags: ["Média frequência", "Almoço"], frequencia: "média", horario: "almoço", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: true, aniversario: "não informado" },
  "Ivia M.": { tags: ["Alta frequência", "Jantar", "Vem acompanhado", "Ticket alto"], frequencia: "alta", horario: "jantar", ticket: "acima da média do salão", canais: ["Delivery", "Salão"], whatsapp: true, comunicacao: true, aniversario: "5 de novembro" },
  "Leonardo K.": { tags: ["Alta frequência", "Jantar", "Ticket alto"], frequencia: "alta", horario: "jantar", ticket: "acima da média do salão", canais: ["Salão"], whatsapp: true, comunicacao: false, aniversario: "não informado" },
  "Stefany R.": { tags: ["Média frequência", "Almoço", "Vem acompanhado"], frequencia: "média", horario: "almoço", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: true, aniversario: "30 de janeiro" },
  "Paulo M.": { tags: ["Baixa frequência", "Almoço"], frequencia: "baixa", horario: "almoço", ticket: "abaixo da média", canais: ["Salão"], whatsapp: false, comunicacao: false, aniversario: "não informado" },
  "Leonardo S.": { tags: ["Baixa frequência", "Jantar"], frequencia: "baixa", horario: "jantar", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: false, aniversario: "não informado" },
  "Felipe P.": { tags: ["Baixa frequência", "Almoço"], frequencia: "baixa", horario: "almoço", ticket: "abaixo da média", canais: ["Salão"], whatsapp: false, comunicacao: false, aniversario: "não informado" },
};

const METRICS = [
  { label: "Total de clientes", value: "2.392", hasInfo: false },
  { label: "Clientes ativos", value: "1.466", hasInfo: true },
  { label: "Clientes novos", value: "538", hasInfo: true },
  { label: "Clientes perdidos", value: "388", hasInfo: true },
];

interface Cliente {
  nome: string;
  telefone: string;
  status: "Ativo" | "Inativo";
  visitas: number;
  primeiraVisita: string;
  ultimaVisita: string;
  perfil: string;
  origem: string;
}

const CLIENTES: Cliente[] = [
  { nome: "Clara L.", telefone: "(11) 98324-****", status: "Ativo", visitas: 10, primeiraVisita: "29/12/2025", ultimaVisita: "18/02/2026", perfil: "Fiel", origem: "Ambos" },
  { nome: "Luiza V.", telefone: "(11) 99338-****", status: "Ativo", visitas: 2, primeiraVisita: "18/09/2025", ultimaVisita: "13/10/2025", perfil: "Novato", origem: "Delivery" },
  { nome: "Julia A.", telefone: "(11) 99223-****", status: "Ativo", visitas: 5, primeiraVisita: "26/12/2025", ultimaVisita: "04/01/2025", perfil: "Fiel", origem: "Salão" },
  { nome: "Duilio B.", telefone: "(11) 98305-****", status: "Ativo", visitas: 3, primeiraVisita: "27/10/2025", ultimaVisita: "31/10/2025", perfil: "Em risco", origem: "Delivery" },
  { nome: "Ivia M.", telefone: "Tel. não validado", status: "Inativo", visitas: 11, primeiraVisita: "29/12/2025", ultimaVisita: "16/02/2026", perfil: "VIP", origem: "Ambos" },
  { nome: "Leonardo K.", telefone: "(11) 98453-****", status: "Ativo", visitas: 9, primeiraVisita: "23/12/2025", ultimaVisita: "11/02/2026", perfil: "Fiel", origem: "Salão" },
  { nome: "Stefany R.", telefone: "(11) 96728-****", status: "Ativo", visitas: 4, primeiraVisita: "14/12/2025", ultimaVisita: "28/01/2026", perfil: "Em risco", origem: "Delivery" },
  { nome: "Paulo M.", telefone: "(11) 99134-****", status: "Ativo", visitas: 1, primeiraVisita: "22/12/2025", ultimaVisita: "22/12/2025", perfil: "Novato", origem: "Salão" },
  { nome: "Leonardo S.", telefone: "Tel. não validado", status: "Inativo", visitas: 1, primeiraVisita: "20/04/2025", ultimaVisita: "03/05/2025", perfil: "Perdido", origem: "Delivery" },
  { nome: "Felipe P.", telefone: "(11) 97928-****", status: "Ativo", visitas: 1, primeiraVisita: "07/02/2025", ultimaVisita: "18/02/2025", perfil: "Novato", origem: "Salão" },
];

const PERFIS_RFV = [
  { nome: "Novato", count: 194 },
  { nome: "Fiel", count: 412 },
  { nome: "VIP", count: 88 },
  { nome: "Em risco", count: 604 },
  { nome: "Perdido", count: 331 },
];

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 25;

export function ClientesPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Pessoas");
  const [page, setPage] = useState(1);
  const [perfilFilter, setPerfilFilter] = useState<string | null>(null);
  const [origemFilter, setOrigemFilter] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const { planoAtivo } = usePlano();
  const isBase = planoAtivo === "base";

  const toggleSort = (col: string) => {
    if (sortCol === col) { setSortDir(sortDir === "asc" ? "desc" : "asc"); }
    else { setSortCol(col); setSortDir("asc"); }
  };

  const clientesFiltrados = CLIENTES.filter((c) => {
    if (perfilFilter && c.perfil !== perfilFilter) return false;
    if (origemFilter && c.origem !== origemFilter) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-[24px] font-medium text-[#141414] leading-[32px]">Comer Fora</h1>
        <p className="paragraph-p2-14-regular text-[#666666]">Confira informações do seu perfil, promoções e clientes do seu salão</p>
      </div>

      <div style={{ borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "transparent" }}>
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>285 de 3.482 clientes identificados</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>8% da sua base. Sem identificar, o CRM não consegue segmentar nem sugerir campanhas.</span>
        </div>
        <button type="button" onClick={() => navigate("/conciliacao")} style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>Conciliar check-ins</button>
      </div>

      <div style={{ marginBottom: "var(--spacing-24)" }}>
        <div className="flex items-center" style={{ height: 56, backgroundColor: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", paddingLeft: "var(--spacing-16)", paddingRight: "var(--spacing-16)", gap: "var(--spacing-8)" }}>
          <input type="text" placeholder="Pergunte sobre seus clientes" style={{ flex: 1, fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", background: "none", border: "none", outline: "none" }} />
          <i className="ifdl-icon-line ifdl-icon-microphone" style={{ fontSize: 20, color: "var(--text-secundario)" }} />
          <button type="button" className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)", border: "none", cursor: "pointer" }}>
            <i className="ifdl-icon-line ifdl-icon-arrow-up" style={{ fontSize: 18, color: "#ffffff" }} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2" style={{ marginTop: "var(--spacing-12)" }}>
          {["Quem gasta mais", "Quem sumiu este mês", "Quem veio do delivery"].map((chip) => (
            <button key={chip} type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 12px", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "transparent", cursor: "pointer" }}>{chip}</button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-1 border-b border-[#EBEBEB]">
          {["Pessoas", "Segmentos"].map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`paragraph-p2-14-medium px-4 py-2.5 transition-colors relative ${activeTab === tab ? "text-[#EB0033]" : "text-[#666666] hover:text-[#141414]"}`}>
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB0033] rounded-full" />}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Pessoas" ? (
        <div className="flex flex-col gap-10">
          <div className="bg-[#F5F5F5] flex flex-col gap-1 p-1 rounded-2xl">
            <div className="flex items-start px-3 pt-3 pb-1">
              <div className="flex flex-col gap-1">
                <h2 className="text-[18px] font-medium text-[#141414] leading-6">Informações gerais</h2>
                <p className="paragraph-p2-14-regular text-[#666666]">Conheça quem visita seu salão e como esses clientes se comportam</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:gap-1 gap-1 px-1 pb-1">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-white flex flex-1 flex-col gap-2 justify-center p-4 rounded-xl min-w-0">
                  <div className="flex gap-1 items-center">
                    <span className="paragraph-p3-12-medium text-[#666666] whitespace-nowrap">{m.label}</span>
                    {m.hasInfo && <i className="ifdl-icon-line ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "14px" }} />}
                  </div>
                  <span className="text-[18px] font-medium text-[#141414] leading-6">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F5F5F5] flex gap-4 items-center p-4 rounded-2xl">
            <div className="flex items-center justify-center size-12 rounded-xl bg-[#25D366] shrink-0">
              <i className="ifdl-icon-filled text-white" style={{ fontSize: "24px" }}>&#xE81C;</i>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[14px] font-medium text-[#141414] leading-4">Conecte-se com seus clientes</h3>
              <p className="paragraph-p3-12-regular text-[#666666] mt-1">Envie mensagens pelo WhatsApp para divulgar promoções e eventos do seu salão.</p>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Agendar disparo</button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-[18px] font-medium text-[#141414] leading-6">Seus clientes</h2>
              <p className="paragraph-p2-14-regular text-[#666666]">Baseado nos seus dados, aqui estão algumas sugestões de campanha</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {PERFIS_RFV.map((perfil) => (
                <button key={perfil.nome} type="button" onClick={() => setPerfilFilter(perfilFilter === perfil.nome ? null : perfil.nome)} style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 12px", backgroundColor: perfilFilter === perfil.nome ? "var(--invertido)" : "transparent", color: perfilFilter === perfil.nome ? "#ffffff" : "var(--text-secundario)", cursor: "pointer" }}>{perfil.nome} {perfil.count}</button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", display: "flex", alignItems: "center" }}>Origem:</span>
              {["Delivery", "Salão", "Ambos"].map((origem) => (
                <button key={origem} type="button" onClick={() => setOrigemFilter(origemFilter === origem ? null : origem)} style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 12px", backgroundColor: origemFilter === origem ? "var(--invertido)" : "transparent", color: origemFilter === origem ? "#ffffff" : "var(--text-secundario)", cursor: "pointer" }}>{origem}</button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <div className="flex items-center justify-between border-b border-[#DCDCDC] py-2 min-w-[900px]">
                {["Nome", "Telefone", "Status", "Perfil", "Origem", "Total de visitas", "Primeira visita", "Última visita"].map((h) => (
                  <span key={h} className="flex-1 min-w-0 text-[12px] font-bold text-[#3E3E3E] leading-4" style={{ fontFamily: "var(--font-inter)", cursor: "pointer", userSelect: "none", display: "inline-flex", alignItems: "center", gap: 4 }} onClick={() => toggleSort(h)}>
                    {h}
                    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 0 }}>
                      <span style={{ fontSize: 10, color: sortCol === h && sortDir === "asc" ? "var(--text-primario)" : "var(--text-desabilitado)" }}>&#9650;</span>
                      <span style={{ fontSize: 10, color: sortCol === h && sortDir === "desc" ? "var(--text-primario)" : "var(--text-desabilitado)", marginTop: -2 }}>&#9660;</span>
                    </span>
                  </span>
                ))}
              </div>
              {clientesFiltrados.map((c, i) => (
                <div key={i} onClick={() => setSelectedClient(c.nome)} className="flex items-center justify-between border-b border-[#DCDCDC] py-2 min-h-12 cursor-pointer hover:bg-[#F5F5F5] transition-colors">
                  <span className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <span className="paragraph-p2-14-regular text-[#666666]">{c.nome}</span>
                    {CLIENTE_PROFILE[c.nome] && (
                      <span className="flex gap-1 flex-wrap">
                        {CLIENTE_PROFILE[c.nome].tags.slice(0, 2).map((tag) => (
                          <span key={tag} style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "1px 6px" }}>{tag}</span>
                        ))}
                      </span>
                    )}
                  </span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.telefone}</span>
                  <span className="flex-1 min-w-0">
                    <span className={`inline-block paragraph-p3-12-medium rounded-full px-2.5 py-0.5 ${c.status === "Ativo" ? "text-[#1FAD68] bg-[rgba(31,173,104,0.10)]" : "text-[#A3A3A3] bg-[#F5F5F5]"}`}>{c.status}</span>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500, borderRadius: "var(--radius-pill)", padding: "2px 10px", ...({"VIP":{backgroundColor:"rgba(235,0,51,0.08)",color:"var(--marca)"},"Fiel":{backgroundColor:"rgba(31,173,104,0.10)",color:"#1FAD68"},"Em risco":{backgroundColor:"rgba(255,152,0,0.10)",color:"#F57C00"},"Perdido":{backgroundColor:"#F5F5F5",color:"#A3A3A3"},"Novato":{backgroundColor:"rgba(33,150,243,0.10)",color:"#1E88E5"}}[c.perfil] || {backgroundColor:"#F5F5F5",color:"#666666"}) }}>{c.perfil}</span>
                  </span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.origem}</span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.visitas}</span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.primeiraVisita}</span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666] text-right">{c.ultimaVisita}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4">
                <span className="paragraph-p3-12-regular text-[#A3A3A3]">Mostrando {clientesFiltrados.length} de {TOTAL_ITEMS} clientes</span>
                <div className="flex items-center gap-2">
                  <button type="button" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] disabled:opacity-30 hover:bg-[#F5F5F5] transition-colors">
                    <svg className="w-4 h-4 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
                  </button>
                  {[1, 2, 3].map((n) => (
                    <button key={n} type="button" onClick={() => setPage(n)} className={`size-8 flex items-center justify-center rounded-lg text-sm transition-colors ${page === n ? "bg-[#EB0033] text-white" : "text-[#141414] hover:bg-[#F5F5F5]"}`}>{n}</button>
                  ))}
                  <button type="button" disabled={page >= 3} onClick={() => setPage((p) => Math.min(3, p + 1))} className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] disabled:opacity-30 hover:bg-[#F5F5F5] transition-colors">
                    <svg className="w-4 h-4 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SegmentosTab />
      )}

      {selectedClient && (() => {
        const profile = CLIENTE_PROFILE[selectedClient] || CLIENTE_PROFILE["Clara L."];
        return (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/30" onClick={() => setSelectedClient(null)} />
            <div className="relative bg-white w-[420px] max-w-full h-full overflow-y-auto border-l border-[#EBEBEB] shadow-[0px_6px_12px_0px_rgba(21,21,21,0.16)]">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#EBEBEB]">
                <span className="paragraph-p2-14-medium text-[#141414]">Perfil do cliente</span>
                <button type="button" onClick={() => setSelectedClient(null)} className="size-8 flex items-center justify-center rounded-lg hover:bg-[#F5F5F5]">
                  <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6">
                {isBase && (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Dados de demonstração</span>
                  </div>
                )}

                {/* Avatar + nome */}
                <div className="flex flex-col items-center gap-3">
                  <div className="size-12 rounded-full bg-[#EB0033] flex items-center justify-center text-white text-[18px] font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                    {selectedClient.split(" ")[0][0]}{selectedClient.split(" ")[1]?.[0] || ""}
                  </div>
                  <span className="text-[18px] font-medium text-[#141414] leading-6" style={{ fontFamily: "var(--font-inter)" }}>{selectedClient}</span>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {profile.tags.map((tag) => (
                      <span key={tag} style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Comportamento */}
                <div>
                  <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Comportamento</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {[
                      { label: "Frequência", value: profile.frequencia },
                      { label: "Horário preferido", value: profile.horario },
                      { label: "Faixa de ticket", value: profile.ticket },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="paragraph-p2-14-regular text-[#666666]">{item.label}</span>
                        <span className="paragraph-p2-14-medium text-[#141414]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Onde ele te encontra */}
                <div>
                  <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Onde ele te encontra</span>
                  <div className="flex gap-2 mt-2">
                    {profile.canais.map((canal) => (
                      <span key={canal} style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: canal === "Delivery" ? "var(--marca)" : "var(--text-secundario)", backgroundColor: canal === "Delivery" ? "rgba(235,0,51,0.08)" : "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "4px 12px" }}>{canal}</span>
                    ))}
                  </div>
                </div>

                {/* Canais e permissões */}
                <div>
                  <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Canais e permissões</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {[
                      { label: "WhatsApp habilitado", value: profile.whatsapp ? "Sim" : "Não", ok: profile.whatsapp },
                      { label: "Comunicação 1:1 no iFood", value: profile.comunicacao ? "Habilitada" : "Não habilitada", ok: profile.comunicacao },
                      { label: "Aniversário", value: profile.aniversario, ok: profile.aniversario !== "não informado" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="paragraph-p2-14-regular text-[#666666]">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="paragraph-p2-14-medium text-[#141414]">{item.value}</span>
                          <div className={`size-2 rounded-full ${item.ok ? "bg-[#1FAD68]" : "bg-[#A3A3A3]"}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-[#EBEBEB] p-4 flex gap-2">
                <button type="button" style={{ flex: 1, backgroundColor: "var(--invertido)", color: "#ffffff", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)" }}>Enviar oferta</button>
                <button type="button" style={{ flex: 1, border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Ver histórico</button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}