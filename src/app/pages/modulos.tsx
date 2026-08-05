import { useState } from 'react';
import { usePlano, PlanoAtivo } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

// ── dados dos planos ────────────────────────────────────────────────────────

interface Beneficio {
  texto: string;
  destaque?: boolean;
}

const PLANOS: {
  key: PlanoAtivo;
  nome: string;
  preco: string;
  subtitulo: string;
  beneficios: Beneficio[];
  popular?: boolean;
}[] = [
  {
    key: 'essencial',
    nome: 'Essencial',
    preco: 'R$ 59/mês',
    subtitulo: 'Para quem está começando a digitalizar a operação',
    beneficios: [
      { texto: 'Cardápio digital com QR Code' },
      { texto: 'Agregador de pedidos (delivery + salão)' },
      { texto: 'CRM — Identificação e perfil do cliente' },
      { texto: 'PDV básico (1 dispositivo)' },
      { texto: 'Relatórios simples de vendas' },
      { texto: 'Suporte por chat e central de ajuda' },
    ],
  },
  {
    key: 'profissional',
    nome: 'Profissional',
    preco: 'R$ 249/mês',
    subtitulo: 'A operação completa integrada em um só lugar',
    popular: true,
    beneficios: [
      { texto: 'Tudo do Essencial' },
      { texto: 'PDV multi-terminal (até 5 dispositivos)' },
      { texto: 'Pagamento na mesa' },
      { texto: 'App garçom' },
      { texto: 'Mecânica de fidelidade' },
      { texto: 'Sistema de avaliações e reputação' },
      { texto: 'CRM avançado (Delivery + Salão integrados)' },
      { texto: 'Tuca IA — insights básicos' },
      { texto: 'Suporte prioritário (SLA 4h)' },
    ],
  },
  {
    key: 'premium',
    nome: 'Premium',
    preco: 'R$ 499/mês',
    subtitulo: 'Inteligência total + capital de giro para crescer',
    beneficios: [
      { texto: 'Tudo do Profissional' },
      { texto: 'PDV ilimitado (todos dispositivos)' },
      { texto: 'Tuca IA avançada (insights preditivos + recomendações de ações)' },
      { texto: 'Campanhas de CRM automatizadas (push, e-mail, WhatsApp)' },
      { texto: 'Gestão multi-unidade' },
      { texto: 'API aberta para integrações customizadas' },
      { texto: 'Atendimento VIP (SLA 2h)', destaque: true },
      { texto: 'Carteira de crédito iFood', destaque: true },
    ],
  },
];

// ── dados dos módulos ───────────────────────────────────────────────────────

const MODULOS: {
  nome: string;
  descricao: string;
  impacto: string;
  incluso: (p: PlanoAtivo) => boolean;
}[] = [
  {
    nome: 'Promoções',
    descricao: 'Crie cupons, cashback e campanhas de atração direto no painel. Acompanhe desempenho por campanha e veja quantos clientes cada promoção trouxe ao salão.',
    impacto: 'Cupons trouxeram 285 clientes confirmados esta semana',
    incluso: (p) => p === 'essencial' || p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Cardápio digital',
    descricao: 'Importa o cardápio que você já tem no delivery do iFood, em um clique. Destrava o cruzamento entre o que seus clientes pedem no delivery e o que você oferece no salão.',
    impacto: 'Destrava cruzamento delivery × salão no CRM',
    incluso: (p) => p === 'essencial' || p === 'profissional' || p === 'premium',
  },
  {
    nome: 'PDV',
    descricao: 'Integra o ponto de venda ao painel e enriquece os dados de faturamento e ticket médio em tempo real.',
    impacto: 'Troca estimativa por faturamento real — 23% mais precisão',
    incluso: (p) => p === 'essencial' || p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Clientes',
    descricao: 'Identifica quem realmente foi ao salão e constrói o perfil do cliente com histórico, frequência e ticket médio.',
    impacto: 'CRM com identificação de quem realmente foi ao salão',
    incluso: (p) => p === 'essencial' || p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Agregador de pedidos',
    descricao: 'Centraliza pedidos de diferentes canais em um único painel, reduzindo erros e tempo de operação.',
    impacto: 'Visão unificada de todos os canais num lugar',
    incluso: (p) => p === 'essencial' || p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Pagamento na mesa',
    descricao: 'Permite que o cliente feche a conta pelo app. Destrava a identificação pelo pagamento e aumenta a recorrência.',
    impacto: 'Check-in automático sem depender do garçom',
    incluso: (p) => p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Avaliações',
    descricao: 'Reúne as avaliações do Google e do iFood num lugar só e avisa quando alguma precisa de resposta. Destrava a nota do salão no painel e o fluxo de cortesia para avaliação negativa.',
    impacto: 'Nota do salão visível — 34% mais reservas',
    incluso: (p) => p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Reservas',
    descricao: 'Recebe reservas do app do iFood e organiza a ocupação do salão. Destrava a aba Reservas e a identificação de clientes.',
    impacto: 'Identifica 40% mais clientes pela reserva',
    incluso: (p) => p === 'profissional' || p === 'premium',
  },
  {
    nome: 'Fidelidade',
    descricao: 'Cria programas de fidelidade com selos e recompensas para clientes recorrentes. Destrava a taxa de retorno e o ticket médio por cliente fidelizado.',
    impacto: 'Clientes com selo voltam 2,4× mais',
    incluso: (p) => p === 'profissional' || p === 'premium',
  },
];


