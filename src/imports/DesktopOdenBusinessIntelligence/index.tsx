import svgPaths from "./svg-4ow6vj4ncl";

function Header() {
  return (
    <div className="[word-break:break-word] h-[164px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Header">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[49.2px] left-[29px] text-[32.8px] top-[59px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[651px] text-[16px] top-[66px]">Home</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[744px] text-[16px] top-[66px]">About</p>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[87.6px] not-italic relative shrink-0 text-[66.4px] text-black w-[802px]">Designer/Animator at Oden Business Intelligence</p>
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
      <div className="content-stretch flex items-start pl-[320px] pt-[96px] relative size-full">
        <Column />
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[802px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[320px] pt-[32px] relative size-full">
        <Column1 />
      </div>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[802px]">– Developing the concept</p>
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
      <div className="content-stretch flex items-start pl-[320px] pt-[16px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[802px]">– Writing parts of the script.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[320px] pt-[16px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[802px]">– Create graphics.</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[320px] pt-[16px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[802px]">– Animation in after effects.</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[320px] pt-[16px] relative size-full">
        <Column5 />
      </div>
    </div>
  );
}

function VideoVimeo() {
  return (
    <div className="h-[648px] relative shrink-0 w-[1150px]" data-name="Video · Vimeo 339052907">
      <svg className="absolute block inset-0 size-full" fill="none" height="648" preserveAspectRatio="none" viewBox="0 0 1150 648" width="1150">
        <g id="Video Â· Vimeo 339052907">
          <rect fill="#212124" height="648" width="1150" />
          <path d={svgPaths.p131b0770} fill="white" id="Play" />
        </g>
      </svg>
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <VideoVimeo />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block6 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[144px] pt-[48px] relative size-full">
        <Column6 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[270px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[51.6px] left-[29px] text-[36.2px] top-[100px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[100px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[145px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function DesktopOdenBusinessIntelligence() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Oden Business Intelligence">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}