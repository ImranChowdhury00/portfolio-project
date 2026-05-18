import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Skills = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const SKILLS_DATA = [
    {
      title: "Backend Engineering",
      skills: [
        "Java",
        "Python",
        "Spring-boot",
        "Django",
        "Rest-API",
        "Fast-API",
        "PostgreSQL",
        "Postman",
        "swagger",
      ],
      color:
        "bg-[#111827]/70 backdrop-blur-xl border border-cyan-400/10 hover:border-teal-400/40",
      accent: "text-teal-400",
    },
    {
      title: "Frontend Engineering",
      skills: [
        "React js",
        "Tailwind CSS",
        "Bootstrap",
        "Framer Motion",
        "JavaScript",
      ],
      color:
        "bg-[#111827]/70 backdrop-blur-xl border border-blue-400/10 hover:border-blue-400/40",
      accent: "text-blue-400",
    },
    {
      title: "Machine Learning",
      skills: [
        "Machine learning",
        "Computer Vision",
        "Deep Learning",
        "NumPy, Pandas, ScikitLearn",
        "NLP & LLMS",
      ],
      color:
        "bg-[#111827]/70 backdrop-blur-xl border border-emerald-400/10 hover:border-emerald-400/40",
      accent: "text-emerald-400",
    },
    {
      title: "Tools & Systems",
      skills: [
        "Git/GitHub",
        "Docker",
        "IntelliJ IDEA",
        "Vscode",
        "Colab",
        "powerBI",
      ],
      color:
        "bg-[#111827]/70 backdrop-blur-xl border border-purple-400/10 hover:border-purple-400/40",
      accent: "text-purple-400",
    },
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="pb-20 md:pb-28 pt-16 md:pt-22 min-h-screen bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-slate-400 font-mono text-sm pt-2">
            ~/skills_matrix.sys
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
            My Skills
          </h2>
        </div>

        {/* Desktop Animated Cards */}
        <div className="hidden lg:flex relative h-[420px] justify-center items-center">
          {SKILLS_DATA.map((item, index) => {
            const targetX = (index - (SKILLS_DATA.length - 1) / 2) * 300;

            const x = useTransform(
              scrollYProgress,
              [0.1, 0.4],
              [0, targetX]
            );

            const rotate = useTransform(
              scrollYProgress,
              [0.1, 0.4],
              [index * 6 - 8, 0]
            );

            return (
              <motion.div
                key={index}
                style={{ x, rotate, zIndex: index }}
                className={`absolute w-72 h-[380px] ${item.color} rounded-2xl shadow-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-2`}
              >
                
                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-4 font-mono ${item.accent}`}
                >
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-4"></div>

                {/* Skills */}
                <ul className="space-y-2">
                  {item.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-slate-200/90 font-medium font-mono text-sm hover:text-white transition"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {SKILLS_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`relative overflow-hidden w-full min-h-[320px] ${item.color} rounded-2xl shadow-2xl p-6 flex flex-col`}
            >
              
              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/5 blur-2xl rounded-full"></div>

              {/* Title */}
              <h3
                className={`relative z-10 text-lg font-bold mb-4 font-mono ${item.accent}`}
              >
                {item.title}
              </h3>

              {/* Divider */}
              <div className="relative z-10 h-px w-full bg-white/10 mb-4"></div>

              {/* Skills */}
              <ul className="relative z-10 space-y-2">
                {item.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                    }}
                    className="text-slate-200/90 font-medium font-mono text-sm hover:text-white transition"
                  >
                    • {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;