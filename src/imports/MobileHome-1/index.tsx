import imgImageElectrolux from "./e5f8f49ca6d92ed6852eb0abc1341f66894049bd.png";
import imgImageSthlmXperienceConference2023 from "./5cf916097d48060a2b988233659d2b11606df22f.png";
import imgImageApoteket from "./28f8a14cd27cc0532020b2ecc5ced8f4b70847b6.png";
import imgImageSas from "./82891ca29deaf601d5ad5410a9342421a4c2d6fa.png";
import imgImageRumours from "./d986d374dc96e08f221af38e2dd2985c318ef68d.png";
import imgImageMitel from "./812ddf37bc39cad63de83bfa27936f66b7c1dca5.png";
import imgImageOdenBusinessIntelligence from "./1e5076f0f1a1a45573fe96c1dea49d964eddbc9c.png";
import imgImageMyndighetenForDelaktighet from "./1eb61cd289abe618936595a810968c24d166fe57.png";
import imgImageFunLight from "./aa70d2c2ee2f4832fd6e9a6a22d7a4d0460ce464.png";
import imgImageAlster from "./9833bb6a6ee2bfd4f0e40724afa6a1fb6edd79cf.png";

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

function ImageElectrolux() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Electrolux">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageElectrolux} />
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageElectrolux />
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

function ImageSthlmXperienceConference() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · STHLM Xperience Conference 2023">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSthlmXperienceConference2023} />
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSthlmXperienceConference />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block1 />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] relative size-full">
        <Column />
        <Column1 />
      </div>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Electrolux</p>
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

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">STHLM Xperience Conference 2023</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column2 />
        <Column3 />
      </div>
    </div>
  );
}

function ImageApoteket() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Apoteket">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket />
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

function ImageSas() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Sas">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSas} />
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSas />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[24px] relative size-full">
        <Column4 />
        <Column5 />
      </div>
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Apoteket</p>
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

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Sas</p>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column6 />
        <Column7 />
      </div>
    </div>
  );
}

function ImageRumours() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Rumours">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRumours} />
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageRumours />
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

function ImageMitel() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Mitel">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMitel} />
    </div>
  );
}

function Block9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMitel />
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block9 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[24px] relative size-full">
        <Column8 />
        <Column9 />
      </div>
    </div>
  );
}

function Block10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Rumours</p>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block10 />
    </div>
  );
}

function Block11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Mitel</p>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block11 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column10 />
        <Column11 />
      </div>
    </div>
  );
}

function ImageOdenBusinessIntelligence() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Oden Business Intelligence">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOdenBusinessIntelligence} />
    </div>
  );
}

function Block12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageOdenBusinessIntelligence />
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block12 />
    </div>
  );
}

function ImageMyndighetenForDelaktighet() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Myndigheten för delaktighet">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMyndighetenForDelaktighet} />
    </div>
  );
}

function Block13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageMyndighetenForDelaktighet />
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block13 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column12 />
        <Column13 />
      </div>
    </div>
  );
}

function Block14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Oden Business Intelligence</p>
    </div>
  );
}

function Column14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block14 />
    </div>
  );
}

function Block15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Myndigheten för delaktighet</p>
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block15 />
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column14 />
        <Column15 />
      </div>
    </div>
  );
}

function ImageFunLight() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Fun Light">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunLight} />
    </div>
  );
}

function Block16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFunLight />
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block16 />
    </div>
  );
}

function ImageAlster() {
  return (
    <div className="h-[189px] relative shrink-0 w-[188px]" data-name="Image · Alster">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAlster} />
    </div>
  );
}

function Block17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageAlster />
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block17 />
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[24px] relative size-full">
        <Column16 />
        <Column17 />
      </div>
    </div>
  );
}

function Block18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Fun Light</p>
    </div>
  );
}

function Column18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block18 />
    </div>
  );
}

function Block19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[25.2px] not-italic relative shrink-0 text-[14px] text-black w-[188px]">Alster</p>
    </div>
  );
}

function Column19() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Column">
      <Block19 />
    </div>
  );
}

function Row9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column18 />
        <Column19 />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Projects">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
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

export default function MobileHome() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Home">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}