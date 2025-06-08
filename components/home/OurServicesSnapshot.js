"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// Service data
const services = [
  {
    title: "Women’s Health",
    description: "Tailored physiotherapy for women’s unique wellness needs.",
    href: "/services/womens-health",
  },
  {
    title: "Pediatric Rehabilitation",
    description: "Specialized care to support children’s mobility and growth.",
    href: "/services/pediatric-rehabilitation",
  },
  {
    title: "Mobility Solutions",
    description: "Innovative aids to enhance independence and comfort.",
    href: "/services/mobility-solutions",
  },
];

const OurServicesSnapshot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 6px 20px rgba(26, 43, 107, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Our Services Snapshot section"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Our Core Services
        </motion.h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-[#FFFFFF] border-2 border-[#FFE6F0] rounded-xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(26,43,107,0.2)] transition-all duration-300"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A2B6B] mb-3">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-[#1A2B6B] mb-6 max-w-xs">
                {service.description}
              </p>
              <Link href={service.href}>
                <motion.button
                  className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px rgba(26, 43, 107, 0.2)",
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 px-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 bg-[#FFFFFF] border-2 border-[#FFE6F0] rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)] snap-center"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              <h3 className="text-lg font-semibold text-[#1A2B6B] mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-[#1A2B6B] mb-4 text-center">
                {service.description}
              </p>
              <Link href={service.href}>
                <motion.button
                  className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px rgba(26, 43, 107, 0.2)",
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrollbar Hide CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default OurServicesSnapshot;
