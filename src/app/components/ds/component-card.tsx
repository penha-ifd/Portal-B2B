interface ComponentCardProps {
  name: string;
  file?: string;
  children: React.ReactNode;
}

export function ComponentCard({ name, file, children }: ComponentCardProps) {
  return (
    <div className="border border-[var(--borda)] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[var(--borda)] bg-[var(--bg-secundario)]">
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-14)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primario)',
          }}
        >
          {name}
        </span>
        {file && (
          <span
            className="ml-3 font-mono"
            style={{
              fontSize: 'var(--font-size-11)',
              color: 'var(--text-desabilitado)',
            }}
          >
            {file}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-wrap items-center gap-4">
        {children}
      </div>
    </div>
  );
}
