import { useState } from "react";
import { JornadaContent } from "./jornada";

const TABS = ["Dados do restaurante", "Sua jornada"];

export function PerfilPage() {
  const [activeTab, setActiveTab] = useState("Dados do restaurante");

  return (
    <div className="relative">
      <div className="sticky top-0 z-20 flex items-center gap-1 h-14 px-6 py-3 border-b border-[#ebebeb]" style={{ backgroundColor: "#ffffff" }}>
        <span className="flex items-center justify-center size-5 rounded-[6px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className="ifdl-icon-filled ifdl-icon-profile text-white" style={{ fontSize: "12px" }} />
        </span>
        <span className="paragraph-p2-14-medium ml-1" style={{ color: "#141414" }}>Perfil</span>
      </div>

      <div className="flex flex-col gap-6 p-4 md:p-6">
        <div className="flex gap-1 border-b border-[#EBEBEB]">
          {TABS.map((tab) => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`paragraph-p2-14-medium px-4 py-2.5 transition-colors relative ${activeTab === tab ? "text-[#EB0033]" : "text-[#666666] hover:text-[#141414]"}`}>
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB0033] rounded-full" />}
            </button>
          ))}
        </div>

        {activeTab === "Dados do restaurante" ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center justify-center text-center p-8 max-w-sm">
              <div className="size-16 rounded-full bg-bg-secondary flex items-center justify-center mb-4">
                <svg className="size-8 text-text-disabled" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="heading-h3-18-medium text-text-primary mb-2">Dados do restaurante</h3>
              <p className="paragraph-p2-14-regular text-text-secondary">Esta área não faz parte do escopo deste protótipo.</p>
            </div>
          </div>
        ) : (
          <JornadaContent />
        )}
      </div>
    </div>
  );
}