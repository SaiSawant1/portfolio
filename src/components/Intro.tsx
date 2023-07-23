"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
export default function Intro() {
  
  const {setActive}=useActiveSectionContext()

  const { ref, inView } = useInView({
    threshold: 0.75,
  })

 React.useEffect(()=>{
  if(inView){
    setActive("Home")
  }
  
 },[inView])


  return (
    <section
    ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center ">
        
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Sai Sawant.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold"> 1 year </span>of experience. I love{" "}
        <span className="italic"> building and deploying web </span>{" "}
        applications. My primary focus is react{" "}
        <span className="underline">(Next.js)</span>
      </motion.h1>
      <motion.div
      initial={{opacity:0,y:100}} 
      animate={{opacity:1,y:0}} 
      transition={{delay:0.25}}
      className="flex justify-center items-center flex-col sm:flex-row gap-2 px-4 text-lg font-medium">
        <Link
          className="group bg-gray-900 active:scale-105 focus:scale-110 ease-in transition hover:scale-110 outline-none text-white px-7 py-3 flex items-center justify-center rounded-full gap-2"
          href="#contact"
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group border border-black/10 bg-white active:scale-105 focus:scale-110 ease-in transition hover:scale-110 hover:text-gray-950 outline-none text-gray-700 px-7 py-3 flex items-center justify-center rounded-full gap-2"
          href="/CV.pdf" download={true}
        >
          Download CV <HiDownload className="group-hover:translate-y-2 transition" />
        </a>
        <a href="https://github.com/SaiSawant1" className="border border-black/10 bg-white active:scale-105 hover:scale-[1.15] hover:text-gray-950 focus:scale-110 ease-in transition  outline-none text-gray-700 p-4  flex items-center justify-center rounded-full gap-2 dark:bg-white/10">
          <BsGithub/>
        </a>
      </motion.div>
    </section>
  );
}
