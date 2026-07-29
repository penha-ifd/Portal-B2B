import svgPaths from "./svg-mb2tx4zmnc";
import imgRectangle41870 from "./2b36b14206bda26b7fdbfe67dafae0ccdaef61b4.png";
import imgRectangle41871 from "./b6cbf86aa805fa00241ac7a17826f89925f3ab79.png";
import imgRectangle41872 from "./ef6b33b4fb40bd3359dba56405fb33c147a07041.png";
import imgImage1781 from "./d2104b50070a7f32609c2aaa0f48eeb0ae175fb0.png";

function MenuIFoodPiscadela() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Menu/iFood Piscadela">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-1/2" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">
          <p className="leading-[20px]">{`\uE842`}</p>
        </div>
      </div>
    </div>
  );
}

function Symbol() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Symbol">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_17693)" id="Symbol" opacity="0.9">
          <mask height="20" id="mask0_1_17693" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="20" x="0" y="0">
            <g id="__lottie_element_1833">
              <path d="M20 0H0V20H20V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_17693)">
            <path d={svgPaths.p392e2e00} fill="var(--fill-0, #EB0033)" id="Boca" />
            <path d={svgPaths.p10bfbe00} fill="var(--fill-0, #EB0033)" id="Subtract" />
            <path d={svgPaths.p37304400} fill="var(--fill-0, #EB0033)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_17693">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="absolute content-stretch flex items-end justify-end left-0 top-0" data-name="Thumbnail">
      <div className="bg-[#db0006] overflow-clip relative rounded-[8px] shrink-0 size-[24px]" data-name="Icons-logo">
        <div className="absolute left-0 rounded-[7.2px] size-[24px] top-0">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[7.2px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41870} />
            <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41871} />
            <img alt="" className="absolute max-w-none object-cover rounded-[7.2px] size-full" src={imgRectangle41872} />
          </div>
        </div>
        <div className="absolute left-0 rounded-[8px] size-[24px] top-0">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle41870} />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgRectangle41871} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandStatus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="brand+status">
      <Thumbnail />
      <div className="absolute left-[12px] overflow-clip rounded-[9999px] size-[20px] top-[10px]" data-name="Indicador de status">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="var(--fill-0, #1FAD68)" id="background" opacity="0.1" r="10" />
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="01">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
            <circle cx="4" cy="4" fill="var(--fill-0, #1FAD68)" id="01" r="4" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="main">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
            <circle cx="4" cy="4" fill="var(--fill-0, #1FAD68)" id="main" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <BrandStatus />
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#141414] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">{`Mc Donald's - Faria Lima`}</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[16px] whitespace-nowrap">
          <p className="leading-[16px]">{`\uE978`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function ActionsLeft() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Actions Left">
      <MenuIFoodPiscadela />
      <div className="relative shrink-0 size-[48px]" data-name="Menu/iFood Piscadela">
        <Symbol />
      </div>
      <div className="bg-[#f5f5f5] content-stretch flex gap-[8px] h-[32px] items-center p-[8px] relative rounded-[12px] shrink-0 w-[282px]" data-name="indicadorStatus_desk">
        <Frame13 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <ActionsLeft />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[744px]">
      <Frame10 />
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 h-[14.4px] ml-0 mt-0 relative row-1 w-[12.348px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3998" preserveAspectRatio="none" viewBox="0 0 12.3478 14.3998" width="12.3478">
        <g id="Group 1597890185">
          <path d={svgPaths.p938a880} fill="var(--fill-0, #EB0033)" id="Vector" />
          <path d={svgPaths.p1c686400} fill="var(--fill-0, #EB0033)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p372b4380} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p1d3d4a00} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p1022ab80} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group6 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[9.6px] items-center justify-center relative rounded-[11998.801px] shrink-0 size-[20px]" data-name="business-avatr">
        <div aria-hidden className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[11999.301px]" />
        <Group7 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Comer Fora</p>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[12px] shrink-0 size-[40px]" data-name="Action Button">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">
          <p className="leading-[normal]">{`\uE804`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name=".base-itemside">
        <div className="absolute content-stretch flex items-center justify-center left-0 p-[12px] rounded-[12px] size-[40px] top-0" data-name="Action Button">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
            <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">
              <p className="leading-[normal]">{`\uE82D`}</p>
            </div>
          </div>
        </div>
      </div>
      <ActionButton />
    </div>
  );
}

function ActionsRight() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Actions Right">
      <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-center p-[12px] relative rounded-[12px] shrink-0" data-name="Action Button - channel">
        <Frame25 />
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
          <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[20px] whitespace-nowrap">
            <p className="leading-[normal]">{`\uE955`}</p>
          </div>
        </div>
      </div>
      <Frame26 />
    </div>
  );
}

