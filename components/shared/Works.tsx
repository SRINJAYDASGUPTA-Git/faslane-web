import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const Works = () => {
    const images = [
        '/cg.png',
        '/pc.png',
    ]
    return (
        <div className='bg-[#F5F5F5] rounded-3xl mx-5 my-10 p-3'>
            <span className="text-4xl p-8 font-bold text-center bg-gradient-to-r from-[#414fa3] to-[#fa6ec8] bg-clip-text text-transparent">
                Our Works
            </span>
            <div className='flex items-center justify-center p-5'>
                <Carousel className="w-full max-w-2xl">
                    <CarouselContent>
                        {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-3 ">
                                            <Image src={src} height={100} width={1000} alt='Projects' />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Works