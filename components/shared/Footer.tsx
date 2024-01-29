import React from 'react'
import { Button } from '../ui/button'
import { FaChevronRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='flex items-center justify-center py-5'>
            <div className='text-[#1d1d1d] flex px-20 w-[100vw] flex-col text-[24px] gap-5'>
                <p className='text-5xl'>
                    We would love to hear<br /> from you.
                </p>
                <div className='flex  justify-between w-full'>
                    <Link href='/contact'>
                        <Button className='w-fit rounded-full bg-white text-[#1d1d1d] hover:bg-slate-300 text-[20px] font-semibold'>
                            Become a client
                            <FaChevronRight className='ml-3' />
                        </Button>
                    </Link>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-4 text-[24px]'>
                            <span className=' font-semibold'>Contact Us</span>
                            <span>
                                Our Email <br />
                                <Link href="mailto:faslane.agency@gmail.com" className='underline'>
                                    faslane.agency@gmail.com
                                </Link>
                            </span>
                        </div>
                        <div className='flex flex-col gap-4 text-[24px]'>
                            <span className=' font-semibold'>Follow Us</span>
                            <p>
                                <span className='flex place-items-center gap-2'>facebook <FiArrowUpRight /></span>
                                <span className='flex place-items-center gap-2'>instagram <FiArrowUpRight /></span>
                                <span className='flex place-items-center gap-2'>linkedin <FiArrowUpRight /></span>
                            </p>
                        </div>
                    </div>
                </div>
                <p className='text-[#1d1d1d] text-[24px]'>
                    © Faslane 2024. All rights Reserved • <span className='underline'>Privacy Policy</span>
                </p>
            </div>
        </div>

    )
}

export default Footer