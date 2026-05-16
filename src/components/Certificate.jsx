import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// preview images
import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";
import cert3 from "../assets/certificates/cert3.png";
import cert4 from "../assets/certificates/cert4.png";
import cert5 from "../assets/certificates/cert5.png";
import cert6 from "../assets/certificates/cert6.png";

// pdfs
import cert1Pdf from "../assets/certificates/cert1.pdf";
import cert2Pdf from "../assets/certificates/cert2.pdf";
import cert3Pdf from "../assets/certificates/cert3.pdf";
import cert4Pdf from "../assets/certificates/cert4.pdf";
import cert5Pdf from "../assets/certificates/cert5.pdf";
import cert6Pdf from "../assets/certificates/cert6.pdf";

const certificates = [
  {
    image: cert1,
    pdf: cert1Pdf,
  },
  {
    image: cert2,
    pdf: cert2Pdf,
  },
  {
    image: cert3,
    pdf: cert3Pdf,
  },
  {
    image: cert4,
    pdf: cert4Pdf,
  },
  {
    image: cert5,
    pdf: cert5Pdf,
  },
  {
    image: cert6,
    pdf: cert6Pdf,
  },
];

const Certificate = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);

    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);

    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const getIndex = (offset) => {
    return (current + offset + certificates.length) % certificates.length;
  };

  const leftCard = certificates[getIndex(-1)];
  const centerCard = certificates[current];
  const rightCard = certificates[getIndex(1)];

  return (
    <section id="certifications" className="relative pb-10 pt-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center">
          <p className="text-slate-400 font-mono text-sm">
            ~/credentials.verify
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-200">
            Certificates
          </h2>
        </div>

        {/* slider */}
        <div className="relative h-[560px] flex items-center justify-center">
          {/* glow */}
          <div className="absolute w-[450px] h-[450px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          {/* left preview */}
          <motion.img
            key={leftCard.image}
            src={leftCard.image}
            alt="certificate"
            initial={{
              opacity: 0,
              x: -120,
              scale: 0.8,
            }}
            animate={{
              opacity: 0.35,
              x: 0,
              scale: 0.88,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              hidden md:block
              absolute left-[4%] lg:left-[10%]
              w-[240px] lg:w-[300px]
              rounded-[28px]
              border border-slate-700/40
              blur-[1px]
              z-10
              select-none
            "
          />

          {/* center */}
          <div className="relative z-30">
            <AnimatePresence mode="wait">
              <motion.a
                key={current}
                href={centerCard.pdf}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 120 : -120,
                  scale: 0.92,
                  rotate: direction > 0 ? 4 : -4,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -120 : 120,
                  scale: 0.92,
                  rotate: direction > 0 ? -4 : 4,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                <img
                  src={centerCard.image}
                  alt="certificate"
                  className="
                    w-[320px]
                    md:w-[520px]
                    rounded-[34px]
                    border border-blue-500/20
                    shadow-[0_0_70px_rgba(59,130,246,0.18)]
                    object-cover
                    select-none
                    hover:scale-[1.015]
                    transition-transform duration-500
                  "
                />
              </motion.a>
            </AnimatePresence>
          </div>

          {/* right preview */}
          <motion.img
            key={rightCard.image}
            src={rightCard.image}
            alt="certificate"
            initial={{
              opacity: 0,
              x: 120,
              scale: 0.8,
            }}
            animate={{
              opacity: 0.35,
              x: 0,
              scale: 0.88,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              hidden md:block
              absolute right-[4%] lg:right-[10%]
              w-[240px] lg:w-[300px]
              rounded-[28px]
              border border-slate-700/40
              blur-[1px]
              z-10
              select-none
            "
          />

          {/* left button */}
          <button
            onClick={prevSlide}
            className="
              absolute left-0 md:left-4 lg:left-10
              z-40
              w-12 h-12
              rounded-full
              border border-slate-700/40
              bg-slate-900/70
              backdrop-blur-xl
              flex items-center justify-center
              text-slate-300
              hover:text-white
              hover:border-blue-500/40
              hover:scale-110
              transition-all duration-300
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* right button */}
          <button
            onClick={nextSlide}
            className="
              absolute right-0 md:right-4 lg:right-10
              z-40
              w-12 h-12
              rounded-full
              border border-slate-700/40
              bg-slate-900/70
              backdrop-blur-xl
              flex items-center justify-center
              text-slate-300
              hover:text-white
              hover:border-blue-500/40
              hover:scale-110
              transition-all duration-300
            "
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`
                rounded-full transition-all duration-300
                ${
                  current === index
                    ? "w-10 h-2.5 bg-blue-400"
                    : "w-2.5 h-2.5 bg-slate-600"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
