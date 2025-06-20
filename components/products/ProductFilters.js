"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import Head from "next/head";

// Filter options
const filterOptions = {
  category: [
    { value: "all", label: "All Categories" },
    { value: "gantry-hoists", label: "Gantry Hoists" },
    { value: "paediatric-solutions", label: "Paediatric Solutions" },
    { value: "stair-lifts", label: "Stair Lifts" },
    { value: "wheelchairs", label: "Wheelchairs" },
  ],
  price: [
    { value: "all", label: "All Prices" },
    { value: "0-5000", label: "₹0 - ₹5,000" },
    { value: "5000-10000", label: "₹5,000 - ₹10,000" },
    { value: "10000-20000", label: "₹10,000 - ₹20,000" },
    { value: "20000+", label: "₹20,000+" },
  ],
  useCase: [
    { value: "all", label: "All Use Cases" },
    { value: "home", label: "Home" },
    { value: "clinic", label: "Clinic" },
    { value: "travel", label: "Travel" },
  ],
};

// Dropdown animation CSS
const dropdownStyles = `
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #FFE6F0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

const ProductFilters = ({ onFilterChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    useCase: "all",
  });
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle filter change
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setOpenDropdown(null);
    onFilterChange({ ...filters, [key]: value });
  };

  // Dynamic meta title based on filters
  const generateMetaTitle = () => {
    const categoryLabel =
      filterOptions.category.find((c) => c.value === filters.category)?.label ||
      "Mobility Solutions";
    return `${categoryLabel} for ${
      filters.useCase === "all"
        ? "All Uses"
        : filterOptions.useCase.find((u) => u.value === filters.useCase)?.label
    } | MOB-EASE Rehab`;
  };

  // Animation variants for filter bar
  const filterBarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{generateMetaTitle()}</title>
        <meta
          name="description"
          content={`Browse ${
            filters.category === "all"
              ? "mobility solutions"
              : filters.category.replace("-", " ")
          } at MOB-EASE Rehab in Kottayam, tailored for ${
            filters.useCase === "all" ? "all uses" : filters.useCase
          }.`}
        />
        <meta
          name="keywords"
          content={`mobility aids Kottayam, ${filters.category.replace(
            "-",
            " "
          )} Kottayam, physiotherapy products, MOB-EASE Rehab`}
        />
      </Head>

      <section
        className="relative w-full bg-[#FFFFFF] py-4 sticky top-0 z-20 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
        aria-label="Product Filters Section"
      >
        {/* Dropdown Styles */}
        <style>{dropdownStyles}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={filterBarVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {Object.keys(filterOptions).map((key) => (
              <div key={key} className="relative w-full sm:w-auto">
                <motion.button
                  className="flex items-center justify-between w-full sm:w-48 px-4 py-2 rounded-lg bg-[#E6F0FA] text-[#1A2B6B] font-medium text-sm hover:bg-[#FFE6F0] transition-all duration-300"
                  onClick={() =>
                    setOpenDropdown(openDropdown === key ? null : key)
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Filter by ${key}`}
                >
                  <span>
                    {
                      filterOptions[key].find(
                        (opt) => opt.value === filters[key]
                      )?.label
                    }
                  </span>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </motion.button>
                {openDropdown === key && (
                  <motion.div
                    className="dropdown-content mt-2"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {filterOptions[key].map((option) => (
                      <button
                        key={option.value}
                        className="w-full px-4 py-2 text-left text-sm text-[#1A2B6B] hover:bg-[#FFE6F0] transition-all duration-200"
                        onClick={() => handleFilterChange(key, option.value)}
                        aria-label={`Select ${option.label}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductFilters;
