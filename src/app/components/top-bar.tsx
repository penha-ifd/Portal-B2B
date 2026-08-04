import { useState, useRef, useEffect } from 'react';
import { IFoodMark } from './ifood-mark';
import { PlanSwitcher } from './plan-switcher';
import { Button, Icon, StatusDot } from './ifds';

const LOJAS = [
  { id: 'cantina-pinheiros', nome: 'Cantina Di Napoli - Pinheiros', sigla: 'CN' },
  { id: 'cantina-vila-madalena', nome: 'Cantina Di Napoli - Vila Madalena', sigla: 'CN' },
  { id: 'cantina-moema', nome: 'Cantina Di Napoli - Moema', sigla: 'CN' },
];

interface TopBarProps {
  onToggleSidebar?: () => void;
  onMobileMenu?: () => void;
}

export function TopBar({ onToggleSidebar, onMobileMenu }: TopBarProps) {
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [lojaAtiva, setLojaAtiva] = useState(LOJAS[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownAberto(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between shrink-0 h-14 pl-2 pr-4 bg-[var(--bg-secundario)]">
      {/* Esquerda */}
      <div className="flex items-center">
        <Button
          type="button"
          aria-label="Abrir menu"
          onClick={onMobileMenu}
          className="ifds-button-tertiary !min-h-12 !w-12 !p-0 md:!hidden"
        >
          <Icon name="menu" size={20} />
        </Button>
        <Button
          type="button"
          aria-label="Recolher menu lateral"
          onClick={onToggleSidebar}
          className="ifds-button-tertiary !hidden !min-h-12 !w-12 !p-0 md:!inline-flex"
        >
          <Icon name="menu" size={20} />
        </Button>

        <div className="flex items-center justify-center size-12">
          <IFoodMark size={20} />
        </div>

        {/* Seletor de loja */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setDropdownAberto(!dropdownAberto)}
            className="flex items-center gap-2 h-8 w-[150px] md:w-[282px] px-2 rounded-[12px] bg-white"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            <span
              className="flex items-center justify-center size-6 rounded-[8px] text-white paragraph-p3-12-bold shrink-0"
              style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #db0006)' }}
            >
              {lojaAtiva.sigla}
            </span>
            <span className="paragraph-p3-12-medium text-[#141414] truncate">{lojaAtiva.nome}</span>
            <i className="ifdl-icon-line ifdl-icon-chevron-down text-[#666] ml-auto" style={{ fontSize: '14px', transform: dropdownAberto ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
          </button>

          {dropdownAberto && (
            <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, width: 282, maxWidth: 'min(282px, 90vw)', backgroundColor: 'var(--bg-primario)', borderRadius: 'var(--radius-12)', border: '1px solid var(--borda)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', zIndex: 100, overflow: 'hidden' }}>
              <div style={{ padding: '8px 4px' }}>
                <button
                  type="button"
                  onClick={() => { setDropdownAberto(false); }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 8px', border: 'none', background: 'none', cursor: 'pointer', borderRadius: 8, fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: "var(--font-weight-medium)", color: 'var(--text-primario)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-secundario)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 8, backgroundColor: 'var(--bg-terciario)', fontSize: 12 }}>
                    <i className="ifdl-icon-line ifdl-icon-store" style={{ fontSize: 14 }} />
                  </span>
                  Visão geral da rede
                </button>
              </div>
              <div style={{ height: 1, backgroundColor: 'var(--borda)' }} />
              <div style={{ padding: '8px 4px' }}>
                {LOJAS.map((loja) => (
                  <button
                    key={loja.id}
                    type="button"
                    onClick={() => { setLojaAtiva(loja); setDropdownAberto(false); }}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 8px', border: 'none', background: loja.id === lojaAtiva.id ? 'var(--bg-secundario)' : 'none', cursor: 'pointer', borderRadius: 8, fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', color: 'var(--text-primario)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-secundario)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = loja.id === lojaAtiva.id ? 'var(--bg-secundario)' : 'transparent')}
                  >
                    <span
                      className="flex items-center justify-center size-6 rounded-[8px] text-white paragraph-p3-12-bold shrink-0"
                      style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #db0006)', fontSize: 10 }}
                    >
                      {loja.sigla}
                    </span>
                    <span style={{ fontWeight: loja.id === lojaAtiva.id ? 500 : 400 }}>{loja.nome}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Direita */}
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-3 h-10 px-3 rounded-[12px]">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-5 rounded-full bg-white border border-[#E8E3DC]">
              <IFoodMark size={11} />
            </span>
            <span className="paragraph-p2-14-medium text-[#141414]">Comer Fora</span>
          </div>
          <StatusDot tone="success" label="Ativo" />
        </div>
        <PlanSwitcher />
      </div>
    </header>
  );
}
