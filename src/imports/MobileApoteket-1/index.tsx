import imgImageTestingapoteketPng from "./b079120a7cf9ab751dbac5f7444e8090ba131c43.png";
import imgImageApoteket1Png from "./71d519e7e5ef3db0f3836a4aab9b2515750e981a.png";
import imgImageApoteket2Png from "./56aafac178855a68c71a869a2ad5782314890089.png";
import imgImageApoteket3Png from "./b8b4eee4262e3fbdd414d521626f5336d905ae96.png";
import imgImageApoteket6Png from "./88a8efbc1f8e8223ed6ce958e7ec50c1aeabb57f.png";
import imgImageApoteket5Png from "./b3c71438488865f315ba34f4416f469ecfbd5702.png";
import imgImageApoteket7Png from "./7b2685f9475edc49b8a8efd052c141baa9ca4557.png";
import imgImageApoteket4Png from "./43b68c5c4d0c064ca6309a5c34eb6c6e087d1976.png";

function Frame3() {
  return (
    <div className="content-stretch flex font-['Poppins:Light',sans-serif] items-center justify-between leading-[28.8px] relative shrink-0 w-[141px]">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">About</p>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[16px] py-[26px] relative size-full text-[16px] text-black whitespace-nowrap">
          <p className="font-['Poppins:Medium',sans-serif] leading-[24px] relative shrink-0">Johan Branzell</p>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[63.9px] not-italic relative shrink-0 text-[48.4px] text-black w-[255px]">UI/UX Designer at Apoteket</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block />
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[32px] relative size-full">
        <Column />
      </div>
    </div>
  );
}

function ImageTestingapoteketPng() {
  return (
    <div className="h-[339px] relative shrink-0 w-[390px]" data-name="Image · testingapoteket.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTestingapoteketPng} />
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[36.6px] not-italic relative shrink-0 text-[20.3px] text-black w-[343px]">Apoteket AB has high demands on sales, availability and the need to be visible on the web. My assignment was to collect graphic expressions and components and to continuously update the web to improve the customer experience. During my stay we created a Design System, WCAG AA 2.1 complient.</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column1 />
      </div>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.016px] w-[343px]">{`The work took place on an ongoing basis together with product owners, UX designers and developers in Apoteket's online team.`}</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">It included developing the visual for functionality. Johan also developed components, a design system, so that Apoteket has a mor cohert expression. With this became easier for the entire development team to work more precisely with the visuals around functionality.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[48px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function SectionTinted() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start py-[32px] relative shrink-0 w-full" data-name="Section · tinted">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">{`Johan developed new design for the digital channels with WCAG complient colors that followed in line with Apoteket's other graphical expressions. He was also responsible for the design and customer experience for the checkout.`}</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block4 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pb-[32px] pl-[24px] pt-[16px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">The site had a lot of Inconsistent behaviors and graphical expressions</span>
        </li>
      </ul>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start pl-[40px] relative shrink-0 w-full" data-name="Row">
      <Column5 />
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">It was not very accessible</span>
        </li>
      </ul>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block6 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column6 />
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">There was a lot of different variations of links, buttons and signs.</span>
        </li>
      </ul>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column7 />
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</span>
        </li>
      </ul>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block8 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column8 />
    </div>
  );
}

function Block9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Besides me, we had one more designer who was working 50% on the website and 50% on marketing. So we had to find a smart way to move forward.</span>
        </li>
      </ul>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block9 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column9 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[8px] relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">The Challenge</p>
      <Frame />
    </div>
  );
}

function ImageApoteket1Png() {
  return (
    <div className="h-[292px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.56%] left-0 max-w-none top-[-8.73%] w-full" src={imgImageApoteket1Png} />
      </div>
    </div>
  );
}

function Block10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket1Png />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block10 />
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column10 />
    </div>
  );
}

function Block12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">Initial Exploration</p>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block12 />
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column12 />
    </div>
  );
}

function Block11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Row12 />
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[343px]">
        <p className="leading-[28.8px] mb-0">In order to create structure and create consistency, we needed to rework and apply new principles.</p>
        <p className="leading-[28.8px] mb-0">A design system would be perfect for this, But to get a quick start we had to have some general standards moving forward.</p>
        <p className="leading-[28.8px]">So I created a manual (which then the design system was built upon) with fixed rules for elements such as:</p>
      </div>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block11 />
    </div>
  );
}

