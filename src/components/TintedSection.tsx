import type { ReactNode } from "react";

interface TintedSectionProps {
  children: ReactNode;
  /** Background, spacing, and sizing for the outer band, e.g.
   *  "bg-[#fafafa] py-8 md:py-12". Left to the caller — bands vary a fair
   *  bit page to page (fixed height, asymmetric padding, desktop-only
   *  background, extra margin before it on mobile, and so on) — but every
   *  one shares the same full-bleed escape and centered, capped content
   *  column, which is what this component actually standardizes. */
  className?: string;
}

/**
 * The full-bleed band used to set supporting copy apart from the page
 * background — the "Tinted section" pattern repeated on every project
 * page. Full-bleed via the w-screen/negative-margin trick (harmless
 * no-op below the site's max-w-[1400px] container, where it already
 * matches the viewport). Content is centered and capped at 1040px on
 * desktop; on mobile it's left-aligned at full width.
 */
export default function TintedSection({ children, className = "" }: TintedSectionProps) {
  return (
    <div className={`w-screen mx-[calc(50%-50vw)] flex flex-col items-start px-6 md:items-center md:flex-row md:justify-center ${className}`}>
      <div className="w-full md:max-w-[1040px]">{children}</div>
    </div>
  );
}
