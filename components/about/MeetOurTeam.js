"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import TeamCard from "../common/TeamCard";

// Team data (updated image paths for consistency)
const teamMembers = [
  {
    name: "Dr. Thaha Muhammadali PT",
    title: "Founder & Clinical Study Start-Up Specialist",
    image: "/ThahaMuhammadaliPT.jpg",
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
    name: "Dr. Akhil Krishna PT",
    title: "Clinical Innovation Lead – Neuro Rehabilitation",
    image: "/AkhilKrishnaPT.jpg",
    alt: "Dr. Akhil Krishna PT, Clinical Innovation Lead at MOB-EASE Rehab",
    qualifications: "BPT, MPT (Neurology), Co-Founder",
    mission:
      "Rehabilitation is a bridge to independence. My passion lies in crafting neuro-rehab journeys rooted in science and guided by empathy.",
    details: {
      description:
        "As Clinical Lead, Akhil drives evidence-based neuro rehabilitation at Mob Ease. With years of hands-on expertise, he leads patient-centered care programs for neurological conditions—empowering individuals to regain function and confidence.",
      expertise: [
        "Neuro rehabilitation",
        "Evidence-based care programs",
        "Patient-centered therapy",
        "Functional recovery",
      ],
    },
  },
  {
    name: "Dr. Anjana Sundaran PT",
    title: "Director – Women's Health, Neuro & Pediatric Rehabilitation",
    image: "/AnjanaSundaranpt.jpg",
    alt: "Dr. Anjana Sundaran PT, Director at MOB-EASE Rehab",
    qualifications:
      "BPT, MPT (Neurology & Psychosomatic Disorders), MIAFT, MIAP, Co-Founder, Assistant Professor",
    mission:
      "Therapy is not just a science—it’s a relationship. I combine evidence-based physiotherapy with maternal and pediatric compassion to create lasting impact.",
    details: {
      description:
        "Dr. Anjana blends clinical excellence with academic leadership. She specializes in neurorehabilitation, maternity care, pediatric development, geriatric wellness, and diabetic rehabilitation. Her dual roles in academia and practice ensure that Mob Ease remains at the forefront of modern physiotherapy.",
      expertise: [
        "Neurorehabilitation",
        "Maternity and pediatric care",
        "Geriatric wellness",
        "Diabetic rehabilitation",
      ],
    },
  },
  {
    name: "Dr. Pavithra Akhil PT",
    title: "Director – Orthopedic & Community-Based Rehabilitation",
    image: "/PavithraAkhilPT.JPG",
    alt: "Dr. Pavithra Akhil PT, Director at MOB-EASE Rehab",
    qualifications: "BPT, MPT (Musculoskeletal Physiotherapy), Co-Founder",
    mission:
      "Healing isn’t limited to clinics—it must reach homes, workplaces, and communities. That’s where real independence begins.",
    details: {
      description:
        "Pavithra brings specialized knowledge in musculoskeletal rehabilitation and advanced manual therapies. She focuses on inclusive recovery in both urban and rural setups, designing programs that bridge traditional physiotherapy with modern functional goals.",
      expertise: [
        "Musculoskeletal rehabilitation",
        "Advanced manual therapies",
        "Community-based recovery",
        "Functional goal-oriented programs",
      ],
    },
  },
  {
    name: "Ar. Shabana Sainab",
    title: "Rehabilitation Space Architect & Inclusive Design Consultant",
    image: "/ShabanaSainab.JPG",
    alt: "Ar. Shabana Sainab, Rehabilitation Space Architect at MOB-EASE Rehab",
    qualifications:
      "Architect in Practice, Specialist in Spatial Rehabilitation Design",
    mission:
      "Every space has the power to heal—when it's designed with inclusion in mind.",
    details: {
      description:
        "Shabana pioneers architectural adaptations for rehabilitation. She designs and modifies clinical and residential environments to meet the unique needs of patients with chronic illnesses and mobility challenges. From feasibility studies to renovation plans and vocational space design, she makes function and dignity a part of every blueprint.",
      expertise: [
        "Architectural adaptations for rehabilitation",
        "Inclusive spatial design",
        "Clinical and residential environment modification",
        "Vocational space design",
      ],
    },
  },
];

// Futuristic styles
const futuristicStyles = `
  .team-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #E6F0FA, #1A2B6B);
    z-index: 0;
    overflow: hidden;
  }
  .neon-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255, 230, 240, 0.3) 0%, transparent 70%);
    animation: neonPulse 6s infinite ease-in-out;
    will-change: opacity;
  }
  .team-particle {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #FFE6F0;
    border-radius: 50%;
    animation: orbit 10s infinite linear;
    will-change: transform;
  }
  .team-particle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
  .team-particle:nth-child(2) { top: 30%; right: 15%; animation-delay: 2s; }
  .team-particle:nth-child(3) { top: 50%; left: 20%; animation-delay: 4s; }
  .team-particle:nth-child(4) { top: 70%; right: 10%; animation-delay: 6s; }
  @keyframes neonPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  @keyframes orbit {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(25px, -25px) scale(1.3); }
    100% { transform: translate(0, 0) scale(1); }
  }
`;

const MeetOurTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for grid
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Meet Our Team | MOB-EASE Rehab Kottayam</title>
        <meta
          name="description"
          content="Meet the dedicated team at MOB-EASE Rehab in Kottayam, combining expertise in physiotherapy, neurorehabilitation, and inclusive design to empower lives."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab team, physiotherapy Kottayam, mobility solutions Kerala, neurorehabilitation experts"
        />
      </Head>

      <section
        ref={ref}
        className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden"
        aria-label="Meet Our Team Section"
      >
        {/* Futuristic Effects */}
        <style>{futuristicStyles}</style>
        <motion.div
          className="team-bg"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="neon-glow" />
          <div className="team-particle" />
          <div className="team-particle" />
          <div className="team-particle" />
          <div className="team-particle" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headingVariants}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] mb-4">
              Meet the Visionaries Behind Your Recovery
            </h2>
            <p className="text-base sm:text-lg text-[#1A2B6B]/70 max-w-3xl mx-auto">
              At MOB-EASE Rehab, our strength lies in the hands and hearts of
              our dedicated team. Each member brings unique expertise and a
              shared vision of empowering independence.
            </p>
          </motion.div>

          {/* Why Choose Our Team */}
          <motion.div
            className="bg-[#FFFFFF] bg-opacity-10 backdrop-blur-md border border-[#FFE6F0]/30 rounded-xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4 text-center">
              Why Choose Our Team
            </h3>
            <ul className="text-sm sm:text-base text-[#1A2B6B] space-y-2">
              <li className="flex items-start">
                <span className="text-[#FFE6F0] mr-2">•</span> We always put
                you, the patient, first.
              </li>
              <li className="flex items-start">
                <span className="text-[#FFE6F0] mr-2">•</span> Clinically
                experienced, patient-centered professionals.
              </li>
              <li className="flex items-start">
                <span className="text-[#FFE6F0] mr-2">•</span> Trained in
                adaptive technology and inclusive care.
              </li>
              <li className="flex items-start">
                <span className="text-[#FFE6F0] mr-2">•</span> Working together
                to provide the best possible support.
              </li>
            </ul>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
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
    </>
  );
};

export default MeetOurTeam;
