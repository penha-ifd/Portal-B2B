import React, { useState, useEffect, useRef } from 'react';

// ── dados mock ──────────────────────────────────────────────────────────────

const REVIEWS = [
  { id: 1, fonte: "google" as const, estrelas: 5, nome: "Maria S.", data: "2026-07-28", texto: "Comida maravilhosa, o prato do dia estava perfeito. Atendimento super atencioso, voltarei com certeza!", respondida: false, temas: ["Comida", "Atendimento"] },
  { id: 2, fonte: "ifood" as const, estrelas: 4, nome: "João P.", data: "2026-07-27", texto: "Gostei bastante, mas demorou um pouco pra chegar. Comida estava quente ainda.", respondida: true, resposta: "Olá João, obrigado pelo feedback! Estamos trabalhando para melhorar nosso tempo de entrega.", temas: ["Comida", "Espera"] },
  { id: 3, fonte: "google" as const, estrelas: 2, nome: "Ana L.", data: "2026-07-25", texto: "Atendimento deixou a desejar, garçom demorou 20min pra trazer o cardápio. Comida ok mas nada especial pelo preço.", respondida: false, temas: ["Atendimento", "Espera", "Preço"] },
  { id: 4, fonte: "ifood" as const, estrelas: 5, nome: "Carlos M.", data: "2026-07-24", texto: "Melhor hambúrguer da região! Sempre peço aqui.", respondida: true, resposta: "Valeu Carlos! Fica de olho nas novidades do cardápio.", temas: ["Comida"] },
  { id: 5, fonte: "google" as const, estrelas: 3, nome: "Fernanda R.", data: "2026-07-23", texto: "Ambiente bonito mas achei caro pelo que oferece. Porções poderiam ser maiores.", respondida: false, temas: ["Ambiente", "Preço"] },
  { id: 6, fonte: "ifood" as const, estrelas: 1, nome: "Ricardo T.", data: "2026-07-22", texto: "Pedido veio errado e frio. Terceira vez que acontece. Inaceitável.", respondida: false, temas: ["Comida", "Atendimento"] },
  { id: 7, fonte: "google" as const, estrelas: 5, nome: "Patrícia G.", data: "2026-07-21", texto: "Lugar incrível pra um jantar a dois. Carta de vinhos excelente e atendimento impecável.", respondida: true, resposta: "Obrigada Patrícia! Temos novidades na carta, volte logo!", temas: ["Ambiente", "Atendimento"] },
  { id: 8, fonte: "ifood" as const, estrelas: 4, nome: "Bruno A.", data: "2026-07-20", texto: "Boa opção no bairro. Entrega rápida e comida saborosa.", respondida: false, temas: ["Comida"] },
];

const DISTRIBUICAO = [
  { estrelas: 5, pct: 62 },
  { estrelas: 4, pct: 24 },
  { estrelas: 3, pct: 8 },
  { estrelas: 2, pct: 4 },
  { estrelas: 1, pct: 2 },
];

const TEMAS = [
  { nome: "Comida", sentimento: "positivo" as const, count: 38 },
  { nome: "Ambiente", sentimento: "positivo" as const, count: 24 },
  { nome: "Atendimento", sentimento: "neutro" as const, count: 19 },
  { nome: "Preço", sentimento: "negativo" as const, count: 12 },
  { nome: "Espera", sentimento: "negativo" as const, count: 9 },
];

// ── estilos compartilhados ──────────────────────────────────────────────────

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

// ── helpers ─────────────────────────────────────────────────────────────────

function diasAtras(dataStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dataStr).getTime()) / 86400000);
  if (diff === 0) return "hoje";
  if (diff === 1) return "ontem";
  return `há ${diff} dias`;
}

function renderEstrelas(n: number): string {
  return "★".repeat(n) + "☆".repeat(5 - n);
}

// ── componente principal ────────────────────────────────────────────────────

type FiltroTab = "todas" | "pendentes" | "respondidas";
type FiltroFonte = "todas" | "ifood" | "google";

