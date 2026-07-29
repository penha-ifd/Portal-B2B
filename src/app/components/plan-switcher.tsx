import { usePlano, PlanoAtivo } from '../state/plano-context';

const OPTIONS: { value: PlanoAtivo; label: string }[] = [
  { value: 'base', label: 'Base' },
  { value: 'essencial', label: 'Essencial' },
  { value: 'avancado', label: 'Avançado' },
];

export function PlanSwitcher() {
  const { planoAtivo, setPlanoAtivo, usarVazio, setUsarVazio } = usePlano();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 8,
        right: 8,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        backgroundColor: 'var(--invertido)',
        borderRadius: 'var(--radius-12)',
        padding: '8px 16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-12)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing)',
            color: '#ffffff',
            marginRight: 4,
          }}
        >
          Simular plano
        </span>
        {OPTIONS.map((opt) => {
          const active = planoAtivo === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setPlanoAtivo(opt.value)}
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'var(--font-size-12)',
                fontWeight: 'var(--font-weight-regular)',
                letterSpacing: 'var(--letter-spacing)',
                backgroundColor: active ? '#ffffff' : 'transparent',
                color: active ? 'var(--invertido)' : '#ffffff',
                border: 'none',
                borderRadius: 'var(--radius-pill)',
                padding: '4px 12px',
                cursor: 'pointer',
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 6 }}>
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-12)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing)',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Dev: {usarVazio ? 'mockDashboardVazio' : 'mockDashboard'}
        </span>
        <button
          type="button"
          onClick={() => setUsarVazio((v) => !v)}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-12)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing)',
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: 'none',
            borderRadius: 'var(--radius-pill)',
            padding: '4px 12px',
            cursor: 'pointer',
          }}
        >
          Alternar
        </button>
      </div>
    </div>
  );
}
