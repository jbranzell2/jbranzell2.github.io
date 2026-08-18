import imgCover from "@/imports/DesktopMitel/bed76efbd80d3b03e7717f6b4dcbcf3e80242a1e.png";
import imgMitel1 from "@/imports/DesktopMitel/a120b2451b5dcf22a4edfaf295db43b4a555c1e3.png";
import imgMitel2 from "@/imports/DesktopMitel/5b3d70b09b8b03b4785432733dc951aede4000f1.png";
import imgMitel3 from "@/imports/DesktopMitel/b08ee736cc6012b12547642a76e042dc65688679.png";
import imgMitel4 from "@/imports/DesktopMitel/6287313b28a9844ed62bf6b0f2fe79a882564044.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mitel() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">UX/UI Designer at Mitel</p>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full mt-12">
            <div className="w-full aspect-[390/339]">
              <img alt="" className="w-full h-full object-cover block" src={imgCover} />
            </div>
          </div>

          {/* Description */}
          <div className="px-6 pt-2">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">Worked at the same time with many others project including their telephone exchange system.</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black tracking-[-0.016px] w-full">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
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
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">UX/UI Designer at Mitel</p>
              <div className="pt-8">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">Worked at the same time with many others project including their telephone exchange system.</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>

          {/* Full-width screenshots */}
          {[
            { img: imgMitel1, pt: "pt-8" },
            { img: imgMitel2, pt: "pt-14" },
            { img: imgMitel3, pt: "pt-14" },
            { img: imgMitel4, pt: "pt-14" },
          ].map(({ img, pt }, i) => (
            <div key={i} className={`px-[32px] ${pt}`}>
              <div className="w-full aspect-[16/9] relative">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={img} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
