import { useEffect, useRef, useState } from 'react';
import { DISTRIBUICAO, DISTRIBUICAO_TEMPORAL, SENTIMENTO, UNIDADES, fontBase } from './shared';

const GOOGLE_PERFORMANCE = [
  ['Visualizações do perfil', '56.227', '↑ 2.096'],
  ['Cliques no site', '398', '↓ 13'],
  ['Cliques para ligação', '747', '↓ 237'],
  ['Solicitações de rota', '781', '↓ 262'],
  ['Taxa de interação', '3,43%', '↓ 1,08'],
] as const;

export default function VisaoGeralPage() {
  return (
    <div className="avaliacoes-reference-page">
      <div className="avaliacoes-section-stack">
        <section className="avaliacoes-reference-summary">
          <div>
            <span className="avaliacoes-eyebrow">REPUTAÇÃO CONSOLIDADA</span>
            <strong>4,6 <span aria-hidden="true">★</span></strong>
            <span>347 avaliações no período</span>
          </div>
          <span className="avaliacoes-positive">↑ +0,2 vs. período anterior</span>
        </section>

        <div className="avaliacoes-reference-grid">
          <SourceRating />
          <StarDistribution />
        </div>

        <SentimentGauge />

        <section className="avaliacoes-reference-card">
          <h2>Resumo do período</h2>
          <div className="avaliacoes-reference-grid avaliacoes-reference-grid-kpis">
            <KpiCard label="Total de avaliações" valor="347" delta="+23 vs. anterior" />
            <KpiCard label="Respondidas" valor="298" delta="+18 vs. anterior" />
            <KpiCard label="Taxa de resposta" valor="87%" />
            <KpiCard label="Tempo médio de resposta" valor="6h 40m" delta="−2h vs. anterior" />
            <KpiCard label="Reclamações abertas" valor="6%" alerta />
          </div>
        </section>

        <GooglePerformance />
        <TemporalCharts />
        <UnitComparison />
      </div>
    </div>
  );
}

function SourceRating() {
  return (
    <section className="avaliacoes-reference-card">
      <h2>NOTA POR CANAL</h2>
      <FonteRow fonte="iFood" nota={4.7} total={198} cor="var(--marca)" />
      <FonteRow fonte="Google" nota={4.4} total={149} cor="var(--atencao)" />
      <div className="avaliacoes-mini-trend" aria-label="Tendência dos últimos 30 dias">
        {[4.3, 4.4, 4.5, 4.4, 4.6, 4.5, 4.6, 4.7, 4.6, 4.5, 4.6, 4.7].map((value, index) => (
          <i key={index} style={{ height: `${((value - 4) / 1) * 100}%`, opacity: 0.35 + index / 16 }} />
        ))}
      </div>
      <small>Tendência dos últimos 30 dias</small>
    </section>
  );
}

function StarDistribution() {
  return (
    <section className="avaliacoes-reference-card">
      <h2>DISTRIBUIÇÃO POR ESTRELA</h2>
      {DISTRIBUICAO.map((item) => (
        <div className="avaliacoes-distribution-row" key={item.estrelas}>
          <span>{item.estrelas}★</span>
          <div><i style={{ width: `${item.pct}%` }} /></div>
          <span>{item.pct}%</span>
        </div>
      ))}
    </section>
  );
}

function SentimentGauge() {
  const { nss, variacao, positivos, negativos, neutros, total } = SENTIMENTO;
  const angle = (nss / 100) * 270;

  return (
    <section className="avaliacoes-reference-card">
      <h2>INDICADOR DE SENTIMENTO NSS</h2>
      <p className="avaliacoes-card-description">Como seus clientes estão se sentindo com o serviço.</p>
      <div className="avaliacoes-sentiment-layout">
        <div className="avaliacoes-gauge">
          <svg viewBox="0 0 160 160" role="img" aria-label={`NSS ${nss} de 100`}>
            <circle cx="80" cy="80" r="65" fill="none" stroke="var(--bg-secundario)" strokeWidth="14" strokeDasharray={`${270 * (Math.PI * 130 / 360)} ${Math.PI * 130}`} strokeLinecap="round" />
            <circle cx="80" cy="80" r="65" fill="none" stroke="var(--sucesso)" strokeWidth="14" strokeDasharray={`${angle * (Math.PI * 130 / 360)} ${Math.PI * 130}`} strokeLinecap="round" />
          </svg>
          <strong>{nss}</strong>
          <span>de 100</span>
        </div>
        <div className="avaliacoes-sentiment-cards">
          <SentimentCard label="Satisfeitos" value={positivos} color="var(--sucesso)" />
          <SentimentCard label="Neutros" value={neutros} color="var(--text-desabilitado)" />
          <SentimentCard label="Insatisfeitos" value={negativos} color="var(--marca)" />
        </div>
      </div>
      <div className="avaliacoes-sentiment-footer">Base: <strong>{total} respostas</strong><span>↑ +{variacao} pts no mês</span></div>
    </section>
  );
}

