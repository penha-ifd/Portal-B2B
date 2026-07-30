import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { TopBar } from './top-bar';
import { SidebarNav } from './sidebar-nav';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Início',
  '/reservas': 'Reservas',
  '/promocoes': 'Promoções',
  '/cardapio': 'Cardápio',
  '/modulos': 'Módulos e planos',
  '/conciliacao': 'Confirmar presenças',
  '/pdv': 'PDV',
  '/pagamento-mesa': 'Pagamento na mesa',
  '/avaliacoes': 'Avaliações',
  '/agregador': 'Agregador de pedidos',
  '/clientes': 'Clientes',
  '/configuracoes': 'Configurações',
  '/perfil': 'Perfil',
};

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const name = ROUTE_TITLES[pathname] ?? 'Comer Fora';
    document.title = `${name} — Comer Fora B2B`;
  }, [pathname]);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#e0e0e0] p-1 md:p-[10px]" style={{ height: '100dvh' }}>
      <div className="flex flex-col flex-1 overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#f5f5f5]">
        <TopBar onToggleSidebar={() => setCollapsed((c) => !c)} onMobileMenu={() => setMobileOpen(true)} />
        <div className="flex flex-1 items-stretch overflow-hidden gap-1 md:gap-2 pr-1 md:pr-2 pb-1 md:pb-2">
          {/* Desktop sidebar */}
          <div className="hidden md:flex h-full">
            <SidebarNav collapsed={collapsed} />
          </div>

          {/* Mobile drawer overlay */}
          {mobileOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
              <div className="relative z-10 h-full">
                <SidebarNav collapsed={false} />
              </div>
            </div>
          )}

          <main className="flex-1 overflow-hidden min-w-0">
            <div className="h-full overflow-y-auto rounded-[12px] md:rounded-[20px] bg-white border border-[#ebebeb] shadow-[0px_1px_3px_rgba(21,21,21,0.08)]" style={{ paddingBottom: "180px" }}>
              <div className="max-w-[1180px] mx-auto">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
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