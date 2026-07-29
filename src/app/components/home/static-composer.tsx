import { useState } from 'react';

const CHIPS = [
  'Como foi meu fim de semana',
  'Por que a sexta caiu',
  'Abrir mais mesas sexta às 20h',
  'Quem são meus clientes recorrentes',
];

interface Props {
  onSubmit: (text: string) => void;
}

export function StaticComposer({ onSubmit }: Props) {
  const [value, setValue] = useState('');

  function submit() {
    const text = value.trim();
    if (!text) return;
    onSubmit(text);
    setValue('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') submit();
  }

  function handleChip(chip: string) {
    onSubmit(chip);
    setValue('');
  }

  return (
    <div style={{ marginBottom: 'var(--spacing-24)' }}>
      {/* Campo */}
      <div
        className="flex items-center"
        style={{
          height: 56,
          backgroundColor: 'var(--bg-primario)',
          border: '1px solid var(--borda)',
          borderRadius: 'var(--radius-12)',
          paddingLeft: 'var(--spacing-16)',
          paddingRight: 'var(--spacing-16)',
          gap: 'var(--spacing-8)',
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="O que você quer saber ou fazer hoje?"
          style={{
            flex: 1,
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-14)',
            fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing)',
            color: 'var(--text-primario)',
            background: 'none',
            border: 'none',
            outline: 'none',
          }}
        />

        <i
          className="ifdl-icon-line ifdl-icon-microphone"
          style={{ fontSize: 20, color: 'var(--text-secundario)' }}
        />

        <button
          type="button"
          onClick={submit}
          className="flex items-center justify-center shrink-0"
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--marca)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <i className="ifdl-icon-line ifdl-icon-arrow-up" style={{ fontSize: 18, color: '#ffffff' }} />
        </button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2" style={{ marginTop: 'var(--spacing-12)' }}>
        {CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => handleChip(chip)}
            style={{
              border: '1px solid var(--borda)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 12px',
              fontFamily: 'var(--font-inter)',
              fontSize: 'var(--font-size-12)',
              fontWeight: 'var(--font-weight-regular)',
              letterSpacing: 'var(--letter-spacing)',
              color: 'var(--text-secundario)',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
