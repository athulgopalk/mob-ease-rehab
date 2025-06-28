// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import TeamCard from "../common/TeamCard";

// // Team data (unchanged)
// const teamMembers = [
//   {
//     name: "Dr. Thaha Muhammadali PT",
//     title: "Founder & Clinical Study Start-Up Specialist",
//     image: "/images/thaha-muhammadali.jpg",
//     alt: "Dr. Thaha Muhammadali PT, Founder at MOB-EASE Rehab",
//     qualifications:
//       "BPT, MPT (Cardiorespiratory), MSc in Advancing Physiotherapy Practice – Coventry University (UK)",
//     mission:
//       "Bringing clinical research to real lives is my mission. At Mob Ease, we’re building more than rehab — we’re building hope.",
//     details: {
//       description:
//         "Thaha Muhammadali is a clinical research specialist with expertise in cardiopulmonary rehabilitation and disability management. He focuses on clinical study startup processes, ensuring that advancements in physiotherapy are grounded in evidence and tailored to make a meaningful impact at the local level.",
//       expertise: [
//         "Clinical research startup expertise, bridging academic study with real-world practice",
//         "Community-integrated rehabilitation, designed to support functional independence",
//         "Disability management strategies, tailored to individual capabilities and environments",
//         "Global and local perspectives, from structured UK-based care models to on-ground Indian needs",
//       ],
//     },
//   },
//   {
//     name: "Dr. Akhil Krishna PT",
//     title: "Clinical Innovation Lead – Neuro Rehabilitation",
//     image: "/images/akhil_krishna.jpg",
//     alt: "Dr. Akhil Krishna PT, Clinical Innovation Lead at MOB-EASE Rehab",
//     qualifications: "BPT, MPT (Neurology), Co-Founder",
//     mission:
//       "Rehabilitation is a bridge to independence. My passion lies in crafting neuro-rehab journeys rooted in science and guided by empathy.",
//     details: {
//       description:
//         "As Clinical Lead, Akhil drives evidence-based neuro rehabilitation at Mob Ease. With years of hands-on expertise, he leads patient-centered care programs for neurological conditions—empowering individuals to regain function and confidence.",
//       expertise: [
//         "Neuro rehabilitation",
//         "Evidence-based care programs",
//         "Patient-centered therapy",
//         "Functional recovery",
//       ],
//     },
//   },
//   {
//     name: "Dr. Anjana Sundaran PT",
//     title: "Director – Women's Health, Neuro & Pediatric Rehabilitation",
//     image: "/images/anjana_sundaran.jpg",
//     alt: "Dr. Anjana Sundaran PT, Director at MOB-EASE Rehab",
//     qualifications:
//       "BPT, MPT (Neurology & Psychosomatic Disorders), MIAFT, MIAP, Co-Founder, Assistant Professor",
//     mission:
//       "Therapy is not just a science—it’s a relationship. I combine evidence-based physiotherapy with maternal and pediatric compassion to create lasting impact.",
//     details: {
//       description:
//         "Dr. Anjana blends clinical excellence with academic leadership. She specializes in neurorehabilitation, maternity care, pediatric development, geriatric wellness, and diabetic rehabilitation. Her dual roles in academia and practice ensure that Mob Ease remains at the forefront of modern physiotherapy.",
//       expertise: [
//         "Neurorehabilitation",
//         "Maternity and pediatric care",
//         "Geriatric wellness",
//         "Diabetic rehabilitation",
//       ],
//     },
//   },
//   {
//     name: "Dr. Pavithra Akhil PT",
//     title: "Director – Orthopedic & Community-Based Rehabilitation",
//     image: "/images/pavithra_akhil.jpg",
//     alt: "Dr. Pavithra Akhil PT, Director at MOB-EASE Rehab",
//     qualifications: "BPT, MPT (Musculoskeletal Physiotherapy), Co-Founder",
//     mission:
//       "Healing isn’t limited to clinics—it must reach homes, workplaces, and communities. That’s where real independence begins.",
//     details: {
//       description:
//         "Pavithra brings specialized knowledge in musculoskeletal rehabilitation and advanced manual therapies. She focuses on inclusive recovery in both urban and rural setups, designing programs that bridge traditional physiotherapy with modern functional goals.",
//       expertise: [
//         "Musculoskeletal rehabilitation",
//         "Advanced manual therapies",
//         "Community-based recovery",
//         "Functional goal-oriented programs",
//       ],
//     },
//   },
//   {
//     name: "Ar. Shabana Sainab",
//     title: "Rehabilitation Space Architect & Inclusive Design Consultant",
//     image: "/images/shabana_sainab.jpg",
//     alt: "Ar. Shabana Sainab, Rehabilitation Space Architect at MOB-EASE Rehab",
//     qualifications:
//       "Architect in Practice, Specialist in Spatial Rehabilitation Design",
//     mission:
//       "Every space has the power to heal—when it's designed with inclusion in mind.",
//     details: {
//       description:
//         "Shabana pioneers architectural adaptations for rehabilitation. She designs and modifies clinical and residential environments to meet the unique needs of patients with chronic illnesses and mobility challenges. From feasibility studies to renovation plans and vocational space design, she makes function and dignity a part of every blueprint.",
//       expertise: [
//         "Architectural adaptations for rehabilitation",
//         "Inclusive spatial design",
//         "Clinical and residential environment modification",
//         "Vocational space design",
//       ],
//     },
//   },
// ];

// const MeetOurTeam = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   // Animation variants for heading
//   const headingVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Animation variants for grid
//   const gridVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <section
//       ref={ref}
//       className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
//       aria-label="Meet Our Team section"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <motion.h2
//           className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={headingVariants}
//         >
//           The Visionaries Driving Your Recovery
//         </motion.h2>

//         {/* Team Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
//           variants={gridVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {teamMembers.map((member, index) => (
//             <TeamCard
//               key={index}
//               name={member.name}
//               title={member.title}
//               image={member.image}
//               alt={member.alt}
//               qualifications={member.qualifications}
//               mission={member.mission}
//               details={member.details}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MeetOurTeam;



"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TeamCard from "../common/TeamCard";

// Team data (unchanged, as provided)
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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#F5F7FA] to-[#FFFFFF] overflow-hidden"
      aria-label="Meet Our Team section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our team of experts combines passion, innovation, and expertise to
            empower your journey to wellness.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-content-center"
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