'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const page = () => {
    const router = useRouter();
  return (
    <div className="contact-bg h-screen w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full h-full ms-[150px] bg-white flex flex-col  items-center justify-start">
            <div className="px-24 flex items-center h-full justify-between w-full">
          <div>
            <span className="w-full text-[60px] font-bold  bg-gradient-to-r from-[#9747FF] via-[#6052FA] to-[#E07E71] bg-clip-text text-transparent">
              Thank You!
            </span>
            <p className="text-[40px]">
              Your request has been successfully sent 🤝
              <br />
              Wait for a response from our manager.
            </p>
          </div>
          <Button className="rounded-full text-[24px] text-white p-6 place-items-center" onClick={()=>router.push('/')}>
            Go Back
            <FaChevronRight className="ml-3" />
          </Button>
            </div>
            <div className="flex flex-col w-full items-end justify-end p-10 mr-28">
                <span className="font-bold">
                    Stay in Touch
                </span>
                <span>WhatsApp</span>
                <span>
                    faslane.agency@gmail.com
                </span>
            </div>
      </div>
    </div>
  );
};

export default page;
