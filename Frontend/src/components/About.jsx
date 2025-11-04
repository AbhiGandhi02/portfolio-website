import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/project");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-24">
      {/* Heading */}
      <div className="relative text-center mb-12">
        <h4
          className={`relative z-10 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight`}
        >
          Who Am I
        </h4>
        <div className={`w-24 h-1 ${
          darkMode ? "bg-[#DDA15F]" : "bg-[#DDA15F]"
        } mx-auto mt-6`}></div>
      </div>

      {/* Paragraph */}
      <p
        className={`font-[second] text-lg sm:text-xl md:text-2xl lg:text-2xl text-center leading-relaxed ${
          darkMode ? "text-[#F1F3DF]/90" : "text-gray-700"
        } max-w-4xl`}
      >
        Hi, I'm <span className="text-[#DDA15F] font-semibold">Abhi</span>, a passionate Full Stack Developer and Web Designer specializing in high-performance, dynamic applications. I build modern, scalable digital solutions for businesses worldwide. This portfolio is a curated showcase of my technical depth and design skills—from database architecture to pixel-perfect UIs. If you're seeking an impactful website solution or want to discuss a new project, feel free to connect with me.
      </p>

      {/* Button */}
      <button
        onClick={handleLinkClick}
        className={`mt-16 group relative px-10 py-5 text-lg font-[second] font-medium overflow-hidden transition-all duration-300 ${
          darkMode
            ? "bg-[#F1F3DF] text-black hover:bg-[#DDA15F]"
            : "bg-black text-[#F1F3DF] hover:bg-[#DDA15F]"
        }`}
      >
        <span className="relative z-10 flex items-center gap-3">
          See My Work
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default About;