import imgElectrolux2 from "@/imports/DesktopElectrolux/17650428fbd3baabe4879b82041918783a309acc.png";
import imgElectrolux11 from "@/imports/DesktopElectrolux/5edaf8e63575d5d52f3716be9bf30c5418d7c1c9.png";
import imgElectrolux4 from "@/imports/DesktopElectrolux/5fde9e8e6ff3864f31bf59ec5901406b54a9c284.png";
import { Link } from "react-router-dom";

export default function Electrolux() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter">
      {/* Header */}
      <header className="relative shrink-0 w-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-[16px] py-[26px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[16px] leading-[24px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[24px]">
            <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer underline decoration-1 underline-offset-4">Home</Link>
            <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">About</Link>
          </nav>
        </div>
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-3 items-center px-[29px] h-[164px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[32.8px] leading-[49.2px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[40px] justify-self-center">
            <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer underline decoration-1 underline-offset-4">Home</Link>
            <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">About</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 w-full">
        {/* Hero section */}
        <div className="relative">
          {/* Mobile */}
          <div className="md:hidden">
            <div className="px-[23px] pt-[35px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[63.9px] not-italic text-[48.4px] text-black w-full">
                Senior Product Designer at Electrolux
              </p>
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black mt-8 w-full">
                {`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}
              </p>
            </div>
            <div className="w-full mt-8">
              <div className="w-full aspect-[390/339]">
                <img alt="Electrolux app" className="w-full h-full object-cover block" src={imgElectrolux2} />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center gap-[180px] w-full overflow-hidden min-h-[600px]">
              <div className="flex flex-col justify-center py-[64px] pl-[29px] w-[455px] shrink-0">
                <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[87.6px] not-italic text-[66.4px] text-black max-w-[455px]">
                  Senior Product Designer at Electrolux
                </p>
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black max-w-[455px]">
                  {`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}
                </p>
              </div>
              <div className="flex-1 min-w-[390px] relative h-[844px]">
                <img alt="Electrolux app" className="absolute inset-0 w-full h-full object-cover" src={imgElectrolux2} />
              </div>
            </div>
          </div>
        </div>

        {/* Tinted section */}
        {/* Mobile */}
        <div className="md:hidden bg-[#fafafa] py-[52px] px-[23px] w-full">
          <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">
            {`Johan was part of two teams that worked with these apps, Taste and Care, which represent kitchen and care appliances. Parts of the apps could connect with Electrolux and Aeg's machines, so a big challenge was to make it as user-friendly as possible for everyone regardless of model. The apps are in both Android and iOS.`}
          </p>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex bg-[#fafafa] h-[256px] items-center justify-center px-[24px]">
          <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black max-w-[453px]">
            {`Johan was part of two teams that worked with these apps, Taste and Care, which represent kitchen and care appliances. Parts of the apps could connect with Electrolux and Aeg's machines, so a big challenge was to make it as user-friendly as possible for everyone regardless of model. The apps are in both Android and iOS.`}
          </p>
        </div>

        {/* Screenshots section */}
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-3 mt-3 w-full">
          {[imgElectrolux11, imgElectrolux4].map((img, i) => (
            <div key={i} className="w-full aspect-[390/188]">
              <img alt={`Electrolux app screen ${i + 1}`} className="w-full h-full object-cover block" src={img} />
            </div>
          ))}
        </div>
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-[32px] px-[29px] pt-[106px] pb-[106px] w-full">
          <div className="w-full aspect-[3/1] relative">
            <img alt="Electrolux app screen 1" className="absolute inset-0 w-full h-full object-contain" src={imgElectrolux11} />
          </div>
          <div className="w-full aspect-[3/1] relative">
            <img alt="Electrolux app screen 2" className="absolute inset-0 w-full h-full object-contain" src={imgElectrolux4} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile */}
        <div className="md:hidden h-[393px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[23px] top-[97px] text-[29px] leading-[41.4px] not-italic whitespace-nowrap">
            Johan Branzell
          </p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[23px] top-[167px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
            E-mail me
          </p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[23px] top-[212px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
            johanbranzell@gmail.com
          </p>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between px-[29px] h-[270px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[36.2px] leading-[51.6px] not-italic whitespace-nowrap">
            Johan Branzell
          </p>
          <div className="flex flex-col items-end">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
              E-mail me
            </p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
              johanbranzell@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
