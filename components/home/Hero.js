"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {VolumeOff } from "lucide-react"
 // Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const Hero = () => {
  // Animation variants for background
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // Animation variants for CTAs
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 10px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#E6F0FA] py-16 md:py-24"
      aria-label="Hero section"
    >
      {/* Background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-6 leading-tight max-w-lg mx-auto">
              Welcome to Mob Ease – where mobility meets independence.
            </h1>
            <p className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-md mx-auto">
              We specialize in personalized rehabilitation, adaptive equipment,
              and inclusive therapy solutions. From children to seniors, our
              expert team empowers every step toward a better quality of life.
              We blend innovation with compassion to create accessible,
              life-changing care.
              <br /> Join us in building a world where every move matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/services"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Discover our services"
              >
                Discover Our Services
              </motion.a>
              <motion.a
                href="/products"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-transparent border-2 border-[#1A2B6B] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Shop mobility aids"
              >
                Shop Mobility Aids
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 relative"
          >
            <video
              src="/hero-video.mp4" // Replace with your video path
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl object-cover shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              onError={() => console.warn("Failed to load hero video")}
            />
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => {
                  const video = document.querySelector("video");
                  video.muted = !video.muted;
                }}
                className="p-2 bg-[#1A2B6B]/80 hover:bg-[#1A2B6B] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#1A2B6B] transition-colors duration-200"
                aria-label="Toggle video sound"
              >
                <VolumeOff />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
