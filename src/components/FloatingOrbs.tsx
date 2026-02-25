"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/[0.08] rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 60, -100, 0],
          scale: [1, 0.8, 1.15, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-2/3 right-1/4 w-80 h-80 bg-violet-400/[0.06] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -50, 80, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-400/[0.05] rounded-full blur-[80px]"
      />
    </div>
  );
}
