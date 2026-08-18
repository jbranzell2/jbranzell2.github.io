import imgImageCoverPng from "./a8b563f1fc6e472abbe4d5332e46150f22228451.png";
import imgImageMyndigheten2Png from "./8fe6102b3dcea3c8447c46853ed465e778805cde.png";
import imgImageMyndigheten1Png from "./d16efd6cc7cee2dbfb6e84db4f66c97b9b3dcc5e.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[453px]">UI/UX Designer at Myndigheten för delaktighet</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">I worked in a team as both interaction designer and graphic designer to create a site that is understandable and follows WCAG3.</p>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">The work included user testing and delivering the final product.</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[208px] relative shrink-0" data-name="Column">
      <Block />
      <Block1 />
      <Block2 />
    </div>
  );
}

function ImageCoverPng() {
  return (
    <div className="h-[845px] relative shrink-0 w-[715px]" data-name="Image · cover.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoverPng} />
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageCoverPng />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block3 />
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

function ImageMyndigheten2Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · Myndigheten 2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMyndigheten2Png} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMyndigheten2Png />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[8px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function ImageMyndigheten1Png() {
  return (
    <div className="h-[1006px] relative shrink-0 w-[1382px]" data-name="Image · Myndigheten 1.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMyndigheten1Png} />
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMyndigheten1Png />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[32px] relative size-full">
        <Column3 />
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
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[270px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[51.6px] left-[29px] text-[36.2px] top-[100px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[100px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[144px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function DesktopMyndighetenForDelaktighet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Myndigheten för delaktighet">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}