"use client"
import { headerLinks } from "@/constants"
import Link from "next/link"
const NavItems = (props: any) => {
    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link, index) => {
                return (<li
                    key={index}
                    className="text-primary-500 flex-center p-medium-16 white-space-nowrap"
                >
                    <Link href={link.path} onClick={() => props.setOpen(false)}>
                        {link.name}
                    </Link>
                </li>)
            })}
            <li className="md:hidden">
                <Link href='/contact'>
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}
export default NavItems