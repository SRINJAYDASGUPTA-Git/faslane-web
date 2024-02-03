"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Oval } from "react-loader-spinner";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { interests } from "@/constants";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { FaChevronRight } from "react-icons/fa6";
import { error } from "console";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  company: z.string().min(2).max(50),
  email: z.string().email(),
  contact: z.string().min(10).max(10),
  about: z.string(),
});
const page = () => {
  const [uploading, setUploading] = useState(false);
  const [IsSuccessful, setIsSuccessful] = useState(false);

  const [clicked0, setClicked0] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);
  const [interested, setInterested] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      contact: "",
      about: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setUploading(true);
    const { name, company, email, contact, about } = values;
    const joined_interests = interested.join(",");
    const data = {
      name,
      company,
      email,
      contact,
      about,
      joined_interests,
    };
    console.log(data);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (response.ok) {
        setUploading(false);
        setIsSuccessful(true);
      } else {
        setUploading(false);
        const errorData = await response.json();
        alert("Error" + errorData);
      }
    } catch (error) {
      setUploading(false);
      alert(error);
    }

    form.reset();
    setClicked0(false);
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
    setClicked5(false);
    setClicked6(false);
    setClicked7(false);
    setClicked8(false);
    setInterested([]);
  };

  function handleInterest(interest: string) {
    if (interested.includes(interest)) {
      const index = interested.indexOf(interest);
      if (index > -1) {
        setInterested(interested.filter((item) => item !== interest));
      }
    } else {
      setInterested([...interested, interest]);
    }
    switch (interests.indexOf(interest)) {
      case 0:
        setClicked0(!clicked0);
        break;
      case 1:
        setClicked1(!clicked1);
        break;
      case 2:
        setClicked2(!clicked2);
        break;
      case 3:
        setClicked3(!clicked3);
        break;
      case 4:
        setClicked4(!clicked4);
        break;
      case 5:
        setClicked5(!clicked5);
        break;
      case 6:
        setClicked6(!clicked6);
        break;
      case 7:
        setClicked7(!clicked7);
        break;
      case 8:
        setClicked8(!clicked8);
        break;
    }
  }

  return !IsSuccessful ? (
    <div className="flex flex-col md:flex-row w-full items-center justify-center h-screen">
      <div className="flex items-center justify-start md:px-24 px-5 w-full md:h-full h-1/2 text-4xl contact-bg">
        <p>
          <span className="font-semibold text-5xl">Contact Us</span>
          <br />
          Where your questions find answers
        </p>
      </div>
      <style jsx>
        {`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: gray transparent;
          }

          .custom-scrollbar::-webkit-scrollbar {
            width: 2px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: gray;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
        `}
      </style>

      <div className=" w-full h-screen bg-white overflow-y-auto custom-scrollbar">
        <div className="w-full pt-5 pe-5 flex justify-end">
          <Link href="../">
            <RxCrossCircled size={25} className="text-[#5e5e5e]" />
          </Link>
        </div>
        <div className="flex pt-5 ps-10 items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 flex items-start justify-center flex-col w-full "
            >
              <div className="flex items-center justify-between w-[100%] gap-5">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Name
                        </FormLabel>
                        <FormControl className="bg-[#F5F5F5]">
                          <Input
                            {...field}
                            className="h-12 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full me-5">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Business
                        </FormLabel>
                        <FormControl className="bg-[#F5F5F5]">
                          <Input
                            {...field}
                            className="h-12 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-[100%] gap-5">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Contact No.
                        </FormLabel>
                        <FormControl className="bg-[#F5F5F5]">
                          <Input
                            {...field}
                            className="h-12 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full me-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Email
                        </FormLabel>
                        <FormControl className="bg-[#F5F5F5]">
                          <Input
                            {...field}
                            className="h-12 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <span className="justify-start text-lg font-semibold pt-10">
                Which services are you interested in...
              </span>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked0 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[0])}
                >
                  <span className="">{interests[0]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked1 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[1])}
                >
                  <span className="">{interests[1]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked2 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[2])}
                >
                  <span className="">{interests[2]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked3 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[3])}
                >
                  <span className="">{interests[3]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked4 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[4])}
                >
                  <span className="">{interests[4]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked5 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[5])}
                >
                  <span className="">{interests[5]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked6 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[6])}
                >
                  <span className="">{interests[6]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked7 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[7])}
                >
                  <span className="">{interests[7]}</span>
                </div>
                <div
                  className={`cursor-pointer p-2 rounded-xl border-[1.5px] border-[#EFEFEF] w-fit ${
                    clicked8 ? "bg-[#EFEFEF] text-black" : "text-[#6B6B6B]"
                  }`}
                  onClick={() => handleInterest(interests[8])}
                >
                  <span className="">{interests[8]}</span>
                </div>
              </div>
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem className="w-full pt-10">
                    <FormLabel className="text-lg font-semibold">
                      Tell us more about your business
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="About your business"
                        {...field}
                        className="bg-[#F5F5F5] w-[90%] h-[20vh] p-3 rounded-xl focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-end justify-end w-full">
                <Button
                  type="submit"
                  className="rounded-full text-lg text-white p-4 place-items-center mb-10 me-10"
                >
                  Submit Request
                  <FaChevronRight className="ml-3" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
        {uploading ? (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
            <Oval
              height={80}
              width={80}
              color="#9747FF"
              secondaryColor="#E07E71"
              strokeWidth={2}
              strokeWidthSecondary={2}
              ariaLabel="oval-loading"
            />
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div className="contact-bg w-full h-screen ps-20">
      <div className="bg-white w-full h-screen flex flex-col md:flex-row justify-between items-center">
        <div className="ms-16 sm: mt-20">
          <span className="font-bold bg-gradient-to-r from-[#9747FF] via-[#6052FA] to-[#E07E71] bg-clip-text text-transparent text-6xl">
            Thank You!
          </span>
          <span className="text-[#4D4D4] text-xl md:text-3xl">
            <br />
            Your request has been successfully sent 🤝
            <br />
            Wait for a response from our manager.
          </span>
        </div>
        <div className="flex flex-col h-full justify-end">
          <span className="flex flex-col h-1/2 justify-between">
            <Link href="../">
              <Button className="rounded-full text-lg text-white p-4 place-items-center mb-10 me-10">
                Go Back
                <FaChevronRight className="ml-3" />
              </Button>
            </Link>
            <span className="pe-10 pb-10">
              <p className="font-bold">Stay in Touch</p>
              <p>whatsapp</p>
              <p>faslane.agency@gmail.com</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
