"use client";
import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";
import CategoryCard from "../CategoryCard";
import Link from "next/link";
import NavLink from "./NavLink";

const ProductNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative z-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Trigger Link */}
      <NavLink href="/product" label="Product" />

      {/* Invisible bridge layer to prevent the menu from closing when moving cursor down */}
      {isHovered && <div className="absolute top-full left-0 w-full h-4" />}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="z-[100] absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl p-4 md:p-6 border border-gray-100 origin-top"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-5 gap-6 min-w-max max-w-225"
            >
              {/* Individual animated items */}
              <motion.div variants={cardVariants}>
                <CategoryCard />
              </motion.div>
              <motion.div variants={cardVariants}>
                <CategoryCard className="bg-[#F2FCE4]" />
              </motion.div>
              <motion.div variants={cardVariants}>
                <CategoryCard className="bg-[#FEEFEA]" />
              </motion.div>
              <motion.div variants={cardVariants}>
                <CategoryCard className="bg-[#FEEFEA]" />
              </motion.div>
              <motion.div variants={cardVariants}>
                <CategoryCard className="bg-[#FEEFEA]" />
              </motion.div>
              <motion.div variants={cardVariants}>
                <CategoryCard className="bg-[#FEEFEA]" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Animation settings for each individual card inside the mega menu
const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default ProductNav;
