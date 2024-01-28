import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";
import NavItems from "@/components/shared/NavItems";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='text-black h-screen'>
      <div className="p-2 bg-[rgb(180,179,223)] bg-gradient-to-r from-[#b4b3df] to-[#fccfec]  h-screen">
        <header className="w-full border-b  text-xl p-2 px-4 rounded-full flex items-center justify-end bg-white">
          <div className="flex items-center justify-between w-full px-2">
            <Link href='/' className="w-36 ">
              <span className="text-2xl font-bold">Faslane</span>
            </Link>
            <nav className="md:flex md:items-center md:justify-center hidden w-full max-w-sm">
              <NavItems />
            </nav>

            <div className="flex w-32 justify-end gap-3">
              <MobileNav />
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center p-2 w-[10vw]  rounded-full text-stone-100 bg-[url('/contact-button.png')] bg-contain text-xl">Contact Us</div>
        </header>
        <div className="flex items-center justify-between p-10  px-20">
          <div className="flex flex-col">
            <span className="text-5xl font-bold py-3">Unlock Business Potential</span>
            <span className="text-3xl">Elevate your business with bespoke <br />
              apps and websites. Innovate solutions <br />
              that amplify your brand, streamline <br />
              processes and drive remarkable <br />
              success.</span>
          </div>
          <div className='w-[500px]'>
            <img src="/Business_Team.gif" alt="Business Gif" />
          </div>
        </div>
        <div className="p-10 bg-gradient-to-b from-[#6b6b6b] to-[#232323] rounded-2xl hover:bg-black/50">
          What We Serve
        </div>
      </div >
      <Footer />
    </main >
  );
}
