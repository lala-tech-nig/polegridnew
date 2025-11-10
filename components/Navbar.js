"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Services", "About", "Testimonials", "FAQ", "Contact"];

  // Smooth scroll to section
  const handleScroll = (section) => {
    setActive(section);
    if (section === "Home") {
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(section.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-3 shadow-md sticky top-0 bg-white/90 backdrop-blur z-50">
      {/* Smaller, sleeker logo */}
      <img src="polegridlogo1.png" alt="PoleGrid" className="w-20 md:w-24" />

      <ul className="flex gap-3 md:gap-6 items-center">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => handleScroll(link)}
              className="relative px-2 py-1 font-medium text-black focus:outline-none transition-colors"
            >
              {link}
              {/* Green underline when active */}
              {active === link && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-500 animate-underline"></span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Underline animation */}
      <style jsx>{`
        @keyframes underline-slide {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-underline {
          transform-origin: left;
          animation: underline-slide 0.3s ease forwards;
        }
      `}</style>
    </nav>
  );
}
