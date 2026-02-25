"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Huge name in bordered box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="border border-foreground/15 rounded-2xl p-8 md:p-12 mb-10"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-center leading-none"
          >
            ruthvik pitchika
          </h2>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} Ruthvik Pitchika
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-foreground/30 italic"
          >
            ~ Stop looking at my bottom ~
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full border border-foreground/15 text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Back To Top ↗
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
