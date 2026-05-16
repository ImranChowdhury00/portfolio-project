import React from "react";

import Imran from "../assets/my_pic/Imran.jpg";

const Hero = () => {
  return (
    <div className="">
      <section className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between min-h-[70vh] mt-30">
        {/* left div- short description */}
        <div className="md:w-1/2 flex flex-col gap-y-4 ps-15">
          <h1 className="ps-3 text-3xl font-bold text-slate-200"> Hi, I'm</h1>

          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(232,237,248)_0%,rgb(168,200,255)_55%,rgb(126,184,255)_100%)]">
              {"{ Imran"}
            </span>
            <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(126,184,255)_0%,rgb(167,139,250)_100%)]">
              {" Chowdhury }"}
            </span>
          </h1>
          <p className="ps-2 text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
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
        <div className="md:w-1/2 flex justify-center items-center relative">
          {/* glow */}
          <div className="absolute w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></div>

          {/* image card */}
          <div className="relative p-2 mt-4 rounded-[30px] border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-2xl hover:-translate-y-2 hover:-translate-x-2 transition-all duration-500">
            <img
              src={Imran}
              alt="Imran"
              className="w-[320px] h-[420px] rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
