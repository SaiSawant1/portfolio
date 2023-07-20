"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
export const About = () => {
  const { setActive } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  React.useEffect(() => {
    if (inView) {
      setActive("About");
    }
  },[inView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-col mb-28 max-w-[45rem] leading-8 justify-center items-center  text-center sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am self taught full-stack web developer{" "}
        <span className="font-medium">
          currently pursing Bachelor of Technology in Computer Science
          Engineering at{" "}
        </span>
        <span className="font-medium">DY.Patil International University</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">internship position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and working out. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">AI and Machine Learning</span>. I'm also
        learning how to draw.
      </p>
    </motion.section>
  );
};
