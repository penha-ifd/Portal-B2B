import { useState } from 'react';
import { Outlet } from 'react-router';
import { TopBar } from './top-bar';
import { SidebarNav } from './sidebar-nav';

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-[#e0e0e0] p-1 md:p-[10px]">
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
            <div className="h-full overflow-y-auto rounded-[12px] md:rounded-[20px] bg-white border border-[#ebebeb] shadow-[0px_1px_3px_rgba(21,21,21,0.08)]" style={{ paddingBottom: "120px" }}>
              <div className="max-w-[1180px] mx-auto">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}