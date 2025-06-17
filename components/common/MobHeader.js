"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Placeholder logo for fallback
const placeholderLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const MobHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Link animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut", delay: i * 0.1 },
    }),
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] py-4"
      role="banner"
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" aria-label="MOB-EASE Rehab Home">
          <Image
            src="/Logo.jpg" // Replace with actual logo path
            alt="MOB-EASE Rehab Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            placeholder="blur"
            blurDataURL={placeholderLogo}
            priority
            onError={() => console.warn("Failed to load logo")}
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="flex flex-col space-y-1.5 p-2 rounded-md hover:bg-[#FFE6F0] transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="w-5 h-0.5 bg-[#1A2B6B]" />
          <span className="w-5 h-0.5 bg-[#1A2B6B]" />
          <span className="w-5 h-0.5 bg-[#1A2B6B]" />
        </button>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-6 w-48 bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.15)] rounded-lg py-4 px-4 z-40"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="space-y-2" role="navigation">
              {navigation.map((link, i) => (
                <motion.li
                  key={link.name}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  onClick={toggleMenu}
                >
                  <Link href={link.href}>
                    <span className="text-[#1A2B6B] text-sm font-medium uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] block py-2 px-3 rounded-md transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-3"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={navigation.length}
            >
              <Link
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="w-full bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all duration-300"
                  onClick={toggleMenu}
                  aria-label="Book Appointment via WhatsApp"
                >
                  Book Appointment
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobHeader;
