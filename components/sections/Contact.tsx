"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Phone } from "lucide-react";

const SOCIALS = [
  {
    label: "Email",
    value: "amanpa9918@gmail.com",
    href: "mailto:amanpa9918@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/aman-patel",
    href: "https://linkedin.com/in/aman-patel-06a36b169/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@amanpatel",
    href: "https://github.com/Aman100705",
    icon: Github,
  },
  {
    label: "Phone",
    value: "+91 9956290357",
    href: "tel:+919956290357",
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink-800/60 px-6 py-32 md:px-10"
    >
      {/* Big amber glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500"
        >
          <span>04 / Contact</span>
          <span className="h-px flex-1 bg-ink-800" />
          <span>End of page ✦</span>
        </motion.div>

        {/* Huge editorial CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[14vw] leading-[0.95] text-ink-100 md:text-[9rem]"
        >
          Let's build
          <br />
          <span className="italic text-amber-400">something real</span>
          <span className="text-ink-100">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink-400 md:text-lg"
        >
          Recruiting? Collaborating? Just curious? The fastest way to reach me
          is email — I answer within a day. Or ask the AI widget in the corner —
          it knows everything on my resume, including things I haven't put on
          LinkedIn.
        </motion.p>

        {/* Primary email CTA */}
        <motion.a
          href="mailto:ap3668@srmist.edu.in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="group mt-12 inline-flex items-center gap-4 border-b border-amber-400 pb-2 font-display text-3xl text-amber-400 transition-all hover:gap-6 md:text-5xl"
        >
          ap3668@srmist.edu.in
          <ArrowUpRight
            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            size={32}
            strokeWidth={1.5}
          />
        </motion.a>

        {/* Social grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-1 gap-px md:grid-cols-4"
        >
          {SOCIALS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="group block border border-ink-800/60 p-6 transition-all hover:border-amber-400/40 hover:bg-ink-900"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="mb-6 text-ink-500 transition-colors group-hover:text-amber-400"
                />
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                  {s.label}
                </p>
                <p className="font-mono text-xs text-ink-100 transition-colors group-hover:text-amber-400">
                  {s.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-ink-800/60 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
            © 2026 Aman Patel · Built with Next.js + Gemini
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
            ↑{" "}
            <a
              href="#top"
              className="underline underline-offset-4 transition hover:text-amber-400"
            >
              Back to top
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
