import imgCover from "@/imports/DesktopMyndighetenForDelaktighet/a8b563f1fc6e472abbe4d5332e46150f22228451.avif";
import imgMyndigheten2 from "@/imports/DesktopMyndighetenForDelaktighet/8fe6102b3dcea3c8447c46853ed465e778805cde.avif";
import imgMyndigheten1 from "@/imports/DesktopMyndighetenForDelaktighet/d16efd6cc7cee2dbfb6e84db4f66c97b9b3dcc5e.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Myndigheten() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        <Hero
          title="UI/UX Designer at Myndigheten för delaktighet"
          image={imgCover}
          imageAlt=""
          order="intro-first"
          mobileImageClass="mt-12"
          mobileAspectClass="aspect-[390/278]"
          intro={
            <>
              <div className="px-6 pt-2 md:px-0">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">I worked in a team as both interaction designer and graphic designer to create a site that is understandable and follows WCAG3.</p>
              </div>
              <div className="px-6 pt-4 md:px-0">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The work included user testing and delivering the final product.</p>
              </div>
            </>
          }
        />

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
