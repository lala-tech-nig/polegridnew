"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentPage() {
  const router = useRouter();

  const payNow = () => {
    // Replace with your Flutterwave integration
    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-4">Complete Your Registration Payment</h1>

      <p className="text-gray-600 mb-6 max-w-md text-center">
        Click pay to continue with Flutterwave secure payment.
      </p>

      <button
        onClick={payNow}
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        Pay Now
      </button>
    </div>
  );
}
