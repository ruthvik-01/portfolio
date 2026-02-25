"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap } from "react-icons/hi";

const educationData = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Dhanekula Institute Of Engineering & Technology",
    year: "2023 – 2027",
    grade: "CGPA: 8.1 (up to 5th semester)",
    current: true,
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Sri Sarada Junior College",
    year: "2023",
    grade: "CGPA: 8.05/10",
    board: "Board Of Intermediate Of Education, AP",
    current: false,
  },
  {
    degree: "Secondary (X), CBSE",
    institution: "Atkinson High School, Vijayawada",
    year: "2021",
    grade: "",
    current: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-accent font-medium">
            Education
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Academic journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-card-border hidden md:block" />

          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      edu.current
                        ? "bg-accent border-accent shadow-[0_0_8px_rgba(124,58,237,0.4)]"
                        : "bg-background border-card-border"
                    }`}
                  />
                </div>

                <div className="p-5 md:p-6 rounded-2xl border border-card-border bg-card-bg card-shadow card-shadow-hover group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div className="flex items-start gap-3">
                      <HiAcademicCap
                        className="text-accent mt-0.5 shrink-0"
                        size={18}
                      />
                      <div>
                        <h3 className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors duration-200">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-muted mt-0.5">
                          {edu.institution}
                        </p>
                        {edu.board && (
                          <p className="text-xs text-muted-light mt-0.5">
                            {edu.board}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-accent bg-accent-bg px-3 py-1 rounded-full w-fit shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  {edu.grade && (
                    <p className="text-sm text-muted mt-2 md:ml-[30px]">
                      {edu.grade}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
