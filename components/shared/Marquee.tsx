import React from 'react'

const Marquee = ({
    text
}: { text: string }) => {
    return (
        <div className="relative flex overflow-x-hidden gap-2 sm: mt-10">
            <div className="animate-marquee whitespace-nowrap">
                <span className="text-[30px] md:text-[60px] mx-4 font-bold bg-gradient-to-r from-[#7A627C] to-[#E07E71] bg-clip-text text-transparent">{text}</ span >

            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                <span className="text-[30px] md:text-[60px] mx-4 font-bold bg-gradient-to-r from-[#7A627C] to-[#E07E71] bg-clip-text text-transparent">{text}</span>
            </div>
        </div >
    )
}

export default Marquee