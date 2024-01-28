import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className="w-full border-b  text-xl p-2 px-4 rounded-full flex items-center justify-center bg-white top-0 sticky z-10">
            <div className="flex items-center justify-between w-full px-2">
                <Link href='/' className="w-36 ">
                    <span className="text-2xl font-bold">Faslane</span>
                </Link>
                <nav className="md:flex md:items-center md:justify-center hidden w-full max-w-sm">
                    <NavItems />
                </nav>

                <div className="flex w-32 justify-end gap-3 md:hidden">
                    <MobileNav />
                </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center p-2 w-[10vw]  rounded-full text-stone-100 bg-[url('/contact-button.png')] bg-contain text-xl">Contact Us</div>
        </header>
    )
}

export default Header