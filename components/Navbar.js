"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const links = ["Home", "Services", "About", "Testimonials", "FAQ", "Contact"];
  const router = useRouter();
  const pathname = usePathname();

  // Scroll to section if on landing page
  const scrollToSection = (section) => {
    if (section === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(section.toLowerCase());
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (link) => {
    setActive(link);
    setOpen(false); // close mobile menu

    if (pathname !== "/") {
      // redirect to landing page with hash
      router.push(`/#${link.toLowerCase()}`);
    } else {
      // already on landing page
      scrollToSection(link);
    }
  };

  // Handle scroll when navigating from another page via hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        setActive(
          links.find((l) => l.toLowerCase() === hash) || "Home"
        );
      }
    }
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-3 shadow-md sticky top-0 bg-white/90 backdrop-blur z-50">
      {/* Logo */}
      <img src="polegrid.png" alt="PoleGrid" className="w-20 md:w-24" />

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 items-center">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => handleClick(link)}
              className="relative px-2 py-1 font-medium text-black focus:outline-none transition-colors"
            >
              {link}
              {active === link && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 animate-underline"></span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-black focus:outline-none"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 animate-slideDown">
          <ul className="flex flex-col items-center py-4 gap-4">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleClick(link)}
                  className="relative px-4 py-2 text-lg font-medium text-gray-800 focus:outline-none transition-colors"
                >
                  {link}
                  {active === link && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 animate-underline"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Animations */}
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </nav>
  );
}
