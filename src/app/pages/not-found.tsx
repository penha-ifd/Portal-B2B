import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className="ifdl-icon-filled ifdl-icon-info text-white" style={{ fontSize: "16px" }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>Página não encontrada</h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>O endereço que você acessou não existe ou foi movido.</p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[480px] p-6">
        <div className="flex flex-col items-center justify-center text-center p-8 max-w-sm">
          <div className="size-16 rounded-full bg-bg-secondary flex items-center justify-center mb-4">
            <svg className="size-8 text-text-disabled" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <h3 className="heading-h3-18-medium text-text-primary mb-2">Não encontramos essa página</h3>
          <p className="paragraph-p2-14-regular text-text-secondary mb-6">Confira se o endereço está correto ou volte para o início.</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "var(--invertido)",
              color: "#ffffff",
              borderRadius: "var(--radius-pill)",
              padding: "var(--spacing-8) var(--spacing-16)",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-14)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "var(--letter-spacing)",
            }}
          >
            Voltar para o Início
          </button>
        </div>
      </div>
    </div>
  );
}
