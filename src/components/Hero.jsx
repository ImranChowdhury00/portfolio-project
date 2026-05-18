import React from "react";

import Imran from "../assets/my_pic/Imran.jpg";

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between min-h-[70vh] mt-20 md:mt-30 gap-10">
        {/* left div- short description */}
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 lg:ps-15 sm:ps-10">
          <h1 className="lg:ps-3 sm:ps-2 text-2xl sm:text-3xl xl:text-3xl font-bold text-slate-200 text-center md:text-left">
            Hi, I'm
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center md:text-left leading-tight">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(232,237,248)_0%,rgb(168,200,255)_55%,rgb(126,184,255)_100%)]">
              {"{ Imran"}
            </span>

            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(126,184,255)_0%,rgb(167,139,250)_100%)]">
              {" Chowdhury }"}
            </span>
          </h1>

          <p className="ps-2 text-base sm:text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-medium text-center md:text-left">
            Software engineer skilled in python, java, django, spring boot, data
            science, ai/ml. Build scalable backend with AI.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <a
              href="#about"
              className="bg-[rgb(126,184,255)] hover:bg-[rgb(100,160,255)] text-slate-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-500/20"
            >
              More about me
            </a>

            <a
              href="#footer"
              className="border-2 border-[rgb(117,97,199)] text-[rgb(167,139,250)] hover:bg-[rgb(103,87,165)] hover:text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Contact
            </a>
          </div>
        </div>

        {/* right div, img */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* glow */}
          <div className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-cyan-400/20 blur-3xl rounded-full"></div>

          {/* image card */}
          <div className="relative p-2 mt-4 rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-2xl hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500">
            <img
              src={Imran}
              alt="Imran"
              className="w-[240px] sm:w-[280px] md:w-[320px] h-[320px] sm:h-[380px] md:h-[420px] rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
