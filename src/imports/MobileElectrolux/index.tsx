import imgImageElectrolux2Png from "./17650428fbd3baabe4879b82041918783a309acc.png";
import imgImageElectrolux11Png from "./5edaf8e63575d5d52f3716be9bf30c5418d7c1c9.png";
import imgImageElectrolux4Png from "./5fde9e8e6ff3864f31bf59ec5901406b54a9c284.png";

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
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[23px] not-italic text-[16px] text-black top-[30px] whitespace-nowrap">Johan Branzell</p>
      <Menu />
    </div>
  );
}

function ImageElectrolux2Png() {
  return (
    <div className="absolute h-[339px] left-0 top-[642px] w-[390px]" data-name="Image · Electrolux2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageElectrolux2Png} />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[957px] relative shrink-0 w-full" data-name="Section">
      <p className="[word-break:break-word] absolute font-['Poppins:Medium',sans-serif] leading-[63.9px] left-[23px] not-italic text-[48.4px] text-black top-[35px] w-[257px]">Senior Product Designer at Electrolux</p>
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] not-italic text-[16px] text-black top-[365px] w-[345px]">{`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}</p>
      <ImageElectrolux2Png />
    </div>
  );
}

function SectionTinted() {
  return (
    <div className="bg-[#fafafa] h-[310px] relative shrink-0 w-full" data-name="Section · tinted">
      <p className="[word-break:break-word] absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] not-italic text-[16px] text-black top-[52px] w-[345px]">{`Johan was part of two teams that worked with these apps, Taste and Care, which represent kitchen and care appliances. Parts of the apps could connect with Electrolux and Aeg's machines, so a big challenge was to make it as user-friendly as possible for everyone regardless of model. The apps are in both Android and iOS.`}</p>
    </div>
  );
}

function ImageElectrolux11Png() {
  return (
    <div className="absolute h-[188px] left-[23px] top-[77px] w-[343px]" data-name="Image · Electrolux11.png">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgImageElectrolux11Png} />
      </div>
    </div>
  );
}

function ImageElectrolux4Png() {
  return (
    <div className="absolute h-[188px] left-[23px] top-[312px] w-[343px]" data-name="Image · Electrolux4.png">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-contain size-full" src={imgImageElectrolux4Png} />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[524px] relative shrink-0 w-full" data-name="Section">
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
    <div className="[word-break:break-word] h-[393px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[41.4px] left-[23px] text-[29px] top-[97px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[167px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[212px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function MobileElectrolux() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Electrolux">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}