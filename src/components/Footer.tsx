"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 md:px-10 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="text-lg font-black tracking-tight lowercase"
          >
            ruthvik<span className="text-accent">.</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-foreground/30"
          >
            &copy; {new Date().getFullYear()} — Designed & built by Ruthvik Pitchika
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs font-medium text-foreground/50 hover:text-foreground transition-colors duration-300"
          >
            Back To Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
