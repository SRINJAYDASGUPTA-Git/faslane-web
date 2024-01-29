import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Marquee from "@/components/shared/Marquee";
import Services from "@/components/shared/Services";
import Works from "@/components/shared/Works";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col text-black gap-3'>
      <div className="p-2 bg-[rgb(180,179,223)] bg-gradient-to-r from-[#b4b3df] to-[#fccfec]">
        <Header />
        {/* Intro */}
        <section className="flex items-center justify-between p-10  px-7 md:px-20">
          <div className="flex flex-col">
            <span className="text-2xl md:text-5xl font-bold py-3">Unlock Business Potential</span>
            <span className="text-md md:text-3xl">Elevate your business with bespoke <br />
              apps and websites. Innovate solutions <br />
              that amplify your brand, streamline <br />
              processes and drive remarkable <br />
              success.</span>
          </div>
          <div className='hidden w-[500px] md:block'>
            <img src="/Business_Team.gif" alt="Business Gif" />
          </div>
        </section>
        <section className="px-3 bg-[#6B6B6B] rounded-3xl text-slate-200 hover:bg-black/80 hover:scale-[1.01] transition delay-150 ease-in-out" id="services">
          <Services />
        </section >
        <Marquee text={"Unrivaled products, trust, and a seamless user experience with our clutter-free website design."} />
        {/* Our Works */}
        <section className="bg-white rounded-3xl p-3 " id="portfolio">
          <Works />
        </section>
        {/* About Us */}
        <section id="about">
          <div>
            <About />
          </div>
        </section>
        <Footer />
      </div >
    </main >
  );
}
