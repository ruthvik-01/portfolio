"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    num: "01",
    title: "UniPeasy",
    subtitle: "Student Resource Platform",
    description:
      "A centralized platform to simplify student access to academic information and university resources.",
    details: [
      "Built and deployed to centralize university resources and simplify student access to academic information",
      "Built a Flask server with a unified dashboard for file management, access control, and real-time storage handling",
    ],
    tags: ["Flask", "Python", "Dashboard", "File Management"],
    github: "#",
    live: "#",
    color: "#7C3AED",
  },
  {
    num: "02",
    title: "Health Assistant",
    subtitle: "AI-Powered Multi-Modal Chatbot",
    description:
      "An intelligent WhatsApp health assistant for rural users, supporting text, image, audio, and document queries.",
    details: [
      "Engineered an intelligent WhatsApp health assistant using Google Gemini AI and n8n to process text, image, audio, and document queries",
      "Designed to provide simplified medical guidance for rural users and generate critical health alerts in multiple regional languages",
    ],
    tags: ["Google Gemini AI", "n8n", "WhatsApp API", "NLP"],
    github: "#",
    live: "#",
    color: "#2563EB",
  },
  {
    num: "03",
    title: "Brain Tumor Detection",
    subtitle: "YOLO & Streamlit",
    description:
      "A real-time brain tumor detection system using pre-trained YOLO model on MRI images.",
    details: [
      "Used a pre-trained YOLO model to detect brain tumors in MRI images",
      "Built a Streamlit UI for image upload and real-time predictions",
      "Applied basic preprocessing for better accuracy and display",
    ],
    tags: ["YOLOv8", "Streamlit", "OpenCV", "Deep Learning"],
    github: "#",
    live: "#",
    color: "#059669",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-accent font-medium">
            Projects
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold mt-3 tracking-tight"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-card-border bg-card-bg overflow-hidden card-shadow card-shadow-hover">
                {/* Left — Image placeholder */}
                <div
                  className="relative h-56 lg:h-auto img-placeholder"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span
                        className="text-7xl font-bold opacity-10"
                        style={{ color: project.color }}
                      >
                        {project.num}
                      </span>
                      <p className="text-xs text-muted-light mt-1 opacity-40">
                        Project preview
                      </p>
                    </div>
                  </div>
                  {/* Replace with: <Image src="/project-img.jpg" alt={project.title} fill className="object-cover" /> */}
                </div>

                {/* Right — Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${project.color}10`,
                        color: project.color,
                      }}
                    >
                      {project.num}
                    </span>
                    <span className="text-xs text-muted">{project.subtitle}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {project.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted/80 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-section-alt text-muted border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-200"
                    >
                      <FaGithub size={15} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
