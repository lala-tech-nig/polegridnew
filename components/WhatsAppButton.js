"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  // Show the popup occasionally (every 10-15 seconds randomly)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000); // hide after 5s
    }, Math.random() * (15000 - 10000) + 10000); // 10-15s random
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "+2347018162166";
  const defaultMessage = "Good day, saw your advert online, can I know more?";

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      {/* Popup message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg z-50 cursor-pointer"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Need help? Click me!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer z-50"
      >
        <FaWhatsapp size={28} color="white" />
      </motion.a>
    </>
  );
}
