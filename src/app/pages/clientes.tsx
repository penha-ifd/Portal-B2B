import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { usePlano } from "../state/plano-context";
import { SegmentosTab } from "./SegmentosTab";

function useCountUp(target: string) {
  const num = parseInt(target.replace(/\./g, ''), 10);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 800;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(eased * num));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);
  const formatted = current.toLocaleString('pt-BR');
  return { ref, formatted };
}

function AnimatedMetricValue({ value }: { value: string }) {
  const { ref, formatted } = useCountUp(value);
  return <span ref={ref} className="text-[18px] font-medium text-[#141414] leading-6">{formatted}</span>;
}

interface ClienteProfile {
  tags: string[];
  frequencia: string;
  horario: string;
  ticket: string;
  canais: string[];
  whatsapp: boolean;
  comunicacao: boolean;
  aniversario: string;
  culinariaFavorita: string;
  itensRecorrentes: string[];
  diaSemana: string;
  sensibilidadeTaxa: 'baixa' | 'media' | 'alta';
  sensibilidadeVoucher: 'baixa' | 'media' | 'alta';
  propensaoPromoBomb: 'baixa' | 'media' | 'alta';
  potencialCompra: 'standard' | 'premium' | 'ultra-premium';
  jornadaUsuario: string;
  afinidadeMerchant: number;
  reviewsMedia: number | null;
  reviewsCount: number;
}

