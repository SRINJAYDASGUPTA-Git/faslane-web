import MobileNav from "@/components/shared/MobileNav";
import NavItems from "@/components/shared/NavItems";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='text-black h-screen'>
      <div className="p-2 bg-[rgb(180,179,223)] bg-gradient-to-r from-[#b4b3df] to-[#fccfec]  h-full z-2">
        <header className="w-full border-b  text-xl p-4 rounded-full flex items-center justify-end bg-white">
          <div className="flex items-center justify-between w-full px-2">
            <Link href='/' className="w-36 ">
              Faslane
            </Link>
            <nav className="md:flex md:items-center md:justify-center hidden w-full max-w-sm">
              <NavItems />
            </nav>

            <div className="flex w-32 justify-end gap-3">
              <MobileNav />
            </div>
          </div>
          <div className="p-1 w-[9vw] text-center rounded-full text-stone-100 bg-[url('/contact-button.png')] bg-contain">Contact Us</div>
        </header>
        JKHDJHJHDGJHG
      </div>
    </main>
  );
}
