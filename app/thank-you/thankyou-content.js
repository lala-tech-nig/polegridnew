"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function ThankYouContent() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const searchParams = useSearchParams();

  const submissionType = searchParams.get("type"); 
  const shouldRedirect = submissionType === "org";

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    let timeout;
    if (shouldRedirect) {
      timeout = setTimeout(() => {
        window.location.href = "https://polegrid.com";
      }, 7000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldRedirect]);

  return (
    <div className="relative w-full min-h-screen bg-[#f9fff6] overflow-hidden flex flex-col items-center justify-center text-center">

      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={400}
        recycle={false}
      />

      <FloatingShape size={80} left="10%" delay={0} color="#4ade80" />
      <FloatingShape size={100} left="80%" delay={2} color="#60a5fa" />
      <FloatingShape size={60} left="50%" delay={1} color="#facc15" />
      <FloatingShape size={90} left="25%" delay={3} color="#fb7185" />

      <Sparkle top="20%" left="40%" />
      <Sparkle top="60%" left="70%" />
      <Sparkle top="30%" left="20%" />
      <Sparkle top="75%" left="50%" />

      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold text-green-600 drop-shadow-lg"
      >
        Thank You! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-gray-700 text-lg mt-3 max-w-xl"
      >
        Our team will reach out to you once we confirm your submission.
      </motion.p>

      {shouldRedirect && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-2"
        >
          Redirecting…
        </motion.p>
      )}
    </div>
  );
}

/* ============================================================
    FLOATING SHAPES COMPONENT
============================================================ */
function FloatingShape({ size, left, delay, color }) {
  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: -500, opacity: 0.9, rotate: 360 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: left,
      }}
      className="absolute bottom-0 rounded-2xl blur-[1px] opacity-80"
    />
  );
}

/* ============================================================
    SPARKLE EFFECT
============================================================ */
function Sparkle({ top, left }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.5, 1, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute"
      style={{ top, left }}
    >
      <div className="w-6 h-6 bg-yellow-300 rounded-full blur-sm"></div>
    </motion.div>
  );
}
