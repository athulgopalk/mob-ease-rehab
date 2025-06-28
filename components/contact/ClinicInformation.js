// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";

// // Schema markup for local business
// const localBusinessSchema = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   name: "MOB-EASE Rehab Kottayam",
//   description:
//     "Premier physiotherapy clinic in Kottayam offering mobility solutions, women’s health, and pediatric rehabilitation.",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "123 Wellness Road, Near Kottayam Medical College",
//     addressLocality: "Kottayam",
//     addressRegion: "Kerala",
//     postalCode: "686008",
//     addressCountry: "India",
//   },
//   telephone: "+919876543210",
//   email: "info@mobeaserehab.com",
//   openingHoursSpecification: [
//     {
//       "@type": "OpeningHoursSpecification",
//       dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//       opens: "09:00",
//       closes: "18:00",
//     },
//     {
//       "@type": "OpeningHoursSpecification",
//       dayOfWeek: "Saturday",
//       opens: "09:00",
//       closes: "14:00",
//     },
//   ],
//   geo: {
//     "@type": "GeoCoordinates",
//     latitude: "9.591566",
//     longitude: "76.522153",
//   },
// };

// // Particle animation CSS
// const particleStyles = `
//   .particle-bg {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(to bottom, rgba(230, 240, 250, 0.2), transparent);
//     z-index: 0;
//     overflow: hidden;
//   }
//   .particle {
//     position: absolute;
//     width: 3px;
//     height: 3px;
//     background: rgba(255, 230, 240, 0.6);
//     border-radius: 50%;
//     animation: float 12s infinite ease-in-out;
//   }
//   .particle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
//   .particle:nth-child(2) { top: 35%; right: 20%; animation-delay: 3s; }
//   .particle:nth-child(3) { top: 55%; left: 30%; animation-delay: 6s; }
//   .particle:nth-child(4) { top: 75%; right: 15%; animation-delay: 9s; }
//   @keyframes float {
//     0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
//     50% { transform: translateY(-15px) scale(1.3); opacity: 0.7; }
//   }
// `;

// const ClinicInformation = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [showMap, setShowMap] = useState(false);

//   // Animation variants for background
//   const backgroundVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
//   };

//   // Animation variants for card (3D flip)
//   const cardVariants = {
//     front: {
//       rotateY: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//     back: {
//       rotateY: 180,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   // Animation variants for map
//   const mapVariants = {
//     hidden: {
//       height: 0,
//       opacity: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     visible: {
//       height: "auto",
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   // Animation variants for heading
//   const headingVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
//       aria-label="Clinic Information Section"
//     >
//       {/* Schema Markup */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(localBusinessSchema),
//         }}
//       />

//       {/* SEO Meta Tags */}
//       <head>
//         <title>Contact MOB-EASE Rehab | Physiotherapy Clinic in Kottayam</title>
//         <meta
//           name="description"
//           content="Visit MOB-EASE Rehab’s Kottayam clinic for expert physiotherapy services. Find our address, phone, email, and map location."
//         />
//         <meta
//           name="keywords"
//           content="MOB-EASE Rehab Kottayam, physiotherapy clinic Kottayam, contact physiotherapy Kottayam, mobility solutions"
//         />
//       </head>

//       {/* Particle Effect */}
//       <style>{particleStyles}</style>
//       <motion.div
//         className="particle-bg"
//         variants={backgroundVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="particle" />
//         <div className="particle" />
//         <div className="particle" />
//         <div className="particle" />
//       </motion.div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
//         {/* Heading */}
//         <motion.h2
//           className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
//           variants={headingVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           Find Us in Kottayam
//         </motion.h2>

