"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  useEffect(() => {
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, scrollTrigger: ".about-content" }
    );
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img src="/about.jpg" alt="About PoleGrid" className="w-full h-full object-cover" />
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            About PoleGrid Telecom
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            PoleGrid is powering Nigeria’s digital future with modern, reliable 
            and sustainable telecom infrastructure. We don’t just build towers — 
            we build the backbone of next-generation connectivity.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            From land leasing and tower deployment to equipment hosting and 
            nationwide network support, we deliver speed, clarity, and 
            unmatched engineering excellence.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            With a fast-growing presence across multiple states, we connect 
            operators and landowners, create income opportunities, and accelerate 
            Nigeria’s digital transformation — one community at a time.
          </p>

          <button className="px-6 py-3 border-2 border-green-500 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition font-semibold">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
