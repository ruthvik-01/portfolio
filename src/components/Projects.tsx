"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiLightningBolt, HiAcademicCap, HiCode } from "react-icons/hi";

const ease = [0.16, 1, 0.3, 1] as const;

const skills = [
  "Python",
  "PyTorch",
  "OpenCV",
  "Flask",
  "Docker",
  "YOLOv8",
  "Streamlit",
  "Deep Learning",
  "Git",
];

const recentProjects = [
  {
    title: "UniPeasy",
    subtitle: "Student Resource Platform",
    description:
      "A centralized platform to simplify student access to academic information and university resources. Built with Flask, unified dashboard for file management.",
    tags: ["Flask", "Python", "Dashboard"],
    github: "https://github.com/ruthvik-01/unipeasy",
    live: "https://unipeasy.com",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
  {
    title: "Health Assistant",
    subtitle: "AI-Powered Multi-Modal Chatbot",
    description:
      "An intelligent WhatsApp health assistant using Google Gemini AI and n8n — processes text, image, audio, and document queries for rural users.",
    tags: ["Gemini AI", "n8n", "WhatsApp API"],
    github: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop",
  },
  {
    title: "Brain Tumor Detection",
    subtitle: "YOLO & Streamlit",
    description:
      "Real-time brain tumor detection system using pre-trained YOLO model on MRI images with a Streamlit UI for image upload and predictions.",
    tags: ["YOLOv8", "Streamlit", "OpenCV"],
    github: "#",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&fit=crop",
  },
];

const hackathons = [
  {
    icon: HiLightningBolt,
    name: "24-Hour Hackathon",
    category: "VR Engineering College",
  },
  {
    icon: HiLightningBolt,
    name: "Smart India Hackathon",
    category: "National Level · 2025",
    link: "/certifications/sih-participation.pdf",
  },
  {
    icon: HiLightningBolt,
    name: "Codegnan Hackathon",
    category: "2026",
    link: "/certifications/codegnan-hackathon.pdf",
  },
];

const certificationSections = [
  {
    label: "Python & AI/ML",
    items: [
      { name: "Basics of Python", category: "Infosys Springboard", link: "/certifications/basics-of-python.pdf" },
      { name: "Python Foundation Certification", category: "Infosys Springboard", link: "/certifications/python-foundation.pdf" },
      { name: "Introduction to Artificial Intelligence", category: "Infosys Springboard", link: "/certifications/intro-to-ai.pdf" },
      { name: "Introduction to Deep Learning", category: "Infosys Springboard", link: "/certifications/intro-to-deep-learning.pdf" },
      { name: "Introduction to NLP", category: "Infosys Springboard", link: "/certifications/intro-to-nlp.pdf" },
    ],
  },
  {
    label: "Oracle",
    items: [
      { name: "Oracle AI Foundations", category: "Oracle", link: "/certifications/oracle-ai.pdf" },
      { name: "Oracle Cloud Infrastructure", category: "Oracle", link: "/certifications/oracle-cloud.pdf" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Responsive Web Development (HTML5, CSS3, JS)", category: "Infosys Springboard", link: "/certifications/responsive-web-dev.pdf" },
      { name: "Front End Development Foundation", category: "TechA", link: "/certifications/frontend-dev-foundation.pdf" },
      { name: "Responsive Web Design (HTML, CSS & JS)", category: "TechA", link: "/certifications/responsive-web-design.pdf" },
    ],
  },
  {
    label: "Java",
    items: [
      { name: "Java Programming Fundamentals", category: "Infosys Springboard", link: "/certifications/java-fundamentals.pdf" },
      { name: "Java Language Features", category: "Infosys Springboard", link: "/certifications/java-language-features.pdf" },
      { name: "Java SE 8 Features", category: "Infosys Springboard", link: "/certifications/java-se8-features.pdf" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "Database Management Systems", category: "Infosys Springboard", link: "/certifications/dbms.pdf" },
    ],
  },
  {
    label: "Cyber Security",
    items: [
      { name: "Cyber Security & Privacy", category: "NPTEL", link: "/certifications/cyber-security.pdf" },
    ],
  },
  {
    label: "C/C++",
    items: [
      { name: "C & C++ Programming", category: "Spoken Tutorial – IIT Bombay", link: "/certifications/cpp.pdf" },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [activeCertSection, setActiveCertSection] = useState(0);

  return (
    <section
      id="projects"
      className="py-28 md:py-40 px-6 md:px-10"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20 items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="text-5xl md:text-6xl font-black tracking-tight"
          >
            Projects
          </motion.h2>

          {/* Skill pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill, i) => (
              <button
                key={skill}
                onClick={() => setActiveSkill(i)}
                className={`pill-tag ${i === activeSkill ? "filled" : ""}`}
              >
                {skill}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Most Recents */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="text-sm tracking-widest uppercase text-foreground/50 mb-8"
        >
          Most Recents
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {recentProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease }}
              className="group"
            >
              <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden hover:border-foreground/25 transition-colors duration-300">
                {/* Project image */}
                <div className="relative h-48 bg-foreground/[0.04] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-foreground/10 text-foreground/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-foreground/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground transition-colors duration-200"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={11} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          className="text-sm tracking-widest uppercase text-foreground/50 mb-8"
        >
          Hackathons
        </motion.p>

        <div className="divide-y divide-foreground/10 mb-20">
          {hackathons.map((item, i) => {
            const content = (
              <>
                <item.icon
                  size={18}
                  className="text-foreground/30 group-hover:text-accent transition-colors duration-200 shrink-0"
                />
                <span className="font-medium text-sm md:text-base">
                  {item.name}
                </span>
                <span className="text-foreground/40 text-sm hidden sm:inline">
                  —
                </span>
                <span className="text-foreground/40 text-xs sm:text-sm">
                  {item.category}
                </span>
                {item.link && (
                  <FaExternalLinkAlt
                    size={10}
                    className="ml-auto text-foreground/20 group-hover:text-accent transition-colors duration-200 shrink-0"
                  />
                )}
              </>
            );
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.05, duration: 0.5, ease }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 py-4 group hover:bg-foreground/[0.02] px-2 -mx-2 rounded-lg transition-colors duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 py-4 group hover:bg-foreground/[0.02] px-2 -mx-2 rounded-lg transition-colors duration-200">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-20 items-start mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease }}
            className="text-sm tracking-widest uppercase text-foreground/50"
          >
            Certifications
          </motion.p>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.6, ease }}
            className="flex flex-wrap gap-2"
          >
            {certificationSections.map((section, i) => (
              <button
                key={section.label}
                onClick={() => setActiveCertSection(i)}
                className={`pill-tag ${i === activeCertSection ? "filled" : ""}`}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="divide-y divide-foreground/10">
          {certificationSections[activeCertSection].items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.04,
                duration: 0.4,
                ease,
              }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 group hover:bg-foreground/[0.02] px-2 -mx-2 rounded-lg transition-colors duration-200"
              >
                <HiAcademicCap
                  size={18}
                  className="text-foreground/30 group-hover:text-accent transition-colors duration-200 shrink-0"
                />
                <span className="font-medium text-sm md:text-base">
                  {item.name}
                </span>
                <span className="text-foreground/40 text-sm hidden sm:inline">
                  —
                </span>
                <span className="text-foreground/40 text-xs sm:text-sm">
                  {item.category}
                </span>
                <FaExternalLinkAlt
                  size={10}
                  className="ml-auto text-foreground/20 group-hover:text-accent transition-colors duration-200 shrink-0"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
