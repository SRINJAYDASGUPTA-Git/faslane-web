"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
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
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    Faslane
                    <Separator className="border border-gray-50" />
                    <NavItems setOpen={setOpen} />
                </SheetContent>
            </Sheet>

        </nav >
    )
}

export default MobileNav