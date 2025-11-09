"use client";
import { useState } from "react";
import Toast from "./Toast";
import Confetti from "react-confetti";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4 px-8">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border rounded-lg p-3"
        />
        <textarea
          placeholder="Message"
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border rounded-lg p-3 h-32"
        />
        <button
          type="submit"
          className="py-3 text-white bg-green-600 rounded-full hover:opacity-80"
        >
          Send Message
        </button>
      </form>

      {toast && (
        <>
          <Toast
            show={toast}
            onClose={() => setToast(false)}
            message={`Thank you, ${form.name || "friend"}! We'll reach out soon.`}
          />
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </>
      )}
    </section>
  );
}
