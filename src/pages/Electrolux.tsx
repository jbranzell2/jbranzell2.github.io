import imgElectrolux2 from "@/imports/DesktopElectrolux/17650428fbd3baabe4879b82041918783a309acc.avif";
import imgElectrolux11 from "@/imports/DesktopElectrolux/5edaf8e63575d5d52f3716be9bf30c5418d7c1c9.avif";
import imgElectrolux4 from "@/imports/DesktopElectrolux/5fde9e8e6ff3864f31bf59ec5901406b54a9c284.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TintedSection from "@/components/TintedSection";

export default function Electrolux() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">
        {/* ── Hero ── */}
        <Hero
          title="Senior Product Designer at Electrolux"
          image={imgElectrolux2}
          imageAlt="Electrolux app"
          order="intro-first"
          mobileImageClass="mt-8"
          intro={
            <div className="px-6 pt-8 md:px-0">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">
                {`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}
              </p>
            </div>
          }
        />

        {/* Tinted section */}
        <TintedSection className="bg-[#fafafa] py-[52px] md:py-0 md:h-[256px]">
          <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">
            {`Johan was part of two teams that worked with these apps, Taste and Care, which represent kitchen and care appliances. Parts of the apps could connect with Electrolux and Aeg's machines, so a big challenge was to make it as user-friendly as possible for everyone regardless of model. The apps are in both Android and iOS.`}
          </p>
        </TintedSection>

        {/* Screenshots section. Rendered at natural size (no aspect-ratio
            wrapper + object-cover/contain, unlike other pages' galleries)
            because these two screenshots don't share a common ratio —
            forcing them into a fixed box previously letterboxed them. */}
        <div className="flex flex-col gap-3 md:gap-8 mt-3 md:mt-0 md:px-7 md:pt-[108px] md:pb-[108px] w-full">
          {[imgElectrolux11, imgElectrolux4].map((img, i) => (
            <img key={img} alt={`Electrolux app screen ${i + 1}`} className="w-full h-auto block" src={img} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
