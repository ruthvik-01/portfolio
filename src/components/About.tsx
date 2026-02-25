"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "8.1", label: "CGPA" },
  { value: "3+", label: "Projects" },
  { value: "3+", label: "Hackathons" },
  { value: "5+", label: "Certifications" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 md:py-44 px-8 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="bracket-label block mb-6"
        >
          [ About Me ]
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-16"
        >
          ABOUT <span className="text-outline">RUTHVIK</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              From the classrooms of engineering to the world of AI, I&apos;m on
              a mission to build intelligent systems that make a real difference.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              I&apos;m a Computer Science student at Dhanekula Institute of
              Engineering &amp; Technology with strong foundations in Python,
              machine learning, and deep learning. My work spans building student
              resource platforms, engineering multi-modal health assistants, and
              medical imaging solutions.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              I believe in learning by building and am always exploring new ways
              to apply AI to solve real-world problems.
            </p>
          </motion.div>

          {/* Right — Stats + Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6, ease }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-card-border mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease }}
                  className="p-8 bg-background"
                >
                  <span className="text-3xl md:text-4xl font-bold text-foreground block mb-2 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted font-mono">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mission card */}
            <div className="border border-card-border p-6 rounded-xl">
              <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-3 font-mono">
                Mission
              </p>
              <p className="text-sm text-muted leading-relaxed italic">
                &quot;Transforming complex data into intelligent solutions that
                serve humanity — one model at a time.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
