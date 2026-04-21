"use client";

import { motion } from "framer-motion";

const MARQUEE = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Python",
  "TensorFlow",
  "Next.js",
  "Tailwind",
  "Express",
  "MySQL",
  "Firebase",
  "GitHub Actions",
  "Linux",
];

const CATEGORIES = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "REST Integration"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "RESTful APIs", "Microservices", "JWT Auth"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda)", "GCP", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "OpenAI API", "Prompt Engineering", "LLM Integration", "NLP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-ink-800/60 py-32"
    >
      {/* Section label */}
      <div className="mx-auto mb-16 max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500"
        >
          <span>03 / Stack</span>
          <span className="h-px flex-1 bg-ink-800" />
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="relative mb-24 overflow-hidden border-y border-ink-800/60 py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE, ...MARQUEE].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-6 font-display text-5xl italic text-ink-800 transition-colors hover:text-amber-400 md:text-7xl"
            >
              {tech}
              <span className="mx-6 text-amber-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Categorized grid */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl font-display text-4xl leading-tight text-ink-100 md:text-6xl"
        >
          The tools.{" "}
          <span className="italic text-amber-400">Not just buzzwords —</span>{" "}
          each one shipped something.
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group border-t border-ink-800/60 pt-6 transition-colors hover:border-amber-400/40"
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                {cat.title}
              </p>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-ink-200 transition-colors group-hover:text-ink-50"
                  >
                    <span className="mr-3 text-amber-400/60">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
