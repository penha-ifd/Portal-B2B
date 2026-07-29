import { useState } from 'react';

const faqs = [
  'Como o iFood traz clientes pro meu salão?',
  'Preciso investir em promoções para aparecer na vitrine?',
  'Como funciona o Comer Fora na prática?',
  'Preciso pagar para ter acesso aos dados dos clientes?',
  'Preciso ter alguma integração de pagamento específica?',
  'Quais tipos de promoções posso oferecer aos clientes?',
  'Posso pausar ou desativar o Comer Fora quando quiser?',
];

const answer =
  'Nossa equipe está preparando esta resposta. Em breve você encontrará aqui todas as informações sobre o Comer Fora.';

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="flex flex-col gap-5">
      <p className="paragraph-p1-16-medium text-black">Tire suas dúvidas</p>

      {/* Lista */}
      <div className="flex flex-col gap-3">
        {faqs.map((q, i) => {
          const isOpen = open === i;
          return (
            <div key={q} className="flex flex-col">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex items-center justify-end gap-2 w-full text-left"
                aria-expanded={isOpen}
              >
                <span className="flex-1 min-w-0 paragraph-p2-14-regular text-[#141414]">{q}</span>
                <i
                  className={`ifdl-icon-line ifdl-icon-chevron-down text-[#141414] shrink-0 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  style={{ fontSize: '24px' }}
                />
              </button>
              {isOpen && (
                <p className="paragraph-p2-14-regular text-[#a3a3a3] pt-3 pr-8">{answer}</p>
              )}
              <div className="pt-3">
                <div className="h-px w-full bg-[#ebebeb]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Termos e feedback */}
      <div className="flex flex-col gap-2 py-3">
        <p className="paragraph-p2-14-regular text-[#a3a3a3]">
          Verifique os <span className="paragraph-p2-14-medium text-[#141414]">termos e condições</span> do Comer Fora
        </p>
        <p className="paragraph-p2-14-regular text-[#a3a3a3]">
          Queremos construir a melhor plataforma para você. Tem alguma dúvida ou sugestão?{' '}
          <span className="paragraph-p2-14-medium text-[#141414]">Envie para a gente</span>
        </p>
      </div>
    </section>
  );
}
