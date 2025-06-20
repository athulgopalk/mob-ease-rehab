"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";

// Pulse animation CSS
const pulseStyles = `
  .pulse-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 230, 240, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: pulseEffect 2s infinite ease-out;
    z-index: -1;
  }
  @keyframes pulseEffect {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
  }
`;

const MobilityGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.05, boxShadow: "0 0 12px rgba(255, 230, 240, 0.5)" },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Mobility Aid Guide | MOB-EASE Rehab Kerala</title>
        <meta
          name="description"
          content="Download our free guide on choosing the right mobility aid from MOB-EASE Rehab in Kerala to enhance independence and comfort."
        />
        <meta
          name="keywords"
          content="mobility aid guide Kerala, physiotherapy products Kottayam, MOB-EASE Rehab guide"
        />
      </Head>

      <section
        className="relative w-full py-16 md:py-24 bg-[#E6F0FA] overflow-hidden"
        aria-label="Mobility Guide Section"
      >
        {/* Pulse Animation */}
        <style>{pulseStyles}</style>

        <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B6B] mb-6"
              variants={childVariants}
            >
              How to Choose the Right Mobility Aid
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-2xl mx-auto"
              variants={childVariants}
            >
              Our comprehensive guide helps you select the perfect mobility aid,
              tailored to your needs. Learn about wheelchairs, hoists, and more
              to enhance independence and comfort.
            </motion.p>
            <motion.div variants={childVariants}>
              <Link href="/assets/mobility-aid-guide.pdf" download>
                <motion.button
                  className="relative bg-[#FFE6F0] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#1A2B6B] hover:text-[#FFFFFF] transition-all duration-300 pulse-button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="Download Mobility Aid Guide"
                >
                  Download Free Guide
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MobilityGuide;
