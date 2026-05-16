import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import NSU_logo from "../assets/logos/nsu_logo.png";
const Education = () => {
  return (
    <section
      id="education"
      className="relative py-34 px-6 md:px-10 lg:px-16 mt-18"
    >
      <div className="max-w-6xl mx-auto">
        {/* section heading */}
        <div className="mb-14 text-center">
          <p className="text-slate-400 font-mono text-sm pt-2">
            ~/education.init
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 ">
            Education
          </h2>
        </div>

        {/* education card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/40 bg-white/5 backdrop-blur-sm p-8 md:p-10 shadow-[0_0_40px_rgba(59,130,246,0.08)] transition-all duration-300 hover:border-blue-500/30 mb-20">
          {/* glow */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-500/10 blur-xl rounded-full"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* left */}
            <div className="flex gap-5">
              {/* icon */}
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <img
                  src={NSU_logo}
                  alt="University Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* content */}
              <div>
                <h3 className="text-2xl font-bold text-slate-200">
                  B.Sc in Computer Science & Engineering
                </h3>

                <p className="mt-2 text-lg text-blue-400/80 font-medium">
                  North South University
                </p>

                <p className="mt-4 px-2 text-green-500 bg-emerald-500/5 leading-relaxed max-w-54 rounded text-xs font-mono border border-green-700/30">
                  CGPA : 3.06 / 4.00 (1st Class)
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "Software Engineering",
                    "AI/ML",
                    "Backend Development",
                    "Data Structures & Algorithm",
                    "Neural Network",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full text-sm border border-slate-600/50 bg-slate-800/40 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-4 text-sm text-slate-400 md:items-end">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>2019 - 2023</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
