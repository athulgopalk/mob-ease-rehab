"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TeamCard from "../common/TeamCard";

// Team data (unchanged)
const teamMembers = [
  {
    name: "Dr. Thaha Muhammadali PT",
    title: "Founder & Clinical Study Start-Up Specialist",
    image: "/images/thaha-muhammadali.jpg",
    alt: "Dr. Thaha Muhammadali PT, Founder at MOB-EASE Rehab",
    qualifications:
      "BPT, MPT (Cardiorespiratory), MSc in Advancing Physiotherapy Practice – Coventry University (UK)",
    mission:
      "Bringing clinical research to real lives is my mission. At Mob Ease, we’re building more than rehab — we’re building hope.",
    details: {
      description:
        "Thaha Muhammadali is a clinical research specialist with expertise in cardiopulmonary rehabilitation and disability management. He focuses on clinical study startup processes, ensuring that advancements in physiotherapy are grounded in evidence and tailored to make a meaningful impact at the local level.",
      expertise: [
        "Clinical research startup expertise, bridging academic study with real-world practice",
        "Community-integrated rehabilitation, designed to support functional independence",
        "Disability management strategies, tailored to individual capabilities and environments",
        "Global and local perspectives, from structured UK-based care models to on-ground Indian needs",
      ],
    },
  },
  {
    name: "Dr. Anjana PT",
    title: "Women’s Health Physiotherapist",
    image: "/images/anjana.jpg",
    alt: "Dr. Anjana PT, Women’s Health Physiotherapist at MOB-EASE Rehab",
    qualifications: "BPT, MPT (Orthopedics)",
    mission:
      "Empowering women through specialized physiotherapy for lifelong wellness.",
    details: {
      description:
        "Dr. Anjana specializes in women’s health, providing tailored physiotherapy programs to support pre-natal, post-natal, and pelvic health needs.",
      expertise: [
        "Pre-natal and post-natal physiotherapy",
        "Pelvic floor rehabilitation",
        "Chronic pain management for women",
        "Holistic wellness integration",
      ],
    },
  },
  {
    name: "Dr. Akhil PT",
    title: "Pediatric Physiotherapist",
    image: "/images/akhil.jpg",
    alt: "Dr. Akhil PT, Pediatric Physiotherapist at MOB-EASE Rehab",
    qualifications: "BPT, MPT (Pediatrics)",
    mission:
      "Helping children move freely and confidently to reach their potential.",
    details: {
      description:
        "Dr. Akhil focuses on pediatric rehabilitation, using innovative techniques to support children’s mobility and developmental milestones.",
      expertise: [
        "Pediatric mobility solutions",
        "Developmental therapy for children",
        "Gait training and motor skill development",
        "Family-centered care approach",
      ],
    },
  },
  {
    name: "Dr. Pavi PT",
    title: "Mobility Solutions Specialist",
    image: "/images/pavi.jpg",
    alt: "Dr. Pavi PT, Mobility Solutions Specialist at MOB-EASE Rehab",
    qualifications: "BPT, MPT (Neurology)",
    mission: "Crafting mobility solutions to restore independence and dignity.",
    details: {
      description:
        "Dr. Pavi designs personalized mobility aids and rehabilitation plans to enhance functional independence for patients with neurological conditions.",
      expertise: [
        "Neurological rehabilitation",
        "Custom mobility aid integration",
        "Balance and coordination therapy",
        "Patient-centered assistive technology",
      ],
    },
  },
];

const MeetOurTeam = () => {
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

  // Animation variants for grid
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Meet Our Team section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          The Visionaries Driving Your Recovery
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
              alt={member.alt}
              qualifications={member.qualifications}
              mission={member.mission}
              details={member.details}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
