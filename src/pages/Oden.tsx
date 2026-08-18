import type { Page } from "@/App";

interface Props {
  onNavigate: (page: Page) => void;
}

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

export default function Oden({ onNavigate }: Props) {
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
        <div className="md:hidden flex flex-col gap-[16px]">
          {/* Title */}
          <div className="pl-[24px] pt-[56px]">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[63.9px] not-italic text-[48.4px] text-black w-[343px]">Designer/Animator at Oden Business Intelligence</p>
          </div>

          {/* Description + bullets */}
          <div className="pl-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-[343px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black">– Developing the concept</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black">– Writing parts of the script.</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black">– Create graphics.</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black">– Animation in after effects.</p>
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
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[87.6px] not-italic text-[66.4px] text-black w-full max-w-[453px]">Designer/Animator at Oden Business Intelligence</p>
          </div>

          {/* Description */}
          <div className="flex justify-center px-[24px] pt-[32px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
          </div>

          {/* Bullets */}
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">– Developing the concept</p>
          </div>
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">– Writing parts of the script.</p>
          </div>
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">– Create graphics.</p>
          </div>
          <div className="flex justify-center px-[24px] pt-[16px]">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[28.8px] not-italic text-[16px] text-black w-full max-w-[453px]">– Animation in after effects.</p>
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
