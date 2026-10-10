"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f3ede6] px-6 py-28 md:py-36">
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
              Get In Touch
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl leading-tight text-[#3f2d20] md:text-6xl">
            Let's build something{" "}
            <span className="text-[#7a5133]">meaningful.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b5e54] md:text-lg">
            Have a project, opportunity, or idea you'd like to discuss?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="mt-14 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#e3d6c9] bg-[#fffdf9] p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eee4da] text-[#7a5133]">
              <Mail size={22} />
            </div>

            <h3 className="mt-6 text-2xl text-[#3f2d20]">
              Contact Me
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6b5e54]">
              The easiest way to reach me is through email or any of my
              professional profiles.
            </p>

            
            <a
              href="mailto:ishaqshakeerah8@gmail.com"
              className="mt-6 block text-sm font-medium text-[#7a5133] hover:underline"
            >
              ishaqshakeerah8@gmail.com
            </a>

            
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/ShukriyyahM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#6b5e54] hover:text-[#7a5133]"
              >
                <FaGithub size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/ishaq-shakeerah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#6b5e54] hover:text-[#7a5133]"
              >
                <FaLinkedinIn size={21} />
              </a>
            </div>
          </motion.div>

          
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#e3d6c9] bg-[#fffdf9] p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#5f5348]"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#ded0c2] bg-[#faf7f2] px-4 py-3 text-sm text-[#3f2d20] outline-none placeholder:text-[#a0958b] focus:border-[#a67c52]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#5f5348]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#ded0c2] bg-[#faf7f2] px-4 py-3 text-sm text-[#3f2d20] outline-none placeholder:text-[#a0958b] focus:border-[#a67c52]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-[#5f5348]"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-[#ded0c2] bg-[#faf7f2] px-4 py-3 text-sm text-[#3f2d20] outline-none placeholder:text-[#a0958b] focus:border-[#a67c52]"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#5f5348]"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-[#ded0c2] bg-[#faf7f2] px-4 py-3 text-sm text-[#3f2d20] outline-none placeholder:text-[#a0958b] focus:border-[#a67c52]"
              />
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#7a5133] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#5f3d27]"
            >
              Send Message

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}