import { DsSection } from "../components/ds/section";
import { ColorSwatch } from "../components/ds/color-swatch";
import { TypeSample } from "../components/ds/type-sample";
import { ComponentCard } from "../components/ds/component-card";

const COLORS = [
  { token: "--marca", value: "#EB0033", label: "Marca" },
  { token: "--text-primario", value: "#141414", label: "Text Primário" },
  { token: "--text-secundario", value: "#666666", label: "Text Secundário" },
  { token: "--text-desabilitado", value: "#A3A3A3", label: "Text Desabilitado" },
  { token: "--bg-primario", value: "#FFFFFF", label: "BG Primário" },
  { token: "--bg-secundario", value: "#F5F5F5", label: "BG Secundário" },
  { token: "--bg-terciario", value: "#FAFAFA", label: "BG Terciário" },
  { token: "--borda", value: "#EBEBEB", label: "Borda" },
  { token: "--sucesso", value: "#1FAD68", label: "Sucesso" },
  { token: "--atencao", value: "#FFC347", label: "Atenção" },
  { token: "--invertido", value: "#FFFFFF", label: "Invertido" },
];

const TYPOGRAPHY = [
  { className: "heading-h3-18-medium", label: "Heading H3", size: "18px", weight: "500", lineHeight: "24px" },
  { className: "paragraph-p1-16-bold", label: "Paragraph P1 Bold", size: "16px", weight: "700", lineHeight: "22px" },
  { className: "paragraph-p1-16-medium", label: "Paragraph P1 Medium", size: "16px", weight: "500", lineHeight: "22px" },
  { className: "paragraph-p1-16-regular", label: "Paragraph P1 Regular", size: "16px", weight: "400", lineHeight: "22px" },
  { className: "paragraph-p2-14-medium", label: "Paragraph P2 Medium", size: "14px", weight: "500", lineHeight: "20px" },
  { className: "paragraph-p2-14-regular", label: "Paragraph P2 Regular", size: "14px", weight: "400", lineHeight: "20px" },
  { className: "paragraph-p3-12-bold", label: "Paragraph P3 Bold", size: "12px", weight: "700", lineHeight: "16px" },
  { className: "paragraph-p3-12-medium", label: "Paragraph P3 Medium", size: "12px", weight: "500", lineHeight: "16px" },
  { className: "paragraph-p3-12-regular", label: "Paragraph P3 Regular", size: "12px", weight: "400", lineHeight: "16px" },
];

const SPACING = [4, 8, 12, 16, 20, 24, 32, 40];

const RADIUS = [
  { label: "Default (8px)", value: "8px" },
  { label: "LG (10px)", value: "10px" },
  { label: "XL (12px)", value: "12px" },
  { label: "2XL (14px)", value: "14px" },
  { label: "Pill (9999px)", value: "9999px" },
];

const SHADOWS = [
  { label: "Subtle", value: "0px 1px 3px rgba(21,21,21,0.08)" },
  { label: "Card hover", value: "0 2px 8px rgba(0,0,0,0.06)" },
  { label: "Elevated", value: "0 2px 8px rgba(0,0,0,0.1)" },
  { label: "Float", value: "0 4px 12px rgba(0,0,0,0.06)" },
  { label: "Marca glow", value: "0 4px 12px rgba(235,0,51,0.2)" },
  { label: "Overlay", value: "0px 6px 12px 0px rgba(21,21,21,0.16)" },
];

const ICONS = [
  "home", "store", "calendar", "promotion", "delivery", "chat",
  "notification", "profile", "configuration", "search", "menu",
  "add", "add-circle", "close", "check", "checkmark",
  "chevron-down", "chevron-right", "arrow-up", "exclamation",
  "info", "help", "fire", "link", "qr-code", "sync",
  "trash", "microphone",
];

