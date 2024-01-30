"use client"
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className=' bg-white rounded-b-[48px] '>
            <div className='flex flex-col items-center justify-center w-full gap-5'>
                <div className='flex items-center justify-center p-4 text-4xl bg-gradient-to-r from-[#413f4c]  via-[#765e78] to-[#ecbc8e] w-full text-white '>
                    <Separator className="my-4 text-white" />
                    <span>About Us</span>
                    <Separator className="my-4" />
                </div>
                <Image src='/about.png' width='500' height='500' alt='About' />
                <div className='flex flex-col md:flex-row items-center justify-center p-5 w-[85%]'>
                    <div className='flex flex-col md:flex-row place-items-start justify-center gap-16 '>
                        <div className='flex flex-col gap-4 w-full '>
                            <p className='text-4xl'>We are <span className='font-semibold'>Faslane</span> </p>
                            <p>
                                Discover unparalleled digital solutions with our cutting-edge digital marketing company. We specialize in crafting dynamic websites, innovative apps, and compelling UI/UX designs. Our approach integrates cost-effective and rapid marketing strategies, ensuring premium results. Elevate your online presence with our expertise in delivering high-quality solutions tailored to your unique needs.
                                At our digital marketing company, we prioritize trust and transparency as our core principles. Our dedicated team is committed to fostering a collaborative partnership with clients, ensuring clear communication and shared goals. We firmly believe in optimum client satisfaction, striving to exceed expectations at every step. By combining creativity, technical expertise, and strategic thinking, we build not just websites and apps, but lasting relationships. Experience the power of a trusted ally in your digital journey. Let us transform your vision into a reality with efficiency, reliability, and a commitment to excellence.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 w-full'>
                            <p className='text-4xl font-bold text-lime-500'>What we do? </p>
                            <p className='text-sm'>
                                Welcome to Fastane, where we transform ideas into impactful digital solutions. Empower your business with our expertise in app and website development. From concept to execution, we blend innovation with precision to craft tailored solutions that propel your enterprise forward. Join us on the journey of turning your vision into a powerful digital reality, enhancing your presence and efficiency in the ever-evolving digital landscape.
                            </p><p className='text-4xl font-bold text-purple-500'>What we bring? </p>
                            <p className='text-sm'>
                                We bring a dynamic fusion of innovation and expertise to transform ideas into impactful digital solutions. Specializing in app and website development, we empower businesses with tailored strategies, enhancing brand presence, streamlining operations, and driving unparalleled success in the ever-evolving digital landscape. Our commitment is to unlock the full potential of your business through cutting-edge solutions that resonate with your vision and goals. Join us in the journey of digital transformation and experience the difference of strategic, forward-thinking solutions.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='text-xl md:text-3xl w-[100%] px-12 md:px-24 py-14 md:py-28 md:w-[70%]'>
                "At <span className="font-bold bg-gradient-to-r from-[#9747FF] via-[#6052FA] to-[#E07E71] bg-clip-text text-transparent">Faslane</span>, we prioritize trust and innovation, delivering digital solutions that exceed client expectations." <br />
                <p className='text-right text-[12px] md:text-[18]'>
                    <span className='font-semibold text-[15px]'>Arghyadip Biswas</span><br/>Founder & CEO
                </p>
            </div>

        </div>
    )
}

export default About