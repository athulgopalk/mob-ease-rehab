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
              src="/Logo.jpg" // Replace with actual logo path
              alt="MOB-EASE Rehab Logo"
              width={150}
              height={50}
              className="h-14 w-auto rounded-full mb-3 m-3"
            />
          </Link>
          <p className="text-sm text-[#E6F0FA]">
            Empowering every step—from kids to seniors—with personalized rehab,
            adaptive equipment, and inclusive therapy. Innovative, compassionate
            care for a better quality of life. Because every move matters.
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
            Mob Ease Rehabilitation Hub
            <br />
            10/97 Karavaram
            <br />
            Vanchiyoor P.O Thiruvananthapuram 695102
            <br />
            Phone: +91 9496095810
            <br />
            email: contactus@mobeaserehab.com
          </p>
          <motion.a
            href="https://wa.me/+919496095810" // Replace with actual WhatsApp number
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
              href="https://wa.me/+919496095810" // Replace with actual WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#FFE6F0" }}
              transition={{ duration: 0.2 }}
              className="text-[#E6F0FA]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.554.667 4.932 1.822 7.011L2 30l7.333-2.411a13.23 13.23 0 006.667 1.744c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667zm0 24a10.63 10.63 0 01-5.385-1.48l-.385-.229-4.573 1.5 1.5-4.448-.25-.406A10.635 10.635 0 015.333 16c0-5.887 4.78-10.667 10.667-10.667S26.667 10.113 26.667 16 21.887 26.667 16 26.667zm5.206-7.787c-.285-.144-1.682-.832-1.942-.928-.26-.096-.449-.144-.638.144-.19.287-.724.928-.887 1.118-.163.19-.326.214-.609.08-.285-.144-1.203-.441-2.29-1.405-.846-.755-1.418-1.688-1.588-1.973-.163-.287-.017-.441.118-.58.122-.124.285-.326.427-.49.143-.163.19-.285.285-.475.095-.19.048-.36-.024-.502-.07-.143-.609-1.548-.834-2.127-.221-.559-.449-.482-.61-.492l-.522-.01c-.19 0-.49.07-.745.336-.255.265-.974.906-.974 2.21s.998 2.563 1.136 2.743c.137.19 1.965 2.997 4.764 4.202.666.287 1.183.456 1.583.583.665.211 1.27.182 1.745.11.532-.08 1.638-.668 1.868-1.313.232-.644.232-1.196.163-1.313-.07-.112-.255-.182-.532-.317z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://facebook.com" 
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
        className="mt-4 pt-4 pb-4 border-t border-[#E6F0FA] text-center text-sm text-[#E6F0FA] md:text-right md:pr-4"
      >
        <p>© {new Date().getFullYear()} MOB-EASE Rehab. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
