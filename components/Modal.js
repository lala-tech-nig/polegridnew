"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ show, onClose, title, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 max-w-md w-[90%] shadow-xl relative"
          >
            <button
              className="absolute top-2 right-3 text-black text-xl"
              onClick={onClose}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">{title}</h2>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
