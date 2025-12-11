"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [showRefund, setShowRefund] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      {/* FOOTER */}
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
              <motion.a whileHover={{ scale: 1.2 }} href="https://facebook.com/people/Polegrid-Solutions/61577642467184" className="text-gray-300 hover:text-green-500">
                <FaFacebookF size={20} />
              </motion.a>
              {/* <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500">
                <FaTwitter size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-300 hover:text-green-500">
                <FaLinkedinIn size={20} />
              </motion.a> */}
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/_polegrid/?__pwa=1#" className="text-gray-300 hover:text-green-500">
                <FaInstagram size={20} />
              </motion.a>
            </div>
          </div>

          {/* Logo Section */}
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

        {/* Policies */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-2 md:space-y-0">
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setShowTerms(true)} className="hover:text-green-500 transition">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => setShowPrivacy(true)} className="hover:text-green-500 transition">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setShowRefund(true)} className="hover:text-green-500 transition">Refund Policy</button>
          </div>

          <p>© 2025 PoleGrid. All Rights Reserved.</p>
          {/* <p>Designed by <span className="text-green-500">Durafford</span></p> */}
        </div>
      </motion.footer>

      {/* COMMON MODAL WRAPPER */}
      {showRefund && <PolicyModal title="Refund Policy" onClose={() => setShowRefund(false)}>
        <RefundPolicyContent />
      </PolicyModal>}

      {showTerms && <PolicyModal title="Terms & Conditions" onClose={() => setShowTerms(false)}>
        <TermsContent />
      </PolicyModal>}

      {showPrivacy && <PolicyModal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
        <PrivacyContent />
      </PolicyModal>}

      {/* SIMPLE ANIMATION */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

// ---------- MODAL COMPONENT ----------
function PolicyModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full overflow-y-auto max-h-[90vh] animate-fadeIn">

        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center bg-green-600">
          <h2 className="text-white text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-white text-3xl leading-none">&times;</button>
        </div>

        {/* Content */}
        <div className="p-5 text-black space-y-4 text-sm leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        <div className="p-4 border-t text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- REFUND POLICY CONTENT ----------
function RefundPolicyContent() {
  return (
    <>
      <p className="font-semibold text-lg text-green-700">PoleGrid Solutions Refund Policy</p>
      <p><strong>The Registration Fee:</strong> ₦15,500 covers administrative and verification costs.</p>
      <p><strong>Service Commencement:</strong> Begins when your ARN is generated and sent.</p>
      <p><strong>Refund Rules:</strong></p>
      <p><strong>Before ARN:</strong> Retain ₦1,000. Refund ₦14,500.</p>
      <p><strong>After ARN:</strong> Retain ₦10,500. Refund ₦5,000.</p>
      <p><strong>Full Refund Conditions:</strong></p>
      <ul className="list-disc ml-6">
        <li>Failure to generate ARN within 48 hours.</li>
        <li>Death or hospitalization of the Landlord Partner.</li>
      </ul>
      <p><strong>Request a Refund:</strong> Email <strong>polegrid01@gmail.com</strong> with ARN and reason.</p>
      <p><strong>Timeline:</strong> Refunds processed within 7 working days.</p>
      <p><em>By making a payment, you agree to these terms.</em></p>
    </>
  );
}

// ---------- TERMS & CONDITIONS CONTENT ----------
function TermsContent() {
  return (
    <>
      <p className="font-semibold text-lg text-green-700">PoleGrid Solutions Terms of Service</p>
      <p>Welcome to PoleGrid Solutions, registered in Nigeria and SCUML-verified. By using our platform, you agree to these Terms.</p>

      <p className="font-semibold">1. Introduction and Acceptance</p>
      <p>These Terms govern PoleGrid services. By registering, you agree to be bound by them.</p>

      <p className="font-semibold">2. Definitions</p>
      <ul className="list-disc ml-6">
        <li><strong>Partner/Landlord Partner:</strong> Individual or entity registering a property.</li>
        <li><strong>Property/Site:</strong> Land or site registered for infrastructure.</li>
        <li><strong>Infrastructure/Service:</strong> Telecom towers, ATM installations, or related facilities.</li>
        <li><strong>Service Provider:</strong> Third-party companies facilitated by PoleGrid.</li>
        <li><strong>Site Suitability:</strong> Property must meet all requirements, including legal title and 24/7 access.</li>
      </ul>

      <p className="font-semibold">3. Registration, Payment, and Service Commencement</p>
      <ul className="list-disc ml-6">
        <li><strong>Accuracy and Fee:</strong> Accurate registration required. Fee: ₦15,500.</li>
        <li><strong>Non-Refundable:</strong> Covers administrative and verification costs.</li>
        <li><strong>Payment Grace:</strong> Payment must be confirmed within 24 hours.</li>
        <li><strong>Service Commencement:</strong> Begins only when payment confirmed.</li>
      </ul>

      <p className="font-semibold">4. Service Provision and Third-Party Reliance</p>
      <ul className="list-disc ml-6">
        <li>PoleGrid acts as facilitator between Partner and Service Providers.</li>
        <li>Timelines are estimates; final execution depends on providers and regulations.</li>
        <li>Service modifications possible due to operational or regulatory changes.</li>
      </ul>

      <p className="font-semibold">5. Landlord Partner Obligations</p>
      <ul className="list-disc ml-6">
        <li><strong>Legal Compliance:</strong> Follow all Nigerian laws.</li>
        <li><strong>Site Suitability:</strong> Maintain property standards.</li>
        <li><strong>Mandatory Access:</strong> Grant 24/7 access for service purposes.</li>
        <li><strong>Notification:</strong> Report changes affecting property suitability.</li>
      </ul>

      <p className="font-semibold">6. Liability & Indemnification</p>
      <ul className="list-disc ml-6">
        <li>PoleGrid not liable for indirect or incidental damages, except gross negligence.</li>
        <li>Partner indemnifies PoleGrid for breaches of Terms.</li>
        <li>PoleGrid not responsible for technical or third-party issues.</li>
      </ul>

      <p className="font-semibold">7. Confidentiality</p>
      <p>All shared data and financial terms are confidential.</p>

      <p className="font-semibold">8. Termination</p>
      <p>PoleGrid may terminate for non-compliance, misrepresentation, or breach.</p>

      <p className="font-semibold">9. Governing Law</p>
      <p>These Terms are governed by Nigerian law. Disputes resolved via negotiation, then arbitration in Lagos.</p>

      <p>Need clarification? Contact our support team.</p>
    </>
  );
}

// ---------- PRIVACY POLICY CONTENT ----------
function PrivacyContent() {
  return (
    <>
      <p className="font-semibold text-lg text-green-700">PoleGrid Solutions Privacy Policy</p>
      <p>We value your privacy and are committed to protecting your personal data.</p>

      <p className="font-semibold">1. Introduction</p>
      <p>This Policy applies to all personal data collected through our services.</p>

      <p className="font-semibold">2. Information We Collect</p>
      <ul className="list-disc ml-6">
        <li><strong>Identity Data:</strong> Name, address, phone, email, NIN/ID.</li>
        <li><strong>Property Info:</strong> Location, ownership documents, site reports.</li>
        <li><strong>Financial Data:</strong> Bank account for commission payments.</li>
        <li><strong>Technical Data:</strong> IP, browser, device, analytics.</li>
      </ul>

      <p className="font-semibold">3. How We Collect Data</p>
      <ul className="list-disc ml-6">
        <li>Official forms</li>
        <li>Physical verification</li>
        <li>Cookies and analytics tools</li>
      </ul>

      <p className="font-semibold">4. Purpose of Collection</p>
      <p>Data is used for contract performance, verification, payments, site assessment, and service improvement.</p>

      <p className="font-semibold">5. Data Sharing</p>
      <ul className="list-disc ml-6">
        <li>Shared only with service providers for site assessment and deployment.</li>
        <li>Not shared for marketing without explicit consent.</li>
      </ul>

      <p className="font-semibold">6. Data Retention</p>
      <ul className="list-disc ml-6">
        <li>Active partners: entire partnership duration.</li>
        <li>Terminated partners: 6 years after last transaction.</li>
        <li>Website usage: 3 years max.</li>
      </ul>

      <p className="font-semibold">7. User Rights</p>
      <ul className="list-disc ml-6">
        <li>Access, rectification, erasure, and marketing opt-out.</li>
      </ul>

      <p className="font-semibold">8. Security Measures</p>
      <ul className="list-disc ml-6">
        <li>Encryption (SSL/TLS), access controls, regular audits.</li>
      </ul>

      <p className="font-semibold">9. Regulatory Compliance</p>
      <p>We comply with NDPR/GDPR requirements for lawful processing and rights protection.</p>

      <p className="font-semibold">10. Contact</p>
      <p>Email: polegrid01@gmail.com | Contact form available on website.</p>

      <p>By using our services, you agree to this Privacy Policy.</p>
    </>
  );
}
