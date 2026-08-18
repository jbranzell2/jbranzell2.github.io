import imgCover from "@/imports/DesktopSas/375e40c02a591ab8f551aa19fec6959669cd9367.png";
import imgSas1 from "@/imports/DesktopSas/808d4ce7caba98f87a16e002a007a9c5ce840274.png";
import imgSas2 from "@/imports/DesktopSas/c9222641484c48d657bf56d2745d8c3a50c724ff.png";
import imgSas3 from "@/imports/DesktopSas/30eb5163fdb3b47db8d1b97ba0113f90c1e8bb63.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
          <div className="px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">Digital Designer at Sas - Scandinavian Airlines</p>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full mt-4">
            <div className="w-full aspect-[390/339]">
              <img alt="" className="w-full h-full object-cover block" src={imgCover} />
            </div>
          </div>

          {/* Intro */}
          <div className="px-[24px] pt-[8px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.2875rem] not-italic text-[1.26875rem] text-black w-full">I worked for a year as the visual designer for the payment and booking stream at SAS.</p>
          </div>

          {/* Tinted section */}
          <div className="bg-[#fafafa] flex flex-col items-start py-[32px] w-full">
            <div className="pl-[24px]">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">My role included development and management of:</p>
            </div>
            {roleItems.map((text, i) => (
              <div key={i} className="px-[24px] pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full">{text}</p>
              </div>
            ))}
          </div>

          {/* Gallery images — full bleed */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            {[imgSas1, imgSas2, imgSas3].map((img, i) => (
              <div key={i} className="w-full aspect-[390/234]">
                <img alt="" className="w-full h-full object-cover block" src={img} />
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Hero row: text left, image right */}
          <div className="flex items-center pl-[32px] gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">Digital Designer at Sas - Scandinavian Airlines</p>
              <div className="pt-[8px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.55625rem] not-italic text-[1.41875rem] text-black w-full max-w-[453px]">I worked for a year as the visual designer for the payment and booking stream at SAS.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>

          {/* Tinted section */}
          <div className="bg-[#fafafa] flex justify-center pb-[64px] pt-[128px] px-[24px] w-full">
            <div className="w-full max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black">My role included development and management of:</p>
              {roleItems.map((text, i) => (
                <p key={i} className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black mt-[16px]">{text}</p>
              ))}
            </div>
          </div>

          {/* Full-width images */}
          <div className="px-[32px] pt-[64px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSas1} />
            </div>
          </div>
          <div className="px-[32px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSas2} />
            </div>
          </div>
          <div className="px-[32px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSas3} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
