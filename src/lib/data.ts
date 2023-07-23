import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carShowCase from "../../public/carShowCase.png";
import BreadItClone from "../../public/BreadItClone.png";
import TodoApp from "../../public/TodoApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed Higher Secondary Certificate",
    location: "Umbergaon, Gujrat",
    description:
      "Completed my HSC from SSV Gyan Kendra.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Currently Pursuing BTech CSE",
    location: "Pune, Maharashtra",
    description:
      "Currently pursing a degree in Bachelor of Technology from DY. Patil International University. With a Specialization in Artificial intelligence",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "SDE Intern",
    location: "Pune, Maharashtra",
    description:
      "I'm Worked as an SDE intern at Elite Bridges. As a inter i was tasked with developing a windows application for the company.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Car Hub",
    description:
      "Car hub is a front end web application build to demonstrate front-end skills and working API on next js",
    tags: ["React", "Next.js", "Tailwind", "Figma"],
    imageUrl: carShowCase,
  },
  {
    title: "BreadIt",
    description:
      "Breadit is full stack responsive web application that allows user to create communities and post various kind of media to it. It has complete CURD functionalities for users.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MYSql","Next-Auth","Prisma"],
    imageUrl: BreadItClone,
  },
  {
    title: "Todo App",
    description:
      "A simple todo list app that alow users to add, delete filter task it has also users to switch between mark mode and light mode.",
    tags: ["React", "JavaScript","Framer Motion"],
    imageUrl: TodoApp ,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;