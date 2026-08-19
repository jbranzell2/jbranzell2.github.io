import imgHero from "@/imports/DesktopApoteket/b079120a7cf9ab751dbac5f7444e8090ba131c43.avif";
import imgApoteket1 from "@/imports/DesktopApoteket/71d519e7e5ef3db0f3836a4aab9b2515750e981a.avif";
import imgApoteket2 from "@/imports/DesktopApoteket/56aafac178855a68c71a869a2ad5782314890089.avif";
import imgApoteket3 from "@/imports/DesktopApoteket/b8b4eee4262e3fbdd414d521626f5336d905ae96.avif";
import imgApoteket6 from "@/imports/DesktopApoteket/88a8efbc1f8e8223ed6ce958e7ec50c1aeabb57f.avif";
import imgApoteket5 from "@/imports/DesktopApoteket/b3c71438488865f315ba34f4416f469ecfbd5702.avif";
import imgApoteket7 from "@/imports/DesktopApoteket/7b2685f9475edc49b8a8efd052c141baa9ca4557.avif";
import imgApoteket4 from "@/imports/DesktopApoteket/43b68c5c4d0c064ca6309a5c34eb6c6e087d1976.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";

export default function Apoteket() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.99375rem] not-italic text-[3.025rem] text-black w-full">UI/UX Designer at Apoteket</p>
          </div>

          {/* Hero image — full bleed */}
          <div className="w-full">
            <HeroImage variant="mobile" src={imgHero} alt="" />
          </div>

          {/* Intro text */}
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.2875rem] not-italic text-[1.26875rem] text-black w-full">Apoteket AB has high demands on sales, availability and the need to be visible on the web. My assignment was to collect graphic expressions and components and to continuously update the web to improve the customer experience. During my stay we created a Design System, WCAG AA 2.1 complient.</p>
          </div>

          {/* Tinted section */}
          <div className="bg-[#fafafa] flex flex-col items-start py-8 w-full mt-0">
            <div className="pl-6">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black tracking-[-0.016px] w-full">{`The work took place on an ongoing basis together with product owners, UX designers and developers in Apoteket's online team.`}</p>
            </div>
            <div className="px-6 pt-12">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">It included developing the visual for functionality. Johan also developed components, a design system, so that Apoteket has a mor cohert expression. With this became easier for the entire development team to work more precisely with the visuals around functionality.</p>
            </div>
          </div>

          {/* After tinted */}
          <div className="px-6 pt-4 pb-8">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">{`Johan developed new design for the digital channels with WCAG complient colors that followed in line with Apoteket's other graphical expressions. He was also responsible for the design and customer experience for the checkout.`}</p>
          </div>

          {/* The Challenge */}
          <div className="flex flex-col gap-4 items-start py-2 w-full">
            <div className="pl-6">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">The Challenge</p>
            </div>
            <div className="flex flex-col w-full">
              {[
                "The site had a lot of Inconsistent behaviors and graphical expressions",
                "It was not very accessible",
                "There was a lot of different variations of links, buttons and signs.",
                "Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.",
                "Besides me, we had one more designer who was working 50% on the website and 50% on marketing. So we had to find a smart way to move forward.",
              ].map((text, i) => (
                <div key={i} className={`pl-[40px]${i > 0 ? " pt-2" : ""}`}>
                  <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full">
                    <li className="list-disc ms-[24px]"><span className="leading-[1.8rem]">{text}</span></li>
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
          <div className="px-6 pt-6">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">Initial Exploration</p>
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full mt-0">
              <p className="leading-[1.8rem] mb-0">In order to create structure and create consistency, we needed to rework and apply new principles.</p>
              <p className="leading-[1.8rem] mb-0">A design system would be perfect for this, But to get a quick start we had to have some general standards moving forward.</p>
              <p className="leading-[1.8rem]">So I created a manual (which then the design system was built upon) with fixed rules for elements such as:</p>
            </div>
          </div>
          <div className="flex flex-col pt-4 pb-2 w-full">
            {["Typography", "Buttons", "Links", "Global messages", "Tabs"].map((text, i) => (
              <div key={i} className={`pl-[40px]${i > 0 ? " pt-2" : ""}`}>
                <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full">
                  <li className="list-disc ms-[24px]"><span className="leading-[1.8rem]">{text}</span></li>
                </ul>
              </div>
            ))}
          </div>

          {/* Apoteket 2 image */}
          <div className="w-full aspect-[390/392]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket2} />
          </div>

          {/* The Design System */}
          <div className="px-6 pt-6">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">The Design System</p>
          </div>
          <div className="px-6 pt-6">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full">
              <p className="leading-[1.8rem] mb-0">The design system had to be very clear what it was for and how it should be implemented.</p>
              <p className="leading-[1.8rem]">We used Material Design as a foundation,</p>
            </div>
          </div>

          {/* Apoteket 3 image */}
          <div className="w-full mt-4 aspect-[390/339]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket3} />
          </div>

          {/* Brand guidelines */}
          <div className="px-6 pt-6">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">The website didn{"'"}t follow the brand guidelines</p>
          </div>
          <div className="px-6 pt-2">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">The website was in other words looking one way, while the stores and products looked completely different.</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">We decided that each new component should follow the new guidelines, introducing the new design in the new flows, carefully though so it didn{"'"}t feel to unnatrual.</p>
          </div>

          {/* Apoteket 6 image */}
          <div className="w-full mt-4 aspect-[390/214]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket6} />
          </div>

          {/* Creating consistency */}
          <div className="px-6 pt-6">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">Creating consistenty</p>
          </div>
          <div className="px-6 pt-6">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">One of the challenges was that there was a lot of different expressions on the website. The Design System could easily take height for this.</p>
          </div>
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full">We made it easy to get an overview of all the components so that the website could keep it{"'"}s structure and consistent behaviour.</p>
          </div>

          {/* Apoteket 5 image */}
          <div className="w-full mt-2 aspect-[390/376]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket5} />
          </div>

          {/* The checkout */}
          <div className="px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">The checkout</p>
          </div>
          <div className="pl-6">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full">
              <p className="leading-[1.8rem] mb-0">A big challenge was working with the checkout, as prescription laws and rules affects shipping.</p>
              <p className="leading-[1.8rem]">We also used third party apps for delivery and payment, which had a few limitations and couldn{"'"}t always work togheter.</p>
            </div>
          </div>

          {/* Apoteket 7 image */}
          <div className="w-full aspect-[390/199]">
            <img alt="" className="w-full h-full object-cover block" src={imgApoteket7} />
          </div>

          {/* How We Implemented */}
          <div className="px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[2.5875rem] not-italic text-[1.8125rem] text-black w-full">How We Implemented New Design</p>
          </div>
          <div className="px-6 pt-2">
            <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full">
              <p className="leading-[1.8rem] mb-0">Besides continuously working on the design system, I also worked with the digital services. Taking on new initiatives and working with the developers in a Scrum team.</p>
              <p className="leading-[1.8rem] mb-0">This way the system could be implemented step by step.</p>
              <p className="leading-[1.8rem] mb-0">We also found new ways along the way working together, to reassure the design was implemented in the correct way.</p>
              <p className="leading-[1.8rem]">I saw the need to follow the WCAG 2.1 AA guidelines, so we made sure the new design and code was accessible.</p>
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
          <div className="flex items-center pl-8 gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[5.475rem] not-italic text-[4.15rem] text-black w-[512px]">UI/UX Designer at Apoteket</p>
              <div className="pt-8">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[2.55625rem] not-italic text-[1.41875rem] text-black w-full max-w-[453px]">Apoteket AB has high demands on sales, availability and the need to be visible on the web. My assignment was to collect graphic expressions and components and to continuously update the web to improve the customer experience. During my stay we created a Design System, WCAG AA 2.1 complient.</p>
              </div>
            </div>
            <HeroImage variant="desktop" src={imgHero} alt="" />
          </div>

          {/* Tinted section */}
          <div className="bg-[#fafafa] w-screen mx-[calc(50%-50vw)] flex justify-center py-12 px-6">
            <div className="w-full max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black">{`The work took place on an ongoing basis together with product owners, UX designers and developers in Apoteket's online team.`}</p>
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black mt-4">It included developing the visual for functionality. Johan also developed components, a design system, so that Apoteket has a mor cohert expression. With this became easier for the entire development team to work more precisely with the visuals around functionality.</p>
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black mt-4">{`Johan developed new design for the digital channels with WCAG complient colors that followed in line with Apoteket's other graphical expressions. He was also responsible for the design and customer experience for the checkout.`}</p>
            </div>
          </div>

          {/* The Challenge row */}
          <div className="flex items-center pl-8 gap-[180px] pt-[88px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">The Challenge</p>
              {[
                { text: "The site had a lot of Inconsistent behaviors and graphical expressions", pt: "pt-10" },
                { text: "It was not very accessible", pt: "pt-2" },
                { text: "There was a lot of different variations of links, buttons and signs.", pt: "pt-2" },
                { text: "Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.", pt: "pt-2" },
                { text: "Besides me, we had one more designer who was working 50% on the website and 50% on marketing. So we had to find a smart way to move forward.", pt: "pt-2" },
              ].map(({ text, pt }, i) => (
                <div key={i} className={`pl-[16px] ${pt}`}>
                  <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-[437px]">
                    <li className="list-disc ms-[24px]"><span className="leading-[1.8rem]">{text}</span></li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket1} />
            </div>
          </div>

          {/* Initial Exploration row */}
          <div className="flex items-center pl-8 gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">Initial Exploration</p>
              <div className="pt-8">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full max-w-[453px]">
                  <p className="leading-[1.8rem] mb-0">In order to create structure and create consistency, we needed to rework and apply new principles.</p>
                  <p className="leading-[1.8rem] mb-0">A design system would be perfect for this, But to get a quick start we had to have some general standards moving forward.</p>
                  <p className="leading-[1.8rem]">So I created a manual (which then the design system was built upon) with fixed rules for elements such as:</p>
                </div>
              </div>
              {[
                { text: "Typography", pt: "pt-[88px]" },
                { text: "Buttons", pt: "pt-2" },
                { text: "Links", pt: "pt-2" },
                { text: "Global messages", pt: "pt-2" },
                { text: "Tabs", pt: "pt-2" },
              ].map(({ text, pt }, i) => (
                <div key={i} className={`pl-[16px] ${pt}`}>
                  <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-[437px]">
                    <li className="list-disc ms-[24px]"><span className="leading-[1.8rem]">{text}</span></li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket2} />
            </div>
          </div>

          {/* The Design System row */}
          <div className="flex items-center pl-8 gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">The Design System</p>
              <div className="pt-8">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full max-w-[453px]">
                  <p className="leading-[1.8rem] mb-0">The design system had to be very clear what it was for and how it should be implemented.</p>
                  <p className="leading-[1.8rem]">We used Material Design as a foundation,</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket3} />
            </div>
          </div>

          {/* Brand guidelines row */}
          <div className="flex items-center pl-8 gap-[180px] pt-24 w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">The website didn{"'"}t follow the brand guidelines</p>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The website was in other words looking one way, while the stores and products looked completely different.</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">We decided that each new component should follow the new guidelines, introducing the new design in the new flows, carefully though so it didn{"'"}t feel to unnatrual.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket6} />
            </div>
          </div>

          {/* Creating consistency row */}
          <div className="flex items-center pl-8 gap-[180px] pt-44 w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">Creating consistenty</p>
              <div className="pt-8">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">One of the challenges was that there was a lot of different expressions on the website. The Design System could easily take height for this.</p>
              </div>
              <div className="pt-4">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">We made it easy to get an overview of all the components so that the website could keep it{"'"}s structure and consistent behaviour.</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket5} />
            </div>
          </div>

          {/* The checkout row */}
          <div className="flex items-center pl-8 gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">The checkout</p>
              <div className="pt-8">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black w-full max-w-[453px]">
                  <p className="leading-[1.8rem] mb-0">A big challenge was working with the checkout, as prescription laws and rules affects shipping.</p>
                  <p className="leading-[1.8rem]">We also used third party apps for delivery and payment, which had a few limitations and couldn{"'"}t always work togheter.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket7} />
            </div>
          </div>

          {/* How We Implemented row */}
          <div className="flex items-center pl-8 gap-[180px] pt-[136px] w-full overflow-hidden">
            <div className="flex flex-col py-16 shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.225rem] not-italic text-[2.2625rem] text-black w-full max-w-[453px]">How We Implemented New Design</p>
              <div className="pt-4">
                <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic text-base text-black tracking-[-0.016px] w-full max-w-[453px]">
                  <p className="leading-[1.8rem] mb-0">Besides continuously working on the design system, I also worked with the digital services. Taking on new initiatives and working with the developers in a Scrum team.</p>
                  <p className="leading-[1.8rem] mb-0">This way the system could be implemented step by step.</p>
                  <p className="leading-[1.8rem] mb-0">We also found new ways along the way working together, to reassure the design was implemented in the correct way.</p>
                  <p className="leading-[1.8rem]">I saw the need to follow the WCAG 2.1 AA guidelines, so we made sure the new design and code was accessible.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgApoteket4} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
