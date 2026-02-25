"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiOutlineAcademicCap } from "react-icons/hi";

const certifications = [
  // Python & AI/ML
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
    link: "/certifications/basics-of-python.pdf",
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    link: "/certifications/python-foundation.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    link: "/certifications/intro-to-ai.pdf",
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    link: "/certifications/intro-to-deep-learning.pdf",
  },
  {
    title: "Introduction to NLP",
    issuer: "Infosys Springboard",
    link: "/certifications/intro-to-nlp.pdf",
  },
  // Oracle
  {
    title: "Oracle AI Foundations",
    issuer: "Oracle",
    link: "/certifications/oracle-ai.pdf",
  },
  {
    title: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    link: "/certifications/oracle-cloud.pdf",
  },
  // Frontend
  {
    title: "Responsive Web Development (HTML5, CSS3, JS)",
    issuer: "Infosys Springboard",
    link: "/certifications/responsive-web-dev.pdf",
  },
  {
    title: "Front End Development Foundation",
    issuer: "TechA",
    link: "/certifications/frontend-dev-foundation.pdf",
  },
  {
    title: "Responsive Web Design (HTML, CSS & JS)",
    issuer: "TechA",
    link: "/certifications/responsive-web-design.pdf",
  },
  // Java
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    link: "/certifications/java-fundamentals.pdf",
  },
  {
    title: "Java Language Features",
    issuer: "Infosys Springboard",
    link: "/certifications/java-language-features.pdf",
  },
  {
    title: "Java SE 8 Features",
    issuer: "Infosys Springboard",
    link: "/certifications/java-se8-features.pdf",
  },
  // Other
  {
    title: "Database Management Systems",
    issuer: "Infosys Springboard",
    link: "/certifications/dbms.pdf",
  },
  {
    title: "Cyber Security & Privacy",
    issuer: "NPTEL",
    link: "/certifications/cyber-security.pdf",
  },
  {
    title: "C & C++ Programming",
    issuer: "Spoken Tutorial – IIT Bombay",
    link: "/certifications/cpp.pdf",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      className="py-24 md:py-32 px-6 md:px-8 bg-section-alt"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-accent font-medium">
            Certifications
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Credentials & awards
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="group p-5 rounded-2xl bg-card-bg border border-card-border card-shadow card-shadow-hover block"
            >
              <div className="flex items-start justify-between mb-3">
                <HiOutlineAcademicCap
                  size={22}
                  className="text-accent shrink-0"
                />
                <HiExternalLink
                  size={14}
                  className="text-muted-light group-hover:text-accent transition-colors duration-200"
                />
              </div>
              <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors duration-200 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-muted">{cert.issuer}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
