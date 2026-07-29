import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

const PLANO_INFO: Record<string, string> = {
  base:      'Plano Base · nenhum módulo ativo',
  essencial: 'Plano Essencial · Cardápio, Reservas, PDV',
  avancado:  'Plano Avançado · todos os módulos',
};

// ── dados fixos ─────────────────────────────────────────────────────────────

interface Linha {
  id: number;
  nome: string;
  horario: string;
  candidato: string;
  candidatoExtra?: string;
  probabilidade: string;
  probColor: string;
  semPar?: boolean;
  btnPrimario: string;
  btnPrimarioStyle: 'filled' | 'bordered';
  btnSecundario: string;
  btnSecundarioStyle: 'filled' | 'bordered';
}

const LINHAS_INIT: Linha[] = [
  {
    id: 1,
    nome: 'Ana Beatriz',
    horario: '20h14 · 2 pessoas',
    candidato: 'Mesa 12 · 20h18 → 21h40 · R$ 187',
    probabilidade: '92% provável',
    probColor: 'var(--sucesso)',
    btnPrimario: 'Foi ela',
    btnPrimarioStyle: 'filled',
    btnSecundario: 'Não veio',
    btnSecundarioStyle: 'bordered',
  },
  {
    id: 2,
    nome: 'Rodrigo Marques',
    horario: '21h02 · 4 pessoas',
    candidato: 'Mesa 7 · 21h05 → 22h50 · R$ 412',
    candidatoExtra: 'Outro candidato: mesa 3 · 21h11 · R$ 388',
    probabilidade: '64% provável',
    probColor: 'var(--atencao)',
    btnPrimario: 'Foi ele',
    btnPrimarioStyle: 'filled',
    btnSecundario: 'Não veio',
    btnSecundarioStyle: 'bordered',
  },
  {
    id: 3,
    nome: 'Camila Nunes',
    horario: '19h40 · 2 pessoas',
    candidato: 'Nenhuma mesa aberta entre 19h30 e 20h30',
    probabilidade: 'Sem par',
    probColor: 'var(--marca)',
    semPar: true,
    btnPrimario: 'Veio',
    btnPrimarioStyle: 'bordered',
    btnSecundario: 'Não veio',
    btnSecundarioStyle: 'filled',
  },
];

const TOTAL = 100;
const INITIAL_CASADOS = 92;

// ── componente ──────────────────────────────────────────────────────────────

