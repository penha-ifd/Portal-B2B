interface TypeSampleProps {
  className: string;
  label: string;
  size: string;
  weight: string;
  lineHeight: string;
}

export function TypeSample({ className, label, size, weight, lineHeight }: TypeSampleProps) {
  return (
    <div className="flex items-baseline gap-6 py-3 border-b border-[var(--borda)]">
      <div className="w-[200px] shrink-0">
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-11)',
            color: 'var(--text-secundario)',
          }}
        >
          {label}
        </span>
        <div className="flex gap-2 mt-0.5">
          <span className="font-mono text-[10px] text-[var(--text-desabilitado)]">
            {size} / {weight} / {lineHeight}
          </span>
        </div>
      </div>
      <span className={className}>
        Portal Comer Fora B2B
      </span>
    </div>
  );
}
