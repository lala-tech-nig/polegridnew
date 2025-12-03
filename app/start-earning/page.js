"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt, FaIdCard } from "react-icons/fa";

export default function ServicePage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({});
  const [confetti, setConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [idPreview, setIdPreview] = useState(null);
  const [ownershipPreview, setOwnershipPreview] = useState(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load Flutterwave script
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
    if (files) {
      setForm({ ...form, [name]: files[0] });
      if (name === "idPhoto") setIdPreview(URL.createObjectURL(files[0]));
      if (name === "ownershipDoc") setOwnershipPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Submit Landlord Form to API
  const handleLandlordSubmit = async () => {
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));

      const response = await fetch("https://backend.polegrid/api/landlord/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit landlord form");

      const data = await response.json();
      console.log("Landlord submission successful:", data);
      setConfetti(true);
      setTimeout(() => router.push("/thank-you/"), 1000);
    } catch (error) {
      console.error("Error submitting landlord form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  // Handle Payment then submit landlord form
  const handleLandlordPayment = () => {
    if (!form.fullName || !form.email || !form.phoneNumber) {
      alert("Please fill in all required fields!");
      return;
    }

    FlutterwaveCheckout({
      public_key: "FLWPUBK-42fdf25af2f988975742a7aed0a996c3-X",
      tx_ref: `polegrid_${Date.now()}`,
      amount: 15500,
      currency: "NGN",
      customer: { email: form.email, phonenumber: form.phoneNumber, name: form.fullName },
      customizations: {
        title: "PoleGrid Services",
        description: "Landlord registration payment",
        logo: "https://i.postimg.cc/15jgmSHD/polegridlogo1-removebg-preview.png",
      },
      callback: function (response) {
        console.log("Payment Success:", response);
        handleLandlordSubmit(); // Submit the form after successful payment
      },
      onclose: function () { console.log("Payment Closed"); },
    });
  };

  // Organization form submission (unchanged)
  const handleOrganizationSubmit = async () => {
    const requiredFields = [
      "organizationName", "emailAddress", "phoneNumber", "address",
      "contactPersonName", "contactPersonEmail", "contactPersonPhone",
      "organizationType", "designation", "registrationProcess"
    ];
    for (let field of requiredFields) {
      if (!form[field]) {
        alert("Please fill in all required fields!");
        return;
      }
    }

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));

      const response = await fetch("https://backend.polegrid/api/organization/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit organization form");

      const data = await response.json();
      console.log("Organization submission successful:", data);
      setConfetti(true);
      setTimeout(() => router.push("/thank-you/"), 1000);
    } catch (error) {
      console.error("Error submitting organization form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <div className="max-w-5xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-600">Welcome to PoleGrid Services</h1>
        <p className="text-gray-700 text-lg">PoleGrid offers innovative solutions for both landlords and organizations.</p>
        <p className="text-gray-600">Choose an option below to get started.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mt-10">
        <button onClick={() => handleOptionClick("landlord")} className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500">Landlord</button>
        <button onClick={() => handleOptionClick("organization")} className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">Organization</button>
      </div>

      {/* NOTICE SECTION BELOW BUTTONS */}
      <div className="w-full max-w-3xl bg-white shadow-sm border border-gray-200 rounded-2xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Payment Notice (₦15,500)</h3>
        <p className="text-gray-700 leading-relaxed">
          Clicking on Landlord button above requires you to make an online payment
          of <strong>₦15,500</strong> using your card.
        </p>
        <p className="text-gray-700 mt-4">
          Alternatively, you may pay by direct bank transfer to:
        </p>
        <div className="mt-3 bg-green-50 border border-green-200 p-4 rounded-lg text-sm">
          <p><strong>Bank:</strong> UBA</p>
          <p><strong>Account Name:</strong> Polegrid Solutions</p>
          <p><strong>Account Number:</strong> 1028078590</p>
        </div>
        <p className="text-gray-700 mt-4 text-sm">
          After making a transfer, send your payment receipt to our official WhatsApp:
          <strong> 0701 816 2166</strong>.
        </p>
        <p className="text-gray-700 mt-2 text-sm">
          Once verified, we will send you the registration form directly on WhatsApp.
        </p>
      </div>

      <hr className="my-10 w-full max-w-3xl border-gray-300" />

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start sm:items-center justify-center z-50 overflow-auto p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 w-full max-w-3xl shadow-xl relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl">✕</button>
            <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
              {selectedOption === "landlord" ? "Land Fast Track Registration" : "Organization Registration Form"}
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-auto">
              {/* LANDLORD FORM */}
              {selectedOption === "landlord" && (
                <>
                  <div className="flex items-center gap-2"><FaUser /><input name="fullName" placeholder="Full Legal Name" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" /></div>
                  <div className="flex items-center gap-2"><FaEnvelope /><input type="email" name="email" placeholder="Email Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" /></div>
                  <div className="flex items-center gap-2"><FaPhone /><input type="tel" name="phoneNumber" placeholder="Phone Number" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" /></div>
                  <select name="sex" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="flex items-center gap-2"><FaUser /><input name="propertyOwnerName" placeholder="Name of Property Owner" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" /></div>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt /><input name="propertyAddress" placeholder="Property Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" /></div>
                  <div className="flex items-center gap-2"><FaMapMarkerAlt /><input name="nearestBusStop" placeholder="Nearest Bus Stop/Landmark" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" /></div>
                  <input name="localGovernment" placeholder="Local Government Area (LGA)" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="state" placeholder="State" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <select name="propertyType" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Type of Property</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Mixed-Use">Mixed-Use</option>
                    <option value="Vacant Land">Vacant Land</option>
                  </select>
                  <select name="serviceType" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Select Polegrid Service(s)</option>
                    <option value="Telecom Service">Telecom Service</option>
                    <option value="Money Machine">Money Machine</option>
                  </select>

                  {/* Uploads */}
                  <div>
                    <label className="flex items-center gap-2"><FaFileAlt /> Upload Proof of Ownership</label>
                    <input type="file" name="ownershipDoc" required onChange={handleInputChange} className="w-full" />
                    {ownershipPreview && <img src={ownershipPreview} alt="Ownership Preview" className="mt-2 w-32 h-32 object-cover border rounded" />}
                  </div>

                  <div>
                    <label className="flex items-center gap-2"><FaIdCard /> Upload Means of Identification</label>
                    <input type="file" name="idPhoto" required onChange={handleInputChange} className="w-full" />
                    {idPreview && <img src={idPreview} alt="ID Preview" className="mt-2 w-32 h-32 object-cover border rounded" />}
                  </div>
                </>
              )}

              {/* ORGANIZATION FORM */}
              {selectedOption === "organization" && (
                <>
                  <input name="organizationName" placeholder="Full Legal Name of Organization" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="email" name="emailAddress" placeholder="Organization Email Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="tel" name="phoneNumber" placeholder="Organization Phone Number" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="address" placeholder="Full Address" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <select name="organizationType" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Organization Type</option>
                    <option value="Telecom Company">Telecom Company</option>
                    <option value="Towerco">Towerco</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Financial Institution">Financial Institution</option>
                    <option value="Agents">Agents</option>
                    <option value="Energy Company">Energy Company</option>
                    <option value="Infrastructure Company">Infrastructure Company</option>
                    <option value="Government Agency">Government Agency</option>
                    <option value="Others">Others</option>
                  </select>
        
                  <input name="contactPersonName" placeholder="Contact Person Name" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input name="designation" placeholder="Contact Person Designation/Title" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="email" name="contactPersonEmail" placeholder="Contact Person Email" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <input type="tel" name="contactPersonPhone" placeholder="Contact Person Phone" required onChange={handleInputChange} className="border rounded-lg p-2 w-full" />
                  <select name="registrationProcess" required onChange={handleInputChange} className="border rounded-lg p-2 w-full">
                    <option value="">Primary Purpose of Registration</option>
                    <option value="Acquiring Land/Sites from Polegrid">Acquiring Land/Sites from Polegrid</option>
                    <option value="Strategic Partnership/Collaboration">Strategic Partnership/Collaboration</option>
                    <option value="Offering Services/Products to Polegrid">Offering Services/Products to Polegrid</option>
                    <option value="Investment Interest">Investment Interest</option>
                    <option value="Other">Other</option>
                  </select>
                </>
              )}

              {/* SUBMIT BUTTON */}
              <div className="md:col-span-2">
                {selectedOption === "landlord" ? (
                  <button type="button" onClick={handleLandlordPayment} className="w-full py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500">
                    Submit & Pay ₦15,500
                  </button>
                ) : (
                  <button type="button" onClick={handleOrganizationSubmit} className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500">
                    Submit Now
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {confetti && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={250} recycle={false} />}
    </section>
  );
}
