"use client";

import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 md:pt-40"
    >
      
      <div className="pointer-events-none absolute left-0 top-40 -z-10 h-72 w-72 rounded-full bg-[#e9ded3]/50 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
       
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a67c52]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#a67c52]">
              Welcome
            </p>
          </div>

          <h1 className="text-6xl leading-[1.05] text-[#3f2d20] md:text-8xl">
            Ishaq
            <br />
            <span className="text-[#7a5133]">Shakeerah.</span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-[#5f5348] md:text-2xl">
            Full Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#6b5e54] md:text-lg">
            I build modern web applications that combine thoughtful design,
            reliable backend systems, and practical solutions to real-world
            problems.
          </p>

          
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#7a5133] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#7a5133]/10 hover:-translate-y-0.5 hover:bg-[#5f3d27]"
            >
              Explore My Work

              <ArrowDown
                size={17}
                className="transition-transform group-hover:translate-y-1"
              />
            </a>

           <a
             href="/document/shakiirah's.cv.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="rounded-full border border-[#d7c7b8] px-7 py-3.5 text-sm font-medium text-[#7a5133] hover:bg-[#eee4da]"
            >
             View CV
            </a>
          </div>

          
          <div className="mt-9 flex items-center gap-5">
            <a
              href="https://github.com/ShukriyyahM"
              aria-label="GitHub"
              className="text-[#6b5e54] hover:-translate-y-1 hover:text-[#7a5133]"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/ishaq-shakeerah/"
              aria-label="LinkedIn"
              className="text-[#6b5e54] hover:-translate-y-1 hover:text-[#7a5133]"
            >
              <FaLinkedinIn size={20} /> 
            </a>

            <a
              href="ishaqshakeerah8@gmail.com"
              aria-label="Email"
              className="text-[#6b5e54] hover:-translate-y-1 hover:text-[#7a5133]"
            >
              <Mail size={20} />
            </a>

            <span className="ml-1 h-5 w-px bg-[#d7c7b8]" />

            <span className="text-sm text-[#8a7b6e]">
              Available for opportunities
            </span>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          
          <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border border-[#e9ded3] bg-[#eee4da] shadow-2xl shadow-[#7a5133]/10">
            <Image
              src="/images/github.jpeg"
              alt="Ishaq Shakeerah working at a desk"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          
          <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-[#e7d8c7]" />

          <div className="absolute -right-5 -top-5 -z-10 h-24 w-24 rounded-full border border-[#cdbba9]" />

         
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 -left-6 rounded-2xl border border-[#e9ded3] bg-[#fffdf9]/95 px-5 py-4 shadow-xl backdrop-blur-sm md:-left-10"
          >
            <p className="text-xs uppercase tracking-wider text-[#a67c52]">
              Currently building
            </p>

            <p className="mt-1 text-sm font-semibold text-[#3f2d20]">
              Meaningful digital solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}