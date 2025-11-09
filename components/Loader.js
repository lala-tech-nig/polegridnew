"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Loader() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <img src="/images/logo.png" alt="PoleGrid Logo" className="w-32 h-32 mb-4 animate-pulse" />
      <p className="text-lg text-center">Welcome to the wonderful world of unique service</p>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
}
