export default function Footer() {
  return (
    <footer className="relative shrink-0 w-full">
      <div className="md:hidden h-[393px] relative">
        <p className="absolute font-['Poppins:Medium',sans-serif] text-black left-6 top-24 text-[1.8125rem] leading-[2.5875rem] not-italic whitespace-nowrap">
          Johan Branzell
        </p>
        <p className="absolute font-['Poppins:Bold',sans-serif] text-black left-6 top-[168px] text-base leading-[1.8rem] not-italic whitespace-nowrap">
          E-mail me
        </p>
        <p className="absolute font-['Poppins:Light',sans-serif] text-black left-6 top-[212px] text-base leading-[1.8rem] not-italic whitespace-nowrap">
          <a href="mailto:johanbranzell@gmail.com" className="hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">
            johanbranzell@gmail.com
          </a>
        </p>
      </div>
      <div className="hidden md:flex items-center justify-between px-7 h-[270px]">
        <p className="font-['Poppins:Medium',sans-serif] text-black text-[2.2625rem] leading-[3.225rem] not-italic whitespace-nowrap">
          Johan Branzell
        </p>
        <div className="flex flex-col items-end">
          <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic whitespace-nowrap">
            E-mail me
          </p>
          <p className="font-['Poppins:Light',sans-serif] text-black text-base leading-[1.8rem] not-italic whitespace-nowrap">
            <a href="mailto:johanbranzell@gmail.com" className="hover:opacity-60 transition-opacity duration-[400ms] ease-in-out">
              johanbranzell@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
