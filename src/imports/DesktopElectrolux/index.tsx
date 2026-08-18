import imgImageElectrolux2Png from "./17650428fbd3baabe4879b82041918783a309acc.png";
import imgImageElectrolux11Png from "./5edaf8e63575d5d52f3716be9bf30c5418d7c1c9.png";
import imgImageElectrolux4Png from "./5fde9e8e6ff3864f31bf59ec5901406b54a9c284.png";

function Header() {
  return (
    <div className="[word-break:break-word] h-[164px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Header">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[49.2px] left-[29px] text-[32.8px] top-[59px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[651px] text-[16px] top-[66px]">Home</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[744px] text-[16px] top-[66px]">About</p>
    </div>
  );
}

function ImageElectrolux2Png() {
  return (
    <div className="absolute h-[844px] left-[726px] top-0 w-[715px]" data-name="Image · Electrolux2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageElectrolux2Png} />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[844px] relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[87.6px] left-[29px] not-italic text-[66.4px] text-black top-[152.5px] w-[455px]">Senior Product Designer at Electrolux</p>
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[29px] not-italic text-[16px] text-black top-[518.5px] w-[455px]">{`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}</p>
      <ImageElectrolux2Png />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[155px] left-0 top-[55px] w-[1441px]">
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[203px] not-italic text-[16px] text-black top-[34px] w-[1036px]">{`Johan was part of two teams that worked with these apps, Taste and Care, which represent kitchen and care appliances. Parts of the apps could connect with Electrolux and Aeg's machines, so a big challenge was to make it as user-friendly as possible for everyone regardless of model. The apps are in both Android and iOS.`}</p>
    </div>
  );
}

function SectionTinted() {
  return (
    <div className="bg-[#fafafa] h-[256px] relative shrink-0 w-full" data-name="Section · tinted">
      <Frame />
    </div>
  );
}

function ImageElectrolux11Png() {
  return (
    <div className="absolute h-[757px] left-[29px] top-[106px] w-[1382px]" data-name="Image · Electrolux11.png">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgImageElectrolux11Png} />
      </div>
    </div>
  );
}

function ImageElectrolux4Png() {
  return (
    <div className="absolute h-[757px] left-[29px] top-[951px] w-[1382px]" data-name="Image · Electrolux4.png">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgImageElectrolux4Png} />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[1753px] relative shrink-0 w-full" data-name="Section">
      <ImageElectrolux11Png />
      <ImageElectrolux4Png />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Section />
      <SectionTinted />
      <Section1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[270px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[51.6px] left-[29px] text-[36.2px] top-[100px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[100px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[145px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function DesktopElectrolux() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Electrolux">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}