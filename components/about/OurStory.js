"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Head from "next/head";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Parallax and glow effect CSS
const cinematicStyles = `
  .parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(230, 240, 250, 0.2), rgba(230, 240, 250, 0.8));
    z-index: 0;
  }
  .glow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 230, 240, 0.3) 0%, transparent 70%);
    opacity: 0.5;
    animation: glowPulse 8s infinite ease-in-out;
  }
  @keyframes glowPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
  }
`;

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for background
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#E6F0FA] overflow-hidden"
      aria-label="Our Story Section"
    >
      {/* SEO Meta Tags */}
      <Head>
        <meta
          name="description"
          content="Discover the story behind MOB-EASE Rehab, Kottayam’s premier physiotherapy clinic, founded to empower women, children, and individuals with disabilities through innovative care."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab story, physiotherapy Kottayam, women’s health physiotherapy, pediatric rehabilitation"
        />
      </Head>

      {/* Cinematic Effects */}
      <style>{cinematicStyles}</style>
      <motion.div
        className="parallax-bg"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="glow-overlay" />
      </motion.div>

      <div className="relative z-10" ref={ref}>
        {/* Full-Width Image */}
        <motion.div
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src="/images/kottayam-clinic.jpg"
            alt="MOB-EASE Rehab Kottayam clinic inspiring hope"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            placeholder="blur"
            blurDataURL={placeholderImage}
            priority
            onError={() => console.warn("Failed to load Our Story image")}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-28 md:-mt-32 lg:-mt-40 bg-[#FFFFFF] rounded-xl p-6 sm:p-8 md:p-12 shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B6B] text-center mb-6">
            Our Story: A Journey of Hope
          </h2>
          <div className="text-sm sm:text-base md:text-lg text-[#1A2B6B] space-y-4">
            <p>
              In the heart of Kottayam, MOB-EASE Rehab was born from a simple
              yet profound vision: to light up lives with hope through
              innovative physiotherapy. Founded by a group of passionate
              physiotherapists, led by Dr. Thaha Muhammadali PT, our mission was
              to empower women, children, and individuals with disabilities,
              turning challenges into triumphs.
            </p>
            <p>
              It all started in a small clinic room, where our founders swapped
              coffee for endless brainstorming sessions, dreaming of mobility
              solutions that could transform lives. One day, a patient—let’s
              call her Amma—rolled in with a mischievous grin, challenging us to
              make her wheelchair “faster than her grandson’s bicycle.” That
              lighthearted moment sparked our obsession with personalized care,
              blending science with smiles.
            </p>
            <p>
              From those humble beginnings, we’ve grown into Kottayam’s trusted
              physiotherapy hub, crafting tailored mobility aids, supporting
              women’s wellness, and helping kids take their first confident
              steps. Our team once celebrated a toddler’s first walk with a
              “victory dance” so enthusiastic, we nearly forgot the therapy
              session! Yet, every step forward—whether it’s a child’s giggle or
              a senior’s newfound independence—reminds us why we’re here.
            </p>
            <p>
              Today, MOB-EASE Rehab stands as a beacon of hope, weaving stories
              of resilience across Kerala. We’re not just a clinic; we’re a
              family, dedicated to turning “I can’t” into “Watch me soar.” Join
              us on this cinematic journey, where every patient’s success is our
              blockbuster ending.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
