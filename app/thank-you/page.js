"use client";

import { Suspense } from "react";
import ThankYouContent from "./thankyou-content";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
