import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  /** Body copy, including its own spacing (e.g. a wrapping div with
   *  "mt-2 md:mt-8" before it) — shape varies a fair bit page to page
   *  (a single paragraph, several tightly-set paragraphs, a bulleted
   *  list), so it's passed as children rather than a fixed prop, same
   *  as Hero's `intro`. */
  children: ReactNode;
  className?: string;
}

/**
 * The "row heading + body copy" pattern repeated down a project page's
 * case-study sections (Apoteket's "Initial Exploration", "The Design
 * System", "The checkout", etc.) — most often the next content block
 * right after a Hero or TintedSection. Callers typically nest this
 * inside a row wrapper that supplies the row's own top padding and
 * desktop horizontal margin (e.g. "pt-12 md:pt-24 md:px-8 w-full"); the
 * title's own "px-6 md:px-0" assumes that ambient md:px-8 is already
 * there, so it doesn't double up on desktop.
 */
export default function SectionHeading({ title, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="px-6 md:px-0 [word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] md:leading-[3.225rem] not-italic text-[1.8125rem] md:text-[2.2625rem] text-black w-full md:max-w-[453px]">{title}</p>
      {children}
    </div>
  );
}
