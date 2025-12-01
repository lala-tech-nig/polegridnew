"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://polegrid.com";
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Thank You!</h1>
      <p className="text-gray-600 text-center max-w-lg">
        Our team will reach out to you once we successfully confirm your payment.
      </p>
      <p className="mt-4 text-sm text-gray-500">Redirecting…</p>
    </div>
  );
}
