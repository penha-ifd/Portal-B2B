"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";

const DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const PERIODS = ["Diurno (00:01 até 17:00)", "Noturno (17:01 até 00:00)"];

const EXTRA_RULES = [
  "Pedido mínimo de R$ 50,00",
  "Válido apenas para pratos principais",
  "Não acumulativo com outras promoções",
  "Limitado a 1 uso por cliente",
];

const SEGMENTOS_RAPIDOS = [
  { key: "novato", label: "Novato", count: 194 },
  { key: "fiel", label: "Fiel", count: 412 },
  { key: "vip", label: "VIP", count: 88 },
  { key: "em-risco", label: "Em risco", count: 604 },
  { key: "perdido", label: "Perdido", count: 331 },
  { key: "alto-ticket", label: "Alto ticket", count: 176 },
  { key: "adora-cupom", label: "Adora cupom", count: 892 },
  { key: "sensivel-taxa", label: "Sensível a taxa", count: 743 },
  { key: "explorador", label: "Explorador", count: 215 },
  { key: "habitual", label: "Habitual", count: 680 },
  { key: "leal", label: "Leal", count: 445 },
  { key: "dormindo", label: "Dormindo", count: 289 },
  { key: "cross-channel", label: "Cross-channel", count: 1847 },
  { key: "aniversariantes", label: "Aniversariantes do mês", count: 34 },
];

const CANAIS_ENTREGA = [
  { key: "push", label: "Push iFood", icon: "ifdl-icon-notification", alcance: 1840 },
  { key: "whatsapp", label: "WhatsApp", icon: "ifdl-icon-chat", alcance: 620, requerOpt: true },
  { key: "vitrine", label: "Vitrine iFood", icon: "ifdl-icon-store", alcance: 2100 },
  { key: "qrcode", label: "QR Code no salão", icon: "ifdl-icon-qr-code", alcance: null as number | null },
  { key: "link", label: "Link compartilhável", icon: "ifdl-icon-link", alcance: null as number | null },
];

