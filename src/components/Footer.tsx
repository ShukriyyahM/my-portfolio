import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e9ded3] px-6 py-10 text-[#3f2d20]">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Ishaq Shakeerah.
            </Link>

            <p className="mt-2 max-w-md text-sm text-[#6b5e54]">
              Full-Stack Developer passionate about building
              meaningful digital solutions.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/ShukriyyahM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:-translate-y-1 hover:text-[#7a5133]"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/ishaq-shakeerah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:-translate-y-1 hover:text-[#7a5133]"
            >
              <FaLinkedin size={21} />
            </a>

            <a
              href="mailto:ishaqshakeerah8@gmail.com"
              aria-label="Email"
              className="transition hover:-translate-y-1 hover:text-[#7a5133]"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="my-8 border-t border-[#cbb9a8]" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#6b5e54] md:flex-row">
          <p>
            © {new Date().getFullYear()} Shukriyyah.
            All rights reserved.
          </p>

          <p>Built with passion and purpose.</p>

          <a
            href="#"
            className="flex items-center gap-2 transition hover:text-[#7a5133]"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>

      </div>
    </footer>
  );
}
