"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const images = [
  "https://backoffice.ghorerbazar.com/banner/kdvcy1786290971-light-1000x400.png",
  "https://backoffice.ghorerbazar.com/banner/ZZzfq1785823845-light-1000x400.png",
  "https://backoffice.ghorerbazar.com/banner/I8mKy1785823826-light-1000x400.png",
  "https://backoffice.ghorerbazar.com/banner/LJMEm1785838010-dark-1000x400.png",
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),

  center: {
    x: 0,
  },

  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};

export default function HeroSlider() {
  const [[active, direction], setActive] = useState([0, 0]);

  const nextSlide = () => {
    setActive(([prev]) => [(prev + 1) % images.length, 1]);
  };

  const prevSlide = () => {
    setActive(([prev]) => [(prev - 1 + images.length) % images.length, -1]);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-50 md:h-64  lg:h-full w-full overflow-hidden rounded-xl lg:rounded-2xl">
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.img
          key={active}
          src={images[active]}
          alt={`Hero ${active + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              duration: 0.6,
              ease: [0.32, 0.72, 0, 1],
            },
          }}
          className="absolute inset-0 h-50 md:h-64 md:h-full w-full object-cover md:object-cover rounded-xl lg:rounded-2xl"
        />
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex size-8 md:size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 cursor-pointer hover:border"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex size-8 md:size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 cursor-pointer hover:border"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Bottom Navigation */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActive([index, index > active ? 1 : -1]);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className="flex h-4 w-4 items-center justify-center cursor-pointer"
          >
            <motion.span
              className="block rounded-full bg-white"
              animate={{
                width: active === index ? 22 : 7,
                height: 7,
                opacity: active === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.25 }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
