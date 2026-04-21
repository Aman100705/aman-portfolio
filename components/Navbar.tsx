"use client";

import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-ink-800/50 bg-ink-950/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-50"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse-slow" />
          AP<span className="text-ink-500">/2027</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 transition hover:text-amber-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:ap3668@srmist.edu.in"
          className="rounded-full border border-ink-700 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-200 transition hover:border-amber-400 hover:text-amber-400"
        >
          Let's talk →
        </a>
      </nav>
    </motion.header>
  );
}
