"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#e9ded3]/70 bg-[#faf7f2]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        
        <a
          href="#home"
          className="font-serif text-2xl font-bold text-[#7a5133]"
        >
         Ishaq Shakeerah.
        </a>

        
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#5f5348] hover:text-[#7a5133]"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-[#7a5133] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#5f3d27]"
          >
            Let's Talk
          </a>
        </div>

       
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-[#7a5133] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

     
      {open && (
        <div className="border-t border-[#e9ded3] bg-[#faf7f2] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#5f5348]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}