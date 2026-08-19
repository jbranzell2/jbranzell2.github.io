import imgCover from "@/imports/DesktopSthlmXperienceConference2023/5cf916097d48060a2b988233659d2b11606df22f.avif";
import imgSxc1 from "@/imports/DesktopSthlmXperienceConference2023/e347515b19e942034d84f0b4d711a483eb9ee66a.avif";
import imgSxc2 from "@/imports/DesktopSthlmXperienceConference2023/0def1d1da99daa6cd3e2b2f7c817dcfb63c93197.avif";
import imgSxc4 from "@/imports/DesktopSthlmXperienceConference2023/0fa407d37c82462e54b48109945f0070a1babd04.avif";
import imgSxc5 from "@/imports/DesktopSthlmXperienceConference2023/7c73469602c4456be96a55a46a61321bba0f8129.avif";
import imgSxc6 from "@/imports/DesktopSthlmXperienceConference2023/a164ca18fc2a5b471a458c25d7e5e843af6cc3bb.avif";
import imgImg3981 from "@/imports/DesktopSthlmXperienceConference2023/d5d1c1045203ad381264530dca515eae0cff457d.avif";
import imgImg3973 from "@/imports/DesktopSthlmXperienceConference2023/8be501f0591379a5e64e4fe8d160dea90752063b.avif";
import imgImg3974 from "@/imports/DesktopSthlmXperienceConference2023/59c761dd5060921c2421ac29c212f27bfb264b66.avif";
import imgImg3978 from "@/imports/DesktopSthlmXperienceConference2023/4242f5e400df023085891d03065a0ad66d081e63.avif";
import imgFoto from "@/imports/DesktopSthlmXperienceConference2023/b85073b10959701a5c5497620b390884973f6179.avif";
import imgImg3993 from "@/imports/DesktopSthlmXperienceConference2023/b88f5f6672b61de0994940a8e8d3e46cf8fe985b.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";

const BODY_TEXT = "font-['Poppins:Light',sans-serif] not-italic text-base text-black leading-[1.8rem]";
const TEXT_BLOCK_WRAPPER = "font-['Poppins:Light',sans-serif] not-italic text-base text-black leading-[0]";

const typographyParagraphs = [
  { text: "We chose Futura for our headers, and Barlow for smaller texts.", pt: "pt-6 md:pt-8" },
  { text: "My initial thought was that they looked kind of similar and it would cause a problem, but it turned out great!", pt: "pt-4" },
  { text: "The smallest size we used was Barlow in 16 pixels.", pt: "pt-4" },
];

const socialMediaParagraphs = [
  { text: "To work with all the colours and get it really playful, we early on created a system for when and what should be released.", pt: "pt-4 md:pt-10" },
  { text: "We tried to use the colours differently but in an order that would make them seem more random and playful.", pt: "pt-4 md:pt-8" },
  { text: "¨This also applies to the forms, hands and typography.", pt: "pt-4 md:pt-0" },
];

