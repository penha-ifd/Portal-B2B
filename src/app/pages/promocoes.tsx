import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { usePlano } from "../state/plano-context";
import { ImageWithFallback } from "../components/image-with-fallback";
import megaphone from "../../imports/Web1350X690/d2104b50070a7f32609c2aaa0f48eeb0ae175fb0.png";
import { CriarPromocaoDrawer } from "../components/home/CriarPromocaoDrawer";
import { DesempenhoTab } from "./DesempenhoTab";

const PLANO_INFO: Record<string, string> = {
  essencial: "Plano Essencial · módulos básicos",
  profissional: "Plano Profissional · todos os módulos",
  premium: "Plano Premium · todos os módulos",
};

interface Campanha {
  nome: string;
  status: "Ativo" | "Pausado" | "Encerrado";
  publicoAlvo: string;
  acesso: string;
  objetivo: string;
  subsidio: string;
  dataInicio: string;
  dataFim: string;
  qrcode: string | null;
}

const CAMPANHAS: Campanha[] = [
  { nome: "5% de Cashback", status: "Ativo", publicoAlvo: "Novos clientes", acesso: "App iFood", objetivo: "Atrair clientes", subsidio: "Restaurante", dataInicio: "22/01/25", dataFim: "22/01/25", qrcode: null },
  { nome: "Cupom de R$ 50,00", status: "Ativo", publicoAlvo: "Novos clientes", acesso: "Salão", objetivo: "Atrair clientes", subsidio: "Restaurante", dataInicio: "22/01/25", dataFim: "22/01/25", qrcode: null },
  { nome: "10% de Cashback", status: "Ativo", publicoAlvo: "Novos clientes", acesso: "App iFood", objetivo: "Atrair clientes", subsidio: "Restaurante", dataInicio: "22/01/25", dataFim: "22/01/25", qrcode: "Baixar QRCode" },
  { nome: "8% de Cashback", status: "Ativo", publicoAlvo: "Novos clientes", acesso: "App iFood", objetivo: "Atrair clientes", subsidio: "Restaurante", dataInicio: "22/01/25", dataFim: "22/01/25", qrcode: null },
];

const STATUS_STYLE: Record<string, { bg: string; color: string; dot: string }> = {
  Ativo: { bg: "rgba(31,173,104,0.10)", color: "#007A3F", dot: "#1FAD68" },
  Pausado: { bg: "rgba(255,195,71,0.15)", color: "#B45309", dot: "#FFC347" },
  Encerrado: { bg: "rgba(163,163,163,0.15)", color: "#666666", dot: "#A3A3A3" },
};

