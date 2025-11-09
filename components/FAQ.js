"use client";
import { useState } from "react";

const faqs = [
  { q: "How can I become a PoleGrid partner?", a: "Click on Start Earning Now and choose your category to register." },
  { q: "Where is PoleGrid located?", a: "We operate across Nigeria with our HQ in Lagos." },
  { q: "Do you offer renewable energy systems?", a: "Yes, we provide solar and hybrid power for telecom sites." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-3 text-left text-lg font-medium"
            >
              {f.q}
              <span>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="pb-4 text-gray-700">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
