"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import Image from "next/image"
import NavItems from "./NavItems"
import { RiMenu3Fill } from "react-icons/ri";

const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <nav className="md:hiddenx">
            <Sheet open={isOpen} onOpenChange={setOpen}>
                <SheetTrigger className="align-middle">
                    <RiMenu3Fill size={30} />
                </SheetTrigger>
                <SheetContent className="flex flex-col bg-white md:hidden">
                    <p className="text-lg font-bold">Faslane</p>
                    <Separator className="border border-gray-50" />
                    <NavItems setOpen={setOpen} />
                </SheetContent>
            </Sheet>

        </nav >
    )
}

export default MobileNav