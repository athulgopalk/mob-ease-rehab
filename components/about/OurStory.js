"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // Simplified import
import Head from "next/head";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Updated futuristic CSS with refined effects
const futuristicStyles = `
  .holo-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(230, 240, 255, 0.2), rgba(255, 230, 240, 0.1));
    z-index: 0;
    overflow: hidden;
  }
  .holo-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(100, 150, 255, 0.3) 0%, transparent 60%);
    animation: holoPulse 8s infinite ease-in-out;
    pointer-events: none;
  }
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(100, 150, 255, 0.6);
    border-radius: 50%;
    animation: float 12s infinite ease-in-out;
  }
  .particle:nth-child(1) { top: 10%; left: 15%; animation-delay: 0s; }
  .particle:nth-child(2) { top: 25%; right: 10%; animation-delay: 3s; }
  .particle:nth-child(3) { top: 60%; left: 20%; animation-delay: 5s; }
  .particle:nth-child(4) { top: 80%; right: 15%; animation-delay: 7s; }
  @keyframes holoPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(15px, -15px) scale(1.3); }
  }
  .story-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(100, 150, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  @media (max-width: 640px) {
    .story-card {
      padding: 1.5rem;
    }
  }
`;

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.3, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <title>Our Story | MOB-EASE Rehab Kottayam</title>
        <meta
          name="description"
          content="Discover the story of MOB-EASE Rehab, founded by physiotherapists in Kottayam to empower women, children, and individuals with disabilities through innovative mobility solutions."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab story, physiotherapy Kottayam, mobility solutions Kerala, women’s health physiotherapy"
        />
      </Head>

      <section
        className="relative w-full py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#E6F0FA] to-[#F8FAFF] overflow-hidden"
        aria-label="Our Story Section"
      >
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

        <div className="container relative z-10" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              className="relative w-full h-[24rem] sm:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Image
                src="/images/patient-success.jpg"
                alt="Patient success story at MOB-EASE Rehab Kottayam"
                fill
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL={placeholderImage}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => console.warn("Failed to load Our Story image")}
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="story-card p-6 sm:p-8 lg:p-10"
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A2B6B] mb-4"
                variants={childVariants}
              >
                Our Story: Pioneering a Future of Mobility
              </motion.h2>
              <motion.div
                className="text-sm sm:text-base lg:text-lg text-[#1A2B6B] space-y-4"
                variants={childVariants}
              >
                <p>
                  In the vibrant heart of Kottayam, MOB-EASE Rehab was born from
                  a vision to empower women, children, and individuals with
                  disabilities through innovative mobility solutions.
                </p>
                <p>
                  From a small clinic fueled by passion and creativity, we
                  sketched designs for revolutionary aids—like wheelchairs that
                  glide effortlessly and hoists that inspire confidence. A
                  patient’s playful request for a “turbo-charged walker” sparked
                  our drive to innovate.
                </p>
                <p>
                  Today, MOB-EASE Rehab stands as a beacon of hope, blending
                  cutting-edge technology with compassionate care. Our stories
                  of triumph—a child’s first steps, a grandmother’s reclaimed
                  independence—propel us to redefine mobility across Kerala and
                  beyond.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
