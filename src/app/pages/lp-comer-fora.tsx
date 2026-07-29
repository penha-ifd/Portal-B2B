export function LpComerFora() {
  return (
    <div style={{ maxWidth: 1314, margin: '0 auto', width: '100%' }}>
      {/* Hero */}
      <section style={{ display: 'flex', alignItems: 'center', minHeight: 744, gap: 0 }}>
        <div style={{ flex: 1, padding: 48, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
          <span style={{
            display: 'inline-block', alignSelf: 'flex-start',
            fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing)', color: '#ffffff',
            backgroundColor: 'var(--marca)', borderRadius: 'var(--radius-pill)', padding: '4px 12px',
          }}>
            Comer Fora by iFood
          </span>
          <h1 style={{
            fontFamily: 'var(--font-inter)', fontSize: '32px', fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', lineHeight: 1.2, margin: 0,
          }}>
            Transforme horários vazios no salão em mais mesas ocupadas
          </h1>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-16)', fontWeight: 'var(--font-weight-regular)',
            letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', lineHeight: 1.5, margin: 0,
          }}>
            Crie promoções pra atrair clientes sem perder o controle da operação com o Comer Fora
          </p>
          <button type="button" style={{
            width: 257, padding: '14px 24px', border: 'none', borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--marca)', color: '#ffffff', cursor: 'pointer',
            fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-16)', fontWeight: 'var(--font-weight-medium)',
            letterSpacing: 'var(--letter-spacing)',
          }}>
            Ativar Comer Fora
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
            <i className="ifdl-icon-line ifdl-icon-2-people" style={{ fontSize: 16, color: 'var(--text-secundario)' }} />
            <span style={{
              fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)',
              letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)',
            }}>
              +59 restaurantes da sua região ativaram
            </span>
          </div>
        </div>
        <div style={{ width: 553, height: 500, borderRadius: 'var(--radius-12)', backgroundColor: 'var(--bg-secundario)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', color: 'var(--text-desabilitado)' }}>Hero image</span>
        </div>
      </section>
    </div>
  );
}
