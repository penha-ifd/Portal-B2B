import { usePlano } from "../state/plano-context";
import { useNavigate } from "react-router";

const ESTAGIOS = [
  { nome: "Ativação", descricao: "3 de 7 módulos", destaque: false, nota: null },
  { nome: "Identificação", descricao: "285 clientes reconhecidos", destaque: false, nota: null },
  { nome: "CRM", descricao: "Clientes › Segmentos", destaque: true, nota: "só 8% da sua base está identificada" },
  { nome: "Inteligência", descricao: "4 insights disponíveis", destaque: false, nota: null },
  { nome: "Resultado", descricao: "R$ 11,8 a 13,1 mil no mês", destaque: false, nota: null },
];

const MODULOS = [
  { nome: "Avaliações", preco: "R$ 49/mês", insight: "Descobre que a nota caiu 0,3 desde a troca do cardápio" },
  { nome: "Pagamento na mesa", preco: "R$ 79/mês", insight: "Troca faturamento estimado por faturamento real, conciliado no PDV" },
  { nome: "Fidelidade", preco: "R$ 49/mês", insight: "Transforma quem veio uma vez em quem volta sem precisar de cupom" },
];

const PLANO_INFO: Record<string, string> = {
  base: "Plano Base · nenhum módulo ativo",
  essencial: "Plano Essencial · Cardápio, Reservas, PDV",
  avancado: "Plano Avançado · todos os módulos",
};

export function JornadaContent() {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-[18px] font-medium text-[#141414] leading-6">Sua jornada no Comer Fora</h1>
        <p className="paragraph-p2-14-regular text-[#666666]">Cada módulo que você ativa alimenta os próximos</p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0">
        {ESTAGIOS.map((estagio, i) => (
          <div key={estagio.nome} className="flex items-center flex-1">
            <div style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: `1px solid ${estagio.destaque ? "var(--marca)" : "var(--borda)"}`, padding: "var(--spacing-12) var(--spacing-16)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>{estagio.nome}</span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>{estagio.descricao}</span>
              {estagio.nota && <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", marginTop: "var(--spacing-4)" }}>{estagio.nota}</span>}
            </div>
            {i < ESTAGIOS.length - 1 && (
              <div className="flex items-center justify-center shrink-0 rotate-90 md:rotate-0" style={{ width: "32px", height: "32px" }}>
                <svg className="w-5 h-5 text-[#A3A3A3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-[18px] font-medium text-[#141414] leading-6">O que a próxima volta destrava</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {MODULOS.map((modulo) => (
            <div key={modulo.nome} style={{ backgroundColor: "var(--bg-primario)", borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--spacing-8)" }}>
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>{modulo.nome}</span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>{modulo.preco}</span>
              </div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", lineHeight: 1.5, flex: 1 }}>{modulo.insight}</p>
              <button type="button" style={{ backgroundColor: "var(--invertido)", color: "#ffffff", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", alignSelf: "flex-start" }}>Ativar</button>
            </div>
          ))}
        </div>
        <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Cada módulo ativado enriquece o CRM, que melhora os insights, que aumentam o resultado.</span>
      </div>

      <div style={{ borderRadius: "var(--radius-12)", border: "1px solid var(--borda)", padding: "var(--spacing-16)", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "transparent" }}>
        <div className="flex flex-col gap-1">
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)" }}>Os dados são seus</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)" }}>Tudo que você constrói aqui — clientes, segmentos, histórico — pode ser exportado a qualquer momento, inclusive se você sair.</span>
        </div>
        <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "var(--spacing-8) var(--spacing-16)", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>Exportar base</button>
      </div>
    </div>
  );
}

export function JornadaPage() {
  const { planoAtivo } = usePlano();
  const navigate = useNavigate();
  const isBase = planoAtivo === "base";

  return (
    <div className="relative">
      <div className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb] transition-colors duration-200" style={{ backgroundColor: "#ffffff" }}>
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className="ifdl-icon-filled ifdl-icon-home text-white" style={{ fontSize: "12px" }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: isBase ? "var(--text-primario)" : "#141414" }}>Sua jornada</span>
        <div className="flex items-center gap-3 ml-auto">
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: isBase ? "var(--text-primario)" : "var(--text-secundario)" }}>{isBase ? "Ative um módulo para liberar inteligência e CRM" : PLANO_INFO[planoAtivo] ?? ""}</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: isBase ? "var(--text-primario)" : "var(--marca)", cursor: "pointer" }} onClick={() => navigate("/modulos")}>Mudar assinatura</span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <JornadaContent />
      </div>
    </div>
  );
}