"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";

// Futuristic holographic and particle effect CSS
const futuristicStyles = `
  .holo-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(230, 240, 250, 0.3), transparent);
    z-index: 0;
    overflow: hidden;
  }
  .holo-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 230, 240, 0.4) 0%, transparent 70%);
    animation: holoPulse 6s infinite ease-in-out;
  }
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 230, 240, 0.7);
    border-radius: 50%;
    animation: orbit 12s infinite linear;
  }
  .particle:nth-child(1) { top: 10%; left: 15%; animation-delay: 0s; }
  .particle:nth-child(2) { top: 30%; right: 20%; animation-delay: 3s; }
  .particle:nth-child(3) { top: 50%; left: 25%; animation-delay: 6s; }
  .particle:nth-child(4) { top: 70%; right: 10%; animation-delay: 9s; }
  @keyframes holoPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  @keyframes orbit {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(25px, -25px) scale(1.3); }
    100% { transform: translate(0, 0) scale(1); }
  }
  .vision-mission-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 230, 240, 0.4);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
  }
`;

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: i * 0.3, ease: "easeOut" },
    }),
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(255, 230, 240, 0.5)" },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Vision & Mission | MOB-EASE Rehab Kottayam</title>
        <meta
          name="description"
          content="Learn about MOB-EASE Rehab’s mission to empower individuals through physiotherapy and mobility solutions, and our vision to lead inclusive rehabilitation in India."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab vision, mission, physiotherapy Kottayam, mobility solutions Kerala, inclusive rehabilitation"
        />
      </Head>

      <section
        className="relative w-full py-16 md:py-24 bg-[#E6F0FA] overflow-hidden"
        aria-label="Vision & Mission Section"
      >
        {/* Futuristic Effects */}
        <style>{futuristicStyles}</style>
        <motion.div
          className="holo-bg"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="holo-glow" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-4"
              variants={childVariants}
            >
              Vision & Mission
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-[#1A2B6B] max-w-2xl mx-auto"
              variants={childVariants}
            >
              At MOB-EASE Rehab, we’re driven by a bold vision and a heartfelt
              mission to transform lives through innovative mobility solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission Card */}
            <motion.div
              className="vision-mission-card p-6 sm:p-8 relative"
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="holo-glow" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#1A2B6B]">
                Our mission is to empower individuals of all ages and abilities
                to live independently and confidently through personalized
                physiotherapy, adaptive equipment, and inclusive rehabilitation
                programs.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="vision-mission-card p-6 sm:p-8 relative"
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="holo-glow" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#1A2B6B]">
                To become a leading force in inclusive rehabilitation across
                India, revolutionizing mobility care through technology,
                education, and compassionate therapy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
