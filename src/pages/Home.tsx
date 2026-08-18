import imgElectrolux from "@/imports/DesktopHome/e5f8f49ca6d92ed6852eb0abc1341f66894049bd.png";
import imgSthlm from "@/imports/DesktopHome/5cf916097d48060a2b988233659d2b11606df22f.png";
import imgApoteket from "@/imports/DesktopHome/28f8a14cd27cc0532020b2ecc5ced8f4b70847b6.png";
import imgSas from "@/imports/DesktopHome/82891ca29deaf601d5ad5410a9342421a4c2d6fa.png";
import imgRumours from "@/imports/DesktopHome/d986d374dc96e08f221af38e2dd2985c318ef68d.png";
import imgMitel from "@/imports/DesktopHome/812ddf37bc39cad63de83bfa27936f66b7c1dca5.png";
import imgOden from "@/imports/DesktopHome/1e5076f0f1a1a45573fe96c1dea49d964eddbc9c.png";
import imgMyndigheten from "@/imports/DesktopHome/1eb61cd289abe618936595a810968c24d166fe57.png";
import imgFunLight from "@/imports/DesktopHome/aa70d2c2ee2f4832fd6e9a6a22d7a4d0460ce464.png";
import imgAlster from "@/imports/DesktopHome/9833bb6a6ee2bfd4f0e40724afa6a1fb6edd79cf.png";
import type { Page } from "@/App";

const projects: { img: string; label: string; page?: Page }[] = [
  { img: imgElectrolux, label: "Electrolux", page: "electrolux" },
  { img: imgSthlm, label: "STHLM Xperience Conference 2023", page: "sthlm" },
  { img: imgApoteket, label: "Apoteket", page: "apoteket" },
  { img: imgSas, label: "Sas", page: "sas" },
  { img: imgRumours, label: "Rumours", page: "rumours" },
  { img: imgMitel, label: "Mitel", page: "mitel" },
  { img: imgOden, label: "Oden Business Intelligence", page: "oden" },
  { img: imgMyndigheten, label: "Myndigheten för delaktighet", page: "myndigheten" },
  { img: imgFunLight, label: "Fun Light", page: "funlight" },
  { img: imgAlster, label: "Alster", page: "alster" },
];

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter">
      {/* Header */}
      <header className="relative shrink-0 w-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-[16px] py-[26px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[16px] leading-[24px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[16px]">
            <button onClick={() => onNavigate("home")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer underline decoration-1 underline-offset-4">Home</button>
            <button onClick={() => onNavigate("about")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">About</button>
          </nav>
        </div>
        {/* Desktop header */}
        <div className="hidden md:grid grid-cols-3 items-center px-[29px] h-[164px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[32.8px] leading-[49.2px] not-italic whitespace-nowrap">Johan Branzell</p>
          <nav className="flex gap-[24px] justify-self-center">
            <button onClick={() => onNavigate("home")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer underline decoration-1 underline-offset-4">Home</button>
            <button onClick={() => onNavigate("about")} className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic cursor-pointer hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">About</button>
          </nav>
        </div>
      </header>

      {/* Projects grid */}
      <main className="flex-1 w-full">
        {/* Mobile: 2 columns */}
        <div className="md:hidden px-[5px]">
          <div className="grid grid-cols-2 gap-x-[4px] gap-y-[24px] items-start">
            {projects.map(({ img, label, page }) => (
              <div
                key={label}
                className={`group ${page ? "cursor-pointer" : ""}`}
                onClick={() => page && onNavigate(page)}
              >
                <img
                  src={img}
                  alt={label}
                  className="w-full aspect-square object-cover transition-opacity duration-[400ms] ease-in-out group-hover:opacity-75"
                />
                <p className="font-['Poppins:Light',sans-serif] text-[14px] leading-[25.2px] text-black mt-[14px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:block px-[18px]">
          <div className="grid grid-cols-3 gap-x-[18px]">
            {projects.map(({ img, label, page }) => (
              <div
                key={label}
                className={`group mb-[32px] ${page ? "cursor-pointer" : ""}`}
                onClick={() => page && onNavigate(page)}
              >
                <img
                  src={img}
                  alt={label}
                  className="w-full aspect-square object-cover transition-opacity duration-[400ms] ease-in-out group-hover:opacity-75"
                />
                <p className="font-['Poppins:Light',sans-serif] text-[14px] leading-[25.2px] text-black mt-[15px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative shrink-0 w-full">
        {/* Mobile footer */}
        <div className="md:hidden h-[393px] relative">
          <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-[23px] top-[97px] text-[29px] leading-[41.4px] not-italic whitespace-nowrap">
            Johan Branzell
          </p>
          <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-[23px] top-[167px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
            E-mail me
          </p>
          <p className="absolute font-['Poppins:Light',sans-serif] text-black left-[23px] top-[212px] text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
            johanbranzell@gmail.com
          </p>
        </div>
        {/* Desktop footer */}
        <div className="hidden md:flex items-center justify-between px-[29px] h-[270px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[36.2px] leading-[51.6px] not-italic whitespace-nowrap">
            Johan Branzell
          </p>
          <div className="flex flex-col items-end">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
              E-mail me
            </p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[16px] leading-[28.8px] not-italic whitespace-nowrap">
              johanbranzell@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
