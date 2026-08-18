import imgImageCoverPng from "./5cf916097d48060a2b988233659d2b11606df22f.png";
import imgImageSxc1Png from "./e347515b19e942034d84f0b4d711a483eb9ee66a.png";
import imgImageSxc2Png from "./0def1d1da99daa6cd3e2b2f7c817dcfb63c93197.png";
import imgImageSxc4Png from "./0fa407d37c82462e54b48109945f0070a1babd04.png";
import imgImageSxc5Png from "./7c73469602c4456be96a55a46a61321bba0f8129.png";
import imgImageSxc6Png from "./a164ca18fc2a5b471a458c25d7e5e843af6cc3bb.png";
import imgImageImg3981Jpg from "./d5d1c1045203ad381264530dca515eae0cff457d.png";
import imgImageImg3973Jpg from "./8be501f0591379a5e64e4fe8d160dea90752063b.png";
import imgImageImg3974Jpg from "./59c761dd5060921c2421ac29c212f27bfb264b66.png";
import imgImageImg3978Jpg from "./4242f5e400df023085891d03065a0ad66d081e63.png";
import imgImageFoto20231116Jpg from "./b85073b10959701a5c5497620b390884973f6179.png";
import imgImageImg3993Jpg from "./b88f5f6672b61de0994940a8e8d3e46cf8fe985b.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[461px]">Shaping Stockholm Xperience Conference 2023</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[40.9px] not-italic relative shrink-0 text-[22.7px] text-black w-[461px]">Worked on the branding and all the material for Stockholm Xperience Conference 2023. In a small team we looked at all the branding material, and applied it to everything digital and print.</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[136px] relative shrink-0" data-name="Column">
      <Block />
      <Block1 />
    </div>
  );
}

function ImageCoverPng() {
  return (
    <div className="h-[713px] relative shrink-0 w-[720px]" data-name="Image · Cover.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoverPng} />
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageCoverPng />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[232px] relative shrink-0" data-name="Column">
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

function Spacer() {
  return <div className="h-px relative shrink-0 w-full" data-name="Spacer" />;
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <div className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[686px]">
        <p className="leading-[28.8px] mb-0">The STHLM Xperience Conference, hosted by Zington, is an engaging event featuring lectures, hands-on advice, and interactive workshops, all designed to commemorate World Usability Day. Each year, the conference aligns with the theme set forth by the World Usability Day Committee. In 2023, the theme was “Collaboration and Cooperation”.</p>
        <p className="leading-[28.8px]">{`. Together we shaped the conference's branding and all of the material. Our primary focus was to uphold the established conference branding guidelines while incorporating design elements that portrayed the year's essence.`}</p>
      </div>
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
      <div className="content-stretch flex items-start pl-[376px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function SectionTinted() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start pb-[104px] pt-[80px] relative shrink-0 w-full" data-name="Section · tinted">
      <Row1 />
    </div>
  );
}

function ImageSxc1Png() {
  return (
    <div className="h-[757px] relative shrink-0 w-[1382px]" data-name="Image · Sxc 1.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSxc1Png} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSxc1Png />
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
      <div className="content-stretch flex items-start pl-[32px] pt-[48px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-[634px]">
        <span className="leading-[28.8px]">{`We thought more playful colors are more collaborative, and we put alot of work into finding the correct ones that worked well. Also, we chose colors that could work together, with a few rules, and still bli fine the `}</span>
        <span className="font-['Poppins:Bold',sans-serif] leading-[28.8px]">WCAG 2.1 AA</span>
        <span className="leading-[28.8px]">{` standards.`}</span>
      </p>
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
      <div className="content-stretch flex items-start pl-[376px] pt-[112px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[461px]">Typography</p>
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[461px]">We chose Futura for our headers, and Barlow for smaller texts.</p>
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[461px]">My initial thought was that they looked kind of similar and it would cause a problem, but it turned out great!</p>
    </div>
  );
}

function Block9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[461px]">The smallest size we used was Barlow in 16 pixels.</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[208px] relative shrink-0" data-name="Column">
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
    </div>
  );
}

function ImageSxc2Png() {
  return (
    <div className="h-[659px] relative shrink-0 w-[720px]" data-name="Image · Sxc 2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSxc2Png} />
    </div>
  );
}

