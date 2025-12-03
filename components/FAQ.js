"use client";

import { useState } from "react";
import { QuestionMarkCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  const faqData = [
    { question: "What is Polegrid?", answer: "Polegrid Solutions is a company specializing in streamlining and fast-tracking the site acquisition process for Telecom Operators and Tower Companies for the installation of telecom towers nationwide. Essentially, Polegrid acts as the crucial link between landowners and the telecommunications industry in Nigeria." },
    { question: "How does it work?", answer: "We match telecom needs with landowners' properties, handle verification, documentation, and lease agreements." },
    { question: "What documents are required?", answer: "ID, land ownership proof, utility bill, passport photo, and a photo of your land." },
    { question: "How much can I earn?", answer: "Earnings vary by location and tower size, typically above ₦2 million yearly." },
    { question: "What is the duration of a lease?", answer: "Lease duration ranges from 5 to 20 years for stable long-term income." },
    { question: "Which properties qualify?", answer: "Vacant lands, commercial buildings, and high-visibility areas; suitability confirmed on inspection." },
    { question: "Will installation affect my land?", answer: "Minimal footprint; remaining land can still be used freely." },
    { question: "How do I benefit from Polegrid?", answer: "Earn passive income while we handle operators, documentation, and maintenance." },
    { question: "How long does installation take?", answer: "Typically 1–3 months depending on approvals and schedules." },
    { question: "Can I still use the land?", answer: "Yes, installation only occupies a small fenced area." },
    { question: "What support does Polegrid provide?", answer: "Full support through documentation, negotiation, inspection, and maintenance." },
    { question: "What is the minimum space required?", answer: "Minimum space is 20ft x 20ft." },
    { question: "How do I start?", answer: "Register your land and upload details. Our team guides you. Fee: ₦15,500." },
    { question: "How long is registration?", answer: "3–5 business days." },
    { question: "Is there a success fee?", answer: "Yes, 5% upon approval and installation start." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12 drop-shadow-sm">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 border-transparent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                style={{
                  backgroundImage: "linear-gradient(white, white), linear-gradient(90deg, #10B981, #3B82F6)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  borderRadius: "1rem",
                  borderWidth: "2px",
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <QuestionMarkCircleIcon className="w-7 h-7 text-green-600" />
                    <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  </div>
                  {isOpen ? (
                    <MinusIcon className="w-6 h-6 text-green-600 transition-transform" />
                  ) : (
                    <PlusIcon className="w-6 h-6 text-green-600 transition-transform" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 overflow-hidden px-5 ${
                    isOpen ? "max-h-[500px] py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-base leading-relaxed">{item.answer}</p>
                </div>

                {/* Glowing effect when open */}
                {isOpen && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow:
                        "0 0 30px rgba(16, 185, 129, 0.4), inset 0 0 15px rgba(16,185,129,0.25)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
