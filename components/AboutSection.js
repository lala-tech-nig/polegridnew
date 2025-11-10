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
        <div className="overflow-hidden rounded-2xl">
          <img src="/hero3.jpg" alt="About PoleGrid" className="w-full h-full object-cover" />
        </div>
        <div className="about-content">
          <h2 className="text-3xl font-bold text-green-600 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PoleGrid Telecom is a leading Nigerian telecommunications company committed
            to providing reliable, scalable, and affordable connectivity solutions.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to connect every Nigerian household and business to a seamless
            network experience powered by innovation, renewable energy, and world-class
            engineering.
          </p>
          <button className="px-6 py-3 border-2 border-green-500 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
