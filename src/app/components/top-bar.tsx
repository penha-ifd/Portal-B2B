import { IFoodMark } from './ifood-mark';

interface TopBarProps {
  onToggleSidebar?: () => void;
  onMobileMenu?: () => void;
}

export function TopBar({ onToggleSidebar, onMobileMenu }: TopBarProps) {
  return (
    <header className="flex items-center justify-between shrink-0 h-14 pl-2 pr-4 bg-[#f5f5f5]">
      {/* Esquerda */}
      <div className="flex items-center">
        <button
          type="button"
          aria-label="Menu"
          onClick={onMobileMenu}
          className="flex md:hidden items-center justify-center size-12 text-[#141414] hover:opacity-70"
        >
          <i className="ifdl-icon-line ifdl-icon-menu" style={{ fontSize: '20px' }} />
        </button>
        <button
          type="button"
          aria-label="Menu"
          onClick={onToggleSidebar}
          className="hidden md:flex items-center justify-center size-12 text-[#141414] hover:opacity-70"
        >
          <i className="ifdl-icon-line ifdl-icon-menu" style={{ fontSize: '20px' }} />
        </button>

        <div className="flex items-center justify-center size-12">
          <IFoodMark size={20} />
        </div>

        {/* Indicador de loja */}
        <div className="flex items-center gap-2 h-8 w-[282px] px-2 rounded-[12px] bg-white">
          <span
            className="flex items-center justify-center size-6 rounded-[8px] text-white paragraph-p3-12-bold shrink-0"
            style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #db0006)' }}
          >
            M
          </span>
          <span className="paragraph-p3-12-medium text-[#141414] truncate">Mc Donald's - Faria Lima</span>
          <i className="ifdl-icon-line ifdl-icon-chevron-down text-[#666] ml-auto" style={{ fontSize: '14px' }} />
        </div>
      </div>

      {/* Direita */}
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-3 h-10 px-3 rounded-[12px]">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center size-5 rounded-full bg-white border border-[#ebebeb]">
              <IFoodMark size={11} />
            </span>
            <span className="paragraph-p2-14-medium text-[#141414]">Comer Fora</span>
          </div>
          <span className="size-2 rounded-full" style={{ backgroundColor: '#1FAD68' }} aria-label="Ativo" />
        </div>
        <button
          type="button"
          aria-label="Buscar"
          className="flex items-center justify-center size-10 rounded-[12px] text-[#141414] hover:bg-black/5"
        >
          <i className="ifdl-icon-line ifdl-icon-search" style={{ fontSize: '20px' }} />
        </button>
        <button
          type="button"
          aria-label="Ajuda"
          className="flex items-center justify-center size-10 rounded-[12px] text-[#141414] hover:bg-black/5"
        >
          <i className="ifdl-icon-line ifdl-icon-help" style={{ fontSize: '20px' }} />
        </button>
      </div>
    </header>
  );
}
