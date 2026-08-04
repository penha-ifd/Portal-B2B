import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

const PLANO_INFO: Record<string, string> = {
  essencial:    'Plano Essencial · módulos básicos',
  profissional: 'Plano Profissional · todos os módulos',
  premium:      'Plano Premium · todos os módulos',
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
    probColor: 'var(--text-secundario)',
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
  const isBase = planoAtivo === 'novo';
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
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-sync text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>Confirmar presenças</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Valide check-ins e alimente o CRM com dados reais de presença.</p>
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


        {/* 1. Cabeçalho */}
        <div className="flex items-center justify-between">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
              Presenças de ontem
            </h2>
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
