"use client"
import { headerLinks } from "@/constants"
import Link from "next/link"
const NavItems = (props: any) => {
    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link, index) => {
                return (<li
                    key={index}
                    className="text-primary-500 flex items-center justify-center white-space-nowrap px-5"
                >
                    <Link
                        href={link.path}
                        onClick={() => props.setOpen(false)}
                        className="hover:text-white hover:border-b hover:border-white hover:font-bold transition ease-in-out duration-500">
                        {link.name}
                    </Link>
                </li>)
            })}
            <li className="md:hidden px-5">
                <Link href='/contact'>
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}
export default NavItems