import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { TopBar } from './top-bar';
import { SidebarNav } from './sidebar-nav';
import { usePlano } from '../state/plano-context';
import { cn } from '../../lib/cn';

// The Novo plan is a landing experience; navigation becomes available after plan selection.

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Início',
  '/reservas': 'Reservas',
  '/promocoes': 'Promoções',
  '/cardapio': 'Cardápio',
  '/modulos': 'Módulos e planos',
  '/conciliacao': 'Confirmar presenças',
  '/pdv': 'PDV',
  '/pagamento-mesa': 'Pagamento na mesa',
  '/avaliacoes/visao-geral': 'Avaliações — Visão Geral',
  '/avaliacoes/avaliacoes': 'Avaliações',
  '/agregador': 'Agregador de pedidos',
  '/clientes': 'Clientes',
  '/configuracoes': 'Configurações',
  '/perfil': 'Perfil',
  '/fidelidade': 'Fidelidade',
  '/design-system': 'Design System',
};

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { planoAtivo } = usePlano();
  const showNavigation = planoAtivo !== 'novo';

  useEffect(() => {
    const name = ROUTE_TITLES[pathname] ?? 'Comer Fora';
    document.title = `${name} — Comer Fora B2B`;
  }, [pathname]);

  // Close mobile drawer with Escape
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <div className={cn('ifds-app-shell flex min-h-0 flex-col w-full overflow-hidden bg-[var(--bg-terciario)] p-1 md:p-[10px]', !showNavigation && 'ifds-app-shell-landing')} style={{ height: '100dvh' }}>
      <div className="flex min-h-0 flex-col flex-1 overflow-hidden rounded-[16px] md:rounded-[24px] bg-[var(--bg-secundario)]">
        <TopBar onToggleSidebar={() => setCollapsed((c) => !c)} onMobileMenu={() => setMobileOpen(true)} />
        <div className="flex min-h-0 flex-1 items-stretch overflow-hidden gap-1 md:gap-2 pr-1 md:pr-2 pb-1 md:pb-2">
          {/* Desktop sidebar */}
          {showNavigation && (
            <div className="hidden md:flex h-full">
              <SidebarNav collapsed={collapsed} />
            </div>
          )}

          {/* Mobile drawer overlay */}
          {showNavigation && mobileOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
              <div className="relative z-10 h-full">
                <SidebarNav collapsed={false} />
              </div>
            </div>
          )}

          <main className="flex-1 min-h-0 overflow-hidden min-w-0">
            <div className={cn(
              'h-full overflow-y-auto rounded-[12px] md:rounded-[20px] bg-[var(--bg-primario)] border border-[var(--borda)] shadow-[var(--shadow-subtle)]',
              !showNavigation && 'ifds-landing-content',
            )} style={{ paddingBottom: "64px" }}>
              <div className="max-w-[1180px] mx-auto">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Outlet />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}