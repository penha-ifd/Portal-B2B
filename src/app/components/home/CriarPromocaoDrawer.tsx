"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import cupomImg from "../../../assets/cupom-pra-comer-fora.png";
import cashbackImg from "../../../assets/cashback.png";

const DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const PERIODS = ["Diurno (00:01 até 17:00)", "Noturno (17:01 até 00:00)"];

const EXTRA_RULES = [
  "Pedido mínimo de R$ 50,00",
  "Válido apenas para pratos principais",
  "Não acumulativo com outras promoções",
  "Limitado a 1 uso por cliente",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CriarPromocaoDrawer({ open, onClose }: Props) {
  const [step, setStep] = useState<"select" | "configure">("select");
  const [cupomType, setCupomType] = useState<string | null>(null);
  const [accessType, setAccessType] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [checkedRules, setCheckedRules] = useState<string[]>([]);

  // Reset step when drawer opens
  useEffect(() => {
    if (open) setStep("select");
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function toggleDay(day: string) {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  }

  function togglePeriod(period: string) {
    setSelectedPeriods((prev) =>
      prev.includes(period) ? prev.filter((p) => p !== period) : [...prev, period]
    );
  }

  function toggleRule(rule: string) {
    setCheckedRules((prev) =>
      prev.includes(rule) ? prev.filter((r) => r !== rule) : [...prev, rule]
    );
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[rgba(0,0,0,0.32)]"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative bg-white flex flex-col w-[768px] max-w-full h-full rounded-l-3xl shadow-[0px_6px_12px_0px_rgba(21,21,21,0.16)]"
          >
            {/* Top Bar */}
            <div className="bg-white border-b border-[#EBEBEB] flex gap-4 items-center justify-center px-4 py-3 shrink-0">
              <div className="flex flex-1 items-center gap-2 min-w-0">
                {step === "configure" && (
                  <button
                    type="button"
                    onClick={() => setStep("select")}
                    className="size-8 flex items-center justify-center rounded-lg hover:bg-[#F5F5F5] transition-colors shrink-0"
                    aria-label="Voltar"
                  >
                    <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                )}
                <span className="text-[16px] font-medium text-[#141414] leading-6 truncate">
                  Criar promoção
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="size-8 flex items-center justify-center rounded-lg hover:bg-[#F5F5F5] transition-colors shrink-0"
                aria-label="Fechar"
              >
                <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-10 px-4 py-6">
                {step === "select" ? (
                  /* Step 1: Select promo type */
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[24px] font-medium text-[#141414] leading-8 text-center">
                      O que gostaria de criar?
                    </h2>
                    <div className="flex gap-3">
                      {/* Cupom */}
                      <button
                        type="button"
                        onClick={() => setStep("configure")}
                        className="flex-1 flex flex-col gap-3 items-center p-6 rounded-2xl border border-[#EBEBEB] hover:border-[#141414] transition-colors bg-white"
                      >
                        <div className="size-20 rounded-[18px] overflow-hidden flex items-center justify-center">
                          <img src={cupomImg} alt="Cupom pra Comer Fora" className="size-full object-contain" />
                        </div>
                        <div className="text-center w-full">
                          <p className="paragraph-p2-14-medium text-[#141414]">Cupom pra Comer Fora</p>
                          <p className="paragraph-p2-14-regular text-[#666666] mt-2 whitespace-pre-wrap">
                            Cliente consome no local e{"\n"}já usa o benefício
                          </p>
                        </div>
                      </button>

                      {/* Cashback */}
                      <button
                        type="button"
                        onClick={() => setStep("configure")}
                        className="flex-1 flex flex-col gap-3 items-center p-6 rounded-2xl border border-[#EBEBEB] hover:border-[#141414] transition-colors bg-white"
                      >
                        <div className="size-20 rounded-[18px] overflow-hidden flex items-center justify-center">
                          <img src={cashbackImg} alt="Cashback" className="size-full object-contain" />
                        </div>
                        <div className="text-center w-full">
                          <p className="paragraph-p2-14-medium text-[#141414]">Cashback</p>
                          <p className="paragraph-p2-14-regular text-[#666666] mt-2 whitespace-pre-wrap">
                            Cliente consome no local e{"\n"}ganha saldo pra retornar
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Step 2: Configure */
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[24px] font-medium text-[#141414] leading-8 text-center">
                      Escolha o tipo de cupom e configure
                    </h2>

                    {/* Cupom type cards */}
                    <div className="flex gap-2">
                      {["Valor fixo (R$)", "Percentual (%)", "Item grátis"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setCupomType(type)}
                          className={`flex-1 p-4 rounded-xl border transition-colors text-center ${
                            cupomType === type
                              ? "border-[#141414] bg-white"
                              : "border-[#EBEBEB] bg-white hover:border-[#141414]"
                          }`}
                        >
                          <p className="paragraph-p2-14-medium text-[#141414]">{type}</p>
                        </button>
                      ))}
                    </div>

                    {/* Características */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-medium text-[#141414] flex-1">Características</span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>
                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        <select className="w-full h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none focus:border-[#141414]">
                          <option>Selecione o tipo de desconto</option>
                          <option>Desconto no valor total</option>
                          <option>Desconto por item</option>
                        </select>
                        <div className="flex gap-4">
                          <input
                            type="text"
                            placeholder="Valor"
                            className="flex-1 h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] placeholder-[#A3A3A3] outline-none focus:border-[#141414]"
                          />
                          <input
                            type="text"
                            placeholder="Período"
                            className="flex-1 h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] placeholder-[#A3A3A3] outline-none focus:border-[#141414]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Forma de acesso */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-medium text-[#141414] flex-1">Forma de acesso</span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>
                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        <div className="flex gap-2">
                          {["QR Code", "Link", "Código"].map((access) => (
                            <button
                              key={access}
                              type="button"
                              onClick={() => setAccessType(access)}
                              className={`flex-1 p-4 rounded-xl border transition-colors text-center ${
                                accessType === access
                                  ? "border-[#141414] bg-white"
                                  : "border-[#EBEBEB] bg-white hover:border-[#141414]"
                              }`}
                            >
                              <p className="paragraph-p2-14-medium text-[#141414]">{access}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Público-alvo */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-medium text-[#141414] flex-1">Público-alvo</span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>
                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        <div className="border border-[#141414] rounded-xl p-4 flex gap-3 items-center">
                          <div className="flex-1 min-w-0">
                            <div className="flex gap-1 items-center">
                              <span className="paragraph-p2-14-medium text-[#141414]">Todos os clientes</span>
                              <span className="paragraph-p3-12-medium text-[#EB0033] bg-[rgba(235,0,51,0.08)] rounded-md px-1.5 py-0.5">
                                Recomendado
                              </span>
                            </div>
                            <p className="paragraph-p2-14-regular text-[#666666] mt-1">
                              Para qualquer tipo de cliente, sem restrição
                            </p>
                          </div>
                          <div className="size-5 rounded-full border-2 border-[#EB0033] flex items-center justify-center shrink-0">
                            <div className="size-2.5 rounded-full bg-[#EB0033]" />
                          </div>
                        </div>

                        <button
                          type="button"
                          className="border border-[#EBEBEB] rounded-xl p-4 flex items-center gap-3 hover:border-[#141414] transition-colors w-full text-left"
                        >
                          <div className="flex-1">
                            <p className="paragraph-p2-14-medium text-[#141414]">Segmentar por perfil</p>
                            <p className="paragraph-p2-14-regular text-[#666666] mt-1">
                              Escolha grupos específicos de clientes
                            </p>
                          </div>
                          <div className="size-5 rounded-full border-2 border-[#EBEBEB] shrink-0" />
                        </button>
                      </div>
                    </div>

                    {/* Mensagem personalizada */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-regular text-[#141414] flex-1">
                          <span className="paragraph-p2-14-medium">Mensagem personalizada</span>{" "}
                          <span className="text-[#666666]">(opcional)</span>
                        </span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>
                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        <p className="paragraph-p2-14-regular text-[#666666]">
                          Escreva uma mensagem ao cliente ou destaque uma condição especial, e envie uma foto pra ilustrar
                        </p>
                        <textarea
                          placeholder="Escreva sua mensagem..."
                          className="w-full h-24 rounded-xl border border-[#EBEBEB] p-3 text-sm text-[#141414] placeholder-[#A3A3A3] resize-none outline-none focus:border-[#141414]"
                        />
                        <div className="border-2 border-dashed border-[#EBEBEB] rounded-xl p-6 flex flex-col items-center gap-2 hover:border-[#141414] transition-colors cursor-pointer">
                          <svg className="w-8 h-8 text-[#A3A3A3]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                          </svg>
                          <p className="paragraph-p2-14-medium text-[#141414]">Upload de imagem</p>
                          <p className="paragraph-p3-12-regular text-[#A3A3A3]">2MB</p>
                        </div>
                      </div>
                    </div>

                    {/* Configurações avançadas */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-regular text-[#141414] flex-1">
                          <span className="paragraph-p2-14-medium">Configurações avançadas</span>{" "}
                          <span className="text-[#666666]">(opcional)</span>
                        </span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>
                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        {/* Toggle */}
                        <button
                          type="button"
                          onClick={() => setAdvancedOpen(!advancedOpen)}
                          className="flex gap-3 items-center"
                        >
                          <div
                            className={`w-10 h-6 rounded-full transition-colors relative ${
                              advancedOpen ? "bg-[#EB0033]" : "bg-[#CCCCCC]"
                            }`}
                          >
                            <div
                              className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform ${
                                advancedOpen ? "translate-x-4" : "translate-x-0"
                              }`}
                            />
                          </div>
                          <span className="paragraph-p2-14-regular text-[#141414]">
                            Especificar dias e períodos de uso do cupom
                          </span>
                        </button>

                        {advancedOpen && (
                          <div className="border border-[#EBEBEB] rounded-xl p-4 flex flex-col gap-4">
                            {/* Days */}
                            <div className="flex gap-3 items-center">
                              <span className="paragraph-p2-14-regular text-[#666666] w-14 shrink-0">Dias</span>
                              <div className="flex flex-1 gap-2 flex-wrap">
                                {DAYS.map((day) => (
                                  <button
                                    key={day}
                                    type="button"
                                    onClick={() => toggleDay(day)}
                                    className={`paragraph-p3-12-medium px-3 py-1.5 rounded-full border transition-colors ${
                                      selectedDays.includes(day)
                                        ? "border-[#141414] bg-[#141414] text-white"
                                        : "border-[#EBEBEB] text-[#666666] hover:border-[#141414]"
                                    }`}
                                  >
                                    {day}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Periods */}
                            <div className="flex gap-3 items-center">
                              <span className="paragraph-p2-14-regular text-[#666666] whitespace-nowrap shrink-0">Períodos</span>
                              <div className="flex flex-1 gap-2 flex-wrap">
                                {PERIODS.map((period) => (
                                  <button
                                    key={period}
                                    type="button"
                                    onClick={() => togglePeriod(period)}
                                    className={`paragraph-p3-12-medium px-3 py-1.5 rounded-full border transition-colors ${
                                      selectedPeriods.includes(period)
                                        ? "border-[#141414] bg-[#141414] text-white"
                                        : "border-[#EBEBEB] text-[#666666] hover:border-[#141414]"
                                    }`}
                                  >
                                    {period}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Extra rules */}
                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        <p className="paragraph-p2-14-regular text-[#141414]">
                          Definir regras extras pro uso do cupom
                        </p>
                        <div className="flex flex-col gap-2">
                          {EXTRA_RULES.map((rule) => (
                            <button
                              key={rule}
                              type="button"
                              onClick={() => toggleRule(rule)}
                              className="flex items-center gap-3 text-left"
                            >
                              <div
                                className={`size-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                                  checkedRules.includes(rule)
                                    ? "border-[#EB0033] bg-[#EB0033]"
                                    : "border-[#CCCCCC]"
                                }`}
                              >
                                {checkedRules.includes(rule) && (
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <span className="paragraph-p2-14-regular text-[#141414]">{rule}</span>
                            </button>
                          ))}
                        </div>
                        <p className="paragraph-p3-12-regular text-[#A3A3A3]">
                          Essas regras devem ser validadas e aplicadas manualmente pela sua equipe
                        </p>
                      </div>

                      {/* Alert */}
                      <div className="bg-[#FFEBEB] rounded-xl p-4 flex gap-3">
                        <svg className="w-5 h-5 text-[#EB0033] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <div>
                          <p className="paragraph-p2-14-medium text-[#EB0033]">
                            Atenção: com mais restrições de uso, o alcance da sua promoção será menor.
                          </p>
                          <p className="paragraph-p2-14-regular text-[#666666] mt-1">
                            Com mais restrições de uso, o alcance da sua promoção será menor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-[#EBEBEB] flex gap-2 h-[72px] items-center justify-end px-4 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="paragraph-p2-14-medium text-[#666666] px-4 py-2 rounded-xl hover:bg-[#F5F5F5] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="bg-[#EB0033] text-white paragraph-p2-14-medium px-6 py-2.5 rounded-xl hover:bg-[#C5002A] transition-colors"
              >
                Criar campanha
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}