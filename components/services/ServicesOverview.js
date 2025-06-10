"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accessibility,
  Heart,
  Baby,
  Brain,
  BookOpen,
  Shield,
  Users,
  Briefcase,
} from "lucide-react";
import Head from "next/head";

// Service data
const services = [
  {
    title: "Mobility Solutions",
    description:
      "Regain independence with physiotherapy assessments, customized mobility equipment, ongoing therapy sessions, and home environment adaptations for rooms, toilets, living spaces, and travel.",
    icon: <Accessibility className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Community-Based Rehabilitation",
    description:
      "Personalized care plans, job identification based on abilities, community organization liaison for holistic support, and workplace conversion to meet patient needs.",
    icon: <Users className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Neuro Rehabilitation",
    description:
      "Detailed neurological assessments and personalized care plans with supportive equipment for patients with neurological conditions.",
    icon: <Brain className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Women’s Health and Wellness",
    description:
      "Pre- and post-natal physiotherapy, holistic wellness programs via hybrid models, and regular sessions at community or leisure centers.",
    icon: <Heart className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Paediatric Rehabilitation",
    description:
      "Specialized mobility solutions and physiotherapy for children, promoting independence, age-appropriate development, and home, travel, and community adaptations.",
    icon: <Baby className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "E-Learning and Certificate Courses",
    description:
      "Online and offline courses for professionals and students, focused on developing competencies in physiotherapy and related healthcare practices.",
    icon: <BookOpen className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Lifeline & Key Safe Service",
    description:
      "Devices and tools to enhance social security for vulnerable populations, ensuring safe and secure living environments through assistive technologies.",
    icon: <Shield className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Franchise Model",
    description:
      "Opportunities for professionals to build careers and establish practices under the MOB-EASE brand with operational support and guidelines.",
    icon: <Briefcase className="w-10 h-10 text-[#1A2B6B]" />,
  },
];

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(26, 43, 107, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Services Overview section"
    >
      {/* SEO Meta Title */}
      <Head>
        <title>Physiotherapy Services in Kottayam | MOB-EASE Rehab</title>
        <meta
          name="description"
          content="Explore MOB-EASE Rehab’s comprehensive physiotherapy services in Kottayam, including mobility solutions, women’s health, pediatric rehabilitation, and more."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Our Comprehensive Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-[#FFFFFF] border-2 border-[#FFE6F0] rounded-xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(26,43,107,0.15)] transition-all duration-300"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1A2B6B] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-[#1A2B6B]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
