// components/common/Header.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <Disclosure as="nav" className="container mx-auto px-4 py-4">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/images/logo.png" // Replace with actual logo path
                  alt="MOB-EASE Rehab Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#1A2B6B] hover:text-[#FFE6F0] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://wa.me/+91XXXXXXXXXX" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="hidden md:block bg-[#1A2B6B] text-white px-4 py-2 rounded-md hover:bg-[#FFE6F0] hover:text-[#1A2B6B] transition-colors"
              >
                Book Appointment
              </motion.a>

              {/* Mobile Menu Button */}
              <Disclosure.Button
                className="md:hidden p-2 rounded-md text-[#1A2B6B] hover:bg-[#FFE6F0]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {open ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Disclosure.Button>
            </div>

            {/* Mobile Navigation */}
            <Disclosure.Panel
              as={motion.div}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#1A2B6B] hover:text-[#FFE6F0] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/+91XXXXXXXXXX" // Replace with actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1A2B6B] text-white px-4 py-2 rounded-md text-center hover:bg-[#FFE6F0] hover:text-[#1A2B6B]"
                >
                  Book Appointment
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.header>
  );
};

export default Header;
