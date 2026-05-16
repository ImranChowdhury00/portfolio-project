import React from "react";
import linkedin from "../assets/logos/linkedin.png";
import email from "../assets/logos/email.png";
import giticon from "../assets/logos/git-icon.png";
import leetcode from "../assets/logos/LeetCode.png";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative mt-32 border-t border-white/10 bg-[#020617]/40 backdrop-blur-xl"
    >
      {/* glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[120px] bg-blue-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tigt">
              <span className="text-slate-200">Let's Connect</span>

              <div className="bg-clip-text text-transparent bg-[linear-gradient(135deg,rgb(126,184,255)_0%,rgb(167,139,250)_100%)]"></div>
            </h2>

            <p className="mt-3 text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
              Open to Software Engineering, Backend Development with AI.
            </p>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img src={email} alt="linkedin" className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/imran-karim-chowdhury-ivan-236423265/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img src={linkedin} alt="linkedin" className="h-6 w-6" />
            </a>

            <a
              href="https://github.com/ImranChowdhury00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img src={giticon} alt="linkedin" className="h-6 w-6" />
            </a>

            <a
              href="https://leetcode.com/u/Imran_chowdhury34/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img src={leetcode} alt="linkedin" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-slate-600 flex items-center gap-1">
            © 2026 Imran. Built with React, Tailwind & a lot of..
          </p>

          <a
            href="#top"
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
