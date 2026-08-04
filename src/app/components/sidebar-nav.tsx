import { NavLink, useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

interface NavItem {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
}

interface FooterItem extends NavItem {
  chevron?: boolean;
}

const footerItems: FooterItem[] = [
  { to: '/design-system', label: 'Design System', icon: 'info', chevron: true },
  { to: '/configuracoes', label: 'Configurações', icon: 'configuration', chevron: true },
  { to: '/perfil', label: 'Perfil', icon: 'profile', chevron: true },
];

function ActiveItem({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className="block w-full outline-none"
      title={collapsed ? item.label : undefined}
    >
      {({ isActive }) => (
        <div className="relative flex h-14 items-center py-4 w-full gap-2 pl-5 pr-6">
          {isActive && <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-[#EB0033]" />}
          <i
            className={`${isActive ? 'ifdl-icon-filled' : 'ifdl-icon-line'} ifdl-icon-${item.icon} shrink-0 text-[#141414]`}
            style={{ fontSize: '24px' }}
          />
          <span
            className={`flex-1 min-w-0 overflow-hidden transition-[opacity,max-width] duration-200 ease-in-out ${
              collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'
            } ${isActive ? 'paragraph-p1-16-bold' : 'paragraph-p1-16-regular'} whitespace-nowrap`}
          >
            {item.label}
          </span>
        </div>
      )}
    </NavLink>
  );
}

function LockedItem({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate('/modulos')}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/modulos'); } }}
      aria-label={`Ativar módulo ${item.label}`}
      className="flex h-14 items-center gap-2 pl-5 pr-6 w-full transition-all duration-200"
      style={{
        border: '1px dashed var(--bg-terciario)',
        borderRadius: 'var(--radius-8)',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        margin: '2px 8px',
        width: 'calc(100% - 16px)',
        boxSizing: 'border-box',
      }}
    >
      <i
        className={`ifdl-icon-line ifdl-icon-${item.icon} shrink-0`}
        style={{ fontSize: '24px', color: 'var(--text-secundario)' }}
      />
      <span
        className={`flex-1 min-w-0 overflow-hidden transition-[opacity,max-width] duration-200 ease-in-out ${
          collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'
        }`}
        style={{ color: 'var(--text-secundario)', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)' }}
      >
        {item.label}
      </span>
      {!collapsed && (
        <i
          className="ifdl-icon-line ifdl-icon-add shrink-0"
          style={{ fontSize: '20px', color: 'var(--text-secundario)' }}
        />
      )}
    </div>
  );
}

function FooterItemRow({ item, collapsed }: { item: FooterItem; collapsed: boolean }) {
  return (
    <NavLink
      to={item.to}
      end={item.end}
      className="block w-full outline-none"
      title={collapsed ? item.label : undefined}
    >
      {({ isActive }) => (
        <div className="flex h-14 items-center py-4 w-full gap-2 pl-5 pr-6">
          <i
            className={`${isActive ? 'ifdl-icon-filled' : 'ifdl-icon-line'} ifdl-icon-${item.icon} shrink-0 text-[#141414]`}
            style={{ fontSize: '24px' }}
          />
          <span
            className={`flex-1 min-w-0 overflow-hidden transition-[opacity,max-width] duration-200 ease-in-out ${
              collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'
            } ${isActive ? 'paragraph-p1-16-bold' : 'paragraph-p1-16-regular'} whitespace-nowrap`}
          >
            {item.label}
          </span>
          {item.chevron && (
            <i
              className={`ifdl-icon-line ifdl-icon-chevron-right text-[#141414] shrink-0 transition-[opacity,max-width] duration-200 ease-in-out ${
                collapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-[24px]'
              }`}
              style={{ fontSize: '24px' }}
            />
          )}
        </div>
      )}
    </NavLink>
  );
}

function GroupLabel({ label, collapsed }: { label: string; collapsed: boolean }) {
  if (collapsed) return null;
  return (
    <span
      className="block px-5 overflow-hidden transition-[opacity] duration-200"
      style={{
        fontFamily: 'var(--font-inter)',
        fontSize: 'var(--font-size-12)',
        fontWeight: 'var(--font-weight-regular)',
        letterSpacing: 'var(--letter-spacing)',
        color: 'var(--text-secundario)',
        marginTop: 20,
        marginBottom: 4,
      }}
    >
      {label}
    </span>
  );
}

export function SidebarNav({ collapsed = false }: { collapsed?: boolean }) {
  const { planoAtivo } = usePlano();

  const isEssencial = planoAtivo === 'essencial';
  const isProfissionalOrPremium = planoAtivo === 'profissional' || planoAtivo === 'premium';
  const isPremium = planoAtivo === 'premium';

  const alwaysActive: NavItem[] = [
    { to: '/', label: 'Início', icon: 'home', end: true },
  ];

  const clientes: NavItem[] = [
    { to: '/clientes', label: 'Clientes', icon: '2-people' },
  ];

  const essencialModulos: NavItem[] = [
    { to: '/promocoes', label: 'Promoções', icon: 'promotion' },
    { to: '/conciliacao', label: 'Confirmar presenças', icon: 'sync' },
  ];

  const profissionalModulos: NavItem[] = [
    { to: '/reservas', label: 'Reservas', icon: 'calendar' },
    { to: '/avaliacoes', label: 'Avaliações', icon: 'store' },
    { to: '/cardapio', label: 'Cardápio', icon: 'store' },
    { to: '/pagamento-mesa', label: 'Pagamento na mesa', icon: 'credit-card' },
  ];

  const isAnyPaid = isEssencial || isProfissionalOrPremium;

  const activeItems: NavItem[] = [
    ...(isAnyPaid ? essencialModulos : []),
    ...(isProfissionalOrPremium ? profissionalModulos : []),
  ];

  const lockedItems: NavItem[] = [
    ...(!isAnyPaid ? essencialModulos : []),
    ...(!isProfissionalOrPremium ? profissionalModulos : []),
  ];

  return (
    <nav
      className={`flex flex-col justify-between shrink-0 bg-[#F7F4F0] pt-2 overflow-y-auto transition-[width] duration-200 ease-in-out h-full ${
        collapsed ? 'w-[72px]' : 'w-[276px]'
      }`}
    >
      <div className="flex flex-col w-full">
        {/* Grupo 1 — sem rótulo */}
        {alwaysActive.map((item) => (
          <ActiveItem key={item.to} item={item} collapsed={collapsed} />
        ))}

        {/* Grupo 2 — Seus clientes (essencial+) */}
        {isAnyPaid && (
          <>
            <GroupLabel label="Seus clientes" collapsed={collapsed} />
            {clientes.map((item) => (
              <ActiveItem key={item.to} item={item} collapsed={collapsed} />
            ))}
          </>
        )}

        {/* Grupo 3 — Seu salão */}
        {activeItems.length > 0 && (
          <>
            <GroupLabel label="Seu salão" collapsed={collapsed} />
            {activeItems.map((item) => (
              <ActiveItem key={item.to} item={item} collapsed={collapsed} />
            ))}
          </>
        )}

        {/* Grupo 4 — Disponíveis */}
        <GroupLabel label="Disponíveis" collapsed={collapsed} />
        {!isAnyPaid && clientes.map((item) => (
          <LockedItem key={item.to} item={item} collapsed={collapsed} />
        ))}
        {lockedItems.map((item) => (
          <LockedItem key={item.to} item={item} collapsed={collapsed} />
        ))}
        <ActiveItem key="modulos" item={{ to: '/modulos', label: 'Ver todos os módulos', icon: 'store' }} collapsed={collapsed} />
      </div>
      <div className="flex flex-col w-full">
        {footerItems.map((item) => (
          <FooterItemRow key={item.to} item={item} collapsed={collapsed} />
        ))}
      </div>
    </nav>
  );
}
