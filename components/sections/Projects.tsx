"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  index: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  stack: string[];
  highlight: string;
  links?: { live?: string; github?: string };
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Full-Stack E-Commerce Platform",
    tagline: "Production-grade MERN shop with Redis caching & JWT auth",
    year: "2025",
    description:
      "A complete e-commerce backend with Node.js/Express — product catalog, cart, orders, payments via RESTful APIs. JWT-based auth with role-based access control for Admin and Customer. Deployed on AWS EC2 with Docker; images on S3.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "AWS", "Docker", "JWT"],
    highlight: "~40% faster API responses under load via Redis caching",
    links: { github: "#" },
  },
  {
    index: "02",
    title: "AI-Powered Chatbot Integration",
    tagline: "Context-aware GPT chatbot with multi-turn memory",
    year: "2025",
    description:
      "Integrated OpenAI's GPT API into a Flask backend with a clean REST API layer (POST /chat, GET /history) consumed by a React frontend. Applied domain-tuned prompt engineering to meaningfully improve response relevance.",
    stack: ["Python", "OpenAI API", "Flask", "React", "REST", "JSON"],
    highlight: "50% relevance improvement through prompt engineering",
    links: { github: "#" },
  },
  {
    index: "03",
    title: "YouTube Clone",
    tagline: "Streaming UX on YouTube Data API v3",
    year: "2024",
    description:
      "Fully responsive video streaming web app with real-time search, playback, and personalized playlists. Modular vanilla JS architecture with infinite scroll, debounced search, and dynamic routing.",
    stack: ["JavaScript", "HTML5", "CSS3", "YouTube API"],
    highlight: "35% fewer API calls via debounced search",
    links: { github: "#" },
  },
  {
    index: "04",
    title: "Real-Time Weather Dashboard",
    tagline: "Desktop forecasting app with local caching",
    year: "2024",
    description:
      "Python desktop weather dashboard fetching 5-day forecasts via OpenWeatherMap REST API with async polling. Tkinter GUI with dynamic icons, temperature graphs, location auto-detection.",
    stack: ["Python", "Tkinter", "OpenWeatherMap API"],
    highlight: "60% reduction in redundant network calls",
    links: { github: "#" },
  },
  {
    index: "05",
    title: "Attendance Management System",
    tagline: "CLI-based record system in pure C++",
    year: "2024",
    description:
      "CLI system with admin authentication, student registration, and attendance logging via file I/O. OOP principles (encapsulation, inheritance) applied throughout. Optimized file seek operations for O(1) lookups with concurrent-safe integrity checks.",
    stack: ["C++", "File I/O", "OOP", "DSA"],
    highlight: "O(1) record retrieval via seek optimization",
    links: { github: "#" },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-ink-800/60 px-6 py-32 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500"
        >
          <span>02 / Selected Work</span>
          <span className="h-px flex-1 bg-ink-800" />
          <span>{PROJECTS.length} projects</span>
        </motion.div>

        {/* Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl font-display text-4xl leading-tight text-ink-100 md:text-6xl"
        >
          Things I've shipped.{" "}
          <span className="italic text-amber-400">Real numbers, not vibes.</span>
        </motion.h2>

        {/* Projects list */}
        <div className="space-y-px">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-ink-800/60 py-10 transition-colors last:border-b"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
                {/* Index */}
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-600">
                    {project.index}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-3xl leading-tight text-ink-50 transition-colors group-hover:text-amber-400 md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-ink-400 md:text-base">
                    {project.tagline}
                  </p>

                  <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-400 md:text-base">
                    {project.description}
                  </p>

                  {/* Highlight */}
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1.5">
                    <span className="h-1 w-1 rounded-full bg-amber-400" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-amber-400">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Stack */}
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-ink-500 before:mr-3 before:text-ink-700 before:content-['·'] first:before:content-['']"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition hover:border-amber-400 hover:bg-amber-400 hover:text-ink-950 md:mt-1"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center font-mono text-xs text-ink-500"
        >
          + hackathon builds @ IIT Hyderabad & DTU InnoVault ·{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition hover:text-amber-400"
          >
            see more on GitHub →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
