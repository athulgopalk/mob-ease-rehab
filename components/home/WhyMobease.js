// "use client";

// import { motion, useInView } from "framer-motion";
// import { Heart, Baby, Wheelchair } from "lucide-react";
// import { useRef } from "react";

// // Differentiator data
// const differentiators = [
//   {
//     title: "Women-Focused Care",
//     description: "Specialized physiotherapy tailored for women’s unique needs.",
//     icon: <Heart className="w-8 h-8 text-[#E6F0FA]" />,
//   },
//   {
//     title: "Pediatric Expertise",
//     description:
//       "Custom mobility solutions for children’s growth and development.",
//     icon: <Baby className="w-8 h-8 text-[#E6F0FA]" />,
//   },
//   {
//     title: "Innovative Mobility Aids",
//     description: "Cutting-edge tools to empower independence and comfort.",
//     icon: <Wheelchair className="w-8 h-8 text-[#E6F0FA]" />,
//   },
// ];

// // Neon glow and gradient background CSS
// const neonStyles = `
//   .neon-bg {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     z-index: 0;
//     background: radial-gradient(circle at center, rgba(230, 240, 250, 0.2) 0%, transparent 70%);
//   }
//   .neon-grid {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: repeating-linear-gradient(
//       45deg,
//       rgba(230, 240, 250, 0.1),
//       rgba(230, 240, 250, 0.1) 2px,
//       transparent 2px,
//       transparent 60px
//     );
//     animation: neonShift 15s infinite ease-in-out;
//     opacity: 0.2;
//   }
//   @keyframes neonShift {
//     0% { transform: translate(0, 0); opacity: 0.2; }
//     50% { transform: translate(10px, -10px); opacity: 0.3; }
//     100% { transform: translate(0, 0); opacity: 0.2; }
//   }
// `;

// const WhyMobease = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   // Animation variants for heading
//   const headingVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Animation variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
//     }),
//     hover: {
//       scale: 1.05,
//       boxShadow: "0 0 15px rgba(230, 240, 250, 0.5)",
//       transition: { duration: 0.3 },
//     },
//   };

//   // Animation variants for stat
//   const statVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
//     },
//   };

//   return (
//     <section className="relative w-full py-16 bg-[#FFFFFF] overflow-hidden">
//       {/* Neon Gradient Background */}
//       <style>{neonStyles}</style>
//       <div className="neon-bg">
//         <div className="neon-grid" />
//       </div>

//       <div
//         className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
//         ref={ref}
//       >
//         {/* Heading */}
//         <motion.h2
//           className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] text-center mb-12"
//           style={{
//             textShadow: "0 0 10px rgba(230, 240, 250, 0.5)",
//           }}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={headingVariants}
//         >
//           Why Choose MOB-EASE?
//         </motion.h2>

//         {/* Differentiators */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {differentiators.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center text-center bg-white/90 backdrop-blur-lg rounded-lg p-6 hover:shadow-[0_0_15px_rgba(230,240,250,0.5)] transition-all duration-300"
//               custom={index}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               whileHover="hover"
//               variants={cardVariants}
//             >
//               {/* Icon */}
//               <div
//                 className="mb-4"
//                 style={{
//                   filter: "drop-shadow(0 0 4px rgba(230, 240, 250, 0.4))",
//                 }}
//               >
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3
//                 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A2B6B] mb-2"
//                 style={{
//                   textShadow: "0 0 5px rgba(230, 240, 250, 0.3)",
//                 }}
//               >
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm sm:text-base md:text-lg text-[#1A2B6B]">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stat */}
//         <motion.div
//           className="mt-12 text-center"
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={statVariants}
//         >
//           <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A2B6B]">
//             Helping 500+ patients regain independence
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhyMobease;


"use client";

import { motion, useInView } from "framer-motion";
import { Heart, Baby, Accessibility } from "lucide-react";
import { useRef } from "react";

// Differentiator data
const differentiators = [
  {
    title: "Women-Focused Care",
    description: "Specialized physiotherapy tailored for women’s unique needs.",
    icon: <Heart className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Pediatric Expertise",
    description:
      "Custom mobility solutions for children’s growth and development.",
    icon: <Baby className="w-10 h-10 text-[#1A2B6B]" />,
  },
  {
    title: "Innovative Mobility Aids",
    description: "Cutting-edge tools to empower independence and comfort.",
    icon: <Accessibility className="w-10 h-10 text-[#1A2B6B]" />,
  },
];

// Gradient background CSS
const gradientStyles = `
  .gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 230, 240, 0.2) 0%, rgba(230, 240, 250, 0.1) 100%);
    z-index: 0;
  }
`;

const WhyMobease = () => {
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
      boxShadow: "0 0 12px rgba(26, 43, 107, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for stat
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Why Choose MOB-EASE section"
    >
      {/* Gradient Background */}
      <style>{gradientStyles}</style>
      <div className="gradient-bg" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2B6B] text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Why Choose MOB-EASE?
        </motion.h2>

        {/* Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-[#FFFFFF] rounded-xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(26,43,107,0.2)] transition-all duration-300"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A2B6B] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-[#1A2B6B] max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stat */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={statVariants}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A2B6B]">
            Helping 500+ patients regain independence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMobease;