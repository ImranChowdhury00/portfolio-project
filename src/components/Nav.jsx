import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-blue-500/20 bg-[#020617]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo with a subtle glow */}
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 bg-blue-700/60 hover:bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
              <span className="text-slate-200 font-black text-l tracking-widest italic">
                {" "}
                i
              </span>
            </div>
            <span className="ml-3 text-xl font-bold tracking-tight text-slate-200">
              &#123; Imran{" "}
              <span className="text-blue-500">Chowdhury &#125;</span>
            </span>
          </div>

          {/* Desktop Menu - Hidden on Mobile */}
          <div className="hidden md:flex space-x-10 items-center">
            {[
              "About",
              "Experience",
              "Skills",
              "Projects",
              "Education",
              "Certifications",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#footer" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-slate-100 text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-900/20 active:scale-95">
              Contact
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100 border-t border-blue-500/10" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-6 py-6 space-y-4 bg-[#020617]/90 backdrop-blur-xl">
          {[
            "About",
            "Experience",
            "Skills",
            "Projects",
            "Education",
            "Certifications",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-lg text-slate-300 hover:text-blue-400"
            >
              {item}
            </a>
          ))}
          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
