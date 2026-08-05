import { usePlano, PlanoAtivo } from '../state/plano-context';

const OPTIONS: { value: PlanoAtivo; label: string }[] = [
  { value: 'novo', label: 'Novo' },
  { value: 'essencial', label: 'Essencial' },
  { value: 'profissional', label: 'Profissional' },
  { value: 'premium', label: 'Premium' },
];

export function PlanSwitcher() {
  const { planoAtivo, setPlanoAtivo } = usePlano();

  return (
    <div
      className="hidden md:flex items-center"
      style={{
        gap: 4,
        backgroundColor: 'var(--invertido)',
        borderRadius: 'var(--radius-pill)',
        padding: '4px 10px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 'var(--font-size-12)',
          fontWeight: 'var(--font-weight-regular)',
          letterSpacing: 'var(--letter-spacing)',
          color: 'rgba(255,255,255,0.6)',
          marginRight: 2,
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
            onClick={() => setPlanoAtivo(opt.value as PlanoAtivo)}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'var(--font-size-12)',
              fontWeight: 'var(--font-weight-regular)',
              letterSpacing: 'var(--letter-spacing)',
              backgroundColor: active ? '#ffffff' : 'transparent',
              color: active ? 'var(--invertido)' : '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '3px 10px',
              cursor: 'pointer',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
