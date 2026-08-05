import { useState, useEffect, useRef } from 'react';
import { fontBase, DISTRIBUICAO, DISTRIBUICAO_TEMPORAL, SENTIMENTO, UNIDADES } from './shared';

export default function VisaoGeralPage() {
  return (
    <>
      {/* Date Range Picker */}
      <DateRangePicker />

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--spacing-12)" }}>
        <KpiCard label="Total de avaliações" valor="347" delta="+23" />
        <KpiCard label="Respondidas" valor="298" delta="+18" />
        <KpiCard label="Taxa de resposta" valor="87" sufixo="%" delta="+5%" />
        <KpiCard label="Reclamações" valor="6" sufixo="%" alerta />
        <KpiCard label="Nota média" valor="4.6" sufixo="★" delta="+0.2" />
      </div>

      {/* Indicador de Sentimento NSS */}
      <SentimentGauge />

      {/* Nota por fonte + Distribuição */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-16)" }}>
        {/* Nota por fonte */}
        <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
          <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-16)", display: "block" }}>Nota por fonte</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-12)" }}>
            <FonteRow fonte="iFood" nota={4.7} total={198} cor="var(--marca)" />
            <FonteRow fonte="Google" nota={4.4} total={149} cor="var(--atencao)" />
          </div>
          <div style={{ marginTop: "var(--spacing-16)", height: 60, display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[4.3, 4.4, 4.5, 4.4, 4.6, 4.5, 4.6, 4.7, 4.6, 4.5, 4.6, 4.7].map((v, i) => (
              <div key={i} style={{ flex: 1, background: "var(--marca)", borderRadius: 2, height: `${((v - 4.0) / 1.0) * 100}%`, opacity: 0.3 + (i / 12) * 0.7 }} />
            ))}
          </div>
          <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", marginTop: "var(--spacing-4)", display: "block" }}>Tendência últimos 30 dias</span>
        </div>

        {/* Distribuição por estrela */}
        <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
          <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-16)", display: "block" }}>Distribuição por estrela</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-8)" }}>
            {DISTRIBUICAO.map(d => (
              <div key={d.estrelas} style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
                <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", width: 24, textAlign: "right" }}>{d.estrelas}★</span>
                <div style={{ flex: 1, height: 8, background: "var(--bg-secundario)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${d.pct}%`, height: "100%", background: d.estrelas >= 4 ? "var(--sucesso)" : d.estrelas === 3 ? "var(--atencao)" : "var(--marca)", borderRadius: 4, transition: "width 600ms ease-out" }} />
                </div>
                <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", width: 32 }}>{d.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Distribuição temporal */}
      <TemporalCharts />

      {/* Ranking comparativo por unidade */}
      <UnitComparison />
    </>
  );
}

function DateRangePicker() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>Período selecionado</span>
      <div style={{
        display: "flex", alignItems: "center", gap: "var(--spacing-8)",
        border: "1px solid var(--borda)", borderRadius: "var(--radius-8)",
        padding: "8px 12px", background: "var(--bg-primario)", cursor: "pointer",
      }}>
        <span style={{ fontSize: "14px" }}>📅</span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-13)", color: "var(--text-primario)", fontWeight: "var(--font-weight-medium)" }}>
          01/07/2026
        </span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-desabilitado)" }}>—</span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-13)", color: "var(--text-primario)", fontWeight: "var(--font-weight-medium)" }}>
          05/08/2026
        </span>
      </div>
    </div>
  );
}

function SentimentGauge() {
  const { nss, variacao, positivos, negativos, neutros } = SENTIMENTO;
  const angle = (nss / 100) * 270;

  return (
    <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
      <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", display: "block", marginBottom: "var(--spacing-4)" }}>Indicador de sentimento</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", display: "block", marginBottom: "var(--spacing-16)" }}>Como seus clientes estão se sentindo com o serviço</span>

      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "var(--spacing-24)", alignItems: "center" }}>
        {/* Gauge donut */}
        <div style={{ position: "relative", width: 160, height: 160, margin: "0 auto" }}>
          <svg viewBox="0 0 160 160" style={{ transform: "rotate(-135deg)" }}>
            <circle cx="80" cy="80" r="65" fill="none" stroke="var(--bg-secundario)" strokeWidth="14" strokeDasharray={`${270 * (Math.PI * 130 / 360)} ${Math.PI * 130}`} strokeLinecap="round" />
            <circle cx="80" cy="80" r="65" fill="none" stroke="var(--sucesso)" strokeWidth="14" strokeDasharray={`${angle * (Math.PI * 130 / 360)} ${Math.PI * 130}`} strokeLinecap="round" style={{ transition: "stroke-dasharray 1s ease-out" }} />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-secundario)" }}>NSS</span>
            <span style={{ ...fontBase, fontSize: "28px", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>{nss}</span>
          </div>
        </div>

        {/* Cards sentimento */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--spacing-12)" }}>
          <SentimentCard label="Satisfeitos" valor={positivos} icon="👍" color="var(--sucesso)" desc="respostas positivas" />
          <SentimentCard label="Insatisfeitos" valor={negativos} icon="⚠" color="var(--marca)" desc="respostas negativas" />
          <SentimentCard label="Neutros" valor={neutros} icon="—" color="var(--text-desabilitado)" desc="respostas neutras" />
        </div>
      </div>

      <div style={{ marginTop: "var(--spacing-16)", display: "flex", alignItems: "center", gap: "var(--spacing-8)", padding: "8px 12px", background: "var(--bg-secundario)", borderRadius: "var(--radius-8)" }}>
        <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>Base analisada: <strong>{SENTIMENTO.total}</strong> respostas</span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--sucesso)", marginLeft: "auto", fontWeight: "var(--font-weight-medium)" }}>+{variacao} pts vs. mês anterior</span>
      </div>
    </div>
  );
}

