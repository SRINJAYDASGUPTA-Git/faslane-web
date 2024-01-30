import Image from 'next/image'
import React from 'react'

const Works = () => {
    return (
        <div className='bg-[#F5F5F5] rounded-3xl p-10 mx-5 my-10'>
           <span className="text-4xl p-8 font-bold text-center bg-gradient-to-r from-[#414fa3] to-[#fa6ec8] bg-clip-text text-transparent">
                Our Works
            </span>
            <div className="flex items-center justify-center">
                <div className="flex  flex-col md:flex-row items-center justify-center gap-16 w-[90%] p-5">

                    <div className="group w-full h-full relative flex items-center justify-center">
                        <Image src='/cg.png' width="1000" height='300' alt="Calorie Guard" className="w-full h-full object-cover " />
						<div className="absolute w-fit p-2 bottom-0 left-0 ms-[25%] md:ms-[25%] bg-white rounded-t-xl group transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                            <span className="md:text-3xl text-[10px] md:px-2">Calorie Guard</span>
                            <p className="md:text-sm text-[6px] md:px-2 md:py-2">
                                Innovative calorie counting app with AI Lens scans food, providing instant, accurate calorie info. User-friendly, extensive database, personalized tracking.
                            </p>
						</div>
                    </div><div className="group w-full h-full relative flex items-center justify-center">
                        <Image src='/pc.png' width="1000" height='300' alt="Calorie Guard" className="w-full h-full object-cover " />
						<div className="absolute w-fit p-2 bottom-0 left-0 ms-[25%] md:ms-[25%] bg-white rounded-t-xl group transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                            <span className="md:text-3xl text-[10px] md:px-2 md:py-4">Project Catalysers</span>
                            <p className="md:text-sm text-[6px] md:px-2 md:py-2">
                                A project display platform where creators showcase software, hardware, and diverse projects. Learn and explore through detailed project walkthroughs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works