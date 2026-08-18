import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Title */}
          <div className="pl-6 pt-14">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.99375rem] not-italic text-[3.025rem] text-black w-[343px]">Designer/Animator at Oden Business Intelligence</p>
          </div>

          {/* Description + bullets */}
          <div className="pl-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-[343px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black">– Developing the concept</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black">– Writing parts of the script.</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black">– Create graphics.</p>
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black">– Animation in after effects.</p>
          </div>

          {/* Video */}
          <div className="pl-6 pt-2">
            <VimeoEmbed />
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:block">
          {/* Title */}
          <div className="flex justify-center px-6 pt-24">
            <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[5.475rem] not-italic text-[4.15rem] text-black w-full max-w-[453px]">Designer/Animator at Oden Business Intelligence</p>
          </div>

          {/* Description */}
          <div className="flex justify-center px-6 pt-8">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
          </div>

          {/* Bullets */}
          <div className="flex justify-center px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">– Developing the concept</p>
          </div>
          <div className="flex justify-center px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">– Writing parts of the script.</p>
          </div>
          <div className="flex justify-center px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">– Create graphics.</p>
          </div>
          <div className="flex justify-center px-6 pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">– Animation in after effects.</p>
          </div>

          {/* Video */}
          <div className="px-8 pt-12">
            <VimeoEmbed />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