function SentimentCard({ label, valor, icon, color, desc }: { label: string; valor: number; icon: string; color: string; desc: string }) {
  return (
    <div style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-8)", padding: "var(--spacing-12)", display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)" }}>
        <span style={{ fontSize: "14px" }}>{icon}</span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>{label}</span>
      </div>
      <span style={{ ...fontBase, fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", color }}>{valor}</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)" }}>{desc}</span>
    </div>
  );
}

function TemporalCharts() {
  return (
    <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
      <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", display: "block", marginBottom: "var(--spacing-4)" }}>Quando chegam suas avaliações</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", display: "block", marginBottom: "var(--spacing-16)" }}>Distribuição temporal para identificar sazonalidade e horários de pico</span>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--spacing-16)" }}>
        <MiniBarChart title="Dia do mês" data={DISTRIBUICAO_TEMPORAL.diaMes} />
        <MiniBarChart title="Dia da semana" data={DISTRIBUICAO_TEMPORAL.diaSemana} />
        <MiniBarChart title="Horário" data={DISTRIBUICAO_TEMPORAL.horario} />
      </div>
    </div>
  );
}

function MiniBarChart({ title, data }: { title: string; data: { label: string; valor: number }[] }) {
  const max = Math.max(...data.map(d => d.valor));

  return (
    <div style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-8)", padding: "var(--spacing-12)" }}>
      <span style={{ ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", display: "block", marginBottom: "var(--spacing-12)" }}>{title}</span>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 80 }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{
              width: "100%", borderRadius: 3,
              height: `${(d.valor / max) * 100}%`,
              background: "rgba(59,130,246,0.6)",
              transition: "height 500ms ease-out",
              minHeight: 4,
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
        {data.map((d, i) => (
          <span key={i} style={{ ...fontBase, flex: 1, textAlign: "center", fontSize: "9px", color: "var(--text-desabilitado)" }}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}

function UnitComparison() {
  return (
    <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-20)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--spacing-16)" }}>
        <div>
          <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", display: "block" }}>Ranking comparativo por unidade</span>
          <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>Comparativo de notas públicas, notas do período e volume por unidade</span>
        </div>
        <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", padding: "4px 8px", background: "var(--bg-secundario)", borderRadius: "var(--radius-pill)" }}>{UNIDADES.length} unidades</span>
      </div>

      <div style={{ overflow: "hidden", borderRadius: "var(--radius-8)", border: "1px solid var(--borda)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--bg-secundario)" }}>
              <th style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secundario)", padding: "10px 12px", textAlign: "left" }}>#</th>
              <th style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secundario)", padding: "10px 12px", textAlign: "left" }}>UNIDADE</th>
              <th style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secundario)", padding: "10px 12px", textAlign: "center" }}>PÚBLICA</th>
              <th style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secundario)", padding: "10px 12px", textAlign: "center" }}>PERÍODO</th>
              <th style={{ ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)", color: "var(--text-secundario)", padding: "10px 12px", textAlign: "center" }}>VOLUME</th>
            </tr>
          </thead>
          <tbody>
            {UNIDADES.map((u, i) => (
              <tr key={u.nome} style={{ borderTop: "1px solid var(--borda)" }}>
                <td style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-desabilitado)", padding: "12px", width: 32 }}>{String(i + 1).padStart(2, '0')}</td>
                <td style={{ padding: "12px" }}>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-13)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>{u.nome}</span>
                </td>
                <td style={{ ...fontBase, fontSize: "var(--font-size-13)", color: "var(--text-primario)", padding: "12px", textAlign: "center" }}>{u.notaPublica}</td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-13)", color: "var(--text-primario)" }}>{u.notaPeriodo}</span>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-11)", marginLeft: 6, color: u.delta >= 0 ? "var(--sucesso)" : "var(--marca)", fontWeight: "var(--font-weight-medium)" }}>
                    {u.delta >= 0 ? "+" : ""}{u.delta}
                  </span>
                </td>
                <td style={{ ...fontBase, fontSize: "var(--font-size-13)", color: "var(--text-primario)", padding: "12px", textAlign: "center" }}>{u.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KpiCard({ label, valor, sufixo, delta, alerta }: {
  label: string; valor: string; sufixo?: string; delta?: string; alerta?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseFloat(valor);
  const decimals = valor.includes(".") ? valor.split(".")[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.disconnect();
        const start = performance.now();
        const dur = 700;
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          setDisplay(target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  const formatted = decimals > 0
    ? display.toFixed(decimals).replace(".", ",")
    : Math.round(display).toLocaleString("pt-BR");

  return (
    <div style={{
      background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)",
      padding: "var(--spacing-16)", display: "flex", flexDirection: "column", gap: 6,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)" }}>{label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span ref={ref} style={{ ...fontBase, fontSize: "var(--font-size-24)", fontWeight: "var(--font-weight-medium)", color: alerta ? "var(--marca)" : "var(--text-primario)", fontVariantNumeric: "tabular-nums" }}>
          {formatted}
        </span>
        {sufixo && <span style={{ ...fontBase, fontSize: "var(--font-size-14)", color: "var(--text-desabilitado)" }}>{sufixo}</span>}
      </div>
      {delta && (
        <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--sucesso)" }}>
          {delta} vs. período anterior
        </span>
      )}
    </div>
  );
}

function FonteRow({ fonte, nota, total, cor }: { fonte: string; nota: number; total: number; cor: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-12)" }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: cor }} />
      <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", flex: 1 }}>{fonte}</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-18)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>{nota}</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)" }}>{total} reviews</span>
    </div>
  );
}
