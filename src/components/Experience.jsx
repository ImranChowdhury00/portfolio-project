import React from "react";
import { Calendar, CheckCircle2, Briefcase } from "lucide-react";
import ab_bank from "../assets/logos/ab_bank.png";
import city_bank from "../assets/logos/city_bank.png";

const Experience = () => {
  const experiences = [
    {
      title: "AB Bank PLC",
      company: "Trainee Officer - Software Developer",
      logo: ab_bank,
      period: "April 2026 - Present",
      highlights: [
        "Developing enterprise applications",
        "focusing on the Spring boot, Django and React ecosystem.",
      ],
    },
    {
      title: "City Bank PLC",
      company: "Intership - Machine Learning",
      logo: city_bank,
      period: "September 2023 - November 2023",
      highlights: [
        "Implemented Pytesserac, OCR ",
        "Contributed on NLP project",
      ],
    },
  ];

  return (
    <section id="experience" className="py-26 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <Briefcase className="text-blue-400" size={28} />
          </div>
          <div>
            <p className="text-slate-400 font-mono text-sm">
              ~/career_history.log
            </p>
            <h2 className="text-4xl font-bold text-white">Experience</h2>
          </div>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 group">
              {/* LOGO CONTAINER */}
              <div className="absolute left-0 top-0 w-11 h-11 bg-[#ffffff] border border-slate-700 rounded-xl flex items-center justify-center z-10 overflow-hidden group-hover:border-blue-500 transition-all duration-300 shadow-xl">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-1" // object-contain prevents stretching
                  />
                ) : (
                  // Fallback: If no logo, show the first letter of company
                  <span className="text-blue-400 font-bold text-lg">
                    {exp.company.charAt(0)}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="bg-[#111827]/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400/80 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs font-mono bg-black/20 px-3 py-1 rounded-full w-fit ${
                      index === 0
                        ? "text-green-500  bg-emerald-500/5 border border-green-700/30"
                        : "text-slate-500"
                    }`}
                  >
                    <Calendar size={10} />
                    {exp.period}
                  </div>
                </div>

                <ul className="grid grid-cols-1 gap-3">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-blue-500/60 mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
