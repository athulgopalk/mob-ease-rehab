// app/products/[id]/page.js
"use client";

import { useState, useRef } from "react";
import { use } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants/products";
import { notFound } from "next/navigation";
import RelatedProducts from "@/components/products/RelatedProducts";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const ProductPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [placeholderImage];
  const [activeImage, setActiveImage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("description");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonPulse = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const whatsappMessage = encodeURIComponent(
    `I'm interested in ${product.name}. Please provide more details.`
  );
  const whatsappLink = `https://wa.me/919496095810?text=${whatsappMessage}`;

  return (
    <section
      className="relative w-full min-h-screen bg-[#F8FAFC] py-16 md:py-24 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Sticky Buy Now Button (Header) */}
        <motion.div
          className="fixed top-4 right-4 z-50"
          variants={buttonPulse}
          whileHover="hover"
          whileTap="tap"
          animate="pulse"
        >
          {/* <Link href={whatsappLink} target="_blank">
            <button
              className="bg-[#1A2B6B] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300 shadow-lg"
              aria-label={`Buy ${product.name} via WhatsApp`}
            >
              Buy Now
            </button>
          </Link> */}
        </motion.div>

        {/* Product Header */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-8 text-center"
          variants={itemVariants}
        >
          {product.name}
        </motion.h1>

        {/* Image Gallery */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={images[activeImage]}
              alt={product.alt || `${product.name} image`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={placeholderImage}
              onError={() =>
                console.warn(`Failed to load image for ${product.name}`)
              }
            />
          </div>
          <div className="flex flex-row lg:flex-col gap-4 justify-center">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                  activeImage === index
                    ? "border-[#1A2B6B]"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg"
          variants={itemVariants}
        >
          <div className="flex border-b border-gray-200 mb-6">
            {["description", "specifications", "useCase"].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-center font-semibold text-sm md:text-base capitalize ${
                  activeTab === tab
                    ? "bg-[#E6F0FA] text-[#1A2B6B] border-b-2 border-[#1A2B6B]"
                    : "text-gray-600 hover:bg-[#E6F0FA]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#1A2B6B]"
          >
            {activeTab === "description" && (
              <p className="text-sm md:text-base">
                {product.description || "No description available."}
              </p>
            )}
            {activeTab === "specifications" && (
              <ul className="list-disc pl-5 text-sm md:text-base">
                {product.specifications &&
                Object.keys(product.specifications).length > 0 ? (
                  Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
                      {value}
                    </li>
                  ))
                ) : (
                  <li>No specifications available.</li>
                )}
              </ul>
            )}
            {activeTab === "useCase" && (
              <ul className="list-disc pl-5 text-sm md:text-base">
                {product.useCase && product.useCase.length > 0 ? (
                  product.useCase.map((use, index) => (
                    <li key={index}>Ideal for {use} settings</li>
                  ))
                ) : (
                  <li>No use cases specified.</li>
                )}
              </ul>
            )}
          </motion.div>
        </motion.div>

        {/* Price and Buy Now (Footer) */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-2xl font-bold text-[#1A2B6B] mb-4 sm:mb-0">
            ₹
            {product.price
              ? product.price.toLocaleString()
              : "Price not available"}
          </p>
          <Link href={whatsappLink} target="_blank">
            <motion.button
              className="bg-[#1A2B6B] text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300 shadow-lg"
              variants={buttonPulse}
              whileHover="hover"
              whileTap="tap"
              animate="pulse"
              aria-label={`Buy ${product.name} via WhatsApp`}
            >
              Buy Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Related Products Section */}
        <motion.div className="mt-12" variants={itemVariants}>
          <RelatedProducts currentProductId={product.id} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductPage;
