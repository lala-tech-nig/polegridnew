"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-12 px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        
        {/* About Section */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-green-500">PoleGrid</h3>
          <p className="text-gray-300 max-w-sm">
            PoleGrid is SCUML certified, ensuring transparency, security, and integrity in our services.
          </p>
          <div className="flex gap-4 mt-2">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500">
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500">
              <FaTwitter size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500">
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500">
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </div>

        {/* Logo Section with white background */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="bg-white p-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/polegrid.png"
              alt="PoleGrid Logo"
              className="w-32 md:w-40"
            />
          </div>
        </div>
      </div>

      {/* Policies & Copy */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-2 md:space-y-0">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-green-500 transition">Terms & Conditions</a>
          <span>•</span>
          <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-green-500 transition">Refund Policy</a>
        </div>
        <p>© 2025 PoleGrid. All Rights Reserved.</p>
        <p>Designed by <span className="text-green-500">Durafford</span></p>
      </div>
    </motion.footer>
  );
}
