import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Electrolux from "./pages/Electrolux";
import SthlmXperience from "./pages/SthlmXperience";
import Apoteket from "./pages/Apoteket";
import Sas from "./pages/Sas";
import Rumours from "./pages/Rumours";
import Mitel from "./pages/Mitel";
import Oden from "./pages/Oden";
import Myndigheten from "./pages/Myndigheten";
import FunLight from "./pages/FunLight";
import Alster from "./pages/Alster";

export type Page = "home" | "about" | "electrolux" | "sthlm" | "apoteket" | "sas" | "rumours" | "mitel" | "oden" | "myndigheten" | "funlight" | "alster";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  if (page === "about") return <About onNavigate={setPage} />;
  if (page === "electrolux") return <Electrolux onNavigate={setPage} />;
  if (page === "sthlm") return <SthlmXperience onNavigate={setPage} />;
  if (page === "apoteket") return <Apoteket onNavigate={setPage} />;
  if (page === "sas") return <Sas onNavigate={setPage} />;
  if (page === "rumours") return <Rumours onNavigate={setPage} />;
  if (page === "mitel") return <Mitel onNavigate={setPage} />;
  if (page === "oden") return <Oden onNavigate={setPage} />;
  if (page === "myndigheten") return <Myndigheten onNavigate={setPage} />;
  if (page === "funlight") return <FunLight onNavigate={setPage} />;
  if (page === "alster") return <Alster onNavigate={setPage} />;
  return <Home onNavigate={setPage} />;
}
