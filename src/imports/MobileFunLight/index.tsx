import imgImageCover2TestPng from "./beefc7b570ae6f76213e1113f373f66b563e15d7.png";
import imgImageFunlight1Jpg from "./d2ed76dbd5826fe88e5c323a8c3041bcb5a26f22.png";
import imgImageFunlight2Jpg from "./05bb160805dd73fb568ad8c11faaefb04d416fcd.png";
import imgImageFunlight3Jpeg from "./a8d2235115b26d1da26a612487b3a3a2212c9c8e.png";
import imgImageFunlight5Jpg from "./35b9deacb632ad586910614d7d6dcbce7646deaa.png";
import imgImageFunlight6Jpeg from "./39d178c51738bdf149acfe54e8b3d903b3242f81.png";

function Frame1() {
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
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic relative shrink-0 text-[35.4px] text-black w-[255px]">Art Director conecpt for Fun Light</p>
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

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[20.3px] text-black tracking-[-0.0203px] w-[343px]">
        <p className="leading-[36.6px] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
        <p className="leading-[36.6px] mb-0">The design was meant to say ”Fun Light”, but still communicating cleanness and healthiness.</p>
        <p className="leading-[36.6px]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
      </div>
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
      <div className="content-stretch flex items-start pb-[16px] pl-[24px] pt-[8px] relative size-full">
        <Column1 />
      </div>
    </div>
  );
}

function ImageCover2TestPng() {
  return (
    <div className="h-[339px] relative shrink-0 w-[390px]" data-name="Image · cover2test.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageCover2TestPng} />
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

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column2 />
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[20.3px] text-black w-[343px]">
        <p className="font-['Poppins:Bold',sans-serif] leading-[36.6px] mb-0">Vision</p>
        <p className="leading-[36.6px] mb-0">To follow the healthy trend, use the already existing position and make</p>
        <p className="leading-[36.6px]">FUN LIGHT more active by adding a new product.</p>
      </div>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[32px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function ImageFunlight1Jpg() {
  return (
    <div className="h-[209px] relative shrink-0 w-[374px]" data-name="Image · funlight 1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.66%] left-0 max-w-none top-[-0.57%] w-full" src={imgImageFunlight1Jpg} />
      </div>
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

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start pl-[8px] pt-[32px] relative shrink-0 w-full" data-name="Row">
      <Column4 />
    </div>
  );
}

function ImageFunlight2Jpg() {
  return (
    <div className="h-[210px] relative shrink-0 w-[374px]" data-name="Image · funlight 2.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.18%] left-0 max-w-none top-[-0.09%] w-full" src={imgImageFunlight2Jpg} />
      </div>
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

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start pl-[8px] relative shrink-0 w-full" data-name="Row">
      <Column5 />
    </div>
  );
}

function ImageFunlight3Jpeg() {
  return (
    <div className="h-[217px] relative shrink-0 w-[374px]" data-name="Image · funlight 3.jpeg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.99%] left-0 max-w-none top-[-1.18%] w-full" src={imgImageFunlight3Jpeg} />
      </div>
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

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block6 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative shrink-0 w-full" data-name="Row">
      <Column6 />
    </div>
  );
}

function ImageFunlight5Jpg() {
  return (
    <div className="h-[211px] relative shrink-0 w-[374px]" data-name="Image · funlight 5.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.7%] left-0 max-w-none top-[0.39%] w-full" src={imgImageFunlight5Jpg} />
      </div>
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

function Column7() {
  return (
    <div className="content-stretch flex flex-col h-[211px] items-start relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start pl-[8px] relative shrink-0 w-full" data-name="Row">
      <Column7 />
    </div>
  );
}

function ImageFunlight6Jpeg() {
  return (
    <div className="h-[219px] relative shrink-0 w-[374px]" data-name="Image · funlight 6.jpeg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.06%] left-0 max-w-none top-[-0.26%] w-full" src={imgImageFunlight6Jpeg} />
      </div>
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

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block8 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start pl-[8px] relative shrink-0 w-full" data-name="Row">
      <Column8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
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
      <Frame />
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

export default function MobileFunLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Fun Light">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}