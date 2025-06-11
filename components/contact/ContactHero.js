"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Particle animation CSS
const particleStyles = `
  .particle-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(230, 240, 250, 0.3) 0%, transparent 70%);
    z-index: 0;
    overflow: hidden;
  }
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 230, 240, 0.8);
    border-radius: 50%;
    animation: float 10s infinite ease-in-out;
  }
  .particle:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
  .particle:nth-child(2) { top: 30%; right: 15%; animation-delay: 2s; }
  .particle:nth-child(3) { top: 50%; left: 10%; animation-delay: 4s; }
  .particle:nth-child(4) { top: 70%; right: 25%; animation-delay: 6s; }
  .particle:nth-child(5) { top: 20%; left: 80%; animation-delay: 8s; }
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
  }
`;

const ContactHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for background
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  // Animation variants for text children
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Animation variants for CTAs
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 12px rgba(255, 230, 240, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#E6F0FA] py-16 md:py-24"
      aria-label="Contact Hero Section"
    >
      {/* SEO Meta Tags */}
      <head>
        <title>Contact MOB-EASE Rehab | Physiotherapy in Kottayam</title>
        <meta
          name="description"
          content="Get in touch with MOB-EASE Rehab, Kottayam’s premier physiotherapy clinic, for personalized mobility solutions, women’s health, and pediatric care."
        />
        <meta
          name="keywords"
          content="contact MOB-EASE Rehab, physiotherapy Kottayam, book physiotherapy appointment, mobility solutions Kottayam"
        />
      </head>

      {/* Particle Effect */}
      <style>{particleStyles}</style>
      <motion.div
        className="particle-bg"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-6 leading-tight max-w-lg mx-auto md:mx-0"
              variants={childVariants}
            >
              Connect with Us to Start Your Journey
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-md mx-auto md:mx-0"
              variants={childVariants}
            >
              Reach out to MOB-EASE Rehab in Kottayam to discover how our
              personalized physiotherapy and mobility solutions can inspire hope
              and transform your life.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              variants={childVariants}
            >
              <motion.a
                href="https://wa.me/+919876543210" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                variants={ctaVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Book appointment via WhatsApp"
              >
                Book Appointment
              </motion.a>
              <motion.a
                href="/contact#form"
                variants={ctaVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
                className="bg-transparent border-2 border-[#1A2B6B] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Send us a message"
              >
                Send Message
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:w-1/2"
          >
            <Image
              src="/images/contact-hero.jpg" // Replace with actual hero image
              alt="Physiotherapist inspiring patient at MOB-EASE Rehab Kottayam"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl object-cover shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
              placeholder="blur"
              blurDataURL={placeholderImage}
              priority
              onError={() => console.warn("Failed to load contact hero image")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
