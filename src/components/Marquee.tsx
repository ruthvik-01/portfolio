"use client";

import { motion } from "framer-motion";

const items = [
  "Let's Work Together",
  "Open To Opportunities",
  "Full Stack",
  "Let's Build Something",
];

export default function Marquee() {
  return (
    <section className="relative py-10 overflow-hidden border-t border-b border-foreground/10 bg-background select-none">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-0"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate the items twice for seamless looping */}
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="flex items-center text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground/10 mx-4"
          >
            {text}
            <span className="mx-6 text-accent text-3xl md:text-5xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
