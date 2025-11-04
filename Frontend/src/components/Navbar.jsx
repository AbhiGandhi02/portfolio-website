import React, { useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (targetPath) => {
    if (location.pathname === targetPath) {
      return;
    }
    navigate(targetPath);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/project", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/certificate", label: "Certificate" },
  ];

  return (
    <div className="fixed flex justify-between items-center z-50 bg-transparent top-0 left-0 right-0 font-[first] backdrop-blur-sm py-8 px-20">
      {/* Logo */}
      <Link to={"/"} className="text-base font-bold">
        abhi.codes
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-12 items-center">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => handleLinkClick(link.path)}
            className={`text-sm font-medium transition-all duration-300 group relative ${
              location.pathname === link.path ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
          >
            {link.label}
            <span
              className={`block ${
                darkMode ? "bg-[#F1F3DF]" : "bg-black"
              } rounded-sm h-[2px] mx-auto mt-1.5 transition-all duration-300 ${
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;