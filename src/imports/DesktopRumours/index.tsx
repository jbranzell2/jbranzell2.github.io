import imgImage1Png from "./038bc9e4240307d0c18994487e79457c9b144476.png";
import imgImage2Png from "./cad2714aeb19d0901af5fcbf9abe5853bef78774.png";
import imgImage3Png from "./6ac2a98385ed39290989178b37547757fdfbc47f.png";
import imgImage4Png from "./7b4f762da81de70dafd489ad082544dd0b727c9c.png";
import imgImage5Png from "./5e15339e88985d9ca60add16b93f31634922b3f6.png";
import imgImage6Png from "./5d313812b12c754b865e44bc3cb12d87e28de886.png";
import imgImage7Png from "./a5d5220a35769706d6c76a7533d2a434388ca30f.png";
import imgImage9Png from "./561f49544f3d143002a22344a9beb91dba816bcb.png";
import imgImage10Png from "./d7d2279a090e6124df094b83426bc740e99e717d.png";

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
      <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[64.4px] not-italic relative shrink-0 text-[46.2px] text-black w-[453px]">Art director/Graphic Designer</p>
    </div>
  );
}

function Block1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[72px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px] whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
    </div>
  );
}

function Block2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">The work included everything, maping out formats, the visual identity and all branding.</p>
    </div>
  );
}

function Block3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Block">
      <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[16px] text-black w-[453px]">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[248px] relative shrink-0" data-name="Column">
      <Block />
      <Block1 />
      <Block2 />
      <Block3 />
    </div>
  );
}

function Image1Png() {
  return (
    <div className="h-[885px] relative shrink-0 w-[715px]" data-name="Image · 1.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1Png} />
    </div>
  );
}

function Block4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Block">
      <Image1Png />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[248px] relative shrink-0" data-name="Column">
      <Block4 />
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

function Image2Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 2.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2Png} />
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

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[32px] relative size-full">
        <Column2 />
      </div>
    </div>
  );
}

function Image3Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 3.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3Png} />
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

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block6 />
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column3 />
      </div>
    </div>
  );
}

function Image4Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 4.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4Png} />
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

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column4 />
      </div>
    </div>
  );
}

function Image5Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 5.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5Png} />
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

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block8 />
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column5 />
      </div>
    </div>
  );
}

function Image6Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 6.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6Png} />
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

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block9 />
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column6 />
      </div>
    </div>
  );
}

function Image7Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 7.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7Png} />
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

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block10 />
    </div>
  );
}

function Row6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column7 />
      </div>
    </div>
  );
}

function Image9Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 9.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9Png} />
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

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block11 />
    </div>
  );
}

function Row7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column8 />
      </div>
    </div>
  );
}

function Image10Png() {
  return (
    <div className="h-[842px] relative shrink-0 w-[1382px]" data-name="Image · 10.png">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10Png} />
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

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <Block12 />
    </div>
  );
}

function Row8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-start pl-[32px] pt-[56px] relative size-full">
        <Column9 />
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
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] h-[269px] not-italic relative shrink-0 text-black w-full whitespace-nowrap" data-name="Footer">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[51.6px] left-[29px] text-[36.2px] top-[99px]">Johan Branzell</p>
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[99px]">E-mail me</p>
      <p className="absolute font-['Poppins:Light',sans-serif] leading-[28.8px] left-[1016px] text-[16px] top-[144px]">johanbranzell@gmail.com</p>
    </div>
  );
}

export default function DesktopRumours() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop / Rumours">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}