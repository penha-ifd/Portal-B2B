export const mockDashboard = {
  periodo: "Últimos 30 dias",
  cupons: { disponibilizados: 400, resgatados: 320, queimados: 285 },
  roi: { investido: 1090.24, retornado: 8976.24 },
  checkins: { confirmados: 285, registrados: 312 },
  ticketMedio: { valor: 43.70, informadoPeloLojista: true, variacaoVsGeral: 0.12 },
  publico: { primeiraVezIfood: 194, jaVieramPeloIfood: 91, voltaramSemCupom: 64 },
  vitrine: { impressoes: 14200 },
  benchmark: { percentil: 80, categoria: "italianos", descontoMedioRegiao: 0.20, descontoProprio: 0.10 },
  narrativa: "Esta semana seus cupons trouxeram 285 clientes confirmados — 91 deles nunca tinham vindo pelo iFood. O ticket médio subiu 12% vs. a média da região. Sua melhor terça desde dezembro.",
  sugestao: { texto: "Restaurantes similares com sobremesa grátis convertem 20% mais no almoço de terça a quinta. Testar no próximo pacote?" },
  causa: {
    faturamento: "R$ 1.090,24 em cashback trouxeram R$ 8.976,24 em vendas",
    checkins: "27 registros ainda sem conferência",
    ticketMedio: "12% acima do público geral do salão",
    voltaramSemCupom: "de 194 que vieram pela primeira vez",
    funil: "35 cupons resgatados não chegaram a ser usados",
    origemPublico: "considera apenas visitas registradas pelo iFood",
    benchmark: "acima da média do bairro em 4 das últimas 5 semanas",
    crossChannel: "no raio de 3 km, últimos 90 dias",
    cardapio: "seus clientes de delivery pedem, seu cardápio do salão não tem",
    avaliacoes: "caiu 0,3 desde a troca do cardápio",
    reservas: "concentrada na sexta à noite",
    pagamento: "conciliado direto no PDV",
  },
  origem: {
    faturamento: "Fixo" as const,
    checkins: "Fixo" as const,
    ticketMedio: "Fixo" as const,
    voltaramSemCupom: "Fixo" as const,
    funil: "Fixo" as const,
    origemPublico: "Fixo" as const,
    benchmark: "Fixo" as const,
    crossChannel: "Cross-channel" as const,
    cardapio: "Cross-channel" as const,
    avaliacoes: "Fixo" as const,
    reservas: "Fixo" as const,
    pagamento: "Fixo" as const,
  },
  acao: {
    faturamento: "Ver por promoção",
    checkins: "Conferir os 27 pendentes",
    ticketMedio: "Comparar com o mês passado",
    voltaramSemCupom: "Criar campanha de retorno",
    funil: "Renovar pacote",
    origemPublico: "Ver quem veio pela primeira vez",
    benchmark: "Ver ofertas da região",
    crossChannel: "Criar campanha de primeira visita",
    cardapio: "Ver quais",
    avaliacoes: "Ver avaliações",
    reservas: "Ajustar política",
    pagamento: "Ver por mesa",
  },
  modulo: {
    crossChannel: "delivery" as const,
    cardapio: "cardapio" as const,
    faturamento: "cupons" as const,
    checkins: "cupons" as const,
    ticketMedio: "cupons" as const,
    voltaramSemCupom: "cupons" as const,
    funil: "cupons" as const,
    origemPublico: "cupons" as const,
    destaqueDoDia: "cupons" as const,
    benchmark: "cupons" as const,
    avaliacoes: "avaliacoes" as const,
    reservas: "reservas" as const,
    pagamento: "pagamento" as const,
  },
  destaqueDoDia: {
    origem: "Sugerido" as const,
    titulo: "Seu pacote acaba em 3 dias",
    valor: "no ritmo atual de resgate",
    causa: "320 cupons resgatados em 24 dias",
    acao: "Renovar agora",
  },
  jaFeito: {
    origem: "Feito" as const,
    titulo: "Pausei a campanha de terça",
    valor: "R$ 340 preservados",
    causa: "4 dias sem nenhuma conversão",
    acao: "Ver o que eu fiz",
  },
  sugestoes: {
    faturamento: ["Qual promoção deu mais retorno", "Comparar com o mês passado"],
    checkins: ["Quais são os 27 pendentes", "Por que não confirmaram"],
    ticketMedio: ["Quem gasta mais", "Comparar com a região"],
    voltaramSemCupom: ["Quem não voltou", "Criar campanha pra eles"],
    funil: ["Por que 35 não usaram", "Quanto tempo até esgotar"],
    origemPublico: ["Quem veio pela primeira vez", "Quantos viraram recorrentes"],
    crossChannel: ["Quem são eles", "O que eles costumam pedir", "Quanto gastam no delivery"],
    cardapio: ["Quais pratos são", "Quanto isso vale por mês"],
  },
  crossChannel: {
    pediramDelivery: 1847,
    nuncaVieramAoSalao: 1847,
    raioKm: 3,
    periodoDias: 90,
  },
  // Cards de módulos não contratados
  avaliacoes: {
    titulo: "Nota média no salão",
    valor: "4,2",
    causa: "caiu 0,3 desde a troca do cardápio",
    acao: "Ver avaliações",
    origem: "Gerado" as const,
    modulo: "avaliacoes" as const,
  },
  reservas: {
    titulo: "Taxa de no-show",
    valor: "12%",
    causa: "concentrada na sexta à noite",
    acao: "Ajustar política",
    origem: "Gerado" as const,
    modulo: "reservas" as const,
  },
  pagamento: {
    titulo: "Faturamento real",
    valor: "R$ 12.318",
    causa: "conciliado direto no PDV",
    acao: "Ver por mesa",
    origem: "Gerado" as const,
    modulo: "pagamento" as const,
  }
};

