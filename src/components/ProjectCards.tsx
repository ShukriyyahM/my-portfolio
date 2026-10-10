"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group overflow-hidden rounded-3xl border border-[#e9ded3] bg-[#fffdf9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7a5133]/10"
    >
      
      <div className="relative aspect-16/10 overflow-hidden bg-[#eee4da]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[#3f2d20]/0 transition-colors duration-300 group-hover:bg-[#3f2d20]/10" />
      </div>

      
      <div className="p-7">
        <h3 className="text-2xl text-[#3f2d20]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#6b5e54]">
          {project.description}
        </p>

        
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-[#f3ede6] px-3 py-1.5 text-xs font-medium text-[#7a5133]"
            >
              {technology}
            </span>
          ))}
        </div>

        
        <div className="mt-5 flex items-center gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5f5348] hover:text-[#7a5133]"
          >
            <FaGithub size={17} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5f5348] hover:text-[#7a5133]"
          >
            <ExternalLink size={17} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}