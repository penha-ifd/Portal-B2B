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

      {/* Quatro passos */}
      <section style={{ padding: '64px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-40)' }}>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0 }}>
            Como funciona
          </h2>
          <div style={{ display: 'flex', gap: 4, backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-pill)', padding: 4 }}>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: '#ffffff', backgroundColor: 'var(--invertido)', borderRadius: 'var(--radius-pill)', padding: '6px 16px' }}>Para você</span>
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', padding: '6px 16px' }}>Para seu cliente</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { titulo: 'Crie uma promoção pro salão', desc: 'Monte ofertas pra atrair clientes nos períodos de menor movimento' },
            { titulo: 'Seu salão aparece no app', desc: 'O iFood divulga sua oferta pra clientes próximos na sua região' },
            { titulo: 'Receba clientes no salão', desc: 'O cliente vai ao salão e faz o check-in no app para liberar a oferta' },
            { titulo: 'Controle suas promoções', desc: 'Defina horários, público e limites sem afetar sua operação' },
          ].map((step, i) => (
            <div key={i} style={{ width: 306, height: 164, borderRadius: 'var(--radius-12)', backgroundColor: 'var(--bg-secundario)', padding: 'var(--spacing-20)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
              <i className="ifdl-icon-line ifdl-icon-store" style={{ fontSize: 24, color: 'var(--text-primario)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)' }}>{step.titulo}</span>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', lineHeight: 1.4 }}>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vídeo */}
      <section style={{ padding: '0 48px 64px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-24)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', display: 'block', marginBottom: 'var(--spacing-8)' }}>Em menos de 1 minuto</span>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0 }}>Veja o Comer Fora em ação</h2>
        </div>
        <div style={{ width: '100%', maxWidth: 1250, height: 400, borderRadius: 'var(--radius-12)', backgroundColor: 'var(--bg-secundario)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--invertido)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="#ffffff"/></svg>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section style={{ padding: '64px 48px', display: 'flex', gap: 'var(--spacing-40)', alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>Vantagens</span>
          <h2 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0 }}>Atraia clientes com estratégia e conheça quem entra no salão</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
            {[
              { titulo: 'Aumentar movimento com estratégia', desc: 'Preencha horários ociosos e promova itens estratégicos' },
              { titulo: 'Conhecer os hábitos de consumo dos seus clientes', desc: 'Tenha acesso a nome, ticket médio, frequência, etc' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'flex-start' }}>
                <i className="ifdl-icon-line ifdl-icon-check" style={{ fontSize: 20, color: 'var(--sucesso)', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', display: 'block' }}>{item.titulo}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)' }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <button type="button" style={{ alignSelf: 'flex-start', padding: '12px 24px', border: 'none', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--invertido)', color: '#ffffff', cursor: 'pointer', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)' }}>
            Começar agora
          </button>
        </div>
        <div style={{ width: 480, height: 400, borderRadius: 'var(--radius-12)', backgroundColor: 'var(--bg-secundario)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', color: 'var(--text-desabilitado)' }}>Device mockup</span>
        </div>
      </section>
    </div>
  );
}