export const mockDashboardVazio = {
  ...mockDashboard,
  checkins: { confirmados: 0, registrados: 0 },
  publico: { primeiraVezIfood: 0, jaVieramPeloIfood: 0, voltaramSemCupom: 0 },
  cupons: { ...mockDashboard.cupons, resgatados: 0, queimados: 0 },
};

function formatarFaixaFaturamento(confirmados: number, ticket: number): string {
  const base = confirmados * ticket;
  const menor = Math.round(base * 0.95 / 100) * 100;
  const maior = Math.round(base * 1.05 / 100) * 100;

  function formatarMil(valor: number): string {
    const mil = valor / 1000;
    return mil % 1 === 0 ? mil.toFixed(0) : mil.toFixed(1).replace(".", ",");
  }

  return `R$ ${formatarMil(menor)} mil a R$ ${formatarMil(maior)} mil`;
}

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { usePlano } from "../../state/plano-context";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const MOSTRAR_JA_FEITO = true;

interface Props {
  onSubmit?: (text: string) => void;
}

const PLANO_MODULOS: Record<string, string[]> = {
  novo: [],
  base: ["delivery", "cupons"],
  essencial: ["delivery", "cupons", "reservas"],
  avancado: ["delivery", "cupons", "reservas", "pagamento", "avaliacoes"],
};

const MODULO_LABELS: Record<string, string> = {
  reservas: "Reservas",
  pagamento: "Pagamento",
  avaliacoes: "Avaliações",
};

