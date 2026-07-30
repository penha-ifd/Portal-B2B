export function DesempenhoTab() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 pt-4 pb-6 px-3 md:px-6">
      {/* Page Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[24px] font-medium text-[#141414] leading-[32px]">Comer Fora</h1>
        <p className="paragraph-p2-14-regular text-[#666666]">Confira informações de perfil, promoções e clientes do seu salão</p>
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap gap-2 md:gap-4 items-center">
        <div className="flex flex-1 items-center gap-2">
          <span className="text-[16px] text-[#3E3E3E]" style={{ fontFamily: "var(--font-inter)" }}>Período:</span>
          {["7 dias", "14 dias", "30 dias", "Personalizado"].map((p, i) => (
            <button key={p} type="button" style={{
              fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)",
              border: i === 0 ? "none" : "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 12px",
              backgroundColor: i === 0 ? "var(--marca)" : "transparent", color: i === 0 ? "#ffffff" : "var(--text-secundario)", cursor: "pointer",
            }}>{p}</button>
          ))}
        </div>
        <select className="h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Objetivo</option></select>
        <select className="h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Tipo de promoção</option></select>
      </div>

      {/* ROI Block */}
      <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-xl">
        <div className="bg-white border border-[#EBEBEB] flex flex-col gap-6 p-8 rounded-lg">
          <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", alignSelf: "flex-start" }}>Fixo</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="size-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                  <svg className="size-5 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <span className="text-[20px] font-medium text-[#3E3E3E] leading-6" style={{ fontFamily: "var(--font-inter)" }}>Retorno do investimento</span>
              </div>
              <button type="button" className="paragraph-p2-14-medium text-[#EB0033] hover:opacity-70 bg-transparent border-none cursor-pointer">Saiba mais</button>
            </div>
            <p className="text-[14px] text-[#A6A6A6] leading-5" style={{ fontFamily: "var(--font-inter)" }}>Veja o retorno do seu investimento: quanto mais você investe, maior o resultado</p>
          </div>
          <div className="flex items-center justify-between">
            {[
              { label: "Vendas total com resgate", value: "R$ 8.976,24" },
              { label: "Valor total investido", value: "R$ 1.300,24" },
              { label: "Retorno por real investido", value: "R$ 56,65", tag: "+12%" },
            ].map((item, i, arr) => (
              <div key={item.label}>
                {i > 0 && <span className="text-[24px] font-medium text-[#141414] leading-8 mx-4" style={{ fontFamily: "var(--font-inter)" }}>{i === 1 ? "÷" : "="}</span>}
                <div className="flex flex-col gap-2" style={{ display: "inline-flex" }}>
                  <div className="flex gap-1 items-center">
                    <span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>{item.label}</span>
                    <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "14px" }} />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[24px] font-medium text-[#141414] leading-8" style={{ fontFamily: "var(--font-inter)" }}>{item.value}</span>
                    {item.tag && <span className="paragraph-p3-12-medium text-[#007A3F] bg-[#EBFFF5] rounded-full px-2 py-0.5">{item.tag}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F2F2F2] h-px w-full" />
          <div className="flex flex-wrap gap-2 md:gap-4 items-center">
            <div className="bg-[#1FAD68] rounded-full p-2 shrink-0">
              <svg className="size-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-[14px] font-bold text-[#007A3F] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Continue identificando, você já lucrou mais de R$ 7.000!</span>
              <span className="text-[14px] text-[#141414] leading-4" style={{ fontFamily: "var(--font-inter)" }}>
                Você ofereceu <strong>R$ 1.090,24</strong> em cashback e seus clientes trouxeram <strong>R$ 8.976,24</strong> em vendas
              </span>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", flexShrink: 0 }}>
              Ver detalhes
            </button>
          </div>
        </div>

        {/* Two side-by-side blocks */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Identificações e revisitas */}
          <div className="bg-white border border-[#EBEBEB] flex-1 flex flex-col gap-6 p-8 rounded-xl">
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", alignSelf: "flex-start" }}>Fixo</span>
            <div className="flex gap-2 items-center">
              <div className="size-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                <svg className="size-5 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
              </div>
              <span className="text-[20px] font-medium text-[#141414] leading-6" style={{ fontFamily: "var(--font-inter)" }}>Identificações e revisitas</span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center"><span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Taxa de identificação</span><i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "14px" }} /></div>
                <span className="text-[24px] font-medium text-[#007A3F] leading-8" style={{ fontFamily: "var(--font-inter)" }}>74%</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center"><span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Taxa de revisitas</span><i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "14px" }} /></div>
                <span style={{ fontFamily: "var(--font-inter)" }}><span className="text-[24px] font-medium text-[#141414] leading-8">5%</span><span className="text-[14px] text-[#141414] leading-4"> (180 clientes)</span></span>
              </div>
            </div>
            <div className="flex gap-1">
              {[0, 0, 1].map((filled, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="h-6 w-full rounded-2xl" style={{ backgroundColor: filled ? "#1FAD68" : "var(--bg-terciario)", opacity: 0.9 }} />
                  <div className="h-12 relative w-full flex justify-center">
                    {i === 2 && <div className="absolute -top-1 size-12 rounded-full bg-[#1FAD68] flex items-center justify-center"><svg className="size-4 text-white" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg></div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#F2F2F2] h-px w-full" />
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-bold text-[#007A3F] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Parabéns! Sua taxa de identificação está excelente</span>
              <span className="text-[14px] text-[#141414] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Mantendo esse ritmo, você garante um custo menor por cliente identificado</span>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", alignSelf: "flex-start" }}>Ver segmentos</button>
          </div>

          {/* Investimento */}
          <div className="bg-white border border-[#EBEBEB] flex-1 flex flex-col gap-6 p-8 rounded-xl">
            <span style={{ display: "inline-block", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-11)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", backgroundColor: "var(--bg-terciario)", borderRadius: "var(--radius-pill)", padding: "2px 8px", alignSelf: "flex-start" }}>Fixo</span>
            <div className="flex gap-2 items-center">
              <div className="size-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center">
                <svg className="size-5 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span className="text-[20px] font-medium text-[#141414] leading-6" style={{ fontFamily: "var(--font-inter)" }}>Investimento</span>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex gap-1 items-center"><span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Valor total investido</span><i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "14px" }} /></div>
                <span className="text-[24px] font-medium text-[#141414] leading-8" style={{ fontFamily: "var(--font-inter)" }}>R$ 5.500,00</span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-8 rounded-lg overflow-hidden flex"><div className="bg-[#EB0033] flex-1" /><div className="bg-[#FFEBEF] w-[7px]" /><div className="bg-[#CC0000] w-[4px]" /></div>
                <span className="text-[12px] text-[#666666] leading-4 text-right" style={{ fontFamily: "var(--font-inter)" }}>95%</span>
              </div>
            </div>
            <div className="bg-[#F2F2F2] h-px w-full" />
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex gap-2 items-center"><div className="size-2.5 rounded-full bg-[#EB0033] shrink-0" /><span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Investimento do restaurante</span></div>
                <span style={{ fontFamily: "var(--font-inter)" }}><span className="text-[18px] font-medium text-[#141414] leading-6">R$ 5.225,00</span><span className="text-[12px] text-[#141414] leading-4"> (95%)</span></span>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex gap-2 items-center"><div className="size-2.5 rounded-full bg-[#FFEBEF] shrink-0" /><span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Custo do CRM</span></div>
                <span style={{ fontFamily: "var(--font-inter)" }}><span className="text-[18px] font-medium text-[#141414] leading-6">R$ 55,00</span><span className="text-[12px] text-[#141414] leading-4"> (1%)</span></span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center"><div className="size-2.5 rounded-full bg-[#CC0000] shrink-0" /><span className="text-[14px] text-[#666666] leading-4" style={{ fontFamily: "var(--font-inter)" }}>Investimento iFood</span></div>
              <span style={{ fontFamily: "var(--font-inter)" }}><span className="text-[18px] font-medium text-[#141414] leading-6">R$ 220,00</span><span className="text-[12px] text-[#141414] leading-4"> (4%)</span></span>
            </div>
            <button type="button" style={{ border: "1px solid var(--borda)", borderRadius: "var(--radius-pill)", padding: "4px 10px", background: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: "var(--font-size-12)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", alignSelf: "flex-start" }}>Ver por promoção</button>
          </div>
        </div>
      </div>

      {/* Results table */}
      <div className="flex flex-col gap-6 pb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] font-medium text-[#141414] leading-6">Resultado por promoção</h2>
          <p className="paragraph-p2-14-regular text-[#666666]">Acompanhe os resultados de todas as promoções do seu salão</p>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex flex-1 gap-2 items-center">
            <span className="paragraph-p2-14-medium text-[#3E3E3E]">Filtros</span>
            <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Status</option></select>
            <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Objetivo</option></select>
            <select className="h-[52px] rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>Período</option></select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between border-b border-[#DCDCDC] pb-2 min-w-[700px]">
            {["Nome", "Objetivo", "Incentivo", "Data início", "Data fim"].map((h) => (
              <span key={h} className="flex-1 text-[12px] font-bold text-[#3E3E3E] leading-4" style={{ fontFamily: "var(--font-inter)" }}>{h}</span>
            ))}
          </div>
          {[
            { nome: "5% de Cashback", objetivo: "Fidelizar clientes", incentivo: "iFood", inicio: "22/01/2025", fim: "22/01/2025" },
            { nome: "5% de Cashback", objetivo: "Fidelizar clientes", incentivo: "Restaurante", inicio: "22/01/2025", fim: "22/01/2025" },
            { nome: "Cupom R$ 80", objetivo: "Novos clientes", incentivo: "Restaurante", inicio: "22/01/2025", fim: "22/01/2025" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between border-b border-[#DCDCDC] py-6">
              <div className="flex-1 flex items-center gap-2">
                <div className="size-6 rounded-lg bg-[#F2F2F2] flex items-center justify-center shrink-0"><svg className="size-4 text-[#717171]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/></svg></div>
                <span className="text-[16px] text-[#717171]" style={{ fontFamily: "var(--font-inter)" }}>{r.nome}</span>
              </div>
              <span className="flex-1 text-[16px] text-[#717171]" style={{ fontFamily: "var(--font-inter)" }}>{r.objetivo}</span>
              <span className="flex-1 text-[16px] text-[#717171]" style={{ fontFamily: "var(--font-inter)" }}>{r.incentivo}</span>
              <span className="flex-1 text-[16px] text-[#717171]" style={{ fontFamily: "var(--font-inter)" }}>{r.inicio}</span>
              <span className="flex-1 text-[16px] text-[#717171]" style={{ fontFamily: "var(--font-inter)" }}>{r.fim}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-2 items-center">
            <select className="h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none"><option>10</option></select>
            <span className="text-[16px] text-[#3E3E3E]" style={{ fontFamily: "var(--font-inter)" }}>Itens por página</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] hover:bg-[#F5F5F5]"><svg className="w-4 h-4 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg></button>
            <button type="button" className="size-8 flex items-center justify-center rounded-lg bg-[#EB0033] text-white text-sm">1</button>
            <button type="button" className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] hover:bg-[#F5F5F5]"><svg className="w-4 h-4 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
}