export function ConciliacaoPage() {
  const navigate = useNavigate();
  const { planoAtivo } = usePlano();
  const isBase = planoAtivo === 'base';
  const [resolvidos, setResolvidos] = useState<Set<number>>(new Set());

  function resolver(id: number) {
    setResolvidos((prev) => new Set(prev).add(id));
  }

  function resolverTodos() {
    setResolvidos(new Set(LINHAS_INIT.map((l) => l.id)));
  }

  const casados = INITIAL_CASADOS + resolvidos.size;
  const pendentes = LINHAS_INIT.length - resolvidos.size;

  const btnFilled: React.CSSProperties = {
    ...fontBase,
    fontSize: 'var(--font-size-12)',
    fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
    backgroundColor: 'var(--invertido)',
    color: '#ffffff',
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    padding: '6px 14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  };

  const btnBordered: React.CSSProperties = {
    ...fontBase,
    fontSize: 'var(--font-size-12)',
    fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'],
    backgroundColor: 'transparent',
    color: 'var(--text-primario)',
    border: '1px solid var(--borda)',
    borderRadius: 'var(--radius-pill)',
    padding: '6px 14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  };

  return (
    <div className="relative">
      {/* Sub-header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200"
        style={{ backgroundColor: isBase ? 'var(--atencao)' : '#ffffff' }}
      >
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-sync text-white" style={{ fontSize: '12px' }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: isBase ? 'var(--text-primario)' : '#141414' }}>Conciliação</span>
        <div className="flex items-center gap-3 ml-auto">
          <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: isBase ? 'var(--text-primario)' : 'var(--text-secundario)' }}>
            {isBase ? 'Ative um módulo para liberar inteligência e CRM' : PLANO_INFO[planoAtivo]}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col" style={{ gap: 'var(--spacing-24)' }}>

        {/* Banner — flywheel */}
        <div style={{ backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="flex flex-col gap-1">
            <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
              Cada check-in confirmado alimenta o CRM
            </span>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
              Hoje 8% da sua base está identificada. Confirmar os pendentes é o que destrava segmentação e campanhas.
            </span>
          </div>
          <span
            onClick={() => navigate('/jornada')}
            style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--marca)', cursor: 'pointer', flexShrink: 0 }}
          >
            Ver sua jornada
          </span>
        </div>

        {/* Composer */}
        <div style={{ marginBottom: 'var(--spacing-24)' }}>
          <div className="flex items-center" style={{ height: 56, backgroundColor: 'var(--bg-primario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', paddingLeft: 'var(--spacing-16)', paddingRight: 'var(--spacing-16)', gap: 'var(--spacing-8)' }}>
            <input
              type="text"
              placeholder="Peça algo sobre a conciliação"
              style={{ flex: 1, ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-primario)', background: 'none', border: 'none', outline: 'none' }}
            />
            <i className="ifdl-icon-line ifdl-icon-microphone" style={{ fontSize: 20, color: 'var(--text-secundario)' }} />
            <button type="button" className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40, borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--marca)', border: 'none', cursor: 'pointer' }}>
              <i className="ifdl-icon-line ifdl-icon-arrow-up" style={{ fontSize: 18, color: '#ffffff' }} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 'var(--spacing-12)' }}>
            {['Resolver os pendentes', 'Por que 27 não confirmaram'].map((chip) => (
              <button key={chip} type="button" style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-pill)', padding: '6px 12px', ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secundario)', backgroundColor: 'transparent', cursor: 'pointer' }}>
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Cabeçalho */}
        <div className="flex items-center justify-between">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
              Conciliação de ontem
            </span>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
              {casados} de {TOTAL} casados automaticamente
            </span>
          </div>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], backgroundColor: 'var(--sucesso)', color: '#ffffff', borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>
            R$ 340 em taxas de no-show
          </span>
        </div>

        {/* 2. Faixa agêntica */}
        {pendentes > 0 && (
          <div style={{ backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-16)' }}>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', lineHeight: 1.5 }}>
              Sobraram {pendentes} check-in{pendentes !== 1 ? 's' : ''} sem mesa correspondente. Posso casar todos com o palpite mais provável e te mostrar o resumo.
            </span>
            <button type="button" onClick={resolverTodos} style={{ ...btnFilled, fontSize: 'var(--font-size-14)', padding: '8px 16px' }}>
              Resolver os {pendentes}
            </button>
          </div>
        )}

        {/* 3. Lista */}
        <div style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', overflow: 'hidden' }}>
          {LINHAS_INIT.map((linha, i) => {
            const done = resolvidos.has(linha.id);
            const isLast = i === LINHAS_INIT.length - 1;
            const rowBorder = !isLast ? { borderBottom: '1px solid var(--borda)' } : {};

            if (done) {
              return (
                <div key={linha.id} style={{ ...rowBorder, display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)', height: 40, padding: '0 var(--spacing-16)' }}>
                  <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 16, color: 'var(--sucesso)' }} />
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                    Registrado
                  </span>
                </div>
              );
            }

            return (
              <div key={linha.id} style={{ ...rowBorder, display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)', padding: '12px 16px' }}>
                {/* Nome + horário */}
                <div style={{ width: 150, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                    {linha.nome}
                  </span>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                    {linha.horario}
                  </span>
                </div>

                {/* Caixa candidato */}
                <div style={{ flex: 1, backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-8)', padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: linha.semPar ? 'var(--text-secundario)' : 'var(--text-primario)' }}>
                      {linha.candidato}
                    </span>
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: linha.probColor, flexShrink: 0 }}>
                      {linha.probabilidade}
                    </span>
                  </div>
                  {linha.candidatoExtra && (
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-desabilitado)' }}>
                      {linha.candidatoExtra}
                    </span>
                  )}
                </div>

                {/* Botões */}
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <button type="button" onClick={() => resolver(linha.id)}
                    style={linha.btnPrimarioStyle === 'filled' ? btnFilled : btnBordered}>
                    {linha.btnPrimario}
                  </button>
                  <button type="button" onClick={() => resolver(linha.id)}
                    style={linha.btnSecundarioStyle === 'filled' ? btnFilled : btnBordered}>
                    {linha.btnSecundario}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
