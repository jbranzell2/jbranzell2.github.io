import imgImageCoverPng from "./bed76efbd80d3b03e7717f6b4dcbcf3e80242a1e.png";
import imgImageMitel1Png from "./a120b2451b5dcf22a4edfaf295db43b4a555c1e3.png";
import imgImageMitel2Png from "./5b3d70b09b8b03b4785432733dc951aede4000f1.png";
import imgImageMitel3Png from "./b08ee736cc6012b12547642a76e042dc65688679.png";
import imgImageMitel4Png from "./6287313b28a9844ed62bf6b0f2fe79a882564044.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic relative shrink-0 text-[35.4px] text-black w-[255px]">UX/UI Designer at Mitel</p>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[32px] relative size-full">
        <Column />
      </div>
    </div>
  );
}

function ImageCoverPng() {
  return (
    <div className="h-[339px] relative shrink-0 w-[390px]" data-name="Image · cover.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoverPng} />
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageCoverPng />
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
    <div className="content-stretch flex items-start pt-[48px] relative shrink-0 w-full" data-name="Row">
      <Column1 />
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
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

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">Worked at the same time with many others project including their telephone exchange system.</p>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.016px] w-[343px]">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function ImageMitel1Png() {
  return (
    <div className="h-[203px] relative shrink-0 w-[374px]" data-name="Image · Mitel1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.96%] left-0 max-w-none top-[-0.73%] w-full" src={imgImageMitel1Png} />
      </div>
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
      <div className="content-stretch flex items-start pl-[8px] pt-[8px] relative size-full">
        <Column5 />
      </div>
    </div>
  );
}

function ImageMitel2Png() {
  return (
    <div className="h-[207px] relative shrink-0 w-[374px]" data-name="Image · Mitel2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[98.99%] left-0 max-w-none top-[1.23%] w-full" src={imgImageMitel2Png} />
      </div>
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
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column6 />
      </div>
    </div>
  );
}

function ImageMitel3Png() {
  return (
    <div className="h-[204px] relative shrink-0 w-[374px]" data-name="Image · mitel3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.47%] left-0 max-w-none top-[-0.23%] w-full" src={imgImageMitel3Png} />
      </div>
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

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column7 />
      </div>
    </div>
  );
}

function ImageMitel4Png() {
  return (
    <div className="h-[206px] relative shrink-0 w-[374px]" data-name="Image · Mitel4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.49%] left-0 max-w-none top-[0.74%] w-full" src={imgImageMitel4Png} />
      </div>
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

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block8 />
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column8 />
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
      <Row7 />
      <Row8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[393px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[41.4px] left-[23px] text-[29px] top-[97px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[167px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[212px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function MobileMitel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Mitel">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}