export function DashboardDesempenho({ onSubmit }: Props) {
  const navigate = useNavigate();
  const { planoAtivo, usarVazio } = usePlano();
  const modulosLiberados = PLANO_MODULOS[planoAtivo] ?? PLANO_MODULOS.essencial;
  const [tooltipAberto, setTooltipAberto] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [composerValue, setComposerValue] = useState("");
  const [composerRecording, setComposerRecording] = useState(false);
  const [composerTranscribing, setComposerTranscribing] = useState(false);
  const [composerTimer, setComposerTimer] = useState(0);
  const [composerResponse, setComposerResponse] = useState<string | null>(null);
  const d = mockDashboard;

  const cardLabels: Record<string, string> = {
    faturamento: "Retorno do investimento",
    checkins: "Check-ins confirmados",
    ticketMedio: "Ticket médio",
    voltaramSemCupom: "Voltaram sem cupom",
    funil: "Funil de cupons",
    origemPublico: "Origem do público",
    crossChannel: "Pediram delivery, nunca vieram",
    cardapio: "Pratos do delivery que faltam no salão",
    avaliacoes: "Nota média no salão",
    reservas: "Taxa de no-show",
    pagamento: "Faturamento real",
  };

  function handleCardClick(id: string) {
    setSelectedCard((prev) => (prev === id ? null : id));
  }

  const mockResponses: Record<string, string> = {
    "Como foi meu fim de semana": "Sábado teve 42 check-ins (18% acima da média) com ticket médio de R$ 58. Domingo caiu para 28, concentrados no almoço. Os cupons de sobremesa grátis tiveram 89% de resgate.",
    "Por que a sexta caiu": "Sexta registrou 31 check-ins contra 44 da semana anterior. O principal fator foi a chuva — dias chuvosos reduzem o fluxo em 25% na sua região. Nenhuma campanha estava ativa.",
    "Abrir mais mesas sexta às 20h": "Com base no histórico, sexta às 20h tem ocupação média de 78%. Uma campanha de cashback R$ 15 para horário 19h-21h pode trazer 8-12 clientes adicionais com custo estimado de R$ 180.",
    "Quem são meus clientes recorrentes": "Você tem 412 clientes fiéis (4+ visitas no trimestre). Perfil predominante: casais, jantar, ticket médio R$ 62. 73% deles também pedem delivery pelo menos 1x por mês.",
  };

  function handleComposerSubmit() {
    if (composerValue.trim()) {
      const response = mockResponses[composerValue.trim()] || "Com base nos dados do último mês, seu restaurante teve crescimento de 12% em check-ins confirmados. A campanha de cashback gerou R$ 8.976 em vendas com investimento de R$ 1.090 — um retorno de 8,2x.";
      setComposerResponse(response);
    }
    setComposerValue("");
  }

  function handleComposerChip(sugestao: string) {
    setComposerValue(sugestao);
  }

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptionTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (composerRecording) {
      timerRef.current = setInterval(() => setComposerTimer((t) => t + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setComposerTimer(0);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [composerRecording]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && composerRecording) {
        setComposerRecording(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [composerRecording]);

  function handleComposerButtonClick() {
    if (composerRecording) {
      // Stop recording → transcribe
      setComposerRecording(false);
      setComposerTranscribing(true);
      const TRANSCRIBED = "Quantos clientes que pediram delivery ainda não vieram no salão?";
      setTimeout(() => {
        setComposerTranscribing(false);
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setComposerValue(TRANSCRIBED);
        } else {
          let i = 0;
          transcriptionTimerRef.current = setInterval(() => {
            i++;
            setComposerValue(TRANSCRIBED.slice(0, i));
            if (i >= TRANSCRIBED.length) {
              if (transcriptionTimerRef.current) clearInterval(transcriptionTimerRef.current);
            }
          }, 25);
        }
      }, 600);
    } else if (composerValue.trim()) {
      handleComposerSubmit();
    } else {
      setComposerRecording(true);
    }
  }

  function isCardLocked(modulo: string): boolean {
    return !modulosLiberados.includes(modulo);
  }
  const temDados = d.checkins.confirmados > 0;
  const semConfirmacao = d.checkins.registrados - d.checkins.confirmados;
  const maxCupons = d.cupons.disponibilizados;
  const cuponsNaoUsados = d.cupons.resgatados - d.cupons.queimados;
  const razaoResgate = d.cupons.resgatados / d.cupons.disponibilizados;
  const pctResgate = Math.round(razaoResgate * 100);
  const mostrarAlerta = razaoResgate > 0.95;
  const pacoteEsgotando = razaoResgate > 0.95;

  const etapasFunil = [
    { label: "Disponibilizados", valor: d.cupons.disponibilizados },
    { label: "Resgatados no app", valor: d.cupons.resgatados },
    { label: "Queimados no salão", valor: d.cupons.queimados },
  ];

  return (
    <div className="w-full" style={{ marginBottom: "var(--spacing-40)" }}>
      <style>{`
        ${Array.from({ length: 16 }).map((_, i) => `@keyframes composer-wave-${i} { from { height: 18%; } to { height: 100%; } }`).join("\n")}
        @media (prefers-reduced-motion: reduce) {
          ${Array.from({ length: 16 }).map((_, i) => `@keyframes composer-wave-${i} { from { height: ${18 + (i * 5) % 82}%; } to { height: ${18 + (i * 5) % 82}%; } }`).join("\n")}
        }
      `}</style>
      <div style={{ position: "fixed", bottom: 24, left: 0, right: 0, marginLeft: "276px", display: "flex", justifyContent: "center", zIndex: 40, pointerEvents: "none" }}>
      <div style={{ width: "100%", maxWidth: "640px", pointerEvents: "auto" }}>
        {composerResponse && (
          <div style={{ marginBottom: "var(--spacing-12)", backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", display: "flex", flexDirection: "column", gap: "var(--spacing-8)", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", lineHeight: 1.5, margin: 0 }}>{composerResponse}</p>
            <div style={{ display: "flex", gap: "var(--spacing-8)", alignItems: "center" }}>
              <button type="button" onClick={() => setComposerResponse(null)} style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Dispensar</button>
              <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Fixar no painel</button>
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2 justify-center" style={{ marginBottom: "var(--spacing-8)" }}>
          {(selectedCard && d.sugestoes[selectedCard as keyof typeof d.sugestoes]
            ? d.sugestoes[selectedCard as keyof typeof d.sugestoes]
            : ["Como foi meu fim de semana", "Por que a sexta caiu", "Abrir mais mesas sexta às 20h", "Quem são meus clientes recorrentes"]
          ).map((chip: string) => (
            <button
              key={chip}
              type="button"
              onClick={() => handleComposerChip(chip)}
              style={{
                border: "1px solid var(--borda)",
                borderRadius: "var(--radius-pill)",
                padding: "5px 10px",
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: "var(--font-weight-regular)",
                letterSpacing: "var(--letter-spacing)",
                color: "var(--text-secundario)",
                backgroundColor: "var(--bg-primario)",
                cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {chip}
            </button>
          ))}
        </div>
        <div
          className="flex items-center relative"
          style={{
            height: 48,
            backgroundColor: composerRecording ? "#000000" : "#1a1a1a",
            borderRadius: 9999,
            paddingLeft: "var(--spacing-16)",
            paddingRight: 6,
            gap: "var(--spacing-8)",
            transition: "background-color 200ms",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
          }}
        >
          {composerRecording && (
            <>
              <button
                type="button"
                onClick={() => setComposerRecording(false)}
                aria-label="Cancelar gravação"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, flexShrink: 0, opacity: 0.7 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 3, height: 26 }}>
                {Array.from({ length: 16 }).map((_, i) => {
                  const durations = [600, 720, 840, 640, 780, 680, 920, 600, 760, 880, 700, 640, 960, 720, 800, 680];
                  const delays = [-40, -200, -400, -120, -320, -560, -80, -640, -280, -160, -480, -360, -240, -520, -440, -600];
                  return (
                    <div
                      key={i}
                      style={{
                        width: 3,
                        borderRadius: "var(--radius-pill)",
                        backgroundColor: "white",
                        animation: composerTranscribing ? "none" : `composer-wave-${i} ${durations[i]}ms ease-in-out ${delays[i]}ms infinite alternate`,
                        height: composerTranscribing ? "30%" : undefined,
                        opacity: composerTranscribing ? 0.3 : 1,
                        transition: "opacity 600ms",
                      }}
                    />
                  );
                })}
              </div>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "rgba(255,255,255,0.7)", fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
                {String(Math.floor(composerTimer / 60)).padStart(1, "0")}:{String(composerTimer % 60).padStart(2, "0")}
              </span>
            </>
          )}
          <div aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
            {composerRecording ? "Gravando" : ""}
          </div>
          {selectedCard && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--spacing-4)",
                backgroundColor: "rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-pill)",
                padding: "3px 9px",
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: "var(--font-weight-regular)",
                letterSpacing: "var(--letter-spacing)",
                color: "rgba(255,255,255,0.8)",
                flexShrink: 0,
              }}
            >
              {cardLabels[selectedCard]}
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, color: "rgba(255,255,255,0.5)" }}
                aria-label="Desmarcar"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </span>
          )}
          <input
            type="text"
            value={composerValue}
            onChange={(e) => setComposerValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleComposerSubmit(); }}
            placeholder={selectedCard ? `Pergunte sobre ${cardLabels[selectedCard]}` : "O que você quer saber ou fazer hoje?"}
            disabled={composerRecording || composerTranscribing}
            style={{
              flex: 1,
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-14)",
              fontWeight: "var(--font-weight-regular)",
              letterSpacing: "var(--letter-spacing)",
              color: "#ffffff",
              background: "none",
              border: "none",
              outline: "none",
            }}
          />
          <button
            type="button"
            onClick={handleComposerButtonClick}
            className="flex items-center justify-center shrink-0 relative"
            aria-label={composerRecording ? "Parar gravação" : composerValue.trim() ? "Enviar" : "Gravar áudio"}
            style={{ width: 36, height: 36, borderRadius: "var(--radius-pill)", backgroundColor: composerRecording ? "#ffffff" : composerValue.trim() ? "#ffffff" : "transparent", border: "none", cursor: "pointer", overflow: "hidden", transition: "background-color 160ms" }}
          >
            <i
              className="ifdl-icon-line ifdl-icon-microphone"
              style={{
                fontSize: 18,
                color: composerRecording ? "var(--invertido)" : "rgba(255,255,255,0.5)",
                position: "absolute",
                transition: "transform 160ms ease-out, opacity 160ms ease-out",
                transform: composerValue.trim() && !composerRecording ? "scale(0.6)" : "scale(1)",
                opacity: composerValue.trim() && !composerRecording ? 0 : 1,
              }}
            />
            <i
              className="ifdl-icon-line ifdl-icon-arrow-up"
              style={{
                fontSize: 18,
                color: "#1a1a1a",
                position: "absolute",
                transition: "transform 160ms ease-out, opacity 160ms ease-out",
                transform: composerValue.trim() && !composerRecording ? "scale(1)" : "scale(0.6)",
                opacity: composerValue.trim() && !composerRecording ? 1 : 0,
              }}
            />
            {composerRecording && (
              <div style={{ position: "absolute", width: 13, height: 13, borderRadius: 3, backgroundColor: "var(--invertido)" }} />
            )}
          </button>
        </div>
      </div>
      </div>

      {planoAtivo !== "novo" && (<>

      {mostrarAlerta && (
        <div style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--spacing-16)" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
              Sua oferta sai da vitrine hoje — seu pacote de cupons acabou.
            </span>
            <div style={{ height: "6px", borderRadius: "var(--radius-pill)", backgroundColor: "rgba(255,255,255,0.4)", marginTop: "var(--spacing-8)", overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: "var(--radius-pill)", backgroundColor: "var(--text-primario)", width: `${razaoResgate * 100}%` }} />
            </div>
          </div>
          <button type="button" style={{ backgroundColor: "var(--invertido)", color: "#ffffff", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", flexShrink: 0, marginLeft: "var(--spacing-16)" }}>
            Renovar pacote
          </button>
        </div>
      )}
      {temDados && (
        <div style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", marginBottom: "var(--spacing-16)", display: "flex", flexDirection: "column", gap: "var(--spacing-12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
            <span style={{ fontSize: "16px" }}>✦</span>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>Gerado</span>
          </div>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", lineHeight: 1.6 }}>{d.narrativa}</span>
          <button type="button" style={{ alignSelf: "flex-start", border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Perguntar mais</button>
        </div>
      )}

      {/* Card — Sua jornada (progresso) */}
      <div onClick={() => navigate("/jornada")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--spacing-16)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Sua jornada</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Ativação › Identificação › <strong style={{ color: "var(--marca)", fontWeight: "var(--font-weight-medium)" }}>CRM</strong> › Inteligência › Resultado</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)", flexShrink: 0 }}>
          <div style={{ width: 80, height: 6, borderRadius: 3, backgroundColor: "var(--bg-terciario)", overflow: "hidden" }}>
            <div style={{ width: "60%", height: "100%", borderRadius: 3, backgroundColor: "var(--marca)" }} />
          </div>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>3 de 5</span>
        </div>
      </div>

      {temDados && <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "var(--spacing-16)" }}>
        {/* Card 1 — Retorno do investimento (2 colunas, primeiro bloco) */}
        <div className="col-span-2 md:col-span-2" onClick={() => handleCardClick("faturamento")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "faturamento" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>{d.origem.faturamento}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Retorno do investimento</span>
            <button type="button" aria-label="Mais informações" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, position: "relative" }} onMouseEnter={() => setTooltipAberto("faturamento")} onMouseLeave={() => setTooltipAberto(null)} onFocus={() => setTooltipAberto("faturamento")} onBlur={() => setTooltipAberto(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-desabilitado)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {tooltipAberto === "faturamento" && <div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "6px", backgroundColor: "var(--invertido)", color: "#ffffff", fontSize: "var(--font-size-12)", fontFamily: "var(--font-inter)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", borderRadius: "var(--radius-8)", padding: "var(--spacing-8) var(--spacing-12)", maxWidth: "260px", whiteSpace: "normal", zIndex: 10, pointerEvents: "none" }}>Cashback efetivamente pago contra vendas dos clientes que usaram. Os dois valores são medidos, não estimados.</div>}
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-16)", marginTop: "var(--spacing-4)" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "32px", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", lineHeight: 1 }}>{(d.roi.retornado / d.roi.investido).toFixed(1).replace(".", ",")}x</span>
            <div style={{ width: "1px", height: "32px", backgroundColor: "var(--borda)", flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>R$ {d.roi.investido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} investidos</span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>R$ {d.roi.retornado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} em vendas</span>
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-8)" }}>{d.causa.faturamento}</div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>{d.acao.faturamento}</button>
        </div>

        {(() => {
          const destaque = MOSTRAR_JA_FEITO ? d.jaFeito : d.destaqueDoDia;
          const isFeito = destaque.origem === "Feito";
          return (
            <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--marca)", padding: "var(--spacing-16)", cursor: "default" }}>
              <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: isFeito ? "#ffffff" : "var(--text-secundario)", backgroundColor: isFeito ? "var(--sucesso)" : "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
                {destaque.origem}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                  {destaque.titulo}
                </span>
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-24)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
                {destaque.valor}
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                {destaque.causa}
              </div>
              <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
                {destaque.acao}
              </button>
            </div>
          );
        })()}

        {/* Cardápio — cross-channel */}
        <div onClick={() => handleCardClick("cardapio")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "cardapio" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>{d.origem.cardapio}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Pratos do delivery que faltam no salão</span>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-24)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>7 pratos</div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>{d.causa.cardapio}</div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>{d.acao.cardapio}</button>
        </div>

        {/* Cross-channel */}
        <div onClick={() => handleCardClick("crossChannel")} className="col-span-2 md:col-span-2" style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "crossChannel" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
            {d.origem.crossChannel}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
              Pediram delivery, nunca vieram
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-24)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
            {d.crossChannel.pediramDelivery.toLocaleString("pt-BR")} clientes
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
            {d.causa.crossChannel}
          </div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
            {d.acao.crossChannel}
          </button>
        </div>

        {/* Card 2 — Check-ins confirmados */}
        <div onClick={() => handleCardClick("checkins")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "checkins" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
            {d.origem.checkins}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
              Check-ins confirmados
            </span>
            <button type="button" aria-label="Mais informações" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, position: "relative" }} onMouseEnter={() => setTooltipAberto("checkins")} onMouseLeave={() => setTooltipAberto(null)} onFocus={() => setTooltipAberto("checkins")} onBlur={() => setTooltipAberto(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-desabilitado)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {tooltipAberto === "checkins" && (
                <div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "6px", backgroundColor: "var(--invertido)", color: "#ffffff", fontSize: "var(--font-size-12)", fontFamily: "var(--font-inter)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", borderRadius: "var(--radius-8)", padding: "var(--spacing-8) var(--spacing-12)", maxWidth: "260px", whiteSpace: "normal", zIndex: 10, pointerEvents: "none" }}>
                  Check-ins registrados no app e confirmados no salão. Os {d.checkins.registrados - d.checkins.confirmados} restantes aguardam conferência.
                </div>
              )}
            </button>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
            {d.checkins.confirmados}
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
            {d.causa.checkins}
          </div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
            {d.acao.checkins}
          </button>
        </div>

        {/* Card 3 — Ticket médio */}
        <div onClick={() => handleCardClick("ticketMedio")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "ticketMedio" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
            {d.origem.ticketMedio}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
              Ticket médio
            </span>
            <button type="button" aria-label="Mais informações" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, position: "relative" }} onMouseEnter={() => setTooltipAberto("ticket")} onMouseLeave={() => setTooltipAberto(null)} onFocus={() => setTooltipAberto("ticket")} onBlur={() => setTooltipAberto(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-desabilitado)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {tooltipAberto === "ticket" && (
                <div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "6px", backgroundColor: "var(--invertido)", color: "#ffffff", fontSize: "var(--font-size-12)", fontFamily: "var(--font-inter)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", borderRadius: "var(--radius-8)", padding: "var(--spacing-8) var(--spacing-12)", maxWidth: "260px", whiteSpace: "normal", zIndex: 10, pointerEvents: "none" }}>
                  Valor informado por você no cadastro do salão, comparado ao gasto médio dos demais clientes.
                </div>
              )}
            </button>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
            R$ {d.ticketMedio.valor.toFixed(2).replace(".", ",")}
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--sucesso)", marginTop: "var(--spacing-4)" }}>
            {d.causa.ticketMedio}
          </div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
            {d.acao.ticketMedio}
          </button>
        </div>

        {/* Card 4 — Voltaram sem cupom */}
        <div onClick={() => handleCardClick("voltaramSemCupom")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "voltaramSemCupom" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
            {d.origem.voltaramSemCupom}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
              Voltaram sem cupom
            </span>
            <button type="button" aria-label="Mais informações" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0, position: "relative" }} onMouseEnter={() => setTooltipAberto("voltaram")} onMouseLeave={() => setTooltipAberto(null)} onFocus={() => setTooltipAberto("voltaram")} onBlur={() => setTooltipAberto(null)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-desabilitado)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              {tooltipAberto === "voltaram" && (
                <div style={{ position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "6px", backgroundColor: "var(--invertido)", color: "#ffffff", fontSize: "var(--font-size-12)", fontFamily: "var(--font-inter)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", borderRadius: "var(--radius-8)", padding: "var(--spacing-8) var(--spacing-12)", maxWidth: "260px", whiteSpace: "normal", zIndex: 10, pointerEvents: "none" }}>
                  Clientes que vieram pela primeira vez com cupom e retornaram depois sem usar desconto.
                </div>
              )}
            </button>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
            {d.publico.voltaramSemCupom} clientes
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
            {d.causa.voltaramSemCupom}
          </div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
            {d.acao.voltaramSemCupom}
          </button>
        </div>

        {/* Card — Gráfico de linha temporal */}
        <div className="col-span-2" style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>Fixo</span>
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginBottom: "var(--spacing-12)" }}>Check-ins confirmados — últimas 8 semanas</span>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={[{sem:"Sem 1",valor:180},{sem:"Sem 2",valor:195},{sem:"Sem 3",valor:210},{sem:"Sem 4",valor:198},{sem:"Sem 5",valor:240},{sem:"Sem 6",valor:255},{sem:"Sem 7",valor:268},{sem:"Sem 8",valor:285}]} margin={{top:8,right:8,bottom:0,left:-16}}>
              <XAxis dataKey="sem" tick={{fontSize:11,fill:"var(--text-secundario)"}} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize:11,fill:"var(--text-secundario)"}} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{fontFamily:"var(--font-inter)",fontSize:12,borderRadius:8,border:"1px solid var(--borda)"}} />
              <Line type="monotone" dataKey="valor" stroke="#EB0033" strokeWidth={2} dot={{r:3,fill:"#EB0033"}} activeDot={{r:5}} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Card — Avaliações (só se desbloqueado) */}
        {!isCardLocked("avaliacoes") && (
          <div onClick={() => handleCardClick("avaliacoes")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "avaliacoes" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
              {d.origem.avaliacoes}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                Nota média no salão
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
              4,2
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
              {d.causa.avaliacoes}
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
              {d.acao.avaliacoes}
            </button>
          </div>
        )}

        {/* Card — Reservas (só se desbloqueado) */}
        {!isCardLocked("reservas") && (
          <div onClick={() => handleCardClick("reservas")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "reservas" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
              {d.origem.reservas}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                Taxa de no-show
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
              12%
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
              {d.causa.reservas}
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
              {d.acao.reservas}
            </button>
          </div>
        )}

        {/* Card — Pagamento (só se desbloqueado) */}
        {!isCardLocked("pagamento") && (
          <div onClick={() => handleCardClick("pagamento")} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)", border: selectedCard === "pagamento" ? "1.5px solid var(--marca)" : "none", cursor: "pointer" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
              {d.origem.pagamento}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)", position: "relative" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                Faturamento real
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
              R$ 12.318
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
              {d.causa.pagamento}
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
              {d.acao.pagamento}
            </button>
          </div>
        )}
      </div>}

      {/* Seção separada — módulos bloqueados */}
      {(isCardLocked("avaliacoes") || isCardLocked("reservas") || isCardLocked("pagamento")) && (
        <div style={{ marginTop: "var(--spacing-16)" }}>
          <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: "0 0 var(--spacing-12) 0" }}>Desbloqueie mais</h2>
          <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: "var(--spacing-16)" }}>
            {isCardLocked("avaliacoes") && (
              <div style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
                <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>{d.origem.avaliacoes}</span>
                <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Nota média no salão</span>
                <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: "80%" }} />
                <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: "55%" }} />
                <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-8)" }}>Restaurantes com nota visível recebem 34% mais reservas</span>
                <button type="button" style={{ border: "none", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "var(--invertido)", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", marginTop: "var(--spacing-12)" }}>Ativar Avaliações</button>
              </div>
            )}
            {isCardLocked("reservas") && (
              <div style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
                <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>{d.origem.reservas}</span>
                <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Taxa de no-show</span>
                <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: "35%" }} />
                <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: "60%" }} />
                <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-8)" }}>Ativar identifica 40% mais clientes no CRM</span>
                <button type="button" style={{ border: "none", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "var(--invertido)", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", marginTop: "var(--spacing-12)" }}>Ativar Reservas</button>
              </div>
            )}
            {isCardLocked("pagamento") && (
              <div style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
                <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>{d.origem.pagamento}</span>
                <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Faturamento real</span>
                <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: "70%" }} />
                <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: "45%" }} />
                <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-8)" }}>Check-in automático sem depender do garçom</span>
                <button type="button" style={{ border: "none", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "var(--invertido)", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", marginTop: "var(--spacing-12)" }}>Ativar Pagamento</button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--spacing-16)", marginTop: "var(--spacing-16)" }}>
        <div onClick={() => handleCardClick("funil")} style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: selectedCard === "funil" ? "1.5px solid var(--marca)" : "1px solid var(--borda)", padding: "var(--spacing-16)", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
            {d.origem.funil}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-12)" }}>
            {etapasFunil.map((etapa) => (
              <div key={etapa.label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                    {etapa.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                    {etapa.valor}
                  </span>
                </div>
                <div style={{ height: "8px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)", width: `${(etapa.valor / maxCupons) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-12)" }}>
            {d.causa.funil}
          </div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
            {d.acao.funil}
          </button>
        </div>
        {temDados && <div onClick={() => handleCardClick("origemPublico")} style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: selectedCard === "origemPublico" ? "1.5px solid var(--marca)" : "1px solid var(--borda)", padding: "var(--spacing-16)", cursor: "pointer" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
            {d.origem.origemPublico}
          </span>
          <div style={{ height: "12px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--bg-terciario)", overflow: "hidden", display: "flex" }}>
            <div style={{ height: "100%", backgroundColor: "var(--marca)", width: `${(d.publico.primeiraVezIfood / (d.publico.primeiraVezIfood + d.publico.jaVieramPeloIfood)) * 100}%` }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)", marginTop: "var(--spacing-12)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                Primeira vez via iFood · {d.publico.primeiraVezIfood} pessoas · {Math.round((d.publico.primeiraVezIfood / (d.publico.primeiraVezIfood + d.publico.jaVieramPeloIfood)) * 100)}%
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--bg-terciario)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
                Já haviam vindo pelo iFood · {d.publico.jaVieramPeloIfood} pessoas · {Math.round((d.publico.jaVieramPeloIfood / (d.publico.primeiraVezIfood + d.publico.jaVieramPeloIfood)) * 100)}%
              </span>
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-desabilitado)", marginTop: "var(--spacing-12)" }}>
            {d.causa.origemPublico}
          </div>
          <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
            {d.acao.origemPublico}
          </button>
        </div>}
      </div>

      {temDados && <div className="flex flex-col md:flex-row" style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)", marginTop: "var(--spacing-16)" }}>
        <div style={{ flex: 1, paddingRight: "var(--spacing-16)" }}>
          {d.benchmark.percentil >= 50 ? (
            <div>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                Você está no top {100 - d.benchmark.percentil}% dos restaurantes {d.benchmark.categoria} da sua região
              </span>
              <div style={{ height: "8px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-8)", position: "relative" }}>
                <div style={{ position: "absolute", left: `${d.benchmark.percentil}%`, top: "-2px", width: "12px", height: "12px", borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)", transform: "translateX(-50%)" }} />
              </div>
            </div>
          ) : (
            <div>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                Seu desconto está abaixo do bairro
              </span>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                Restaurantes parecidos oferecem {Math.round(d.benchmark.descontoMedioRegiao * 100)}%. O seu oferece {Math.round(d.benchmark.descontoProprio * 100)}%.
              </div>
              <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-8)" }}>
                Ajustar oferta
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-px h-px md:h-auto" style={{ backgroundColor: "var(--borda)", flexShrink: 0, marginTop: "var(--spacing-16)", marginBottom: "var(--spacing-16)" }} />
        <div style={{ flex: 1, paddingLeft: "var(--spacing-16)" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
            {d.sugestao.texto}
          </span>
          <div style={{ display: "flex", gap: "var(--spacing-8)", marginTop: "var(--spacing-12)" }}>
            <button type="button" style={{ backgroundColor: "var(--invertido)", color: "#ffffff", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)" }}>
              Aplicar
            </button>
            <button type="button" style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>
              Ignorar
            </button>
          </div>
        </div>
      </div>}

      {!temDados && (
        <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)", marginTop: "var(--spacing-16)" }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-16)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
            Ninguém usou sua oferta ainda. Provavelmente por isto:
          </span>
          <div style={{ borderTop: "1px solid var(--borda)", marginTop: "var(--spacing-12)", paddingTop: "var(--spacing-12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                Seu desconto está abaixo do bairro
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                Média da região: {Math.round(d.benchmark.descontoMedioRegiao * 100)}%. O seu: {Math.round(d.benchmark.descontoProprio * 100)}%.
              </div>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 14px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>
              Ajustar oferta
            </button>
          </div>
          <div style={{ borderTop: "1px solid var(--borda)", marginTop: "var(--spacing-12)", paddingTop: "var(--spacing-12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                Seu salão não tem fotos
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                Perfis com foto recebem 3× mais visitas.
              </div>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 14px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>
              Adicionar fotos
            </button>
          </div>
          <div style={{ borderTop: "1px solid var(--borda)", marginTop: "var(--spacing-12)", paddingTop: "var(--spacing-12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                Sua oferta vale só no jantar
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                68% das buscas na sua região são no almoço.
              </div>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "6px 14px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>
              Ampliar horário
            </button>
          </div>
          <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-12)", paddingTop: "var(--spacing-12)", borderTop: "1px solid var(--borda)" }}>
            Sua oferta apareceu {d.vitrine.impressoes.toLocaleString("pt-BR")} vezes na vitrine neste período.
          </div>
        </div>
      )}
      </>)}
    </div>
  );
}