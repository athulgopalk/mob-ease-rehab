"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Head from "next/head";

// Impact stats data
const impactStats = [
  { id: 1, value: 100, label: "Pediatric Patients Supported", suffix: "+" },
  { id: 2, value: 500, label: "Mobility Aids Delivered", suffix: "+" },
  { id: 3, value: 50, label: "Communities Empowered", suffix: "+" },
  { id: 4, value: 2000, label: "Therapy Sessions Conducted", suffix: "+" },
];

// Futuristic holographic and neon effect CSS
const futuristicStyles = `
  .impact-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .impact-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #1A2B6B, #E6F0FA);
    z-index: 0;
  }
  .neon-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 230, 240, 0.3) 0%, transparent 70%);
    animation: neonPulse 5s infinite ease-in-out;
    will-change: opacity;
  }
  .impact-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #FFE6F0;
    border-radius: 50%;
    animation: orbit 10s infinite linear;
    will-change: transform;
  }
  .impact-particle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
  .impact-particle:nth-child(2) { top: 35%; right: 15%; animation-delay: 2s; }
  .impact-particle:nth-child(3) { top: 55%; left: 20%; animation-delay: 4s; }
  .impact-particle:nth-child(4) { top: 75%; right: 10%; animation-delay: 6s; }
  @keyframes neonPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  @keyframes orbit {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, -30px) scale(1.3); }
    100% { transform: translate(0, 0) scale(1); }
  }
  .impact-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 230, 240, 0.4);
    border-radius: 12px;
    perspective: 1000px;
    overflow: hidden;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .impact-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
    will-change: transform;
  }
  .impact-card:hover .impact-card-inner {
    transform: rotateY(180deg);
  }
  .impact-card-front, .impact-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }
  .impact-card-back {
    transform: rotateY(180deg);
    background: rgba(26, 43, 107, 0.9);
    color: #FFFFFF;
  }
  @media (max-width: 640px) {
    .impact-card {
      min-height: 120px;
    }
    .impact-card-front, .impact-card-back {
      padding: 0.75rem;
    }
  }
`;

const OurImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [counters, setCounters] = useState(impactStats.map(() => 0));

  // Counter animation logic
  useEffect(() => {
    if (isInView) {
      const timers = impactStats.map((stat, index) => {
        const increment = stat.value / 50;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 20);
        return timer;
      });
      return () => timers.forEach(clearInterval);
    }
  }, [isInView]);

  // Animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Impact | MOB-EASE Rehab Kottayam</title>
        <meta
          name="description"
          content="Discover MOB-EASE Rehab’s impact in Kottayam, empowering over 100 pediatric patients and delivering 500+ mobility aids."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab impact, physiotherapy Kottayam, mobility aids Kerala, patient success Kottayam"
        />
      </Head>

      <section
        className="impact-container py-16 md:py-24"
        aria-label="Our Impact Section"
      >
        {/* Futuristic Effects */}
        <style>{futuristicStyles}</style>
        <motion.div
          className="impact-bg"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="neon-glow" />
          <div className="impact-particle" />
          <div className="impact-particle" />
          <div className="impact-particle" />
          <div className="impact-particle" />
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
              Our Impact
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-[#1A2B6B] max-w-2xl mx-auto"
              variants={childVariants}
            >
              Transforming lives through innovative mobility solutions and
              compassionate care across Kerala.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="impact-card"
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <div className="impact-card-inner">
                  <div className="impact-card-front">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A2B6B] mb-2">
                      {counters[index]}
                      {stat.suffix}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1A2B6B]">
                      {stat.label}
                    </p>
                  </div>
                  <div className="impact-card-back">
                    <p className="text-sm text-[#FFFFFF]">
                      {stat.label} and counting, as we continue to empower lives
                      with MOB-EASE Rehab’s innovative solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurImpact;
