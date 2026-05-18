import React, { useState, useEffect, useRef } from "react";
import { User, Bot, Send, Sparkles, UserSearch } from "lucide-react";

const About = () => {
  const [userText, setUserText] = useState("");
  const [aiText, setAiText] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const sectionRef = useRef(null);

  const fullUserQuery = "Tell me about Mr. Imran ";
  const fullAiResponse =
    "Imran is a Backend Engineer skilled in Spring Boot, Django, Rest-API, Fast-API development. He also works with React.js to create modern frontend experiences. Passionate about system design, databases, and problem solving, he has solved 50+ PostgreSQL challenges on LeetCode. He enjoys experimenting with AI/ML projects and continuously learning new technologies to build efficient, production-ready applications.";

  // Detect when user scrolls to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.8 }, // Starts when 80% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Phase 1: Type User Question
  useEffect(() => {
    if (!hasStarted) return;

    let userIdx = 0;
    const userInterval = setInterval(() => {
      setUserText(fullUserQuery.slice(0, userIdx + 1));
      userIdx++;
      if (userIdx === fullUserQuery.length) {
        clearInterval(userInterval);
        setTimeout(() => setIsAiTyping(true), 600);
      }
    }, 50);

    return () => clearInterval(userInterval);
  }, [hasStarted]);

  // Phase 2: AI Typing Indicator -> Phase 3: Type AI Response
  useEffect(() => {
    if (isAiTyping) {
      const timer = setTimeout(() => {
        setIsAiTyping(false);
        setShowAiResponse(true);
        let aiIdx = 0;
        const aiInterval = setInterval(() => {
          setAiText(fullAiResponse.slice(0, aiIdx + 1));
          aiIdx++;
          if (aiIdx === fullAiResponse.length) clearInterval(aiInterval);
        }, 30);
      }, 1500); // How long the 3 dots show
      return () => clearTimeout(timer);
    }
  }, [isAiTyping]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-24 px-4 sm:px-6 min-h-screen flex items-center bg-transparent mt-10 md:mt-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        {/* Left Side */}
        <div className="flex items-center gap-4 mb-6 md:mb-16 justify-center md:justify-start text-center md:text-left">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl shrink-0">
            <UserSearch className="text-blue-400" size={28} />
          </div>

          <div>
            <p className="text-slate-400 font-mono text-sm">~/profile.init</p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              About me
            </h2>
          </div>
        </div>

        {/* Right Side: Chat Box */}
        <div className="relative w-full">
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 rounded-2xl blur-lg"></div>

          <div className="relative bg-[#0f172a]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
            {/* Window Header */}
            <div className="bg-white/5 px-4 sm:px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>

              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">
                Chatbot
              </span>
            </div>

            {/* Chat Body */}
            <div className="p-4 sm:p-6 h-[380px] sm:h-[400px] flex flex-col gap-6 overflow-hidden">
              {/* User Message */}
              {userText && (
                <div className="flex gap-3 items-start justify-end animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="bg-blue-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-none shadow-lg max-w-[85%]">
                    <p className="text-xs sm:text-sm font-medium break-words">
                      {userText}

                      {userText.length < fullUserQuery.length && (
                        <span className="inline-block w-1 h-4 ml-1 bg-white animate-pulse" />
                      )}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                    <User size={14} className="text-slate-400" />
                  </div>
                </div>
              )}

              {/* Bot Section */}
              {(isAiTyping || showAiResponse) && (
                <div className="flex gap-3 items-start animate-in fade-in duration-500">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-blue-400" />
                  </div>

                  {isAiTyping ? (
                    <div className="flex gap-1.5 p-4 bg-white/5 rounded-2xl rounded-tl-none border border-white/10 items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                    </div>
                  ) : (
                    <div className="bg-white/5 text-slate-200 p-4 rounded-2xl rounded-tl-none border border-white/10 shadow-sm text-xs sm:text-sm leading-relaxed max-w-[90%] break-words">
                      {aiText}

                      {aiText.length < fullAiResponse.length && (
                        <span className="inline-block w-1 h-4 ml-1 bg-blue-400 animate-pulse" />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/10 flex gap-3 items-center">
              <div className="flex-1 bg-black/20 rounded-full px-4 py-2 text-[10px] sm:text-[11px] text-slate-500 flex items-center italic">
                {aiText.length === fullAiResponse.length
                  ? "Message delivered."
                  : "AI is generating bio..."}
              </div>

              <div className="p-2 rounded-full bg-white/5 text-slate-700 shrink-0">
                <Send size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