function Block10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSxc2Png />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[232px] relative shrink-0" data-name="Column">
      <Block10 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[96px] relative size-full">
        <Column5 />
        <Column6 />
      </div>
    </div>
  );
}

function ImageSxc4Png() {
  return (
    <div className="h-[757px] relative shrink-0 w-[1382px]" data-name="Image · Sxc 4.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSxc4Png} />
    </div>
  );
}

function Block11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSxc4Png />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block11 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[48px] relative size-full">
        <Column7 />
      </div>
    </div>
  );
}

function ImageSxc5Png() {
  return (
    <div className="h-[757px] relative shrink-0 w-[1382px]" data-name="Image · Sxc 5.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSxc5Png} />
    </div>
  );
}

function Block12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSxc5Png />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block12 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[136px] relative size-full">
        <Column8 />
      </div>
    </div>
  );
}

function Block13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[51.6px] not-italic relative shrink-0 text-[36.2px] text-black w-[461px]">Social media</p>
    </div>
  );
}

function Block14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[461px]">To work with all the colours and get it really playful, we early on created a system for when and what should be released.</p>
    </div>
  );
}

function Block15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[461px]">We tried to use the colours differently but in an order that would make them seem more random and playful.</p>
    </div>
  );
}

function Block16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[461px]">¨This also applies to the forms, hands and typography.</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[168px] relative shrink-0" data-name="Column">
      <Block13 />
      <Block14 />
      <Block15 />
      <Block16 />
    </div>
  );
}

function ImageSxc6Png() {
  return (
    <div className="h-[624px] relative shrink-0 w-[720px]" data-name="Image · Sxc 6.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSxc6Png} />
    </div>
  );
}

function Block17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageSxc6Png />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[232px] relative shrink-0" data-name="Column">
      <Block17 />
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[120px] relative size-full">
        <Column9 />
        <Column10 />
      </div>
    </div>
  );
}

function ImageImg3981Jpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · IMG_3981.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageImg3981Jpg} />
    </div>
  );
}

function Block18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageImg3981Jpg />
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block18 />
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] relative size-full">
        <Column11 />
      </div>
    </div>
  );
}

function ImageImg3973Jpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · IMG_3973.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageImg3973Jpg} />
    </div>
  );
}

function Block19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageImg3973Jpg />
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block19 />
    </div>
  );
}

function Row9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[48px] relative size-full">
        <Column12 />
      </div>
    </div>
  );
}

function ImageImg3974Jpg() {
  return (
    <div className="h-[603px] relative shrink-0 w-[452px]" data-name="Image · IMG_3974.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageImg3974Jpg} />
    </div>
  );
}

function Block20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageImg3974Jpg />
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block20 />
    </div>
  );
}

function ImageImg3978Jpg() {
  return (
    <div className="h-[603px] relative shrink-0 w-[452px]" data-name="Image · IMG_3978.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageImg3978Jpg} />
    </div>
  );
}

function Block21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageImg3978Jpg />
    </div>
  );
}

function Column14() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Column">
      <Block21 />
    </div>
  );
}

function ImageFoto20231116Jpg() {
  return (
    <div className="h-[603px] relative shrink-0 w-[452px]" data-name="Image · Foto 2023-11-16.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFoto20231116Jpg} />
    </div>
  );
}

function Block22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageFoto20231116Jpg />
    </div>
  );
}

function Column15() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Column">
      <Block22 />
    </div>
  );
}

function Row10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[80px] relative size-full">
        <Column13 />
        <Column14 />
        <Column15 />
      </div>
    </div>
  );
}

function ImageImg3993Jpg() {
  return (
    <div className="h-[844px] relative shrink-0 w-[1382px]" data-name="Image · IMG_3993.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageImg3993Jpg} />
    </div>
  );
}

function Block23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <ImageImg3993Jpg />
    </div>
  );
}

function Column16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block23 />
    </div>
  );
}

function Row11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[80px] relative size-full">
        <Column16 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Spacer />
      <SectionTinted />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
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

export default function DesktopSthlmXperienceConference() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / STHLM Xperience Conference 2023">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}