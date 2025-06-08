"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    name: "Priya Sharma",
    story:
      "The pre-natal physiotherapy at MOB-EASE transformed my pregnancy experience. The tailored exercises eased my back pain and boosted my confidence for delivery.",
    image: "/images/priya-sharma.jpg", // Replace with actual image path
    alt: "Priya Sharma, pre-natal physiotherapy patient",
  },
  {
    name: "Aarav Patel",
    story:
      "Using the gait trainer provided by MOB-EASE, my son Aarav has made incredible progress in his mobility. The pediatric team’s support has been life-changing.",
    image: "/images/aarav-patel.jpg", // Replace with actual image path
    alt: "Aarav Patel, pediatric patient using gait trainer",
  },
  {
    name: "Lakshmi Reddy",
    story:
      "After my knee surgery, MOB-EASE’s mobility solutions and therapy helped me regain independence. Their compassionate care made all the difference.",
    image: "/images/lakshmi-reddy.jpg", // Replace with actual image path
    alt: "Lakshmi Reddy, post-surgery physiotherapy patient",
  },
];

// Schema markup for testimonials
const testimonialSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: testimonials.map((t) => t.story).join(" | "),
  author: testimonials.map((t) => ({
    "@type": "Person",
    name: t.name,
  })),
  itemReviewed: {
    "@type": "Organization",
    name: "MOB-EASE Rehab",
  },
};

const PatientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Animation variants for carousel
  const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFE6F0] overflow-hidden"
      aria-label="Patient Stories section"
    >
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Patient Stories
        </motion.h2>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="flex flex-col items-center text-center bg-[#FFFFFF] rounded-xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] max-w-lg mx-auto"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Testimonial Image (Optional, can be added if needed) */}
              {/* <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].alt}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mb-4 object-cover"
                placeholder="blur"
                blurDataURL={placeholderImage}
              /> */}

              {/* Testimonial Text */}
              <p className="text-base md:text-lg text-[#1A2B6B] mb-6 italic">
                “{testimonials[currentIndex].story}”
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#1A2B6B]">
                {testimonials[currentIndex].name}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-[#1A2B6B] text-[#FFFFFF] hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-[#1A2B6B] text-[#FFFFFF] hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-[#1A2B6B]" : "bg-[#1A2B6B]/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientStories;
