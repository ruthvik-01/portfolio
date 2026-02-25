"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-12 border-t border-card-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight">
              RUTHVIK<span className="text-accent">.</span>
            </span>
          </div>

          {/* Credit */}
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
            Designed & Built by Ruthvik Pitchika
          </p>

          {/* Copyright */}
          <p className="text-[11px] tracking-[0.1em] text-muted-light font-mono">
            &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
