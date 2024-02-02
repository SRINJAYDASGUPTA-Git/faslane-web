"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import {pc, cg} from '@/constants'
const page = () => {
    const {id} = useParams();
    const [activeScroll, setActiveScroll] = useState(false);
    const divRef = useRef<HTMLDivElement>(null); // Ensure accurate type reference
  
    const handleScroll = () => {
        const scrollTriggerPoint = Math.max(divRef.current!.offsetTop, 0) - window.innerHeight * 0.75;

        if (window.scrollY > scrollTriggerPoint) {
          setActiveScroll(true);
        } else {
          setActiveScroll(false);
        }
      };    
    const handleResize = () => {
      setActiveScroll(false); // Reset on window resize
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Run only once on component mount
  
    const initialDivHeight = 150; // Adjust initial height
    const maxDivHeight = 1000; // Adjust maximum height
  
  return (
    <div>
        {
            id === 'cg' ? 
            <div className='relative w-full h-[100vh] '>
                <Image src={cg[0].img} alt='cg' fill /> 
                <div
                    ref={divRef}
                    className={`absolute bottom-0 w-full bg-white p-8 transition-all delay-300 ease-in-out text-black rounded-xl ${activeScroll ? 'transition-none' : ''}`}
                    style={{
                        height: activeScroll
                          ? Math.min(window.scrollY * 0.5, maxDivHeight) + initialDivHeight
                          : initialDivHeight,
                      }}
                    
                 >
                    <h1 className='text-5xl py-10'>{cg[0].title}</h1>
                    <p className='text-[24px] py-10'> 
                        {cg[0].description}
                    </p>
                    <span className='text-2xl font-bold'>Key Features: </span>
                    {
                        cg[0].key_features.map((feature, index) => (
                            <p key={index} className='text-[20px] py-5'>{feature.title}: {feature.description}</p>
                        ))
                    
                    }
                </div>
            </div>:
            <Image src={pc[0].img} alt='pc' width={500} height={100}/>
        }
    </div>
  )
}

export default page