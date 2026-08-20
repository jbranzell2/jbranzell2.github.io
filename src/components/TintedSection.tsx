import type { ReactNode } from "react";

interface TintedSectionProps {
  children: ReactNode;
}

/**
 * The full-bleed grey (#fafafa) band used to set supporting copy apart from
 * the white page background — the "Tinted section" pattern repeated on
 * every project page. Full-bleed via the w-screen/negative-margin trick
 * (harmless no-op below the site's max-w-[1400px] container, where it
 * already matches the viewport). Content is centered and capped at 1040px
 * on desktop; on mobile it's just left-aligned at full width.
 */
export default function TintedSection({ children }: TintedSectionProps) {
  return (
    <div className="bg-[#fafafa] w-screen mx-[calc(50%-50vw)] flex flex-col items-start py-8 px-6 md:items-center md:flex-row md:justify-center md:py-12">
      <div className="w-full md:max-w-[1040px]">{children}</div>
    </div>
  );
}