function Row11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[24px] relative size-full">
        <Column11 />
      </div>
    </div>
  );
}

function Block13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Typography</span>
        </li>
      </ul>
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block13 />
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex items-start pl-[40px] relative shrink-0 w-full" data-name="Row">
      <Column13 />
    </div>
  );
}

function Block14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Buttons</span>
        </li>
      </ul>
    </div>
  );
}

function Column14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block14 />
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column14 />
    </div>
  );
}

function Block15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Links</span>
        </li>
      </ul>
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block15 />
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column15 />
    </div>
  );
}

function Block16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Global messages</span>
        </li>
      </ul>
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block16 />
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column16 />
    </div>
  );
}

function Block17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ul className="[word-break:break-word] block font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[327px]">
        <li className="list-disc ms-[24px]">
          <span className="leading-[28.8px]">Tabs</span>
        </li>
      </ul>
    </div>
  );
}

function Column17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block17 />
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex items-start pl-[40px] pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column17 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-[16px] relative shrink-0 w-full">
      <Row13 />
      <Row14 />
      <Row15 />
      <Row16 />
      <Row17 />
    </div>
  );
}

function ImageApoteket2Png() {
  return (
    <div className="h-[392px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.49%] left-0 max-w-none top-[0.38%] w-full" src={imgImageApoteket2Png} />
      </div>
    </div>
  );
}

function Block18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket2Png />
    </div>
  );
}

function Column18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block18 />
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column18 />
    </div>
  );
}

function Block19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">The Design System</p>
    </div>
  );
}

function Column19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block19 />
    </div>
  );
}

function Row19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[24px] relative size-full">
        <Column19 />
      </div>
    </div>
  );
}

function Block20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[343px]">
        <p className="leading-[28.8px] mb-0">The design system had to be very clear what it was for and how it should be implemented.</p>
        <p className="leading-[28.8px]">We used Material Design as a foundation,</p>
      </div>
    </div>
  );
}

function Column20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block20 />
    </div>
  );
}

function Row20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[24px] relative size-full">
        <Column20 />
      </div>
    </div>
  );
}

function ImageApoteket3Png() {
  return (
    <div className="h-[339px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 3.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageApoteket3Png} />
    </div>
  );
}

function Block21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket3Png />
    </div>
  );
}

function Column21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block21 />
    </div>
  );
}

function Row21() {
  return (
    <div className="content-stretch flex items-start pt-[16px] relative shrink-0 w-full" data-name="Row">
      <Column21 />
    </div>
  );
}

function Block22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">The website didn’t follow the brand guidelines</p>
    </div>
  );
}

function Column22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block22 />
    </div>
  );
}

function Row22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[24px] relative size-full">
        <Column22 />
      </div>
    </div>
  );
}

function Block23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">Apoteket had a beautiful new graphic profile which unfortunately neither the website or app followed.</p>
    </div>
  );
}

function Column23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block23 />
    </div>
  );
}

function Row23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[8px] relative size-full">
        <Column23 />
      </div>
    </div>
  );
}

function Block24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">The website was in other words looking one way, while the stores and products looked completely different.</p>
    </div>
  );
}

function Column24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block24 />
    </div>
  );
}

function Row24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column24 />
      </div>
    </div>
  );
}

function Block25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">We decided that each new component should follow the new guidelines, introducing the new design in the new flows, carefully though so it didn’t feel to unnatrual.</p>
    </div>
  );
}

function Column25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block25 />
    </div>
  );
}

function Row25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column25 />
      </div>
    </div>
  );
}

function ImageApoteket6Png() {
  return (
    <div className="h-[214px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 6.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[182.24%] left-0 max-w-none top-[-39.02%] w-full" src={imgImageApoteket6Png} />
      </div>
    </div>
  );
}

function Block26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket6Png />
    </div>
  );
}

function Column26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block26 />
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex items-start pt-[16px] relative shrink-0 w-full" data-name="Row">
      <Column26 />
    </div>
  );
}

function Block27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">Creating consistenty</p>
    </div>
  );
}

function Column27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block27 />
    </div>
  );
}

function Row27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[24px] relative size-full">
        <Column27 />
      </div>
    </div>
  );
}

