"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Form submission note: For HIPAA compliance, ensure the form submission endpoint is secure (e.g., HTTPS, encrypted storage),
// and implement server-side validation and data protection measures compliant with HIPAA regulations.
// SSL certificate must be configured on the server hosting the website.

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement secure form submission to a HIPAA-compliant backend
    console.log("Form submitted:", formData);
    // Example: Send data to a secure API endpoint
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    alert("Form submitted! (Placeholder action)");
  };

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for form container
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Animation variants for form inputs
  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 12px rgba(26, 43, 107, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Contact Form Section"
    >
      {/* SEO Meta Tags */}
      <head>
        <title>Contact MOB-EASE Rehab | Physiotherapy in Kottayam</title>
        <meta
          name="description"
          content="Contact MOB-EASE Rehab in Kottayam to book a physiotherapy consultation or inquire about our mobility solutions, women’s health, or pediatric services."
        />
        <meta
          name="keywords"
          content="contact MOB-EASE Rehab, physiotherapy Kottayam, book physiotherapy appointment, mobility solutions Kottayam"
        />
      </head>

      <div className="max-w-3xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B6B] text-center mb-8 md:mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Let’s Start Your Wellness Journey
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Name */}
          <motion.div variants={inputVariants}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#1A2B6B] mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-[#E6F0FA] focus:outline-none focus:ring-2 focus:ring-[#1A2B6B] transition-all duration-300 text-[#1A2B6B]"
              required
              aria-label="Full Name"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={inputVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#1A2B6B] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-[#E6F0FA] focus:outline-none focus:ring-2 focus:ring-[#1A2B6B] transition-all duration-300 text-[#1A2B6B]"
              required
              aria-label="Email Address"
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={inputVariants}>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#1A2B6B] mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-[#E6F0FA] focus:outline-none focus:ring-2 focus:ring-[#1A2B6B] transition-all duration-300 text-[#1A2B6B]"
              required
              pattern="[0-9]{10}"
              aria-label="Phone Number"
            />
          </motion.div>

          {/* Appointment Type */}
          <motion.div variants={inputVariants}>
            <label
              htmlFor="appointmentType"
              className="block text-sm font-medium text-[#1A2B6B] mb-1"
            >
              Appointment Type
            </label>
            <select
              id="appointmentType"
              name="appointmentType"
              value={formData.appointmentType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#E6F0FA] focus:outline-none focus:ring-2 focus:ring-[#1A2B6B] transition-all duration-300 text-[#1A2B6B]"
              required
              aria-label="Appointment Type"
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="consultation">Consultation</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="franchise-opportunity">
                Franchise Opportunity
              </option>
              <option value="e-learning">E-Learning Courses</option>
              <option value="other">Other</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div variants={inputVariants}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#1A2B6B] mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-[#E6F0FA] focus:outline-none focus:ring-2 focus:ring-[#1A2B6B] transition-all duration-300 text-[#1A2B6B] resize-y h-32"
              required
              aria-label="Message"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={inputVariants}>
            <motion.button
              type="submit"
              className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Submit Contact Form"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
