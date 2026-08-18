import { Link } from "react-router-dom";

function VimeoEmbed({ className }: { className?: string }) {
  return (
    <div className={`relative bg-[#212124] w-full aspect-video ${className ?? ""}`}>
      <iframe
        src="https://player.vimeo.com/video/339052907"
        className="absolute inset-0 size-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Oden Business Intelligence"
      />
    </div>
  );
}

export default function Oden() {
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
        <div className="md:hidden flex flex-col gap-[16px]">
          {/* Title */}
          <div className="pl-[24px] pt-[56px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.99375rem] not-italic text-[3.025rem] text-black w-[343px]">Designer/Animator at Oden Business Intelligence</p>
          </div>

          {/* Description + bullets */}
          <div className="pl-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-[343px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black">– Developing the concept</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black">– Writing parts of the script.</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black">– Create graphics.</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black">– Animation in after effects.</p>
          </div>

          {/* Video */}
          <div className="pl-[24px] pt-[8px]">
            <VimeoEmbed />
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Title */}
          <div className="flex justify-center px-[24px] pt-[96px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[5.475rem] not-italic text-[4.15rem] text-black w-full max-w-[453px]">Designer/Animator at Oden Business Intelligence</p>
          </div>

          {/* Description */}
          <div className="flex justify-center px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
          </div>

          {/* Bullets */}
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">– Developing the concept</p>
          </div>
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">– Writing parts of the script.</p>
          </div>
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">– Create graphics.</p>
          </div>
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-[1rem] text-black w-full max-w-[453px]">– Animation in after effects.</p>
          </div>

          {/* Video */}
          <div className="px-[32px] pt-[48px]">
            <VimeoEmbed />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile footer */}
        <div className="md:hidden h-[392px] relative">
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
