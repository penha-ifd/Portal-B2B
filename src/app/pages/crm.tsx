import { useState } from "react";
import { useNavigate } from "react-router";
import { usePlano } from "../state/plano-context";

const COMPOSER_CHIPS = [
  "Quem não volta há 60 dias",
  "Quem só vem no fim de semana",
  "Quem pede delivery e nunca veio",
];

const SEGMENTOS = [
  { nome: "Novato", count: 194, causa: "primeira visita nos últimos 90 dias" },
  { nome: "Fiel", count: 412, causa: "4 ou mais visitas, ativo no último mês" },
  { nome: "VIP", count: 88, causa: "ticket médio acima de R$ 150" },
  { nome: "Em risco", count: 604, causa: "já vieram 3+ vezes, sumiram há 60 dias" },
  { nome: "Perdido", count: 331, causa: "sem visita há mais de 6 meses" },
];

const PLANO_INFO: Record<string, string> = {
  base: "Plano Base · nenhum módulo ativo",
  essencial: "Plano Essencial · Cardápio, Reservas, PDV",
  avancado: "Plano Avançado · todos os módulos",
};

export function CrmPage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();
  const isBase = planoAtivo === "base";
  const [composerValue, setComposerValue] = useState("");

  return (
    <div className="relative">
      {/* Sub-header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200"
        style={{ backgroundColor: isBase ? "var(--atencao)" : "#ffffff" }}
      >
        <span
          className="flex items-center justify-center size-5 rounded-[6px] shrink-0"
          style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}
        >
          <i className="ifdl-icon-filled ifdl-icon-profile-1 text-white" style={{ fontSize: "12px" }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: isBase ? "var(--text-primario)" : "#141414" }}>
          CRM
        </span>
        <div className="flex items-center gap-3 ml-auto">
          <span style={{
            fontFamily: "var(--font-inter)",
            fontSize: "var(--font-size-12)",
            fontWeight: "var(--font-weight-regular)",
            letterSpacing: "var(--letter-spacing)",
            color: isBase ? "var(--text-primario)" : "var(--text-secundario)",
          }}>
            {isBase ? "Ative um módulo para liberar inteligência e CRM" : PLANO_INFO[planoAtivo] ?? ""}
          </span>
          <span style={{
            fontFamily: "var(--font-inter)",
            fontSize: "var(--font-size-12)",
            fontWeight: "var(--font-weight-regular)",
            letterSpacing: "var(--letter-spacing)",
            color: isBase ? "var(--text-primario)" : "var(--marca)",
            cursor: "pointer",
          }}
            onClick={() => navigate("/modulos")}
          >
            Mudar assinatura
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-10 p-6">
        {/* Composer */}
        <div>
          <div
            className="flex items-center"
            style={{
              height: 56,
              backgroundColor: "var(--bg-primario)",
              border: "1px solid var(--borda)",
              borderRadius: "var(--radius-12)",
              paddingLeft: "var(--spacing-16)",
              paddingRight: "var(--spacing-16)",
              gap: "var(--spacing-8)",
            }}
          >
            <input
              type="text"
              value={composerValue}
              onChange={(e) => setComposerValue(e.target.value)}
              placeholder="Descreva o público que você quer alcançar"
              style={{
                flex: 1,
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-14)",
                fontWeight: "var(--font-weight-regular)",
                letterSpacing: "var(--letter-spacing)",
                color: "var(--text-primario)",
                background: "none",
                border: "none",
                outline: "none",
              }}
            />
            <i className="ifdl-icon-line ifdl-icon-microphone" style={{ fontSize: 20, color: "var(--text-secundario)" }} />
            <button
              type="button"
              className="flex items-center justify-center shrink-0"
              style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", backgroundColor: "var(--marca)", border: "none", cursor: "pointer" }}
            >
              <i className="ifdl-icon-line ifdl-icon-arrow-up" style={{ fontSize: 18, color: "#ffffff" }} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2" style={{ marginTop: "var(--spacing-12)" }}>
            {COMPOSER_CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => setComposerValue(chip)}
                style={{
                  border: "1px solid var(--borda)",
                  borderRadius: "var(--radius-pill)",
                  padding: "6px 12px",
                  fontFamily: "var(--font-inter)",
                  fontSize: "var(--font-size-12)",
                  fontWeight: "var(--font-weight-regular)",
                  letterSpacing: "var(--letter-spacing)",
                  color: "var(--text-secundario)",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de segmentos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--spacing-16)" }}>
          {/* Cross-channel — 2 colunas */}
          <div style={{ gridColumn: "span 2", backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
              Cross-channel
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-16)" }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                  Pediram delivery, nunca vieram
                </span>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
                  1.847
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                  no raio de 3 km, últimos 90 dias
                </div>
              </div>
              <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>
                Criar campanha de primeira visita
              </button>
            </div>
          </div>

          {/* Segmentos automáticos */}
          {SEGMENTOS.map((seg) => (
            <div key={seg.nome} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
              <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>
                Automático
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>
                {seg.nome}
              </span>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>
                {seg.count}
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>
                {seg.causa}
              </div>
              <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>
                Criar campanha
              </button>
            </div>
          ))}

          {/* Novo segmento (tracejado) */}
          <div
            className="flex flex-col items-center justify-center gap-2"
            style={{
              borderRadius: "var(--radius-12)",
              border: "1px dashed var(--bg-terciario)",
              padding: "var(--spacing-16)",
              minHeight: 120,
              cursor: "pointer",
            }}
          >
            <i className="ifdl-icon-line ifdl-icon-add" style={{ fontSize: 20, color: "var(--text-desabilitado)" }} />
            <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-desabilitado)" }}>
              Novo segmento
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}