"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { cg, pc } from '@/constants'
import Image from 'next/image'
const page = () => {
    const {id} = useParams()
  return (
    <div className='flex items-center justify-center w-[100vw] p-10'>
        {
            id === 'cg' ? 
            <div>
                <Image src={cg[0].img} alt='cg' fill style={{objectFit:'cover'}}/> 
                <div>
                    kjsdnfkjskjdfkj
                </div>
            </div>:
            <Image src={pc[0].img} alt='pc' width={500} height={100}/>
        }
    </div>
  )
}

export default page