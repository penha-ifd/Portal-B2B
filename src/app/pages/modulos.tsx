import { usePlano, PlanoAtivo } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

// ── dados dos planos ────────────────────────────────────────────────────────

const PLANOS: {
  key: PlanoAtivo;
  nome: string;
  preco: string;
  subtitulo: string;
  beneficios: string[];
  destaque?: boolean;
}[] = [
  {
    key: 'base',
    nome: 'Base',
    preco: 'R$ 0',
    subtitulo: 'Sua vitrine e seus cupons',
    beneficios: [
      'Quantos clientes seus já pedem delivery e nunca foram ao salão',
      'Funil de cupons e alcance na vitrine',
      'Comparativo com restaurantes da sua região',
    ],
  },
  {
    key: 'essencial',
    nome: 'Essencial',
    preco: 'R$ 600/mês',
    subtitulo: 'Qualquer módulo libera o CRM e a inteligência',
    beneficios: [
      'Tudo do plano Base',
      'Um módulo ativo: Reservas ou PDV',
      'CRM com identificação de quem realmente foi ao salão',
      'Retorno do investimento, ticket médio e origem do público',
      'Segmentos automáticos e sugestões do agente',
    ],
    destaque: true,
  },
  {
    key: 'avancado',
    nome: 'Avançado',
    preco: 'R$ 1.200/mês',
    subtitulo: 'Todos os módulos liberados',
    beneficios: [
      'Tudo do plano Essencial',
      'Reservas, PDV, Pagamento na mesa, Agregador, Avaliações e Fidelidade',
      'Identificação de clientes em todos os canais',
      'Relatórios avançados e exportação',
      'Suporte prioritário',
    ],
  },
];

// ── dados dos módulos ───────────────────────────────────────────────────────

const MODULOS: {
  nome: string;
  descricao: string;
  ativo: (p: PlanoAtivo) => boolean;
}[] = [
  {
    nome: 'Cardápio digital',
    descricao: 'Importa o cardápio que você já tem no delivery do iFood, em um clique. Destrava o cruzamento entre o que seus clientes pedem no delivery e o que você oferece no salão.',
    ativo: (p) => p === 'essencial' || p === 'avancado',
  },
  {
    nome: 'Reservas',
    descricao: 'Recebe reservas do app do iFood e organiza a ocupação do salão. Destrava a aba Reservas e a identificação de clientes.',
    ativo: (p) => p === 'essencial' || p === 'avancado',
  },
  {
    nome: 'PDV',
    descricao: 'Integra o ponto de venda ao painel e enriquece os dados de faturamento e ticket médio em tempo real.',
    ativo: (p) => p === 'essencial' || p === 'avancado',
  },
  {
    nome: 'Pagamento na mesa',
    descricao: 'Permite que o cliente feche a conta pelo app. Destrava a identificação pelo pagamento e aumenta a recorrência.',
    ativo: (p) => p === 'avancado',
  },
  {
    nome: 'Agregador de pedidos',
    descricao: 'Centraliza pedidos de diferentes canais em um único painel, reduzindo erros e tempo de operação.',
    ativo: (p) => p === 'avancado',
  },
  {
    nome: 'Avaliações',
    descricao: 'Reúne as avaliações do Google e do iFood num lugar só e avisa quando alguma precisa de resposta. Destrava a nota do salão no painel e o fluxo de cortesia para avaliação negativa.',
    ativo: (p) => p === 'avancado',
  },
  {
    nome: 'Fidelidade',
    descricao: 'Cria programas de fidelidade com selos e recompensas para clientes recorrentes. Destrava a taxa de retorno e o ticket médio por cliente fidelizado.',
    ativo: (p) => p === 'avancado',
  },
];

// ── toggle visual ───────────────────────────────────────────────────────────

function Toggle({ on }: { on: boolean }) {
  return (
    <div style={{
      width: 40, height: 24, borderRadius: 12,
      backgroundColor: on ? 'var(--sucesso)' : 'var(--bg-terciario)',
      position: 'relative', flexShrink: 0, transition: 'background-color 200ms',
    }}>
      <div style={{
        position: 'absolute', top: 3,
        left: on ? 19 : 3,
        width: 18, height: 18, borderRadius: '50%',
        backgroundColor: '#ffffff',
        transition: 'left 200ms',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </div>
  );
}

// ── página ──────────────────────────────────────────────────────────────────

export function ModulosPage() {
  const { planoAtivo, setPlanoAtivo } = usePlano();
  const isBase = planoAtivo === 'base';

  return (
    <div className="relative">
      {/* Sub-header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200"
        style={{ backgroundColor: isBase ? 'var(--atencao)' : '#ffffff' }}
      >
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-store text-white" style={{ fontSize: '12px' }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: isBase ? 'var(--text-primario)' : '#141414' }}>Módulos e planos</span>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col" style={{ gap: 'var(--spacing-40)' }}>

        {/* Cards de plano */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-16)' }}>
          {PLANOS.map((plano) => {
            const isCurrent = planoAtivo === plano.key;
            return (
              <div
                key={plano.key}
                style={{
                  borderRadius: 'var(--radius-12)',
                  border: plano.destaque ? '2px solid var(--marca)' : '1px solid var(--borda)',
                  padding: 'var(--spacing-24)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)',
                  position: 'relative',
                }}
              >
                {plano.destaque && (
                  <div style={{ position: 'absolute', top: -1, left: 'var(--spacing-24)' }}>
                    <span style={{
                      ...fontBase,
                      fontSize: 'var(--font-size-12)',
                      fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
                      backgroundColor: 'var(--marca)', color: '#ffffff',
                      borderRadius: 'var(--radius-pill)', padding: '3px 10px',
                      display: 'inline-block',
                      transform: 'translateY(-50%)',
                    }}>
                      Mais contratado
                    </span>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: plano.destaque ? 8 : 0 }}>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                    {plano.nome}
                  </span>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                    {plano.preco}
                  </span>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                    {plano.subtitulo}
                  </span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0, listStyle: 'none' }}>
                  {plano.beneficios.map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 14, color: 'var(--sucesso)', marginTop: 2, flexShrink: 0 }} />
                      <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <button type="button" disabled style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--bg-terciario)', color: 'var(--text-desabilitado)', border: 'none', borderRadius: 'var(--radius-pill)', padding: '10px 16px', cursor: 'default', marginTop: 'auto' }}>
                    Plano atual
                  </button>
                ) : (
                  <button type="button" onClick={() => setPlanoAtivo(plano.key)} style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--invertido)', color: '#ffffff', border: 'none', borderRadius: 'var(--radius-pill)', padding: '10px 16px', cursor: 'pointer', marginTop: 'auto' }}>
                    Escolher plano
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Seção Módulos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
            Módulos
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-16)' }}>
            {MODULOS.map((mod) => {
              const on = mod.ativo(planoAtivo);
              return (
                <div key={mod.nome} style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-16)' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                      {mod.nome}
                    </span>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)', lineHeight: 1.5 }}>
                      {mod.descricao}
                    </span>
                  </div>
                  <Toggle on={on} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
