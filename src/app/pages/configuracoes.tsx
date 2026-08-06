import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

const PLANO_INFO: Record<string, string> = {
  novo:           'Plano Novo · gratuito',
  essencial:      'Plano Essencial · módulos básicos',
  profissional:   'Plano Profissional · todos os módulos',
  premium:        'Plano Premium · todos os módulos',
};

export function ConfiguracoesPage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-configuration text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>Configurações</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Ajuste integrações, relatórios e preferências do sistema.</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="content-stack p-6">
        {/* Descoberta de módulos */}
        <div
          role="link"
          tabIndex={0}
          onClick={() => navigate('/modulos')}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              navigate('/modulos');
            }
          }}
          className="config-modules-banner"
        >
          <div className="config-modules-banner-icon" aria-hidden="true">
            <i className="ifdl-icon-filled ifdl-icon-store" style={{ fontSize: '20px' }} />
          </div>
          <div className="config-modules-banner-copy">
            <span className="config-modules-banner-eyebrow">Comer Fora</span>
            <strong>Veja todos os módulos e planos</strong>
            <span>Encontre novas formas de atrair clientes, organizar seu salão e transformar dados em ações.</span>
          </div>
          <div className="config-modules-banner-action">
            <span>{PLANO_INFO[planoAtivo]}</span>
            <button type="button" onClick={(event) => { event.stopPropagation(); navigate('/modulos'); }}>
              Ver módulos e planos
              <i className="ifdl-icon-line ifdl-icon-chevron-right" style={{ fontSize: '16px' }} />
            </button>
          </div>
        </div>

        {/* Integrações */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>Integrações</span>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>Conecte sistemas externos para enriquecer seus dados e automatizar processos.</span>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--spacing-12)' }}>
            {/* PDV */}
            <div
              onClick={() => navigate('/pdv')}
              style={{ backgroundColor: 'var(--bg-primario)', borderRadius: 'var(--radius-12)', border: '1px solid var(--borda)', padding: 'var(--spacing-16)', cursor: 'pointer', transition: 'box-shadow 150ms ease-out, transform 150ms ease-out' }}
              className="hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:scale-[1.01]"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-8)' }}>
                <span style={{ fontSize: '20px' }}>🖥️</span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>PDV</span>
              </div>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)', lineHeight: 1.5 }}>Conecta seu caixa e troca faturamento estimado por faturamento real. Dados de venda alimentam os relatórios e insights.</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--spacing-12)' }}>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-11)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-desabilitado)' }}>Setup único · não afeta operação diária</span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--marca)' }}>Configurar →</span>
              </div>
            </div>

            {/* Agregador de pedidos */}
            <div
              onClick={() => navigate('/agregador')}
              style={{ backgroundColor: 'var(--bg-primario)', borderRadius: 'var(--radius-12)', border: '1px solid var(--borda)', padding: 'var(--spacing-16)', cursor: 'pointer', transition: 'box-shadow 150ms ease-out, transform 150ms ease-out' }}
              className="hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:scale-[1.01]"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)', marginBottom: 'var(--spacing-8)' }}>
                <span style={{ fontSize: '20px' }}>📋</span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>Agregador de pedidos</span>
              </div>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)', lineHeight: 1.5 }}>Junta os pedidos de todos os canais numa fila só. Reduz erro e agiliza a cozinha.</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--spacing-12)' }}>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-11)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-desabilitado)' }}>Setup único · não afeta operação diária</span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--marca)' }}>Configurar →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Preferências gerais */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>Preferências</span>

          <div style={{ backgroundColor: 'var(--bg-primario)', borderRadius: 'var(--radius-12)', border: '1px solid var(--borda)', overflow: 'hidden' }}>
            {[
              { label: 'Notificações', desc: 'E-mail e push para alertas de reservas, reviews e campanhas', value: 'Ativadas' },
              { label: 'Idioma', desc: 'Idioma da interface do painel', value: 'Português (BR)' },
              { label: 'Fuso horário', desc: 'Usado para relatórios e agendamentos', value: 'América/São Paulo' },
              { label: 'Relatório semanal', desc: 'Resumo por e-mail toda segunda com métricas, insights e ações sugeridas', value: 'Ativado' },
              { label: 'Horário do relatório', desc: 'Quando o e-mail é enviado', value: 'Segundas, 8h' },
            ].map((item, i, arr) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-16)', borderBottom: i < arr.length - 1 ? '1px solid var(--borda)' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>{item.label}</span>
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>{item.desc}</span>
                </div>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
