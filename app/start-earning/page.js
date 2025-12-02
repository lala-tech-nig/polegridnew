"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";

export default function ServicePage() {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({});
  const [confetti, setConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load FLW script automatically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  // ------------ INLINE PAYMENT ------------
  const handleLandlordPayment = () => {
    if (!form.email || !form.fullName || !form.phoneNumber) {
      alert("Please fill in all required fields!");
      return;
    }

    FlutterwaveCheckout({
      public_key: "FLWPUBK-42fdf25af2f988975742a7aed0a996c3-X",
      tx_ref: `polegrid_${Date.now()}`,
      amount: 15500,
      currency: "NGN",
      customer: {
        email: form.email,
        phonenumber: form.phoneNumber,
        name: form.fullName,
      },
      customizations: {
        title: "PoleGrid Services",
        description: "Landlord registration payment",
        logo: "https://i.postimg.cc/15jgmSHD/polegridlogo1-removebg-preview.png",
      },
      callback: function (response) {
        console.log("Payment Success:", response);
        setConfetti(true);
        setTimeout(() => {
          router.push("/thank-you/");
        }, 1000);
      },
      onclose: function () {
        console.log("Payment Closed");
      },
    });
  };

  const handleOrganizationSubmit = () => {
    router.push("/thank-you/");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <div className="max-w-5xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-600">Welcome to PoleGrid Services</h1>
        <p className="text-gray-700 text-lg">
          PoleGrid offers innovative solutions for both landlords and organizations.
        </p>
        <p className="text-gray-600">Choose an option below to get started.</p>
      </div>

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

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-auto">
              {/* LANDLORD FIELDS */}
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

              {/* ORGANIZATION FIELDS */}
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

              {/* SUBMIT */}
              <div className="md:col-span-2">
                {selectedOption === "landlord" ? (
                  <button
                    type="button"
                    onClick={handleLandlordPayment}
                    className="w-full py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500"
                  >
                    Submit & Pay ₦15,500
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleOrganizationSubmit}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500"
                  >
                    Submit Now
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {confetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={250}
          recycle={false}
        />
      )}
    </section>
  );
}
