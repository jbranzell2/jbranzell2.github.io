import imgHero from "@/imports/DesktopApoteket/b079120a7cf9ab751dbac5f7444e8090ba131c43.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TintedSection from "@/components/TintedSection";
import SectionHeading from "@/components/SectionHeading";

/**
 * Internal, unlinked reference page for the site's reusable building
 * blocks — not in the Header nav, reachable only by visiting /elements
 * directly. Add more elements below as they're extracted.
 */
export default function Elements() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      <main className="flex-1 w-full">
        <div className="px-6 pt-8 md:px-8 md:pt-12">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[1.8125rem] md:text-[2.2625rem] leading-[2.5875rem] md:leading-[3.225rem] not-italic">Elements</p>
          <p className="font-['Poppins:Light',sans-serif] text-black text-base leading-[1.8rem] not-italic mt-2 max-w-[630px]">Reusable building blocks used across the site. This page isn{"'"}t linked anywhere — it{"'"}s a reference only.</p>
        </div>

        <div className="px-6 md:px-8 pt-8">
          <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic">Hero</p>
        </div>
        <Hero
          title="Project title goes here"
          intro="A short intro paragraph describing the project, role, or context — this copy sits beside the cover image on desktop and above it on mobile."
          image={imgHero}
          imageAlt=""
        />

        <div className="px-6 md:px-8 pt-12 md:pt-24">
          <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic">Tinted section</p>
        </div>
        <div className="pt-4">
          <TintedSection className="bg-[#fafafa] py-8 md:py-12">
            <p className="font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black">This is the grey full-bleed band used for supporting copy — role, tools, or context that deserves a bit more visual weight than the plain white background. Pass any content as children. Background, spacing, and height are supplied by the caller via className, since real bands vary in those a fair bit page to page.</p>
          </TintedSection>
        </div>

        <div className="px-6 md:px-8 pt-12 md:pt-24">
          <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic">Section heading</p>
        </div>
        <div className="flex flex-col items-start md:items-center pt-4 md:px-8 w-full">
          <SectionHeading title="Section title goes here" className="flex flex-col md:max-w-[453px]">
            <div className="px-6 md:px-0 mt-2 md:mt-8">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full md:max-w-[453px]">Body copy for this section — usually the next content block right after a Hero or Tinted section, often paired with a supporting image below it. Pass paragraphs (or a bulleted list) as children, since their shape varies page to page.</p>
            </div>
          </SectionHeading>
        </div>

        <div className="h-16 md:h-24" />
      </main>

      <Footer />
    </div>
  );
}
