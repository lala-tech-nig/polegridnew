"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Loader() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 🎉 Confetti starts after 1 second
    const confettiTimer = setTimeout(() => setShowConfetti(true), 1000);

    // ⏳ Loader stays visible for 10 seconds then starts fade out
    const fadeOutTimer = setTimeout(() => setVisible(false), 7000);

    // 🎊 Stop confetti shortly after fade out
    const stopConfettiTimer = setTimeout(() => setShowConfetti(false), 7500);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(stopConfettiTimer);
    };
  }, []);

  if (!mounted) return null;
  if (!visible) return null; // Remove loader after fade out completes

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white text-black z-[9999] overflow-hidden transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 🔄 Rotating Logo */}
      <img
        src="/polegridlogo.png"
        alt="PoleGrid Logo"
        className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full border-4 border-green-500 animate-spin-slow shadow-2xl bg-white p-2 object-cover"
      />

      {/* 📝 Welcome Text */}
      <p className="text-lg md:text-2xl font-semibold text-center px-4 leading-snug animate-fadeIn">
        Welcome to the wonderful world of{" "}
        <span className="text-green-600 font-bold">unique service</span>
      </p>

      {/* 🎉 Confetti Animation */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          gravity={0.25}
        />
      )}

      {/* 💫 Custom Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
