import imgCover from "@/imports/DesktopAlster/4b36b5eca3656d66d6878dd084ec4c12dd416968.png";
import imgImg37 from "@/imports/DesktopAlster/655f435d7f61899332d8136e701137eeb58ebfab.png";
import imgImg1001 from "@/imports/DesktopAlster/daa83c54d9abf54aad6d32316adf4b449050990e.png";
import imgImg351 from "@/imports/DesktopAlster/7c00948506c3c8d7ac2958f3b0c3ec5beac4fba5.png";
import imgKanske22 from "@/imports/DesktopAlster/f27c7352efc038697f0cd20a9da239fca0b7afc3.png";
import { Link } from "react-router-dom";

const galleryImages = [imgCover, imgImg37, imgImg1001, imgImg351, imgKanske22];

export default function Alster() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">

      {/* ── Header ── */}
      {/* Mobile */}
      <header className="md:hidden flex items-center justify-between px-4 py-[28px]">
        <Link to="/" className="font-['Poppins:Medium',sans-serif] text-black text-[1rem] leading-6 whitespace-nowrap cursor-pointer">Johan Branzell</Link>
        <nav className="flex gap-6">
          <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] cursor-pointer">Home</Link>
          <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] cursor-pointer">About</Link>
        </nav>
      </header>
      {/* Desktop */}
      <header className="hidden md:grid grid-cols-3 items-end h-[164px] px-[28px] pb-[52px]">
        <Link to="/" className="font-['Poppins:Medium',sans-serif] text-black text-[2.05rem] leading-[3.075rem] whitespace-nowrap cursor-pointer">Johan Branzell</Link>
        <nav className="flex gap-10 justify-self-center">
          <Link to="/" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] cursor-pointer">Home</Link>
          <Link to="/about" className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] cursor-pointer">About</Link>
        </nav>
      </header>

      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        {/* Mobile */}
        <div className="md:hidden px-6 pt-8">
          <h1 className="font-['Poppins:Medium',sans-serif] text-black text-[2.2125rem] leading-[3.08125rem]">Art Director and Graphic designer for Alster</h1>
          <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] mt-2">Alster is an ecologic beer from the forests of Wermland. The name is based on a small place, known for being the home of Gustaf Fröding when he grew up. Its location is one where you relax and breath in natures own luxury.</p>
          <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] mt-4">By making beer with water from the lake Alstern and take the berrys from the forests of Wermland, you can get a unique tasting experience.</p>
          <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] mt-4">Alster is a beer to enjoy on your own or with great company in a non stressed moment.</p>
        </div>
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 px-8 pt-[208px] items-start">
          <div>
            <h1 className="font-['Poppins:Medium',sans-serif] text-black text-[2.8875rem] leading-[4.025rem] max-w-[453px]">Art Director and Graphic designer for Alster</h1>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] mt-2 max-w-[453px]">Alster is an ecologic beer from the forests of Wermland. The name is based on a small place, known for being the home of Gustaf Fröding when he grew up. Its location is one where you relax and breath in natures own luxury.</p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] mt-4 max-w-[453px]">By making beer with water from the lake Alstern and take the berrys from the forests of Wermland, you can get a unique tasting experience.</p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] mt-4 max-w-[453px]">Alster is a beer to enjoy on your own or with great company in a non stressed moment.</p>
          </div>
          <div className="w-full aspect-[715/845]">
            <img src={imgCover} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ── Mobile cover image ── */}
        <div className="md:hidden mt-12 w-full">
          <div className="w-full aspect-[390/339]">
            <img src={imgCover} alt="" className="w-full h-full object-cover block" />
          </div>
        </div>

        {/* ── Berghs note band ── */}
        <div className="bg-[#fafafa] mt-8 md:mt-0 px-6 py-12 flex justify-center md:px-[24px]">
          <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] max-w-[453px]">This work is part of my final examination work at Berghs School of Communication 2015. I developed the concept, branding, labels, and graphic design.</p>
        </div>

        {/* ── Gallery ── */}
        {/* Mobile: true full-bleed — div stretches to container width, img fills div */}
        <div className="md:hidden flex flex-col gap-3 mt-3 w-full">
          {galleryImages.map((img, i) => (
            <div key={i} className="w-full aspect-[390/234]">
              <img src={img} alt="" className="w-full h-full object-cover block" />
            </div>
          ))}
        </div>
        {/* Desktop: full-width with generous spacing */}
        <div className="hidden md:flex flex-col gap-24 px-8 pt-24 pb-24">
          {galleryImages.map((img, i) => (
            <img key={i} src={img} alt="" className="w-full aspect-[1382/844] object-cover" />
          ))}
        </div>

      </main>

      {/* ── Footer ── */}
      {/* Mobile */}
      <footer className="md:hidden h-[393px] relative">
        <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[24px] top-[96px] text-[1.8125rem] leading-[2.5875rem] whitespace-nowrap">Johan Branzell</p>
        <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[24px] top-[168px] text-[1rem] leading-[1.8rem] whitespace-nowrap">E-mail me</p>
        <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[24px] top-[212px] text-[1rem] leading-[1.8rem] whitespace-nowrap"><a href="mailto:johanbranzell@gmail.com" className="hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">johanbranzell@gmail.com</a></p>
      </footer>
      {/* Desktop */}
      <footer className="hidden md:flex items-center justify-between px-[28px] h-[270px]">
        <p className="font-['Poppins:Medium',sans-serif] text-black text-[2.2625rem] leading-[3.225rem] not-italic whitespace-nowrap">Johan Branzell</p>
        <div className="flex flex-col items-end">
          <p className="font-['Poppins:Bold',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic whitespace-nowrap">E-mail me</p>
          <p className="font-['Poppins:Light',sans-serif] text-black text-[1rem] leading-[1.8rem] not-italic whitespace-nowrap"><a href="mailto:johanbranzell@gmail.com" className="hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">johanbranzell@gmail.com</a></p>
        </div>
      </footer>

    </div>
  );
}
