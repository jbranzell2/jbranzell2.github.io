import imgImage1 from "@/imports/DesktopRumours/038bc9e4240307d0c18994487e79457c9b144476.avif";
import imgImage2 from "@/imports/DesktopRumours/cad2714aeb19d0901af5fcbf9abe5853bef78774.avif";
import imgImage3 from "@/imports/DesktopRumours/6ac2a98385ed39290989178b37547757fdfbc47f.avif";
import imgImage4 from "@/imports/DesktopRumours/7b4f762da81de70dafd489ad082544dd0b727c9c.avif";
import imgImage5 from "@/imports/DesktopRumours/5e15339e88985d9ca60add16b93f31634922b3f6.avif";
import imgImage6 from "@/imports/DesktopRumours/5d313812b12c754b865e44bc3cb12d87e28de886.avif";
import imgImage7 from "@/imports/DesktopRumours/a5d5220a35769706d6c76a7533d2a434388ca30f.avif";
import imgImage9 from "@/imports/DesktopRumours/561f49544f3d143002a22344a9beb91dba816bcb.avif";
import imgImage10 from "@/imports/DesktopRumours/d7d2279a090e6124df094b83426bc740e99e717d.avif";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Rumours() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full">

        {/* ── Hero ── */}
        <Hero
          title="Art director/Graphic Designer"
          image={imgImage1}
          imageAlt=""
          mobileImageClass="mt-12"
          mobileAspectClass="aspect-[390/278]"
          intro={
            <>
              <div className="px-6 pt-2 md:px-0 md:pt-[72px]">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px] whitespace-pre-wrap">{`Together with Festivalrykten,  Robin Wellström and I created the concept and all the layout for Rumours.`}</p>
              </div>
              <div className="px-6 pt-4 md:px-0">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The work included everything, maping out formats, the visual identity and all branding.</p>
              </div>
              <div className="px-6 pt-4 md:px-0">
                <p className="[word-break:break-word] font-['Poppins:Light',sans-serif] leading-[1.8rem] not-italic text-base text-black w-full max-w-[453px]">The paper could be found in different shops mainly in Stockholm, Göteborg and Malmö</p>
              </div>
            </>
          }
        />

        {/* ── Full-width images — mobile: uniform crop; desktop: each image's own ratio ── */}
        <div className="w-full">
          {[
            { img: imgImage2, pt: "md:pt-8", aspect: "md:aspect-[1328/1032]" },
            { img: imgImage3, pt: "md:pt-14", aspect: "md:aspect-[1510/1104]" },
            { img: imgImage4, pt: "md:pt-14", aspect: "md:aspect-[1598/1160]" },
            { img: imgImage5, pt: "md:pt-14", aspect: "md:aspect-[1258/915]" },
            { img: imgImage6, pt: "md:pt-14", aspect: "md:aspect-[1424/1057]" },
            { img: imgImage7, pt: "md:pt-14", aspect: "md:aspect-[2422/1821]" },
            { img: imgImage9, pt: "md:pt-14", aspect: "md:aspect-square" },
            { img: imgImage10, pt: "md:pt-14", aspect: "md:aspect-[1451/1109]" },
          ].map(({ img, pt, aspect }) => (
            <div key={img} className={`mt-3 md:mt-0 md:px-8 ${pt}`}>
              <div className={`w-full aspect-[390/280] ${aspect}`}>
                <img alt="" className="w-full h-full object-cover block" src={img} />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
