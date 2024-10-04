"use client";
// Ensure the entire file is client-rendered for animations
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

export default function HomePage() {
  // Artist Section scroll-triggered animation variants

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <Header />
      <section className="">
        <Carousel />
      </section>
      <Footer />
    </div>
  );
}
