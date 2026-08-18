import imgImage1 from "@/imports/DesktopRumours/038bc9e4240307d0c18994487e79457c9b144476.png";
import imgImage2 from "@/imports/DesktopRumours/cad2714aeb19d0901af5fcbf9abe5853bef78774.png";
import imgImage3 from "@/imports/DesktopRumours/6ac2a98385ed39290989178b37547757fdfbc47f.png";
import imgImage4 from "@/imports/DesktopRumours/7b4f762da81de70dafd489ad082544dd0b727c9c.png";
import imgImage5 from "@/imports/DesktopRumours/5e15339e88985d9ca60add16b93f31634922b3f6.png";
import imgImage6 from "@/imports/DesktopRumours/5d313812b12c754b865e44bc3cb12d87e28de886.png";
import imgImage7 from "@/imports/DesktopRumours/a5d5220a35769706d6c76a7533d2a434388ca30f.png";
import imgImage9 from "@/imports/DesktopRumours/561f49544f3d143002a22344a9beb91dba816bcb.png";
import imgImage10 from "@/imports/DesktopRumours/d7d2279a090e6124df094b83426bc740e99e717d.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Rumours() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">Art director/Graphic Designer</p>
          </div>

          {/* Image 1 — full bleed */}
          <div className="w-full mt-12">
            <div className="w-full aspect-[390/278]">
              <img alt="" className="w-full h-full object-cover block" src={imgImage1} />
            </div>
          </div>

          {/* Description text */}
          <div className="px-6 pt-2">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">The work included everything, maping out formats, the visual identity and all branding.</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
          </div>

          {/* Images 2–10 — full bleed */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            {[imgImage2, imgImage3, imgImage4, imgImage5, imgImage6, imgImage7, imgImage9, imgImage10].map((img, i) => (
              <div key={i} className="w-full aspect-[390/280]">
                <img alt="" className="w-full h-full object-cover block" src={img} />
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Hero row: text left, image right */}
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">Art director/Graphic Designer</p>
              <div className="pt-[72px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px] whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The work included everything, maping out formats, the visual identity and all branding.</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            </div>
          </div>

          {/* Full-width images */}
          {[
            { img: imgImage2, pt: "pt-8" },
            { img: imgImage3, pt: "pt-14" },
            { img: imgImage4, pt: "pt-14" },
            { img: imgImage5, pt: "pt-14" },
            { img: imgImage6, pt: "pt-14" },
            { img: imgImage7, pt: "pt-14" },
            { img: imgImage9, pt: "pt-14" },
            { img: imgImage10, pt: "pt-14" },
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
