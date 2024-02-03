"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import React, { useState, useRef, useEffect } from 'react';
import {pc, cg} from '@/constants'
const page = () => {
    const {id} = useParams();
  
  return (
    <div>
        {
            id === 'cg' ? 
            <div className='w-full h-screen overflow-y-auto'>
             <div className='flex justify-center items-end min-h-[25vh] md:min-h-[95vh] md:bg-fixed md:bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${cg[0].img})`}}>
             <Image src="/arrowup.gif" width={50} height={50} alt='Scroll Up Arrow'/>
             </div>
             <Link href="../">
             <div className='h-fit w-fit p-2 rounded-full absolute top-5 right-10 bg-[#F5F5F5]'>
             <IoMdClose size={20}/>
             </div>
             </Link>
                <div className='p-10 md:p-20 bg-white'>
                    <h1 className='text-3xl md:pt-10 pb-5'>The Company- {cg[0].title}</h1>
                    <p className='text-base pb-10 text-[#4D4D4D]'> 
                        {cg[0].description}
                    </p>
                    <span className='text-lg text-[#4D4D4D] font-bold'>Key Features: </span>
                    {
                        cg[0].key_features.map((feature, index) => (
                            <p key={index} className='text-base py-2'>{feature.title}:<br/>{feature.description}</p>
                        ))
                    
                    }
                    <br/><br/>
                    <span className='text-lg text-[#4D4D4D] font-bold'>What We Deliverd: </span>
                    {
                        cg[0].deliverables.map((deliverable, index) => (
                            <p key={index} className='text-base py-2'>{deliverable.title}: {deliverable.description}</p>
                        ))
                    }
                    <br/><br/>
                    <span className='text-base'>
                      {cg[0].conclusipn}
                    </span>
                </div>
            </div>:
            <div className='w-full h-screen overflow-y-auto'>
                 <div className='flex justify-center items-end min-h-[25vh] md:min-h-[95vh] md:bg-fixed md:bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${pc[0].img})`}}>
                    <Image src="/arrowup.gif" width={50} height={50} alt='Scroll Up Arrow'/>
                 </div>
                 <Link href="../">
                <div className='h-fit w-fit p-2 rounded-full absolute top-5 right-10 bg-[#F5F5F5]'>
                  <IoMdClose size={20}/>
                </div>
                </Link>
                <div className='p-10 md:p-20 bg-white'>
                <h1 className='text-3xl md:pt-10 pb-5'>The Company- {pc[0].title}</h1>
                <p className='text-base pb-10 text-[#4D4D4D]'> 
                    {pc[0].description}
                </p>
                <span className='text-lg text-[#4D4D4D] font-bold'>Key Features: </span>
                {
                    pc[0].key_features.map((feature, index) => (
                        <p key={index} className='text-base py-2'>{feature.title}:<br/>{feature.description}</p>
                    ))
                
                }
                <br/><br/>
                <span className='text-lg text-[#4D4D4D] font-bold'>What We Deliver: </span>
                {
                    pc[0].deliverables.map((deliverable, index) => (
                        <p key={index} className='text-base py-2'>{deliverable.title}: {deliverable.description}</p>
                    ))
                }
                <br/><br/>
                 <span className='text-base'>
                  {pc[0].conclusipn}
                </span>
            </div>
        </div>
        }
    </div>
  )
}

export default page