"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { interests } from "@/constants"
import { useState } from "react"
const formSchema = z.object({
    name: z.string().min(2).max(50),
    company: z.string().min(2).max(50),
    email: z.string().email(),
    contact: z.string().min(10).max(10),
    interests: z.array(z.string()).min(1),
    about: z.string().min(10).max(150),
})
const page = () => {
    const [clicked, setClicked] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            contact: "",
            interests: [],
            about: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
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
                            {
                                interests.map((interest, index) => {
                                    return (
                                        <div key={index} className={`p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${clicked? 'bg-[#EFEFEF] text-black':'text-[#6B6B6B]'}`} onClick={()=>setClicked(!clicked)}>
                                            <span className="">{interest}</span>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <FormField
                                control={form.control} 
                                name="about"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[24px]">Tell us more about your business</FormLabel>
                                        <FormControl>
                                            <textarea className="bg-[#EFEFEF] w-full h-40 p-3 text-[#6B6B6B] border-[1.5px] border-[#EFEFEF] rounded-xl" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="align-right rounded-full text-[24px] text-white ">Submit Request</Button>
                        </form>
                    </Form>
                </div>

            </div>
        </div >
    )
}

export default page