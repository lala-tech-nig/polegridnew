"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ServicePage() {
  const [selectedOption, setSelectedOption] = useState(null); // "landlord" | "organization"
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({});
  const [confetti, setConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
      setModalOpen(false);
      const paymentUrl = `https://checkout.flutterwave.com/v3/hosted/pay?tx_ref=${Date.now()}&amount=5000&currency=NGN&redirect_url=${encodeURIComponent(
        window.location.href
      )}&customer[email]=${form.email || form.emailAddress || ""}`;
      window.location.href = paymentUrl;
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      {/* Introduction */}
      <div className="max-w-5xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-600">Welcome to PoleGrid Services</h1>
        <p className="text-gray-700 text-lg">
          PoleGrid offers innovative solutions for both landlords and organizations, ensuring secure, transparent, and efficient management.
        </p>
        <p className="text-gray-600">
          Choose whether you are a Landlord or an Organization to get started with our specialized services.
        </p>
      </div>

      {/* Option Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-10">
        <button
          onClick={() => handleOptionClick("landlord")}
          className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500"
        >
          Landlord
        </button>
        <button
          onClick={() => handleOptionClick("organization")}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500"
        >
          Organization
        </button>
      </div>

      {/* Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center z-50 overflow-auto p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 w-full max-w-3xl shadow-xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
              {selectedOption === "landlord" ? "Landlord Details" : "Organization Details"}
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-auto">
              {selectedOption === "landlord" && (
                <>
                  <input name="fullName" placeholder="Full Name" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="state" placeholder="State" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="propertyAddress" placeholder="Property Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="localGovernment" placeholder="Local Government" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <select name="sex" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Select Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <select name="serviceType" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Service Type</option>
                    <option value="Tower">Tower</option>
                    <option value="ATMinstallation">ATM Installation</option>
                  </select>
                  <input type="file" name="idPhoto" required onChange={handleInputChange} className="w-full" />
                  <input type="file" name="supportingDocs" required onChange={handleInputChange} className="w-full" />
                </>
              )}

              {selectedOption === "organization" && (
                <>
                  <input name="organizationName" placeholder="Organization Name" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="email" name="emailAddress" placeholder="Email Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="address" placeholder="Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="contactPersonName" placeholder="Contact Person Name" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="email" name="contactPersonEmail" placeholder="Contact Person Email" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="tel" name="contactPersonPhone" placeholder="Contact Person Phone" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <select name="organizationType" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Organization Type</option>
                    <option value="Telecom Company">Telecom Company</option>
                    <option value="Towerco">Towerco</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Financial Institution">Financial Institution</option>
                    <option value="Agents">Agents</option>
                    <option value="Energy Companies">Energy Companies</option>
                    <option value="Infrastructure Companies">Infrastructure Companies</option>
                    <option value="Government Agencies">Government Agencies</option>
                    <option value="Others">Others</option>
                  </select>
                  <input name="designation" placeholder="Designation" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <select name="registrationProcess" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Registration Process</option>
                    <option value="partnership/collaboration">Partnership/Collaboration</option>
                    <option value="service provision">Service Provision</option>
                    <option value="property listing">Property Listing</option>
                    <option value="investment opportunities">Investment Opportunities</option>
                  </select>
                </>
              )}

              <div className="md:col-span-2">
                <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500">
                  Submit & Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confetti && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={250} recycle={false} />}
    </section>
  );
}
