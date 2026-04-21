"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-10"
    >
      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fafaf9 1px, transparent 1px)",
            backgroundSize: "80px 100%",
          }}
        />
      </div>

      {/* Amber orb glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/80 px-4 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-300">
            Available for internships
          </span>
        </motion.div>

        {/* Index numbers — editorial touch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500"
        >
          <span>00 / Intro</span>
          <span className="h-px flex-1 bg-ink-800" />
          <span>Delhi NCR · IN</span>
        </motion.div>

        {/* Name */}
        <h1 className="font-display text-[15vw] leading-[0.9] text-ink-50 md:text-[10rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Aman
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block italic text-amber-400"
          >
            Patel<span className="text-ink-50">.</span>
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:gap-16"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              What he does
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink-200 md:text-xl">
              Full-stack engineer building{" "}
              <span className="font-display italic text-amber-400">
                production-grade
              </span>{" "}
              backends in Java & Spring Boot, shipping MERN apps, and wiring
              real intelligence into software with AI.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              Currently
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-300">
              3rd year CS at SRM Institute · 8.44 CGPA · Shipping open-source
              with 40+ stars · Seeking internships that build real things.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-950 transition hover:bg-ink-50"
          >
            See the work
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-ink-700 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-200 transition hover:border-amber-400 hover:text-amber-400"
          >
            <Download
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-y-0.5"
            />
            Resume
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-400 underline underline-offset-8 transition hover:text-amber-400"
          >
            or just say hi →
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-600"
      >
        <span className="inline-block animate-bounce">↓ Scroll</span>
      </motion.div>
    </section>
  );
}
