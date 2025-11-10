// "use client";

// import { useEffect, useState } from "react";
// import Confetti from "react-confetti";

// export default function Loader() {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     // 🎉 Confetti starts after 1 second
//     const confettiTimer = setTimeout(() => setShowConfetti(true), 1000);

//     // ⏳ Loader stays visible for 10 seconds then starts fade out
//     const fadeOutTimer = setTimeout(() => setVisible(false), 7000);

//     // 🎊 Stop confetti shortly after fade out
//     const stopConfettiTimer = setTimeout(() => setShowConfetti(false), 7500);

//     return () => {
//       clearTimeout(confettiTimer);
//       clearTimeout(fadeOutTimer);
//       clearTimeout(stopConfettiTimer);
//     };
//   }, []);

//   if (!mounted) return null;
//   if (!visible) return null; // Remove loader after fade out completes

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center bg-white text-black z-[9999] overflow-hidden transition-opacity duration-1000 ${
//         visible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* 🔄 Rotating Logo */}
//       <img
//         src="/polegridlogo.png"
//         alt="PoleGrid Logo"
//         className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full border-4 border-green-500 animate-spin-slow shadow-2xl bg-white p-2 object-cover"
//       />

//       {/* 📝 Welcome Text */}
//       <p className="text-lg md:text-2xl font-semibold text-center px-4 leading-snug animate-fadeIn">
//         Welcome to the wonderful world of{" "}
//         <span className="text-green-600 font-bold">unique service</span>
//       </p>

//       {/* 🎉 Confetti Animation */}
//       {showConfetti && (
//         <Confetti
//           width={window.innerWidth}
//           height={window.innerHeight}
//           numberOfPieces={500}
//           gravity={0.25}
//         />
//       )}

//       {/* 💫 Custom Animations */}
//       <style jsx global>{`
//         @keyframes spin-slow {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 5s linear infinite;
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 2.5s ease forwards;
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function ChristmasLoader() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 🎉 Start confetti after 1 second
    const confettiTimer = setTimeout(() => setShowConfetti(true), 1000);

    // ⏳ Loader fades out after 8 seconds
    const fadeOutTimer = setTimeout(() => setVisible(false), 8000);

    // 🎊 Stop confetti shortly after fade out
    const stopConfettiTimer = setTimeout(() => setShowConfetti(false), 8500);

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(stopConfettiTimer);
    };
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-50 text-black z-[9999] overflow-hidden transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 🎅 Rotating Glowing Logo */}
      <img
        src="/polegridlogo.png"
        alt="PoleGrid Logo"
        className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full border-4 border-green-600 animate-spin-slow shadow-[0_0_30px_rgba(0,128,0,0.4)] bg-white p-2 object-cover"
      />

      {/* 🎄 Greeting Text */}
      <div className="text-center px-6 animate-fadeIn">
        <h1 className="text-2xl md:text-4xl font-extrabold text-green-700 mb-3 drop-shadow-sm">
          🎄 Merry Christmas & Happy New Year 🎅
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed">
          Wishing you joy, peace, and love this festive season!  
          <br />
          With ❤️ from <span className="text-green-700 font-bold">PoleGrid</span>
        </p>
      </div>

      {/* ❄️ Snowflakes Animation Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="snowflake text-green-500 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 12}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* 🎉 Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          gravity={0.15}
          recycle={false}
        />
      )}

      {/* ✨ Custom Animations */}
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
          animation: spin-slow 6s linear infinite;
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

        /* ❄️ Snowflake Animation */
        @keyframes snow {
          0% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .snowflake {
          position: absolute;
          top: -10px;
          animation: snow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
