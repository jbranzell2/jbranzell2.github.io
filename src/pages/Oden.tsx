import imgOden from "@/imports/DesktopHome/1e5076f0f1a1a45573fe96c1dea49d964eddbc9c.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TintedSection from "@/components/TintedSection";

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

const bullets = [
  "– Developing the concept",
  "– Writing parts of the script.",
  "– Create graphics.",
  "– Animation in after effects.",
];

export default function Oden() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        <Hero
          title="Designer/Animator at Oden Business Intelligence"
          image={imgOden}
          imageAlt="Oden Business Intelligence"
          intro={
            <div className="px-6 pt-2 md:px-0 md:pt-8">
              <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
            </div>
          }
        />

        {/* ── Tinted section ── */}
        <TintedSection className="bg-[#fafafa] py-8 md:py-12">
          {bullets.map((text, i) => (
            <p key={text} className={`[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full ${i === 0 ? "" : "mt-4"}`}>{text}</p>
          ))}
        </TintedSection>

        {/* ── Video ── */}
        <div className="mt-3 md:mt-0 md:px-8 md:pt-14">
          <VimeoEmbed />
        </div>
      </main>

      <Footer />
    </div>
  );
}
