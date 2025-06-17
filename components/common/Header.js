"use client";

import { motion } from "framer-motion";
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

const Header = () => {
  // Animation variants for header slide-in
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for nav links
  const linkVariants = {
    initial: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="sticky top-0 z-50 bg-[#FFFFFF] shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
      role="banner"
    >
      <nav className="container mx-auto px-10 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="MOB-EASE Rehab Home">
            <Image
              src="/Logo.jpg" // Replace with actual logo path
              alt="MOB-EASE Rehab Logo"
              width={180}
              height={50}
              className="h-14 w-auto"
              placeholder="blur"
              blurDataURL={placeholderLogo}
              priority
              onError={() => console.warn("Failed to load logo")}
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="flex space-x-8" role="navigation">
            {navigation.map((item) => (
              <motion.li
                key={item.name}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-[#1A2B6B] font-medium text-base uppercase tracking-wide px-3 py-2 rounded-md hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/+919876543210" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
            className="bg-[#1A2B6B] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-all duration-300"
            aria-label="Book Appointment via WhatsApp"
          >
            Book Appointment
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
