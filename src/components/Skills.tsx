"use client";

import { motion } from "framer-motion";
import {Code2, Database, GitBranch, Layers3, Server, Wrench} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 size={22} />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={22} />,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication", "RBAC"],
  },
  {
    title: "Database",
    icon: <Database size={22} />,
    skills: ["PostgreSQL", "Prisma ORM", "Firebase", "Firestore", "SQL"],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench size={22} />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "NPM"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f3ede6] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
       
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#a67c52]" />

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#a67c52]">
              My Toolkit
            </p>
          </div>

          <h2 className="max-w-2xl text-4xl leading-tight text-[#3f2d20] md:text-6xl">
            Technologies I use to{" "}
            <span className="text-[#7a5133]">bring ideas to life.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b5e54] md:text-lg">
            A growing collection of technologies and tools I use to design,
            build, test and maintain web applications.
          </p>
        </motion.div>

        
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-[#e3d6c9] bg-[#fffdf9] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7a5133]/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eee4da] text-[#7a5133]">
                  {group.icon}
                </div>

                <h3 className="text-2xl text-[#3f2d20]">
                  {group.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#e4d7ca] bg-[#faf7f2] px-3.5 py-2 text-sm text-[#5f5348] transition-colors hover:border-[#a67c52] hover:text-[#7a5133]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex items-center gap-3 text-sm text-[#8a7b6e]"
        >
          <Layers3 size={18} />
          <span>
            Always learning, experimenting and improving.
          </span>
        </motion.div>
      </div>
    </section>
  );
}