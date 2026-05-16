import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import BootLoader from "./components/BootLoader";
import Project from "./components/Project";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div id="top">
      <AnimatePresence>
        {loading && <BootLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(0px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#020617] via-[#1c2b4d] to-[#0b143f] text-white"
        >
          {/* glow */}
          <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* navbar */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-50"
          >
            <Nav />
          </motion.div>

          {/* content */}
          <main className="relative">
            <Hero />

            <About />

            <Experience />

            <Skills />
            <Project />
            <Education />
            <Certificate />
            <Footer />
          </main>
          
        </motion.div>
      )}
    </div>
  );
}

export default App;