//         <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
//           {/* 3D Flippable Card */}
//           <motion.div
//             className="lg:w-1/2 perspective-1000"
//             style={{ perspective: "1000px" }}
//             animate={isFlipped ? "back" : "front"}
//             variants={cardVariants}
//             onClick={() => setIsFlipped(!isFlipped)}
//           >
//             <div
//               className="w-full h-full bg-[#FFFFFF] rounded-xl p-6 sm:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex flex-col justify-between backface-hidden"
//               style={{ backfaceVisibility: "hidden" }}
//             >
//               {/* Front Side */}
//               {!isFlipped && (
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
//                     MOB-EASE Rehab Kottayam
//                   </h3>
//                   <div className="space-y-4 text-[#1A2B6B]">
//                     <div>
//                       <p className="text-sm font-semibold">Address</p>
//                       <p className="text-sm">
//                         123 Wellness Road, Near Kottayam Medical College,
//                         Kottayam, Kerala 686008
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold">Phone</p>
//                       <p className="text-sm">+91 9876543210</p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold">Email</p>
//                       <p className="text-sm">info@mobeaserehab.com</p>
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold">Hours</p>
//                       <p className="text-sm">
//                         Mon-Fri: 9:00 AM - 6:00 PM
//                         <br />
//                         Sat: 9:00 AM - 2:00 PM
//                         <br />
//                         Sun: Closed
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-xs text-[#1A2B6B]/70 mt-4 italic">
//                     Tap to see more details
//                   </p>
//                 </div>
//               )}

//               {/* Back Side */}
//               {isFlipped && (
//                 <div className="text-center">
//                   <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
//                     Why Choose Us?
//                   </h3>
//                   <p className="text-sm md:text-base text-[#1A2B6B] mb-6">
//                     At MOB-EASE Rehab, we’re committed to transforming lives
//                     with personalized physiotherapy, innovative mobility
//                     solutions, and compassionate care tailored to your needs.
//                   </p>
//                   <ul className="text-sm text-[#1A2B6B] list-disc list-inside space-y-2">
//                     <li>
//                       Expert team specializing in women’s health and pediatric
//                       care
//                     </li>
//                     <li>Customized mobility aids for independence</li>
//                     <li>Community-focused rehabilitation programs</li>
//                   </ul>
//                   <p className="text-xs text-[#1A2B6B]/70 mt-6 italic">
//                     Tap to return
//                   </p>
//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* Interactive Map Toggle */}
//           <div className="lg:w-1/2">
//             <motion.button
//               className="w-full bg-[#FFE6F0] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#E6F0FA] transition-all duration-300 mb-4"
//               onClick={() => setShowMap(!showMap)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label={showMap ? "Hide Map" : "Show Map"}
//             >
//               {showMap ? "Hide Map" : "View Location on Map"}
//             </motion.button>
//             <motion.div
//               className="h-0 lg:h-96 overflow-hidden rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
//               variants={mapVariants}
//               animate={showMap ? "visible" : "hidden"}
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.135763614157!2d76.5199643147982!3d9.591566293149777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzUnMjkuNiJOIDc2wrAzMScyMi4zIkU!5e0!3m2!1sen!2sin!4v1697681234567!5m2!1sen!2sin"
//                 width="100%"
//                 height="384"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="MOB-EASE Rehab Kottayam Clinic Location"
//               ></iframe>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClinicInformation;



"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Schema markup for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MOB-EASE Rehab Kottayam",
  description:
    "Premier physiotherapy clinic in Kottayam offering mobility solutions, women’s health, and pediatric rehabilitation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Wellness Road, Near Kottayam Medical College",
    addressLocality: "Kottayam",
    addressRegion: "Kerala",
    postalCode: "686008",
    addressCountry: "India",
  },
  telephone: "+919876543210",
  email: "info@mobeaserehab.com",
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

// Particle and parchment map animation CSS
const mapStyles = `
  .particle-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(230, 240, 250, 0.2), transparent);
    z-index: 0;
    overflow: hidden;
  }
  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(255, 230, 240, 0.6);
    border-radius: 50%;
    animation: float 12s infinite ease-in-out;
  }
  .particle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
  .particle:nth-child(2) { top: 35%; right: 20%; animation-delay: 3s; }
  .particle:nth-child(3) { top: 55%; left: 30%; animation-delay: 6s; }
  .particle:nth-child(4) { top: 75%; right: 15%; animation-delay: 9s; }
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
    50% { transform: translateY(-15px) scale(1.3); opacity: 0.7; }
  }
  .parchment-map {
    position: relative;
    background: url('https://www.transparenttextures.com/patterns/old-map.png') repeat, #f4e9cd;
    border: 4px solid #8b5523;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .parchment-map::before,
  .parchment-map::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(244, 233, 205, 0.9), transparent);
    z-index: 1;
    pointer-events: none;
  }
  .parchment-map::before {
    top: 0;
    transform-origin: top;
  }
  .parchment-map::after {
    bottom: 0;
    transform-origin: bottom;
  }
`;

