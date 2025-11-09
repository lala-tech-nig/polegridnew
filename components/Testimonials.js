"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  { name: "Adewale, Lagos", text: "PoleGrid transformed our telecom site with stable energy." },
  { name: "Ngozi, Abuja", text: "Professional team and seamless network setup!" },
  { name: "Tunde, Ibadan", text: "Excellent service delivery and quick maintenance response." },
];

export default function Testimonials() {
  const containerRef = useRef();

  useEffect(() => {
    gsap.to(containerRef.current, {
      xPercent: -100,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">What Our Clients Say</h2>
      <div className="relative w-full overflow-hidden">
        <div ref={containerRef} className="flex space-x-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white shadow-lg rounded-2xl p-6 min-w-[300px]">
              <p className="text-gray-700 italic mb-3">"{t.text}"</p>
              <p className="text-green-600 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
