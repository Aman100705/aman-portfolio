"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

type Project = {
  index: string;
  title: string;
  tagline: string;
  year: string;
  description: string;
  stack: string[];
  highlight: string;
  links?: { live?: string; github?: string; githubAlt?: { label: string; url: string } };
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Cadence",
    tagline: "Multi-role goal-setting & performance-tracking SaaS, built in 24h",
    year: "2026",
    description:
      "A full goal-management platform with three roles (Employee, Manager, Admin) and a complete lifecycle — draft, submit, approve, lock, quarterly check-ins, audit-ready reporting. Six unit-of-measure scoring formulas, weightage validation, and an Excel export. The standout feature is an AI Goal Coach that uses Gemini to rewrite vague drafts into SMART goals with a quality score and tips. Built solo in a 24-hour hackathon.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Gemini AI",
      "Tailwind",
      "Framer Motion",
    ],
    highlight: "3 roles · 7-table schema · AI Goal Coach · full audit trail",
    links: {
      live: "https://cadence-cyan.vercel.app",
      github: "https://github.com/Aman100705/cadence",
    },
    featured: true,
  },
  {
    index: "02",
    title: "ResuMatch",
    tagline: "ATS-style resume → JD analyzer with explainable scoring",
    year: "2026",
    description:
      "Full-stack resume analyzer: upload a PDF, paste a job description, get back a 0–100 match score with the exact keywords you're missing. Spring Boot REST API with JWT auth, PostgreSQL, and Apache PDFBox for parsing. Next.js dashboard with an animated radial score gauge. Uses a curated 179-skill dictionary plus Jaccard similarity — no black-box scoring.",
    stack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Apache PDFBox",
      "Next.js 15",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    highlight: "16 REST endpoints · 5 entities · multi-tenant safe by default",
    links: {
      live: "https://resumatch-ui-mlt3.vercel.app",
      github: "https://github.com/Aman100705/resumatch",
      githubAlt: {
        label: "Frontend repo",
        url: "https://github.com/Aman100705/resumatch-ui",
      },
    },
    featured: true,
  },
  {
    index: "03",
    title: "SignSpeak",
    tagline: "Real-time ASL recognition in the browser — MediaPipe + TensorFlow.js",
    year: "2026",
    description:
      "A browser-based sign language recognition tool. Uses MediaPipe Tasks Vision to track 21 hand keypoints at ~60 FPS, with landmark normalization (wrist-centered, scale-invariant) so position and distance don't break classification. Currently has the detection pipeline and training-data collection UI working; the TensorFlow.js classifier (63→64→32→26) and live prediction page are the next milestones. Whole pipeline runs client-side — no server, no cloud video streaming, no privacy concerns.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "MediaPipe",
      "TensorFlow.js",
      "Tailwind",
      "Computer Vision",
    ],
    highlight: "In progress · 21-point hand tracking · client-side ML",
    links: {
      github: "https://github.com/Aman100705/signspeak",
    },
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
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-amber-400">
                      <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
                      Live
                    </span>
                  )}
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

                  {/* Action buttons (live demo, repos) */}
                  {(project.links?.live || project.links?.githubAlt) && (
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {project.links?.live && (
                        
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-400 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-950 transition hover:bg-amber-300"
                        >
                          <ExternalLink size={12} strokeWidth={2.5} />
                          <span>Live demo</span>
                        </a>
                      )}
                      {project.links?.github && (
                        
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-300 transition hover:border-amber-400 hover:text-amber-400"
                        >
                          <Github size={12} strokeWidth={2.5} />
                          <span>{project.links?.githubAlt ? "Backend" : "Code"}</span>
                        </a>
                      )}
                      {project.links?.githubAlt && (
                        
                          href={project.links.githubAlt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-300 transition hover:border-amber-400 hover:text-amber-400"
                        >
                          <Github size={12} strokeWidth={2.5} />
                          <span>{project.links.githubAlt.label}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Top-right circular GitHub link — kept for non-featured projects */}
                {project.links?.github && !project.links?.live && (
                  
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
          + hackathon builds @ AtomQuest, IIT Hyderabad &amp; DTU InnoVault ·{" "}
          
            href="https://github.com/Aman100705"
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