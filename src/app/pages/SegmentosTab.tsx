import { useState } from "react";
import { CriarPromocaoDrawer } from "../components/home/CriarPromocaoDrawer";

export function SegmentosTab() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="flex flex-col gap-10">

      {/* Grade de segmentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--spacing-16)" }}>
        {/* Cross-channel */}
        <div className="md:col-span-2" style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", backgroundColor: "var(--marca)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>Cross-channel</span>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-16)" }}>
            <div style={{ flex: 1 }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Pediram delivery, nunca vieram</span>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>1.847</div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>no raio de 3 km, últimos 90 dias</div>
            </div>
            <button type="button" onClick={() => setDrawerOpen(true)} style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>Criar campanha de primeira visita</button>
          </div>
        </div>

        {[
          { nome: "Novato", count: 194, causa: "primeira visita nos últimos 90 dias", sugestao: "Cashback de boas-vindas R$ 20" },
          { nome: "Fiel", count: 412, causa: "4 ou mais visitas, ativo no último mês", sugestao: "Desconto exclusivo no prato favorito" },
          { nome: "VIP", count: 88, causa: "ticket médio acima de R$ 150", sugestao: "Convite para evento de degustação" },
          { nome: "Em risco", count: 604, causa: "já vieram 3+ vezes, sumiram há 60 dias", sugestao: "Cupom de retorno R$ 15" },
          { nome: "Perdido", count: 331, causa: "sem visita há mais de 6 meses", sugestao: "Desconto agressivo de reativação R$ 30" },
        ].map((seg) => (
          <div key={seg.nome} style={{ backgroundColor: "var(--bg-secundario)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", marginBottom: "var(--spacing-8)" }}>Automático</span>
            <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>{seg.nome}</span>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", marginTop: "var(--spacing-4)" }}>{seg.count}</div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>{seg.causa}</div>
            <div style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--sucesso)", marginTop: "var(--spacing-8)", display: "flex", alignItems: "center", gap: 4 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3" stroke="var(--sucesso)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {seg.sugestao}
            </div>
            <button type="button" onClick={() => setDrawerOpen(true)} style={{ border: "none", borderRadius: "var(--radius-pill)", padding: "6px 12px", background: "var(--invertido)", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "#ffffff", marginTop: "var(--spacing-12)" }}>Criar campanha</button>
          </div>
        ))}

        {/* Novo segmento */}
        <div className="flex flex-col items-center justify-center gap-2" style={{ borderRadius: "var(--radius-12)", border: "1px dashed var(--bg-terciario)", padding: "var(--spacing-16)", minHeight: 120, cursor: "pointer" }}>
          <i className="ifdl-icon-line ifdl-icon-add" style={{ fontSize: 20, color: "var(--text-desabilitado)" }} />
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-desabilitado)" }}>Novo segmento</span>
        </div>
      </div>
      <CriarPromocaoDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}