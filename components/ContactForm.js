"use client";

import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const formRef = useRef();

  // Update window size for Confetti safely (supports SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateSize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://backend.polegrid.com/api/contact/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send message.");

      setSubmitted(true);
      setConfetti(true);

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setConfetti(false), 5000);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden">

      {/* Background circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 relative">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.01 }}
          className="rounded-3xl shadow-2xl overflow-hidden bg-white/60 backdrop-blur-lg border border-white/40"
        >
          <img src="/customer.jpg" alt="Contact Us" className="object-cover w-full h-full" />
        </motion.div>

        {/* FORM SECTION */}
        <div className="space-y-10">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-white/40 space-y-6 relative"
          >
            <h2 className="text-4xl font-extrabold text-gray-800">Let's Talk</h2>
            <p className="text-gray-600">We’d love to hear from you. Fill the form and our team will reply shortly.</p>

            {/* NAME */}
            <div className="relative">
              <FiUser className="absolute left-4 top-3 text-green-600 text-xl opacity-70" />
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/50 border border-gray-300 rounded-xl p-3 pl-12 
                focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FiMail className="absolute left-4 top-3 text-green-600 text-xl opacity-70" />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/50 border border-gray-300 rounded-xl p-3 pl-12 
                focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-3 text-green-600 text-xl opacity-70" />
              <textarea
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-white/50 border border-gray-300 rounded-xl p-3 pl-12 h-40 
                focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-gray-700"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white text-lg font-semibold 
                transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 shadow-lg"
                }`}
            >
              <FiSend className="text-xl" />
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* SUCCESS */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                Message sent!
              </motion.div>
            )}

            {/* ERROR */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                {error}
              </motion.div>
            )}

            {confetti && (
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                numberOfPieces={200}
                recycle={false}
              />
            )}
          </motion.form>

          {/* CONTACT INFO CARD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/40 space-y-5"
          >
            <h3 className="text-2xl font-bold text-gray-800">Contact Details</h3>
            <p className="text-gray-600">Reach out to us anytime. We're ready to assist you.</p>

            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3 items-start">
                <FiMapPin className="text-green-600 text-xl" />
                4A Ajimo Logere, Pinnacle Horizon, Ibeju-Lekki, Lagos.
              </div>

              <div className="flex gap-3 items-start">
                <FiMail className="text-green-600 text-xl" />
                polegrid01@gmail.com
              </div>

              <div className="flex gap-3 items-start">
                <FiPhone className="text-green-600 text-xl" />
                07018162166
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
