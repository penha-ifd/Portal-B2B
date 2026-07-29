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
        </div>
      )}
    </NavLink>
  );
}

function LockedItem({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/modulos')}
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
        style={{ fontSize: '24px', color: 'var(--text-desabilitado)' }}
      />
      <span
        className={`flex-1 min-w-0 overflow-hidden transition-[opacity,max-width] duration-200 ease-in-out ${
          collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'
        }`}
        style={{ color: 'var(--text-desabilitado)', fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)' }}
      >
        {item.label}
      </span>
      {!collapsed && (
        <i
          className="ifdl-icon-line ifdl-icon-add shrink-0"
          style={{ fontSize: '20px', color: 'var(--text-desabilitado)' }}
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
        color: 'var(--text-desabilitado)',
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

  const isEssencialOrAvancado = planoAtivo === 'essencial' || planoAtivo === 'avancado';
  const isAvancado = planoAtivo === 'avancado';

  const alwaysActive: NavItem[] = [
    { to: '/', label: 'Início', icon: 'home', end: true },
    { to: '/jornada', label: 'Sua jornada', icon: 'chart' },
  ];

  const reservasPdv: NavItem[] = [
    { to: '/reservas', label: 'Reservas', icon: 'calendar' },
    { to: '/pdv', label: 'PDV', icon: 'store' },
    { to: '/promocoes', label: 'Promoções', icon: 'promotion' },
    ...(isEssencialOrAvancado ? [{ to: '/conciliacao', label: 'Conciliação', icon: 'sync' }] : []),
  ];

  const clientes: NavItem[] = [
    { to: '/clientes', label: 'Clientes', icon: '2-people' },
  ];

  const pagamentoAgregador: NavItem[] = [
    { to: '/pagamento-mesa', label: 'Pagamento na mesa', icon: 'credit-card' },
    { to: '/agregador', label: 'Agregador de pedidos', icon: 'delivery' },
    { to: '/avaliacoes', label: 'Avaliações', icon: 'store' },
  ];

  const activeItems: NavItem[] = [
    { to: '/cardapio', label: 'Cardápio', icon: 'store' },
    ...(isEssencialOrAvancado ? reservasPdv : []),
    ...(isAvancado ? pagamentoAgregador : []),
  ];

  const lockedItems: NavItem[] = [
    ...(!isEssencialOrAvancado ? reservasPdv : []),
    ...(!isAvancado ? pagamentoAgregador : []),
  ];

  return (
    <nav
      className={`flex flex-col justify-between shrink-0 bg-[#f5f5f5] pt-2 overflow-y-auto transition-[width] duration-200 ease-in-out h-full ${
        collapsed ? 'w-[72px]' : 'w-[276px]'
      }`}
    >
      <div className="flex flex-col w-full">
        {/* Grupo 1 — sem rótulo */}
        {alwaysActive.map((item) => (
          <ActiveItem key={item.to} item={item} collapsed={collapsed} />
        ))}

        {/* Grupo 2 — Seu salão */}
        <GroupLabel label="Seu salão" collapsed={collapsed} />
        {activeItems.map((item) => (
          <ActiveItem key={item.to} item={item} collapsed={collapsed} />
        ))}

        {/* Grupo 3 — Seus clientes */}
        <GroupLabel label="Seus clientes" collapsed={collapsed} />
        {clientes.map((item) => (
          <ActiveItem key={item.to} item={item} collapsed={collapsed} />
        ))}

        {/* Grupo 4 — Disponíveis */}
        <GroupLabel label="Disponíveis" collapsed={collapsed} />
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
