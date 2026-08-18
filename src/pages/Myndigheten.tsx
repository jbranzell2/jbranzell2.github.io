import imgCover from "@/imports/DesktopMyndighetenForDelaktighet/a8b563f1fc6e472abbe4d5332e46150f22228451.png";
import imgMyndigheten2 from "@/imports/DesktopMyndighetenForDelaktighet/8fe6102b3dcea3c8447c46853ed465e778805cde.png";
import imgMyndigheten1 from "@/imports/DesktopMyndighetenForDelaktighet/d16efd6cc7cee2dbfb6e84db4f66c97b9b3dcc5e.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Myndigheten() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">UI/UX Designer at Myndigheten för delaktighet</p>
          </div>

          {/* Description */}
          <div className="px-[24px] pt-[8px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full">I worked in a team as both interaction designer and graphic designer to create a site that is understandable and follows WCAG3.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full">The work included user testing and delivering the final product.</p>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full mt-12">
            <div className="w-full aspect-[390/278]">
              <img alt="" className="w-full h-full object-cover block" src={imgCover} />
            </div>
          </div>

          {/* Screenshot images — full bleed */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            {[imgMyndigheten2, imgMyndigheten1].map((img, i) => (
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
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">UI/UX Designer at Myndigheten för delaktighet</p>
              <div className="pt-[8px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">I worked in a team as both interaction designer and graphic designer to create a site that is understandable and follows WCAG3.</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">The work included user testing and delivering the final product.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>

          {/* Myndigheten 2 */}
          <div className="px-[32px] pt-[8px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgMyndigheten2} />
            </div>
          </div>

          {/* Myndigheten 1 */}
          <div className="px-[32px] pt-[32px]">
            <div className="w-full aspect-[10/7] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgMyndigheten1} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
