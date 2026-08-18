import imgImageCoverPng from "./bed76efbd80d3b03e7717f6b4dcbcf3e80242a1e.png";
import imgImageMitel1Png from "./a120b2451b5dcf22a4edfaf295db43b4a555c1e3.png";
import imgImageMitel2Png from "./5b3d70b09b8b03b4785432733dc951aede4000f1.png";
import imgImageMitel3Png from "./b08ee736cc6012b12547642a76e042dc65688679.png";
import imgImageMitel4Png from "./6287313b28a9844ed62bf6b0f2fe79a882564044.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[453px]">UX/UI Designer at Mitel</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">Worked at the same time with many others project including their telephone exchange system.</p>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[208px] relative shrink-0" data-name="Column">
      <Block />
      <Block1 />
      <Block2 />
      <Block3 />
    </div>
  );
}

function ImageCoverPng() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · cover.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoverPng} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageCoverPng />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] relative size-full">
        <Column />
        <Column1 />
      </div>
    </div>
  );
}

function ImageMitel1Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · Mitel1.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMitel1Png} />
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMitel1Png />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[32px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function ImageMitel2Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · Mitel2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMitel2Png} />
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMitel2Png />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block6 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function ImageMitel3Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · mitel3.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMitel3Png} />
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMitel3Png />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function ImageMitel4Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · Mitel4.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMitel4Png} />
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMitel4Png />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block8 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column5 />
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

export default function DesktopMitel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Mitel">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}