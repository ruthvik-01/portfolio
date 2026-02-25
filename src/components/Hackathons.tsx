"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiLightningBolt } from "react-icons/hi";

const hackathons = [
  {
    title: "24-Hour Hackathon",
    venue: "VR Engineering College",
    year: "",
  },
  {
    title: "Smart India Hackathon",
    venue: "National Level",
    year: "2025",
  },
  {
    title: "Codegnan Hackathon",
    venue: "",
    year: "2026",
  },
];

export default function Hackathons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-accent font-medium">
            Hackathons
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Competitive spirit
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {hackathons.map((hack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.4 }}
              className="p-6 rounded-2xl border border-card-border bg-card-bg card-shadow card-shadow-hover text-center"
            >
              <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-accent-bg flex items-center justify-center">
                <HiLightningBolt size={18} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {hack.title}
              </h3>
              <p className="text-xs text-muted">
                {hack.venue}
                {hack.venue && hack.year ? " · " : ""}
                {hack.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
