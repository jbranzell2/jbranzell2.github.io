import imgCover from "@/imports/DesktopFunLight/beefc7b570ae6f76213e1113f373f66b563e15d7.avif";
import imgFunlight1 from "@/imports/DesktopFunLight/d2ed76dbd5826fe88e5c323a8c3041bcb5a26f22.avif";
import imgFunlight2 from "@/imports/DesktopFunLight/05bb160805dd73fb568ad8c11faaefb04d416fcd.avif";
import imgFunlight3 from "@/imports/DesktopFunLight/a8d2235115b26d1da26a612487b3a3a2212c9c8e.avif";
import imgFunlight5 from "@/imports/DesktopFunLight/35b9deacb632ad586910614d7d6dcbce7646deaa.avif";
import imgFunlight6 from "@/imports/DesktopFunLight/39d178c51738bdf149acfe54e8b3d903b3242f81.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const galleryImages = [
  { src: imgFunlight1, pt: "md:pt-32" },
  { src: imgFunlight2, pt: "md:pt-14" },
  { src: imgFunlight3, pt: "md:pt-14" },
  { src: imgFunlight5, pt: "md:pt-14" },
  { src: imgFunlight6, pt: "md:pt-14" },
];

export default function FunLight() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        <Hero
          title="Art Director conecpt for Fun Light"
          image={imgCover}
          imageAlt=""
          order="intro-first"
          intro={
            <div className="px-6 pt-2 pb-4 md:px-0 md:pb-0">
              <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[1.26875rem] md:text-[1.41875rem] text-black tracking-[-0.0203px] md:tracking-normal w-full max-w-[453px]">
                <p className="leading-[2.2875rem] md:leading-[2.55625rem] mb-0">In this project our class at Berghs created a concept and design for Fun Light with Silver. I was inspired by a trend of healthiness that is currently sweeping over Sweden.</p>
                <p className="leading-[2.2875rem] md:leading-[2.55625rem] mb-0">The design was meant to say "Fun Light", but still communicating cleanness and healthiness.</p>
                <p className="leading-[2.2875rem] md:leading-[2.55625rem]">So I made Vitamin Effervescent tablets, in small gum like packages, which you can take anywhere.</p>
              </div>
            </div>
          }
        />

        {/* ── Vision band (custom: needs md:items-start, which TintedSection doesn't expose — it bakes in md:items-center) ── */}
        <div className="px-6 pt-8 md:pt-0 md:bg-[#fafafa] md:w-screen md:mx-[calc(50%-50vw)] md:flex md:h-[195px] md:items-start md:justify-center md:py-12">
          <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] not-italic text-[1.26875rem] md:text-[1.41875rem] text-black w-full md:max-w-[1040px]">
            <p className="font-['Poppins:Bold',sans-serif] leading-[2.2875rem] md:leading-[2.55625rem] mb-0">Vision</p>
            <p className="leading-[2.2875rem] md:leading-[2.55625rem] mb-0">To follow the healthy trend, use the already existing position and make</p>
            <p className="leading-[2.2875rem] md:leading-[2.55625rem]">FUN LIGHT more active by adding a new product.</p>
          </div>
        </div>

        {/* ── Gallery images ── */}
        <div className="w-full">
          {galleryImages.map(({ src, pt }) => (
            <div key={src} className={`mt-3 md:mt-0 md:px-8 ${pt}`}>
              <div className="w-full aspect-[390/210] md:aspect-[16/9]">
                <img alt="" className="w-full h-full object-cover block" src={src} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
