"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Ray effect CSS
const rayStyles = `
  .ray-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 230, 240, 0.3) 0%, transparent 70%);
    z-index: 0;
    overflow: hidden;
  }
  .ray {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 230, 240, 0.8), transparent);
    animation: rayMove 6s infinite linear;
  }
  .ray:nth-child(1) { top: 20%; animation-delay: 0s; }
  .ray:nth-child(2) { top: 40%; animation-delay: 1.5s; }
  .ray:nth-child(3) { top: 60%; animation-delay: 3s; }
  @keyframes rayMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const AboutHero = () => {
  // Animation variants for background
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Animation variants for CTAs
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 12px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#E6F0FA] py-16 md:py-24 px-19"
      aria-label="About Hero Section"
    >
      {/* SEO Meta Tags */}
      <Head>
        <title>About MOB-EASE Rehab | Physiotherapy in Kerala</title>
        <meta
          name="description"
          content="Learn about MOB-EASE Rehab, Kottayam’s leading physiotherapy clinic, dedicated to empowering lives through mobility solutions, women’s health, and pediatric care."
        />
        <meta
          name="keywords"
          content="about MOB-EASE Rehab, physiotherapy Kottayam, mobility solutions, women’s health physiotherapy"
        />
      </Head>

      {/* Ray Effect */}
      <style>{rayStyles}</style>
      <motion.div
        className="ray-bg"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="ray" />
        <div className="ray" />
        <div className="ray" />
      </motion.div>

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
              Rays of Hope Through Compassionate Care
            </h1>
            <p className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-md mx-auto md:mx-0">
              At MOB-EASE Rehab, we’re dedicated to transforming lives with
              innovative physiotherapy, mobility solutions, and personalized
              care, spreading hope and empowerment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.a
                href="/about#mission"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Learn about our mission"
              >
                Our Mission
              </motion.a>
              <motion.a
                href="/contact"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-transparent border-2 border-[#1A2B6B] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label="Get in touch"
              >
                Get in Touch
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
              src="/About-Hero.jpg"
              alt="Physiotherapist spreading hope with patient care"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl object-cover shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
              placeholder="blur"
              blurDataURL={placeholderImage}
              priority
              onError={() => console.warn("Failed to load about hero image")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
