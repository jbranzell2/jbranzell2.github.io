import imgCover from "@/imports/DesktopMitel/bed76efbd80d3b03e7717f6b4dcbcf3e80242a1e.avif";
import imgMitel1 from "@/imports/DesktopMitel/a120b2451b5dcf22a4edfaf295db43b4a555c1e3.avif";
import imgMitel2 from "@/imports/DesktopMitel/5b3d70b09b8b03b4785432733dc951aede4000f1.avif";
import imgMitel3 from "@/imports/DesktopMitel/b08ee736cc6012b12547642a76e042dc65688679.avif";
import imgMitel4 from "@/imports/DesktopMitel/6287313b28a9844ed62bf6b0f2fe79a882564044.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Mitel() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        <Hero
          title="UX/UI Designer at Mitel"
          image={imgCover}
          imageAlt=""
          mobileImageClass="mt-12"
          intro={
            <>
              <div className="px-6 pt-2 md:px-0 md:pt-8">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">{`worked as one of two designers in one international team that were mostly in India and Canada, and had responsibility for Mitel's admin views.`}</p>
              </div>
              <div className="px-6 pt-4 md:px-0">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">Worked at the same time with many others project including their telephone exchange system.</p>
              </div>
              <div className="px-6 pt-4 md:px-0">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black tracking-[-0.016px] md:tracking-normal w-full max-w-[453px]">The work included keeping everyone on the same page and updating their old UI while creating a design system for the future.</p>
              </div>
            </>
          }
        />

        {/* ── Screenshot images ── */}
        <div className="w-full">
          {[
            { img: imgMitel1, pt: "md:pt-8" },
            { img: imgMitel2, pt: "md:pt-14" },
            { img: imgMitel3, pt: "md:pt-14" },
            { img: imgMitel4, pt: "md:pt-14" },
          ].map(({ img, pt }) => (
            <div key={img} className={`mt-3 md:mt-0 md:px-8 ${pt}`}>
              <div className="w-full aspect-[390/205] md:aspect-[16/9]">
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
