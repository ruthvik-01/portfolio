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
    <section id="contact" className="py-32 md:py-40 px-8 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-6"
        >
          <span className="bracket-label">[ Get In Touch ]</span>
        </motion.div>

        {/* Large CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            LET&apos;S BUILD
            <br />
            <span className="text-outline">SOMETHING</span>
            <br />
            <span className="gradient-text">INTELLIGENT</span>
          </h2>
        </motion.div>

        {/* Description + CTA */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.8, ease }}
          >
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-md">
              I&apos;m currently looking for internship opportunities in AI/ML
              and software engineering. Whether you have a project idea, an open
              position, or just want to connect — I&apos;d love to hear from you.
            </p>
            <motion.a
              href="mailto:ruthvikp186@gmail.com"
              whileHover={{ x: 6 }}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-500"
            >
              <span className="w-12 h-px bg-accent group-hover:w-20 transition-all duration-500" />
              ruthvikp186@gmail.com
              <HiArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-500"
              />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="space-y-4"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase font-mono text-muted mb-6">
              Follow me
            </p>
            {[
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/in/ruthvik-pitchika",
                label: "LinkedIn",
                handle: "@ruthvik-pitchika",
              },
              {
                icon: FaGithub,
                href: "https://github.com/ruthvik-pitchika",
                label: "GitHub",
                handle: "@ruthvik-pitchika",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 py-4 border-t border-card-border last:border-b"
              >
                <social.icon
                  size={18}
                  className="text-muted group-hover:text-accent transition-colors duration-500"
                />
                <div className="flex-1">
                  <span className="text-sm font-medium group-hover:text-accent transition-colors duration-500">
                    {social.label}
                  </span>
                  <span className="text-xs text-muted ml-3">
                    {social.handle}
                  </span>
                </div>
                <HiArrowRight
                  size={14}
                  className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-500"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
