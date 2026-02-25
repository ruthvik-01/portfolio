"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: "⚡",
    skills: [
      "Python",
      "C++",
      "Git",
      "Jupyter Notebook",
      "Google Colab",
      "Docker",
      "Streamlit",
      "Flask",
      "N8n",
    ],
  },
  {
    title: "ML/DL & CV",
    icon: "🧠",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "YOLOv8", "MediaPipe"],
  },
  {
    title: "Core Concepts",
    icon: "📊",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
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
            Skills
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            My tech stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card-bg border border-card-border card-shadow card-shadow-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-sm font-semibold text-foreground tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.15 * i + 0.04 * j,
                      duration: 0.3,
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-section-alt border border-card-border text-muted hover:text-accent hover:border-accent/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
