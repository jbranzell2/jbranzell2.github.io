import imgImage1Png from "./038bc9e4240307d0c18994487e79457c9b144476.png";
import imgImage2Png from "./cad2714aeb19d0901af5fcbf9abe5853bef78774.png";
import imgImage3Png from "./6ac2a98385ed39290989178b37547757fdfbc47f.png";
import imgImage4Png from "./7b4f762da81de70dafd489ad082544dd0b727c9c.png";
import imgImage5Png from "./5e15339e88985d9ca60add16b93f31634922b3f6.png";
import imgImage6Png from "./5d313812b12c754b865e44bc3cb12d87e28de886.png";
import imgImage7Png from "./a5d5220a35769706d6c76a7533d2a434388ca30f.png";
import imgImage9Png from "./561f49544f3d143002a22344a9beb91dba816bcb.png";
import imgImage10Png from "./d7d2279a090e6124df094b83426bc740e99e717d.png";

function Frame() {
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
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[49.3px] not-italic relative shrink-0 text-[35.4px] text-black w-[255px]">Art director/Graphic Designer</p>
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

function Image1Png() {
  return (
    <div className="h-[278px] relative shrink-0 w-[390px]" data-name="Image · 1.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1Png} />
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image1Png />
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
    <div className="content-stretch flex items-start pt-[48px] relative shrink-0 w-full" data-name="Row">
      <Column1 />
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px] whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[8px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">The work included everything, maping out formats, the visual identity and all branding.</p>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
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
      <div className="content-stretch flex items-start pl-[24px] pt-[16px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function Image2Png() {
  return (
    <div className="h-[291px] relative shrink-0 w-[374px]" data-name="Image · 2.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2Png} />
    </div>
  );
}

function Block5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image2Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[8px] relative size-full">
        <Column5 />
      </div>
    </div>
  );
}

function Image3Png() {
  return (
    <div className="h-[273px] relative shrink-0 w-[374px]" data-name="Image · 3.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage3Png} />
    </div>
  );
}

function Block6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image3Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column6 />
      </div>
    </div>
  );
}

function Image4Png() {
  return (
    <div className="h-[271px] relative shrink-0 w-[374px]" data-name="Image · 4.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage4Png} />
    </div>
  );
}

function Block7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image4Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column7 />
      </div>
    </div>
  );
}

function Image5Png() {
  return (
    <div className="h-[272px] relative shrink-0 w-[374px]" data-name="Image · 5.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5Png} />
    </div>
  );
}

function Block8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image5Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column8 />
      </div>
    </div>
  );
}

function Image6Png() {
  return (
    <div className="h-[278px] relative shrink-0 w-[374px]" data-name="Image · 6.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage6Png} />
    </div>
  );
}

function Block9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image6Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column9 />
      </div>
    </div>
  );
}

function Image7Png() {
  return (
    <div className="h-[281px] relative shrink-0 w-[374px]" data-name="Image · 7.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage7Png} />
    </div>
  );
}

function Block10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image7Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column10 />
      </div>
    </div>
  );
}

function Image9Png() {
  return (
    <div className="relative shrink-0 size-[374px]" data-name="Image · 9.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage9Png} />
    </div>
  );
}

function Block11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image9Png />
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
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column11 />
      </div>
    </div>
  );
}

function Image10Png() {
  return (
    <div className="h-[286px] relative shrink-0 w-[374px]" data-name="Image · 10.png">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage10Png} />
    </div>
  );
}

function Block12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image10Png />
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
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[8px] pt-[16px] relative size-full">
        <Column12 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Row1 />
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
      <Row12 />
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

export default function MobileRumours() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mobile / Rumours">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}