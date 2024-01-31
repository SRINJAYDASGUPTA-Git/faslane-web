import React from 'react'
import { Button } from '../ui/button'
import { FaChevronRight, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
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
                    <div className='flex gap-10 flex-row py-3'>
                        <div className='w-1/2 flex flex-col gap-4 text-base pe-5' style={{ fontWeight: '600' }}>
                            <span className='font-bold text-xl'>Get in Touch</span>
                            <span>
                                Our Email <br />
                                <Link href="mailto:faslane.agency@gmail.com" className='underline sm: text-xs'>
                                    faslane.agency@gmail.com
                                </Link>
                            </span>
                        </div>
                        <div className='w-1/2 flex flex-col gap-4 text-start px-2 text-base mb-16' style={{ fontWeight: '600' }}>
                            <span className=' font-bold text-xl'>Follow Us</span>
                            <p className='w-full flex flex-col items-start'>
                                <Link href='https://www.facebook.com/FaslaneAgency' target='_blank' className='flex gap-1 items-center'>
                                    <FaFacebook size={15} />
                                    <span className='flex place-items-center gap-2'>facebook <FiArrowUpRight /></span>
                                </Link>
                                <Link href='' target='' className='flex gap-1 items-center'>
                                    <FaInstagram size={15} />
                                    <span className='flex place-items-center gap-2'>instagram <FiArrowUpRight /></span>
                                </Link>
                                <Link href='https://www.linkedin.com/company/faslane-agency/' target='_blank' className='flex gap-1 items-center'>
                                    <FaLinkedin size={15} />
                                    <span className='flex place-items-center gap-2'>linkedin <FiArrowUpRight /></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <Separator className="md:hidden block border border-gray-500" />
                <p className='text-[#1d1d1d] text-sm text-center md:text-base md:text-start'>
                    <span className='font-bold'> © Faslane 2024.</span> All rights Reserved • <span className='underline font-bold'>Privacy Policy</span>
                </p>
            </div>
        </div>

    )
}

export default Footer