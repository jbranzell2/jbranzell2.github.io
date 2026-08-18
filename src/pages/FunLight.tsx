import imgCover from "@/imports/DesktopFunLight/beefc7b570ae6f76213e1113f373f66b563e15d7.png";
import imgFunlight1 from "@/imports/DesktopFunLight/d2ed76dbd5826fe88e5c323a8c3041bcb5a26f22.png";
import imgFunlight2 from "@/imports/DesktopFunLight/05bb160805dd73fb568ad8c11faaefb04d416fcd.png";
import imgFunlight3 from "@/imports/DesktopFunLight/a8d2235115b26d1da26a612487b3a3a2212c9c8e.png";
import imgFunlight5 from "@/imports/DesktopFunLight/35b9deacb632ad586910614d7d6dcbce7646deaa.png";
import imgFunlight6 from "@/imports/DesktopFunLight/39d178c51738bdf149acfe54e8b3d903b3242f81.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FunLight() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">Art Director conecpt for Fun Light</p>
          </div>

          {/* Description */}
          <div className="px-6 pt-2 pb-4">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[1.26875rem] text-black tracking-[-0.0203px] w-full">
              <p className="leading-[2.2875rem] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
              <p className="leading-[2.2875rem] mb-0">The design was meant to say "Fun Light", but still communicating cleanness and healthiness.</p>
              <p className="leading-[2.2875rem]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
            </div>
          </div>

          {/* Cover image — full bleed */}
          <div className="w-full">
            <div className="w-full aspect-[390/339]">
              <img alt="" className="w-full h-full object-cover block" src={imgCover} />
            </div>
          </div>

          {/* Vision */}
          <div className="px-6 pt-8">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[1.26875rem] text-black w-full">
              <p className="font-['Poppins:Bold',sans-serif] leading-[2.2875rem] mb-0">Vision</p>
              <p className="leading-[2.2875rem] mb-0">To follow the healthy trend, use the already existing position and make</p>
              <p className="leading-[2.2875rem]">FUN LIGHT more active by adding a new product.</p>
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
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">Art Director conecpt for Fun Light</p>
              <div className="pt-2">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[1.41875rem] text-black w-full max-w-[453px]">
                  <p className="leading-[2.55625rem] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
                  <p className="leading-[2.55625rem] mb-0">The design was meant to say "Fun Light", but still communicating cleanness and healthiness.</p>
                  <p className="leading-[2.55625rem]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>

          {/* Vision band */}
          <div className="bg-[#fafafa] flex h-[195px] items-start justify-center py-12 px-6 w-full">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[1.41875rem] text-black w-full max-w-[453px]">
              <p className="font-['Poppins:Bold',sans-serif] leading-[2.55625rem] mb-0">Vision</p>
              <p className="leading-[2.55625rem] mb-0">To follow the healthy trend, use the already existing position and make</p>
              <p className="leading-[2.55625rem]">FUN LIGHT more active by adding a new product.</p>
            </div>
          </div>

          {/* Gallery images */}
          <div className="px-8 pt-32">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight1} />
            </div>
          </div>
          <div className="px-8 pt-14">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight2} />
            </div>
          </div>
          <div className="px-8 pt-14">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight3} />
            </div>
          </div>
          <div className="px-8 pt-14">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight5} />
            </div>
          </div>
          <div className="px-8 pt-14">
            <div className="w-full aspect-[16/9] relative">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFunlight6} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
