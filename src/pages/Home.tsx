import imgElectrolux from "@/imports/DesktopHome/e5f8f49ca6d92ed6852eb0abc1341f66894049bd.avif";
import imgSthlm from "@/imports/DesktopHome/5cf916097d48060a2b988233659d2b11606df22f.avif";
import imgApoteket from "@/imports/DesktopHome/28f8a14cd27cc0532020b2ecc5ced8f4b70847b6.avif";
import imgSas from "@/imports/DesktopHome/82891ca29deaf601d5ad5410a9342421a4c2d6fa.avif";
import imgRumours from "@/imports/DesktopHome/d986d374dc96e08f221af38e2dd2985c318ef68d.avif";
import imgMitel from "@/imports/DesktopHome/812ddf37bc39cad63de83bfa27936f66b7c1dca5.avif";
import imgOden from "@/imports/DesktopHome/1e5076f0f1a1a45573fe96c1dea49d964eddbc9c.avif";
import imgMyndigheten from "@/imports/DesktopHome/1eb61cd289abe618936595a810968c24d166fe57.avif";
import imgFunLight from "@/imports/DesktopHome/aa70d2c2ee2f4832fd6e9a6a22d7a4d0460ce464.avif";
import imgAlster from "@/imports/DesktopHome/9833bb6a6ee2bfd4f0e40724afa6a1fb6edd79cf.avif";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects: { img: string; label: string; path: string }[] = [
  { img: imgElectrolux, label: "Electrolux", path: "/electrolux" },
  { img: imgSthlm, label: "STHLM Xperience Conference 2023", path: "/sthlm" },
  { img: imgApoteket, label: "Apoteket", path: "/apoteket" },
  { img: imgSas, label: "Sas", path: "/sas" },
  { img: imgRumours, label: "Rumours", path: "/rumours" },
  { img: imgMitel, label: "Mitel", path: "/mitel" },
  { img: imgOden, label: "Oden Business Intelligence", path: "/oden" },
  { img: imgMyndigheten, label: "Myndigheten för delaktighet", path: "/myndigheten" },
  { img: imgFunLight, label: "Fun Light", path: "/funlight" },
  { img: imgAlster, label: "Alster", path: "/alster" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Projects grid */}
      <main className="flex-1 w-full px-1 md:px-5 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 md:gap-x-5 gap-y-6 md:gap-y-8 items-start">
          {projects.map(({ img, label, path }) => (
            <Link key={label} to={path} className="group block cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={img}
                  alt={label}
                  className="w-full aspect-square object-cover transition-opacity duration-[400ms] ease-in-out group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-[400ms] ease-in-out">
                  <p className="font-['Poppins:Medium',sans-serif] text-white text-base md:text-lg leading-[1.575rem] md:leading-[1.8rem] text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-in-out">
                    {label}
                  </p>
                </div>
              </div>
              <p className="font-['Poppins:Light',sans-serif] text-sm leading-[1.575rem] text-black mt-4">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
