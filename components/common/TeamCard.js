// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Placeholder image for fallback
// const placeholderImage =
//   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// const TeamCard = ({
//   name,
//   title,
//   image,
//   alt,
//   qualifications,
//   mission,
//   details,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Animation variants for card
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.02,
//       boxShadow: "0 8px 24px rgba(26, 43, 107, 0.15)",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   // Animation variants for expanded content
//   const contentVariants = {
//     collapsed: {
//       height: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//     expanded: {
//       height: "auto",
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//   };

//   // Handle hover and focus events
//   const handleMouseEnter = () => setIsExpanded(true);
//   const handleMouseLeave = () => setIsExpanded(false);
//   const handleFocus = () => setIsExpanded(true);
//   const handleBlur = () => setIsExpanded(false);

//   return (
//     <motion.div
//       className="flex flex-col bg-[#FFFFFF] rounded-xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] cursor-pointer overflow-hidden w-full focus:outline-none focus:ring-2 focus:ring-[#1A2B6B]"
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover="hover"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       role="button"
//       tabIndex={0}
//       aria-expanded={isExpanded}
//       aria-label={`Toggle details for ${name}`}
//     >
//       {/* Team Member Image and Basic Info */}
//       <div className="flex items-center gap-3 sm:gap-4 mb-4">
//         <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
//           <Image
//             src={image}
//             alt={alt}
//             width={80}
//             height={80}
//             className="w-full h-full object-cover"
//             placeholder="blur"
//             blurDataURL={placeholderImage}
//             onError={() => console.warn(`Failed to load image for ${name}`)}
//           />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1A2B6B] leading-tight">
//             {name}
//           </h3>
//           <p className="text-xs sm:text-sm md:text-base text-[#1A2B6B]">
//             {title}
//           </p>
//           {qualifications && (
//             <p className="text-xs sm:text-sm text-[#1A2B6B]/70 mt-1">
//               {qualifications}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Expanded Content */}
//       <motion.div
//         className="overflow-hidden"
//         variants={contentVariants}
//         animate={isExpanded ? "expanded" : "collapsed"}
//       >
//         {mission && (
//           <p className="text-sm md:text-base text-[#1A2B6B] italic mb-4">
//             &quot;{mission}&quot;
//           </p>
//         )}
//         {details && (
//           <div className="text-sm md:text-base text-[#1A2B6B]">
//             <p className="mb-3">{details.description}</p>
//             <ul className="list-disc list-inside space-y-1 text-sm">
//               {details.expertise.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default TeamCard;


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

const TeamCard = ({
  name,
  title,
  image,
  alt,
  qualifications,
  mission,
  details,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Animation variants for card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 12px 24px rgba(26, 43, 107, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Animation variants for expanded content
  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Handle hover and focus events
  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);
  const handleFocus = () => setIsExpanded(true);
  const handleBlur = () => setIsExpanded(false);

  return (
    <motion.div
      className="flex flex-col bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto focus:outline-none focus:ring-4 focus:ring-[#1A2B6B]/20"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`Toggle details for ${name}`}
    >
      {/* Team Member Image and Basic Info */}
      <div className="flex items-start gap-4 sm:gap-6 mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#1A2B6B]/10">
          <Image
            src={image}
            alt={alt}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            placeholder="blur"
            blurDataURL={placeholderImage}
            onError={() => console.warn(`Failed to load image for ${name}`)}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A2B6B] leading-tight">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-[#1A2B6B]/80 font-medium">
            {title}
          </p>
          {qualifications && (
            <p className="text-xs sm:text-sm text-[#1A2B6B]/60 mt-2">
              {qualifications}
            </p>
          )}
        </div>
      </div>

      {/* Mission Statement */}
      {mission && (
        <p className="text-sm sm:text-base text-[#1A2B6B] italic mb-4 font-light">
          "{mission}"
        </p>
      )}

      {/* Expanded Content */}
      <motion.div
        className="overflow-hidden"
        variants={contentVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        {details && (
          <div className="text-sm sm:text-base text-[#1A2B6B]/90">
            <p className="mb-4 leading-relaxed">{details.description}</p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              {details.expertise.map((item, index) => (
                <li key={index} className="text-[#1A2B6B]/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;
