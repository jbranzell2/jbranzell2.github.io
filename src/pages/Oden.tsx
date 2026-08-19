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

        {/* Title */}
        <div className="pl-6 pt-14 md:pt-24 md:flex md:justify-center md:px-6">
          <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[3.99375rem] md:leading-[5.475rem] not-italic text-[3.025rem] md:text-[4.15rem] text-black w-[343px] md:w-full md:max-w-[453px]">Designer/Animator at Oden Business Intelligence</p>
        </div>

        {/* Description */}
        <div className="pl-6 mt-8 md:mt-0 md:flex md:justify-center md:px-6 md:pt-8">
          <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-[343px] md:w-full md:max-w-[453px]">Animated a introduction movie to Oden Bussiness Intelligence. The work included</p>
        </div>

        {/* Bullets */}
        {bullets.map((text) => (
          <div key={text} className="pl-6 md:flex md:justify-center md:px-6 md:pt-4">
            <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-[343px] md:w-full md:max-w-[453px]">{text}</p>
          </div>
        ))}

        {/* Video */}
        <div className="pl-6 mt-6 md:mt-0 md:px-8 md:pt-12">
          <VimeoEmbed />
        </div>
      </main>

      <Footer />
    </div>
  );
}
