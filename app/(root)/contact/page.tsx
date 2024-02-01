"use client"

import {  z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { interests } from "@/constants"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { FaChevronRight } from "react-icons/fa6"
const formSchema = z.object({
    name: z.string().min(2).max(50),
    company: z.string().min(2).max(50),
    email: z.string().email(),
    contact: z.string().min(10).max(10),
    about: z.string(),
})
const page = () => {
    const [clicked0, setClicked0] = useState(false)
    const [clicked1, setClicked1] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [clicked3, setClicked3] = useState(false)
    const [clicked4, setClicked4] = useState(false)
    const [clicked5, setClicked5] = useState(false)
    const [clicked6, setClicked6] = useState(false)
    const [clicked7, setClicked7] = useState(false)
    const [clicked8, setClicked8] = useState(false)
    const [interested, setInterested] = useState<string[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            contact: "",
            about: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { name, company, email, contact, about } = values;
        const data = {
            name,
            company,
            email,
            contact,
            about,
            interested
        }
        console.log(data)
        fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(responseData => {
            console.log(responseData)
          })
          .catch(error => {
            console.log('Error:', error);
          });
          
        form.reset();
        setClicked0(false)
        setClicked1(false)
        setClicked2(false)
        setClicked3(false)
        setClicked4(false)
        setClicked5(false)
        setClicked6(false)
        setClicked7(false)
        setClicked8(false)
        setInterested([])
    }
    function handleInterest(interest: string) {
        if (interested.includes(interest)) {
            const index = interested.indexOf(interest)
            if (index > -1) {
                setInterested(interested.filter((item) => item !== interest))
            }
        } else {
            setInterested([...interested, interest])
        }
        switch(interests.indexOf(interest)){
            case 0:
                setClicked0(!clicked0)
                break;
            case 1:
                setClicked1(!clicked1)
                break;
            case 2:
                setClicked2(!clicked2)
                break;
            case 3:
                setClicked3(!clicked3)
                break;
            case 4:
                setClicked4(!clicked4)
                break;
            case 5:
                setClicked5(!clicked5)
                break;
            case 6:
                setClicked6(!clicked6)
                break;
            case 7:
                setClicked7(!clicked7)
                break;
            case 8:
                setClicked8(!clicked8)
                break;
        }
    }
    //console.log(interested)
    return (
        <div className="flex w-full items-center justify-center h-full contact-bg">
            <div className="flex items-center justify-start px-24 w-full h-full  text-[60px]" >
                <p>
                    <span className="font-semibold text-[62px]">
                        Contact Us
                    </span>
                    <br />
                    Where your questions find answers
                </p>
            </div>
            <div className=" w-full h-full bg-white text-2xl ">
                <div className="flex p-[80px] items-center justify-center">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex items-start justify-center flex-col w-full ">
                            <div className="flex items-center justify-between w-[100%] gap-10">
                                <div className="w-full text-[24px]">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[24px]">Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} className="h-12" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-full">

                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[24px]">Business</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe Inc" {...field} className="h-12" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[100%] gap-10">
                                <div className="w-full">

                                    <FormField
                                        control={form.control}
                                        name="contact"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[24px]">Contact Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="0123456789" {...field} className="h-12" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-full">

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[24px]">Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="johndoe@example.com" {...field} className="h-12" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <span className="justify-start">Which services are you interested in...</span>
                            <div className="flex items-center justify-center gap-5 flex-wrap">
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked0? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[0])}>
                                    <span className="">{interests[0]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked1? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[1])}>
                                    <span className="">{interests[1]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked2? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[2])}>
                                    <span className="">{interests[2]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked3? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[3])}>
                                    <span className="">{interests[3]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked4? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[4])}>
                                    <span className="">{interests[4]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked5? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[5])}>
                                    <span className="">{interests[5]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked6? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[6])}>
                                    <span className="">{interests[6]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked7? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[7])}>
                                    <span className="">{interests[7]}</span>
                                </div>
                                <div className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked8? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>handleInterest(interests[8])}>
                                    <span className="">{interests[8]}</span>
                                </div>
                                
                            </div>
                            <FormField
                                control={form.control} 
                                name="about"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="text-[24px]">Tell us more about your business</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="About your business" {...field} className="bg-[#EFEFEF] w-[100%] h-[180px] p-3 text-[#000] border-[1.5px] border-[#EFEFEF] rounded-xl" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-end justify-end w-full">

                            <Button type="submit" className="rounded-full text-[24px] text-white p-6 place-items-center ">
                                Submit Request
                                <FaChevronRight className="ml-3" />
                            </Button>
                            </div>
                        </form>
                    </Form>
                </div>

            </div>
        </div >
    )
}

export default page