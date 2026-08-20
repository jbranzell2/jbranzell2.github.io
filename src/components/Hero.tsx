import type { ReactNode } from "react";
import HeroImage from "./HeroImage";

const TITLE_SIZE = {
  default: {
    mobile: "text-[2.2125rem] leading-[3.08125rem]",
    desktop: "md:text-[2.8875rem] md:leading-[4.025rem]",
    desktopWidth: "md:w-full md:max-w-[453px]",
  },
  // Apoteket is the one page with a visibly larger hero title.
  large: {
    mobile: "text-[3.025rem] leading-[3.99375rem]",
    desktop: "md:text-[4.15rem] md:leading-[5.475rem]",
    desktopWidth: "md:w-[512px]",
  },
};

interface HeroProps {
  title: string;
  /** Full intro block, including its own responsive spacing (e.g.
   *  "px-6 pt-4 md:px-0 md:pt-8 ..." on a wrapping div) — that varies a
   *  fair bit page to page, so it's not baked in here. Rendered once in
   *  the mobile flow and once in the desktop column. */
  intro: ReactNode;
  image: string;
  imageAlt?: string;
  size?: "default" | "large";
  /** Override the desktop title's width/max-width class — most pages
   *  land on the size variant's usual value, but a couple of Figma
   *  exports came out a few pixels off (e.g. w-[461px] instead of
   *  max-w-[453px]) and that's worth keeping exact. */
  titleWidthClass?: string;
  /** "image-first" (default): title, then image, then intro — the most
   *  common order. "intro-first": title, then intro, then image. */
  order?: "image-first" | "intro-first";
  /** Margin/spacing for the mobile image wrapper — varies page to page
   *  (mt-4, mt-12, none at all). Defaults to no extra margin. */
  mobileImageClass?: string;
  /** Override the mobile cover image's aspect ratio — most pages use
   *  HeroImage's own default, but a couple crop noticeably shorter
   *  (e.g. "aspect-[390/278]"). Passed straight through to HeroImage. */
  mobileAspectClass?: string;
  /** Override the desktop cover image's box — most pages keep HeroImage's
   *  default fixed h-[844px], but a source image far from that portrait
   *  shape needs its own aspect ratio instead to avoid a hard crop.
   *  Passed straight through to HeroImage. */
  desktopAspectClass?: string;
}

/**
 * The "text + cover image" pattern used at the top of every project page.
 * Mobile stacks title, image, and intro (order configurable); desktop
 * places title+intro beside the image in a row. Kept as two
 * breakpoint-specific blocks (rather than one responsive tree) because
 * HeroImage itself is designed to be invoked once per breakpoint — see
 * HeroImage.tsx.
 */
export default function Hero({
  title,
  intro,
  image,
  imageAlt = "",
  size = "default",
  titleWidthClass,
  order = "image-first",
  mobileImageClass = "",
  mobileAspectClass,
  desktopAspectClass,
}: HeroProps) {
  const t = TITLE_SIZE[size];
  const desktopWidth = titleWidthClass ?? t.desktopWidth;

  const mobileImage = (
    <div className={`w-full ${mobileImageClass}`}>
      <HeroImage variant="mobile" src={image} alt={imageAlt} mobileAspectClass={mobileAspectClass} />
    </div>
  );

  return (
    <>
      <div className="md:hidden">
        <div className="px-6 pt-8">
          <h1 className={`[word-break:break-word] font-['Poppins:Medium',sans-serif] not-italic text-black w-full ${t.mobile}`}>{title}</h1>
        </div>
        {order === "image-first" ? (
          <>
            {mobileImage}
            {intro}
          </>
        ) : (
          <>
            {intro}
            {mobileImage}
          </>
        )}
      </div>
      <div className="hidden md:block">
        <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
          <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
            <h1 className={`[word-break:break-word] font-['Poppins:Medium',sans-serif] not-italic text-black ${t.desktop} ${desktopWidth}`}>{title}</h1>
            {intro}
          </div>
          <HeroImage variant="desktop" src={image} alt={imageAlt} desktopAspectClass={desktopAspectClass} />
        </div>
      </div>
    </>
  );
}
