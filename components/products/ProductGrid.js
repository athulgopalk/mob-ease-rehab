"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductFilters from "./ProductFilters";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Product data
const products = [
  {
    id: "gantry-hoist-single-motor",
    name: "Gantry Hoist (Single Motor)",
    category: "gantry-hoists",
    price: 15000,
    useCase: ["home", "clinic"],
    image: "/images/gantry-hoist-single-motor.jpg", // Replace with actual image path
    alt: "Gantry Hoist Single Motor for patient transfers by MOB-EASE Rehab",
  },
  {
    id: "gantry-hoist-dual-motor",
    name: "Gantry Hoist (Dual Motor)",
    category: "gantry-hoists",
    price: 18000,
    useCase: ["home", "clinic"],
    image: "/images/gantry-hoist-dual-motor.jpg", // Replace with actual image path
    alt: "Gantry Hoist Dual Motor for independent transfers by MOB-EASE Rehab",
  },
  {
    id: "full-body-hoist-portable",
    name: "Full Body Hoist (Portable)",
    category: "hoists",
    price: 16000,
    useCase: ["home", "clinic"],
    image: "/images/full-body-hoist-portable.jpg", // Replace with actual image path
    alt: "Portable Full Body Hoist for complete mobility loss by MOB-EASE Rehab",
  },
  {
    id: "power-assisted-standing-hoist",
    name: "Power-Assisted Standing Hoist (Portable)",
    category: "hoists",
    price: 20000,
    useCase: ["home", "clinic"],
    image: "/images/power-assisted-standing-hoist.jpg", // Replace with actual image path
    alt: "Power-Assisted Standing Hoist for gait training by MOB-EASE Rehab",
  },
  {
    id: "sarah-steady-walking-board",
    name: "Sarah Steady with Walking Board",
    category: "paediatric-solutions",
    price: 9000,
    useCase: ["home", "clinic"],
    image: "/images/sarah-steady-walking-board.jpg", // Replace with actual image path
    alt: "Sarah Steady with Walking Board for standing aid by MOB-EASE Rehab",
  },
  {
    id: "gait-training-hoist",
    name: "Gait Training Hoist",
    category: "hoists",
    price: 17000,
    useCase: ["clinic", "rehabilitation"],
    image: "/images/gait-training-hoist.jpg", // Replace with actual image path
    alt: "Gait Training Hoist for neurological recovery by MOB-EASE Rehab",
  },
  {
    id: "stair-lift-straight",
    name: "Stair Lift (Straight)",
    category: "stair-lifts",
    price: 25000,
    useCase: ["home"],
    image: "/images/stair-lift-straight.jpg", // Replace with actual image path
    alt: "Straight Stair Lift for elderly mobility by MOB-EASE Rehab",
  },
  {
    id: "stair-lift-curved",
    name: "Stair Lift (Curved)",
    category: "stair-lifts",
    price: 30000,
    useCase: ["home"],
    image: "/images/stair-lift-curved.jpg", // Replace with actual image path
    alt: "Curved Stair Lift for multi-level homes by MOB-EASE Rehab",
  },
  {
    id: "car-swivel-seat-assisted",
    name: "Car Swivel Seat (With Assistance)",
    category: "wheelchairs",
    price: 12000,
    useCase: ["travel"],
    image: "/images/car-swivel-seat-assisted.jpg", // Replace with actual image path
    alt: "Assisted Car Swivel Seat for transfers by MOB-EASE Rehab",
  },
  {
    id: "car-swivel-seat-self-transfer",
    name: "Car Swivel Seat (Self-Transfer)",
    category: "wheelchairs",
    price: 14000,
    useCase: ["travel"],
    image: "/images/car-swivel-seat-self-transfer.jpg", // Replace with actual image path
    alt: "Self-Transfer Car Swivel Seat for independent mobility by MOB-EASE Rehab",
  },
  {
    id: "paediatric-sensory-room",
    name: "Paediatric Sensory Room Installation",
    category: "paediatric-solutions",
    price: 35000,
    useCase: ["home", "clinic"],
    image: "/images/paediatric-sensory-room.jpg", // Replace with actual image path
    alt: "Paediatric Sensory Room for children with special needs by MOB-EASE Rehab",
  },
  {
    id: "paediatric-disability-solutions",
    name: "Paediatric Room – Complete Disability Solutions",
    category: "paediatric-solutions",
    price: 40000,
    useCase: ["home", "clinic"],
    image: "/images/paediatric-disability-solutions.jpg", // Replace with actual image path
    alt: "Paediatric Complete Disability Solutions for enhanced independence by MOB-EASE Rehab",
  },
];

const ProductGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    useCase: "all",
  });
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle filter changes
  useEffect(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        filters.category === "all" || product.category === filters.category;
      const useCaseMatch =
        filters.useCase === "all" || product.useCase.includes(filters.useCase);
      const priceMatch = (() => {
        if (filters.price === "all") return true;
        const [min, max] = filters.price
          .split("-")
          .map((v) => (v === "+" ? Infinity : Number(v)));
        return product.price >= min && (max ? product.price <= max : true);
      })();
      return categoryMatch && useCaseMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  }, [filters]);

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for product cards
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
    <section
      className="relative w-full py-16 md:py-24 bg-[#E6F0FA] overflow-hidden "
      aria-label="Product Grid Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Our Mobility Solutions
        </motion.h2>

        {/* Product Filters */}
        <ProductFilters onFilterChange={setFilters} />

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-[#1A2B6B] text-lg">
            No products match your filters.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex flex-col bg-[#FFFFFF] rounded-xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
              >
                {/* Product Image */}
                <div className="w-full h-48 sm:h-56 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL={placeholderImage}
                    onError={() =>
                      console.warn(`Failed to load image for ${product.name}`)
                    }
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1A2B6B] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm md:text-base text-[#1A2B6B] mb-4">
                  ₹{product.price.toLocaleString()}
                </p>

                {/* View Details Button */}
                <Link href={`/products/${product.id}`}>
                  <motion.button
                    className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
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
      </div>
    </section>
  );
};

export default ProductGrid;
