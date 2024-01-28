import React from 'react'
import { services } from '@/constants'
import Image from 'next/image'
const page = () => {
    return (
        <div className='w-full p-4 bg-black text-white flex flex-wrap '>
            {
                services.map((service, index) => {
                    return (
                        <div key={index} className='w-[33%] p-4 flex flex-col gap-2'>
                            <Image src={service.icon} alt={service.title} height={60} width={60} className='rounded-full' />
                            <span className='text-3xl font-bold'>{service.title}</span>                                                              <span className='text-md'>{service.description}</span>

                        </div>
                    )
                })
            }
        </div >
    )
}

export default page