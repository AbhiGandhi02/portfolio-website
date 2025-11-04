import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Expertise } from "../context/Data";
import { Download } from "lucide-react";
import resume from "../assets/Resume.pdf";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const services = [
    {
      title: "Web Design",
      description:
        "I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers' trust and helps you do your business well. I make sure your website is up to that standard.",
      tools: ["Figma"],
    },
    {
      title: "Full-Stack Development",
      description:
        "I am a skilled Full Stack Developer with expertise in both frontend and backend technologies. Proficient in the MERN stack (MongoDB, Express, React, Node.js), I specialize in building scalable, responsive web applications. I have experience with RESTful APIs, user authentication, and third-party integrations. Passionate about creating efficient and user-friendly digital experiences.",
      tools: Expertise,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-24">
      {/* Main Heading */}
      <div className="relative text-center mb-20">
        <h2
          className={`relative z-10 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`}
        >
          What I Do
        </h2>
        <div
          className={`w-24 h-1 ${
            darkMode ? "bg-[#DDA15F]" : "bg-[#DDA15F]"
          } mx-auto mt-6`}
        ></div>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-6xl space-y-20">
        {services.map((service, idx) => (
          <div key={idx} className="text-center">
            {/* Service Title */}
            <div className="relative mb-8">
              <h3
                className={`text-2xl md:text-3xl lg:text-4xl font-[first] font-bold ${
                  darkMode ? "text-[#F1F3DF]" : "text-black"
                }`}
              >
                {service.title}
              </h3>
              <div className="w-20 h-1 bg-[#DDA15F] mx-auto mt-4"></div>
            </div>

            {/* Service Description */}
            <p
              className={`font-[second] text-base sm:text-lg md:text-xl leading-relaxed ${
                darkMode ? "text-[#F1F3DF]/90" : "text-gray-700"
              } mb-10 max-w-4xl mx-auto`}
            >
              {service.description}
            </p>

            {/* Tools/Skills Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {service.tools.map((tool, index) => (
                <span
                  key={index}
                  className={`relative px-6 py-3 text-sm md:text-base font-[second] font-medium border-2 ${
                    darkMode
                      ? "border-[#F1F3DF] text-[#F1F3DF] hover:bg-[#F1F3DF] hover:text-black"
                      : "border-black text-black hover:bg-black hover:text-white"
                  } transition-all duration-300 cursor-default overflow-hidden group`}
                >
                  <span className="relative z-10">
                    {typeof tool === "string" ? tool : tool.name}
                  </span>
                  <span className="absolute top-0 left-0 w-2 h-2 bg-[#DDA15F] rounded-br-full"></span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Resume Download Button */}
      <div className="mt-20">
        <a
          href={resume}
          download="Resume.pdf"
          className={`group relative px-10 py-5 text-lg font-[second] font-medium overflow-hidden transition-all duration-300 inline-flex items-center gap-3 ${
            darkMode
              ? "bg-[#F1F3DF] text-black hover:bg-[#DDA15F]"
              : "bg-black text-[#F1F3DF] hover:bg-[#DDA15F]"
          }`}
        >
          <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          <span className="relative z-10">Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Skills;