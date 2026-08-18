import imgImageTestingapoteketPng from "./b079120a7cf9ab751dbac5f7444e8090ba131c43.png";
import imgImageApoteket1Png from "./71d519e7e5ef3db0f3836a4aab9b2515750e981a.png";
import imgImageApoteket2Png from "./56aafac178855a68c71a869a2ad5782314890089.png";
import imgImageApoteket3Png from "./b8b4eee4262e3fbdd414d521626f5336d905ae96.png";
import imgImageApoteket6Png from "./88a8efbc1f8e8223ed6ce958e7ec50c1aeabb57f.png";
import imgImageApoteket5Png from "./b3c71438488865f315ba34f4416f469ecfbd5702.png";
import imgImageApoteket7Png from "./7b2685f9475edc49b8a8efd052c141baa9ca4557.png";
import imgImageApoteket4Png from "./43b68c5c4d0c064ca6309a5c34eb6c6e087d1976.png";

function Header() {
  return (
    <div className="[word-break:break-word] h-[164px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Header">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[49.2px] left-[29px] text-[32.8px] top-[59px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[651px] text-[16px] top-[66px]">Home</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[744px] text-[16px] top-[66px]">About</p>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[87.6px] not-italic relative shrink-0 text-[66.4px] text-black w-[512px]">UI/UX Designer at Apoteket</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[40.9px] not-italic relative shrink-0 text-[22.7px] text-black w-[453px]">Apoteket AB has high demands on sales, availability and the need to be visible on the web. My assignment was to collect graphic expressions and components and to continuously update the web to improve the customer experience. During my stay we created a Design System, WCAG AA 2.1 complient.</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[144px] relative shrink-0" data-name="Column">
      <Block />
      <Block1 />
    </div>
  );
}

function ImageTestingapoteketPng() {
  return (
    <div className="h-[857px] relative shrink-0 w-[715px]" data-name="Image · testingapoteket.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTestingapoteketPng} />
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageTestingapoteketPng />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[184px] relative shrink-0" data-name="Column">
      <Block2 />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] relative size-full">
        <Column />
        <Column1 />
      </div>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[1034px]">{`The work took place on an ongoing basis together with product owners, UX designers and developers in Apoteket's online team.`}</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[200px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[1034px]">It included developing the visual for functionality. Johan also developed components, a design system, so that Apoteket has a mor cohert expression. With this became easier for the entire development team to work more precisely with the visuals around functionality.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[200px] pt-[16px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[1034px]">{`Johan developed new design for the digital channels with WCAG complient colors that followed in line with Apoteket's other graphical expressions. He was also responsible for the design and customer experience for the checkout.`}</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[200px] pt-[16px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function SectionTinted() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start py-[48px] relative shrink-0 w-full" data-name="Section · tinted">
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">The Challenge</p>
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[40px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">The site had a lot of Inconsistent behaviors and graphical expressions</span>
        </li>
      </ul>
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">It was not very accessible</span>
        </li>
      </ul>
    </div>
  );
}

function Block9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">There was a lot of different variations of links, buttons and signs.</span>
        </li>
      </ul>
    </div>
  );
}

function Block10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</span>
        </li>
      </ul>
    </div>
  );
}

function Block11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Besides me, we had one more designer who was working 50% on the website and 50% on marketing. So we had to find a smart way to move forward.</span>
        </li>
      </ul>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="Column">
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
      <Block11 />
    </div>
  );
}

function ImageApoteket1Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 1.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket1Png} />
    </div>
  );
}

function Block12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket1Png />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block12 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[88px] relative size-full">
        <Column5 />
        <Column6 />
      </div>
    </div>
  );
}

function Block13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">Initial Exploration</p>
    </div>
  );
}

function Block14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[453px]">
        <p className="leading-[28.8px] mb-0">In order to create structure and create consistency, we needed to rework and apply new principles.</p>
        <p className="leading-[28.8px] mb-0">A design system would be perfect for this, But to get a quick start we had to have some general standards moving forward.</p>
        <p className="leading-[28.8px]">So I created a manual (which then the design system was built upon) with fixed rules for elements such as:</p>
      </div>
    </div>
  );
}

function Block15() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[88px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Typography</span>
        </li>
      </ul>
    </div>
  );
}

function Block16() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Buttons</span>
        </li>
      </ul>
    </div>
  );
}

function Block17() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Links</span>
        </li>
      </ul>
    </div>
  );
}

function Block18() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Global messages</span>
        </li>
      </ul>
    </div>
  );
}

