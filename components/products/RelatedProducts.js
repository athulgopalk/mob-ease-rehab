// components/products/RelatedProducts.js
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants/products";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const RelatedProducts = ({ currentProductId }) => {
  // Randomly select 4 products, excluding the current product
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .sort(() => Math.random() - 0.5) // Shuffle array
    .slice(0, 4); // Take first 4

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(26, 43, 107, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="mt-8 md:mt-12 px-4 sm:px-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4 md:mb-6 text-center">
        Explore More Mobility Solutions
      </h2>
      {relatedProducts.length === 0 ? (
        <p className="text-center text-[#1A2B6B] text-base sm:text-lg">
          No related products available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {relatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col bg-[#FFFFFF] rounded-xl p-3 sm:p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
            >
              <div className="w-full mb-3 sm:mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image || placeholderImage}
                  alt={product.alt || `${product.name} image`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  onError={() =>
                    console.warn(`Failed to load image for ${product.name}`)
                  }
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#1A2B6B] mb-4 line-clamp-2">
                {product.name}
              </h3>
              {/* <p className="text-xs sm:text-sm md:text-base text-[#1A2B6B] mb-3 sm:mb-4">
                ₹
                {product.price
                  ? product.price.toLocaleString()
                  : "Price not available"}
              </p> */}
              <Link href={`/products/${product.id}`} className="mt-auto">
                <motion.button
                  className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-3 py-3 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View details for ${product.name}`}
                >
                  View Details
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;
