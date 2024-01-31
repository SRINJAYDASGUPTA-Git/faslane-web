"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import Image from 'next/image'
import { Button } from '../ui/button'

const Header = () => {
    const setOpen = () => {
        console.log('Clicked')
    }
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShow(false);
            }
            else { // if scroll up show the navbar
                setShow(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [controlNavbar]);
    return (
        <header

            className={`mx-5 mt-2 border-b text-xl rounded-full ps-5 pe-3 py-2 flex bg-[#07111b] top-0 sticky z-10 transition-transform duration-300 transform ${show ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className='w-full flex'>
                <div className="flex items-center justify-between w-full">
                    <div className='w-[100%] flex items-center justify-center md:w-[300px]'>

                        <Link href='/' className="  px-3 ">
                            <Image src='/icons/faslane_logo.png' alt="Faslane Logo" width={280} height={200} objectFit='cover' />
                        </Link>
                    </div>
                    <nav className="md:flex hidden w-full text-white">
                        <NavItems setOpen={setOpen} />
                    </nav>

                    <div className="flex justify-end gap-3 md:hidden">
                        <MobileNav />
                    </div>
                </div>
                <Link href='/contact'>
                    <Button className="hidden md:flex md:items-center md:justify-center p-2 w-[10vw] text-[#1d1d1d] bg-stone-200  bg-cover  hover:bg-stone-300 text-xl rounded-full">
                        <span>Contact Us</span> </Button>
                </Link>
            </div>
        </header>
    )
}

export default Header