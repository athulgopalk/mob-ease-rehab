"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

// Schema markup for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MOB-EASE Rehab Kottayam",
  description:
    "Leading physiotherapy clinic in Kottayam offering mobility solutions, women’s health, pediatric rehabilitation, and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Wellness Road, Near Kottayam Medical College",
    addressLocality: "Kottayam",
    addressRegion: "Kerala",
    postalCode: "686008",
    addressCountry: "India",
  },
  telephone: "+919876543210", // Replace with actual phone number
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.591566",
    longitude: "76.522153",
  },
};

const KottayamClinic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for text panel
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for map
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 12px rgba(255, 230, 240, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#FFFFFF] to-[#E6F0FA] overflow-hidden"
      aria-label="Kottayam Clinic Section"
    >
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Visit Our Kottayam Clinic
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Text Panel */}
          <motion.div
            className="lg:w-1/2 bg-[#FFFFFF] rounded-xl p-6 sm:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
                MOB-EASE Rehab Kottayam
              </h3>
              <p className="text-sm sm:text-base text-[#1A2B6B] mb-6">
                Experience personalized physiotherapy and mobility solutions at
                our state-of-the-art clinic in Kottayam, designed to empower
                your independence and wellness.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#1A2B6B]">
                    Address
                  </p>
                  <p className="text-sm text-[#1A2B6B]">
                    123 Wellness Road, Near Kottayam Medical College, Kottayam,
                    Kerala 686008
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A2B6B]">Hours</p>
                  <p className="text-sm text-[#1A2B6B]">
                    Mon-Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A2B6B]">
                    Contact
                  </p>
                  <p className="text-sm text-[#1A2B6B]">
                    Phone: +91 9876543210
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
            >
              <Link
                href="/contact"
                className="inline-block bg-[#FFE6F0] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#E6F0FA] transition-all duration-300 mt-6"
                aria-label="Book Appointment at Kottayam Clinic"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            className="lg:w-1/2 h-80 sm:h-96 rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
            variants={mapVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <iframe
              src="https://maps.app.goo.gl/C8KAwsCzQ7Wtopu76?g_st=aw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MOB-EASE Rehab Kottayam Clinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KottayamClinic;
