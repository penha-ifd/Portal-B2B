import { useState } from "react";
import { JornadaContent } from "./jornada";

const TABS = ["Dados do restaurante", "Sua jornada"];

const fontBase: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  letterSpacing: 'var(--letter-spacing)',
};

interface Secao {
  id: string;
  titulo: string;
  completo: boolean;
}

const SECOES: Secao[] = [
  { id: 'marca', titulo: 'Sua marca', completo: true },
  { id: 'endereco', titulo: 'Endereço', completo: true },
  { id: 'horarios', titulo: 'Horários', completo: true },
  { id: 'comodidades', titulo: 'Comodidades', completo: true },
  { id: 'cardapio', titulo: 'Cardápio', completo: false },
  { id: 'fotos', titulo: 'Fotos de salão', completo: true },
];

const HORARIOS = [
  { dia: 'Domingo', inicio: '11:00', fim: '22:00' },
  { dia: 'Segunda', inicio: '11:00', fim: '22:00' },
  { dia: 'Terça', inicio: '11:00', fim: '22:00' },
  { dia: 'Quarta', inicio: '11:00', fim: '22:00' },
  { dia: 'Quinta', inicio: '11:00', fim: '22:00' },
  { dia: 'Sexta', inicio: '11:00', fim: '22:00' },
  { dia: 'Sábado', inicio: '11:00', fim: '22:00' },
];

const COMODIDADES_INIT = [
  { label: 'Aceita reservas', checked: true },
  { label: 'Aceita vale-refeição', checked: false },
  { label: 'Acessibilidade para baixa mobilidade', checked: true },
  { label: 'Espaço kids', checked: false },
  { label: 'Cadeirinha infantil', checked: false },
  { label: 'Cardápio infantil', checked: false },
  { label: 'Estacionamento disponível', checked: false },
  { label: 'Estacionamento gratuito', checked: false },
  { label: 'Estacionamento pago', checked: false },
  { label: 'Manobrista', checked: false },
  { label: 'Bicicletário', checked: false },
  { label: 'Ambiente familiar', checked: false },
  { label: 'Happy Hour com cardápio/preços especiais', checked: false },
  { label: 'Música ao vivo', checked: false },
  { label: 'Pratos veganos', checked: true },
  { label: 'Pratos vegetarianos', checked: true },
  { label: 'Ambiente romântico', checked: false },
  { label: 'Wi-Fi gratuito', checked: false },
  { label: 'Área externa/terraço', checked: false },
  { label: 'Pet friendly (aceita animais)', checked: false },
];

const FOTOS_SALAO = ['#8B4513', '#6B8E23', '#2E8B57', '#CD853F', '#556B2F'];

const inputClass = "w-full h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] placeholder-[#A3A3A3] outline-none focus:border-[#141414]";
const selectClass = "w-full h-10 rounded-xl border border-[#EBEBEB] px-3 text-sm text-[#141414] bg-white outline-none focus:border-[#141414]";
const labelClass = "paragraph-p3-12-regular text-[#666666]";

