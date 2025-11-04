import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Award } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Certificate = () => {
  const { darkMode } = useContext(ThemeContext);

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [recycleConfetti, setRecycleConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setRecycleConfetti(false), 3000);
    const hideTimer = setTimeout(() => setShowConfetti(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="max-w-[85rem] mt-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative min-h-screen flex flex-col items-center justify-center">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={recycleConfetti}
          numberOfPieces={700}
        />
      )}

      <div className="relative text-center">
        <h4
          className={`relative tracking-[5px] z-10 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          <span className="uppercase text-pretty text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 right-3 relative font-[first] flex items-center justify-center gap-2 flex-wrap">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#DDA15E]" />
            Certificate
            <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#DDA15E]" />
          </span>
        </h4>

        <h4
          aria-hidden="true"
          className="absolute top-1 left-1/2 -translate-x-1/2 tracking-[5px] font-[first] text-[#dda05f83] z-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="uppercase text-pretty opacity-[2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-[first]">
            Certificate
          </span>
        </h4>
      </div>

      {/* Coming Soon Section */}
      <div className="mt-20 text-center">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[first] font-bold ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } mb-6`}
        >
          Coming Soon
        </h2>
        <p
          className={`text-lg sm:text-xl md:text-2xl font-[second] ${
            darkMode ? "text-[#F1F3DF]/80" : "text-gray-600"
          } max-w-2xl mx-auto`}
        >
          I'm currently working on adding my certificates. Check back soon!
        </p>
      </div>
    </div>
  );
};

export default Certificate;