export default function DesignSystemPage() {
  return (
    <div className="max-w-[960px] mx-auto py-8 px-6">
      <header className="mb-12">
        <h1
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "var(--font-size-32)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--text-primario)",
          }}
        >
          Design System
        </h1>
        <p
          className="mt-2"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "var(--font-size-16)",
            color: "var(--text-secundario)",
          }}
        >
          Biblioteca visual do Portal Comer Fora B2B — tokens, tipografia, componentes e padrões.
        </p>
      </header>

      {/* Cores */}
      <DsSection title="Cores" description="Tokens de cor definidos em globals.css via CSS custom properties.">
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6">
          {COLORS.map((c) => (
            <ColorSwatch key={c.token} token={c.token} value={c.value} label={c.label} />
          ))}
        </div>
      </DsSection>

      {/* Tipografia */}
      <DsSection title="Tipografia" description="Classes utilitárias IFDS — fonte iFood RC Textos com 4 pesos (300, 400, 500, 700).">
        <div className="flex flex-col">
          {TYPOGRAPHY.map((t) => (
            <TypeSample key={t.className} {...t} />
          ))}
        </div>
        <div className="mt-6">
          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-12)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-secundario)",
            }}
          >
            Escala de font-size (tokens)
          </p>
          <div className="flex flex-wrap gap-3">
            {[11, 12, 14, 16, 18, 20, 24, 32].map((size) => (
              <span
                key={size}
                className="px-3 py-1.5 rounded-lg border border-[var(--borda)] bg-[var(--bg-secundario)]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: `${size}px`,
                  color: "var(--text-primario)",
                }}
              >
                {size}px
              </span>
            ))}
          </div>
        </div>
      </DsSection>

      {/* Espaçamento */}
      <DsSection title="Espaçamento" description="Escala de spacing usada em paddings, margins e gaps.">
        <div className="flex flex-col gap-3">
          {SPACING.map((s) => (
            <div key={s} className="flex items-center gap-4">
              <span
                className="w-12 text-right font-mono"
                style={{ fontSize: "var(--font-size-11)", color: "var(--text-secundario)" }}
              >
                {s}px
              </span>
              <div
                className="h-4 rounded-sm"
                style={{
                  width: `${s * 4}px`,
                  backgroundColor: "var(--marca)",
                  opacity: 0.7 + (s / 40) * 0.3,
                }}
              />
            </div>
          ))}
        </div>
      </DsSection>

      {/* Border Radius */}
      <DsSection title="Border Radius" description="Tokens de arredondamento de borda.">
        <div className="flex flex-wrap gap-6">
          {RADIUS.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 border-2 border-[var(--marca)] bg-[var(--bg-secundario)]"
                style={{ borderRadius: r.value }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "var(--font-size-11)",
                  color: "var(--text-secundario)",
                }}
              >
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </DsSection>

      {/* Sombras */}
      <DsSection title="Sombras" description="Box-shadows utilizados no projeto (valores arbitrários via Tailwind).">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {SHADOWS.map((s) => (
            <div
              key={s.label}
              className="p-5 rounded-xl bg-white border border-[var(--borda)]"
              style={{ boxShadow: s.value }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "var(--font-size-12)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primario)",
                }}
              >
                {s.label}
              </span>
              <p
                className="mt-1 font-mono"
                style={{ fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)" }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </DsSection>

      {/* Ícones */}
      <DsSection title="Ícones" description="Fonte Pomodoro (ifdl-icon-line / ifdl-icon-filled). Prefixo: ifdl-icon-{nome}.">
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-7">
          {ICONS.map((icon) => (
            <div
              key={icon}
              className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[var(--borda)] hover:bg-[var(--bg-secundario)] transition-colors"
            >
              <i className={`ifdl-icon-line ifdl-icon-${icon}`} style={{ fontSize: "24px", color: "var(--text-primario)" }} />
              <span
                className="text-center"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "10px",
                  color: "var(--text-secundario)",
                  wordBreak: "break-all",
                }}
              >
                {icon}
              </span>
            </div>
          ))}
        </div>
      </DsSection>

      {/* Componentes */}
      <DsSection title="Componentes" description="Componentes reutilizáveis do projeto com suas variações.">
        {/* Botões */}
        <ComponentCard name="Botões" file="inline (Tailwind + tokens)">
          <button
            className="px-4 py-2.5 rounded-xl text-white transition-all duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "var(--marca)",
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-14)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Primary
          </button>
          <button
            className="px-4 py-2.5 rounded-xl border transition-all duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]"
            style={{
              borderColor: "var(--borda)",
              backgroundColor: "var(--bg-primario)",
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-14)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primario)",
            }}
          >
            Secondary
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-150 ease-out hover:scale-[1.04] active:scale-[0.98]"
            style={{ borderColor: "var(--borda)", backgroundColor: "var(--bg-primario)" }}
          >
            <i className="ifdl-icon-line ifdl-icon-add" style={{ fontSize: "20px", color: "var(--text-primario)" }} />
          </button>
        </ComponentCard>

        {/* Tags / Chips */}
        <div className="mt-4">
          <ComponentCard name="Tags / Chips" file="inline (status indicators)">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "#E8F8F0",
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-12)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--sucesso)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--sucesso)" }} />
              Sucesso
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "#FFF7E6",
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-12)",
                fontWeight: "var(--font-weight-medium)",
                color: "#D4940A",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--atencao)" }} />
              Atenção
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "var(--bg-secundario)",
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-12)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-secundario)",
              }}
            >
              Neutro
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "#FFEAEF",
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-12)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--marca)",
              }}
            >
              Marca
            </span>
          </ComponentCard>
        </div>

        {/* Badges */}
        <div className="mt-4">
          <ComponentCard name="Badges" file="inline">
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: "#FFEAEF",
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-11)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--marca)",
              }}
            >
              <i className="ifdl-icon-line ifdl-icon-delivery" style={{ fontSize: "12px" }} />
              Delivery
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: "#E8F8F0",
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-11)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--sucesso)",
              }}
            >
              <i className="ifdl-icon-line ifdl-icon-store" style={{ fontSize: "12px" }} />
              Presencial
            </span>
          </ComponentCard>
        </div>

        {/* Card padrão */}
        <div className="mt-4">
          <ComponentCard name="Card" file="inline (padrão visual recorrente)">
            <div
              className="w-full max-w-[280px] p-4 rounded-xl border border-[var(--borda)] bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secundario)] flex items-center justify-center">
                  <i className="ifdl-icon-line ifdl-icon-calendar" style={{ fontSize: "20px", color: "var(--marca)" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "var(--font-size-14)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primario)",
                    }}
                  >
                    Reservas
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>
                    32 hoje
                  </p>
                </div>
              </div>
              <div className="h-px bg-[var(--borda)] mb-3" />
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>
                Gerencie reservas e lista de espera
              </p>
            </div>
          </ComponentCard>
        </div>

        {/* Sidebar Item */}
        <div className="mt-4">
          <ComponentCard name="Sidebar Item" file="components/sidebar-nav.tsx">
            <div className="w-[220px] flex flex-col gap-1">
              <div
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ backgroundColor: "#FFEAEF" }}
              >
                <i className="ifdl-icon-line ifdl-icon-home" style={{ fontSize: "20px", color: "var(--marca)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--font-size-14)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--marca)",
                  }}
                >
                  Início
                </span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-secundario)] transition-colors">
                <i className="ifdl-icon-line ifdl-icon-calendar" style={{ fontSize: "20px", color: "var(--text-secundario)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--font-size-14)",
                    fontWeight: "var(--font-weight-regular, 400)",
                    color: "var(--text-primario)",
                  }}
                >
                  Reservas
                </span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl opacity-50 cursor-not-allowed">
                <i className="ifdl-icon-line ifdl-icon-promotion" style={{ fontSize: "20px", color: "var(--text-desabilitado)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--font-size-14)",
                    color: "var(--text-desabilitado)",
                  }}
                >
                  Promoções
                </span>
                <i className="ifdl-icon-line ifdl-icon-exclamation ml-auto" style={{ fontSize: "14px", color: "var(--text-desabilitado)" }} />
              </div>
            </div>
          </ComponentCard>
        </div>

        {/* Page Header */}
        <div className="mt-4">
          <ComponentCard name="Page Header" file="(padrão recorrente em todas as páginas)">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "var(--font-size-24)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primario)",
                    }}
                  >
                    Reservas
                  </h2>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "var(--font-size-14)",
                      color: "var(--text-secundario)",
                    }}
                  >
                    Gerencie reservas e lista de espera do seu restaurante
                  </p>
                </div>
                <button
                  className="px-4 py-2.5 rounded-xl text-white"
                  style={{
                    backgroundColor: "var(--marca)",
                    fontFamily: "var(--font-inter)",
                    fontSize: "var(--font-size-14)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Nova reserva
                </button>
              </div>
            </div>
          </ComponentCard>
        </div>
      </DsSection>

      {/* Padrões de Layout */}
      <DsSection title="Padrões de Layout" description="Estruturas visuais recorrentes no app.">
        <ComponentCard name="App Shell" file="components/app-shell.tsx">
          <div className="w-full flex rounded-xl border border-[var(--borda)] overflow-hidden h-[200px]">
            <div className="w-[60px] bg-white border-r border-[var(--borda)] flex flex-col items-center pt-4 gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--marca)]" />
              <div className="w-6 h-0.5 bg-[var(--borda)]" />
              <div className="w-5 h-5 rounded bg-[var(--bg-secundario)]" />
              <div className="w-5 h-5 rounded bg-[var(--bg-secundario)]" />
              <div className="w-5 h-5 rounded bg-[var(--bg-secundario)]" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="h-[48px] border-b border-[var(--borda)] bg-white flex items-center px-4">
                <div className="w-20 h-3 rounded bg-[var(--bg-secundario)]" />
              </div>
              <div className="flex-1 bg-[var(--bg-secundario)] p-4">
                <div className="w-full h-full rounded-xl bg-white border border-[var(--borda)]" />
              </div>
            </div>
          </div>
        </ComponentCard>

        <div className="mt-4">
          <ComponentCard name="Grid de Módulos" file="(padrão da HomePage)">
            <div className="w-full grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-20 rounded-xl border border-[var(--borda)] bg-white flex items-center justify-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-secundario)]" />
                </div>
              ))}
            </div>
          </ComponentCard>
        </div>
      </DsSection>
    </div>
  );
}
