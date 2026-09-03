"use client";

import { motion } from "motion/react";

const items = [
  "https://backoffice.ghorerbazar.com/brand_images/RNTIU1763611802.png",
  "https://backoffice.ghorerbazar.com/brand_images/7hNKq1768887947.png",
  "https://backoffice.ghorerbazar.com/brand_images/8Gpl21757919440.png",
  "https://backoffice.ghorerbazar.com/brand_images/8matO1757919401.png",
  "https://backoffice.ghorerbazar.com/brand_images/lCfRt1759553456.png",
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-10 md:py-20 bg-[#FBF9F5]">
      {/* Left Glow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent" />

      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Change duration to speed up or slow down
            repeat: Infinity,
          }}
          className="flex shrink-0 items-center gap-12 pr-12"
        >
          {/* Render duplicated list side-by-side */}
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex h-20 w-32 shrink-0 items-center justify-center"
            >
              <img
                src={item}
                alt={`Brand ${index + 1}`}
                className="max-h-16 max-w-28 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