export function PromocoesPage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();
  const isBase = planoAtivo === "novo";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [tab, setTab] = useState<"ativas" | "desempenho">("ativas");
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const toggleSort = (col: string) => {
    if (sortCol === col) { setSortDir(sortDir === "asc" ? "desc" : "asc"); }
    else { setSortCol(col); setSortDir("asc"); }
  };

  function handleCriarPromocao() { setDrawerOpen(true); }
  function handleDrawerClose() {
    setDrawerOpen(false);
    setSnackbar(true);
    setTimeout(() => setSnackbar(false), 4000);
  }

  return (
    <div className="relative">
      <div className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200" style={{ backgroundColor: "#ffffff" }}>
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className="ifdl-icon-filled ifdl-icon-promotion text-white" style={{ fontSize: "12px" }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: isBase ? "var(--text-primario)" : "#141414" }}>Promoções</span>
        <div className="flex items-center gap-3 ml-auto">
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: isBase ? "var(--text-primario)" : "var(--text-secundario)" }}>
            {isBase ? "Ative um módulo para liberar inteligência e CRM" : PLANO_INFO[planoAtivo] ?? ""}
          </span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: isBase ? "var(--text-primario)" : "var(--marca)", cursor: "pointer" }} onClick={() => navigate("/modulos")}>Mudar assinatura</span>
        </div>
      </div>

      {snackbar && (
        <div className="absolute right-6 top-[60px] z-30 flex items-center gap-2 px-3 py-2.5 rounded-xl border border-[rgba(255,255,255,0.32)]" style={{ backgroundColor: "var(--sucesso)" }}>
          <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span className="paragraph-p2-14-medium text-white">Sua promoção foi criada!</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[#EBEBEB] px-6">
        {(["ativas", "desempenho"] as const).map((t) => (
          <button key={t} type="button" onClick={() => setTab(t)} className={`paragraph-p2-14-medium px-4 py-2.5 transition-colors relative ${tab === t ? "text-[#EB0033]" : "text-[#666666] hover:text-[#141414]"}`}>
            {t === "ativas" ? "Ativas" : "Desempenho"}
            {tab === t && <motion.div layoutId="promo-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB0033] rounded-full" transition={{ type: "spring", stiffness: 500, damping: 30 }} />}
          </button>
        ))}
      </div>

      {tab === "ativas" ? (
        <div className="flex flex-col gap-6 md:gap-10 pt-4 pb-6 px-3 md:px-6">
          <section className="relative overflow-hidden rounded-[16px] bg-[#f5f5f5] p-2">
            <div className="pointer-events-none absolute -top-16 right-24 size-[360px] rounded-full hidden md:block" style={{ background: "radial-gradient(circle at 50% 50%, rgba(247,247,247,0.9), rgba(234,234,234,0.1))", border: "1px solid rgba(239,239,239,0.6)" }} />
            <div className="pointer-events-none absolute top-10 right-[-80px] size-[320px] rounded-full hidden md:block" style={{ background: "radial-gradient(circle at 50% 50%, rgba(247,247,247,0.9), rgba(234,234,234,0.1))", border: "1px solid rgba(239,239,239,0.6)" }} />
            <div className="hidden md:block absolute left-1 top-1/2 -translate-y-1/2 size-[150px] overflow-hidden rounded-[32px]">
              <ImageWithFallback src={megaphone} alt="Megafone" className="size-full object-cover" />
            </div>
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 md:pl-[172px] px-4 md:pr-6 py-4 md:py-6">
              <div className="flex-1 min-w-0 flex flex-col gap-1">
                <p className="heading-h3-18-medium text-[#141414]">Atraia, fidelize e recupere seus clientes</p>
                <p className="paragraph-p1-16-regular text-[#666]">Monte uma promoção do seu jeito e alavanque seu negócio</p>
              </div>
              <button type="button" onClick={handleCriarPromocao} className="shrink-0 w-full md:w-[248px] flex items-center justify-center rounded-[12px] bg-[#141414] p-3 paragraph-p1-16-medium text-white transition-[transform,box-shadow] duration-150 ease-out hover:scale-[1.02] hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] active:scale-[0.98]">Criar promoção</button>
            </div>
          </section>

          <div className="flex flex-col gap-6 pb-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-[18px] font-medium text-[#141414] leading-6">Resultado por campanhas</h2>
              <p className="paragraph-p2-14-regular text-[#666666]">Listagem de campanhas que a loja está participando e as que já participou</p>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex flex-1 gap-2 items-center flex-wrap">
                <span className="paragraph-p2-14-medium text-[#3E3E3E]">Filtros</span>
                <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Status</option></select>
                <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Tipo de promoção</option></select>
                <div className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 flex items-center justify-between w-[160px] bg-white"><span className="paragraph-p2-14-regular text-[#666666]">Público-alvo</span><svg className="w-4 h-4 text-[#A3A3A3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg></div>
                <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Acesso</option></select>
                <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Período</option></select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="flex items-center justify-between border-b border-[#DCDCDC] pb-2 min-w-[1000px]">
                {["Nome", "Status", "Público-alvo", "Acesso", "Objetivo", "Subsídio", "Data início", "Data fim", "QRCode"].map((h) => (
                  <span key={h} className="flex-1 text-[12px] font-bold text-[#3E3E3E] leading-4 min-w-0" style={{ fontFamily: "var(--font-inter)", cursor: "pointer", userSelect: "none", display: "inline-flex", alignItems: "center", gap: 4 }} onClick={() => toggleSort(h)}>
                    {h}
                    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 0 }}>
                      <span style={{ fontSize: 10, color: sortCol === h && sortDir === "asc" ? "var(--text-primario)" : "var(--text-desabilitado)" }}>&#9650;</span>
                      <span style={{ fontSize: 10, color: sortCol === h && sortDir === "desc" ? "var(--text-primario)" : "var(--text-desabilitado)", marginTop: -2 }}>&#9660;</span>
                    </span>
                  </span>
                ))}
              </div>
              {CAMPANHAS.map((c, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#DCDCDC] py-3 animate-[fadeSlideIn_300ms_ease-out_both]" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="flex-1 flex items-center gap-2 min-w-0 overflow-hidden"><div className="size-6 rounded-lg bg-[#F2F2F2] flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-[#717171]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/></svg></div><span className="text-[16px] text-[#717171] truncate" style={{ fontFamily: "var(--font-inter)" }}>{c.nome}</span></div>
                  <div className="flex-1 min-w-0 flex items-center"><span className="inline-flex items-center gap-1.5 paragraph-p3-12-medium rounded-full px-2.5 py-0.5" style={{ backgroundColor: STATUS_STYLE[c.status].bg, color: STATUS_STYLE[c.status].color }}><span className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: STATUS_STYLE[c.status].dot }} />{c.status}</span></div>
                  <span className="flex-1 paragraph-p2-14-regular text-[#717171] min-w-0">{c.publicoAlvo}</span>
                  <span className="flex-1 paragraph-p2-14-regular text-[#717171] min-w-0">{c.acesso}</span>
                  <span className="flex-1 paragraph-p2-14-regular text-[#717171] min-w-0">{c.objetivo}</span>
                  <span className="flex-1 paragraph-p2-14-regular text-[#717171] min-w-0">{c.subsidio}</span>
                  <span className="flex-1 paragraph-p2-14-regular text-[#717171] min-w-0">{c.dataInicio}</span>
                  <span className="flex-1 paragraph-p2-14-regular text-[#717171] min-w-0">{c.dataFim}</span>
                  <div className="flex-1 min-w-0">{c.qrcode ? <button type="button" className="paragraph-p2-14-medium text-[#141414] border border-[#EBEBEB] rounded-lg px-4 py-2 hover:bg-[#F5F5F5] transition-colors whitespace-nowrap">{c.qrcode}</button> : <span className="paragraph-p2-14-medium text-[#A3A3A3] px-4 py-2">-</span>}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center justify-center">
              <div className="flex gap-2 items-center">
                <select className="h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>10</option></select>
                <span className="text-[16px] text-[#3E3E3E]" style={{ fontFamily: "var(--font-inter)" }}>Itens por página</span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] hover:bg-[#F5F5F5]"><svg className="w-4 h-4 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg></button>
                <button type="button" className="size-8 flex items-center justify-center rounded-lg bg-[#EB0033] text-white text-sm">1</button>
                <button type="button" className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] hover:bg-[#F5F5F5]"><svg className="w-4 h-4 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg></button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <DesempenhoTab />
      )}

      <CriarPromocaoDrawer open={drawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}