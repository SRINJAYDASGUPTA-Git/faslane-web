'use client'
import { services } from '@/constants'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const backgroundColor = scrollPosition > 100 ? 'black/80' : '[#6B6B6B]';
  const scale = scrollPosition > 100 ? 'scale-[1.05]' : 'scale-[1]';

    return (
        (windowWidth >= 768 ?
            <div className="px-3 mx-5 bg-[#6B6B6B] rounded-3xl text-slate-200 hover:bg-black/80 hover:scale-[1.01] transition delay-150 ease-in-out" id="services">
            <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col py-10 px-5 md:px-14">
            <span className="font-bold text-4xl py-2">What We Serve</span>
               <span className={`text-2xl mb-8 group transition-opacity duration-500 ease-in-out ${isHovered?'opacity-100':'opacity-0'}`}>
               As a tight-knit team of experts, we create <br />memorable and emotional websites, digital<br /> experiences, and native apps.
               </span>
               <div className='w-full md:p-4 text-white flex flex-col md:flex-row flex-wrap md:justify-between'>
            {
                services.map((service, index) => {
                    return (
                        <div key={index} className='w-1/3 px-16 flex flex-col gap-2 mb-10'>
                        <Image src={service.icon} alt={service.title} height={60} width={60} className='rounded-full' />
                        <span className='text-xl font-bold'>{service.title}</span>                                                        
                        <span className='text-sm'>{service.description}</span>
                        </div>
                        )
                    })
                }
                </div >
                </div>
            </div>
            :
            <div className={`px-3 mx-5 rounded-3xl text-slate-200 bg-${backgroundColor} ${scale} transition delay-150 ease-in-out`} id="services">
            <div
            className="flex flex-col py-10 px-5">
            <span className="font-bold text-4xl pb-5">What We Serve</span>
               <span className="text-xl mb-8">
               As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.
               </span>
                   
            <Carousel className='w-[60%] ms-16'>
            <CarouselContent className='w-full'>
            {
                services.map((service, index) => {
                    return (
                      <CarouselItem key={index} className='w-full flex flex-col items-center text-center gap-2'>
                         <Image src={service.icon} alt={service.title} height={60} width={60} className='rounded-full' />
                        <span className='text-xl font-bold'>{service.title}</span>                                                        
                        <span className='text-xs'>{service.description}</span>
                      </CarouselItem>
                        )
                    })
                }
                     </CarouselContent>
                     <CarouselPrevious className='bg-transparent'/>
                     <CarouselNext className='bg-transparent'/>
                 </Carousel>
                </div >
            </div>
        )
    )
        
}
        
export default Services