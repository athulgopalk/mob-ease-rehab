"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Product data (import from lib/products.js or fetch via API)
const products = [
  // Your products array from ProductGrid
  // Ideally, move this to a separate file or fetch from an API
  {
    id: "gantry-hoist-single-motor",
    name: "Gantry Hoist (Single Motor)",
    category: "gantry-hoists",
    price: 15000,
    useCase: ["home", "clinic"],
    image: "/images/gantry-hoist-single-motor.jpg",
    alt: "Gantry Hoist Single Motor for patient transfers by MOB-EASE Rehab",
    description:
      "A reliable single-motor gantry hoist designed for safe and easy patient transfers.",
    specifications: {
      weightCapacity: "150 kg",
      motor: "Single DC motor",
      dimensions: "120 x 60 x 200 cm",
      battery: "Rechargeable 24V",
    },
  },
  // ... other products
];

export default function ProductPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  // Handle product not found
  if (!product) {
    notFound();
  }

  // State for active tab
  const [activeTab, setActiveTab] = useState("description");

  // Animation variants for tab content
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // WhatsApp link
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${
      product.name
    } (Price: ₹${product.price.toLocaleString()}). Can you provide more details?`
  );
  const whatsappLink = `https://wa.me/+919496095810?text=${whatsappMessage}`;

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#E6F0FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B]">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl text-[#1A2B6B] mt-2">
            ₹{product.price.toLocaleString()}
          </p>
        </motion.div>

        {/* Product Image and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <Image
              src={product.image}
              alt={product.alt}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              placeholder="blur"
              blurDataURL={placeholderImage}
              onError={() =>
                console.warn(`Failed to load image for ${product.name}`)
              }
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            {/* Tabs */}
            <div className="flex border-b border-[#1A2B6B] mb-6">
              {["description", "specifications", "useCases"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm md:text-base font-semibold ${
                    activeTab === tab
                      ? "bg-[#E6F0FA] text-[#1A2B6B] border-b-2 border-[#1A2B6B]"
                      : "text-[#1A2B6B] hover:bg-[#E6F0FA]"
                  } transition-all duration-300`}
                >
                  {tab.charAt(0).toUpperCase() +
                    tab.slice(1).replace("useCases", "Use Cases")}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-[#E6F0FA] p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              >
                {activeTab === "description" && (
                  <p className="text-sm md:text-base text-[#1A2B6B]">
                    {product.description || "No description available."}
                  </p>
                )}
                {activeTab === "specifications" && (
                  <ul className="text-sm md:text-base text-[#1A2B6B] list-disc pl-5">
                    {product.specifications ? (
                      Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <li key={key}>
                            <span className="font-semibold">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>{" "}
                            {value}
                          </li>
                        )
                      )
                    ) : (
                      <li>No specifications available.</li>
                    )}
                  </ul>
                )}
                {activeTab === "useCases" && (
                  <ul className="text-sm md:text-base text-[#1A2B6B] list-disc pl-5">
                    {product.useCase.map((use, index) => (
                      <li key={index}>
                        {use.charAt(0).toUpperCase() + use.slice(1)}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Buy Now Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-base uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                aria-label={`Contact via WhatsApp for ${product.name}`}
              >
                Buy Now
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
