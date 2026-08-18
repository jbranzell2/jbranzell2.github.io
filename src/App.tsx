import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/electrolux" element={<Electrolux />} />
        <Route path="/sthlm" element={<SthlmXperience />} />
        <Route path="/apoteket" element={<Apoteket />} />
        <Route path="/sas" element={<Sas />} />
        <Route path="/rumours" element={<Rumours />} />
        <Route path="/mitel" element={<Mitel />} />
        <Route path="/oden" element={<Oden />} />
        <Route path="/myndigheten" element={<Myndigheten />} />
        <Route path="/funlight" element={<FunLight />} />
        <Route path="/alster" element={<Alster />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
