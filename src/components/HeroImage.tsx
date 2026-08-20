interface HeroImageProps {
  src: string;
  alt: string;
  variant: "mobile" | "desktop";
  /** Only used by the mobile variant — every project's mobile hero shares
   *  the same wrapper shape but not the same aspect ratio. */
  mobileAspectClass?: string;
  /** Only used by the desktop variant — overrides the default fixed
   *  h-[844px] box with an aspect-ratio class instead. Most cover photos
   *  are tall device mockups that fill that portrait box fine, but a
   *  source image far from that shape (e.g. a wide logo card) would get
   *  cropped hard on the sides by object-cover; pass the image's own
   *  aspect ratio here to show it uncropped instead. */
  desktopAspectClass?: string;
}

/**
 * A project's cover/hero image, rendered once per breakpoint (a separate
 * <HeroImage variant="mobile" /> and <HeroImage variant="desktop" /> call,
 * since the two live in different parts of each page's layout rather than
 * side by side). fetchPriority="high" is baked in here rather than typed
 * out at each call site — it's the LCP candidate on every project page, and
 * every other image on the page should stay at default priority.
 */
export default function HeroImage({ src, alt, variant, mobileAspectClass = "aspect-[390/339]", desktopAspectClass }: HeroImageProps) {
  if (variant === "desktop") {
    return (
      <div className={`flex-1 min-w-[390px] relative ${desktopAspectClass ?? "h-[844px]"}`}>
        <img alt={alt} className="absolute inset-0 w-full h-full object-cover" src={src} fetchPriority="high" />
      </div>
    );
  }

  return (
    <div className={`w-full ${mobileAspectClass}`}>
      <img alt={alt} className="w-full h-full object-cover block" src={src} fetchPriority="high" />
    </div>
  );
}
