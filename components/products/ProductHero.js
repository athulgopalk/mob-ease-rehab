'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Particle wave animation CSS
const waveStyles = `
  .wave-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(230, 240, 250, 0.3), transparent);
    z-index: 0;
    overflow: hidden;
  }
  .wave-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(255, 230, 240, 0.7);
    border-radius: 50%;
    animation: waveMove 8s infinite ease-in-out;
  }
  .wave-particle:nth-child(1) { top: 10%; left: 15%; animation-delay: 0s; }
  .wave-particle:nth-child(2) { top: 25%; right: 20%; animation-delay: 1s; }
  .wave-particle:nth-child(3) { top: 40%; left: 30%; animation-delay: 2s; }
  .wave-particle:nth-child(4) { top: 60%; right: 10%; animation-delay: 3s; }
  .wave-particle:nth-child(5) { top: 80%; left: 25%; animation-delay: 4s; }
  @keyframes waveMove {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
    50% { transform: translateY(-30px) scale(1.4); opacity: 0.9; }
  }
`;

const ProductHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for background
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
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
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Mobility Solutions & Products | MOB-EASE Rehab Kottayam</title>
        <meta
          name="description"
          content="Explore MOB-EASE Rehab’s innovative mobility solutions, assistive devices, and lifeline services in Kottayam, designed to empower independence."
        />
        <meta
          name="keywords"
          content="mobility aids Kottayam, physiotherapy products, assistive devices Kottayam, MOB-EASE Rehab products"
        />
      </Head>

      <section
        className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#E6F0FA] py-16 md:py-24 px-19"
        aria-label="Product Hero Section"
      >
        {/* Particle Wave Effect */}
        <style>{waveStyles}</style>
        <motion.div
          className="wave-bg"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="wave-particle" />
          <div className="wave-particle" />
          <div className="wave-particle" />
          <div className="wave-particle" />
          <div className="wave-particle" />
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
                Empowering Independence with Innovative Solutions
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-md mx-auto md:mx-0"
                variants={childVariants}
              >
                Discover MOB-EASE Rehab’s cutting-edge mobility aids, assistive
                devices, and lifeline services, designed to transform lives and
                restore freedom in Kottayam and beyond.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                variants={childVariants}
              >
                <motion.a
                  href="/products#explore"
                  variants={ctaVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  aria-label="Explore our products"
                >
                  Explore Products
                </motion.a>
                <motion.a
                  href="/contact"
                  variants={ctaVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-transparent border-2 border-[#1A2B6B] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  aria-label="Request a consultation"
                >
                  Request Consultation
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
                src="/images/product-hero.jpg" // Replace with actual hero image (e.g., patient using a mobility aid)
                alt="Patient using mobility aid at MOB-EASE Rehab Kottayam"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl object-cover shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                placeholder="blur"
                blurDataURL={placeholderImage}
                priority
                onError={() =>
                  console.warn("Failed to load product hero image")
                }
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHero;
