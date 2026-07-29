interface Step {
  id: string;
  title: string;
  description: string;
  percent: number;
  done: boolean;
}

const steps: Step[] = [
  {
    id: 'dados',
    title: 'Dados do restaurante',
    description: 'Marca, Endereço e Horários',
    percent: 100,
    done: true,
  },
  {
    id: 'experiencia',
    title: 'Experiência do cliente',
    description: 'Comodidades, Cardápio e Fotos do salão',
    percent: 0,
    done: false,
  },
  {
    id: 'promocao',
    title: 'Promoção pra visitar',
    description: 'Crie uma promoção pra começar a atrair clientes',
    percent: 0,
    done: false,
  },
];

function StepBadge({ done }: { done: boolean }) {
  return (
    <span
      className="flex items-center justify-center size-5 rounded-full shrink-0"
      style={{ backgroundColor: done ? '#1FAD68' : '#FFC347' }}
    >
      <i
        className={`ifdl-icon-filled ${done ? 'ifdl-icon-checkmark text-white' : 'ifdl-icon-exclamation text-[#141414]'}`}
        style={{ fontSize: '12px' }}
      />
    </span>
  );
}

export function ProfileStatusCard() {
  const completed = steps.filter((s) => s.done).length;

  return (
    <section className="flex flex-col gap-2 rounded-[12px] bg-[#f5f5f5] p-4">
      {/* Cabeçalho */}
      <div className="flex items-center gap-2 p-2">
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <p className="paragraph-p1-16-medium text-[#141414]">
            Seu perfil está <span className="text-[#eb0033]">inativo</span> no app
          </p>
          <p className="paragraph-p2-14-regular text-[#a3a3a3]">
            Complete seu perfil e apareça pros clientes no Comer Fora
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-[8px] bg-white border border-[#ebebeb] px-3 py-2 paragraph-p2-14-medium text-[#141414] hover:bg-black/5"
        >
          Ver perfil
        </button>
      </div>

      {/* Caixa de progresso */}
      <div className="flex flex-col gap-5 rounded-[8px] bg-[#f5f5f5] border border-[#ebebeb] px-5 py-6">
        <p className="paragraph-p3-12-regular text-[#141414]">
          {completed} de {steps.length} etapas completas
        </p>

        <div className="flex flex-col gap-2">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              className="flex items-center gap-3 w-full text-left bg-white rounded-[12px] px-4 py-3 hover:bg-black/[0.02]"
            >
              <StepBadge done={step.done} />
              <span className="paragraph-p2-14-regular text-[#141414] shrink-0">{step.title}</span>
              <span className="flex-1" />
              <span className="paragraph-p3-12-regular text-[#a3a3a3] whitespace-nowrap">
                {step.description} • {step.percent}% completo
              </span>
              <span className="flex items-center justify-center size-8 rounded-[8px] shrink-0">
                <i className="ifdl-icon-line ifdl-icon-chevron-right text-[#141414]" style={{ fontSize: '16px' }} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
