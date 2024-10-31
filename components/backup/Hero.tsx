"use client";

import { motion } from "framer-motion";
import CustomCarousel from "@/components/Carousel"

const heroItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <div className="video-background w-full h-full z-[10]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black z-[5] opacity-40 sm:opacity-40"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hero-video"
        src="./vid/hero.webm"
        autoPlay
        preload="auto"
        loop
        muted
        playsInline
      />

      {/* Hero Section Animated Content */}
      <motion.div
        className="container max-w-[1080px] mx-auto px-4 flex flex-col items-center justify-center relative z-10 h-full"
        initial="hidden"
        animate="visible"
        variants={heroItemVariants}
      >
       

        {/* Call-to-action Button */}
        <CustomCarousel />

        
      </motion.div>
    </section>
  );
};

export default Hero;
