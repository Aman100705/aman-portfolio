"use client";

import { motion } from "framer-motion";

const FACTS = [
  { label: "Education", value: "B.Tech CSE · SRM Institute" },
  { label: "Year", value: "3rd year · Graduating 2027" },
  { label: "CGPA", value: "8.44 / 10.0" },
  { label: "Location", value: "Delhi NCR · Remote friendly" },
  { label: "Focus", value: "Backend · Full-stack · AI" },
  { label: "Open to", value: "Internships & collabs" },
];

export default function About() {
  return (
    <section
      id="about"
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
          <span>01 / About</span>
          <span className="h-px flex-1 bg-ink-800" />
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.3fr_1fr] md:gap-24">
          {/* Pull quote + bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-4xl leading-[1.15] text-ink-100 md:text-6xl">
              I don't just write code —{" "}
              <span className="italic text-amber-400">I ship solutions</span>{" "}
              that move numbers.
            </p>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-400 md:text-lg">
              <p>
                I'm a CS student at SRM Institute, currently in my 6th semester.
                My day-one obsession has been <span className="text-ink-100">building things that work</span>{" "}
                — not pretty demos, not tutorial clones, but apps that solve
                real problems and measurably perform.
              </p>
              <p>
                When I tell you my MERN e-commerce cut API latency by{" "}
                <span className="text-amber-400">~40%</span>, or my weather
                app reduced network calls by <span className="text-amber-400">60%</span>,
                those aren't marketing numbers. They're benchmarks. That habit
                — of measuring before I claim — is what I bring to every team
                I join.
              </p>
              <p>
                Right now I'm stacking the skills that matter: Spring Boot
                microservices, real TensorFlow models, and the DevOps glue
                (Docker, Kubernetes, CI/CD) that ties production-grade
                software together.
              </p>
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-px"
          >
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
              At a glance
            </p>
            {FACTS.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                className="group flex items-baseline justify-between border-b border-ink-800/60 py-4 transition-colors hover:border-amber-400/30"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500">
                  {f.label}
                </span>
                <span className="text-right text-sm text-ink-100 transition-colors group-hover:text-amber-400 md:text-base">
                  {f.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
