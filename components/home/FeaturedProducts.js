"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Product data
const products = [
  {
    title: "Gantry Hoist Dual Motor",
    description: "Advanced hoist system for safe and smooth patient mobility.",
    image: "/images/gantry-hoist.jpg", // Replace with actual image path
    alt: "Gantry Hoist Dual Motor for patient mobility",
    href: "/products/gantry-hoist",
  },
  {
    title: "Paediatric Sensory Room",
    description: "Interactive sensory environment for child development.",
    image: "/images/sensory-room.jpg", // Replace with actual image path
    alt: "Paediatric Sensory Room for child development",
    href: "/products/sensory-room",
  },
  {
    title: "Stair Lifts",
    description: "Reliable stair lifts for enhanced home accessibility.",
    image: "/images/stair-lifts.jpg", // Replace with actual image path
    alt: "Stair Lifts for home accessibility",
    href: "/products/stair-lifts",
  },
];

const FeaturedProducts = () => {
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
      className="relative w-full py-16 md:py-24 bg-[#E6F0FA] overflow-hidden"
      aria-label="Featured Products section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Featured Products
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-[#FFFFFF] rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(26,43,107,0.2)] transition-all duration-300"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Product Image */}
              <div className="w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  priority={index === 0}
                  onError={() =>
                    console.warn(`Failed to load image for ${product.title}`)
                  }
                />
              </div>

              {/* Product Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A2B6B] mb-3 text-center">
                {product.title}
              </h3>

              {/* Product Description */}
              <p className="text-base md:text-lg text-[#1A2B6B] mb-6 text-center max-w-xs">
                {product.description}
              </p>

              {/* View Details Button */}
              <Link href={product.href}>
                <motion.button
                  className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px rgba(26, 43, 107, 0.2)",
                  }}
                  aria-label={`View details for ${product.title}`}
                >
                  View Details
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