// ── página ──────────────────────────────────────────────────────────────────

export function ModulosPage() {
  const { planoAtivo, setPlanoAtivo } = usePlano();
  const isBase = planoAtivo === 'novo';
  const [confirmando, setConfirmando] = useState<PlanoAtivo | null>(null);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-store text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>Módulos e planos</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Escolha os módulos que fazem sentido para o seu negócio.</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col" style={{ gap: 'var(--spacing-40)' }}>

        {/* Cards de plano */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-16)' }}>
          {PLANOS.map((plano) => {
            const isCurrent = planoAtivo === plano.key;
            return (
              <div
                key={plano.key}
                style={{
                  borderRadius: 'var(--radius-12)',
                  border: plano.popular ? '2px solid var(--marca)' : '1px solid var(--borda)',
                  padding: 'var(--spacing-24)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {plano.popular && (
                  <div style={{
                    position: 'absolute',
                    top: 16,
                    right: -32,
                    backgroundColor: 'var(--marca)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
                    fontFamily: 'var(--font-inter)',
                    padding: '4px 40px',
                    transform: 'rotate(45deg)',
                  }}>
                    Mais popular
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: plano.popular ? 8 : 0 }}>
                  <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
                    {plano.nome}
                  </h2>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                    {plano.preco}
                  </span>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                    {plano.subtitulo}
                  </span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: 0, padding: 0, listStyle: 'none' }}>
                  {plano.beneficios.map((b) => (
                    <li key={b.texto} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      {b.destaque ? (
                        <span style={{ fontSize: 14, marginTop: 1, flexShrink: 0, color: 'var(--marca)' }}>&#11088;</span>
                      ) : (
                        <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 14, color: 'var(--sucesso)', marginTop: 2, flexShrink: 0 }} />
                      )}
                      <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                        {b.texto}
                      </span>
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <button type="button" disabled style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--bg-terciario)', color: 'var(--text-desabilitado)', border: 'none', borderRadius: 'var(--radius-pill)', padding: '10px 16px', cursor: 'default', marginTop: 'auto' }}>
                    Plano atual
                  </button>
                ) : (
                  <button type="button" onClick={() => setConfirmando(plano.key)} style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--invertido)', color: '#ffffff', border: 'none', borderRadius: 'var(--radius-pill)', padding: '10px 16px', cursor: 'pointer', marginTop: 'auto' }}>
                    Escolher plano
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Seção Módulos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
            Módulos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-16)' }}>
            {MODULOS.map((mod) => {
              const on = mod.incluso(planoAtivo);
              return (
                <div key={mod.nome} style={{ border: on ? '1px solid var(--marca)' : '1px solid var(--borda)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-16)', position: 'relative', transition: 'border-color 200ms' }}>
                  {on && (
                    <i className="ifdl-icon-filled ifdl-icon-check" style={{ position: 'absolute', top: 12, right: 12, fontSize: 16, color: 'var(--marca)' }} />
                  )}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                      {mod.nome}
                    </span>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)', lineHeight: 1.5 }}>
                      {mod.descricao}
                    </span>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--marca)' }}>
                      {mod.impacto}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Modal de confirmação */}
      {confirmando && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} onClick={() => setConfirmando(null)} />
          <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-24)', maxWidth: 360, width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
              Mudar para {PLANOS.find((p) => p.key === confirmando)?.nome}?
            </h2>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)', lineHeight: 1.5 }}>
              Seu plano será alterado imediatamente. Você pode trocar novamente a qualquer momento.
            </span>
            <div style={{ display: 'flex', gap: 'var(--spacing-8)', justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setConfirmando(null)} style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'transparent', color: 'var(--text-primario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-pill)', padding: '10px 16px', cursor: 'pointer' }}>
                Cancelar
              </button>
              <button type="button" onClick={() => { setPlanoAtivo(confirmando); setConfirmando(null); }} style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--invertido)', color: '#ffffff', border: 'none', borderRadius: 'var(--radius-pill)', padding: '10px 16px', cursor: 'pointer' }}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
