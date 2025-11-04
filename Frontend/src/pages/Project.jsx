import React, { useContext } from "react";
import { Data } from "../context/Data";
import { ThemeContext } from "../context/ThemeContext";
import { ExternalLink, Github } from "lucide-react";

const Project = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-24">
      {/* Main Heading */}
      <div className="relative text-center mb-12">
        <h2
          className={`relative z-10 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`}
        >
          My Work
        </h2>
        <div
          className={`w-24 h-1 ${
            darkMode ? "bg-[#DDA15F]" : "bg-[#DDA15F]"
          } mx-auto mt-6`}
        ></div>
      </div>

      {/* Subtitle */}
      <p
        className={`font-[second] text-base sm:text-lg md:text-xl text-center leading-relaxed ${
          darkMode ? "text-[#F1F3DF]/90" : "text-gray-700"
        } max-w-3xl mb-16`}
      >
        I create exceptional digital experiences for clients who value quality and innovation. 
        If you appreciate great design and meticulous craftsmanship, you're in the right place!
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 w-full">
        {Data.map((item) => (
          <div
            key={item.id}
            className={`${
              darkMode ? "bg-[#0D0701]" : "bg-[#FEFAE0]"
            } rounded-lg overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:rotate-1`}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={`${item.name} project`}
                className="w-full h-44 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Details */}
            <div className="p-5 md:p-6 font-[first] space-y-3">
              <h1
                className={`text-lg sm:text-xl font-bold ${
                  darkMode ? "text-[#F1F3DF]" : "text-black"
                }`}
              >
                {item.name}
              </h1>
              <h2
                className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-[#F1F3DF]/90" : "text-gray-700"
                }`}
              >
                {item.description}
              </h2>

              <div className="flex flex-wrap gap-3 mt-6">
                {item.feature.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex relative h-[38px] min-w-[110px] items-center justify-center rounded-md border-2 ${
                      darkMode ? "border-[#F1F3DF]/70" : "border-black/70"
                    } px-4 text-sm font-medium transition-all duration-300 hover:bg-[#DDA15E] hover:text-white hover:border-[#DDA15E] hover:-translate-y-0.5 hover:shadow-md ${
                      darkMode ? "text-[#F1F3DF]" : "text-black"
                    }`}
                  >
                    {feature}
                    <span className="bg-[#DDA15E] absolute top-0 left-0 w-[15%] h-[40%] rounded-br-full opacity-60"></span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6 pt-3 border-t border-gray-200/10">
                <a
                  href={item.hosting}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-[second] font-medium rounded-md transition-all duration-300 ${
                    darkMode
                      ? "bg-[#DDA15F] text-black hover:bg-[#DDA15F]/90 hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-[#DDA15F] text-white hover:bg-[#DDA15F]/90 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-[second] font-medium rounded-md border-2 border-[#DDA15F] text-[#DDA15F] hover:bg-[#DDA15F] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                    darkMode ? "hover:text-black" : "hover:text-white"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;