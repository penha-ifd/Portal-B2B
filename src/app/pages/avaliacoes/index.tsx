import { Outlet, useLocation } from 'react-router';

export default function AvaliacoesLayout() {
  const { pathname } = useLocation();
  const pageTitle = pathname.endsWith('/visao-geral') ? 'Visão Geral' : 'Avaliações';

  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-store text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>{pageTitle}</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Acompanhe a percepção dos clientes e responda avaliações.</p>
        </div>
        <button type="button" style={{ marginLeft: 'auto', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)', background: 'var(--bg-secundario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          ⬇ Exportar
        </button>
      </div>
      <div className="flex flex-col p-6" style={{ gap: 'var(--spacing-24)', animation: 'fadeSlideIn 400ms ease-out both' }}>
        <Outlet />
      </div>
    </div>
  );
}