function HeaderOs() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-between shrink-0 sticky top-0 w-full" data-name="Header :: OS">
      <Frame9 />
      <ActionsRight />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[68px]">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] whitespace-nowrap">
          <p className="leading-[24px]">{`\uE830`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[68px]">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] whitespace-nowrap">
          <p className="leading-[24px]">{`\uE84C`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[68px]">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] whitespace-nowrap">
          <p className="leading-[24px]">{`\uE802`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[68px]">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] whitespace-nowrap">
          <p className="leading-[24px]">{`\uE817`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[68px]">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] whitespace-nowrap">
          <p className="leading-[24px]">{`\uE800`}</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#f5f5f5] relative self-stretch shrink-0" data-name="Sidebar">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pt-[8px] relative size-full">
          <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[68px]" data-name=".Sidebar item list">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Sidebar/Itens">
              <Frame />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Sidebar/Itens">
              <Frame1 />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Sidebar/Itens">
              <Frame2 />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[68px]" data-name=".Sidebar item list">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Sidebar/Itens">
              <Frame3 />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".Sidebar/Itens">
              <Frame4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">
        <span className="leading-[24px]">{`Seu perfil está `}</span>
        <span className="leading-[24px] text-[#eb0033]">inativo</span>
        <span className="leading-[24px]">{` no app`}</span>
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Header">
      <Title />
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-full">Complete seu perfil e apareça pros clientes no Comer Fora</p>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Page title">
      <Header />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full z-[3]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Page Title">
            <PageTitle />
          </div>
          <div className="bg-[#141414] content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
            <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
              <p className="leading-[16px]">Completar perfil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="subtitle">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#141414] text-[12px]">
        <p className="leading-[16px]">0 de 3 etapas completas</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Dados do restaurante</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['iFood_RC_Textos:Regular',sans-serif] gap-[4px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">Marca, Endereço e Horários</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">0% completo</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <div className="bg-[#ffc347] content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Badge">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Exclamation">
              <div className="absolute inset-[21.88%_45.41%_24.37%_43.75%]" data-name="!">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.60156" preserveAspectRatio="none" viewBox="0 0 1.73438 8.60156" width="1.73438">
                  <path d={svgPaths.p321862f0} fill="var(--fill-0, #141414)" id="!" />
                </svg>
              </div>
            </div>
          </div>
          <Frame14 />
          <Frame15 />
          <div className="content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Action Button">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
              <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">
                <p className="leading-[16px]">{`\uE891`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Experiência do cliente</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['iFood_RC_Textos:Regular',sans-serif] gap-[4px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">Comodidades, Cardápio e Fotos do salão</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">0% completo</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <div className="bg-[#ffc347] content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Badge">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Exclamation">
              <div className="absolute inset-[21.88%_45.41%_24.37%_43.75%]" data-name="!">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.60156" preserveAspectRatio="none" viewBox="0 0 1.73438 8.60156" width="1.73438">
                  <path d={svgPaths.p321862f0} fill="var(--fill-0, #141414)" id="!" />
                </svg>
              </div>
            </div>
          </div>
          <Frame16 />
          <Frame17 />
          <div className="content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Action Button">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
              <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">
                <p className="leading-[16px]">{`\uE891`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Promoção pra visitar</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['iFood_RC_Textos:Regular',sans-serif] gap-[4px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">Crie uma promoção pra começar a atrair clientes</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">•</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">0% completo</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <div className="bg-[#ffc347] content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Badge">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Exclamation">
              <div className="absolute inset-[21.88%_45.41%_24.37%_43.75%]" data-name="!">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.60156" preserveAspectRatio="none" viewBox="0 0 1.73438 8.60156" width="1.73438">
                  <path d={svgPaths.p321862f0} fill="var(--fill-0, #141414)" id="!" />
                </svg>
              </div>
            </div>
          </div>
          <Frame18 />
          <Frame19 />
          <div className="content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Action Button">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="icon">
              <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] whitespace-nowrap">
                <p className="leading-[16px]">{`\uE891`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[8px] shrink-0 w-full z-[2]">
      <div aria-hidden className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[24px] relative size-full">
        <Subtitle />
        <Frame28 />
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="highlights">
      <div className="content-stretch flex flex-col gap-[8px] isolate items-start p-[16px] relative size-full">
        <Frame24 />
        <Frame20 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute flex items-center justify-center left-[246.06px] size-[521.939px] top-[-42px]">
      <div className="flex-none rotate-30">
        <div className="relative size-[382.086px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="382.086" preserveAspectRatio="none" viewBox="0 0 382.086 382.086" width="382.086">
            <g id="Group 1597890182">
              <circle cx="191.043" cy="191.043" fill="var(--fill-0, #F8F8F8)" id="Ellipse 847" r="191.043" />
              <g id="Vector">
                <path d={svgPaths.p2b372800} fill="url(#paint0_linear_1_18812)" />
                <path d={svgPaths.p35357960} stroke="var(--stroke-0, #EFEFEF)" strokeOpacity="0.6" strokeWidth="1.88802" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_18812" x1="285.151" x2="299.215" y1="25.1195" y2="206.99">
                <stop stopColor="#EAEAEA" stopOpacity="0.1" />
                <stop offset="1" stopColor="#F7F7F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute flex h-[592.297px] items-center justify-center left-[685.88px] top-[-348.47px] w-[592.09px]">
      <div className="flex-none rotate-[-133.55deg]">
        <div className="h-[415.992px] relative w-[421.763px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="415.992" preserveAspectRatio="none" viewBox="0 0 421.763 415.992" width="421.763">
            <g id="Group 1597890183">
              <circle cx="230.721" cy="191.043" fill="var(--fill-0, #F8F8F8)" id="Ellipse 847" r="191.043" />
              <g id="Vector">
                <path d={svgPaths.p3194cb00} fill="url(#paint0_linear_1_18816)" />
                <path d={svgPaths.p17118f00} stroke="var(--stroke-0, #EFEFEF)" strokeOpacity="0.6" strokeWidth="1.88802" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_18816" x1="100.247" x2="118.136" y1="214.174" y2="404.912">
                <stop stopColor="#EAEAEA" stopOpacity="0.1" />
                <stop offset="1" stopColor="#F7F7F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[246.06px] top-[-348.47px]">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative">
      <p className="font-['iFood_RC_Textos:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#141414] text-[18px] w-full">Atraia, fidelize e recupere seus clientes</p>
      <div className="flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#666] text-[16px] w-full">
        <p className="leading-[24px]">Monte uma promoção do seu jeito e alavanque seu negócio</p>
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-w-px relative" data-name="Content Frame">
      <Frame27 />
      <div className="bg-[#141414] content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[248px]" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
          <p className="leading-[24px]">Criar promoção</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[180px] pr-[24px] py-[24px] relative size-full">
          <ContentFrame />
        </div>
      </div>
    </div>
  );
}

function ListPromo() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="ListPromo">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Group3 />
          <Card />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <ListPromo />
    </div>
  );
}

function Megafone() {
  return (
    <div className="absolute left-[-1px] overflow-clip rounded-[40.96px] size-[192px] top-[-6px]" data-name="megafone">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-1.28px)] size-[235.52px] top-[calc(50%-8.96px)]" data-name="image 1781">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1781} />
      </div>
    </div>
  );
}

function Promo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Promo">
      <Content />
      <Megafone />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Tire suas dúvidas</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Header">
      <Title1 />
    </div>
  );
}

function PageTitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Page title">
      <Header1 />
    </div>
  );
}

function FrameTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Como o iFood traz clientes pro meu salão?</p>
    </div>
  );
}

function FrameTitleSubtitle() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container1 />
    </div>
  );
}

function FrameTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Preciso investir em promoções para aparecer na vitrine?</p>
    </div>
  );
}

function FrameTitleSubtitle1() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle1 />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container3 />
    </div>
  );
}

function FrameTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Como funciona o Comer Fora na prática?</p>
    </div>
  );
}

function FrameTitleSubtitle2() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle2 />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container5 />
    </div>
  );
}

function FrameTitle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Preciso pagar para ter acesso aos dados dos clientes?</p>
    </div>
  );
}

function FrameTitleSubtitle3() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle3 />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container7 />
    </div>
  );
}

function FrameTitle4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Preciso ter alguma integração de pagamento específica?</p>
    </div>
  );
}

function FrameTitleSubtitle4() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle4 />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container9 />
    </div>
  );
}

function FrameTitle5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Quais tipos de promoções posso oferecer aos clientes?</p>
    </div>
  );
}

function FrameTitleSubtitle5() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle5 />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container11 />
    </div>
  );
}

function FrameTitle6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame Title">
      <p className="[word-break:break-word] font-['iFood_RC_Textos:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Posso pausar ou desativar o Comer Fora quando quiser?</p>
    </div>
  );
}

