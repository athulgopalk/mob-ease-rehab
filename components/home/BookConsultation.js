"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Form input styles
const inputStyles =
  "w-full px-4 py-3 rounded-lg border-2 border-[#FFE6F0] focus:outline-none focus:border-[#1A2B6B] transition-all duration-300 text-[#1A2B6B] bg-[#FFFFFF]";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    issue: "",
    preferredDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, issue, preferredDate } = formData;
    const message = `New Consultation Request:%0AName: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0AIssue: ${issue}%0APreferred Date: ${preferredDate}`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${message}`; // Replace with actual WhatsApp number
    window.open(whatsappUrl, "_blank");
  };

  // Parallax background animation
  const parallaxVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Form animation
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 10px rgba(255, 230, 240, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Book a Consultation at MOB-EASE Rehab Kottayam"
    >
      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MOB-EASE Rehab",
            description:
              "Physiotherapy clinic in Kottayam offering personalized care for women’s health, pediatric rehabilitation, and mobility solutions.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kottayam",
              addressRegion: "Kerala",
              addressCountry: "India",
            },
            telephone: "+919876543210", // Replace with actual phone number
          }),
        }}
      />

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[#FFFFFF]"
        variants={parallaxVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-6">
            Visit Our Kottayam Clinic for Personalized Care
          </h2>
          <p className="text-base sm:text-lg text-[#1A2B6B] mb-8 max-w-2xl mx-auto">
            Book a consultation at MOB-EASE Rehab, the leading physiotherapy
            clinic in Kottayam, for expert women’s health, pediatric
            rehabilitation, and mobility solutions.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={inputStyles}
                required
                aria-label="Full Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputStyles}
                required
                aria-label="Email Address"
              />
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className={inputStyles}
                required
                pattern="[0-9]{10}"
                aria-label="Mobile Number"
              />
            </div>
            <div>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="Describe Your Issue (e.g., back pain, mobility needs)"
                className={`${inputStyles} resize-none h-24`}
                required
                aria-label="Describe Your Issue"
              />
            </div>
            <div>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className={inputStyles}
                required
                aria-label="Preferred Appointment Date"
              />
            </div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <button
                type="submit"
                className="w-full bg-[#FFE6F0] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#E6F0FA] transition-all duration-300"
                aria-label="Submit consultation request via WhatsApp"
              >
                Schedule Consultation
              </button>
            </motion.div>
          </form>

          {/* Fallback Link */}
          <p className="text-sm text-[#1A2B6B] mt-4">
            Prefer to contact directly?{" "}
            <Link
              href="/contact"
              className="underline hover:text-[#FFE6F0] transition-colors"
              aria-label="Visit Contact Page"
            >
              Visit our Contact page
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookConsultation;
