import Image from 'next/image'
import React from 'react'

const Works = () => {
    return (
        <div>
            <span className="text-6xl p-8 font-bold text-gray-800 text-center">
                Our Works
            </span>
            <div className="flex items-center justify-center">
                <div className="flex  flex-col md:flex-row items-center justify-center gap-16 w-[90%] p-5">

                    <div className="group w-full h-full relative flex items-center justify-center">
                        <Image src='/cg.png' width="1000" height='300' alt="Calorie Guard" className="w-full h-full object-cover " />
                        <div className=" absolute w-fit bottom-0 left-0 ms-[80px] mt-[20px] md:ms-[138px] bg-white rounded-xl  group-hover:block hidden transition ease-in-out delay-150 p-1">
                            <span className="md:text-3xl text-[13px] font-bold md:px-2 md:py-4">Calorie Guard</span>
                            <p className="md:text-[18px] text-[10px] md:px-4 ">
                                Innovative calorie counting app with AI Lens scans food, providing instant, accurate calorie info. User-friendly, extensive database, personalized tracking.
                            </p>
                        </div>
                    </div><div className="group w-full h-full relative flex items-center justify-center">
                        <Image src='/pc.png' width="1000" height='300' alt="Calorie Guard" className="w-full h-full object-cover " />
                        <div className=" absolute w-fit bottom-0 left-0 ms-[80px] mt-[20px] md:ms-[138px] bg-white rounded-xl  group-hover:block hidden transition ease-in-out delay-150 p-1">
                            <span className="md:text-3xl text-[13px] font-bold  md:px-2 md:py-4">Project Catalysers</span>
                            <p className="md:text-[18px] text-[10px] md:px-4 ">
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