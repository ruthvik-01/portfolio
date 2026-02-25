"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-28 md:py-40 px-6 md:px-10 bg-dark-bg text-dark-fg"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, ease }}
            className="gold-dot"
          />
        </div>

        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20 items-start">
          {/* Left label */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="text-5xl md:text-6xl font-black tracking-tight"
          >
            About
          </motion.h2>

          {/* Right bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium">
              Ruthvik is an aspiring AI/ML engineer with a passion for building
              intelligent systems that come to life on the internet.{" "}
              <span className="text-accent">
                He&apos;s pursuing a B.Tech in Computer Science with a CGPA of 8.1
                from Dhanekula Institute of Engineering &amp; Technology
              </span>{" "}
              and has been building projects spanning student resource platforms,
              AI-powered health assistants, and medical imaging solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
