import imgCover from "@/imports/DesktopMitel/bed76efbd80d3b03e7717f6b4dcbcf3e80242a1e.png";
import imgMitel1 from "@/imports/DesktopMitel/a120b2451b5dcf22a4edfaf295db43b4a555c1e3.png";
import imgMitel2 from "@/imports/DesktopMitel/5b3d70b09b8b03b4785432733dc951aede4000f1.png";
import imgMitel3 from "@/imports/DesktopMitel/b08ee736cc6012b12547642a76e042dc65688679.png";
import imgMitel4 from "@/imports/DesktopMitel/6287313b28a9844ed62bf6b0f2fe79a882564044.png";
import { Link } from "react-router-dom";

export default function Mitel() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter">
      {/* Header */}
      <header className="relative shrink-0 w-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-[16px] py-[28px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[16px] leading-[24px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[24px]">
            <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">Home</Link>
            <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">About</Link>
          </nav>
        </div>
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-3 items-center px-[28px] h-[164px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[32.8px] leading-[49.2px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[40px] justify-self-center">
            <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">Home</Link>
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
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic text-[35.4px] text-black w-full">UX/UI Designer at Mitel</p>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full mt-12">
            <div className="w-full aspect-[390/339]">
              <img alt="" className="w-full h-full object-cover block" src={imgCover} />
            </div>
          </div>

          {/* Description */}
          <div className="px-[24px] pt-[8px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">Worked at the same time with many others project including their telephone exchange system.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black tracking-[-0.016px] w-full">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
          </div>

          {/* Screenshot images — full bleed */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            {[imgMitel1, imgMitel2, imgMitel3, imgMitel4].map((img, i) => (
              <div key={i} className="w-full aspect-[390/205]">
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
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic text-[46.2px] text-black w-full max-w-[453px]">UX/UI Designer at Mitel</p>
              <div className="pt-[32px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">Worked at the same time with many others project including their telephone exchange system.</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>

          {/* Full-width screenshots */}
          {[
            { img: imgMitel1, pt: "pt-[32px]" },
            { img: imgMitel2, pt: "pt-[56px]" },
            { img: imgMitel3, pt: "pt-[56px]" },
            { img: imgMitel4, pt: "pt-[56px]" },
          ].map(({ img, pt }, i) => (
            <div key={i} className={`px-[32px] ${pt}`}>
              <div className="w-full aspect-[16/9] relative">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={img} />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile footer */}
        <div className="md:hidden h-[393px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[24px] top-[96px] text-[29px] leading-[41.4px] not-italic whitespace-nowrap">Johan Branzell</p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[24px] top-[168px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">E-mail me</p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[24px] top-[212px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">johanbranzell@gmail.com</p>
        </div>
        {/* Desktop footer */}
        <div className="hidden md:flex items-center justify-between px-[28px] h-[270px]">
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
