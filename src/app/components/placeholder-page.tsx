import { useNavigate } from "react-router";
import { usePlano } from "../state/plano-context";

interface Props {
  title: string;
  icon: string;
}

const TITULO_MODULO: Record<string, string> = {
  "Pagamento na mesa": "pagamento",
  "Avaliações": "avaliacoes",
  "Agregador de pedidos": "agregador",
};

const PLANO_MODULOS: Record<string, string[]> = {
  novo: [],
  base: ["delivery", "cupons"],
  essencial: ["delivery", "cupons", "reservas"],
  avancado: ["delivery", "cupons", "reservas", "pagamento", "avaliacoes", "agregador"],
};

const MODULO_CONTEUDO: Record<string, { frase: string; cards: string[]; preco: string; ativo?: boolean }> = {
  Cardápio: {
    frase: "Importe seu cardápio do delivery como base e personalize para o salão — preços e itens independentes.",
    cards: [],
    preco: "",
    ativo: true,
  },
  PDV: {
    frase: "Conecta seu caixa e troca faturamento estimado por faturamento real.",
    cards: ["Faturamento real", "Pratos mais vendidos", "Faturamento por mesa"],
    preco: "R$ 79/mês no plano Essencial",
  },
  "Pagamento na mesa": {
    frase: "O cliente paga pelo app e o check-in se confirma sozinho, sem depender do garçom.",
    cards: ["Check-ins confirmados sozinhos", "Ticket real por cliente", "Tempo médio de mesa"],
    preco: "R$ 79/mês no plano Profissional",
  },
  "Agregador de pedidos": {
    frase: "Junta os pedidos de todos os canais numa fila só.",
    cards: ["Pedidos por canal", "Tempo de preparo", "Cancelamentos"],
    preco: "R$ 79/mês no plano Profissional",
  },
  Avaliações: {
    frase: "Reúne as avaliações do Google e do iFood num lugar só e avisa quando alguma precisa de resposta.",
    cards: ["Nota média do salão", "Avaliações por plataforma", "Respostas pendentes"],
    preco: "R$ 49/mês no plano Profissional",
  },
};

