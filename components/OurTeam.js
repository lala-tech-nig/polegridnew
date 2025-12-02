"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Leke O.",
    role: "Field Verification & Site Assessment Officer",
    bio: "Responsible for inspecting and evaluating proposed land sites to confirm suitability for telecom tower installation. Ensures proper measurement, access route checks, environmental safety, and verification before presenting the land to telecom companies.",
    img: "/leke.jpg",
  },
  {
    name: "Mr Oge B.",
    role: "Technical Liaison (Telecom & Tower Company Coordinator)",
    bio: "Acts as the bridge between Polegrid Solutions and telecom/tower companies. Manages technical expectations, communicates installation requirements, and ensures all verified sites meet specifications needed for seamless tower deployment.",
    img: "/oge.jpg",
  },
  {
    name: "Saratu T.",
    role: "Compliance & Partnership Manager",
    bio: "Oversees partnership agreements, documentation, landowner verification, and regulatory compliance. Ensures all engagements are transparent, legally sound, and aligned with industry standards.",
    img: "/saratu.jpg",
  },
  {
    name: "Ebenezer A.",
    role: "Head of Operations",
    bio: "Oversees day-to-day operations at Polegrid Solutions, coordinating communication between landowners, field teams, and telecom partners. Ensures smooth onboarding, proper documentation, and efficient handling of inquiries and project activities.",
    img: "/eben.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Meet The Polegrid Solutions Team
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          The dedicated minds who ensure smooth collaborations between landowners
          and telecom industry partners.
        </p>
      </motion.div>

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center"
          >
            {/* SQUARE IMAGE */}
            <div className="w-full aspect-square overflow-hidden rounded-xl">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT UNDER IMAGE */}
            <h3 className="text-xl font-semibold text-center mt-5">
              {member.name}
            </h3>

            <p className="text-green-700 text-center font-medium text-sm mt-1">
              {member.role}
            </p>

            <p className="text-gray-600 text-sm text-center mt-4 leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
