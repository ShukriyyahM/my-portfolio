"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCards";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a67c52]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#a67c52]">
              Featured Work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl leading-tight text-[#3f2d20] md:text-6xl">
              Things I've{" "}
              <span className="text-[#7a5133]">built.</span>
            </h2>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#7a5133]"
            >
              View all projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b5e54] md:text-lg">
            A selection of projects where I've applied my skills to solve
            practical problems and build useful digital experiences.
          </p>
        </motion.div>

       
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}