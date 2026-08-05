interface DsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DsSection({ title, description, children }: DsSectionProps) {
  return (
    <section className="mb-12">
      <h2
        className="mb-1"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: 'var(--font-size-24)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--text-primario)',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mb-6"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'var(--font-size-14)',
            color: 'var(--text-secundario)',
          }}
        >
          {description}
        </p>
      )}
      {!description && <div className="mb-6" />}
      {children}
    </section>
  );
}
