import imgImage1 from "@/imports/DesktopRumours/038bc9e4240307d0c18994487e79457c9b144476.png";
import imgImage2 from "@/imports/DesktopRumours/cad2714aeb19d0901af5fcbf9abe5853bef78774.png";
import imgImage3 from "@/imports/DesktopRumours/6ac2a98385ed39290989178b37547757fdfbc47f.png";
import imgImage4 from "@/imports/DesktopRumours/7b4f762da81de70dafd489ad082544dd0b727c9c.png";
import imgImage5 from "@/imports/DesktopRumours/5e15339e88985d9ca60add16b93f31634922b3f6.png";
import imgImage6 from "@/imports/DesktopRumours/5d313812b12c754b865e44bc3cb12d87e28de886.png";
import imgImage7 from "@/imports/DesktopRumours/a5d5220a35769706d6c76a7533d2a434388ca30f.png";
import imgImage9 from "@/imports/DesktopRumours/561f49544f3d143002a22344a9beb91dba816bcb.png";
import imgImage10 from "@/imports/DesktopRumours/d7d2279a090e6124df094b83426bc740e99e717d.png";
import { Link } from "react-router-dom";

export default function Rumours() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter">
      {/* Header */}
      <header className="relative shrink-0 w-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-[16px] py-[28px]">
          <Link to="/" className="font-['Poppins:Medium',sans-serif] text-black text-[1rem] leading-[1.5rem] not-italic whitespace-nowrap cursor-pointer">Johan Branzell</Link>
          <nav className="flex gap-[24px]">
            <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic cursor-pointer">Home</Link>
            <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic cursor-pointer">About</Link>
          </nav>
        </div>
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-3 items-center px-[28px] h-[164px]">
          <Link to="/" className="font-['Poppins:Medium',sans-serif] text-black text-[2.05rem] leading-[3.075rem] not-italic whitespace-nowrap cursor-pointer">Johan Branzell</Link>
          <nav className="flex gap-[40px] justify-self-center">
            <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic cursor-pointer">Home</Link>
            <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic cursor-pointer">About</Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          {/* Title */}
          <div className="px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.08125rem] not-italic text-[2.2125rem] text-black w-full">Art director/Graphic Designer</p>
          </div>

          {/* Image 1 — full bleed */}
          <div className="w-full mt-12">
            <div className="w-full aspect-[390/278]">
              <img alt="" className="w-full h-full object-cover block" src={imgImage1} />
            </div>
          </div>

          {/* Description text */}
          <div className="px-[24px] pt-[8px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full">The work included everything, maping out formats, the visual identity and all branding.</p>
          </div>
          <div className="px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
          </div>

          {/* Images 2–10 — full bleed */}
          <div className="flex flex-col gap-3 mt-3 w-full">
            {[imgImage2, imgImage3, imgImage4, imgImage5, imgImage6, imgImage7, imgImage9, imgImage10].map((img, i) => (
              <div key={i} className="w-full aspect-[390/280]">
                <img alt="" className="w-full h-full object-cover block" src={img} />
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Hero row: text left, image right */}
          <div className="flex items-center pl-[32px] gap-[180px] w-full overflow-hidden">
            <div className="flex flex-col py-[64px] shrink-0 max-w-[453px]">
              <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[4.025rem] not-italic text-[2.8875rem] text-black w-full max-w-[453px]">Art director/Graphic Designer</p>
              <div className="pt-[72px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px] whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">The work included everything, maping out formats, the visual identity and all branding.</p>
              </div>
              <div className="pt-[16px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
              </div>
            </div>
            <div className="flex-1 min-w-[390px] relative h-[844px]">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            </div>
          </div>

          {/* Full-width images */}
          {[
            { img: imgImage2, pt: "pt-[32px]" },
            { img: imgImage3, pt: "pt-[56px]" },
            { img: imgImage4, pt: "pt-[56px]" },
            { img: imgImage5, pt: "pt-[56px]" },
            { img: imgImage6, pt: "pt-[56px]" },
            { img: imgImage7, pt: "pt-[56px]" },
            { img: imgImage9, pt: "pt-[56px]" },
            { img: imgImage10, pt: "pt-[56px]" },
          ].map(({ img, pt }, i) => (
            <div key={i} className={`px-[32px] ${pt}`}>
              <div className="w-full aspect-[16/9] relative">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={img} />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile footer */}
        <div className="md:hidden h-[393px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[24px] top-[96px] text-[1.8125rem] leading-[2.5875rem] not-italic whitespace-nowrap">Johan Branzell</p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[24px] top-[168px] text-[1rem] leading-[1.8rem] not-italic whitespace-nowrap">E-mail me</p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[24px] top-[212px] text-[1rem] leading-[1.8rem] not-italic whitespace-nowrap"><a href="mailto:johanbranzell@gmail.com" className="hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">johanbranzell@gmail.com</a></p>
        </div>
        {/* Desktop footer */}
        <div className="hidden md:flex items-center justify-between px-[28px] h-[270px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[2.2625rem] leading-[3.225rem] not-italic whitespace-nowrap">Johan Branzell</p>
          <div className="flex flex-col items-end">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic whitespace-nowrap">E-mail me</p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic whitespace-nowrap"><a href="mailto:johanbranzell@gmail.com" className="hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">johanbranzell@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
