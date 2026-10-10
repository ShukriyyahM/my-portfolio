"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
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
              About Me
            </p>
          </div>

          <h2 className="max-w-2xl text-4xl leading-tight text-[#3f2d20] md:text-6xl">
            Turning ideas into{" "}
            <span className="text-[#7a5133]">digital experiences.</span>
          </h2>
        </motion.div>

        
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-[#5f5348]">
              I'm a Full Stack Developer passionate about building modern web
              applications that solve practical problems and create meaningful
              experiences.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6b5e54]">
              My development journey has allowed me to work across both the
              frontend and backend of applications. I enjoy creating
              responsive interfaces, designing APIs, working with databases,
              and building secure authentication systems.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6b5e54]">
              I'm continuously learning and improving my skills while working
              on projects that challenge me to think beyond just writing code.
            </p>
          </motion.div>

          
          <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1">
            <FocusCard
              icon={<Code2 size={24} />}
              title="Frontend"
              description="Responsive and accessible interfaces using React, Next.js and TypeScript."
              delay={0}
            />

            <FocusCard
              icon={<Server size={24} />}
              title="Backend"
              description="Reliable APIs and server-side applications using Node.js and Express."
              delay={0.1}
            />

            <FocusCard
              icon={<Database size={24} />}
              title="Database"
              description="Structured and efficient data management using PostgreSQL, Prisma and Firebase."
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl border border-[#e9ded3] bg-[#fffdf9] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#7a5133]/5"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eee4da] text-[#7a5133] transition-colors group-hover:bg-[#7a5133] group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-xl text-[#3f2d20]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#6b5e54]">
        {description}
      </p>
    </motion.div>
  );
}