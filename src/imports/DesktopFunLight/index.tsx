import imgImageCover2TestPng from "./beefc7b570ae6f76213e1113f373f66b563e15d7.png";
import imgImageFunlight1Jpg from "./d2ed76dbd5826fe88e5c323a8c3041bcb5a26f22.png";
import imgImageFunlight2Jpg from "./05bb160805dd73fb568ad8c11faaefb04d416fcd.png";
import imgImageFunlight3Jpeg from "./a8d2235115b26d1da26a612487b3a3a2212c9c8e.png";
import imgImageFunlight5Jpg from "./35b9deacb632ad586910614d7d6dcbce7646deaa.png";
import imgImageFunlight6Jpeg from "./39d178c51738bdf149acfe54e8b3d903b3242f81.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[453px]">Art Director conecpt for Fun Light</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[22.7px] text-black w-[453px]">
        <p className="leading-[40.9px] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
        <p className="leading-[40.9px] mb-0">The design was meant to say ”Fun Light”, but still communicating cleanness and healthiness.</p>
        <p className="leading-[40.9px]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[208px] relative shrink-0" data-name="Column">
      <Block />
      <Block1 />
    </div>
  );
}

function ImageCover2TestPng() {
  return (
    <div className="h-[885px] relative shrink-0 w-[715px]" data-name="Image · cover2test.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCover2TestPng} />
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageCover2TestPng />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block2 />
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

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[22.7px] text-black w-[1034px]">
        <p className="font-['Poppins:Bold',sans-serif] leading-[40.9px] mb-0">Vision</p>
        <p className="leading-[40.9px] mb-0">To follow the healthy trend, use the already existing position and make</p>
        <p className="leading-[40.9px]">FUN LIGHT more active by adding a new product.</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[195px] items-start justify-center py-[48px] relative shrink-0 w-full" data-name="Row">
      <Column2 />
    </div>
  );
}

function ImageFunlight1Jpg() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · funlight 1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunlight1Jpg} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFunlight1Jpg />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[128px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function ImageFunlight2Jpg() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · funlight 2.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunlight2Jpg} />
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFunlight2Jpg />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
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

function ImageFunlight3Jpeg() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · funlight 3.jpeg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunlight3Jpeg} />
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFunlight3Jpeg />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block6 />
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

function ImageFunlight5Jpg() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · funlight 5.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunlight5Jpg} />
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFunlight5Jpg />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column6 />
      </div>
    </div>
  );
}

function ImageFunlight6Jpeg() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · funlight 6.jpeg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunlight6Jpeg} />
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFunlight6Jpeg />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block8 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
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

export default function DesktopFunLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Fun Light">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}