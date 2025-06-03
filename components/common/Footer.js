// components/common/Footer.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" bottom-0 left-0 right-0 bg-[#1A2B6B] text-white "
    >
      {/* Waveform Top Edge */}
      <svg
        className="w-full h-8"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60 C360 30 720 90 1080 30 C1260 0 1440 30 1440 60 L1440 0 L0 0 Z"
          fill="#1A2B6B"
        />
      </svg>

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row md:justify-end md:items-start gap-8">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 md:w-1/4"
        >
          <Link href="/">
            <Image
              src="/images/logo.png" // Replace with actual logo path
              alt="MOB-EASE Rehab Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <p className="text-sm text-[#E6F0FA]">
            Empowering independence through physiotherapy and mobility solutions
            in Kottayam, Kerala.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 md:w-1/4"
        >
          <h3 className="text-base font-semibold text-[#FFE6F0]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05, color: "#FFE6F0" }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-[#E6F0FA] hover:text-[#FFE6F0] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 md:w-1/4"
        >
          <h3 className="text-base font-semibold text-[#FFE6F0]">Contact Us</h3>
          <p className="text-sm text-[#E6F0FA]">
             Kerala, India
            <br />
            Phone: +91-XXXXXXXXXX
            <br />
            Email: info@mobeaserehab.com
          </p>
          <motion.a
            href="https://wa.me/+91XXXXXXXXXX" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#E6F0FA",
              color: "#1A2B6B",
            }}
            transition={{ duration: 0.2 }}
            className="inline-block bg-[#FFE6F0] text-[#1A2B6B] px-4 py-2 rounded-md"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Social Media & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4 md:w-1/4"
        >
          <h3 className="text-base font-semibold text-[#FFE6F0]">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <motion.a
              href="https://linkedin.com" // Replace with actual LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#FFE6F0" }}
              transition={{ duration: 0.2 }}
              className="text-[#E6F0FA]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.866 0-2.152 1.459-2.152 2.966v5.697h-3v-11h2.879v1.498h.041c.401-.757 1.379-1.557 2.837-1.557 3.035 0 3.598 2 3.598 4.604v6.455z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/+91XXXXXXXXXX" // Replace with actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#FFE6F0" }}
              transition={{ duration: 0.2 }}
              className="text-[#E6F0FA]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.48 3.44 1.32 4.91L2 22l5.09-1.33A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.79 15.57c-.22.62-.88 1.06-1.54 1.21-.49.11-1.12.2-3.25-.99-2.74-1.54-4.5-4.07-4.64-4.27-.14-.2-1.39-1.87-1.39-3.56 0-1.09.58-1.63 1.02-2.05.39-.38.86-.49 1.15-.49.09 0 .17 0 .25.01.36.04.55.28.63.59.09.36.32 1.27.49 1.93.15.58.05 1.07-.27 1.49-.32.42-.49.68-.86 1.03-.37.35-.75.72-.34 1.41.95 1.62 2.05 2.9 3.64 3.76.66.36 1.31.33 1.73.18.52-.18 1.59-.71 1.82-1.39.19-.56.19-.93.13-1.02-.06-.09-.22-.12-.34-.18l-1.22-.62z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://facebook.com" // Replace with actual Facebook link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#FFE6F0" }}
              transition={{ duration: 0.2 }}
              className="text-[#E6F0FA]"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.45 2.9h-2.33v6.98c4.78-.75 8.44-4.89 8.44-9.88z" />
              </svg>
            </motion.a>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#FFE6F0] text-[#1A2B6B] px-4 py-2 rounded-md hover:bg-[#E6F0FA]"
            >
              Book Appointment
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 pt-4 border-t border-[#E6F0FA] text-center text-sm text-[#E6F0FA] md:text-right md:pr-4"
      >
        <p>© {new Date().getFullYear()} MOB-EASE Rehab. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
