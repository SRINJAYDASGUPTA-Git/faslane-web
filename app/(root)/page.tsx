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
      <div className="bg-[rgb(180,179,223)] bg-gradient-to-r from-[#b4b3df] to-[#fccfec]">
        <Header />
        {/* Intro */}
        <section className="md:flex items-center justify-between pb-20 px-7 md:px-20">
          <div className="flex flex-col w-full mt-10 text-center md:text-start md:w-[60%]">
            <span className="text-2xl md:text-4xl font-bold py-3">Unlock Business Potential</span>
            <span className="text-md md:text-2xl">Elevate your business with bespoke <br />
              apps and websites. Innovate solutions <br />
              that amplify your brand, streamline <br />
              processes and drive remarkable <br />
              success.</span>
          </div>
          <div className='w-full md:w-[40%]'>
            <img src="/Business_Team.gif" alt="Business Gif" />
          </div>
        </section>
          <Services />
        <Marquee text={"Unrivaled products, trust, and a seamless user experience with our clutter-free website design."} />
        {/* Our Works */}
        <section className="bg-white p-3 " id="portfolio">
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