export default function AvaliacoesPage() {
  const [filtroTab, setFiltroTab] = useState<FiltroTab>("todas");
  const [filtroFonte, setFiltroFonte] = useState<FiltroFonte>("todas");

  const reviewsFiltradas = REVIEWS.filter(r => {
    if (filtroTab === "pendentes" && r.respondida) return false;
    if (filtroTab === "respondidas" && !r.respondida) return false;
    if (filtroFonte !== "todas" && r.fonte !== filtroFonte) return false;
    return true;
  });

  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-store text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>Avaliações</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Acompanhe a percepção dos clientes e responda avaliações.</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col p-6" style={{ gap: 'var(--spacing-24)', animation: 'fadeSlideIn 400ms ease-out both' }}>

      {/* ── KPIs ─────────────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--spacing-16)" }}>
        <KpiCard label="Nota média" valor="4.6" sufixo="★" delta="+0.2" />
        <KpiCard label="Total de reviews" valor="347" delta="+23" />
        <KpiCard label="Pendentes" valor="12" alerta />
        <KpiCard label="Taxa de resposta" valor="87" sufixo="%" />
      </div>

      {/* ── Nota por fonte + Distribuição ─────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-16)" }}>

        {/* Nota por fonte */}
        <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
          <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-16)", display: "block" }}>Nota por fonte</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-12)" }}>
            <FonteRow fonte="iFood" nota={4.7} total={198} cor="var(--marca)" />
            <FonteRow fonte="Google" nota={4.4} total={149} cor="var(--atencao)" />
          </div>
          {/* Mini gráfico simplificado */}
          <div style={{ marginTop: "var(--spacing-16)", height: 60, display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[4.3, 4.4, 4.5, 4.4, 4.6, 4.5, 4.6, 4.7, 4.6, 4.5, 4.6, 4.7].map((v, i) => (
              <div key={i} style={{ flex: 1, background: "var(--marca)", borderRadius: 2, height: `${((v - 4.0) / 1.0) * 100}%`, opacity: 0.3 + (i / 12) * 0.7 }} />
            ))}
          </div>
          <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", marginTop: "var(--spacing-4)", display: "block" }}>Tendência últimos 30 dias</span>
        </div>

        {/* Distribuição por estrela */}
        <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
          <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-16)", display: "block" }}>Distribuição por estrela</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-8)" }}>
            {DISTRIBUICAO.map(d => (
              <div key={d.estrelas} style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
                <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", width: 24, textAlign: "right" }}>{d.estrelas}★</span>
                <div style={{ flex: 1, height: 8, background: "var(--bg-secundario)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${d.pct}%`, height: "100%", background: d.estrelas >= 4 ? "var(--sucesso)" : d.estrelas === 3 ? "var(--atencao)" : "var(--marca)", borderRadius: 4, transition: "width 600ms ease-out" }} />
                </div>
                <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", width: 32 }}>{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Temas mais mencionados ────────────────────────────────── */}
      <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
        <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-12)", display: "block" }}>Temas mais mencionados</span>
        <div style={{ display: "flex", gap: "var(--spacing-8)", flexWrap: "wrap" }}>
          {TEMAS.map(t => (
            <span key={t.nome} style={{
              ...fontBase,
              display: "inline-flex", alignItems: "center", gap: 4,
              fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)",
              padding: "4px 12px", borderRadius: "var(--radius-pill)",
              color: t.sentimento === "positivo" ? "var(--sucesso)" : t.sentimento === "negativo" ? "var(--marca)" : "var(--text-secundario)",
              backgroundColor: t.sentimento === "positivo" ? "rgba(31,173,104,0.10)" : t.sentimento === "negativo" ? "rgba(235,0,51,0.08)" : "var(--bg-secundario)",
            }}>
              {t.nome} ({t.count}) {t.sentimento === "positivo" ? "↑" : t.sentimento === "negativo" ? "↓" : ""}
            </span>
          ))}
        </div>
      </div>

      {/* ── Insight AI da semana ─────────────────────────────────── */}
      <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", borderLeft: "3px solid var(--marca)", padding: "var(--spacing-16)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)", marginBottom: "var(--spacing-8)" }}>
          <span style={{ fontSize: "16px" }}>✦</span>
          <span style={{ ...fontBase, display: "inline-block", fontSize: "var(--font-size-11)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>Gerado por IA · esta semana</span>
        </div>
        <span style={{ ...fontBase, display: "block", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-8)" }}>Insight das avaliações</span>
        <span style={{ ...fontBase, display: "block", fontSize: "var(--font-size-14)", color: "var(--text-primario)", lineHeight: "20px" }}>3 dos 5 reviews negativos desta semana mencionam <strong>tempo de espera no atendimento</strong>. O problema se concentra no horário de pico (19h–20h30). Restaurantes que redistribuíram garçons nesse turno reduziram reclamações em 40%.</span>
        <button type="button" style={{ ...fontBase, border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontSize: "var(--font-size-12)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>Ver reviews sobre espera</button>
      </div>

      {/* ── Roleta de prêmios (gamificação) ─────────────────────── */}
      <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--spacing-12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
            <span style={{ fontSize: "20px" }}>🎡</span>
            <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>Roleta de prêmios</span>
            <span style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>Novo</span>
          </div>
          <div style={{ width: 36, height: 20, borderRadius: "var(--radius-pill)", backgroundColor: "var(--sucesso)", position: "relative", cursor: "pointer" }}>
            <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "#ffffff", position: "absolute", top: 2, right: 2, transition: "all 150ms ease" }} />
          </div>
        </div>
        <span style={{ ...fontBase, display: "block", fontSize: "var(--font-size-13)", color: "var(--text-secundario)", marginBottom: "var(--spacing-12)", lineHeight: "18px" }}>
          Clientes que deixam um review ganham uma chance na roleta de prêmios. Incentiva avaliações e aumenta engajamento.
        </span>
        <div style={{ display: "flex", gap: "var(--spacing-16)", marginBottom: "var(--spacing-12)" }}>
          <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>47 participações este mês</span>
          <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--sucesso)", fontWeight: "var(--font-weight-medium)" }}>12 prêmios entregues</span>
        </div>
        <div style={{ display: "flex", gap: "var(--spacing-8)", flexWrap: "wrap" }}>
          {["Sobremesa grátis", "10% na próxima", "Drink cortesia"].map(premio => (
            <span key={premio} style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-pill)", padding: "4px 10px" }}>
              {premio}
            </span>
          ))}
        </div>
      </div>

      {/* ── Feed de reviews ───────────────────────────────────────── */}
      <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", overflow: "hidden" }}>

        {/* Filtros */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--spacing-16)", borderBottom: "1px solid var(--borda)" }}>
          <div style={{ display: "flex", gap: "var(--spacing-4)" }}>
            {(["todas", "pendentes", "respondidas"] as FiltroTab[]).map(tab => (
              <button key={tab} onClick={() => setFiltroTab(tab)} style={{
                ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)",
                padding: "6px 12px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
                background: filtroTab === tab ? "var(--invertido)" : "var(--bg-secundario)",
                color: filtroTab === tab ? "#ffffff" : "var(--text-secundario)",
                transition: "all 150ms ease",
              }}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "var(--spacing-4)" }}>
            {(["todas", "ifood", "google"] as FiltroFonte[]).map(f => (
              <button key={f} onClick={() => setFiltroFonte(f)} style={{
                ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                padding: "4px 10px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
                background: filtroFonte === f ? (f === "ifood" ? "rgba(235,0,51,0.08)" : f === "google" ? "rgba(255,195,71,0.15)" : "var(--bg-terciario)") : "var(--bg-secundario)",
                color: filtroFonte === f ? (f === "ifood" ? "var(--marca)" : f === "google" ? "#F57C00" : "var(--text-primario)") : "var(--text-desabilitado)",
                transition: "all 150ms ease",
              }}>
                {f === "todas" ? "Todas" : f === "ifood" ? "iFood" : "Google"}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de reviews */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {reviewsFiltradas.map((r, i) => (
            <div key={r.id} style={{
              padding: "var(--spacing-16)",
              borderBottom: i < reviewsFiltradas.length - 1 ? "1px solid var(--borda)" : "none",
              animation: `fadeSlideIn 300ms ease-out ${i * 50}ms both`,
            }}>
              {/* Header do review */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)", marginBottom: "var(--spacing-8)" }}>
                <span style={{
                  ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                  padding: "2px 8px", borderRadius: "var(--radius-pill)",
                  color: r.fonte === "ifood" ? "var(--marca)" : "#F57C00",
                  backgroundColor: r.fonte === "ifood" ? "rgba(235,0,51,0.08)" : "rgba(255,195,71,0.15)",
                }}>
                  {r.fonte === "ifood" ? "iFood" : "Google"}
                </span>
                <span style={{ ...fontBase, fontSize: "var(--font-size-14)", color: r.estrelas <= 2 ? "var(--marca)" : "var(--atencao)", letterSpacing: "1px" }}>
                  {renderEstrelas(r.estrelas)}
                </span>
                <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>{r.nome}</span>
                <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", marginLeft: "auto" }}>{diasAtras(r.data)}</span>
                {r.estrelas <= 2 && !r.respondida && (
                  <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--marca)", fontWeight: "var(--font-weight-medium)" }}>Atenção</span>
                )}
              </div>
              {/* Texto do review */}
              <p style={{ ...fontBase, fontSize: "var(--font-size-14)", color: "var(--text-secundario)", margin: 0, lineHeight: "20px" }}>
                {r.texto}
              </p>
              {/* Tags de tema */}
              {r.temas && r.temas.length > 0 && (
                <div style={{ display: "flex", gap: "var(--spacing-4)", flexWrap: "wrap", marginTop: "var(--spacing-8)" }}>
                  {r.temas.map(tema => {
                    const temaData = TEMAS.find(t => t.nome === tema);
                    const sentimento = temaData?.sentimento || "neutro";
                    return (
                      <span key={tema} style={{
                        ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                        padding: "2px 8px", borderRadius: "var(--radius-pill)",
                        color: sentimento === "positivo" ? "var(--sucesso)" : sentimento === "negativo" ? "var(--marca)" : "var(--text-secundario)",
                        backgroundColor: sentimento === "positivo" ? "rgba(31,173,104,0.10)" : sentimento === "negativo" ? "rgba(235,0,51,0.08)" : "var(--bg-secundario)",
                      }}>
                        {tema}
                      </span>
                    );
                  })}
                </div>
              )}
              {/* Resposta existente */}
              {r.respondida && r.resposta && (
                <div style={{ marginTop: "var(--spacing-8)", paddingLeft: "var(--spacing-12)", borderLeft: "2px solid var(--borda)" }}>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", fontStyle: "italic" }}>
                    {r.resposta}
                  </span>
                </div>
              )}
              {/* Ação */}
              <div style={{ marginTop: "var(--spacing-8)", display: "flex", alignItems: "center" }}>
                {r.respondida ? (
                  <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--sucesso)", fontWeight: "var(--font-weight-medium)" }}>
                    Respondida
                  </span>
                ) : (
                  <button style={{
                    ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)",
                    color: "var(--marca)", background: "none", border: "1px solid var(--marca)",
                    borderRadius: "var(--radius-pill)", padding: "4px 12px", cursor: "pointer",
                    transition: "all 150ms ease",
                  }}>
                    Responder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

// ── sub-componentes ─────────────────────────────────────────────────────────

function KpiCard({ label, valor, sufixo, delta, alerta }: { label: string; valor: string; sufixo?: string; delta?: string; alerta?: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseFloat(valor);
  const decimals = valor.includes(".") ? valor.split(".")[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.disconnect();
        const start = performance.now();
        const dur = 700;
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          setDisplay(target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const formatted = decimals > 0
    ? display.toFixed(decimals).replace(".", ",")
    : Math.round(display).toLocaleString("pt-BR");

  return (
    <div style={{
      background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)",
      padding: "var(--spacing-16)", display: "flex", flexDirection: "column", gap: 4,
    }}>
      <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span ref={ref} style={{ ...fontBase, fontSize: "var(--font-size-24)", fontWeight: "var(--font-weight-medium)", color: alerta ? "var(--marca)" : "var(--text-primario)", fontVariantNumeric: "tabular-nums" }}>
          {formatted}
        </span>
        {sufixo && <span style={{ ...fontBase, fontSize: "var(--font-size-14)", color: "var(--text-desabilitado)" }}>{sufixo}</span>}
      </div>
      {delta && (
        <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--sucesso)" }}>
          {delta} vs. período anterior
        </span>
      )}
    </div>
  );
}

function FonteRow({ fonte, nota, total, cor }: { fonte: string; nota: number; total: number; cor: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-12)" }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: cor }} />
      <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", flex: 1 }}>{fonte}</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-18)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>{nota}</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)" }}>{total} reviews</span>
    </div>
  );
}