const CLIENTE_PROFILE: Record<string, ClienteProfile> = {
  "Clara L.": { tags: ["Alta frequência", "Jantar", "Vem acompanhado", "Ticket alto"], frequencia: "alta", horario: "jantar", ticket: "acima da média do salão", canais: ["Delivery", "Salão"], whatsapp: true, comunicacao: true, aniversario: "14 de março", culinariaFavorita: "Italiana", itensRecorrentes: ["Margherita", "Tiramisu", "Bruschetta"], diaSemana: "Sexta e Sábado", sensibilidadeTaxa: "baixa", sensibilidadeVoucher: "baixa", propensaoPromoBomb: "baixa", potencialCompra: "ultra-premium", jornadaUsuario: "Leal", afinidadeMerchant: 92, reviewsMedia: 4.8, reviewsCount: 6 },
  "Luiza V.": { tags: ["Baixa frequência", "Almoço"], frequencia: "baixa", horario: "almoço", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: false, aniversario: "não informado", culinariaFavorita: "Brasileira", itensRecorrentes: ["Feijoada", "Coxinha"], diaSemana: "Domingo", sensibilidadeTaxa: "alta", sensibilidadeVoucher: "alta", propensaoPromoBomb: "alta", potencialCompra: "standard", jornadaUsuario: "Explorador", afinidadeMerchant: 28, reviewsMedia: null, reviewsCount: 0 },
  "Julia A.": { tags: ["Média frequência", "Jantar", "Ticket alto"], frequencia: "média", horario: "jantar", ticket: "acima da média do salão", canais: ["Salão"], whatsapp: true, comunicacao: true, aniversario: "22 de agosto", culinariaFavorita: "Japonesa", itensRecorrentes: ["Sashimi", "Temaki", "Edamame"], diaSemana: "Quinta e Sexta", sensibilidadeTaxa: "baixa", sensibilidadeVoucher: "media", propensaoPromoBomb: "media", potencialCompra: "premium", jornadaUsuario: "Habitual", afinidadeMerchant: 74, reviewsMedia: 4.5, reviewsCount: 3 },
  "Duilio B.": { tags: ["Média frequência", "Almoço"], frequencia: "média", horario: "almoço", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: true, aniversario: "não informado", culinariaFavorita: "Italiana", itensRecorrentes: ["Pizza Pepperoni", "Calzone"], diaSemana: "Segunda a Quarta", sensibilidadeTaxa: "media", sensibilidadeVoucher: "alta", propensaoPromoBomb: "alta", potencialCompra: "standard", jornadaUsuario: "Habitual", afinidadeMerchant: 55, reviewsMedia: 3.5, reviewsCount: 2 },
  "Ivia M.": { tags: ["Alta frequência", "Jantar", "Vem acompanhado", "Ticket alto"], frequencia: "alta", horario: "jantar", ticket: "acima da média do salão", canais: ["Delivery", "Salão"], whatsapp: true, comunicacao: true, aniversario: "5 de novembro", culinariaFavorita: "Francesa", itensRecorrentes: ["Confit de pato", "Crème brûlée", "Ratatouille"], diaSemana: "Sexta e Sábado", sensibilidadeTaxa: "baixa", sensibilidadeVoucher: "baixa", propensaoPromoBomb: "baixa", potencialCompra: "ultra-premium", jornadaUsuario: "Leal", afinidadeMerchant: 97, reviewsMedia: 5.0, reviewsCount: 8 },
  "Leonardo K.": { tags: ["Alta frequência", "Jantar", "Ticket alto"], frequencia: "alta", horario: "jantar", ticket: "acima da média do salão", canais: ["Salão"], whatsapp: true, comunicacao: false, aniversario: "não informado", culinariaFavorita: "Japonesa", itensRecorrentes: ["Omakase", "Sake"], diaSemana: "Quinta a Sábado", sensibilidadeTaxa: "baixa", sensibilidadeVoucher: "baixa", propensaoPromoBomb: "media", potencialCompra: "premium", jornadaUsuario: "Leal", afinidadeMerchant: 85, reviewsMedia: 4.2, reviewsCount: 4 },
  "Stefany R.": { tags: ["Média frequência", "Almoço", "Vem acompanhado"], frequencia: "média", horario: "almoço", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: true, aniversario: "30 de janeiro", culinariaFavorita: "Mexicana", itensRecorrentes: ["Burrito", "Guacamole", "Nachos"], diaSemana: "Sábado e Domingo", sensibilidadeTaxa: "media", sensibilidadeVoucher: "alta", propensaoPromoBomb: "alta", potencialCompra: "standard", jornadaUsuario: "Explorador", afinidadeMerchant: 42, reviewsMedia: 4.0, reviewsCount: 1 },
  "Paulo M.": { tags: ["Baixa frequência", "Almoço"], frequencia: "baixa", horario: "almoço", ticket: "abaixo da média", canais: ["Salão"], whatsapp: false, comunicacao: false, aniversario: "não informado", culinariaFavorita: "Brasileira", itensRecorrentes: ["PF executivo"], diaSemana: "Segunda a Sexta", sensibilidadeTaxa: "alta", sensibilidadeVoucher: "media", propensaoPromoBomb: "media", potencialCompra: "standard", jornadaUsuario: "Dormindo", afinidadeMerchant: 15, reviewsMedia: null, reviewsCount: 0 },
  "Leonardo S.": { tags: ["Baixa frequência", "Jantar"], frequencia: "baixa", horario: "jantar", ticket: "na média do salão", canais: ["Delivery"], whatsapp: false, comunicacao: false, aniversario: "não informado", culinariaFavorita: "Italiana", itensRecorrentes: ["Lasanha", "Cannoli"], diaSemana: "Sexta", sensibilidadeTaxa: "media", sensibilidadeVoucher: "alta", propensaoPromoBomb: "alta", potencialCompra: "standard", jornadaUsuario: "Dormindo", afinidadeMerchant: 20, reviewsMedia: 3.0, reviewsCount: 1 },
  "Felipe P.": { tags: ["Baixa frequência", "Almoço"], frequencia: "baixa", horario: "almoço", ticket: "abaixo da média", canais: ["Salão"], whatsapp: false, comunicacao: false, aniversario: "não informado", culinariaFavorita: "Árabe", itensRecorrentes: ["Esfiha", "Kafta"], diaSemana: "Quarta", sensibilidadeTaxa: "alta", sensibilidadeVoucher: "media", propensaoPromoBomb: "baixa", potencialCompra: "standard", jornadaUsuario: "Explorador", afinidadeMerchant: 30, reviewsMedia: null, reviewsCount: 0 },
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

const PLANO_INFO: Record<string, string> = {
  essencial: "Plano Essencial · módulos básicos",
  profissional: "Plano Profissional · todos os módulos",
  premium: "Plano Premium · todos os módulos",
};

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
  const [voucherFilter, setVoucherFilter] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const { planoAtivo } = usePlano();
  const isBase = planoAtivo === "novo";

  const toggleSort = (col: string) => {
    if (sortCol === col) { setSortDir(sortDir === "asc" ? "desc" : "asc"); }
    else { setSortCol(col); setSortDir("asc"); }
  };

  const clientesFiltrados = CLIENTES.filter((c) => {
    if (perfilFilter && c.perfil !== perfilFilter) return false;
    if (origemFilter && c.origem !== origemFilter) return false;
    if (voucherFilter) {
      const profile = CLIENTE_PROFILE[c.nome];
      if (!profile || profile.sensibilidadeVoucher !== voucherFilter) return false;
    }
    return true;
  });

  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className="ifdl-icon-filled ifdl-icon-2-people text-white" style={{ fontSize: "16px" }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>Clientes</h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>Conheça seu público, segmente e ative campanhas personalizadas.</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex gap-1 border-b border-[#EBEBEB]">
          {["Pessoas", "Segmentos"].map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`paragraph-p2-14-medium px-4 py-2.5 transition-colors relative ${activeTab === tab ? "text-[#EB0033]" : "text-[#666666] hover:text-[#141414]"}`}>
              {tab}
              {activeTab === tab && <motion.div layoutId="clientes-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB0033] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 30 }} />}
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
                  <AnimatedMetricValue value={m.value} />
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

            <div className="flex flex-wrap gap-2">
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", display: "flex", alignItems: "center" }}>Voucher:</span>
              {(["baixa", "media", "alta"] as const).map((v) => (
                <button key={v} type="button" onClick={() => setVoucherFilter(voucherFilter === v ? null : v)} style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 12px", backgroundColor: voucherFilter === v ? "var(--invertido)" : "transparent", color: voucherFilter === v ? "#ffffff" : "var(--text-secundario)", cursor: "pointer" }}>{v === "baixa" ? "Baixa" : v === "media" ? "Média" : "Alta"}</button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <div className="flex items-center border-b border-[#DCDCDC] py-2 min-w-[900px]" style={{ gap: 8 }}>
                {[
                  { key: "Nome", flex: 2.5 },
                  { key: "Perfil", flex: 0.8 },
                  { key: "Jornada", flex: 0.9 },
                  { key: "Afinidade", flex: 1 },
                  { key: "Visitas", flex: 0.6 },
                  { key: "Última visita", flex: 1 },
                  { key: "Origem", flex: 0.8 },
                ].map((h) => (
                  <span key={h.key} className="min-w-0 text-[12px] font-bold text-[#3E3E3E] leading-4" style={{ fontFamily: "var(--font-inter)", cursor: "pointer", userSelect: "none", display: "inline-flex", alignItems: "center", gap: 4, flex: h.flex }} onClick={() => toggleSort(h.key)}>
                    {h.key}
                    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 0 }}>
                      <span style={{ fontSize: 10, color: sortCol === h.key && sortDir === "asc" ? "var(--text-primario)" : "var(--text-desabilitado)" }}>&#9650;</span>
                      <span style={{ fontSize: 10, color: sortCol === h.key && sortDir === "desc" ? "var(--text-primario)" : "var(--text-desabilitado)", marginTop: -2 }}>&#9660;</span>
                    </span>
                  </span>
                ))}
              </div>
              {clientesFiltrados.map((c, i) => {
                const profile = CLIENTE_PROFILE[c.nome];
                const voucherLabel = profile ? (profile.sensibilidadeVoucher === "alta" ? "Adora cupom" : profile.sensibilidadeVoucher === "baixa" ? "Ignora cupom" : null) : null;
                const potencialLabel = profile && (profile.potencialCompra === "premium" || profile.potencialCompra === "ultra-premium") ? "Alto ticket" : null;
                return (
                <div key={i} onClick={() => setSelectedClient(c.nome)} className="flex items-center border-b border-[#DCDCDC] py-2 min-h-12 cursor-pointer hover:bg-[#F5F5F5] transition-colors animate-[fadeSlideIn_300ms_ease-out_both]" style={{ gap: 8, animationDelay: `${i * 50}ms` }}>
                  <span className="min-w-0 flex flex-col gap-0.5" style={{ flex: 2.5 }}>
                    <span className="paragraph-p2-14-regular text-[#666666]">{c.nome}</span>
                    {profile && (
                      <span className="flex gap-1 flex-wrap">
                        <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "1px 6px" }}>{profile.culinariaFavorita}</span>
                        {voucherLabel && <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: profile.sensibilidadeVoucher === "alta" ? "#1FAD68" : "var(--text-secundario)", backgroundColor: profile.sensibilidadeVoucher === "alta" ? "rgba(31,173,104,0.10)" : "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "1px 6px" }}>{voucherLabel}</span>}
                        {potencialLabel && <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--marca)", backgroundColor: "rgba(235,0,51,0.08)", borderRadius: "var(--radius-pill)", padding: "1px 6px" }}>{potencialLabel}</span>}
                        {profile.canais.length > 1 && <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "1px 6px" }}>Cross-channel</span>}
                      </span>
                    )}
                  </span>
                  <span className="min-w-0" style={{ flex: 0.8 }}>
                    <span className="animate-[pillPop_250ms_ease-out_both]" style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: "var(--font-weight-medium)", borderRadius: "var(--radius-pill)", padding: "2px 10px", animationDelay: `${i * 50 + 100}ms`, ...({"VIP":{backgroundColor:"rgba(235,0,51,0.08)",color:"var(--marca)"},"Fiel":{backgroundColor:"rgba(31,173,104,0.10)",color:"#1FAD68"},"Em risco":{backgroundColor:"rgba(255,152,0,0.10)",color:"#F57C00"},"Perdido":{backgroundColor:"#F5F5F5",color:"#A3A3A3"},"Novato":{backgroundColor:"rgba(33,150,243,0.10)",color:"#1E88E5"}}[c.perfil] || {backgroundColor:"#F5F5F5",color:"#666666"}) }}>{c.perfil}</span>
                  </span>
                  <span className="min-w-0" style={{ flex: 0.9 }}>
                    {profile && <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>{profile.jornadaUsuario}</span>}
                  </span>
                  <span className="min-w-0 flex items-center gap-1.5" style={{ flex: 1 }}>
                    {profile && (
                      <>
                        <div style={{ width: 48, height: 6, borderRadius: "var(--radius-pill)", backgroundColor: "var(--bg-terciario)", overflow: "hidden" }}>
                          <div style={{ width: `${profile.afinidadeMerchant}%`, height: "100%", borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)" }} />
                        </div>
                        <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", color: "var(--text-secundario)" }}>{profile.afinidadeMerchant}</span>
                      </>
                    )}
                  </span>
                  <span className="min-w-0 paragraph-p2-14-regular text-[#666666]" style={{ flex: 0.6 }}>{c.visitas}</span>
                  <span className="min-w-0 paragraph-p2-14-regular text-[#666666]" style={{ flex: 1 }}>{c.ultimaVisita}</span>
                  <span className="min-w-0 paragraph-p2-14-regular text-[#666666]" style={{ flex: 0.8 }}>{c.origem}</span>
                </div>
                );
              })}
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
                      <span key={tag} style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>{tag}</span>
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

                {/* Preferências alimentares */}
                <div>
                  <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Preferências alimentares</span>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="paragraph-p2-14-regular text-[#666666]">Culinária favorita</span>
                      <span className="paragraph-p2-14-medium text-[#141414]">{profile.culinariaFavorita}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="paragraph-p2-14-regular text-[#666666]">Itens recorrentes</span>
                      <div className="flex flex-wrap gap-1 justify-end" style={{ maxWidth: "60%" }}>
                        {profile.itensRecorrentes.map((item) => (
                          <span key={item} style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-p2-14-regular text-[#666666]">Dia preferido</span>
                      <span className="paragraph-p2-14-medium text-[#141414]">{profile.diaSemana}</span>
                    </div>
                  </div>
                </div>

                {/* Sensibilidades */}
                <div>
                  <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Sensibilidades</span>
                  <div className="flex flex-col gap-2 mt-2">
                    {([
                      { label: "Taxa de entrega", value: profile.sensibilidadeTaxa },
                      { label: "Voucher", value: profile.sensibilidadeVoucher },
                      { label: "Propensão PromoBomb", value: profile.propensaoPromoBomb },
                    ] as { label: string; value: 'baixa' | 'media' | 'alta' }[]).map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="paragraph-p2-14-regular text-[#666666]">{item.label}</span>
                        <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: "var(--font-weight-medium)", borderRadius: "var(--radius-pill)", padding: "2px 10px", ...(item.value === "baixa" ? { backgroundColor: "rgba(31,173,104,0.10)", color: "#1FAD68" } : item.value === "media" ? { backgroundColor: "rgba(255,152,0,0.10)", color: "#F57C00" } : { backgroundColor: "rgba(235,0,51,0.08)", color: "var(--marca)" }) }}>{item.value === "baixa" ? "Baixa" : item.value === "media" ? "Média" : "Alta"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Potencial e jornada */}
                <div>
                  <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Potencial e jornada</span>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="paragraph-p2-14-regular text-[#666666]">Potencial de compra</span>
                      <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: "var(--font-weight-medium)", borderRadius: "var(--radius-pill)", padding: "2px 10px", ...(profile.potencialCompra === "standard" ? { backgroundColor: "#F5F5F5", color: "#666666" } : profile.potencialCompra === "premium" ? { backgroundColor: "rgba(33,150,243,0.10)", color: "#1E88E5" } : { backgroundColor: "rgba(235,0,51,0.08)", color: "var(--marca)" }) }}>{profile.potencialCompra === "standard" ? "Standard" : profile.potencialCompra === "premium" ? "Premium" : "Ultra-premium"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-p2-14-regular text-[#666666]">Jornada</span>
                      <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: "var(--font-weight-medium)", borderRadius: "var(--radius-pill)", padding: "2px 10px", backgroundColor: "var(--bg-terciario)", color: "var(--text-secundario)" }}>{profile.jornadaUsuario}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="paragraph-p2-14-regular text-[#666666]">Afinidade</span>
                      <div className="flex items-center gap-2">
                        <div style={{ width: 48, height: 6, borderRadius: "var(--radius-pill)", backgroundColor: "var(--bg-terciario)", overflow: "hidden" }}>
                          <div style={{ width: `${profile.afinidadeMerchant}%`, height: "100%", borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)" }} />
                        </div>
                        <span className="paragraph-p2-14-medium text-[#141414]">{profile.afinidadeMerchant}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Avaliações */}
                {profile.reviewsCount > 0 && (
                  <div>
                    <span className="paragraph-p3-12-medium text-[#A3A3A3] uppercase">Avaliações</span>
                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="paragraph-p2-14-regular text-[#666666]">Nota média</span>
                        <span className="paragraph-p2-14-medium text-[#141414]">{"★".repeat(Math.round(profile.reviewsMedia || 0))}{"☆".repeat(5 - Math.round(profile.reviewsMedia || 0))} {profile.reviewsMedia?.toFixed(1)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="paragraph-p2-14-regular text-[#666666]">Total de avaliações</span>
                        <span className="paragraph-p2-14-medium text-[#141414]">{profile.reviewsCount}</span>
                      </div>
                    </div>
                  </div>
                )}

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