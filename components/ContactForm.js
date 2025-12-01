"use client";

import { useState, useRef } from "react";
import Confetti from "react-confetti";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setConfetti(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setConfetti(false), 5000);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Image with Gradient Border and Hover Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="w-full lg:w-1/2 max-h-[500px] p-1 rounded-3xl bg-gradient-to-r from-green-400 via-green-600 to-blue-500 shadow-xl flex items-center justify-center"
        >
          <div className="overflow-hidden rounded-2xl h-full w-full shadow-lg">
            <img
              src="/customer.jpg" // replace with your image
              alt="Contact Us"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 max-h-[500px] bg-white p-6 lg:p-8 rounded-2xl shadow-xl space-y-4 lg:space-y-6 relative flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-4 lg:mb-6 text-center lg:text-left">
            Contact Us
          </h2>

          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-3 text-green-600" />
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-green-600" />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-3 text-green-600" />
            <textarea
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 pl-10 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-full hover:opacity-90 transition"
          >
            Send Message
          </button>

          {/* Toast Notification */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Thank you! We'll reach out soon.
            </motion.div>
          )}

          {/* Confetti */}
          {confetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={150}
              recycle={false}
            />
          )}
        </motion.form>
      </div>
    </section>
  );
}
