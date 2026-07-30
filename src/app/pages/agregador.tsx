import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

const PLANO_INFO: Record<string, string> = {
  essencial:    'Plano Essencial · módulos básicos',
  profissional: 'Plano Profissional · todos os módulos',
  premium:      'Plano Premium · todos os módulos',
};

interface Canal {
  id: string;
  nome: string;
  icon: string;
  iconBg: string;
  conectadoInicial: boolean;
  pedidos: number | null;
}

const CANAIS_INIT: Canal[] = [
  { id: 'ifood', nome: 'iFood Delivery', icon: 'ifdl-icon-delivery', iconBg: '#eb0033', conectadoInicial: true, pedidos: 47 },
  { id: 'salao', nome: 'Salão (PDV)', icon: 'ifdl-icon-store', iconBg: '#141414', conectadoInicial: true, pedidos: 31 },
];

const KPIS = [
  { label: 'Pedidos hoje', valor: '78', subtitulo: '+12% vs ontem', cor: 'var(--sucesso)' },
  { label: 'Faturamento consolidado', valor: 'R$ 4.820', subtitulo: 'iFood R$ 2.940 · Salão R$ 1.880', cor: null },
  { label: 'Tempo médio de preparo', valor: '14 min', subtitulo: '-2 min vs semana passada', cor: 'var(--sucesso)' },
  { label: 'Taxa de cancelamento', valor: '2,1%', subtitulo: 'Meta: < 3%', cor: 'var(--sucesso)' },
];

export function AgregadorPage() {
  const navigate = useNavigate();
  const { planoAtivo } = usePlano();
  const isBase = planoAtivo === 'novo';
  const [conectados, setConectados] = useState<Set<string>>(
    new Set(CANAIS_INIT.filter(c => c.conectadoInicial).map(c => c.id))
  );

  function toggleCanal(id: string) {
    setConectados(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="relative">
      {/* Sub-header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200"
        style={{ backgroundColor: '#ffffff' }}
      >
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-delivery text-white" style={{ fontSize: '12px' }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: '#141414' }}>Agregador de pedidos</span>
        <div className="flex items-center gap-3 ml-auto">
          <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
            {isBase ? 'Ative um módulo para liberar inteligência e CRM' : PLANO_INFO[planoAtivo]}
          </span>
          <span
            style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--marca)', cursor: 'pointer' }}
            onClick={() => navigate('/modulos')}
          >
            Mudar assinatura
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col" style={{ gap: 'var(--spacing-24)' }}>

        {/* Seção: Canais */}
        <div className="flex flex-col" style={{ gap: 'var(--spacing-12)' }}>
          <div className="flex flex-col gap-1">
            <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
              Canais integrados
            </h2>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
              Conecte seus canais de venda para centralizar os pedidos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--spacing-12)' }}>
            {CANAIS_INIT.map(canal => {
              const ativo = conectados.has(canal.id);
              return (
                <div
                  key={canal.id}
                  style={{
                    border: `1px solid ${ativo ? 'var(--sucesso)' : 'var(--borda)'}`,
                    borderRadius: 'var(--radius-12)',
                    padding: 'var(--spacing-16)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-12)',
                  }}
                >
                  {/* Header do card */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                    <span
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 32, height: 32, borderRadius: 'var(--radius-8)', backgroundColor: canal.iconBg }}
                    >
                      <i className={`ifdl-icon-filled ${canal.icon} text-white`} style={{ fontSize: '16px' }} />
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                      <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                        {canal.nome}
                      </span>
                      <span style={{
                        ...fontBase,
                        fontSize: '11px',
                        fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
                        color: ativo ? 'var(--sucesso)' : 'var(--text-desabilitado)',
                      }}>
                        {ativo ? 'Conectado' : 'Não conectado'}
                      </span>
                    </div>
                  </div>

                  {/* Pedidos (só se conectado) */}
                  {ativo && (
                    <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                      {canal.pedidos ?? 0} pedidos hoje
                    </span>
                  )}

                  {/* Botão */}
                  <button
                    type="button"
                    onClick={() => toggleCanal(canal.id)}
                    style={{
                      ...fontBase,
                      fontSize: 'var(--font-size-12)',
                      fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
                      backgroundColor: ativo ? 'transparent' : 'var(--invertido)',
                      color: ativo ? 'var(--text-primario)' : '#ffffff',
                      border: ativo ? '1px solid var(--borda)' : 'none',
                      borderRadius: 'var(--radius-pill)',
                      padding: '6px 14px',
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {ativo ? 'Desconectar' : 'Conectar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seção: KPIs */}
        <div className="flex flex-col" style={{ gap: 'var(--spacing-12)' }}>
          <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
            Resumo do dia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--spacing-12)' }}>
            {KPIS.map(kpi => (
              <div
                key={kpi.label}
                style={{
                  border: '1px solid var(--borda)',
                  borderRadius: 'var(--radius-12)',
                  padding: 'var(--spacing-16)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-4)',
                }}
              >
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>
                  {kpi.label}
                </span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                  {kpi.valor}
                </span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: kpi.cor ?? 'var(--text-secundario)' }}>
                  {kpi.subtitulo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Seção: Breakdown por canal */}
        <div className="flex flex-col" style={{ gap: 'var(--spacing-12)' }}>
          <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', margin: 0 }}>
            Pedidos por canal
          </h2>

          <div style={{ border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
            {/* Barra proporcional */}
            <div style={{ display: 'flex', height: 12, borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
              <div style={{ width: '60%', backgroundColor: '#eb0033' }} />
              <div style={{ width: '40%', backgroundColor: '#141414' }} />
            </div>

            {/* Legenda */}
            <div style={{ display: 'flex', gap: 'var(--spacing-16)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#eb0033', flexShrink: 0 }} />
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                  iFood Delivery · 60%
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#141414', flexShrink: 0 }} />
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
                  Salão · 40%
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
