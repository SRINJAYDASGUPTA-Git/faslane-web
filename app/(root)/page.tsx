import Header from "@/components/shared/Header";
import Marquee from "@/components/shared/Marquee";
import Services from "@/components/shared/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col text-black h-full w-screen'>
      <div className="p-2 bg-[rgb(180,179,223)] bg-gradient-to-r from-[#b4b3df] to-[#fccfec] w-screen">
        <Header />
        <div className="flex items-center justify-between p-10  px-7 md:px-20">
          <div className="flex flex-col">
            <span className="text-2xl md:text-5xl font-bold py-3">Unlock Business Potential</span>
            <span className="text-md md:text-3xl">Elevate your business with bespoke <br />
              apps and websites. Innovate solutions <br />
              that amplify your brand, streamline <br />
              processes and drive remarkable <br />
              success.</span>
          </div>
          <div className=' md:w-[500px]'>
            <img src="/Business_Team.gif" alt="Business Gif" />
          </div>
        </div>
        <div className="px-3" id="services">
          <Services />
        </div >
        <Marquee text={"Unrivaled products, trust, and a seamless user experience with our clutter-free website design."} />
      </div >

    </main >
  );
}
