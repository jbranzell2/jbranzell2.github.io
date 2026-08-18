import imgJagcool from "@/imports/DesktopAbout-1/df120473259736c98a99f56fe1a59483d3f7f361.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col page-enter max-w-[1400px] mx-auto">
      <Header />

      {/* Content */}
      <main className="flex-1 w-full px-6 md:px-[29px]">
        {/* Photo + intro */}
        <div className="md:flex md:gap-8 md:items-start">
          <div className="md:order-2 md:ml-auto md:shrink-0">
            <img src={imgJagcool} alt="Johan Branzell" className="w-full md:w-[628px] md:aspect-[628/786] object-cover" />
          </div>
          <div className="md:order-1 md:max-w-[630px] md:shrink-0">
            <p className="font-['Poppins:Medium',sans-serif] text-black text-[3.025rem] md:text-[4.15rem] leading-[3.99375rem] md:leading-[5.475rem] not-italic mt-6 md:mt-[70px] whitespace-pre-wrap">
              {"My name is "}
              <span className="whitespace-nowrap">Johan Branzell</span>
            </p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[1.26875rem] md:text-[1.41875rem] leading-[2.2875rem] md:leading-[2.55625rem] not-italic mt-6 md:mt-8 max-w-[630px]">
              {"I'm from Karlstad, currently living in Stockholm, Sweden. Here I work as a Product Designer who strives to deliver thought through, user driven and detailed design. I love working on websites, apps, doing animations or print. Or working on anything design related really."}
            </p>
            <p className="font-['Poppins:Light',sans-serif] text-black text-[1.26875rem] md:text-[1.41875rem] leading-[2.2875rem] md:leading-[2.55625rem] not-italic mt-6 md:mt-8 max-w-[630px]">
              {"If you want to know more, feel free to drop me a line at "}
              <span className="font-['Poppins:Bold',sans-serif]">johanbranzell@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-12 md:mt-16 max-w-[630px]">
          <p className="font-['Poppins:Medium',sans-serif] text-black text-[2.2125rem] md:text-[2.8875rem] leading-[3.08125rem] md:leading-[4.025rem] not-italic">EXPERIENCE</p>
          <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic mt-4">–</p>

          {/* 2021-2022 + 2020-2021 block */}
          <div className="mt-6">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic">2021 - 2022</p>
            <div className="font-['Poppins:Light',sans-serif] text-black text-base not-italic mt-1">
              <p className="leading-[1.8rem] mb-0">Electrolux - Senior Software Product Designer</p>
              <p className="leading-[1.8rem] mb-0">&nbsp;</p>
              <p className="leading-[1.8rem] mb-0">I worked and maintained the Kitchen and Care apps for Elextrolux and Aeg, covering both Android and iOS. The work also included working with different physical products, connecting them to the apps.</p>
              <p className="leading-[1.8rem] mb-0">&nbsp;</p>
              <p className="font-['Poppins:Bold',sans-serif] leading-[1.8rem] mb-0">2020 - 2021</p>
              <p className="leading-[1.8rem] mb-0">&nbsp;</p>
              <p className="leading-[1.8rem] mb-0">Apoteket AB - UX/UI Designer</p>
              <p className="leading-[1.8rem] mb-0">&nbsp;</p>
              <p className="leading-[1.8rem]">Modernised the web expression for apoteket, I also created a better user experience as a whole using various tools and methods, among them a Design system following WCAG 2.1 AA.</p>
            </div>
          </div>

          {/* 2019 */}
          <div className="mt-6">
            <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic">2019</p>
            <div className="font-['Poppins:Light',sans-serif] text-black text-base not-italic mt-1">
              <p className="font-['Poppins:Bold',sans-serif] leading-[1.8rem] mb-0">I Worked on various projects such as:</p>
              <p className="leading-[1.8rem] mb-0">Oden Business Intelligence - Animated their promo video</p>
              <p className="leading-[1.8rem] mb-0">PT Studio - Created a graphic brand guide and designed various graphical materials</p>
              <p className="leading-[1.8rem] mb-0">&nbsp;</p>
              <p className="leading-[1.8rem]"><span className="font-['Poppins:Bold',sans-serif]">–</span>{" I also worked with two other clients with upcoming websites in 2020"}</p>
            </div>
          </div>

          {/* Remaining entries */}
          {[
            { year: "2018 - 2019", title: "Sas - Digital visual designer (consultant)", desc: "Consulting at Sas, designing mostly things for the web." },
            { year: "2017", title: "Mitel - UX designer", desc: "I was consulting at Mitel as a UX-consultant." },
            { year: "2016 – 2020", title: "Chas Visual Management - Art Director and Interaction Designer consultant", desc: "I worked at Chas visual management as a consultant, working at different companies on whatever they need." },
            { year: "2015 – 2016", title: "Sweet Payments - Art Director", desc: "I Worked at Sweet Payments as an Art Director, doing tons of design related stuff for them and their partners, such as web, logos, print and motion graphics." },
            { year: "2013 – 2015", title: "Berghs - Graphic Design", desc: "I've finished and got my diploma within graphic design at Berghs School of Communication." },
            { year: "2013", title: "M2mobi", desc: "Had an internship as a UI/UX Designer at M2Mobi for 9 months.\nWorking with various clients and projects." },
            { year: "2012 – 2013", title: "Hyper Island", desc: "I graduated from Hyper Island with the course Mobile Applications development year 2012." },
            { year: "2010 – 2011", title: "Hawaii Pacific University", desc: "The year 2010/11 I lived in Hawaii, studying at Hawaii Pacific University. I learned more about business and advertising." },
          ].map(({ year, title, desc }) => (
            <div key={year} className="mt-6">
              <p className="font-['Poppins:Bold',sans-serif] text-black text-base leading-[1.8rem] not-italic">{year}</p>
              <div className="font-['Poppins:Light',sans-serif] text-black text-base not-italic mt-1">
                <p className="leading-[1.8rem] mb-0">{title}</p>
                <p className="leading-[1.8rem] mb-0">&nbsp;</p>
                <p className="leading-[1.8rem]">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-16 md:h-24" />
      </main>

      <Footer />
    </div>
  );
}