function Block28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">One of the challenges was that there was a lot of different expressions on the website. The Design System could easily take height for this.</p>
    </div>
  );
}

function Column28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block28 />
    </div>
  );
}

function Row28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[24px] relative size-full">
        <Column28 />
      </div>
    </div>
  );
}

function Block29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">We made it easy to get an overview of all the components so that the website could keep it’s structure and consistent behaviour.</p>
    </div>
  );
}

function Column29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block29 />
    </div>
  );
}

function Row29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column29 />
      </div>
    </div>
  );
}

function ImageApoteket5Png() {
  return (
    <div className="h-[376px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 5.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.72%] left-0 max-w-none top-[-0.93%] w-full" src={imgImageApoteket5Png} />
      </div>
    </div>
  );
}

function Block30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket5Png />
    </div>
  );
}

function Column30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block30 />
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex items-start pt-[8px] relative shrink-0 w-full" data-name="Row">
      <Column30 />
    </div>
  );
}

function Block31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">The checkout</p>
    </div>
  );
}

function Column31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block31 />
    </div>
  );
}

function Row31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column31 />
      </div>
    </div>
  );
}

function Block32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[343px]">
        <p className="leading-[28.8px] mb-0">A big challenge was working with the checkout, as prescription laws and rules affects shipping.</p>
        <p className="leading-[28.8px]">We also used third party apps for delivery and payment, which had a few limitations and couldn’t always work togheter.</p>
      </div>
    </div>
  );
}

function Column32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block32 />
    </div>
  );
}

function Row32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] relative size-full">
        <Column32 />
      </div>
    </div>
  );
}

function ImageApoteket7Png() {
  return (
    <div className="h-[199px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 7.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[195.98%] left-0 max-w-none top-[-48.49%] w-full" src={imgImageApoteket7Png} />
      </div>
    </div>
  );
}

function Block33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket7Png />
    </div>
  );
}

function Column33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block33 />
    </div>
  );
}

function Row33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column33 />
    </div>
  );
}

function Block34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[41.4px] not-italic relative shrink-0 text-[29px] text-black w-[255px]">How We Implemented New Design</p>
    </div>
  );
}

function Column34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block34 />
    </div>
  );
}

function Row34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[30px] relative size-full">
        <Column34 />
      </div>
    </div>
  );
}

function Block35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[343px]">
        <p className="leading-[28.8px] mb-0">Besides continuously working on the design system, I also worked with the digital services. Taking on new initiatives and working with the developers in a Scrum team.</p>
        <p className="leading-[28.8px] mb-0">This way the system could be implemented step by step.</p>
        <p className="leading-[28.8px] mb-0">We also found new ways along the way working together, to reassure the design was implemented in the correct way.</p>
        <p className="leading-[28.8px]">I saw the need to follow the WCAG 2.1 AA guidelines, so we made sure the new design and code was accessible.</p>
      </div>
    </div>
  );
}

function Column35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block35 />
    </div>
  );
}

function Row35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[24px] pt-[8px] relative size-full">
        <Column35 />
      </div>
    </div>
  );
}

function ImageApoteket4Png() {
  return (
    <div className="h-[389px] relative shrink-0 w-[390px]" data-name="Image · Apoteket 4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.26%] left-0 max-w-none top-[-0.13%] w-full" src={imgImageApoteket4Png} />
      </div>
    </div>
  );
}

function Block36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageApoteket4Png />
    </div>
  );
}

function Column36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block36 />
    </div>
  );
}

function Row36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column36 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <ImageTestingapoteketPng />
      <Row1 />
      <SectionTinted />
      <Row4 />
      <Frame1 />
      <Row10 />
      <Row11 />
      <Frame2 />
      <Row18 />
      <Row19 />
      <Row20 />
      <Row21 />
      <Row22 />
      <Row23 />
      <Row24 />
      <Row25 />
      <Row26 />
      <Row27 />
      <Row28 />
      <Row29 />
      <Row30 />
      <Row31 />
      <Row32 />
      <Row33 />
      <Row34 />
      <Row35 />
      <Row36 />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[393px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[41.4px] left-[23px] text-[29px] top-[97px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[167px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[23px] text-[16px] top-[212px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function MobileApoteket() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Apoteket">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}