const ClinicInformation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Animation variants for background
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Animation variants for card (3D flip)
  const cardVariants = {
    front: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    back: {
      rotateY: 180,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Animation variants for map (unfurl effect)
  const mapVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      scaleY: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    visible: {
      height: "auto",
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="Clinic Information Section"
    >
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* SEO Meta Tags */}
      <head>
        <title>Contact MOB-EASE Rehab | Physiotherapy Clinic in Kottayam</title>
        <meta
          name="description"
          content="Visit MOB-EASE Rehab’s Kottayam clinic for expert physiotherapy services. Find our address, phone, email, and map location."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab Kottayam, physiotherapy clinic Kottayam, contact physiotherapy Kottayam, mobility solutions"
        />
      </head>

      {/* Particle and Parchment Effect */}
      <style>{mapStyles}</style>
      <motion.div
        className="particle-bg"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Discover Our Kottayam Clinic
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* 3D Flippable Card */}
          <motion.div
            className="lg:w-1/2 perspective-1000"
            style={{ perspective: "1000px" }}
            animate={isFlipped ? "back" : "front"}
            variants={cardVariants}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className="w-full h-full bg-[#FFFFFF] rounded-xl p-6 sm:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex flex-col justify-between backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Front Side */}
              {!isFlipped && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
                    MOB-EASE Rehab Kottayam
                  </h3>
                  <div className="space-y-4 text-[#1A2B6B]">
                    <div>
                      <p className="text-sm font-semibold">Address</p>
                      <p className="text-sm">
                        Hrudayam House
                        <br />
                        SH Mount P.O
                        <br />
                        Kumaranalloor, Kottayam
                        <br />
                        686006
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <p className="text-sm">: +91 8129125810</p>
                    </div>
                    {/* <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-sm">info@mobeaserehab.com</p>
                    </div> */}
                    <div>
                      <p className="text-sm font-semibold">Hours</p>
                      <p className="text-sm">
                        Mon-Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 9:00 AM - 2:00 PM
                        <br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#1A2B6B]/70 mt-4 italic">
                    Tap to see more details
                  </p>
                </div>
              )}

              {/* Back Side */}
              {isFlipped && (
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1A2B6B] mb-4">
                    Why Choose Us?
                  </h3>
                  <p className="text-sm md:text-base text-[#1A2B6B] mb-6">
                    At MOB-EASE Rehab, we’re committed to transforming lives
                    with personalized physiotherapy, innovative mobility
                    solutions, and compassionate care tailored to your needs.
                  </p>
                  <ul className="text-sm text-[#1A2B6B] list-disc list-inside space-y-2">
                    <li>
                      Expert team specializing in women’s health and pediatric
                      care
                    </li>
                    <li>Customized mobility aids for independence</li>
                    <li>Community-focused rehabilitation programs</li>
                  </ul>
                  <p className="text-xs text-[#1A2B6B]/70 mt-6 italic">
                    Tap to return
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Treasure Map Toggle */}
          <div className="lg:w-1/2">
            <motion.button
              className="w-full bg-[#FFE6F0] text-[#1A2B6B] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#E6F0FA] transition-all duration-300 mb-4"
              onClick={() => setShowMap(!showMap)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={showMap ? "Hide Treasure Map" : "Unfurl Treasure Map"}
            >
              {showMap ? "Hide  Map" : "Show on Map"}
            </motion.button>
            <motion.div
              className="parchment-map overflow-hidden"
              variants={mapVariants}
              animate={showMap ? "visible" : "hidden"}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.135763614157!2d76.5199643147982!3d9.591566293149777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzUnMjkuNiJOIDc2wrAzMScyMi4zIkU!5e0!3m2!1sen!2sin!4v1697681234567!5m2!1sen!2sin"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MOB-EASE Rehab Kottayam Clinic Location"
                className="relative z-10"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInformation;