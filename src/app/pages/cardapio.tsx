import { useState } from "react";
import { motion } from "motion/react";

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  delivery: number | null;
  comps: number;
  off?: boolean;
}

interface Categoria {
  id: string;
  name: string;
  items: MenuItem[];
}

const DATA: Categoria[] = [
  {
    id: "entradas",
    name: "Entradas",
    items: [
      { id: "e1", name: "Bruschetta caprese", desc: "Pão italiano tostado, tomate, muçarela de búfala e manjericão.", price: 32.9, delivery: 29.9, comps: 2 },
      { id: "e2", name: "Carpaccio de carne", desc: "Fatias finas de filé, molho de mostarda, alcaparras e parmesão.", price: 46.9, delivery: 44.9, comps: 3 },
      { id: "e3", name: "Polenta com ragu", desc: "Polenta cremosa com ragu de costela cozido por 6 horas.", price: 38.9, delivery: 36.9, comps: 1 },
      { id: "e4", name: "Focaccia da casa", desc: "Assada no dia com alecrim e azeite extravirgem.", price: 24.9, delivery: null, comps: 2, off: true },
    ],
  },
  {
    id: "massas",
    name: "Massas",
    items: [
      { id: "m1", name: "Nhoque ao molho pesto", desc: "Nhoque de batata, pesto de manjericão fresco e pinoli tostado.", price: 52.9, delivery: 49.9, comps: 4 },
      { id: "m2", name: "Spaghetti alle vongole", desc: "Vôngoles frescos, alho, vinho branco e salsinha.", price: 68.9, delivery: 64.9, comps: 2 },
      { id: "m3", name: "Lasanha à bolonhesa", desc: "Massa fresca, ragu de carne e bechamel gratinado.", price: 56.9, delivery: 52.9, comps: 3 },
      { id: "m4", name: "Ravioli de burrata", desc: "Recheio de burrata com manteiga de sálvia e tomate confit.", price: 62.9, delivery: 58.9, comps: 2 },
      { id: "m5", name: "Risoto de camarão", desc: "Arroz arbóreo, camarões salteados e toque de limão siciliano.", price: 74.9, delivery: 69.9, comps: 3 },
    ],
  },
  {
    id: "peixes",
    name: "Peixes e frutos do mar",
    items: [
      { id: "p1", name: "Salmão grelhado", desc: "Salmão com crosta de ervas, purê de couve-flor e aspargos.", price: 72.9, delivery: 68.9, comps: 3 },
      { id: "p2", name: "Polvo à lagareiro", desc: "Polvo assado com batata ao murro e azeite português.", price: 96.9, delivery: 89.9, comps: 1 },
      { id: "p3", name: "Frutos do mar ao vinho branco", desc: "Camarão, lula e mexilhão em caldo de vinho branco. Serve 2.", price: 88.9, delivery: null, comps: 2 },
    ],
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    items: [
      { id: "s1", name: "Tiramisu", desc: "Receita clássica com mascarpone e café espresso.", price: 28.9, delivery: 26.9, comps: 1 },
      { id: "s2", name: "Panna cotta", desc: "Creme de baunilha com calda de frutas vermelhas.", price: 24.9, delivery: 22.9, comps: 2 },
      { id: "s3", name: "Cannoli siciliano", desc: "Massa crocante com ricota doce e pistache. Feito na hora.", price: 22.9, delivery: null, comps: 1, off: true },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      { id: "b1", name: "Chianti Riserva (taça)", desc: "Vinho tinto italiano, 150ml. Disponível só no salão.", price: 32.9, delivery: null, comps: 0 },
      { id: "b2", name: "Limonada siciliana", desc: "Limão siciliano espremido na hora com hortelã.", price: 14.9, delivery: 12.9, comps: 2 },
      { id: "b3", name: "Água com gás", desc: "Garrafa 500ml.", price: 8.9, delivery: 7.9, comps: 0 },
      { id: "b4", name: "Espresso", desc: "Blend italiano torrado na semana.", price: 9.9, delivery: null, comps: 1 },
    ],
  },
];

const money = (n: number) => "R$ " + n.toFixed(2).replace(".", ",");

type Tab = "cardapio" | "complementos" | "disponibilidade" | "importados";

