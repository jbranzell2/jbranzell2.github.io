import imgCover from "@/imports/DesktopSas/375e40c02a591ab8f551aa19fec6959669cd9367.avif";
import imgSas1 from "@/imports/DesktopSas/808d4ce7caba98f87a16e002a007a9c5ce840274.avif";
import imgSas2 from "@/imports/DesktopSas/c9222641484c48d657bf56d2745d8c3a50c724ff.avif";
import imgSas3 from "@/imports/DesktopSas/30eb5163fdb3b47db8d1b97ba0113f90c1e8bb63.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";

const roleItems = [
  "– The Seat maps",
  "– The Booking flow, including the introduction flow for buying Star Alliance tickets.",
  "– Redesign of campaigns.",
  "– Payment page maintenance.",
  "– Design for new icons.",
  "I always worked in cooperation with the design team and development of all services.",
  "The work included making sure the site followed WCAG AA 2.1",
];

export default function Sas() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">Digital Designer at Sas - Scandinavian Airlines</p>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full mt-4">
            <HeroImage variant="mobile" src={imgCover} alt="" />
          </div>

          {/* Intro */}
          <div className="px-6 pt-2">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.2875rem] not-italic text-[1.26875rem] text-black w-full">I worked for a year as the visual designer for the payment and booking stream at SAS.</p>
          </div>

        </div>

        {/* ── DESKTOP layout: Hero row ── */}
        <div className="hidden md:block">
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">Digital Designer at Sas - Scandinavian Airlines</p>
              <div className="pt-2">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.55625rem] not-italic text-[1.41875rem] text-black w-full max-w-[453px]">I worked for a year as the visual designer for the payment and booking stream at SAS.</p>
              </div>
            </div>
            <HeroImage variant="desktop" src={imgCover} alt="" />
          </div>
        </div>

        {/* ── Tinted section ── */}
        <div className="bg-[#fafafa] w-screen mx-[calc(50%-50vw)] flex flex-col items-start py-8 md:py-0 md:items-center md:flex-row md:justify-center md:pb-16 md:pt-32 md:px-6">
          <div className="md:w-full md:max-w-[1040px]">
            <p className="pl-6 md:pl-0 [word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px] md:max-w-none">My role included development and management of:</p>
            {roleItems.map((text) => (
              <p key={text} className="px-6 md:px-0 pt-4 md:pt-0 md:mt-4 [word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">{text}</p>
            ))}
          </div>
        </div>

        {/* ── Full-width images ── */}
        <div className="w-full">
          {[
            { img: imgSas1, pt: "md:pt-16" },
            { img: imgSas2, pt: "" },
            { img: imgSas3, pt: "" },
          ].map(({ img, pt }) => (
            <div key={img} className={`mt-3 md:mt-0 md:px-8 ${pt}`}>
              <div className="w-full aspect-[390/234] md:aspect-[16/9]">
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
