"use client";
import SectionHeading from "@/components/SectionHeading";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { projectsData } from "@/lib/data";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
export default function Projects() {

  const { setActive } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  React.useEffect(() => {
    if (inView) {
      setActive("Projects");
    }
  },[inView]);


  return (
    <section ref={ref} id="projects" className="text-center mb-28 scroll-mt-28 ">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((projects, index) => (
          <React.Fragment key={index}>
            <Project key={index} {...projects} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectsProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectsProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      transition={{ ease: "easeOut" }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="  bg-gray-100 max-w-[42rem] sm:h-[20rem] border border-black/5 overflow-hidden sm:pr-8 relative  even:pl-8 hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="py-4 pb-7  px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute hidden sm:block top-8 -right-40
        w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] 
        transition-all
        group-even:-left-40
        
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-110
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:hover:scale-110
        
        "
          quality={95}
          src={imageUrl}
          alt="project image"
        />
      </section>
    </motion.div>
  );
}
