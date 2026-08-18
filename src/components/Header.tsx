import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHomeActive = pathname !== "/about";
  const isAboutActive = pathname === "/about";

  const navLinkClass = (active: boolean) =>
    [
      "font-['Poppins:Light',sans-serif] text-black text-base leading-[1.8rem] not-italic cursor-pointer",
      active && "underline decoration-1 underline-offset-4",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <header className="relative shrink-0 w-full">
      <div className="flex items-center justify-between px-4 py-7 md:grid md:grid-cols-3 md:items-center md:px-7 md:py-0 md:h-[164px]">
        <Link to="/" className="font-['Poppins:Medium',sans-serif] text-black text-base md:text-[2.05rem] leading-6 md:leading-[3.075rem] not-italic whitespace-nowrap cursor-pointer">
          Johan Branzell
        </Link>
        <nav className="flex gap-6 md:gap-10 md:justify-self-center">
          <Link to="/" className={navLinkClass(isHomeActive)}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass(isAboutActive)}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
