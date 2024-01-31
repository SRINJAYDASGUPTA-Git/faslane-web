import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
const page = () => {
    const images = [
        '/cg.png',
        '/pc.png',
    ]
    return (
        <div className='flex items-center justify-center h-screen'>
            <Carousel className="w-full max-w-lg">
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
    )
}

export default page