export default function SthlmXperience() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Hero */}
          <div className="px-6 pt-6">
            <p className="font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">Shaping Stockholm Xperience Conference 2023</p>
            <p className="font-['Poppins:Light',sans-serif] leading-[2.2875rem] not-italic text-[1.26875rem] text-black mt-4 w-full">Worked on the branding and all the material for Stockholm Xperience Conference 2023. In a small team we looked at all the branding material, and applied it to everything digital and print.</p>
          </div>
          <div className="pt-6">
            <img alt="Cover" className="w-full aspect-[390/240] object-cover" src={imgCover} fetchPriority="high" />
          </div>
        </div>

        {/* ── DESKTOP layout: Hero row ── */}
        <div className="hidden md:block">
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col items-start py-16 shrink-0 max-w-[453px]">
              <p className="font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-[461px]">Shaping Stockholm Xperience Conference 2023</p>
              <div className="pt-12">
                <p className="font-['Poppins:Light',sans-serif] leading-[2.55625rem] not-italic text-[1.41875rem] text-black w-[461px]">Worked on the branding and all the material for Stockholm Xperience Conference 2023. In a small team we looked at all the branding material, and applied it to everything digital and print.</p>
              </div>
            </div>
            <HeroImage variant="desktop" src={imgCover} alt="Cover" />
          </div>
        </div>

        {/* ── Tinted (shared, responsive) ── */}
        <div className="bg-[#fafafa] py-6 px-6 mt-0 md:w-screen md:mx-[calc(50%-50vw)] md:py-20 md:pb-[104px] md:flex md:justify-center">
          <div className={`${TEXT_BLOCK_WRAPPER} w-full md:max-w-[1040px]`}>
            <p className="leading-[1.8rem] mb-0">The STHLM Xperience Conference, hosted by Zington, is an engaging event featuring lectures, hands-on advice, and interactive workshops, all designed to commemorate World Usability Day. Each year, the conference aligns with the theme set forth by the World Usability Day Committee. In 2023, the theme was "Collaboration and Cooperation".</p>
            <p className="leading-[1.8rem]">{`Together we shaped the conference's branding and all of the material. Our primary focus was to uphold the established conference branding guidelines while incorporating design elements that portrayed the year's essence.`}</p>
          </div>
        </div>

        {/* ── Colors text ── */}
        <div className="px-6 pt-12 md:flex md:justify-center md:pt-24">
          <p className={`${TEXT_BLOCK_WRAPPER} w-full md:max-w-[453px]`}>
            <span className="leading-[1.8rem]">{`We thought more playful colors are more collaborative, and we put alot of work into finding the correct ones that worked well. Also, we chose colors that could work together, with a few rules, and still bli fine the `}</span>
            <span className="font-['Poppins:Bold',sans-serif] leading-[1.8rem]">WCAG 2.1 AA</span>
            <span className="leading-[1.8rem]">{` standards.`}</span>
          </p>
        </div>

        {/* ── Sxc1 ── */}
        <div className="w-full pt-12 md:px-8 md:pt-24">
          <div className="w-full aspect-[390/188] md:aspect-[19/10]">
            <img alt="SXC 1" className="w-full h-full object-cover block" src={imgSxc1} />
          </div>
        </div>

        {/* ── Typography row ── */}
        <div className="flex flex-col items-start md:items-center pt-12 md:pt-24 md:px-8 w-full">
          <div className="flex flex-col text-left">
            <p className="px-6 md:px-0 font-['Poppins:Medium',sans-serif] leading-[3.08125rem] md:leading-[4.025rem] not-italic text-[2.2125rem] md:text-[2.8875rem] text-black w-full md:w-[461px]">Typography</p>
            {typographyParagraphs.map(({ text, pt }) => (
              <div key={text} className={`px-6 md:px-0 ${pt}`}>
                <p className={`${BODY_TEXT} w-full md:w-[461px]`}>{text}</p>
              </div>
            ))}
          </div>
          <div className="w-full pt-[88px] md:pt-[120px] pb-10">
            <img alt="SXC 2" className="w-full h-auto block" src={imgSxc2} />
          </div>
        </div>

        {/* ── Sxc4 ── */}
        <div className="w-full pt-12 md:px-8 md:pt-24">
          <div className="w-full aspect-[390/188] md:aspect-[19/10]">
            <img alt="SXC 4" className="w-full h-full object-cover block" src={imgSxc4} />
          </div>
        </div>

        {/* ── Sxc5 ── */}
        <div className="w-full pt-12 md:px-8 md:pt-24">
          <div className="w-full aspect-[390/188] md:aspect-[19/10]">
            <img alt="SXC 5" className="w-full h-full object-cover block" src={imgSxc5} />
          </div>
        </div>

        {/* ── Social media row ── */}
        <div className="flex flex-col items-start md:items-center pt-12 md:pt-24 md:px-8 w-full">
          <div className="flex flex-col text-left">
            <p className="px-6 md:px-0 font-['Poppins:Medium',sans-serif] leading-[2.5875rem] md:leading-[3.225rem] not-italic text-[1.8125rem] md:text-[2.2625rem] text-black w-full md:w-[461px]">Social media</p>
            {socialMediaParagraphs.map(({ text, pt }) => (
              <div key={text} className={`px-6 md:px-0 ${pt}`}>
                <p className={`${BODY_TEXT} w-full md:w-[461px]`}>{text}</p>
              </div>
            ))}
          </div>
          <div className="w-full pt-[88px] md:pt-[120px] pb-10">
            <img alt="SXC 6" className="w-full h-auto block" src={imgSxc6} />
          </div>
        </div>

        {/* ── Event photos ── */}
        <div className="w-full pt-12 md:px-8 md:pt-24">
          <div className="w-full aspect-[4/3]">
            <img alt="Event photo 1" className="w-full h-full object-cover block" src={imgImg3981} />
          </div>
          <div className="w-full aspect-[4/3] mt-3 md:mt-12">
            <img alt="Event photo 2" className="w-full h-full object-cover block" src={imgImg3973} />
          </div>
          <div className="flex md:block gap-1 mt-3 md:mt-12">
            <div className="flex-1 md:w-full aspect-[3/4]">
              <img alt="Event photo 3" className="w-full h-full object-cover block" src={imgImg3974} />
            </div>
            <div className="flex-1 md:w-full aspect-[3/4] md:mt-12">
              <img alt="Event photo 4" className="w-full h-full object-cover block" src={imgImg3978} />
            </div>
            <div className="flex-1 md:w-full aspect-[3/4] md:mt-12">
              <img alt="Event photo 5" className="w-full h-full object-cover block" src={imgFoto} />
            </div>
          </div>
          <div className="w-full aspect-[3/4] mt-3 md:mt-12">
            <img alt="Event photo 6" className="w-full h-full object-cover block" src={imgImg3993} />
          </div>
        </div>

        <div className="h-16 md:h-24" />
      </main>

      <Footer />
    </div>
  );
}
