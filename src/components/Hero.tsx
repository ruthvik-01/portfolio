"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen grain-bg flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <span className="text-sm text-muted">Currently</span>
          <span className="text-sm font-bold text-foreground">
            Open to Work<span className="text-accent">.</span>
          </span>
        </motion.div>

        {/* Massive name */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease }}
          className="font-black tracking-tighter leading-[0.85] lowercase"
          style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
        >
          ruthvik
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease }}
          className="font-black tracking-tighter leading-[0.85] lowercase"
          style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
        >
          pitchik
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          >
            a
          </motion.span>
        </motion.h1>

        {/* Gold dot accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease }}
          className="mt-8"
        >
          <span className="gold-dot" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="mt-6 text-lg text-muted"
        >
          AI/ML Engineer
        </motion.p>
      </div>
    </section>
  );
}
