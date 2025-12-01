"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "Empowering Telecom Growth Nationwide",
    subtitle: "We help individuals and businesses unlock steady income through verified telecom solutions.",
  },
  {
    title: "Building Reliable Connectivity for Everyone",
    subtitle: "Our mission is to expand stable, high-quality network access across all Nigerian regions.",
  },
  {
    title: "Join the Future of Telecom Service",
    subtitle: "Be part of a new era where digital communication empowers everyday opportunities.",
  },
  {
    title: "Innovating for a Connected Nigeria",
    subtitle: "We develop modern tools and partnerships to strengthen telecom infrastructure nationwide.",
  },
  {
    title: "Partner With Us and Start Earning",
    subtitle: "Earn massively by offering essential telecom services directly within your community.",
  },
];

export default function VideoHero() {
  const router = useRouter();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Smooth Premium Animation
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power2.out",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % slides.length);

          gsap.fromTo(
            [titleRef.current, subtitleRef.current],
            { opacity: 0, y: 20, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }
          );
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">

      {/* 🔥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 max-w-3xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-6xl font-extrabold drop-shadow-2xl mb-4"
        >
          {slides[index].title}
        </h2>

        <p
          ref={subtitleRef}
          className="text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-xl mb-10"
        >
          {slides[index].subtitle}
        </p>

        <button
          onClick={() => router.push("/start-earning")}
          className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white text-lg rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.03]"
        >
          Start Earning Now
        </button>
      </div>
    </div>
  );
}
