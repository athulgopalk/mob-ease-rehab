"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

// Social media links
const socials = [
  {
    platform: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6 text-[#FFFFFF]" />,
    link: "https://wa.me/+919876543210", // Replace with actual WhatsApp number
    bgColor: "bg-[#25D366]",
    label: "Chat with Us on WhatsApp",
    pulse: true,
  },
  {
    platform: "Instagram",
    icon: <Instagram className="w-6 h-6 text-[#FFFFFF]" />,
    link: "https://www.instagram.com/mobeaserehab", // Replace with actual Instagram URL
    bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    label: "Follow Us on Instagram",
    pulse: false,
  },
  {
    platform: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 text-[#FFFFFF]" />,
    link: "https://www.linkedin.com/company/mobeaserehab", // Replace with actual LinkedIn URL
    bgColor: "bg-[#0A66C2]",
    label: "Connect with Us on LinkedIn",
    pulse: false,
  },
];

// Pulse animation CSS for WhatsApp button
const pulseStyles = `
  .pulse {
    position: relative;
    overflow: visible;
  }
  .pulse::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(37, 211, 102, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: pulseEffect 2s infinite ease-out;
    z-index: -1;
  }
  @keyframes pulseEffect {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
  }
`;

const WhatsAppSocials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 8px 24px rgba(26, 43, 107, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#E6F0FA] to-[#FFFFFF] overflow-hidden"
      aria-label="WhatsApp and Socials Section"
    >
      {/* SEO Meta Tags */}
      <head>
        <title>Contact MOB-EASE Rehab | Physiotherapy in Kottayam</title>
        <meta
          name="description"
          content="Connect with MOB-EASE Rehab in Kottayam via WhatsApp, Instagram, or LinkedIn for physiotherapy services, mobility solutions, and more."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab contact, physiotherapy Kottayam, WhatsApp physiotherapy Kottayam, social media MOB-EASE"
        />
      </head>

      {/* Pulse Animation */}
      <style>{pulseStyles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Stay Connected with Us
        </motion.h2>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center rounded-xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${
                social.bgColor
              } ${social.pulse ? "pulse" : ""} transition-all duration-300`}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
              aria-label={social.label}
            >
              <div className="mb-4">{social.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-2">
                {social.platform}
              </h3>
              <p className="text-sm text-[#FFFFFF] text-center">
                {social.label}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSocials;
