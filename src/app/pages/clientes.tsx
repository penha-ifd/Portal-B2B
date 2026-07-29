import { useState } from "react";
import { useNavigate } from "react-router";
import { SegmentosTab } from "./SegmentosTab";

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

  const clientesFiltrados = perfilFilter
    ? CLIENTES.filter((c) => c.perfil === perfilFilter)
    : CLIENTES;

  return (
    <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-[24px] font-medium text-[#141414] leading-[32px]">Comer Fora</h1>
        <p className="paragraph-p2-14-regular text-[#666666]">Confira informações do seu perfil, promoções e clientes do seu salão</p>
      </div>

      <div style={{ borderRadius: "var(--radius-12)", border: "1px solid var(--atencao)", padding: "var(--spacing-16)", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "transparent" }}>
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
            <button type="button" className="paragraph-p2-14-medium text-[#141414] border border-[#EBEBEB] rounded-xl px-4 py-2 bg-white hover:bg-[#F5F5F5] transition-colors shrink-0">Agendar disparo</button>
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

            <div className="overflow-x-auto">
              <div className="flex items-center justify-between border-b border-[#DCDCDC] py-2 min-w-[900px]">
                {["Nome", "Telefone", "Status", "Perfil", "Origem", "Total de visitas", "Primeira visita", "Última visita"].map((h) => (
                  <span key={h} className="flex-1 min-w-0 text-[12px] font-bold text-[#3E3E3E] leading-4" style={{ fontFamily: "var(--font-inter)" }}>{h}</span>
                ))}
              </div>
              {clientesFiltrados.map((c, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#DCDCDC] py-2 h-12">
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.nome}</span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.telefone}</span>
                  <span className="flex-1 min-w-0">
                    <span className={`inline-block paragraph-p3-12-medium rounded-full px-2.5 py-0.5 ${c.status === "Ativo" ? "text-[#1FAD68] bg-[rgba(31,173,104,0.10)]" : "text-[#A3A3A3] bg-[#F5F5F5]"}`}>{c.status}</span>
                  </span>
                  <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#666666]">{c.perfil}</span>
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
    </div>
  );
}