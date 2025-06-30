// components/products/FeaturedProducts.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants/products";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const FeaturedProducts = () => {
  // Randomly select 3 products
  const featuredProducts = products
    .sort(() => Math.random() - 0.5) // Shuffle array
    .slice(0, 3); // Take first 3

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
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="relative w-full py-12 md:py-16 bg-[#E6F0FA] overflow-hidden"
      aria-label="Featured Products section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A2B6B] text-center mb-8 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Featured Products
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col items-center bg-[#FFFFFF] rounded-xl p-4 sm:p-5 md:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
            >
              {/* Product Image */}
              <div className="w-full h-40 sm:h-48 md:h-56 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image || placeholderImage}
                  alt={product.alt || `${product.name} image`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  priority={index === 0}
                  onError={() =>
                    console.warn(`Failed to load image for ${product.name}`)
                  }
                />
              </div>

              {/* Product Title */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#1A2B6B] mb-2 text-center line-clamp-2">
                {product.name}
              </h3>

              {/* Product Description */}
              <p className="text-xs sm:text-sm md:text-base text-[#1A2B6B] mb-4 sm:mb-6 text-center max-w-xs">
                {product.description || "No description available."}
              </p>

              {/* View Details Button */}
              <Link href={`/products/${product.id}`} className="mt-auto">
                <motion.button
                  className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 10px rgba(26, 43, 107, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View details for ${product.name}`}
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
