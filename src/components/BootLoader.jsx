import { useEffect, useState } from "react";

const lines = [
  "Initializing system...",
  "Loading developer profile...",
  "Starting interface modules...",
  "System ready.",
];

const BootLoader = ({ onFinish }) => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;

      if (index === lines.length) {
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 700);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-[#020617] flex items-center justify-center">
      <div className="w-[90%] max-w-2xl font-mono text-blue-400 text-sm md:text-base">
        {visibleLines.map((line, i) => (
          <div
            key={i}
            className="mb-3 animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <span className="text-slate-500 mr-3">{">"}</span>
            {line}
          </div>
        ))}

        <div className="w-3 h-5 bg-blue-400 animate-pulse mt-2"></div>
      </div>
    </div>
  );
};

export default BootLoader;
