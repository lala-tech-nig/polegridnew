"use client";
import { useState } from "react";
import Modal from "./Modal";
import ServiceCard from "./ServiceCard";
import Toast from "./Toast";
import Confetti from "react-confetti";

const services = [
  {
    image: "/images/hero1.jpg",
    title: "Telecom Infrastructure",
    desc: "Building strong and reliable connectivity systems nationwide.",
    full: "We specialize in providing world-class telecom tower management, maintenance, and deployment services to ensure continuous network availability.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Network Maintenance",
    desc: "24/7 technical monitoring and maintenance.",
    full: "Our experts maintain and monitor all network systems, reducing downtime and improving customer satisfaction.",
  },
  {
    image: "/images/hero3.jpg",
    title: "Solar Power Solutions",
    desc: "Green energy solutions for telecom towers.",
    full: "We integrate renewable solar energy solutions to reduce carbon footprints and enhance sustainability in telecom operations.",
  },
  {
    image: "/images/hero4.jpg",
    title: "Fiber Optics Installation",
    desc: "High-speed fiber connectivity.",
    full: "PoleGrid provides high-speed fiber network infrastructure for businesses and organizations to ensure seamless data transmission.",
  },
  {
    image: "/images/hero5.jpg",
    title: "Smart Surveillance",
    desc: "AI-powered site monitoring.",
    full: "We deploy smart surveillance and IoT devices to ensure real-time monitoring of telecom infrastructure and remote locations.",
  },
  {
    image: "/images/hero1.jpg",
    title: "Technical Training",
    desc: "Empowering Nigerian engineers.",
    full: "Our training programs equip professionals with cutting-edge skills in telecom technology, fiber systems, and renewable power.",
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(false);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-4">Our Services</h2>
      <p className="text-center text-gray-700 mb-10">
        Delivering reliable telecom infrastructure and technical services.
      </p>

      <div className="grid md:grid-cols-3 gap-8 px-8">
        {services.map((srv, idx) => (
          <ServiceCard
            key={idx}
            image={srv.image}
            title={srv.title}
            desc={srv.desc}
            onKnowMore={() => setSelected(srv)}
          />
        ))}
      </div>

      {selected && (
        <Modal
          show={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
        >
          <img
            src={selected.image}
            alt={selected.title}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <p className="text-gray-700 mb-4">{selected.full}</p>
          <button
            onClick={() => {
              setToast(true);
              setSelected(null);
            }}
            className="w-full py-2 text-white bg-green-600 rounded-full hover:opacity-80"
          >
            Close
          </button>
        </Modal>
      )}

      {toast && (
        <>
          <Toast
            show={toast}
            onClose={() => setToast(false)}
            message="Form submitted successfully!"
          />
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </>
      )}
    </section>
  );
}
