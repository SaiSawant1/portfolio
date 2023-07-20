"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { ActiveSectionContext, useActiveSectionContext } from "@/context/ActiveSectionContext";


export default function Header() {
  
  const {active,setActive,setTimeOfLastClick}=useActiveSectionContext();

  return (
    <header className="z-[999] relative ">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        className="fixed top-0 -translate-x-[50%] left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-50 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      ></motion.div>
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:w[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-3/4 flex justify-center items-center relative"
              key={link.name}
            >
              <Link
                className={clsx(
                  "flex px-3 py-3 min-w-full justify-center items-center hover:text-gray-600 transition ease-in  dark:text-gray-500 dark:hover:text-gray-300",
                  { "text-gray-950 dark:text-gray-200": active === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActive(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {link.name}
                {active === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="bg-gray-200  rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