function SectionHeader({ secao, open, onToggle }: { secao: Secao; open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center gap-3 p-5 cursor-pointer bg-transparent border-none outline-none"
    >
      <span style={{ ...fontBase, fontSize: 'var(--font-size-18)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)', flex: 1, textAlign: 'left' }}>
        {secao.titulo}
      </span>
      <span
        className="paragraph-p3-12-medium rounded-full px-2.5 py-0.5"
        style={{
          backgroundColor: secao.completo ? 'rgba(31,173,104,0.10)' : 'rgba(255,195,71,0.15)',
          color: secao.completo ? '#1FAD68' : '#B45309',
        }}
      >
        {secao.completo ? 'Completo' : 'Incompleto'}
      </span>
      <i
        className="ifdl-icon-line ifdl-icon-chevron-down text-[#666666] transition-transform duration-200"
        style={{ fontSize: '16px', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
      />
    </button>
  );
}

function SaveButton() {
  return (
    <div className="flex justify-end pt-4">
      <button
        type="button"
        style={{
          ...fontBase,
          fontSize: 'var(--font-size-14)',
          fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'],
          backgroundColor: 'transparent',
          color: 'var(--text-primario)',
          border: '1px solid var(--borda)',
          borderRadius: 'var(--radius-pill)',
          padding: '8px 20px',
          cursor: 'pointer',
        }}
      >
        Salvar
      </button>
    </div>
  );
}

function SecaoMarca() {
  return (
    <div className="flex flex-col gap-5 p-5 pt-0">
      <div className="flex flex-col gap-3">
        <span className={labelClass}>Sua marca</span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Selecione o logo da sua loja</span>
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6B8E23' }}>
            <i className="ifdl-icon-filled ifdl-icon-store text-white" style={{ fontSize: '24px' }} />
          </div>
          <button type="button" className="paragraph-p3-12-medium text-[#141414] flex items-center gap-1 bg-transparent border-none cursor-pointer">
            <i className="ifdl-icon-line ifdl-icon-trash text-[#141414]" style={{ fontSize: '14px' }} />
            Excluir
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>Nome do restaurante*</span>
        <input type="text" defaultValue="Guaco | Barão Geraldo" className={inputClass} />
        <span className="paragraph-p3-12-regular text-[#A3A3A3] self-end">Especifique a unidade, se houver</span>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>Descrição do restaurante*</span>
        <textarea
          defaultValue="O GUACO é um restaurante fast-casual de comida mexicana com foco em produtos: comida saudável e fresca. Da cozinha saem receitas coloridas, compostas de verduras e frutas variadas que compõem uma..."
          className="w-full h-24 rounded-xl border border-[#EBEBEB] p-3 text-sm text-[#141414] placeholder-[#A3A3A3] resize-none outline-none focus:border-[#141414]"
        />
        <span className="paragraph-p3-12-regular text-[#A3A3A3] self-end">420/600</span>
      </div>

      <div className="flex flex-col gap-3">
        <span className={labelClass}>Foto de destaque</span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Escolha a foto principal do seu salão no perfil</span>
        <div className="flex items-center gap-4">
          <div className="w-[100px] h-[70px] rounded-lg" style={{ backgroundColor: '#2E8B57' }} />
          <button type="button" className="paragraph-p3-12-medium text-[#141414] flex items-center gap-1 bg-transparent border-none cursor-pointer">
            <i className="ifdl-icon-line ifdl-icon-trash text-[#141414]" style={{ fontSize: '14px' }} />
            Excluir
          </button>
        </div>
      </div>

      <SaveButton />
    </div>
  );
}

function SecaoEndereco() {
  return (
    <div className="flex flex-col gap-5 p-5 pt-0">
      <div className="flex flex-col gap-1">
        <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
          Localização do salão
        </span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Informe o endereço do seu restaurante físico</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <span className={labelClass}>CEP*</span>
          <input type="text" defaultValue="13084008" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <span className={labelClass}>Rua*</span>
          <input type="text" defaultValue="ALBINO JOSE BARBOSA DE OLIVEIRA" className={inputClass} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Número*</span>
            <input type="text" defaultValue="515" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Complemento</span>
            <input type="text" placeholder="Complemento" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className={labelClass}>Bairro*</span>
          <input type="text" defaultValue="BARÃO GERALDO" className={inputClass} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Cidade*</span>
            <select className={selectClass} defaultValue="Campinas">
              <option>Campinas</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={labelClass}>Estado*</span>
            <select className={selectClass} defaultValue="São Paulo (SP)">
              <option>São Paulo (SP)</option>
            </select>
          </div>
        </div>
      </div>

      <SaveButton />
    </div>
  );
}

function SecaoHorarios() {
  return (
    <div className="flex flex-col gap-5 p-5 pt-0">
      <div className="flex flex-col gap-1">
        <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
          Horário de funcionamento do salão
        </span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Informe os dias e horários que seu restaurante físico funciona</span>
      </div>

      <div className="flex flex-col gap-3">
        {HORARIOS.map((h) => (
          <div key={h.dia} className="flex items-center gap-3">
            <span className="w-20 paragraph-p2-14-regular text-[#141414] shrink-0">{h.dia}</span>
            <input type="text" defaultValue={h.inicio} className="w-20 h-9 rounded-lg border border-[#EBEBEB] px-2 text-sm text-[#141414] text-center outline-none focus:border-[#141414]" />
            <span className="text-[#A3A3A3]">—</span>
            <input type="text" defaultValue={h.fim} className="w-20 h-9 rounded-lg border border-[#EBEBEB] px-2 text-sm text-[#141414] text-center outline-none focus:border-[#141414]" />
            <button type="button" className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] bg-transparent cursor-pointer hover:border-[#141414] transition-colors">
              <i className="ifdl-icon-line ifdl-icon-add text-[#141414]" style={{ fontSize: '14px' }} />
            </button>
            <button type="button" className="size-8 flex items-center justify-center rounded-lg border border-[#EBEBEB] bg-transparent cursor-pointer hover:border-[#141414] transition-colors">
              <i className="ifdl-icon-line ifdl-icon-trash text-[#666666]" style={{ fontSize: '14px' }} />
            </button>
          </div>
        ))}
      </div>

      <SaveButton />
    </div>
  );
}

function SecaoComodidades() {
  const [comodidades, setComodidades] = useState(COMODIDADES_INIT);

  function toggleComodidade(idx: number) {
    setComodidades(prev => prev.map((c, i) => i === idx ? { ...c, checked: !c.checked } : c));
  }

  return (
    <div className="flex flex-col gap-5 p-5 pt-0">
      <div className="flex flex-col gap-1">
        <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
          Comodidades do restaurante
        </span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Informe os serviços e comodidades que seu restaurante oferece aos clientes</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {comodidades.map((c, idx) => (
          <label key={c.label} className="flex items-center gap-2.5 cursor-pointer">
            <div
              onClick={() => toggleComodidade(idx)}
              className="size-5 rounded flex items-center justify-center shrink-0 transition-colors"
              style={{
                border: c.checked ? '1.5px solid #EB0033' : '1.5px solid #CCCCCC',
                backgroundColor: c.checked ? '#EB0033' : 'transparent',
              }}
            >
              {c.checked && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="paragraph-p2-14-regular text-[#141414]">{c.label}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-1 pt-2">
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Deixamos algo de fora?</span>
        <span className="paragraph-p3-12-medium text-[#EB0033] cursor-pointer">Enviar sugestão</span>
      </div>

      <SaveButton />
    </div>
  );
}

function SecaoCardapio() {
  return (
    <div className="flex flex-col gap-5 p-5 pt-0">
      <div className="flex flex-col gap-1">
        <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
          Cardápio do salão <span className="paragraph-p3-12-regular text-[#A3A3A3]">(opcional)</span>
        </span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Utilize um PDF ou imagem e inscreva seu cardápio no app</span>
      </div>

      <button
        type="button"
        className="flex items-center gap-2 paragraph-p2-14-medium text-[#141414] bg-transparent border-none cursor-pointer"
      >
        <i className="ifdl-icon-filled ifdl-icon-add-circle text-[#141414]" style={{ fontSize: '16px' }} />
        Adicionar cardápio
      </button>

      <div className="flex flex-col gap-1">
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Máximo de 10 páginas / Máximo de 10 cardápios</span>
      </div>

      <div className="flex gap-2">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="w-[80px] h-[110px] rounded-lg" style={{ backgroundColor: '#E0E0E0' }} />
        ))}
      </div>

      <div className="flex gap-2 p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-secundario)' }}>
        <i className="ifdl-icon-filled ifdl-icon-info text-[#666666] shrink-0" style={{ fontSize: '16px', marginTop: 2 }} />
        <div className="flex flex-col gap-1">
          <span className="paragraph-p3-12-medium text-[#141414]">Dicas para deixar seu cardápio claro e fácil de ler</span>
          <ul className="paragraph-p3-12-regular text-[#666666] pl-4 m-0 flex flex-col gap-0.5">
            <li>Envie fotos ou PDF com boa resolução e texto legível</li>
            <li>Destaque os pratos e bebidas mais pedidos</li>
            <li>Evite cortes, sombras ou reflexos na imagem</li>
            <li>Organize por categorias para facilitar a leitura</li>
          </ul>
        </div>
      </div>

      <SaveButton />
    </div>
  );
}

function SecaoFotos() {
  const [fotos, setFotos] = useState(FOTOS_SALAO);
  const [dragging, setDragging] = useState(false);

  function removerFoto(idx: number) {
    setFotos(prev => prev.filter((_, i) => i !== idx));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (fotos.length >= 6) return;
    const cores = ['#4A90D9', '#D4A574', '#7B68AE', '#E8B4B8', '#95C8A0'];
    setFotos(prev => [...prev, cores[Math.floor(Math.random() * cores.length)]]);
  }

  function handleClick() {
    if (fotos.length >= 6) return;
    const cores = ['#4A90D9', '#D4A574', '#7B68AE', '#E8B4B8', '#95C8A0'];
    setFotos(prev => [...prev, cores[Math.floor(Math.random() * cores.length)]]);
  }

  return (
    <div className="flex flex-col gap-5 p-5 pt-0">
      <div className="flex flex-col gap-1">
        <span style={{ ...fontBase, fontSize: 'var(--font-size-14)', fontWeight: 'var(--font-weight-medium)' as React.CSSProperties['fontWeight'], color: 'var(--text-primario)' }}>
          Mostre o melhor do seu salão
        </span>
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Selecione fotos da decoração e disposição dos espaços</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="paragraph-p3-12-regular text-[#A3A3A3]">Máximo 6 fotos, máximo de 5 MB cada</span>
      </div>

      {/* Dropzone de upload */}
      <div
        onClick={handleClick}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl cursor-pointer transition-colors"
        style={{
          border: `2px dashed ${dragging ? '#141414' : '#EBEBEB'}`,
          backgroundColor: dragging ? 'rgba(20,20,20,0.02)' : 'transparent',
        }}
      >
        <div className="size-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="paragraph-p2-14-medium text-[#141414]">Arraste fotos ou clique para enviar</span>
          <span className="paragraph-p3-12-regular text-[#A3A3A3]">PNG, JPG ou WebP até 5 MB</span>
        </div>
        {fotos.length >= 6 && (
          <span className="paragraph-p3-12-medium text-[#B45309]">Limite de 6 fotos atingido</span>
        )}
      </div>

      {/* Grid de fotos enviadas */}
      {fotos.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {fotos.map((cor, idx) => (
            <div key={idx} className="relative w-[100px] h-[100px] rounded-lg overflow-hidden group" style={{ backgroundColor: cor }}>
              <button
                type="button"
                onClick={() => removerFoto(idx)}
                className="absolute top-1.5 right-1.5 size-6 rounded-full bg-black/60 flex items-center justify-center cursor-pointer border-none opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <i className="ifdl-icon-line ifdl-icon-close text-white" style={{ fontSize: '12px' }} />
              </button>
            </div>
          ))}
        </div>
      )}

      <SaveButton />
    </div>
  );
}

function DadosRestaurante() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(SECOES.map(s => s.id))
  );

  function toggleSection(id: string) {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const sectionContent: Record<string, React.ReactNode> = {
    marca: <SecaoMarca />,
    endereco: <SecaoEndereco />,
    horarios: <SecaoHorarios />,
    comodidades: <SecaoComodidades />,
    cardapio: <SecaoCardapio />,
    fotos: <SecaoFotos />,
  };

  return (
    <div className="flex flex-col" style={{ gap: 'var(--spacing-16)' }}>
      {SECOES.map(secao => (
        <div
          key={secao.id}
          style={{
            border: '1px solid var(--borda)',
            borderRadius: 'var(--radius-12)',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
          }}
        >
          <SectionHeader secao={secao} open={openSections.has(secao.id)} onToggle={() => toggleSection(secao.id)} />
          {openSections.has(secao.id) && sectionContent[secao.id]}
        </div>
      ))}
    </div>
  );
}

export function PerfilPage() {
  const [activeTab, setActiveTab] = useState("Dados do restaurante");

  return (
    <div className="relative">
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0" style={{ backgroundColor: "var(--ifdl-color-ifood-48, #eb0033)" }}>
          <i className="ifdl-icon-filled ifdl-icon-profile text-white" style={{ fontSize: "16px" }} />
        </span>
        <div className="flex flex-col gap-0.5">
          <h1 style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-20)", fontWeight: "var(--font-weight-medium)", letterSpacing: "var(--letter-spacing)", color: "var(--text-primario)", margin: 0, lineHeight: 1.3 }}>Perfil da loja</h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "var(--font-size-14)", fontWeight: "var(--font-weight-regular)", letterSpacing: "var(--letter-spacing)", color: "var(--text-secundario)", margin: 0 }}>Dados do restaurante, horários e informações públicas.</p>
        </div>
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
          <DadosRestaurante />
        ) : (
          <JornadaContent />
        )}
      </div>
    </div>
  );
}
