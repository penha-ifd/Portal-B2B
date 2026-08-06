import { useState } from 'react';
import { fontBase, REVIEWS, TEMAS, WORD_CLOUD, RESPOSTAS_PREDEFINIDAS, diasAtras, renderEstrelas, getSentimento } from './shared';

type FiltroTab = "todas" | "pendentes" | "respondidas";
type FiltroFonte = "todas" | "ifood" | "google";

export default function AvaliacoesFeedPage() {
  const [filtroTab, setFiltroTab] = useState<FiltroTab>("todas");
  const [filtroFonte, setFiltroFonte] = useState<FiltroFonte>("todas");
  const [busca, setBusca] = useState("");
  const [respondendo, setRespondendo] = useState<number | null>(null);
  const [respostaTexto, setRespostaTexto] = useState("");

  const reviewsFiltradas = REVIEWS.filter(r => {
    if (filtroTab === "pendentes" && r.respondida) return false;
    if (filtroTab === "respondidas" && !r.respondida) return false;
    if (filtroFonte !== "todas" && r.fonte !== filtroFonte) return false;
    if (busca) {
      const q = busca.toLowerCase();
      if (!r.nome.toLowerCase().includes(q) && !r.texto.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 32px 64px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 22 }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: '#EA1D2C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 1.8z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.01em' }}>Avaliações</div>
          <div style={{ fontSize: 13.5, color: '#6B6560', marginTop: 3 }}>Gerencie e responda avaliações dos clientes.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 36, padding: '0 14px', border: '1px solid #E0DAD2', borderRadius: 10, fontSize: 13, cursor: 'pointer' }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1.8" y="2.8" width="10.4" height="9.4" rx="2" stroke="#3A3632" strokeWidth="1.3"/><path d="M1.8 5.6h10.4M4.6 1.8v2M9.4 1.8v2" stroke="#3A3632" strokeWidth="1.3" strokeLinecap="round"/></svg>
          <span style={{ fontWeight: 500 }}>01/07/2026 — 05/08/2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 36, padding: '0 16px', background: '#151515', color: '#fff', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.8v7.4M4 6.4L7 9.4l3-3M2 11.6h10" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Exportar
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Word Cloud */}
      <WordCloud />

      {/* Temas mais mencionados */}
      <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
        <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-12)", display: "block" }}>Temas mais mencionados</span>
        <div style={{ display: "flex", gap: "var(--spacing-8)", flexWrap: "wrap" }}>
          {TEMAS.map(t => (
            <span key={t.nome} style={{
              ...fontBase,
              display: "inline-flex", alignItems: "center", gap: 4,
              fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)",
              padding: "4px 12px", borderRadius: "var(--radius-pill)",
              color: t.sentimento === "positivo" ? "var(--sucesso)" : t.sentimento === "negativo" ? "var(--marca)" : "var(--text-secundario)",
              backgroundColor: t.sentimento === "positivo" ? "rgba(31,173,104,0.10)" : t.sentimento === "negativo" ? "rgba(235,0,51,0.08)" : "var(--bg-secundario)",
            }}>
              {t.nome} ({t.count}) {t.sentimento === "positivo" ? "↑" : t.sentimento === "negativo" ? "↓" : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Insight AI da semana */}
      <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", borderLeft: "3px solid var(--marca)", padding: "var(--spacing-16)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)", marginBottom: "var(--spacing-8)" }}>
          <span style={{ fontSize: "16px" }}>✦</span>
          <span style={{ ...fontBase, display: "inline-block", fontSize: "var(--font-size-11)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px" }}>Gerado por IA · esta semana</span>
        </div>
        <span style={{ ...fontBase, display: "block", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-8)" }}>Insight das avaliações</span>
        <span style={{ ...fontBase, display: "block", fontSize: "var(--font-size-14)", color: "var(--text-primario)", lineHeight: "20px" }}>3 dos 5 reviews negativos desta semana mencionam <strong>tempo de espera no atendimento</strong>. O problema se concentra no horário de pico (19h–20h30). Restaurantes que redistribuíram garçons nesse turno reduziram reclamações em 40%.</span>
        <button type="button" style={{ ...fontBase, border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontSize: "var(--font-size-12)", color: "var(--text-primario)", marginTop: "var(--spacing-12)" }}>Ver reviews sobre espera</button>
      </div>

      {/* Feed de reviews */}
      <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", overflow: "hidden" }}>
        {/* Barra de ações */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px var(--spacing-16)", borderBottom: "1px solid var(--borda)", background: "var(--bg-secundario)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-12)" }}>
            <span style={{ ...fontBase, fontSize: "var(--font-size-13)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>
              {reviewsFiltradas.length} avaliações
            </span>
            <button type="button" style={{ ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", color: "var(--marca)", background: "rgba(235,0,51,0.08)", border: "none", borderRadius: "var(--radius-pill)", padding: "5px 12px", cursor: "pointer" }}>
              Responder em massa
            </button>
          </div>
          <input
            type="text"
            placeholder="Buscar por nome ou texto..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            style={{
              ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-primario)",
              border: "1px solid var(--borda)", borderRadius: "var(--radius-8)",
              padding: "6px 12px", width: 220, background: "var(--bg-primario)",
              outline: "none",
            }}
          />
        </div>

        {/* Filtros */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--spacing-12) var(--spacing-16)", borderBottom: "1px solid var(--borda)" }}>
          <div style={{ display: "flex", gap: "var(--spacing-4)" }}>
            {(["todas", "pendentes", "respondidas"] as FiltroTab[]).map(tab => (
              <button key={tab} onClick={() => setFiltroTab(tab)} style={{
                ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)",
                padding: "6px 12px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
                background: filtroTab === tab ? "var(--invertido)" : "var(--bg-secundario)",
                color: filtroTab === tab ? "#ffffff" : "var(--text-secundario)",
                transition: "all 150ms ease",
              }}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "var(--spacing-4)" }}>
            {(["todas", "ifood", "google"] as FiltroFonte[]).map(f => (
              <button key={f} onClick={() => setFiltroFonte(f)} style={{
                ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                padding: "4px 10px", borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
                background: filtroFonte === f ? (f === "ifood" ? "rgba(235,0,51,0.08)" : f === "google" ? "rgba(255,195,71,0.15)" : "var(--bg-terciario)") : "var(--bg-secundario)",
                color: filtroFonte === f ? (f === "ifood" ? "var(--marca)" : f === "google" ? "#F57C00" : "var(--text-primario)") : "var(--text-desabilitado)",
                transition: "all 150ms ease",
              }}>
                {f === "todas" ? "Todas" : f === "ifood" ? "iFood" : "Google"}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de reviews */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {reviewsFiltradas.map((r, i) => {
            const sentimento = getSentimento(r.estrelas);
            return (
              <div key={r.id} style={{
                padding: "var(--spacing-16)",
                borderBottom: i < reviewsFiltradas.length - 1 ? "1px solid var(--borda)" : "none",
                animation: `fadeSlideIn 300ms ease-out ${i * 50}ms both`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)", marginBottom: "var(--spacing-8)" }}>
                  <span style={{
                    ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                    padding: "2px 8px", borderRadius: "var(--radius-pill)",
                    color: r.fonte === "ifood" ? "var(--marca)" : "#F57C00",
                    backgroundColor: r.fonte === "ifood" ? "rgba(235,0,51,0.08)" : "rgba(255,195,71,0.15)",
                  }}>
                    {r.fonte === "ifood" ? "iFood" : "Google"}
                  </span>
                  {/* Badge de sentimento */}
                  <span style={{
                    ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                    padding: "2px 8px", borderRadius: "var(--radius-pill)",
                    color: sentimento === "positivo" ? "var(--sucesso)" : sentimento === "negativo" ? "var(--marca)" : "var(--text-secundario)",
                    backgroundColor: sentimento === "positivo" ? "rgba(31,173,104,0.10)" : sentimento === "negativo" ? "rgba(235,0,51,0.08)" : "var(--bg-secundario)",
                  }}>
                    {sentimento === "positivo" ? "Positivo" : sentimento === "negativo" ? "Negativo" : "Neutro"}
                  </span>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-14)", color: r.estrelas <= 2 ? "var(--marca)" : "var(--atencao)", letterSpacing: "1px" }}>
                    {renderEstrelas(r.estrelas)}
                  </span>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)" }}>{r.nome}</span>
                  <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-desabilitado)", marginLeft: "auto" }}>{diasAtras(r.data)}</span>
                  {r.estrelas <= 2 && !r.respondida && (
                    <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--marca)", fontWeight: "var(--font-weight-medium)" }}>Atenção</span>
                  )}
                </div>
                <p style={{ ...fontBase, fontSize: "var(--font-size-14)", color: "var(--text-secundario)", margin: 0, lineHeight: "20px" }}>
                  {r.texto}
                </p>
                {r.temas && r.temas.length > 0 && (
                  <div style={{ display: "flex", gap: "var(--spacing-4)", flexWrap: "wrap", marginTop: "var(--spacing-8)" }}>
                    {r.temas.map(tema => {
                      const temaData = TEMAS.find(t => t.nome === tema);
                      const s = temaData?.sentimento || "neutro";
                      return (
                        <span key={tema} style={{
                          ...fontBase, fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-medium)",
                          padding: "2px 8px", borderRadius: "var(--radius-pill)",
                          color: s === "positivo" ? "var(--sucesso)" : s === "negativo" ? "var(--marca)" : "var(--text-secundario)",
                          backgroundColor: s === "positivo" ? "rgba(31,173,104,0.10)" : s === "negativo" ? "rgba(235,0,51,0.08)" : "var(--bg-secundario)",
                        }}>
                          {tema}
                        </span>
                      );
                    })}
                  </div>
                )}
                {r.respondida && r.resposta && (
                  <div style={{ marginTop: "var(--spacing-8)", paddingLeft: "var(--spacing-12)", borderLeft: "2px solid var(--borda)" }}>
                    <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", fontStyle: "italic" }}>
                      {r.resposta}
                    </span>
                  </div>
                )}

                {/* Ação de resposta */}
                <div style={{ marginTop: "var(--spacing-8)" }}>
                  {r.respondida ? (
                    <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--sucesso)", fontWeight: "var(--font-weight-medium)" }}>
                      Respondida
                    </span>
                  ) : respondendo === r.id ? (
                    <InlineReply
                      texto={respostaTexto}
                      onChange={setRespostaTexto}
                      onCancel={() => { setRespondendo(null); setRespostaTexto(""); }}
                      onPublish={() => { setRespondendo(null); setRespostaTexto(""); }}
                      onGenerate={() => setRespostaTexto("Olá! Agradecemos seu feedback. Estamos sempre buscando melhorar sua experiência. Gostaríamos de entender melhor o ocorrido — entre em contato conosco!")}
                    />
                  ) : (
                    <button
                      onClick={() => setRespondendo(r.id)}
                      style={{
                        ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)",
                        color: "var(--marca)", background: "none", border: "1px solid var(--marca)",
                        borderRadius: "var(--radius-pill)", padding: "4px 12px", cursor: "pointer",
                        transition: "all 150ms ease",
                      }}
                    >
                      Responder
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

function InlineReply({ texto, onChange, onCancel, onPublish, onGenerate }: {
  texto: string; onChange: (v: string) => void;
  onCancel: () => void; onPublish: () => void; onGenerate: () => void;
}) {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-8)", padding: "var(--spacing-12)", background: "var(--bg-secundario)" }}>
      <textarea
        value={texto}
        onChange={e => onChange(e.target.value)}
        placeholder="Escreva sua resposta..."
        style={{
          ...fontBase, fontSize: "var(--font-size-13)", color: "var(--text-primario)",
          width: "100%", minHeight: 64, border: "1px solid var(--borda)", borderRadius: "var(--radius-8)",
          padding: "var(--spacing-8)", background: "var(--bg-primario)", resize: "vertical", outline: "none",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-8)", marginTop: "var(--spacing-8)", flexWrap: "wrap" }}>
        <button onClick={onGenerate} style={{ ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", color: "var(--marca)", background: "rgba(235,0,51,0.08)", border: "none", borderRadius: "var(--radius-pill)", padding: "5px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
          ✦ Gerar com IA
        </button>
        <button onClick={() => setShowTemplates(!showTemplates)} style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", background: "none", border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", cursor: "pointer" }}>
          Mensagens predefinidas
        </button>
        <div style={{ marginLeft: "auto", display: "flex", gap: "var(--spacing-8)" }}>
          <button onClick={onCancel} style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", background: "none", border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 12px", cursor: "pointer" }}>
            Cancelar
          </button>
          <button onClick={onPublish} disabled={!texto.trim()} style={{ ...fontBase, fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-medium)", color: "#fff", background: texto.trim() ? "var(--marca)" : "var(--text-desabilitado)", border: "none", borderRadius: "var(--radius-pill)", padding: "5px 14px", cursor: texto.trim() ? "pointer" : "not-allowed" }}>
            Publicar
          </button>
        </div>
      </div>
      {showTemplates && (
        <div style={{ marginTop: "var(--spacing-8)", display: "flex", flexDirection: "column", gap: 4, border: "1px solid var(--borda)", borderRadius: "var(--radius-8)", padding: "var(--spacing-8)", background: "var(--bg-primario)" }}>
          {RESPOSTAS_PREDEFINIDAS.map((t, i) => (
            <button key={i} onClick={() => { onChange(t); setShowTemplates(false); }} style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-primario)", background: "none", border: "none", textAlign: "left", padding: "6px 8px", borderRadius: "var(--radius-4)", cursor: "pointer" }}>
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function WordCloud() {
  const max = Math.max(...WORD_CLOUD.map(w => w.count));
  const min = Math.min(...WORD_CLOUD.map(w => w.count));

  return (
    <div style={{ background: "var(--bg-primario)", border: "1px solid var(--borda)", borderRadius: "var(--radius-12)", padding: "var(--spacing-16)" }}>
      <span style={{ ...fontBase, fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", color: "var(--text-primario)", marginBottom: "var(--spacing-4)", display: "block" }}>Nuvem de palavras</span>
      <span style={{ ...fontBase, fontSize: "var(--font-size-12)", color: "var(--text-secundario)", marginBottom: "var(--spacing-16)", display: "block" }}>Termos mais frequentes nas avaliações do período</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-8)", alignItems: "center", justifyContent: "center", padding: "var(--spacing-8)" }}>
        {WORD_CLOUD.map(w => {
          const size = 12 + ((w.count - min) / (max - min)) * 16;
          const color = w.sentimento === "positivo" ? "var(--sucesso)" : w.sentimento === "negativo" ? "var(--marca)" : "var(--text-secundario)";
          return (
            <span key={w.palavra} style={{
              ...fontBase,
              fontSize: `${size}px`,
              fontWeight: w.count > (max * 0.6) ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
              color,
              opacity: 0.7 + (w.count / max) * 0.3,
              cursor: "default",
              transition: "transform 150ms ease",
            }}>
              {w.palavra}
            </span>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: "var(--spacing-16)", justifyContent: "center", marginTop: "var(--spacing-12)" }}>
        <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--sucesso)", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sucesso)" }} /> Positivo
        </span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--marca)", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--marca)" }} /> Negativo
        </span>
        <span style={{ ...fontBase, fontSize: "var(--font-size-11)", color: "var(--text-secundario)", display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--text-desabilitado)" }} /> Neutro
        </span>
      </div>
    </div>
  );
}
