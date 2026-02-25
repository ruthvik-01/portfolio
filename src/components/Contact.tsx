"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
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
            Contact
          </motion.h2>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium mb-10">
              Psst... exciting opportunities, anyone? I&apos;m open to
              internships, collaborations, and cool AI/ML projects.{" "}
              <span className="text-accent">
                Let&apos;s build something intelligent together.
              </span>
            </p>

            {/* CTA button */}
            <motion.a
              href="mailto:ruthvikp186@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-dark-fg/30 text-dark-fg font-semibold text-base hover:bg-dark-fg hover:text-dark-bg transition-all duration-300 mb-10"
            >
              Reach Out
              <HiArrowRight size={18} />
            </motion.a>

            <p className="text-sm text-dark-fg/40 mb-8">
              ruthvikp186@gmail.com
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/p-ruthvik",
                  label: "LinkedIn",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/ruthvik-01",
                  label: "GitHub",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-dark-fg/20 text-dark-fg/70 text-sm transition-all duration-300 ${
                    social.label === "LinkedIn"
                      ? "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white"
                      : social.label === "GitHub"
                        ? "hover:bg-white hover:border-white hover:text-[#111]"
                        : "hover:border-dark-fg/50 hover:text-dark-fg"
                  }`}
                >
                  <social.icon size={16} />
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
