import imgCover from "@/imports/DesktopFunLight/beefc7b570ae6f76213e1113f373f66b563e15d7.png";
import imgFunlight1 from "@/imports/DesktopFunLight/d2ed76dbd5826fe88e5c323a8c3041bcb5a26f22.png";
import imgFunlight2 from "@/imports/DesktopFunLight/05bb160805dd73fb568ad8c11faaefb04d416fcd.png";
import imgFunlight3 from "@/imports/DesktopFunLight/a8d2235115b26d1da26a612487b3a3a2212c9c8e.png";
import imgFunlight5 from "@/imports/DesktopFunLight/35b9deacb632ad586910614d7d6dcbce7646deaa.png";
import imgFunlight6 from "@/imports/DesktopFunLight/39d178c51738bdf149acfe54e8b3d903b3242f81.png";
import { Link } from "react-router-dom";

export default function FunLight() {
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

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic text-[35.4px] text-black w-full">Art Director conecpt for Fun Light</p>
          </div>

          {/* Description */}
          <div className="px-[24px] pt-[8px] pb-[16px]">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[20.3px] text-black tracking-[-0.0203px] w-full">
              <p className="leading-[36.6px] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
              <p className="leading-[36.6px] mb-0">The design was meant to say "Fun Light", but still communicating cleanness and healthiness.</p>
              <p className="leading-[36.6px]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
            </div>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full">
            <div className="w-full aspect-[390/339]">
              <img alt="" className="w-full h-full object-cover block" src={imgCover} />
            </div>
          </div>

          {/* Vision */}
          <div className="px-[24px] pt-[32px]">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[20.3px] text-black w-full">
              <p className="font-['Poppins:Bold',sans-serif] leading-[36.6px] mb-0">Vision</p>
              <p className="leading-[36.6px] mb-0">To follow the healthy trend, use the already existing position and make</p>
              <p className="leading-[36.6px]">FUN LIGHT more active by adding a new product.</p>
            </div>
          </div>

          {/* Gallery images — full bleed */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            {[imgFunlight1, imgFunlight2, imgFunlight3, imgFunlight5, imgFunlight6].map((img, i) => (
              <div key={i} className="w-full aspect-[390/210]">
                <img alt="" className="w-full h-full object-cover block" src={img} />
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Hero row */}
          <div className="flex items-center pl-[32px] gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic text-[46.2px] text-black w-full max-w-[453px]">Art Director conecpt for Fun Light</p>
              <div className="pt-[8px]">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[22.7px] text-black w-full max-w-[453px]">
                  <p className="leading-[40.9px] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
                  <p className="leading-[40.9px] mb-0">The design was meant to say "Fun Light", but still communicating cleanness and healthiness.</p>
                  <p className="leading-[40.9px]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>

          {/* Vision band */}
          <div className="bg-[#fafafa] flex h-[195px] items-start justify-center py-[48px] px-[24px] w-full">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[22.7px] text-black w-full max-w-[453px]">
              <p className="font-['Poppins:Bold',sans-serif] leading-[40.9px] mb-0">Vision</p>
              <p className="leading-[40.9px] mb-0">To follow the healthy trend, use the already existing position and make</p>
              <p className="leading-[40.9px]">FUN LIGHT more active by adding a new product.</p>
            </div>
          </div>

          {/* Gallery images */}
          <div className="px-[32px] pt-[128px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight1} />
            </div>
          </div>
          <div className="px-[32px] pt-[56px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight2} />
            </div>
          </div>
          <div className="px-[32px] pt-[56px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight3} />
            </div>
          </div>
          <div className="px-[32px] pt-[56px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight5} />
            </div>
          </div>
          <div className="px-[32px] pt-[56px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight6} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile footer */}
        <div className="md:hidden h-[392px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[23px] top-[97px] text-[29px] leading-[41.4px] not-italic whitespace-nowrap">Johan Branzell</p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[23px] top-[167px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">E-mail me</p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[23px] top-[212px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">johanbranzell@gmail.com</p>
        </div>
        {/* Desktop footer */}
        <div className="hidden md:flex items-center justify-between px-[29px] h-[270px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[36.2px] leading-[51.6px] not-italic whitespace-nowrap">Johan Branzell</p>
          <div className="flex flex-col items-end">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">E-mail me</p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">johanbranzell@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
