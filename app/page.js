"use client";
import { useEffect, useState } from "react";
import AboutSection from "@/components/AboutSection";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AnnouncementTicker />
          <Navbar />
          <HeroCarousel />
          <ServicesSection />
          <AboutSection />
          <Testimonials />
          <FAQ />
          <ContactForm />
          <Footer />
        </>
      )}
    </main>
  );
}
