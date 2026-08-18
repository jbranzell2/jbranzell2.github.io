import svgPaths from "./svg-o6vz8hs9pb";

function Frame() {
  return (
    <div className="content-stretch flex font-['Poppins:Light',sans-serif] items-center justify-between leading-[28.8px] relative shrink-0 w-[141px]">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[16px] py-[26px] relative size-full text-[16px] text-black whitespace-nowrap">
          <p className="font-['Poppins:Medium',sans-serif] leading-[24px] relative shrink-0">Johan Branzell</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[63.9px] not-italic relative shrink-0 text-[48.4px] text-black w-[343px]">Designer/Animator at Oden Business Intelligence</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[56px] relative size-full">
        <Column />
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block1 />
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">– Developing the concept</p>
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">– Writing parts of the script.</p>
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">– Create graphics.</p>
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">– Animation in after effects.</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column1 />
      </div>
    </div>
  );
}

function VideoVimeo() {
  return (
    <div className="h-[193px] relative shrink-0 w-[343px]" data-name="Video · Vimeo 339052907">
      <svg className="absolute block inset-0 size-full" fill="none" height="193" preserveAspectRatio="none" viewBox="0 0 343 193" width="343">
        <g id="Video Â· Vimeo 339052907">
          <rect fill="#212124" height="193" width="343" />
          <path d={svgPaths.p31acea80} fill="white" id="Play" />
        </g>
      </svg>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <VideoVimeo />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[8px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[392px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[41.4px] left-[23px] text-[29px] top-[97px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[167px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[212px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function MobileOdenBusinessIntelligence() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Oden Business Intelligence">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}