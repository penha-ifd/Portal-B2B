interface ColorSwatchProps {
  token: string;
  value: string;
  label?: string;
}

export function ColorSwatch({ token, value, label }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full aspect-square rounded-xl border border-[var(--borda)]"
        style={{ backgroundColor: value }}
      />
      <div className="flex flex-col gap-0.5">
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-12)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primario)',
          }}
        >
          {label || token}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-11)',
            color: 'var(--text-secundario)',
          }}
        >
          {token}
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: 'var(--font-size-11)',
            color: 'var(--text-desabilitado)',
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
