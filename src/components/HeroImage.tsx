interface HeroImageProps {
  src: string;
  alt: string;
  variant: "mobile" | "desktop";
  /** Only used by the mobile variant — every project's mobile hero shares
   *  the same wrapper shape but not the same aspect ratio. */
  mobileAspectClass?: string;
}

/**
 * A project's cover/hero image, rendered once per breakpoint (a separate
 * <HeroImage variant="mobile" /> and <HeroImage variant="desktop" /> call,
 * since the two live in different parts of each page's layout rather than
 * side by side). fetchPriority="high" is baked in here rather than typed
 * out at each call site — it's the LCP candidate on every project page, and
 * every other image on the page should stay at default priority.
 */
export default function HeroImage({ src, alt, variant, mobileAspectClass = "aspect-[390/339]" }: HeroImageProps) {
  if (variant === "desktop") {
    return (
      <div className="flex-1 min-w-[390px] relative h-[844px]">
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
