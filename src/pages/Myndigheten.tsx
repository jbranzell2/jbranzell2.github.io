import imgCover from "@/imports/DesktopMyndighetenForDelaktighet/a8b563f1fc6e472abbe4d5332e46150f22228451.avif";
import imgMyndigheten2 from "@/imports/DesktopMyndighetenForDelaktighet/8fe6102b3dcea3c8447c46853ed465e778805cde.avif";
import imgMyndigheten1 from "@/imports/DesktopMyndighetenForDelaktighet/d16efd6cc7cee2dbfb6e84db4f66c97b9b3dcc5e.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";

export default function Myndigheten() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">UI/UX Designer at Myndigheten för delaktighet</p>
          </div>

          {/* Description */}
          <div className="px-6 pt-2">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">I worked in a team as both interaction designer and graphic designer to create a site that is understandable and follows WCAG3.</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">The work included user testing and delivering the final product.</p>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full mt-12">
            <HeroImage variant="mobile" src={imgCover} alt="" mobileAspectClass="aspect-[390/278]" />
          </div>

        </div>

        {/* ── DESKTOP layout: Hero row ── */}
        <div className="hidden md:block">
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">UI/UX Designer at Myndigheten för delaktighet</p>
              <div className="pt-2">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">I worked in a team as both interaction designer and graphic designer to create a site that is understandable and follows WCAG3.</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The work included user testing and delivering the final product.</p>
              </div>
            </div>
            <HeroImage variant="desktop" src={imgCover} alt="" />
          </div>
        </div>

        {/* ── Screenshot images ── */}
        <div className="w-full">
          {[
            { img: imgMyndigheten2, pt: "md:pt-2" },
            { img: imgMyndigheten1, pt: "md:pt-8" },
          ].map(({ img, pt }) => (
            <div key={img} className={`mt-3 md:mt-0 md:px-8 ${pt}`}>
              <div className="w-full aspect-[390/210] md:aspect-[16/9]">
                <img alt="" className="w-full h-full object-cover block" src={img} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
