import MobileNav from "@/components/shared/MobileNav";
import NavItems from "@/components/shared/NavItems";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='text-black h-screen'>
      <div className="p-2 bg-[rgb(180,179,223)] bg-gradient-to-r from-[#b4b3df] to-[#fccfec]  h-screen z-2">
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
        <div className="flex p-10 mt-24 px-20">
          <p>
            <span className="text-5xl font-bold">Unlock Business Potential</span><br />
            <span className="text-3xl">Elevate your business with bespoke <br />
              apps and websites. Innovate solutions <br />
              that amplify your brand, streamline <br />
              processes and drive remarkable <br />
              success.</span>
          </p>
          <div>

          </div>
        </div>

      </div>
    </main>
  );
}
