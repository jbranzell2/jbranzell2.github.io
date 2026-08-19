import imgElectrolux2 from "@/imports/DesktopElectrolux/17650428fbd3baabe4879b82041918783a309acc.avif";
import imgElectrolux11 from "@/imports/DesktopElectrolux/5edaf8e63575d5d52f3716be9bf30c5418d7c1c9.avif";
import imgElectrolux4 from "@/imports/DesktopElectrolux/5fde9e8e6ff3864f31bf59ec5901406b54a9c284.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";

export default function Electrolux() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">
        {/* Hero section */}
        <div className="relative">
          {/* Mobile */}
          <div className="md:hidden">
            <div className="px-6 pt-9">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.99375rem] not-italic text-[3.025rem] text-black w-full">
                Senior Product Designer at Electrolux
              </p>
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black mt-8 w-full">
                {`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}
              </p>
            </div>
            <div className="w-full mt-8">
              <HeroImage variant="mobile" src={imgElectrolux2} alt="Electrolux app" />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center gap-[180px] w-full overflow-hidden min-h-[600px]">
              <div className="flex flex-col justify-center py-16 pl-7 w-[455px] shrink-0">
                <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[5.475rem] not-italic text-[4.15rem] text-black max-w-[455px]">
                  Senior Product Designer at Electrolux
                </p>
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black max-w-[455px]">
                  {`Electrolux was in need for a senior product designer to maintain and further develop their Europe apps. As the responsible designer, Johan provided new design, as well as managing the conversation between product owners, developers and architects for both Electrolux and AEG's teams.`}
                </p>
              </div>
              <HeroImage variant="desktop" src={imgElectrolux2} alt="Electrolux app" />
            </div>
          </div>
        </div>

        {/* Tinted section */}
        <div className="bg-[#fafafa] w-screen mx-[calc(50%-50vw)] px-6 py-[52px] md:py-0 md:h-[256px] md:flex md:items-center md:justify-center">
          <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full md:max-w-[1040px]">
            {`Johan was part of two teams that worked with these apps, Taste and Care, which represent kitchen and care appliances. Parts of the apps could connect with Electrolux and Aeg's machines, so a big challenge was to make it as user-friendly as possible for everyone regardless of model. The apps are in both Android and iOS.`}
          </p>
        </div>

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
