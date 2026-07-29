export interface GeneratedCard {
  id: string;
  question: string;
  body: string;
  secondAction: string;
  kind?: 'answer' | 'action' | 'nudge';
  confirmed?: boolean;
  confirmedLabel?: string;
}

interface Props {
  generatedCards?: GeneratedCard[];
  onConfirm?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export function AnalyticsGrid({ generatedCards = [], onConfirm, onRemove }: Props) {

  if (generatedCards.length === 0) return null;

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-inter)',
    fontSize: 'var(--font-size-12)',
    fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'],
    letterSpacing: 'var(--letter-spacing)',
    color: 'var(--text-secundario)',
  };

  const chipStyle: React.CSSProperties = {
    border: '1px solid var(--borda)',
    borderRadius: 'var(--radius-pill)',
    padding: '4px 10px',
    fontFamily: 'var(--font-inter)',
    fontSize: 'var(--font-size-12)',
    fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'],
    letterSpacing: 'var(--letter-spacing)',
    color: 'var(--text-secundario)',
    backgroundColor: 'transparent',
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-16)' }}>
      {generatedCards.map((card) => {
        const baseStyle: React.CSSProperties = {
          gridColumn: 'span 2',
          backgroundColor: 'var(--bg-primario)',
          border: '1px solid var(--marca)',
          borderRadius: 'var(--radius-12)',
        };
        const bodyTxtStyle: React.CSSProperties = {
          fontFamily: 'var(--font-inter)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'],
          letterSpacing: 'var(--letter-spacing)',
          color: 'var(--text-primario)',
          lineHeight: 1.5,
          margin: 0,
        };

        if (card.kind === 'action' && card.confirmed) {
          return (
            <div key={card.id} style={{ ...baseStyle, display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)', height: 40, padding: '0 var(--spacing-16)' }}>
              <i className="ifdl-icon-filled ifdl-icon-check" style={{ fontSize: 16, color: 'var(--sucesso)' }} />
              <span style={{ ...bodyTxtStyle, lineHeight: 1 }}>{card.confirmedLabel}</span>
            </div>
          );
        }

        if (card.kind === 'action') {
          return (
            <div key={card.id} style={{ ...baseStyle, padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <span style={labelStyle}>Confirmar ação</span>
              <p style={bodyTxtStyle}>{card.body}</p>
              <div className="flex items-center gap-2" style={{ marginTop: 'var(--spacing-4)' }}>
                <button
                  type="button"
                  onClick={() => onConfirm?.(card.id)}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], letterSpacing: 'var(--letter-spacing)', backgroundColor: 'var(--invertido)', color: '#ffffff', border: 'none', borderRadius: 'var(--radius-pill)', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  onClick={() => onRemove?.(card.id)}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], letterSpacing: 'var(--letter-spacing)', background: 'none', border: 'none', color: 'var(--text-secundario)', cursor: 'pointer', padding: '8px 4px' }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          );
        }

        if (card.kind === 'nudge') {
          const maskedRows = [
            { widths: [80, 48, 56], dim: false },
            { widths: [96, 40, 64], dim: false },
            { widths: [72, 52, 48], dim: true },
            { widths: [88, 44, 60], dim: true },
          ];
          return (
            <div key={card.id} style={{ gridColumn: 'span 2', backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {maskedRows.map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: row.dim ? 0.45 : 1 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: 'var(--bg-terciario)', flexShrink: 0 }} />
                    {row.widths.map((w, j) => (
                      <div key={j} style={{ width: w, height: 8, borderRadius: 4, backgroundColor: 'var(--bg-terciario)' }} />
                    ))}
                  </div>
                ))}
              </div>
              <p style={{ ...bodyTxtStyle, margin: 0 }}>{card.body}</p>
              <div>
                <button
                  type="button"
                  onClick={() => navigate('/modulos')}
                  style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], letterSpacing: 'var(--letter-spacing)', backgroundColor: 'var(--invertido)', color: '#ffffff', border: 'none', borderRadius: 'var(--radius-pill)', padding: '8px 16px', cursor: 'pointer' }}
                >
                  Ver módulos
                </button>

              </div>
            </div>
          );
        }

        return (
          <div key={card.id} style={{ ...baseStyle, padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
            <span style={{ ...labelStyle, color: 'var(--marca)' }}>
              Gerado agora · «{card.question}»
            </span>
            <p style={bodyTxtStyle}>{card.body}</p>
            <div className="flex gap-2" style={{ marginTop: 'var(--spacing-4)' }}>
              <span style={chipStyle}>Fixar no canvas</span>
              <span style={chipStyle}>{card.secondAction}</span>
            </div>
          </div>
        );
      })}

      </div>
  );
}