export function CardapioPage() {
  const [tab, setTab] = useState<Tab>("cardapio");
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<Record<string, boolean>>(() => {
    const state: Record<string, boolean> = {};
    DATA.forEach((c) => c.items.forEach((i) => { state[i.id] = !i.off; }));
    return state;
  });

  const tabs: { id: Tab; label: string }[] = [
    { id: "cardapio", label: "Cardápio" },
    { id: "complementos", label: "Complementos" },
    { id: "disponibilidade", label: "Disponibilidade" },
    { id: "importados", label: "Importados do delivery" },
  ];

  const q = query.trim().toLowerCase();
  const filteredCats = DATA.map((c) => {
    const items = c.items.filter(
      (i) => !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)
    );
    return { ...c, items };
  }).filter((c) => c.items.length > 0);

  const allItems = DATA.flatMap((c) => c.items);
  const totalItems = allItems.length;
  const totalCats = DATA.length;
  const pausedCount = allItems.filter((i) => !active[i.id]).length;

  const toggleCollapse = (catId: string) => {
    setCollapsed((s) => ({ ...s, [catId]: !s[catId] }));
  };

  const toggleItem = (itemId: string) => {
    setActive((s) => ({ ...s, [itemId]: !s[itemId] }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      <div style={{ flex: 1, minHeight: 0, background: "#FFFFFF", borderRadius: "var(--radius-16)", overflowY: "auto" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 32px 60px" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "#EA1D2C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M3.5 2v5.5a2 2 0 002 2h0V14M3.5 2v3.2M5.8 2v3.2M11.5 2c-1.2 1.4-1.6 3-1.6 4.4 0 1 .5 1.7 1.6 1.9V14" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em", fontFamily: "var(--font-inter)" }}>Cardápio do salão</div>
              <div style={{ fontSize: 13.5, color: "var(--texto-secundario)", marginTop: 3 }}>Preços e disponibilidade independentes do delivery. Edite aqui o que o cliente consome na mesa.</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button style={{ display: "flex", alignItems: "center", gap: 7, height: 36, padding: "0 14px", border: "1px solid var(--borda)", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", background: "transparent", fontFamily: "var(--font-inter)" }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1.8v7.4M4 6.4L7 9.4l3-3M2 11.6h10" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Sincronizar delivery
              </button>
              <button style={{ display: "flex", alignItems: "center", gap: 7, height: 36, padding: "0 16px", background: "#151515", color: "#fff", border: "none", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-inter)" }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2.4v9.2M2.4 7h9.2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>
                Adicionar item
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", alignItems: "center", gap: 26, borderBottom: "1px solid var(--borda)", marginTop: 22 }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: "10px 2px 12px",
                  fontSize: 14,
                  fontWeight: tab === t.id ? 600 : 500,
                  color: tab === t.id ? "var(--texto-primario)" : "var(--texto-secundario)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t.label}
                {tab === t.id && (
                  <motion.div
                    layoutId="cardapio-tab-indicator"
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#EA1D2C", borderRadius: 1 }}
                  />
                )}
              </button>
            ))}
          </div>

          {tab === "cardapio" && (
            <>
              {/* Stats pills */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 13px", background: "var(--bg-secundario)", border: "1px solid var(--borda)", borderRadius: 999, fontSize: 12.5, color: "var(--texto-primario)" }}>
                  <strong>{totalItems}</strong> itens no salão
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 13px", background: "var(--bg-secundario)", border: "1px solid var(--borda)", borderRadius: 999, fontSize: 12.5, color: "var(--texto-primario)" }}>
                  <strong>{totalCats}</strong> categorias
                </div>
                {pausedCount > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 13px", background: "#FFF3F4", border: "1px solid #FBDDE0", borderRadius: 999, fontSize: 12.5, color: "#B3131F" }}>
                    <strong>{pausedCount}</strong> pausados agora
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 13px", background: "var(--bg-secundario)", border: "1px solid var(--borda)", borderRadius: 999, fontSize: 12.5, color: "var(--texto-secundario)" }}>
                  87 itens no delivery · sincronizado há 2h
                </div>
              </div>

              {/* Insight card */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginTop: 16, padding: "16px 18px", borderTop: "1px solid var(--borda)", borderRight: "1px solid var(--borda)", borderBottom: "1px solid var(--borda)", borderLeft: "3px solid #EA1D2C", borderRadius: 12, background: "#FDFBF9" }}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2, flexShrink: 0 }}><path d="M8 1.5l1.5 4.2 4.2 1.5-4.2 1.5L8 13l-1.5-4.3L2.3 7.2l4.2-1.5L8 1.5z" fill="#EA1D2C" /></svg>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>Insight do cardápio</span>
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--texto-secundario)", background: "var(--bg-secundario)", borderRadius: 5, padding: "2px 7px" }}>Assistente de AI</span>
                  </div>
                  <div style={{ fontSize: 13.5, color: "#4A453F", lineHeight: 1.5, marginTop: 5 }}>
                    Risoto de camarão, Salmão grelhado e Bruschetta vendem bem no delivery e ainda não têm preço de salão ajustado. A margem média na mesa costuma ser 8% maior.
                  </div>
                </div>
                <button style={{ display: "flex", alignItems: "center", alignSelf: "center", height: 32, padding: "0 14px", border: "1px solid var(--borda)", borderRadius: 9, fontSize: 12.5, fontWeight: 600, cursor: "pointer", background: "transparent", whiteSpace: "nowrap", fontFamily: "var(--font-inter)" }}>
                  Ver sugestões
                </button>
              </div>

              {/* Search bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9, flex: 1, maxWidth: 340, height: 38, padding: "0 13px", border: "1px solid var(--borda)", borderRadius: 10, background: "#fff" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6.2" cy="6.2" r="4.4" stroke="#9C948B" strokeWidth="1.4" /><path d="M9.6 9.6l2.6 2.6" stroke="#9C948B" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  <input
                    type="text"
                    placeholder="Buscar um item"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ border: "none", outline: "none", flex: 1, fontSize: 13.5, color: "var(--texto-primario)", background: "transparent", fontFamily: "var(--font-inter)" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, height: 38, padding: "0 13px", border: "1px solid var(--borda)", borderRadius: 10, fontSize: 13.5, color: "var(--texto-secundario)", cursor: "pointer", minWidth: 200 }}>
                  Selecionar categoria
                  <div style={{ flex: 1 }} />
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 4l2.5 2.5L7.5 4" stroke="#6B6560" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </div>
                <div style={{ flex: 1 }} />
                <button style={{ display: "flex", alignItems: "center", height: 38, padding: "0 15px", border: "1px solid var(--borda)", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", background: "transparent", fontFamily: "var(--font-inter)" }}>
                  Adicionar categoria
                </button>
              </div>

              {/* Category list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
                {filteredCats.map((cat) => {
                  const isOpen = !collapsed[cat.id] || !!q;
                  const pausedInCat = cat.items.filter((i) => !active[i.id]).length;

                  return (
                    <div key={cat.id} style={{ border: "1px solid var(--borda)", borderRadius: 13, overflow: "hidden" }}>
                      {/* Category header */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "var(--bg-secundario)", borderBottom: isOpen ? "1px solid var(--borda)" : "none" }}>
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}><path d="M9.4 1.9l2.7 2.7-7 7-3.3.6.6-3.3 7-7z" stroke="#6B6560" strokeWidth="1.3" strokeLinejoin="round" /></svg>
                        <span style={{ fontSize: 14, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "#D6D0C8", cursor: "pointer" }}>{cat.name}</span>
                        <span style={{ fontSize: 12.5, color: "#9C948B" }}>({cat.items.length} itens)</span>
                        {pausedInCat > 0 && (
                          <span style={{ fontSize: 11, fontWeight: 600, color: "#B3131F", background: "#FFF3F4", border: "1px solid #FBDDE0", borderRadius: 6, padding: "2px 8px" }}>
                            {pausedInCat} pausado{pausedInCat > 1 ? "s" : ""}
                          </span>
                        )}
                        <div style={{ flex: 1 }} />
                        <button style={{ display: "flex", alignItems: "center", height: 30, padding: "0 13px", background: "#fff", border: "1px solid var(--borda)", borderRadius: 8, fontSize: 12.5, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-inter)" }}>
                          Criar combo
                        </button>
                        <button style={{ display: "flex", alignItems: "center", height: 30, padding: "0 13px", background: "#fff", border: "1px solid var(--borda)", borderRadius: 8, fontSize: 12.5, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-inter)" }}>
                          Criar oferta
                        </button>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 8, cursor: "grab" }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="#9C948B"><circle cx="4" cy="2.2" r="1" /><circle cx="8" cy="2.2" r="1" /><circle cx="4" cy="6" r="1" /><circle cx="8" cy="6" r="1" /><circle cx="4" cy="9.8" r="1" /><circle cx="8" cy="9.8" r="1" /></svg>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 8, cursor: "pointer" }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="#6B6560"><circle cx="6" cy="2" r="1.1" /><circle cx="6" cy="6" r="1.1" /><circle cx="6" cy="10" r="1.1" /></svg>
                        </div>
                        <button
                          onClick={() => toggleCollapse(cat.id)}
                          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: 8, cursor: "pointer", background: "none", border: "none" }}
                        >
                          {isOpen ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 7.5L6 4.5l3 3" stroke="#3A3632" strokeWidth="1.5" strokeLinecap="round" /></svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5l3-3" stroke="#3A3632" strokeWidth="1.5" strokeLinecap="round" /></svg>
                          )}
                        </button>
                      </div>

                      {/* Items */}
                      {isOpen && (
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {cat.items.map((item) => {
                            const isOn = !!active[item.id];
                            const diff = item.delivery ? Math.round(((item.price - item.delivery) / item.delivery) * 100) : 0;
                            const initials = item.name.split(" ").filter((w) => w.length > 2).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

                            return (
                              <div
                                key={item.id}
                                style={{ display: "flex", alignItems: "center", gap: 14, padding: "11px 14px 11px 8px", borderBottom: "1px solid #F2EFEA" }}
                              >
                                {/* Drag handle */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 20, flexShrink: 0, cursor: "grab" }}>
                                  <svg width="10" height="12" viewBox="0 0 10 12" fill="#CFC8BF"><circle cx="3" cy="2.2" r="1" /><circle cx="7" cy="2.2" r="1" /><circle cx="3" cy="6" r="1" /><circle cx="7" cy="6" r="1" /><circle cx="3" cy="9.8" r="1" /><circle cx="7" cy="9.8" r="1" /></svg>
                                </div>

                                {/* Thumbnail */}
                                <div style={{ width: 42, height: 42, borderRadius: 9, background: "#EFE9E1", border: "1px solid #E4DDD3", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#B5AA9C" }}>
                                  {initials}
                                </div>

                                {/* Name & desc */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <span style={{ fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</span>
                                    {!item.delivery && (
                                      <span style={{ fontSize: 10.5, fontWeight: 600, color: "#0E6B45", background: "#E6F6EE", borderRadius: 5, padding: "2px 7px", whiteSpace: "nowrap" }}>Exclusivo do salão</span>
                                    )}
                                    {item.delivery && (
                                      <span style={{ fontSize: 10.5, fontWeight: 600, color: "#6B6560", background: "#F2EFEA", borderRadius: 5, padding: "2px 7px", whiteSpace: "nowrap" }}>Do delivery</span>
                                    )}
                                  </div>
                                  <div style={{ fontSize: 12.5, color: "#8A837B", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.desc}</div>
                                </div>

                                {/* Badges */}
                                <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                                  <span style={{ fontSize: 11.5, color: "#6B6560", background: "var(--bg-secundario)", border: "1px solid var(--borda)", borderRadius: 7, padding: "4px 9px", cursor: "pointer" }}>
                                    ID {item.id.toUpperCase()}-{1000 + item.name.length * 37}
                                  </span>
                                  <span style={{ fontSize: 11.5, color: "#6B6560", background: "var(--bg-secundario)", border: "1px solid var(--borda)", borderRadius: 7, padding: "4px 9px", cursor: "pointer" }}>
                                    {item.comps > 0 ? `${item.comps} complementos` : "Sem complementos"}
                                  </span>
                                </div>

                                {/* Price */}
                                <div style={{ width: 132, flexShrink: 0, textAlign: "right" }}>
                                  <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "-0.01em" }}>{money(item.price)}</div>
                                  <div style={{ fontSize: 11.5, color: "#9C948B", marginTop: 1 }}>
                                    {item.delivery ? `delivery ${money(item.delivery)} · +${diff}%` : "só no salão"}
                                  </div>
                                </div>

                                {/* Toggle */}
                                <div onClick={() => toggleItem(item.id)} style={{ flexShrink: 0, cursor: "pointer" }}>
                                  {isOn ? (
                                    <div style={{ width: 38, height: 22, borderRadius: 999, background: "#1CBF6E", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 3px" }}>
                                      <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
                                    </div>
                                  ) : (
                                    <div style={{ width: 38, height: 22, borderRadius: 999, background: "#D9D3CB", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "0 3px" }}>
                                      <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
                                    </div>
                                  )}
                                </div>

                                {/* Actions */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: 8, flexShrink: 0, cursor: "pointer" }}>
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#6B6560"><circle cx="6" cy="2" r="1.1" /><circle cx="6" cy="6" r="1.1" /><circle cx="6" cy="10" r="1.1" /></svg>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Empty state */}
              {filteredCats.length === 0 && (
                <div style={{ padding: "60px 20px", textAlign: "center", color: "#9C948B", fontSize: 14 }}>
                  Nenhum item encontrado para essa busca.
                </div>
              )}
            </>
          )}

          {/* Other tabs placeholder */}
          {tab !== "cardapio" && (
            <div style={{ padding: "60px 20px", textAlign: "center", color: "#9C948B", fontSize: 14 }}>
              Em breve.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