function SentimentCard({ label, value, color }: { label: string; value: number; color: string }) {
  return <div className="avaliacoes-sentiment-card"><span>{label}</span><strong style={{ color }}>{value}</strong><small>respostas</small></div>;
}

function GooglePerformance() {
  return (
    <section className="avaliacoes-reference-card">
      <div className="avaliacoes-card-heading"><div><h2>DESEMPENHO DO PERFIL NO GOOGLE</h2><p className="avaliacoes-card-description">Quanto a reputação vira visita: alcance, contato e rota até o salão.</p></div><button type="button" className="avaliacoes-inline-button">Ver detalhes</button></div>
      <div className="avaliacoes-reference-grid avaliacoes-google-grid">
        {GOOGLE_PERFORMANCE.map(([label, value, delta]) => <div key={label}><span>{label}</span><strong>{value}</strong><em>{delta}</em></div>)}
      </div>
    </section>
  );
}

function TemporalCharts() {
  const charts = [['Dia do mês', DISTRIBUICAO_TEMPORAL.diaMes], ['Dia da semana', DISTRIBUICAO_TEMPORAL.diaSemana], ['Horário', DISTRIBUICAO_TEMPORAL.horario]] as const;
  return <section className="avaliacoes-reference-card"><h2>QUANDO CHEGAM SUAS AVALIAÇÕES</h2><p className="avaliacoes-card-description">Use os picos para escalar equipe e antecipar reclamações de espera.</p><div className="avaliacoes-reference-grid avaliacoes-chart-grid">{charts.map(([title, data]) => <MiniBarChart key={title} title={title} data={data} />)}</div></section>;
}

function MiniBarChart({ title, data }: { title: string; data: readonly { label: string; valor: number }[] }) {
  const max = Math.max(...data.map((item) => item.valor));
  return <div className="avaliacoes-mini-chart"><h3>{title}</h3><div>{data.map((item) => <span key={item.label} style={{ height: `${(item.valor / max) * 100}%` }} />)}</div><small>{data.map((item) => item.label).join('  ')}</small></div>;
}

function UnitComparison() {
  return <section className="avaliacoes-reference-card"><div className="avaliacoes-card-heading"><div><h2>RANKING COMPARATIVO POR UNIDADE</h2><p className="avaliacoes-card-description">Nota pública, nota do período e volume por canal.</p></div><span className="avaliacoes-unit-count">{UNIDADES.length} unidades</span></div><div className="avaliacoes-table-wrap"><table><thead><tr><th>#</th><th>UNIDADE</th><th>GOOGLE</th><th>IFOOD</th><th>PERÍODO</th><th>VOLUME</th></tr></thead><tbody>{UNIDADES.map((unit, index) => <tr key={unit.nome}><td>{String(index + 1).padStart(2, '0')}</td><td>{unit.nome}</td><td>{unit.notaGoogle}</td><td>{unit.notaIfood}</td><td>{unit.notaPeriodo} <em>{unit.delta >= 0 ? '+' : ''}{unit.delta}</em></td><td>{unit.volume}</td></tr>)}</tbody></table></div></section>;
}

function KpiCard({ label, valor, delta, alerta }: { label: string; valor: string; delta?: string; alerta?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(valor);
  useEffect(() => { if (ref.current) setDisplay(valor); }, [valor]);
  return <div className="avaliacoes-kpi"><span>{label}</span><strong ref={ref} style={{ color: alerta ? 'var(--marca)' : undefined }}>{display}</strong>{delta && <small>{delta}</small>}</div>;
}

function FonteRow({ fonte, nota, total, cor }: { fonte: string; nota: number; total: number; cor: string }) {
  return <div className="avaliacoes-source-row"><i style={{ background: cor }} /><span>{fonte}</span><strong>{nota}</strong><small>{total} reviews</small></div>;
}
