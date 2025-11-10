"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const slides = [
  { image: "/hero1.jpg", caption: "Empowering Telecom Growth Nationwide" },
  { image: "/hero2.jpg", caption: "Building Reliable Connectivity for Everyone" },
  { image: "/hero3.jpg", caption: "Join the Future of Telecom Service" },
  { image: "/hero4.jpg", caption: "Innovating for a Connected Nigeria" },
  { image: "/hero5.jpg", caption: "Partner with Us and Start Earning" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    tl.to(".hero-slide", { opacity: 0, duration: 1 });
    tl.to(".hero-slide", { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-3xl md:text-5xl mb-6">{slide.caption}</h2>
            <button
              className="px-6 py-3 bg-transparent border-2 border-green-400 hover:bg-green-500 hover:text-white"
              onClick={() => alert("Modal opens here")}
            >
              Start Earning Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