export function PlaceholderPage({ title, icon }: Props) {
  const navigate = useNavigate();
  const { planoAtivo } = usePlano();
  const conteudo = MODULO_CONTEUDO[title];

  const slugModulo = TITULO_MODULO[title];
  const modulosLiberados = PLANO_MODULOS[planoAtivo] ?? [];
  const desbloqueado = slugModulo ? modulosLiberados.includes(slugModulo) : false;

  if (!conteudo) {
    return (
      <div>
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
            <i className={`ifdl-icon-filled ifdl-icon-${icon} text-white`} style={{ fontSize: "16px" }} />
          </span>
          <div className="flex flex-col gap-0.5">
            <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>{title}</h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>Esta área não faz parte do escopo deste protótipo.</p>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[480px] p-6">
          <div className="flex flex-col items-center justify-center text-center p-8 max-w-sm">
            <div className="size-16 rounded-full bg-bg-secondary flex items-center justify-center mb-4">
              <svg className="size-8 text-text-disabled" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <h3 className="heading-h3-18-medium text-text-primary mb-2">{title}</h3>
            <p className="paragraph-p2-14-regular text-text-secondary">Esta área não faz parte do escopo deste protótipo.</p>
          </div>
        </div>
      </div>
    );
  }

  if (conteudo.ativo || desbloqueado) {
    const PRATOS = ["Risoto de camarão", "Salmão grelhado", "Polenta com ragu", "Bruschetta caprese", "Tiramisu", "Nhoque ao molho pesto", "Panna cotta"];
    const MOCK_VALORES: Record<string, string[]> = {
      "Pagamento na mesa": ["1.247", "R$ 82,40", "48 min"],
      "Agregador de pedidos": ["312", "14 min", "2,1%"],
      "Avaliações": ["4,6", "127 / 84", "5"],
    };
    const valores = MOCK_VALORES[title];

    if (!conteudo.ativo && desbloqueado && valores) {
      return (
        <div>
          <div className="flex items-center gap-3 px-6 pt-6 pb-4">
            <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
              <i className={`ifdl-icon-filled ifdl-icon-${icon} text-white`} style={{ fontSize: "16px" }} />
            </span>
            <div className="flex flex-col gap-0.5">
              <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>{title}</h1>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>{conteudo.frase}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {conteudo.cards.map((card, i) => (
                <div
                  key={card}
                  style={{
                    backgroundColor: "var(--bg-primario)",
                    borderRadius: "var(--radius-12)",
                    border: "1px solid var(--borda)",
                    padding: "var(--spacing-16)",
                    flex: 1,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>{card}</span>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-8)" }}>{valores[i]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
            <i className={`ifdl-icon-filled ifdl-icon-${icon} text-white`} style={{ fontSize: "16px" }} />
          </span>
          <div className="flex flex-col gap-0.5">
            <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>{title}</h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>{conteudo.frase}</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-6">

          {/* Card 1 — Importar do delivery */}
          <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>Fixo</span>
            <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginBottom: "var(--spacing-4)" }}>Importar do delivery</span>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>87 itens</div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>use como base e personalize preços e itens para o salão</div>
            <button type="button" style={{ backgroundColor: "var(--invertido)", color: "#ffffff", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", marginTop: "var(--spacing-12)" }}>Importar como base</button>
          </div>

          {/* Card AI — Insight do cardápio */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px", borderTop: "1px solid var(--borda)", borderRight: "1px solid var(--borda)", borderBottom: "1px solid var(--borda)", borderLeft: "3px solid #EA1D2C", borderRadius: 12, background: "#FDFBF9" }}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}><path d="M8 1.5l1.5 4.2 4.2 1.5-4.2 1.5L8 13l-1.5-4.3L2.3 7.2l4.2-1.5L8 1.5z" fill="#EA1D2C" /></svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Insight do cardápio</span>
                <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--texto-secundario)", background: "var(--bg-secundario)", borderRadius: 5, padding: "2px 7px" }}>Assistente de AI</span>
              </div>
              <div style={{ fontSize: 13.5, color: "#4A453F", lineHeight: 1.5, marginTop: 5 }}>Seus 3 pratos mais pedidos no delivery (Risoto de camarão, Salmão grelhado, Bruschetta) vendem bem online. Considere criar versões para o salão com preço ajustado — seu cardápio do salão é independente.</div>
            </div>
            <button type="button" style={{ display: "flex", alignItems: "center", alignSelf: "center", height: 32, padding: "0 14px", border: "1px solid var(--borda)", borderRadius: 9, fontSize: 12.5, fontWeight: 600, cursor: "pointer", background: "transparent", whiteSpace: "nowrap", fontFamily: "var(--font-inter)" }}>Ver sugestões</button>
          </div>

          {/* Card 2 — Pratos que faltam */}
          <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>Cross-channel</span>
            <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginBottom: "var(--spacing-4)" }}>7 pratos populares no delivery</span>
            <div style={{ borderTop: "1px solid var(--borda)" }}>
              {PRATOS.map((prato, i) => (
                <div key={i} style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", padding: "var(--spacing-8) 0", borderBottom: i < PRATOS.length - 1 ? "1px solid var(--borda)" : "none" }}>{prato}</div>
              ))}
            </div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-12)" }}>inspiração do delivery — adapte com preço e porção para o salão</div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>Criar versões para o salão</button>
          </div>

          {/* Card 3 — Importar de outros sistemas */}
          <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>Fixo</span>
            <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginBottom: "var(--spacing-4)" }}>Importar de outros sistemas</span>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>Get In e Tagme</div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>o Cardápio Hub conecta o que você já usa em outros lugares</div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>Conectar sistemas</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className={`ifdl-icon-filled ifdl-icon-${icon} text-white`} style={{ fontSize: "16px" }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>{title}</h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>{conteudo.frase}</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-6">

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