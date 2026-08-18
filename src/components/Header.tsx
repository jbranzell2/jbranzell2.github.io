import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  /** Alster's header is baseline-aligned (items-end) with extra bottom
   *  padding and no not-italic reset, unlike every other page. */
  variant?: "default" | "alster";
}

export default function Header({ variant = "default" }: HeaderProps) {
  const { pathname } = useLocation();
  const isHomeActive = pathname !== "/about";
  const isAboutActive = pathname === "/about";
  const isAlster = variant === "alster";

  const navLinkClass = (active: boolean) =>
    [
      "font-['Poppins:Light',sans-serif] text-black text-base leading-[1.8rem] cursor-pointer",
      !isAlster && "not-italic",
      active && "underline decoration-1 underline-offset-4",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <header className="relative shrink-0 w-full">
      <div
        className={`flex items-center justify-between px-4 py-7 md:grid md:grid-cols-3 md:px-7 md:py-0 md:h-[164px] ${
          isAlster ? "md:items-end md:pb-[52px]" : "md:items-center"
        }`}
      >
        <Link
          to="/"
          className={`font-['Poppins:Medium',sans-serif] text-black text-base md:text-[2.05rem] leading-6 md:leading-[3.075rem] whitespace-nowrap cursor-pointer ${
            isAlster ? "" : "not-italic"
          }`}
        >
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
