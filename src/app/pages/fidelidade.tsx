import React, { useState } from 'react';
import { usePlano } from '../state/plano-context';

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

export function FidelidadePage() {
  const { planoAtivo } = usePlano();
  const [crossChannelBonus, setCrossChannelBonus] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-primario)' }}>
      {/* Header sticky */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--bg-primario)', borderBottom: '1px solid var(--borda)', padding: 'var(--spacing-16) var(--spacing-16)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)', display: 'block' }}>Fidelidade</span>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', color: 'var(--text-secundario)' }}>Programa de pontos para incentivar retorno</span>
        </div>
        <span style={{ ...fontBase, fontSize: 'var(--font-size-11)', fontWeight: 'var(--font-weight-medium)', color: '#ffffff', backgroundColor: 'var(--marca)', borderRadius: 'var(--radius-pill)', padding: '2px 8px' }}>Novo</span>
      </div>

      <div style={{ padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-12)' }}>
          {[
            { label: 'Clientes ativos', valor: '312' },
            { label: 'Pontos emitidos', valor: '18.490' },
            { label: 'Resgates este mês', valor: '47' },
          ].map(kpi => (
            <div key={kpi.label} style={{ backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', color: 'var(--text-secundario)' }}>{kpi.label}</span>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-24)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)' }}>{kpi.valor}</span>
            </div>
          ))}
        </div>

        {/* Configuração do programa */}
        <div style={{ backgroundColor: 'var(--bg-primario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--spacing-16)', borderBottom: '1px solid var(--borda)' }}>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)' }}>Configuração do programa</span>
          </div>
          {[
            { label: 'Mecânica de acúmulo', value: 'A cada R$ 1 gasto = 1 ponto' },
            { label: 'Recompensa', value: '100 pontos = R$ 10 de desconto' },
            { label: 'Validade dos pontos', value: '90 dias' },
            { label: 'Pontos mínimos para resgate', value: '50 pontos' },
          ].map((item, i, arr) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-16)', borderBottom: i < arr.length - 1 ? '1px solid var(--borda)' : 'none' }}>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-13)', color: 'var(--text-primario)' }}>{item.label}</span>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-13)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-secundario)', backgroundColor: 'var(--bg-secundario)', borderRadius: 'var(--radius-8)', padding: '4px 12px' }}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Cross-channel bonus */}
        <div style={{ backgroundColor: 'var(--bg-primario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', padding: 'var(--spacing-16)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-8)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
              <span style={{ fontSize: '16px' }}>🔄</span>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)' }}>Cross-channel bonus</span>
            </div>
            <div onClick={() => setCrossChannelBonus(!crossChannelBonus)} style={{ width: 36, height: 20, borderRadius: 'var(--radius-pill)', backgroundColor: crossChannelBonus ? 'var(--sucesso)' : 'var(--bg-terciario)', position: 'relative', cursor: 'pointer', transition: 'all 150ms ease' }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#ffffff', position: 'absolute', top: 2, ...(crossChannelBonus ? { right: 2 } : { left: 2 }), transition: 'all 150ms ease' }} />
            </div>
          </div>
          <span style={{ ...fontBase, fontSize: 'var(--font-size-13)', color: 'var(--text-secundario)', lineHeight: '18px' }}>
            Cliente do delivery que visita o salão ganha <strong>2x pontos</strong>. Incentiva a transição entre canais e aumenta ticket médio.
          </span>
        </div>

        {/* Ranking de clientes fiéis */}
        <div style={{ backgroundColor: 'var(--bg-primario)', border: '1px solid var(--borda)', borderRadius: 'var(--radius-12)', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--spacing-16)', borderBottom: '1px solid var(--borda)' }}>
            <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primario)' }}>Top clientes fiéis</span>
          </div>
          {[
            { nome: 'Carlos M.', pontos: 890, visitas: 24 },
            { nome: 'Patrícia G.', pontos: 720, visitas: 18 },
            { nome: 'Maria S.', pontos: 645, visitas: 15 },
            { nome: 'Bruno A.', pontos: 510, visitas: 12 },
            { nome: 'João P.', pontos: 380, visitas: 9 },
          ].map((cliente, i, arr) => (
            <div key={cliente.nome} style={{ display: 'flex', alignItems: 'center', padding: 'var(--spacing-12) var(--spacing-16)', borderBottom: i < arr.length - 1 ? '1px solid var(--borda)' : 'none', gap: 'var(--spacing-12)' }}>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-desabilitado)', width: 20 }}>#{i + 1}</span>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-13)', color: 'var(--text-primario)', flex: 1 }}>{cliente.nome}</span>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-12)', fontWeight: 'var(--font-weight-medium)', color: 'var(--marca)' }}>{cliente.pontos} pts</span>
              <span style={{ ...fontBase, fontSize: 'var(--font-size-11)', color: 'var(--text-desabilitado)' }}>{cliente.visitas} visitas</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
