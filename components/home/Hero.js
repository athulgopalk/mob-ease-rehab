// components/home/Hero.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  // Animation variants for sliding background
  const backgroundVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // Animation variants for CTAs
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Sliding Background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-[#FFE6F0] z-0"
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-4">
              Empower Your Mobility with MOB-EASE Rehab
            </h1>
            <p className="text-lg text-[#1A2B6B] mb-6">
              Transforming Lives Through Personalized Physiotherapy & Innovative
              Mobility Solutions
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="/services"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-md hover:bg-[#E6F0FA] hover:text-[#1A2B6B] transition-colors"
              >
                Discover Our Services
              </motion.a>
              <motion.a
                href="/products"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="border-2 border-[#1A2B6B] text-[#1A2B6B] px-6 py-3 rounded-md hover:bg-[#E6F0FA] transition-colors"
              >
                Shop Mobility Aids
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2"
          >
            <Image
              src="/images/hero-image.jpg" // Replace with actual hero image
              alt="Woman using mobility aid"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
