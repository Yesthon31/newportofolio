"use client";

import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "./components/aurora-background";
import { CometCard } from "./components/comet-card";
import { TextGenerateEffect } from "./components/text-generate-effect";
import { MacbookScroll } from "./components/macbook-scroll";
import { BackgroundLines } from "./components/background-lines";
import { HoverEffect } from "./components/card-hover-effect";
import { FaLinkedin } from "react-icons/fa6"; 
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Button from "./components/Button";

const words = `I am a developer who builds efficient, responsive web and mobile applications using technologies such as React, Next.js, Laravel, and Golang.
`;

const projects = [
  {
    title: "School",
    description:
      "SMA Kristen Mercusuar Kupang",
    link: "#",
  },
  {
    title: "University",
    description:
      "University Bina Nusantara (current)",
    link: "1",
  },
  {
    title: "Skills",
    description:
      ["React.js","Next.js","Laravel","Golang","Mysql","Tailwind","Github"],
    link: "2",
  },
];

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1 - HERO PROFILE */}
      <AuroraBackground className="pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <CometCard>
            <img
              loading="lazy"
              className="rounded-[12px] object-cover w-full md:w-72 md:h-54 aspect-[4/3]"
              alt="Invite background"
              src="/foto.jpg"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 4px 0px",
                opacity: 1,
              }}
            />
          </CometCard>
          <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Hello I&apos;m Fullstack Developer
          </div>
          <TextGenerateEffect words={words} />
          <div className="flex flex-row gap-4 w-full justify-center items-center mt-4">
            <img src="/js.png" alt="logo js" className="w-13 h-13 object-contain" />
            <img src="/css-3.png" alt="logo css" className="w-13 h-13 object-contain" />
            <img src="/html-5.png" alt="logo html" className="w-13 h-13 object-contain" />
            <img src="/atom.png" alt="logo atom" className="w-13 h-13 object-contain" />
            <img src="/Go-Logo_Blue.png" alt="logo go" className="w-13 h-13 object-contain" />
          </div>
        </motion.div>
      </AuroraBackground>

      {/* SECTION 2 - ABOUT ME */}
      <div className="flex flex-col overflow-hidden bg-zinc-900 text-slate-950 dark:bg-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 pt-20"
        >
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-white flex justify-center w-full text-center">
            About Me
          </span>
          <div className="mb-20" />
          <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-white px-4 py-12 text-center md:text-left">
            <img
              src="foto.jpg"
              alt="profil"
              className="w-40 h-40 md:w-72 md:h-72 rounded-xl object-cover border-2 border-white shadow-xl"
            />
            <div className="flex-1 flex flex-col items-center md:items-start space-y-6">
              <p className="text-2xl md:text-4xl font-bold">
                HI, I&apos;m Yesthon de Haan!
              </p>
              <p className="text-md md:text-2xl text-gray-300">
                Saya merupakan mahasiswa Bina Nusantara Malang yang berfokus pada bidang full stack development. 
                Saya memiliki pengalaman dalam mengembangkan aplikasi web dan mobile yang efisien dan responsif menggunakan berbagai teknologi seperti React, Next.js, laravel, dan juga Golang.
              </p>
              <Button />
            </div>
          </div>
          </BackgroundLines>
        </motion.div>

        {/* SECTION 3 - FEATURES / CONTENT */}
        <main className="flex flex-col overflow-hidden bg-zinc-900 text-white dark:bg-zinc-900">
      <MacbookScroll
        title="My Project"
        src="/myproject.png"
        showGradient={true}
        badge={<span className="px-2 py-1 text-1xl bg-blue-500 text-white rounded">Rocket</span>}
      />
    </main>
    {/* SECTION 4 - EDUCATION/SKILLS/EXPERIENCE */} 
      <span className="text-3xl md:text-[5rem] font-bold mt-1 leading-none text-white flex justify-center w-full text-center">
        Education & Skills
      </span>
      <div className="mb-10" />
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    {/* SECTION 5 - FOOTER */}
    <footer className="w-full bg-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-8 py-14 text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold">Let&apos;s Contact Me</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          I&apos;m open to collaboration, freelance projects, and new opportunities. Feel free to reach out!
        </p>
        <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <a
            href="mailto:yestondehaan607@gmail.com"
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-white"
          >
          <MdAlternateEmail />
          </a>
          <a
            href="https://github.com/Yesthon31"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
          <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yesthon-b-de-haan-89177a373/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
}
