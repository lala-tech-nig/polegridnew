"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function StartEarning() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("none");

  const [landlordForm, setLandlordForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    state: "",
    lga: "",
    busStop: "",
    serviceType: "",
    tower: "",
    sex: "",
    idPhoto: null,
    documents: null,
  });

  const [orgForm, setOrgForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    orgType: "",
    designation: "",
    registrationProcess: "",
  });

  const handleLandlordSubmit = () => router.push("/payment");
  const handleOrgSubmit = () => router.push("/payment");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-10">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900"
      >
        Start Earning With PoleGrid
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 text-center max-w-xl mb-8 text-lg md:text-xl"
      >
        Become a verified landlord or partner organization and start earning.
      </motion.p>

      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition-all"
      >
        Start Earning Now
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-lg md:max-w-xl overflow-y-auto max-h-[90vh]"
            >
              {/* Registration Type Selection */}
              {type === "none" && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                    Choose Registration Type
                  </h2>

                  <button
                    onClick={() => setType("landlord")}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
                  >
                    Landlord
                  </button>

                  <button
                    onClick={() => setType("organization")}
                    className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all"
                  >
                    Organization
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-2 w-full py-2 text-sm text-gray-500 underline"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* Landlord Form */}
              {type === "landlord" && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-green-700 mb-2">
                    Landlord Registration
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Fill your details correctly to get verified.
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {Object.keys(landlordForm).map((key) => (
                      <input
                        key={key}
                        type={key === "idPhoto" || key === "documents" ? "file" : "text"}
                        value={key === "idPhoto" || key === "documents" ? undefined : landlordForm[key]}
                        onChange={(e) =>
                          setLandlordForm({
                            ...landlordForm,
                            [key]:
                              key === "idPhoto" || key === "documents"
                                ? e.target.files[0] || null
                                : e.target.value,
                          })
                        }
                        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
                        placeholder={key.replace(/([A-Z])/g, " $1")}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={handleLandlordSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
                  >
                    Submit Registration
                  </motion.button>
                </div>
              )}

              {/* Organization Form */}
              {type === "organization" && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-purple-700 mb-2">
                    Organization Registration
                  </h2>

                  <div className="grid grid-cols-1 gap-3">
                    {Object.keys(orgForm).map((key) => (
                      <input
                        key={key}
                        type="text"
                        value={orgForm[key]}
                        onChange={(e) =>
                          setOrgForm({
                            ...orgForm,
                            [key]: e.target.value,
                          })
                        }
                        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all"
                        placeholder={key.replace(/([A-Z])/g, " $1")}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={handleOrgSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full bg-purple-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-all"
                  >
                    Submit
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
