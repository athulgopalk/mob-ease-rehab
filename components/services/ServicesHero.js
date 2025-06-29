"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const ServicesHero = () => {
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
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#E6F0FA] py-16 md:py-24 px-19"
      aria-label="Services Hero section"
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
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-6 leading-tight max-w-lg mx-auto md:mx-0">
              Comprehensive Care for Your Mobility and Wellness
            </h1>
            <p className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-md mx-auto md:mx-0">
              Discover MOB-EASE Rehab’s tailored services, from physiotherapy
              and mobility solutions to specialized care for women and children,
              designed to empower your independence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.a
                href="/services#overview"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Explore our services"
              >
                Explore Services
              </motion.a>
              <motion.a
                href="/contact"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-transparent border-2 border-[#1A2B6B] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Book a consultation"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2"
          >
            <Image
              src="/images/services-hero.jpg" // Replace with actual hero image
              alt="Physiotherapist assisting patient with mobility aid"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl object-cover shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
              placeholder="blur"
              blurDataURL={placeholderImage}
              priority
              onError={() => console.warn("Failed to load services hero image")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
