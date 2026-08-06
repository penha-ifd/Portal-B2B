import { Outlet, useLocation } from 'react-router';
import './styles.css';

export const AVALIACOES_REFERENCE_FRAME_CLASS = 'avaliacoes-reference-page';

export default function AvaliacoesLayout() {
  const { pathname } = useLocation();
  const isOverview = pathname.endsWith('/visao-geral');
  const title = isOverview ? 'Visão Geral' : 'Avaliações';
  const subtitle = isOverview
    ? 'Acompanhe a percepção dos clientes em todos os canais.'
    : 'Gerencie e responda avaliações dos clientes.';

  return (
    <div className="avaliacoes-layout">
      <header className="avaliacoes-page-header">
        <div className="avaliacoes-page-heading">
          <span className="avaliacoes-page-icon" aria-hidden="true">
            <i className="ifdl-icon-filled ifdl-icon-store" style={{ fontSize: 17 }} />
          </span>
          <div className="avaliacoes-page-heading-copy">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="avaliacoes-page-actions">
          <button type="button" className="avaliacoes-date-control" aria-label="Selecionar período">
            <i className="ifdl-icon-line ifdl-icon-calendar" style={{ fontSize: 14 }} />
            <span>01/07/2026 — 05/08/2026</span>
          </button>
          <button type="button" className="avaliacoes-export-button">
            <i className="ifdl-icon-line ifdl-icon-download" style={{ fontSize: 14 }} />
            Exportar
          </button>
        </div>
      </header>
      <div className="avaliacoes-page-content">
        <Outlet />
      </div>
    </div>
  );
}
