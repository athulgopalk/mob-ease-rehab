"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success", // "success" or "error"
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name.trim()) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Please enter your full name.",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      return;
    }
    if (!formData.appointmentType) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Please select an appointment type.",
      });
      return;
    }
    if (!formData.message.trim()) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Please enter a message.",
      });
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `
      New Contact Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Appointment Type: ${formData.appointmentType}
      Message: ${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number
    const whatsappNumber = "+919496095810";

    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    try {
      // Open WhatsApp with pre-filled message
      window.open(whatsappURL, "_blank");

      // Show success modal
      setModal({
        isOpen: true,
        type: "success",
        message:
          "Opening WhatsApp with your message. Please press 'Send' to submit.",
      });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        appointmentType: "",
        message: "",
      });
    } catch (error) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Failed to open WhatsApp. Please try again.",
      });
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: "success", message: "" });
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

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Contact Form Section"
    >
      {/* SEO Meta Tags (Note: Move to next/head for Next.js) */}
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
              Send via WhatsApp
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#FFFFFF] rounded-lg p-6 max-w-md w-full mx-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <h3
              className={`text-lg font-semibold mb-4 ${
                modal.type === "success" ? "text-[#1A2B6B]" : "text-red-600"
              }`}
            >
              {modal.type === "success" ? "Success" : "Error"}
            </h3>
            <p className="text-[#1A2B6B] mb-6">{modal.message}</p>
            <button
              onClick={closeModal}
              className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
              aria-label="Close Modal"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactForm;
