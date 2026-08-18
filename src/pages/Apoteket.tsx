import imgHero from "@/imports/DesktopApoteket/b079120a7cf9ab751dbac5f7444e8090ba131c43.png";
import imgApoteket1 from "@/imports/DesktopApoteket/71d519e7e5ef3db0f3836a4aab9b2515750e981a.png";
import imgApoteket2 from "@/imports/DesktopApoteket/56aafac178855a68c71a869a2ad5782314890089.png";
import imgApoteket3 from "@/imports/DesktopApoteket/b8b4eee4262e3fbdd414d521626f5336d905ae96.png";
import imgApoteket6 from "@/imports/DesktopApoteket/88a8efbc1f8e8223ed6ce958e7ec50c1aeabb57f.png";
import imgApoteket5 from "@/imports/DesktopApoteket/b3c71438488865f315ba34f4416f469ecfbd5702.png";
import imgApoteket7 from "@/imports/DesktopApoteket/7b2685f9475edc49b8a8efd052c141baa9ca4557.png";
import imgApoteket4 from "@/imports/DesktopApoteket/43b68c5c4d0c064ca6309a5c34eb6c6e087d1976.png";
import type { Page } from "@/App";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function Apoteket({ onNavigate }: Props) {
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
          {/* Title */}
          <div className="px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[63.9px] not-italic text-[48.4px] text-black w-full">UI/UX Designer at Apoteket</p>
          </div>

          {/* Hero image — full bleed */}
          <div className="w-full">
            <div className="w-full aspect-[390/339]">
              <img alt="" className="w-full h-full object-cover block" src={imgHero} />
            </div>
          </div>

          {/* Intro text */}
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[36.6px] not-italic text-[20.3px] text-black w-full">Apoteket AB has high demands on sales, availability and the need to be visible on the web. My assignment was to collect graphic expressions and components and to continuously update the web to improve the customer experience. During my stay we created a Design System, WCAG AA 2.1 complient.</p>
          </div>

          {/* Tinted section */}
          <div className="bg-[#fafafa] flex flex-col items-start py-[32px] w-full mt-[0px]">
            <div className="pl-[24px]">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black tracking-[-0.016px] w-full">{`The work took place on an ongoing basis together with product owners, UX designers and developers in Apoteket's online team.`}</p>
            </div>
            <div className="px-[24px] pt-[48px]">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">It included developing the visual for functionality. Johan also developed components, a design system, so that Apoteket has a mor cohert expression. With this became easier for the entire development team to work more precisely with the visuals around functionality.</p>
            </div>
          </div>

          {/* After tinted */}
          <div className="px-[24px] pt-[16px] pb-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">{`Johan developed new design for the digital channels with WCAG complient colors that followed in line with Apoteket's other graphical expressions. He was also responsible for the design and customer experience for the checkout.`}</p>
          </div>

          {/* The Challenge */}
          <div className="flex flex-col gap-[16px] items-start py-[8px] w-full">
            <div className="pl-[24px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">The Challenge</p>
            </div>
            <div className="flex flex-col w-full">
              {[
                "The site had a lot of Inconsistent behaviors and graphical expressions",
                "It was not very accessible",
                "There was a lot of different variations of links, buttons and signs.",
                "Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.",
                "Besides me, we had one more designer who was working 50% on the website and 50% on marketing. So we had to find a smart way to move forward.",
              ].map((text, i) => (
                <div key={i} className={`pl-[40px]${i > 0 ? " pt-[8px]" : ""}`}>
                  <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
                    <li className="list-disc ms-[24px]"><span className="leading-[28.8px]">{text}</span></li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Apoteket 1 image */}
          <div className="w-full aspect-[390/292]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket1} />
          </div>

          {/* Initial Exploration */}
          <div className="px-[24px] pt-[24px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">Initial Exploration</p>
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full mt-[0px]">
              <p className="leading-[28.8px] mb-0">In order to create structure and create consistency, we needed to rework and apply new principles.</p>
              <p className="leading-[28.8px] mb-0">A design system would be perfect for this, But to get a quick start we had to have some general standards moving forward.</p>
              <p className="leading-[28.8px]">So I created a manual (which then the design system was built upon) with fixed rules for elements such as:</p>
            </div>
          </div>
          <div className="flex flex-col pt-[16px] pb-[8px] w-full">
            {["Typography", "Buttons", "Links", "Global messages", "Tabs"].map((text, i) => (
              <div key={i} className={`pl-[40px]${i > 0 ? " pt-[8px]" : ""}`}>
                <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
                  <li className="list-disc ms-[24px]"><span className="leading-[28.8px]">{text}</span></li>
                </ul>
              </div>
            ))}
          </div>

          {/* Apoteket 2 image */}
          <div className="w-full aspect-[390/392]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket2} />
          </div>

          {/* The Design System */}
          <div className="px-[24px] pt-[24px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">The Design System</p>
          </div>
          <div className="px-[24px] pt-[24px]">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
              <p className="leading-[28.8px] mb-0">The design system had to be very clear what it was for and how it should be implemented.</p>
              <p className="leading-[28.8px]">We used Material Design as a foundation,</p>
            </div>
          </div>

          {/* Apoteket 3 image */}
          <div className="w-full mt-4 aspect-[390/339]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket3} />
          </div>

          {/* Brand guidelines */}
          <div className="px-[24px] pt-[24px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">The website didn{"'"}t follow the brand guidelines</p>
          </div>
          <div className="px-[24px] pt-[8px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">The website was in other words looking one way, while the stores and products looked completely different.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">We decided that each new component should follow the new guidelines, introducing the new design in the new flows, carefully though so it didn{"'"}t feel to unnatrual.</p>
          </div>

          {/* Apoteket 6 image */}
          <div className="w-full mt-4 aspect-[390/214]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket6} />
          </div>

          {/* Creating consistency */}
          <div className="px-[24px] pt-[24px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">Creating consistenty</p>
          </div>
          <div className="px-[24px] pt-[24px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">One of the challenges was that there was a lot of different expressions on the website. The Design System could easily take height for this.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full">We made it easy to get an overview of all the components so that the website could keep it{"'"}s structure and consistent behaviour.</p>
          </div>

          {/* Apoteket 5 image */}
          <div className="w-full mt-2 aspect-[390/376]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket5} />
          </div>

          {/* The checkout */}
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">The checkout</p>
          </div>
          <div className="pl-[24px]">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
              <p className="leading-[28.8px] mb-0">A big challenge was working with the checkout, as prescription laws and rules affects shipping.</p>
              <p className="leading-[28.8px]">We also used third party apps for delivery and payment, which had a few limitations and couldn{"'"}t always work togheter.</p>
            </div>
          </div>

          {/* Apoteket 7 image */}
          <div className="w-full aspect-[390/199]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket7} />
          </div>

          {/* How We Implemented */}
          <div className="px-[24px] pt-[30px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic text-[29px] text-black w-full">How We Implemented New Design</p>
          </div>
          <div className="px-[24px] pt-[8px]">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full">
              <p className="leading-[28.8px] mb-0">Besides continuously working on the design system, I also worked with the digital services. Taking on new initiatives and working with the developers in a Scrum team.</p>
              <p className="leading-[28.8px] mb-0">This way the system could be implemented step by step.</p>
              <p className="leading-[28.8px] mb-0">We also found new ways along the way working together, to reassure the design was implemented in the correct way.</p>
              <p className="leading-[28.8px]">I saw the need to follow the WCAG 2.1 AA guidelines, so we made sure the new design and code was accessible.</p>
            </div>
          </div>

          {/* Apoteket 4 image */}
          <div className="w-full aspect-[390/389]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket4} />
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Hero row: text left, image right */}
          <div className="flex items-center pl-[32px] gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[87.6px] not-italic text-[66.4px] text-black w-[512px]">UI/UX Designer at Apoteket</p>
              <div className="pt-[32px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[40.9px] not-italic text-[22.7px] text-black w-full max-w-[453px]">Apoteket AB has high demands on sales, availability and the need to be visible on the web. My assignment was to collect graphic expressions and components and to continuously update the web to improve the customer experience. During my stay we created a Design System, WCAG AA 2.1 complient.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHero} />
            </div>
          </div>

          {/* Tinted section */}
          <div className="bg-[#fafafa] flex justify-center py-[48px] px-[24px] w-full">
            <div className="w-full max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black">{`The work took place on an ongoing basis together with product owners, UX designers and developers in Apoteket's online team.`}</p>
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black mt-[16px]">It included developing the visual for functionality. Johan also developed components, a design system, so that Apoteket has a mor cohert expression. With this became easier for the entire development team to work more precisely with the visuals around functionality.</p>
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black mt-[16px]">{`Johan developed new design for the digital channels with WCAG complient colors that followed in line with Apoteket's other graphical expressions. He was also responsible for the design and customer experience for the checkout.`}</p>
            </div>
          </div>

          {/* The Challenge row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[88px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">The Challenge</p>
              {[
                { text: "The site had a lot of Inconsistent behaviors and graphical expressions", pt: "pt-[40px]" },
                { text: "It was not very accessible", pt: "pt-[8px]" },
                { text: "There was a lot of different variations of links, buttons and signs.", pt: "pt-[8px]" },
                { text: "Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.", pt: "pt-[8px]" },
                { text: "Besides me, we had one more designer who was working 50% on the website and 50% on marketing. So we had to find a smart way to move forward.", pt: "pt-[8px]" },
              ].map(({ text, pt }, i) => (
                <div key={i} className={`pl-[16px] ${pt}`}>
                  <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-[437px]">
                    <li className="list-disc ms-[24px]"><span className="leading-[28.8px]">{text}</span></li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket1} />
            </div>
          </div>

          {/* Initial Exploration row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">Initial Exploration</p>
              <div className="pt-[32px]">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full max-w-[453px]">
                  <p className="leading-[28.8px] mb-0">In order to create structure and create consistency, we needed to rework and apply new principles.</p>
                  <p className="leading-[28.8px] mb-0">A design system would be perfect for this, But to get a quick start we had to have some general standards moving forward.</p>
                  <p className="leading-[28.8px]">So I created a manual (which then the design system was built upon) with fixed rules for elements such as:</p>
                </div>
              </div>
              {[
                { text: "Typography", pt: "pt-[88px]" },
                { text: "Buttons", pt: "pt-[8px]" },
                { text: "Links", pt: "pt-[8px]" },
                { text: "Global messages", pt: "pt-[8px]" },
                { text: "Tabs", pt: "pt-[8px]" },
              ].map(({ text, pt }, i) => (
                <div key={i} className={`pl-[16px] ${pt}`}>
                  <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-[437px]">
                    <li className="list-disc ms-[24px]"><span className="leading-[28.8px]">{text}</span></li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket2} />
            </div>
          </div>

          {/* The Design System row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">The Design System</p>
              <div className="pt-[32px]">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full max-w-[453px]">
                  <p className="leading-[28.8px] mb-0">The design system had to be very clear what it was for and how it should be implemented.</p>
                  <p className="leading-[28.8px]">We used Material Design as a foundation,</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket3} />
            </div>
          </div>

          {/* Brand guidelines row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[96px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">The website didn{"'"}t follow the brand guidelines</p>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">The website was in other words looking one way, while the stores and products looked completely different.</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">We decided that each new component should follow the new guidelines, introducing the new design in the new flows, carefully though so it didn{"'"}t feel to unnatrual.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket6} />
            </div>
          </div>

          {/* Creating consistency row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[176px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">Creating consistenty</p>
              <div className="pt-[32px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">One of the challenges was that there was a lot of different expressions on the website. The Design System could easily take height for this.</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">We made it easy to get an overview of all the components so that the website could keep it{"'"}s structure and consistent behaviour.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket5} />
            </div>
          </div>

          {/* The checkout row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">The checkout</p>
              <div className="pt-[32px]">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black w-full max-w-[453px]">
                  <p className="leading-[28.8px] mb-0">A big challenge was working with the checkout, as prescription laws and rules affects shipping.</p>
                  <p className="leading-[28.8px]">We also used third party apps for delivery and payment, which had a few limitations and couldn{"'"}t always work togheter.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket7} />
            </div>
          </div>

          {/* How We Implemented row */}
          <div className="flex items-center pl-[32px] gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic text-[36.2px] text-black w-full max-w-[453px]">How We Implemented New Design</p>
              <div className="pt-[16px]">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-[16px] text-black tracking-[-0.016px] w-full max-w-[453px]">
                  <p className="leading-[28.8px] mb-0">Besides continuously working on the design system, I also worked with the digital services. Taking on new initiatives and working with the developers in a Scrum team.</p>
                  <p className="leading-[28.8px] mb-0">This way the system could be implemented step by step.</p>
                  <p className="leading-[28.8px] mb-0">We also found new ways along the way working together, to reassure the design was implemented in the correct way.</p>
                  <p className="leading-[28.8px]">I saw the need to follow the WCAG 2.1 AA guidelines, so we made sure the new design and code was accessible.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket4} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile footer */}
        <div className="md:hidden h-[393px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[23px] top-[97px] text-[29px] leading-[41.4px] not-italic whitespace-nowrap">Johan Branzell</p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[23px] top-[167px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">E-mail me</p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[23px] top-[212px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">johanbranzell@gmail.com</p>
        </div>
        {/* Desktop footer */}
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