function Block19() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] pt-[8px] relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[437px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Tabs</span>
        </li>
      </ul>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="Column">
      <Block13 />
      <Block14 />
      <Block15 />
      <Block16 />
      <Block17 />
      <Block18 />
      <Block19 />
    </div>
  );
}

function ImageApoteket2Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket2Png} />
    </div>
  );
}

function Block20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket2Png />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block20 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[136px] relative size-full">
        <Column7 />
        <Column8 />
      </div>
    </div>
  );
}

function Block21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">The Design System</p>
    </div>
  );
}

function Block22() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[453px]">
        <p className="leading-[28.8px] mb-0">The design system had to be very clear what it was for and how it should be implemented.</p>
        <p className="leading-[28.8px]">We used Material Design as a foundation,</p>
      </div>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="Column">
      <Block21 />
      <Block22 />
    </div>
  );
}

function ImageApoteket3Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 3.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket3Png} />
    </div>
  );
}

function Block23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket3Png />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block23 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[136px] relative size-full">
        <Column9 />
        <Column10 />
      </div>
    </div>
  );
}

function Block24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">The website didn’t follow the brand guidelines</p>
    </div>
  );
}

function Block25() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</p>
    </div>
  );
}

function Block26() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">The website was in other words looking one way, while the stores and products looked completely different.</p>
    </div>
  );
}

function Block27() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">We decided that each new component should follow the new guidelines, introducing the new design in the new flows, carefully though so it didn’t feel to unnatrual.</p>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[160px] relative shrink-0" data-name="Column">
      <Block24 />
      <Block25 />
      <Block26 />
      <Block27 />
    </div>
  );
}

function ImageApoteket6Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 6.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket6Png} />
    </div>
  );
}

function Block28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket6Png />
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block28 />
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column11 />
        <Column12 />
      </div>
    </div>
  );
}

function Block29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">Creating consistenty</p>
    </div>
  );
}

function Block30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">One of the challenges was that there was a lot of different expressions on the website. The Design System could easily take height for this.</p>
    </div>
  );
}

function Block31() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">We made it easy to get an overview of all the components so that the website could keep it’s structure and consistent behaviour.</p>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="Column">
      <Block29 />
      <Block30 />
      <Block31 />
    </div>
  );
}

function ImageApoteket5Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 5.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket5Png} />
    </div>
  );
}

function Block32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Block">
      <ImageApoteket5Png />
    </div>
  );
}

function Column14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Column">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pl-[248px] relative size-full">
          <Block32 />
        </div>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[176px] relative size-full">
        <Column13 />
        <Column14 />
      </div>
    </div>
  );
}

function Block33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">The checkout</p>
    </div>
  );
}

function Block34() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[453px]">
        <p className="leading-[28.8px] mb-0">A big challenge was working with the checkout, as prescription laws and rules affects shipping.</p>
        <p className="leading-[28.8px]">We also used third party apps for delivery and payment, which had a few limitations and couldn’t always work togheter.</p>
      </div>
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="Column">
      <Block33 />
      <Block34 />
    </div>
  );
}

function ImageApoteket7Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 7.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket7Png} />
    </div>
  );
}

function Block35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket7Png />
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Column">
      <Block35 />
    </div>
  );
}

function Row9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[136px] relative size-full">
        <Column15 />
        <Column16 />
      </div>
    </div>
  );
}

function Block36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[453px]">How We Implemented New Design</p>
    </div>
  );
}

function Block37() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.016px] w-[453px]">
        <p className="leading-[28.8px] mb-0">Besides continuously working on the design system, I also worked with the digital services. Taking on new initiatives and working with the developers in a Scrum team.</p>
        <p className="leading-[28.8px] mb-0">This way the system could be implemented step by step.</p>
        <p className="leading-[28.8px] mb-0">We also found new ways along the way working together, to reassure the design was implemented in the correct way.</p>
        <p className="leading-[28.8px]">I saw the need to follow the WCAG 2.1 AA guidelines, so we made sure the new design and code was accessible.</p>
      </div>
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[120px] relative shrink-0" data-name="Column">
      <Block36 />
      <Block37 />
    </div>
  );
}

function ImageApoteket4Png() {
  return (
    <div className="h-[844px] relative shrink-0 w-[715px]" data-name="Image · Apoteket 4.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket4Png} />
    </div>
  );
}

function Block38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Block">
      <ImageApoteket4Png />
    </div>
  );
}

function Column18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Column">
      <Block38 />
    </div>
  );
}

function Row10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[136px] relative size-full">
        <Column17 />
        <Column18 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <SectionTinted />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[270px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[51.6px] left-[29px] text-[36.2px] top-[100px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[100px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[145px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function DesktopApoteket() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Apoteket">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}