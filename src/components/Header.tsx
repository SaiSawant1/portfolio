"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative ">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        className="fixed top-0 -translate-x-[50%] left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-50 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full "
      ></motion.div>
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400 sm:w[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
            initial={{ opacity: 0,y:-100}}
            animate={{ opacity: 1,y:0 }}
              className="h-3/4 flex justify-center items-center"
              key={link.name}
            >
              <Link
                className="flex px-3 py-3 min-w-full justify-center items-center hover:text-gray-600 transition ease-in"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
