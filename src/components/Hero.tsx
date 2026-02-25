"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-mono text-muted border border-card-border rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Large typography */}
        <div className="relative mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease }}
            className="font-bold tracking-tighter leading-[0.85]"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            AI/ML
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease }}
            className="font-bold tracking-tighter leading-[0.85] text-outline"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            ENGI
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease }}
            className="font-bold tracking-tighter leading-[0.85] gradient-text"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            NEER
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          {/* Left: description + socials */}
          <div className="flex items-end gap-8">
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Aspiring AI/ML engineer building intelligent systems with Python,
              Machine Learning & Deep Learning. Focused on creating impactful
              solutions that make a difference.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <motion.a
                href="https://linkedin.com/in/ruthvik-pitchika"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-muted hover:text-accent transition-colors duration-500"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/ruthvik-pitchika"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-muted hover:text-accent transition-colors duration-500"
              >
                <FaGithub size={18} />
              </motion.a>
            </div>
          </div>

          {/* Right: name + email */}
          <div className="text-right">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">
              Ruthvik Pitchika
            </p>
            <p className="text-[11px] tracking-[0.1em] text-muted-light font-mono">
              ruthvikp186@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors duration-500"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown size={14} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
