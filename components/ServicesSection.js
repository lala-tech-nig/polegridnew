"use client"; 
import { useState } from "react";
import Modal from "./Modal";
import ServiceCard from "./ServiceCard";
import Toast from "./Toast";
import Confetti from "react-confetti";

const services = [
  {
    image: "./hero1.jpg",
    title: "Land Leasing for Towers",
    desc: "Secure revenue from your unused land through premium tower leasing.",
    full:
      "We connect landowners with major telecom operators seeking strategic locations for network expansion. Our team handles valuation, compliance, documentation, and long-term contract optimization. Whether you have a small plot or an expansive property, we transform your land into a powerful income-generating asset while ensuring zero disruption to your space.",
  },
  {
    image: "/hero2.jpg",
    title: "Equipment Placement",
    desc: "Earn consistent income by hosting telecom equipment on your property.",
    full:
      "Telecom companies constantly need safe, secure, and accessible locations to install broadcast equipment, antennas, power backup units, and small-cell devices. We ensure your property meets all technical and regulatory requirements, negotiate the highest possible monthly payout, and manage the entire installation process with zero stress on your end.",
  },
  {
    image: "/hero3.jpg",
    title: "Expert Negotiation",
    desc: "We negotiate high-value deals that protect your rights.",
    full:
      "Most landowners unknowingly accept underpriced tower and equipment contracts. We use industry-backed valuation models, legal expertise, and insider market data to negotiate the best possible terms. From rental pricing to safety clauses, contract duration, escalation rates, and renewal safeguards—we ensure every agreement works in your favor.",
  },
  {
    image: "/hero4.jpg",
    title: "Legal & Technical Resources",
    desc: "Full legal, technical, and compliance support for every project.",
    full:
      "Telecom agreements involve complex engineering, regulatory validation, and legal documentation. We provide end-to-end support including contract review, site audits, landlord training, environmental assessments, and technical feasibility reports. Our experts ensure your project meets all NCC, environmental, and municipal standards while keeping your interest protected.",
  },
  {
    image: "/hero5.jpg",
    title: "Property Management",
    desc: "We manage your property and ensure seamless operations.",
    full:
      "Once a tower or telecom equipment is installed, we oversee the entire lifecycle—maintenance access, safety inspections, contractor visits, dispute resolution, documentation updates, and compliance checks. You no longer have to deal with unannounced visits or mismanaged agreements. We protect your property while ensuring operators follow all terms.",
  },
  {
    image: "/hero6.jpg",
    title: "ATM Installation",
    desc: "Turn your property into a revenue-generating ATM hotspot.",
    full:
      "Banks and fintech companies are continually expanding ATM coverage across Nigeria, and your location might be exactly what they need. We evaluate your property for traffic flow, security, accessibility, and commercial viability. Once approved, we negotiate installation fees, rental payments, power agreements, and ongoing maintenance—ensuring consistent passive income for you.",
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(false);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
        Our Services
      </h2>

      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        We offer industry-leading telecom, infrastructure, property management,
        and revenue-driven services designed to empower landowners, businesses, 
        and communities across Nigeria.
      </p>

      {/* SERVICE CARDS */}
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

      {/* MODAL */}
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

      {/* TOAST + CONFETTI */}
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
