import imgImage163840X2560AJpg from "./4b36b5eca3656d66d6878dd084ec4c12dd416968.png";
import imgImage37Jpg from "./655f435d7f61899332d8136e701137eeb58ebfab.png";
import imgImage1001Jpg from "./daa83c54d9abf54aad6d32316adf4b449050990e.png";
import imgImage351Jpg from "./7c00948506c3c8d7ac2958f3b0c3ec5beac4fba5.png";
import imgImageKanske22Jpg from "./f27c7352efc038697f0cd20a9da239fca0b7afc3.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[453px]">Art Director and Graphic designer for Alster</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">Alster is an ecologic beer from the forests of Wermland. The name is based on a small place, known for being the home of Gustaf Fröding when he grew up. Its location is one where you relax and breath in natures own luxury.</p>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">By making beer with water from the lake Alstern and take the berrys from the forests of Wermland, you can get a unique tasting experience.</p>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">Alster is a beer to enjoy on your own or with great company in a non stressed moment.</p>
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

function Image163840X2560AJpg() {
  return (
    <div className="h-[845px] relative shrink-0 w-[715px]" data-name="Image · 16-3840x2560 a.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage163840X2560AJpg} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image163840X2560AJpg />
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

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[1034px]">This work is part of my final examination work at Berghs School of Communication 2015. I developed the concept, branding, labels, and graphic design.</p>
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
    <div className="bg-[#fafafa] content-stretch flex h-[170px] items-start justify-center py-[48px] relative shrink-0 w-full" data-name="Row">
      <Column2 />
    </div>
  );
}

function Image163840X2560BJpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · 16-3840x2560 b.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage163840X2560AJpg} />
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image163840X2560BJpg />
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
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Image37Jpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · 37.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37Jpg} />
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image37Jpg />
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
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function Image1001Jpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · 1.001.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1001Jpg} />
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image1001Jpg />
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
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column5 />
      </div>
    </div>
  );
}

function Image351Jpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · 35 (1).jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage351Jpg} />
    </div>
  );
}

function Block9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image351Jpg />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block9 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column6 />
      </div>
    </div>
  );
}

function ImageKanske22Jpg() {
  return (
    <div className="h-[1068px] relative shrink-0 w-[1382px]" data-name="Image · kanske22.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.59%] left-0 max-w-none top-[0.39%] w-full" src={imgImageKanske22Jpg} />
      </div>
    </div>
  );
}

function Block10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageKanske22Jpg />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block10 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column7 />
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
    <div className="[word-break:break-word] h-[269px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[51.6px] left-[29px] text-[36.2px] top-[99px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[99px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[144px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function DesktopAlster() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Alster">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}