function FrameTitleSubtitle6() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px relative" data-name="Frame title + subtitle">
        <FrameTitle6 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <FrameTitleSubtitle6 />
      <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-line:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[24px] text-left whitespace-nowrap">
          <p className="leading-[24px]">{`\uE88F`}</p>
        </div>
      </button>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1322 1" width="1322">
        <g id="Container">
          <g clipPath="url(#clip0_1_18809)">
            <line id="LineDivider" stroke="var(--stroke-0, #EBEBEB)" x1="4.37114e-08" x2="1322" y1="0.499952" y2="0.500067" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_18809">
            <rect fill="white" height="1" rx="0.5" width="1322" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DividerSpace6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Divider + Space">
      <Container13 />
    </div>
  );
}

function Faq() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[16px] shrink-0 w-full" data-name="FAQ">
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container />
        <DividerSpace />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container2 />
        <DividerSpace1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container4 />
        <DividerSpace2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container6 />
        <DividerSpace3 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container8 />
        <DividerSpace4 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container10 />
        <DividerSpace5 />
      </div>
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Collapse">
        <Container12 />
        <DividerSpace6 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">termos e condições</p>
      </div>
    </div>
  );
}

function Termos() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="termos">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Verifique os</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
        <Label />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">do Comer Fora</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Envie para a gente</p>
      </div>
    </div>
  );
}

function MaisDuvidas() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Mais dúvidas">
      <div className="[word-break:break-word] flex flex-col font-['iFood_RC_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Queremos construir a melhor plataforma para você. Tem alguma dúvida ou sugestão?</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
        <Label1 />
      </div>
    </div>
  );
}

function TermosEFeedback() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[12px] relative shrink-0 w-full" data-name="termos e feedback">
      <Termos />
      <MaisDuvidas />
    </div>
  );
}

function SecaoDuvidas() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Seção dúvidas">
      <div className="content-stretch flex items-center relative shrink-0 w-[1080px]" data-name="Page Title">
        <PageTitle1 />
      </div>
      <Faq />
      <TermosEFeedback />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[40px] h-[1064px] items-start left-px p-[24px] right-px rounded-[24px] top-px">
      <Highlights />
      <Promo />
      <SecaoDuvidas />
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_1px_3px_rgba(21,21,21,0.08)] h-[706px] left-0 right-0 top-[56px]" data-name="Main">
      <Frame5 />
    </div>
  );
}

function IconAvatar() {
  return (
    <div className="bg-[#eb0033] relative rounded-[6px] shrink-0 size-[20px]" data-name="Icon Avatar">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 top-1/2" data-name="icon">
        <div className="[word-break:break-word] flex flex-col font-['pomodoro-icon-filled:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.2px] text-white whitespace-nowrap">
          <p className="leading-[normal]">{`\uE830`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return <div className="content-stretch flex gap-[2px] h-[16px] items-center relative shrink-0 w-[551px]" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0" data-name="Módulo">
        <IconAvatar />
        <p className="[word-break:break-word] font-['iFood_RC_Textos:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#141414] text-[14px] whitespace-nowrap">Início</p>
      </div>
      <Frame7 />
    </div>
  );
}

function SubHeaderPage() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[56px] items-center left-[-2px] px-[24px] py-[12px] right-[-2px] top-0" data-name="Sub-Header page">
      <div aria-hidden className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
      <Frame8 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white flex-[1_0_0] h-[1121px] min-w-px relative rounded-[20px]" data-name="Main">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Main1 />
        <SubHeaderPage />
      </div>
      <div aria-hidden className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Sidebar />
      <Main />
    </div>
  );
}

function VisaoGeralNovos() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col gap-[8px] items-start left-[40px] overflow-clip rounded-[24px] top-[40px] w-[1440px]" data-name="Visão geral - Novos">
      <HeaderOs />
      <Frame6 />
    </div>
  );
}

export default function Web1350X() {
  return (
    <div className="bg-[#e0e0e0] overflow-clip relative rounded-[40px] size-full" data-name="Web • 1350x690">
      <VisaoGeralNovos />
    </div>
  );
}