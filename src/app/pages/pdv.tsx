import { useState } from 'react';
import { useNavigate } from 'react-router';
import { usePlano } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

const INTEGRACOES = [
  {
    id: 'saipos',
    nome: 'Saipos',
    descricao: 'Sistema de gestão completo para restaurantes com PDV, controle de estoque e relatórios.',
    url: 'https://saipos.com/',
  },
  {
    id: 'anotaai',
    nome: 'Anota AI',
    descricao: 'Atendimento automatizado e gestão de pedidos com inteligência artificial.',
    url: 'https://anota.ai/',
  },
  {
    id: '3scheckout',
    nome: '3S Checkout',
    descricao: 'Solução de autoatendimento e pagamento para operações de salão e balcão.',
    url: 'https://3scheckout.com/',
  },
];

export function PdvPage() {
  const navigate = useNavigate();
  const { planoAtivo } = usePlano();
  const isBase = planoAtivo === 'novo';
  const [conectados, setConectados] = useState<string[]>([]);

  function toggleConectar(id: string) {
    setConectados(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="relative">
      <span onClick={() => navigate('/configuracoes')} style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-secundario)', cursor: 'pointer', display: 'block', padding: 'var(--spacing-16) var(--spacing-24) 0' }}>← Configurações</span>
      <div className="flex items-center gap-3 px-6 pt-3 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: 'var(--ifdl-color-ifood-48, #eb0033)' }}>
          <i className="ifdl-icon-filled ifdl-icon-store text-white" style={{ fontSize: '16px' }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-20)', fontWeight: 'var(--font-weight-medium)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-primario)', margin: 0, lineHeight: 1.3 }}>PDV</h1>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', letterSpacing: 'var(--letter-spacing)', color: 'var(--text-secundario)', margin: 0 }}>Conecta seu caixa e troca faturamento estimado por faturamento real.</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 p-4 md:p-6">

        {/* Prévia borrada — só quando não ativo */}
        {isBase && (
          <>
            <div className="flex flex-col md:flex-row gap-4">
              {['Faturamento real', 'Pratos mais vendidos', 'Faturamento por mesa'].map((card, i) => (
                <div
                  key={card}
                  style={{
                    backgroundColor: 'var(--bg-secundario)',
                    borderRadius: 'var(--radius-12)',
                    padding: 'var(--spacing-16)',
                    flex: 1,
                    opacity: i === 2 ? 0.5 : 0.75,
                  }}
                >
                  <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secundario)' }}>
                    {card}
                  </span>
                  <div style={{ height: 8, borderRadius: 4, backgroundColor: 'var(--bg-terciario)', marginTop: 'var(--spacing-8)', width: i === 0 ? '75%' : i === 1 ? '60%' : '80%' }} />
                  <div style={{ height: 8, borderRadius: 4, backgroundColor: 'var(--bg-terciario)', marginTop: 'var(--spacing-4)', width: i === 0 ? '45%' : i === 1 ? '55%' : '40%' }} />
                </div>
              ))}
            </div>

            {/* Faixa de ativação */}
            <div style={{
              backgroundColor: 'var(--bg-secundario)',
              borderRadius: 'var(--radius-12)',
              padding: 'var(--spacing-16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div className="flex flex-col gap-1">
                <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)' }}>
                  Ative PDV
                </span>
                <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secundario)' }}>
                  R$ 79/mês no plano Essencial
                </span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/modulos')}
                style={{
                  backgroundColor: 'var(--invertido)',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-pill)',
                  padding: 'var(--spacing-8) var(--spacing-16)',
                  border: 'none',
                  cursor: 'pointer',
                  ...fontBase,
                  fontSize: 'var(--font-size-14)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                Ver planos
              </button>
            </div>
          </>
        )}

        {/* Seção Integrações */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)', margin: 0 }}>Integrações</h2>
            <p style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secundario)', margin: 0 }}>
              Conecte o sistema que você já usa no salão para sincronizar vendas e estoque automaticamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTEGRACOES.map((integ) => {
              const isConnected = conectados.includes(integ.id);
              return (
                <div
                  key={integ.id}
                  style={{
                    backgroundColor: 'var(--bg-primario)',
                    borderRadius: 'var(--radius-12)',
                    border: isConnected ? '1px solid var(--marca)' : '1px solid var(--borda)',
                    padding: 'var(--spacing-16)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-12)',
                  }}
                >
                  {/* Logo placeholder + nome */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-8)',
                      backgroundColor: 'var(--bg-secundario)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <i className="ifdl-icon-line ifdl-icon-store" style={{ fontSize: 20, color: 'var(--text-secundario)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)' }}>
                        {integ.nome}
                      </span>
                      {isConnected && (
                        <span style={{ ...fontBase, fontSize: '11px', fontWeight: 'var(--font-weight-regular)', color: 'var(--sucesso)' }}>
                          Conectado
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Descrição */}
                  <p style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-regular)', color: 'var(--text-secundario)', margin: 0, flex: 1 }}>
                    {integ.descricao}
                  </p>

                  {/* Botão */}
                  <button
                    type="button"
                    onClick={() => toggleConectar(integ.id)}
                    style={{
                      borderRadius: 'var(--radius-pill)',
                      padding: '6px 14px',
                      cursor: 'pointer',
                      ...fontBase,
                      fontSize: 'var(--font-size-12)',
                      fontWeight: 'var(--font-weight-medium)',
                      alignSelf: 'flex-start',
                      ...(isConnected
                        ? { backgroundColor: 'transparent', border: '1px solid var(--borda)', color: 'var(--text-secundario)' }
                        : { backgroundColor: 'var(--invertido)', border: 'none', color: '#ffffff' }),
                    }}
                  >
                    {isConnected ? 'Desconectar' : 'Conectar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
