"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "About", "Services", "Testimonials", "FAQ", "Contact Us"];

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-lg sticky top-0 bg-white/90 backdrop-blur z-40">
      <img src="/images/logo.png" alt="PoleGrid" className="w-28" />
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => setActive(link)}
              className={`px-4 py-2 transition-all ${
                active === link ? "border-b-2 border-green-500" : ""
              }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
