import HeroImage from "./HeroImage";

interface HeroProps {
  title: string;
  intro: string;
  image: string;
  imageAlt?: string;
}

/**
 * The "text + cover image" pattern used at the top of every project page.
 * Mobile stacks title -> image -> intro; desktop places title+intro beside
 * the image in a row. Kept as two breakpoint-specific blocks (rather than
 * one responsive tree) because HeroImage itself is designed to be invoked
 * once per breakpoint — see HeroImage.tsx.
 */
export default function Hero({ title, intro, image, imageAlt = "" }: HeroProps) {
  return (
    <>
      <div className="md:hidden">
        <div className="px-6 pt-8">
          <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.99375rem] not-italic text-[3.025rem] text-black w-full">{title}</p>
        </div>
        <div className="w-full">
          <HeroImage variant="mobile" src={image} alt={imageAlt} />
        </div>
        <div className="px-6 pt-4">
          <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.2875rem] not-italic text-[1.26875rem] text-black w-full">{intro}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
          <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[5.475rem] not-italic text-[4.15rem] text-black w-[512px]">{title}</p>
            <div className="pt-8">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.55625rem] not-italic text-[1.41875rem] text-black w-full max-w-[453px]">{intro}</p>
            </div>
          </div>
          <HeroImage variant="desktop" src={image} alt={imageAlt} />
        </div>
      </div>
    </>
  );
}
