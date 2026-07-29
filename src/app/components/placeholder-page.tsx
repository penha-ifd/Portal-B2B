import { useNavigate } from "react-router";

interface Props {
  title: string;
  icon: string;
}

const MODULO_CONTEUDO: Record<string, { frase: string; cards: string[]; preco: string }> = {
  PDV: {
    frase: "Conecta seu caixa e troca faturamento estimado por faturamento real.",
    cards: ["Faturamento real", "Pratos mais vendidos", "Faturamento por mesa"],
    preco: "R$ 79/mês no plano Essencial",
  },
  "Pagamento na mesa": {
    frase: "O cliente paga pelo app e o check-in se confirma sozinho, sem depender do garçom.",
    cards: ["Check-ins confirmados sozinhos", "Ticket real por cliente", "Tempo médio de mesa"],
    preco: "R$ 79/mês no plano Avançado",
  },
  "Agregador de pedidos": {
    frase: "Junta os pedidos de todos os canais numa fila só.",
    cards: ["Pedidos por canal", "Tempo de preparo", "Cancelamentos"],
    preco: "R$ 79/mês no plano Avançado",
  },
  Avaliações: {
    frase: "Reúne as avaliações do Google e do iFood num lugar só e avisa quando alguma precisa de resposta.",
    cards: ["Nota média do salão", "Avaliações por plataforma", "Respostas pendentes"],
    preco: "R$ 49/mês no plano Avançado",
  },
};

export function PlaceholderPage({ title, icon }: Props) {
  const navigate = useNavigate();
  const conteudo = MODULO_CONTEUDO[title];

  if (!conteudo) {
    return (
      <div>
        <div className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb]" style={{ backgroundColor: "#ffffff" }}>
          <span
            className="flex items-center justify-center size-5 rounded-[6px] shrink-0"
            style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}
          >
            <i className={`ifdl-icon-filled ifdl-icon-${icon} text-white`} style={{ fontSize: "12px" }} />
          </span>
          <span className="paragraph-p2-14-medium ml-1" style={{ color: "#141414" }}>{title}</span>
        </div>
        <div className="flex items-center justify-center min-h-[480px] p-6">
          <div className="flex flex-col items-center justify-center text-center p-8 max-w-sm">
            <div className="size-16 rounded-full bg-bg-secondary flex items-center justify-center mb-4">
              <svg className="size-8 text-text-disabled" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <h3 className="heading-h3-18-medium text-text-primary mb-2">{title}</h3>
            <p className="paragraph-p2-14-regular text-text-secondary">Esta seção faz parte do CRM e será apresentada nas próximas etapas.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Sub-header */}
      <div className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb]" style={{ backgroundColor: "#ffffff" }}>
        <span
          className="flex items-center justify-center size-5 rounded-[6px] shrink-0"
          style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}
        >
          <i className={`ifdl-icon-filled ifdl-icon-${icon} text-white`} style={{ fontSize: "12px" }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: "#141414" }}>{title}</span>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-6">
        {/* Título e frase */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[24px] font-medium text-[#141414] leading-8">
            {title}
          </h1>
          <p className="paragraph-p2-14-regular text-[#666666]">
            {conteudo.frase}
          </p>
        </div>

        {/* Prévia borrada */}
        <div className="flex flex-col md:flex-row gap-4">
          {conteudo.cards.map((card, i) => (
            <div
              key={card}
              style={{
                backgroundColor: "var(--bg-secundario)",
                borderRadius: "var(--radius-12)",
                padding: "var(--spacing-16)",
                flex: 1,
                opacity: i === 2 ? 0.5 : 0.75,
              }}
            >
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: "var(--font-size-12)",
                fontWeight: "var(--font-weight-regular)",
                letterSpacing: "var(--letter-spacing)",
                color: "var(--text-secundario)",
              }}>
                {card}
              </span>
              <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-8)", width: i === 0 ? "75%" : i === 1 ? "60%" : "80%" }} />
              <div style={{ height: "8px", borderRadius: "4px", backgroundColor: "var(--bg-terciario)", marginTop: "var(--spacing-4)", width: i === 0 ? "45%" : i === 1 ? "55%" : "40%" }} />
            </div>
          ))}
        </div>

        {/* Faixa de ativação */}
        <div style={{
          backgroundColor: "var(--bg-secundario)",
          borderRadius: "var(--radius-12)",
          padding: "var(--spacing-16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div className="flex flex-col gap-1">
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-14)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "var(--letter-spacing)",
              color: "var(--text-primario)",
            }}>
              Ative {title}
            </span>
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: "var(--font-size-12)",
              fontWeight: "var(--font-weight-regular)",
              letterSpacing: "var(--letter-spacing)",
              color: "var(--text-secundario)",
            }}>
              {conteudo.preco}
            </span>
          </div>
          <button
            type="button"
            onClick={() => navigate("/modulos")}
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
            Ver planos
          </button>
        </div>
      </div>
    </div>
  );
}