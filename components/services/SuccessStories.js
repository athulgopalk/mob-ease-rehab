"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Placeholder image for fallback
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";

// Success stories data
const successStories = [
  {
    name: "Priya Menon",
    title: "Regaining Confidence with Women’s Physiotherapy",
    description:
      "After struggling with post-natal pelvic pain, Priya found relief through MOB-EASE’s tailored women’s health program. Our physiotherapy sessions helped her regain strength and confidence.",
    image: "/images/priya-menon.jpg",
    alt: "Priya Menon, women’s physiotherapy patient at MOB-EASE Rehab",
    href: "/success-stories/priya-menon",
  },
  {
    name: "Arjun Nair",
    title: "A Child’s Journey to Mobility",
    description:
      "Arjun, a 5-year-old with cerebral palsy, made remarkable progress with our pediatric rehabilitation. His custom gait trainer and therapy sessions boosted his independence.",
    image: "/images/arjun-nair.jpg",
    alt: "Arjun Nair, pediatric physiotherapy patient at MOB-EASE Rehab",
    href: "/success-stories/arjun-nair",
  },
  {
    name: "Vijay Thomas",
    title: "Back to Work with Neuro Rehabilitation",
    description:
      "After a stroke, Vijay regained mobility through MOB-EASE’s neuro rehabilitation. Our personalized care plan and assistive devices helped him return to his job.",
    image: "/images/vijay-thomas.jpg",
    alt: "Vijay Thomas, neuro rehabilitation patient at MOB-EASE Rehab",
    href: "/success-stories/vijay-thomas",
  },
];

const SuccessStories = () => {
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
      aria-label="Success Stories Section"
    >
      {/* SEO Meta Tags */}
      <Head>
        <title>Success Stories | MOB-EASE Rehab Kottayam</title>
        <meta
          name="description"
          content="Discover inspiring success stories from MOB-EASE Rehab in Kottayam, showcasing how our physiotherapy services transform lives through women’s health, pediatric rehabilitation, and more."
        />
        <meta
          name="keywords"
          content="women’s physiotherapy Kottayam, pediatric rehabilitation Kottayam, neuro rehabilitation, MOB-EASE Rehab success stories"
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
          Transforming Lives: Our Success Stories
        </motion.h2>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-[#FFFFFF] rounded-xl p-4 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(26,43,107,0.15)] transition-all duration-300"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL={placeholderImage}
                  priority={index === 0}
                  onError={() =>
                    console.warn(`Failed to load image for ${story.name}`)
                  }
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1A2B6B] mb-2">
                {story.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-[#1A2B6B] mb-4 flex-grow">
                {story.description}
              </p>

              {/* Read More Link */}
              {/* <Link href={story.href}>
                <motion.span
                  className="inline-block text-[#1A2B6B] font-semibold text-sm uppercase tracking-wide hover:text-[#FFE6F0] transition-all duration-300"
                  whileHover={{ x: 5 }}
                  aria-label={`Read more about ${story.name}'s success story`}
                >
                  Read More →
                </motion.span>
              </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
