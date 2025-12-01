"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonialsRow1 = [
  { name: "Adebayo – Property Owner, Lagos", text: "PoleGrid handled my tower lease from start to finish. Transparent, respectful, and incredibly fast." },
  { name: "Ngozi – Estate Developer, Abuja", text: "Their team brought structure and clarity to our telecom installations. Zero stress, top-tier professionalism." },
  { name: "Ibrahim – Community Leader, Kano", text: "For the first time, our area enjoys stable network coverage. PoleGrid kept every promise." },
  { name: "Chidinma – Business Owner, Enugu", text: "Smooth deployment and excellent communication. I recommend them without hesitation." },
];

const testimonialsRow2 = [
  { name: "Tunde – Land Investor, Ibadan", text: "Their lease negotiations were fair and well-explained. PoleGrid truly values landowners." },
  { name: "Blessing – Hostel Manager, PH", text: "Installation was neat and professional. Their engineers know exactly what they are doing." },
  { name: "Uche – Private Site Owner, Owerri", text: "Reliable team, consistent support, and fast maintenance response. Outstanding service." },
  { name: "Samuel – Resident, Kaduna", text: "Network quality in our community improved drastically after PoleGrid came in." },
];

export default function Testimonials() {
  const row1Ref = useRef();
  const row2Ref = useRef();

  useEffect(() => {
    // Row 1 — Left to Right
    gsap.to(row1Ref.current, {
      xPercent: -100,
      duration: 35,
      ease: "linear",
      repeat: -1,
    });

    // Row 2 — Right to Left
    gsap.fromTo(
      row2Ref.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 35,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
        What Our Clients Say
      </h2>

      {/* ROW 1 */}
      <div className="relative w-full overflow-hidden mb-10">
        <div ref={row1Ref} className="flex space-x-8">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 min-w-[320px] max-w-[320px] border border-gray-100"
            >
              <p className="text-gray-700 italic mb-3">"{t.text}"</p>
              <p className="text-green-600 font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="relative w-full overflow-hidden">
        <div ref={row2Ref} className="flex space-x-8">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 min-w-[320px] max-w-[320px] border border-gray-100"
            >
              <p className="text-gray-700 italic mb-3">"{t.text}"</p>
              <p className="text-green-600 font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
