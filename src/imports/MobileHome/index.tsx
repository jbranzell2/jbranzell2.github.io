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

function Menu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[328px] overflow-clip top-[35px]" data-name="Menu">
      <div className="bg-black h-[1.5px] relative shrink-0 w-[28px]" data-name="Bar" />
      <div className="bg-black h-[1.5px] relative shrink-0 w-[28px]" data-name="Bar" />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Header">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[23px] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-nowrap">Johan Branzell</p>
      <Menu />
    </div>
  );
}

function ImageElectrolux() {
  return (
    <div className="absolute h-[189px] left-[5px] top-0 w-[188px]" data-name="Image · Electrolux">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageElectrolux} />
    </div>
  );
}

function ImageSthlmXperienceConference() {
  return (
    <div className="absolute h-[189px] left-[197px] top-0 w-[188px]" data-name="Image · STHLM Xperience Conference 2023">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSthlmXperienceConference2023} />
    </div>
  );
}

function ImageApoteket() {
  return (
    <div className="absolute h-[189px] left-[5px] top-[274px] w-[188px]" data-name="Image · Apoteket">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket} />
    </div>
  );
}

function ImageSas() {
  return (
    <div className="absolute h-[189px] left-[197px] top-[274px] w-[188px]" data-name="Image · Sas">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSas} />
    </div>
  );
}

function ImageRumours() {
  return (
    <div className="absolute h-[189px] left-[5px] top-[523px] w-[188px]" data-name="Image · Rumours">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageRumours} />
    </div>
  );
}

function ImageMitel() {
  return (
    <div className="absolute h-[189px] left-[197px] top-[523px] w-[188px]" data-name="Image · Mitel">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMitel} />
    </div>
  );
}

function ImageOdenBusinessIntelligence() {
  return (
    <div className="absolute h-[189px] left-[5px] top-[771px] w-[188px]" data-name="Image · Oden Business Intelligence">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOdenBusinessIntelligence} />
    </div>
  );
}

function ImageMyndighetenForDelaktighet() {
  return (
    <div className="absolute h-[189px] left-[197px] top-[771px] w-[188px]" data-name="Image · Myndigheten för delaktighet">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMyndighetenForDelaktighet} />
    </div>
  );
}

function ImageFunLight() {
  return (
    <div className="absolute h-[189px] left-[5px] top-[1045px] w-[188px]" data-name="Image · Fun Light">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFunLight} />
    </div>
  );
}

function ImageAlster() {
  return (
    <div className="absolute h-[189px] left-[197px] top-[1045px] w-[188px]" data-name="Image · Alster">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAlster} />
    </div>
  );
}

function Grid() {
  return (
    <div className="h-[1289px] relative shrink-0 w-full" data-name="Grid">
      <ImageElectrolux />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[5px] not-italic text-[14px] text-black top-[203px] w-[190px]">Electrolux</p>
      <ImageSthlmXperienceConference />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[197px] not-italic text-[14px] text-black top-[203px] w-[190px]">STHLM Xperience Conference 2023</p>
      <ImageApoteket />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[5px] not-italic text-[14px] text-black top-[477px] w-[190px]">Apoteket</p>
      <ImageSas />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[197px] not-italic text-[14px] text-black top-[477px] w-[190px]">Sas</p>
      <ImageRumours />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[5px] not-italic text-[14px] text-black top-[726px] w-[190px]">Rumours</p>
      <ImageMitel />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[197px] not-italic text-[14px] text-black top-[726px] w-[190px]">Mitel</p>
      <ImageOdenBusinessIntelligence />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[5px] not-italic text-[14px] text-black top-[974px] w-[190px]">Oden Business Intelligence</p>
      <ImageMyndighetenForDelaktighet />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[197px] not-italic text-[14px] text-black top-[974px] w-[190px]">Myndigheten för delaktighet</p>
      <ImageFunLight />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[5px] not-italic text-[14px] text-black top-[1248px] w-[190px]">Fun Light</p>
      <ImageAlster />
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[25.2px] left-[197px] not-italic text-[14px] text-black top-[1248px] w-[190px]">Alster</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Projects">
      <Grid />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[393px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[41.4px] left-[23px] text-[29px] top-[97px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[167px]">E-mail me</p>
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