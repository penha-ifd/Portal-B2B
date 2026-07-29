import { ImageWithFallback } from '../image-with-fallback';
import megaphone from '../../../imports/Web1350X690/d2104b50070a7f32609c2aaa0f48eeb0ae175fb0.png';

interface Props {
  onCriarPromocao?: () => void;
}

export function PromoBanner({ onCriarPromocao }: Props) {
  return (
    <section className="relative overflow-hidden rounded-[16px] bg-[#f5f5f5] p-2">
      {/* Círculos decorativos */}
      <div
        className="pointer-events-none absolute -top-16 right-24 size-[360px] rounded-full"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(247,247,247,0.9), rgba(234,234,234,0.1))', border: '1px solid rgba(239,239,239,0.6)' }}
      />
      <div
        className="pointer-events-none absolute top-10 right-[-80px] size-[320px] rounded-full"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(247,247,247,0.9), rgba(234,234,234,0.1))', border: '1px solid rgba(239,239,239,0.6)' }}
      />

      {/* Megafone */}
      <div className="absolute left-1 top-1/2 -translate-y-1/2 size-[150px] overflow-hidden rounded-[32px]">
        <ImageWithFallback src={megaphone} alt="Megafone" className="size-full object-cover" />
      </div>

      {/* Conteúdo */}
      <div className="relative flex items-center gap-8 pl-[172px] pr-6 py-6">
        <div className="flex-1 min-w-0 flex flex-col gap-1">
          <p className="heading-h3-18-medium text-[#141414]">Atraia, fidelize e recupere seus clientes</p>
          <p className="paragraph-p1-16-regular text-[#666]">
            Monte uma promoção do seu jeito e alavanque seu negócio
          </p>
        </div>
        <button
          type="button"
          onClick={onCriarPromocao}
          className="shrink-0 w-[248px] flex items-center justify-center rounded-[12px] bg-[#141414] p-3 paragraph-p1-16-medium text-white hover:opacity-90"
        >
          Criar promoção
        </button>
      </div>
    </section>
  );
}
