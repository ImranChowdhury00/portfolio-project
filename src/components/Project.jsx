import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "PathShala LMS",
    type: "Backend Rest API",

    description:
      "LMS built with Django REST Framework, featuring RBAC, JWT authentication, and secure REST APIs.",

    stack: ["Python", "Django-Rest", "REST API", "JWT", "RBAC"],

    status: "Completed",

    link: "https://github.com/ImranChowdhury00/pathshala-lms-api",
  },

  {
    title: "BazarShodai-Ecommerce",
    type: "Full Stack",

    description:
      "Single-vendor E-commerce; built with Django, featuring email authentication and SSLCommerz.",

    stack: ["Python-Django", "js", "Google SMTP", "SSLCommercz"],

    status: "Completed",

    link : "https://github.com/ImranChowdhury00/bazarshodai-ecommerce"
  },


  {
    title: "Task Manager",
    type: "Frontend",

    description:
      "Modern engineering-style portfolio built with React, Tailwind CSS and Framer Motion.",

    stack: ["React", "Tailwind", "javascript", "UI Design"],

    status: "Completed",

    link : "https://github.com/ImranChowdhury00/Task-Manager"
  },

  {
    title: "Pothole detection by Yolo-V8",
    type: "Computer Vision",

    description:
      "Platform for solving and tracking PostgreSQL query challenges with analytics dashboard.",

    stack: ["Yolo V8", "Deep Learning", "Computer Vision"],

    status: "Completed",

    link : "https://github.com/ImranChowdhury00/Pothole-Detection-Using-YOLO-v8"
  },

  {
    title: "FastAPI Backend Service",
    type: "API Development",

    description:
      "High-performance backend service using FastAPI with authentication and optimized endpoints.",

    stack: ["FastAPI", "Python", "JWT", "REST API"],

    status: "ACTIVE",

    link : ""
  },

  {
    title: "Hepa-C Classification",
    type: "Machine Learning",

    description:
      "Machine Learning classification model trained for intelligent object recognition tasks.",

    stack: ["ML", "Pandas", "NumPy", "Data Smote"],

    status: "TRAINED",

    link : "https://github.com/ImranChowdhury00/Hepatitis-C-detection"
  },
];

const Project = () => {
  return (
    <section id="projects" className="pb-24 pt-5 px-6 overflow-hidden">
      {/* centered container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-slate-400 font-mono text-sm">~/projects.archive</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notable Projects
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          style={{
            perspective: "1200px",
          }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: 0.08,
              }}
              whileHover={{
                rotateX: -4,
                rotateY: 6,
                y: -8,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              // bg-[#0b1220]/70
              className="relative  bg-[#111827]/70 backdrop-blur-xl border border-blue-400/10 rounded-2xl p-5 overflow-hidden transition duration-300 hover:border-blue-400/30 hover:shadow-2xl"
            >
              {/* top glow line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

              {/* subtle glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-blue-500/5 pointer-events-none"></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div>
                  <p className="text-blue-400 text-[11px] font-mono mb-2 tracking-wide">
                    {project.type}
                  </p>

                  <h3 className="text-lg font-bold text-slate-200 leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-[9px] font-mono tracking-wider whitespace-nowrap">
                  {project.status}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-sm mb-6 relative z-10">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono hover:border-blue-400/30 hover:text-blue-300 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4 relative z-10">
                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-mono">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  SYSTEM ONLINE
                </div>

                <div className="flex items-center gap-3">
                  <button className="text-slate-400 hover:text-white transition text-xs font-medium">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub in a new tab"
                    >
                      GitHub
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
