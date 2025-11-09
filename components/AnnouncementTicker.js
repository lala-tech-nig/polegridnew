"use client";
export default function AnnouncementTicker() {
  return (
    <div className="bg-[var(--brand-green)] text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-center">
        📢 Stay connected — Join PoleGrid Telecom and experience unmatched service quality!
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
