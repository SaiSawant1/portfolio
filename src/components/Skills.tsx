"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { setActive } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  React.useEffect(() => {
    if (inView) {
      setActive("Skills");
    }
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
