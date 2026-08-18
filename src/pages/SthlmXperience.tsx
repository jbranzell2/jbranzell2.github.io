import imgCover from "@/imports/DesktopSthlmXperienceConference2023/5cf916097d48060a2b988233659d2b11606df22f.png";
import imgSxc1 from "@/imports/DesktopSthlmXperienceConference2023/e347515b19e942034d84f0b4d711a483eb9ee66a.png";
import imgSxc2 from "@/imports/DesktopSthlmXperienceConference2023/0def1d1da99daa6cd3e2b2f7c817dcfb63c93197.png";
import imgSxc4 from "@/imports/DesktopSthlmXperienceConference2023/0fa407d37c82462e54b48109945f0070a1babd04.png";
import imgSxc5 from "@/imports/DesktopSthlmXperienceConference2023/7c73469602c4456be96a55a46a61321bba0f8129.png";
import imgSxc6 from "@/imports/DesktopSthlmXperienceConference2023/a164ca18fc2a5b471a458c25d7e5e843af6cc3bb.png";
import imgImg3981 from "@/imports/DesktopSthlmXperienceConference2023/d5d1c1045203ad381264530dca515eae0cff457d.png";
import imgImg3973 from "@/imports/DesktopSthlmXperienceConference2023/8be501f0591379a5e64e4fe8d160dea90752063b.png";
import imgImg3974 from "@/imports/DesktopSthlmXperienceConference2023/59c761dd5060921c2421ac29c212f27bfb264b66.png";
import imgImg3978 from "@/imports/DesktopSthlmXperienceConference2023/4242f5e400df023085891d03065a0ad66d081e63.png";
import imgFoto from "@/imports/DesktopSthlmXperienceConference2023/b85073b10959701a5c5497620b390884973f6179.png";
import imgImg3993 from "@/imports/DesktopSthlmXperienceConference2023/b88f5f6672b61de0994940a8e8d3e46cf8fe985b.png";
import type { Page } from "@/App";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function SthlmXperience({ onNavigate }: Props) {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter">
      {/* Header */}
      <header className="relative shrink-0 w-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-[16px] py-[26px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[16px] leading-[24px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[24px]">
            <button onClick={() => onNavigate("home")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer underline decoration-1 underline-offset-4">Home</button>
            <button onClick={() => onNavigate("about")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">About</button>
          </nav>
        </div>
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-3 items-center px-[29px] h-[164px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[32.8px] leading-[49.2px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[40px] justify-self-center">
            <button onClick={() => onNavigate("home")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer underline decoration-1 underline-offset-4">Home</button>
            <button onClick={() => onNavigate("about")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer">About</button>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Hero */}
          <div className="px-[24px] pt-[24px]">
            <p className="font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic text-[35.4px] text-black w-full">Shaping Stockholm Xperience Conference 2023</p>
            <p className="font-['Poppins:Light',sans-serif] leading-[36.6px] not-italic text-[20.3px] text-black mt-4 w-full">Worked on the branding and all the material for Stockholm Xperience Conference 2023. In a small team we looked at all the branding material, and applied it to everything digital and print.</p>
          </div>
          <div className="pt-[24px]">
            <img alt="Cover" className="w-full aspect-[390/240] object-cover" src={imgCover} />
          </div>
          {/* Tinted */}
          <div className="bg-[#fafafa] py-[24px] px-[24px] mt-0">
            <div className="font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
              <p className="leading-[28.8px] mb-0">The STHLM Xperience Conference, hosted by Zington, is an engaging event featuring lectures, hands-on advice, and interactive workshops, all designed to commemorate World Usability Day. Each year, the conference aligns with the theme set forth by the World Usability Day Committee. In 2023, the theme was "Collaboration and Cooperation".</p>
              <p className="leading-[28.8px]">{`. Together we shaped the conference's branding and all of the material. Our primary focus was to uphold the established conference branding guidelines while incorporating design elements that portrayed the year's essence.`}</p>
            </div>
          </div>
          {/* Sxc1 */}
          <div className="w-full pt-[48px]">
            <div className="w-full aspect-[390/188]">
              <img alt="SXC 1" className="w-full h-full object-cover block" src={imgSxc1} />
            </div>
          </div>
          {/* Colors text */}
          <div className="px-[24px] pt-[48px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
              <span className="leading-[28.8px]">{`We thought more playful colors are more collaborative, and we put alot of work into finding the correct ones that worked well. Also, we chose colors that could work together, with a few rules, and still bli fine the `}</span>
              <span className="font-['Poppins:Bold',sans-serif] leading-[28.8px]">WCAG 2.1 AA</span>
              <span className="leading-[28.8px]">{` standards.`}</span>
            </p>
          </div>
          {/* Typography */}
          <div className="px-[24px] pt-[32px]">
            <p className="font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic text-[35.4px] text-black w-full">Typography</p>
          </div>
          <div className="px-[24px] pt-[24px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">We chose Futura for our headers, and Barlow for smaller texts.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">My initial thought was that they looked kind of similar and it would cause a problem, but it turned out great!</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">The smallest size we used was Barlow in 16 pixels.</p>
          </div>
          {/* Sxc2 */}
          <div className="pt-[24px]">
            <img alt="SXC 2" className="w-full aspect-[390/240] object-cover" src={imgSxc2} />
          </div>
          {/* Sxc4 */}
          <div className="w-full">
            <div className="w-full aspect-[390/188]">
              <img alt="SXC 4" className="w-full h-full object-cover block" src={imgSxc4} />
            </div>
          </div>
          {/* Sxc5 */}
          <div className="w-full mt-3">
            <div className="w-full aspect-[390/188]">
              <img alt="SXC 5" className="w-full h-full object-cover block" src={imgSxc5} />
            </div>
          </div>
          {/* Social media */}
          <div className="px-[24px] pt-[24px]">
            <p className="font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">Social media</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">To work with all the colours and get it really playful, we early on created a system for when and what should be released.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">We tried to use the colours differently but in an order that would make them seem more random and playful.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">¨This also applies to the forms, hands and typography.</p>
          </div>
          {/* Sxc6 */}
          <div className="pt-[40px] pb-[16px]">
            <img alt="SXC 6" className="w-full aspect-[390/240] object-cover" src={imgSxc6} />
          </div>
          {/* Event photos */}
          <div className="w-full">
            <div className="w-full aspect-[390/234]">
              <img alt="Event photo 1" className="w-full h-full object-cover block" src={imgImg3981} />
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="w-full aspect-[390/234]">
              <img alt="Event photo 2" className="w-full h-full object-cover block" src={imgImg3973} />
            </div>
          </div>
          <div className="flex gap-[3px] mt-3 w-full">
            <div className="flex-1 aspect-[1/1.33]">
              <img alt="Event photo 3" className="w-full h-full object-cover block" src={imgImg3974} />
            </div>
            <div className="flex-1 aspect-[1/1.33]">
              <img alt="Event photo 4" className="w-full h-full object-cover block" src={imgImg3978} />
            </div>
            <div className="flex-1 aspect-[1/1.33]">
              <img alt="Event photo 5" className="w-full h-full object-cover block" src={imgFoto} />
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="w-full aspect-[390/234]">
              <img alt="Event photo 6" className="w-full h-full object-cover block" src={imgImg3993} />
            </div>
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Hero row */}
          <div className="flex items-center pl-[32px] gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col items-start py-[64px] shrink-0 max-w-[453px]">
              <p className="font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic text-[46.2px] text-black w-[461px]">Shaping Stockholm Xperience Conference 2023</p>
              <div className="pt-[48px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[40.9px] not-italic text-[22.7px] text-black w-[461px]">Worked on the branding and all the material for Stockholm Xperience Conference 2023. In a small team we looked at all the branding material, and applied it to everything digital and print.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="Cover" className="absolute inset-0 w-full h-full object-cover" src={imgCover} />
            </div>
          </div>
          {/* Tinted */}
          <div className="bg-[#fafafa] py-[80px] pb-[104px] mt-0 flex justify-center px-[24px]">
            <div className="">
              <div className="font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full max-w-[453px]">
                <p className="leading-[28.8px] mb-0">The STHLM Xperience Conference, hosted by Zington, is an engaging event featuring lectures, hands-on advice, and interactive workshops, all designed to commemorate World Usability Day. Each year, the conference aligns with the theme set forth by the World Usability Day Committee. In 2023, the theme was "Collaboration and Cooperation".</p>
                <p className="leading-[28.8px]">{`. Together we shaped the conference's branding and all of the material. Our primary focus was to uphold the established conference branding guidelines while incorporating design elements that portrayed the year's essence.`}</p>
              </div>
            </div>
          </div>
          {/* Sxc1 full width */}
          <div className="px-[32px] pt-[48px]">
            <div className="w-full aspect-[19/10] relative">
              <img alt="SXC 1" className="absolute inset-0 w-full h-full object-cover" src={imgSxc1} />
            </div>
          </div>
          {/* Colors text */}
          <div className="flex justify-center px-[24px] pt-[112px]">
            <p className="font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full max-w-[453px]">
              <span className="leading-[28.8px]">{`We thought more playful colors are more collaborative, and we put alot of work into finding the correct ones that worked well. Also, we chose colors that could work together, with a few rules, and still bli fine the `}</span>
              <span className="font-['Poppins:Bold',sans-serif] leading-[28.8px]">WCAG 2.1 AA</span>
              <span className="leading-[28.8px]">{` standards.`}</span>
            </p>
          </div>
          {/* Typography row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[96px] w-full overflow-hidden">
            <div className="flex flex-col items-start pt-[208px] shrink-0">
              <p className="font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic text-[46.2px] text-black w-[461px]">Typography</p>
              <div className="pt-[32px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[461px]">We chose Futura for our headers, and Barlow for smaller texts.</p>
              </div>
              <div className="pt-[16px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[461px]">My initial thought was that they looked kind of similar and it would cause a problem, but it turned out great!</p>
              </div>
              <div className="pt-[16px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[461px]">The smallest size we used was Barlow in 16 pixels.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="SXC 2" className="absolute inset-0 w-full h-full object-cover" src={imgSxc2} />
            </div>
          </div>
          {/* Sxc4 */}
          <div className="px-[32px] pt-[48px]">
            <div className="w-full aspect-[19/10] relative">
              <img alt="SXC 4" className="absolute inset-0 w-full h-full object-cover" src={imgSxc4} />
            </div>
          </div>
          {/* Sxc5 */}
          <div className="px-[32px] pt-[48px]">
            <div className="w-full aspect-[19/10] relative">
              <img alt="SXC 5" className="absolute inset-0 w-full h-full object-cover" src={imgSxc5} />
            </div>
          </div>
          {/* Social media row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[120px] w-full overflow-hidden">
            <div className="flex flex-col items-start py-[64px] shrink-0 justify-center">
              <p className="font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-[461px]">Social media</p>
              <div className="pt-[40px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[461px]">To work with all the colours and get it really playful, we early on created a system for when and what should be released.</p>
              </div>
              <div className="pt-[32px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[461px]">We tried to use the colours differently but in an order that would make them seem more random and playful.</p>
              </div>
              <div className="pt-[0px]">
                <p className="font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[461px]">¨This also applies to the forms, hands and typography.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="SXC 6" className="absolute inset-0 w-full h-full object-cover" src={imgSxc6} />
            </div>
          </div>
          {/* Event photos */}
          <div className="px-[32px] flex flex-col gap-[48px]">
            <div className="w-full aspect-[16/9] relative">
              <img alt="Event photo 1" className="absolute inset-0 w-full h-full object-cover" src={imgImg3981} />
            </div>
            <div className="w-full aspect-[16/9] relative">
              <img alt="Event photo 2" className="absolute inset-0 w-full h-full object-cover" src={imgImg3973} />
            </div>
            <img alt="Event photo 3" className="w-full aspect-[16/9] object-cover" src={imgImg3974} />
            <img alt="Event photo 4" className="w-full aspect-[16/9] object-cover" src={imgImg3978} />
            <img alt="Event photo 5" className="w-full aspect-[16/9] object-cover" src={imgFoto} />
            <div className="w-full aspect-[16/9] relative">
              <img alt="Event photo 6" className="absolute inset-0 w-full h-full object-cover" src={imgImg3993} />
            </div>
          </div>
        </div>

        <div className="h-16 md:h-24" />
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile */}
        <div className="md:hidden h-[393px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[23px] top-[97px] text-[29px] leading-[41.4px] not-italic whitespace-nowrap">Johan Branzell</p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[23px] top-[167px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">E-mail me</p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[23px] top-[212px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">johanbranzell@gmail.com</p>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between px-[29px] h-[270px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[36.2px] leading-[51.6px] not-italic whitespace-nowrap">Johan Branzell</p>
          <div className="flex flex-col items-end">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">E-mail me</p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">johanbranzell@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
