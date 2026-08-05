import { Outlet } from 'react-router';

export default function CrmLayout() {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-2-people text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>CRM</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Conheça seu público, segmente e ative campanhas personalizadas.</p>
        </div>
      </div>
      <div className="flex flex-col p-6" style={{ gap: 'var(--spacing-24)', animation: 'fadeSlideIn 400ms ease-out both' }}>
        <Outlet />
      </div>
    </div>
  );
}