const TOTAL_BASE = 2392;

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CriarPromocaoDrawer({ open, onClose }: Props) {
  const [cupomType, setCupomType] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [checkedRules, setCheckedRules] = useState<string[]>([]);
  const [audienceType, setAudienceType] = useState<"todos" | "segmentos" | "personalizado">("todos");
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const panelRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Dialog semantics: keep focus inside, close on Escape, restore focus on close
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      // Focus trap: loop Tab within the panel
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const list = Array.from(focusables);
      if (list.length === 0) return;

      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || active === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

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

  function toggleSegment(key: string) {
    setSelectedSegments((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  }

  function toggleChannel(key: string) {
    setSelectedChannels((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    );
  }

  function getReachEstimate(): number {
    if (audienceType === "todos") return TOTAL_BASE;
    if (audienceType === "segmentos" && selectedSegments.length > 0) {
      const counts = selectedSegments.map(
        (k) => SEGMENTOS_RAPIDOS.find((s) => s.key === k)?.count ?? 0
      );
      return Math.min(TOTAL_BASE, Math.round(counts.reduce((a, b) => a + b, 0) * 0.72));
    }
    return TOTAL_BASE;
  }

  function applySuggestion() {
    setAudienceType("segmentos");
    setSelectedSegments(["em-risco"]);
    setSelectedChannels(["push", "whatsapp"]);
  }

  function handleCriarCampanha() {
    const faltando: string[] = [];
    if (!cupomType) faltando.push("tipo de cupom");
    if (selectedChannels.length === 0) faltando.push("pelo menos 1 canal de entrega");

    if (faltando.length > 0) {
      toast.error(`Selecione ${faltando.join(" e ")} para criar a campanha.`);
      return;
    }

    toast.success("Campanha criada com sucesso!");
    onClose();
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
            className="absolute inset-0 bg-[rgba(0,0,0,0.32)] backdrop-blur-[4px]"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="criar-promocao-title"
            tabIndex={-1}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative bg-white flex flex-col w-[768px] max-w-full h-full rounded-l-3xl shadow-[0px_6px_12px_0px_rgba(21,21,21,0.16)] outline-none"
          >
            {/* Top Bar */}
            <div className="bg-white border-b border-[#EBEBEB] flex gap-4 items-center justify-center px-4 py-3 shrink-0">
              <div className="flex flex-1 items-center gap-2 min-w-0">
                <span id="criar-promocao-title" className="text-[16px] font-medium text-[#141414] leading-6 truncate">
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

                    {/* Canais de entrega */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-medium text-[#141414] flex-1">Canais de entrega</span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>
                      <div className="bg-white flex flex-col gap-3 p-5 rounded-xl">
                        <p className="paragraph-p3-12-regular text-[#666666]">
                          Selecione onde a promoção será distribuída
                        </p>
                        {CANAIS_ENTREGA.map((canal) => {
                          const isSelected = selectedChannels.includes(canal.key);
                          return (
                            <button
                              key={canal.key}
                              type="button"
                              onClick={() => toggleChannel(canal.key)}
                              className={`flex items-center gap-3 p-4 rounded-xl border transition-colors w-full text-left ${
                                isSelected
                                  ? "border-[#EB0033] bg-[rgba(235,0,51,0.02)]"
                                  : "border-[#EBEBEB] hover:border-[#141414]"
                              }`}
                            >
                              <div className={`size-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                                isSelected ? "border-[#EB0033] bg-[#EB0033]" : "border-[#CCCCCC]"
                              }`}>
                                {isSelected && (
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <i className={`ifdl-icon-filled ${canal.icon} text-[#141414]`} style={{ fontSize: "18px" }} />
                              <div className="flex-1 min-w-0">
                                <p className="paragraph-p2-14-medium text-[#141414]">{canal.label}</p>
                                {canal.alcance && (
                                  <p className="paragraph-p3-12-regular text-[#666666]">
                                    ~{canal.alcance.toLocaleString("pt-BR")} alcançáveis
                                  </p>
                                )}
                                {!canal.alcance && (
                                  <p className="paragraph-p3-12-regular text-[#666666]">Distribuição passiva</p>
                                )}
                              </div>
                              {(canal as { requerOpt?: boolean }).requerOpt && (
                                <span className="paragraph-p3-12-medium text-[#666666] bg-[#F5F5F5] rounded-md px-2 py-0.5 shrink-0">opt-in</span>
                              )}
                            </button>
                          );
                        })}
                        {selectedChannels.includes("whatsapp") && (
                          <div className="flex gap-2 items-start p-3 rounded-lg bg-[#F0FDF4]">
                            <i className="ifdl-icon-filled ifdl-icon-check text-[#1FAD68]" style={{ fontSize: "14px", marginTop: "2px" }} />
                            <p className="paragraph-p3-12-regular text-[#666666]">
                              Mensagens são enviadas no horário de maior engajamento individual de cada cliente.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Público-alvo */}
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2 rounded-2xl">
                      <div className="flex items-center gap-2 py-2 px-2">
                        <span className="paragraph-p2-14-medium text-[#141414] flex-1">Público-alvo</span>
                        <i className="ifdl-icon-filled ifdl-icon-help text-[#A3A3A3]" style={{ fontSize: "16px" }} />
                      </div>

                      {/* AI suggestion nudge */}
                      <div className="mx-2 mb-1 border border-[#EB0033] bg-[rgba(235,0,51,0.04)] rounded-xl p-4 flex gap-3 items-start">
                        <svg className="w-5 h-5 text-[#EB0033] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 1l2.39 5.36L18 7.27l-4.12 3.56L15 16.67 10 13.77l-5 2.9 1.12-5.84L2 7.27l5.61-.91L10 1z" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="paragraph-p2-14-medium text-[#141414]">
                            Sugestão: envie para <strong>Em risco</strong> (604 clientes) via <strong>Push + WhatsApp</strong>.
                          </p>
                          <p className="paragraph-p3-12-regular text-[#666666] mt-1">
                            Esse grupo tem 3× mais chance de converter com cupom.
                          </p>
                          <button
                            type="button"
                            onClick={applySuggestion}
                            className="mt-2 paragraph-p3-12-medium text-[#EB0033] hover:underline"
                          >
                            Aplicar sugestão
                          </button>
                        </div>
                      </div>

                      <div className="bg-white flex flex-col gap-4 p-5 rounded-xl">
                        {/* Todos */}
                        <button
                          type="button"
                          onClick={() => { setAudienceType("todos"); setSelectedSegments([]); }}
                          className={`border rounded-xl p-4 flex gap-3 items-center w-full text-left transition-colors ${
                            audienceType === "todos" ? "border-[#141414]" : "border-[#EBEBEB] hover:border-[#141414]"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="paragraph-p2-14-medium text-[#141414]">Todos os clientes</p>
                            <p className="paragraph-p3-12-regular text-[#666666] mt-0.5">
                              Toda a sua base ({TOTAL_BASE.toLocaleString("pt-BR")} clientes)
                            </p>
                          </div>
                          <div className={`size-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            audienceType === "todos" ? "border-[#EB0033]" : "border-[#CCCCCC]"
                          }`}>
                            {audienceType === "todos" && <div className="size-2.5 rounded-full bg-[#EB0033]" />}
                          </div>
                        </button>

                        {/* Segmentos prontos */}
                        <button
                          type="button"
                          onClick={() => setAudienceType("segmentos")}
                          className={`border rounded-xl p-4 flex gap-3 items-center w-full text-left transition-colors ${
                            audienceType === "segmentos" ? "border-[#141414]" : "border-[#EBEBEB] hover:border-[#141414]"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="paragraph-p2-14-medium text-[#141414]">Segmentos prontos</p>
                            <p className="paragraph-p3-12-regular text-[#666666] mt-0.5">
                              Combine perfis LCM para atingir quem importa
                            </p>
                          </div>
                          <div className={`size-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            audienceType === "segmentos" ? "border-[#EB0033]" : "border-[#CCCCCC]"
                          }`}>
                            {audienceType === "segmentos" && <div className="size-2.5 rounded-full bg-[#EB0033]" />}
                          </div>
                        </button>

                        {/* Segmentos pills */}
                        {audienceType === "segmentos" && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {SEGMENTOS_RAPIDOS.map((seg) => {
                              const isActive = selectedSegments.includes(seg.key);
                              return (
                                <button
                                  key={seg.key}
                                  type="button"
                                  onClick={() => toggleSegment(seg.key)}
                                  className={`paragraph-p3-12-medium px-3 py-1.5 rounded-full border transition-colors ${
                                    isActive
                                      ? "border-[#141414] bg-[#141414] text-white"
                                      : "border-[#EBEBEB] text-[#666666] hover:border-[#141414]"
                                  }`}
                                >
                                  {seg.label}{isActive ? ` · ${seg.count}` : ""}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Personalizado */}
                        <button
                          type="button"
                          onClick={() => setAudienceType("personalizado")}
                          className={`border rounded-xl p-4 flex gap-3 items-center w-full text-left transition-colors ${
                            audienceType === "personalizado" ? "border-[#141414]" : "border-[#EBEBEB] hover:border-[#141414]"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="paragraph-p2-14-medium text-[#141414]">Personalizado</p>
                            <p className="paragraph-p3-12-regular text-[#666666] mt-0.5">
                              Crie filtros avançados por atributos LCM
                            </p>
                          </div>
                          <div className={`size-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            audienceType === "personalizado" ? "border-[#EB0033]" : "border-[#CCCCCC]"
                          }`}>
                            {audienceType === "personalizado" && <div className="size-2.5 rounded-full bg-[#EB0033]" />}
                          </div>
                        </button>

                        {audienceType === "personalizado" && (
                          <div className="border border-[#EBEBEB] rounded-xl p-4 flex flex-col gap-3">
                            <div className="flex gap-2">
                              <select className="flex-1 h-9 rounded-lg border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none">
                                <option>Sensibilidade voucher</option>
                                <option>Perfil jornada</option>
                                <option>Canal preferido</option>
                                <option>Ticket médio</option>
                              </select>
                              <select className="w-20 h-9 rounded-lg border border-[#EBEBEB] px-2 text-sm text-[#141414] bg-white outline-none">
                                <option>é</option>
                                <option>não é</option>
                              </select>
                              <select className="flex-1 h-9 rounded-lg border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none">
                                <option>Alta</option>
                                <option>Média</option>
                                <option>Baixa</option>
                              </select>
                            </div>
                            <button type="button" className="paragraph-p3-12-medium text-[#EB0033] self-start hover:underline">
                              + Adicionar filtro
                            </button>
                          </div>
                        )}

                        {/* Reach gauge */}
                        <div className="pt-2 flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="paragraph-p3-12-medium text-[#666666]">Alcance estimado</span>
                            <span className="paragraph-p2-14-medium text-[#141414]">
                              ~{getReachEstimate().toLocaleString("pt-BR")} clientes
                            </span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-[#EBEBEB] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#EB0033] transition-all duration-300"
                              style={{ width: `${Math.min(100, (getReachEstimate() / TOTAL_BASE) * 100)}%` }}
                            />
                          </div>
                        </div>
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
                            Cada regra extra reduz o número de clientes que conseguem usar o cupom.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Resumo */}
                    <div className="bg-[#F5F5F5] rounded-2xl p-5 flex flex-col gap-3">
                      <span className="paragraph-p2-14-medium text-[#141414]">Resumo da campanha</span>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="paragraph-p3-12-regular text-[#666666]">Tipo</span>
                          <span className="paragraph-p3-12-medium text-[#141414]">
                            {cupomType ?? "Não selecionado"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="paragraph-p3-12-regular text-[#666666]">Público</span>
                          <span className="paragraph-p3-12-medium text-[#141414]">
                            {audienceType === "todos" && "Todos os clientes"}
                            {audienceType === "segmentos" && selectedSegments.length > 0 && (
                              <>
                                {selectedSegments.map((k) => SEGMENTOS_RAPIDOS.find((s) => s.key === k)?.label).join(" + ")}
                                {" · ~"}{getReachEstimate().toLocaleString("pt-BR")}
                              </>
                            )}
                            {audienceType === "segmentos" && selectedSegments.length === 0 && "Nenhum segmento"}
                            {audienceType === "personalizado" && "Filtros personalizados"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="paragraph-p3-12-regular text-[#666666]">Canais</span>
                          <span className="paragraph-p3-12-medium text-[#141414]">
                            {selectedChannels.length > 0
                              ? selectedChannels.map((k) => CANAIS_ENTREGA.find((c) => c.key === k)?.label).join(", ")
                              : "Nenhum selecionado"}
                          </span>
                        </div>
                        {selectedDays.length > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="paragraph-p3-12-regular text-[#666666]">Período</span>
                            <span className="paragraph-p3-12-medium text-[#141414]">
                              {selectedDays.join(", ")}{selectedPeriods.length > 0 ? ` · ${selectedPeriods.map((p) => p.split(" ")[0]).join(", ")}` : ""}
                            </span>
                          </div>
                        )}
                      </div>
                      {getReachEstimate() > 0 && selectedChannels.length > 0 && (
                        <div className="border-t border-[#EBEBEB] pt-3 mt-1">
                          <p className="paragraph-p3-12-regular text-[#666666]">
                            Se 12% converterem, são ~{Math.round(getReachEstimate() * 0.12)} visitas extras (R$ {(Math.round(getReachEstimate() * 0.12) * 90).toLocaleString("pt-BR")} em ticket estimado)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
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
                onClick={handleCriarCampanha}
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