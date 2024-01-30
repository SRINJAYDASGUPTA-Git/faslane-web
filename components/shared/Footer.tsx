import React from 'react'
import { Button } from '../ui/button'
import { FaChevronRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='flex items-center justify-center pt-20 pb-10'>
            <div className='text-[#1d1d1d] flex px-10 md:px-20 w-[100vw] flex-col text-[24px] gap-5'>
                <p className='text-3xl font-bold md:text-4xl'>
                    We would love to hear<br /> from you.
                </p>
                <div className='flex flex-col md:flex-row justify-between w-full'>
                    <Link href='/contact'>
                        <Button className='md:w-fit w-full rounded-full bg-white text-[#1d1d1d] hover:bg-slate-300 text-lg font-semibold sm: mb-10'>
                            Become a client
                            <FaChevronRight className='ml-3' />
                        </Button>
                    </Link>
                    <div className='flex gap-5 flex-row py-3'>
                        <div className='w-1/2 flex flex-col gap-4 text-base pe-5'  style={{ fontWeight: '600' }}>
                            <span className='font-bold md:font-semibold text-xl md:text-lg'>Contact Us</span>
                            <span>
                                Our Email <br />
                                <Link href="mailto:faslane.agency@gmail.com" className='underline sm: text-xs'>
                                    faslane.agency@gmail.com
                                </Link>
                            </span>
                        </div>
                        <div className='w-1/2 flex flex-col gap-4 text-end text-base mb-16'  style={{ fontWeight: '600' }}>
                            <span className=' font-semibold text-lg'>Follow Us</span>
                            <p className='w-full flex flex-col items-end'>
                                <span className='flex place-items-center gap-2'>facebook <FiArrowUpRight /></span>
                                <span className='flex place-items-center gap-2'>instagram <FiArrowUpRight /></span>
                                <span className='flex place-items-center gap-2'>linkedin <FiArrowUpRight /></span>
                            </p>
                        </div>
                    </div>
                </div>
                <Separator className="border border-gray-500" />
                <p className='text-[#1d1d1d] text-sm text-center md:text-base md:text-start'>
                <span className='font-bold'> © Faslane 2024.</span> All rights Reserved • <span className='underline font-bold'>Privacy Policy</span>
                </p>
            </div>
        </div>

    )
}

export default Footer