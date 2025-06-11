"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// FAQ data with schema markup
const faqs = [
  {
    question: "How do I choose the right mobility aid for my needs?",
    answer:
      "At MOB-EASE Rehab, we start with a comprehensive physiotherapy assessment to understand your mobility goals. Our experts then recommend customized aids, like wheelchairs or walkers, and provide training to ensure comfort and independence. Schedule a consultation to find the perfect fit!",
    id: "faq-1",
  },
  {
    question: "What are the clinic hours for MOB-EASE Rehab in Kottayam?",
    answer:
      "Our Kottayam clinic is open Monday to Friday from 9:00 AM to 6:00 PM and Saturday from 9:00 AM to 2:00 PM. We’re closed on Sundays. Book an appointment via WhatsApp or our contact form for your convenience.",
    id: "faq-2",
  },
  {
    question: "What women’s health physiotherapy services do you offer?",
    answer:
      "We provide pre- and post-natal physiotherapy, pelvic floor rehabilitation, and holistic wellness programs. Our hybrid (online and offline) sessions are designed to empower women at every stage of life. Contact us to learn more!",
    id: "faq-3",
  },
  {
    question: "How does pediatric rehabilitation work for my child?",
    answer:
      "Our pediatric specialists create tailored plans to support your child’s mobility and development. From custom mobility aids to therapy sessions, we focus on independence and fun, ensuring your child thrives. Let’s discuss your child’s needs today!",
    id: "faq-4",
  },
  {
    question:
      "Can I join your e-learning courses as a healthcare professional?",
    answer:
      "Yes! Our online and offline certificate courses are open to professionals and students, covering physiotherapy and related fields. Visit our website or contact us to explore course options and enrollment details.",
    id: "faq-5",
  },
];

// FAQ schema markup
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Ripple effect CSS
const rippleStyles = `
  .ripple-card {
    position: relative;
    overflow: hidden;
    background: #FFFFFF;
    border: 2px solid #FFE6F0;
    border-radius: 12px;
    cursor: pointer;
  }
  .ripple-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(26, 43, 107, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ripple 1.5s ease-out;
    pointer-events: none;
  }
  @keyframes ripple {
    0% { width: 0; height: 0; opacity: 0.5; }
    100% { width: 500px; height: 500px; opacity: 0; }
  }
`;

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedId, setExpandedId] = useState(null);
  const [ripple, setRipple] = useState(null);

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for FAQ cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
    hover: { scale: 1.05, boxShadow: "0 8px 24px rgba(26, 43, 107, 0.2)" },
  };

  // Animation variants for answer
  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleClick = (id, e) => {
    setExpandedId(expandedId === id ? null : id);
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      key: Date.now(),
    });
    setTimeout(() => setRipple(null), 1500); // Clear ripple after animation
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#FFFFFF] overflow-hidden"
      aria-label="FAQ Section"
    >
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SEO Meta Tags */}
      <head>
        <title>FAQs | MOB-EASE Rehab Physiotherapy Kottayam</title>
        <meta
          name="description"
          content="Find answers to common questions about MOB-EASE Rehab’s physiotherapy services in Kottayam, including mobility aids, clinic hours, and more."
        />
        <meta
          name="keywords"
          content="MOB-EASE Rehab FAQs, physiotherapy Kottayam, mobility aids Kottayam, women’s health physiotherapy"
        />
      </head>

      {/* Ripple Effect */}
      <style>{rippleStyles}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B6B] text-center mb-10 md:mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Your Questions, Answered
        </motion.h2>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="ripple-card p-4 sm:p-6 relative"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              onClick={(e) => handleClick(faq.id, e)}
              role="button"
              aria-expanded={expandedId === faq.id}
              aria-label={`Toggle ${faq.question}`}
            >
              {ripple && expandedId === faq.id && (
                <span
                  className="ripple-effect"
                  style={{ top: ripple.y, left: ripple.x }}
                  key={ripple.key}
                />
              )}
              <h3 className="text-base sm:text-lg font-semibold text-[#1A2B6B] mb-2">
                {faq.question}
              </h3>
              <motion.div
                className="overflow-hidden"
                variants={answerVariants}
                animate={expandedId === faq.id ? "visible" : "hidden"}
              >
                <p className="text-sm md:text-base text-[#1A2B6B]">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
