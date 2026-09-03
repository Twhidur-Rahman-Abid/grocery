import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"; 

import qualityImg from "@/public/premium.svg";
import priceImg from "@/public/best-price.svg";
import deliveryImg from "@/public/delivery.svg";
import refundImg from "@/public/refund.svg";

const transitionEffect = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
};

const ChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FCFCFA] to-[#F4F6F2] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Decorative Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-transparent via-[#EBF2EC] to-transparent opacity-60 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section (Fade In Up) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ ...transitionEffect, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          {/* <span className="text-xs  font-semibold uppercase tracking-widest text-[#09A45A] bg-[#09A45A]/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            Our Core Values
          </span> */}
          <h2 className="text-4xl sm:text-5xl  font-dancing font-bold text-[#2C3E35] tracking-tight mb-5">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-[#09A45A] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            We deliver more than just groceries. Enjoy handpicked premium
            products, unbeatable prices, and lightning-fast delivery right to
            your doorstep.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center">
          {/* Left Side: 2 Premium Cards (Slide from Left) */}
          <div className="space-y-10 order-2 lg:order-1">
            {/* Card 1: Premium Quality */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ ...transitionEffect }}
              className="flex flex-col items-center text-center lg:items-end lg:text-right group bg-white/40 lg:bg-transparent p-6 lg:p-0 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none border border-white/60 lg:border-none shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white text-[#09A45A] rounded-2xl flex items-center justify-center shadow-md shadow-[#09A45A]/5 border border-gray-100/80 mb-5   group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 ease-out">
                <Image src={qualityImg} alt="quality" className="w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E35] mb-2 tracking-wide">
                Premium Quality
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                100% fresh, hygienic, and handpicked items sourced directly from
                trusted farms and brands.
              </p>
            </motion.div>

            {/* Card 2: Super Fast Delivery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ ...transitionEffect }}
              className="flex flex-col items-center text-center lg:items-end lg:text-right group bg-white/40 lg:bg-transparent p-6 lg:p-0 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none border border-white/60 lg:border-none shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white text-[#09A45A] rounded-2xl flex items-center justify-center shadow-md shadow-[#09A45A]/5 border border-gray-100/80 mb-5   group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 ease-out">
                <Image src={deliveryImg} alt="delivery" className="w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E35] mb-2 tracking-wide">
                Super Fast Delivery
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                No more waiting. Get your daily essentials delivered to your
                doorstep in the shortest possible time.
              </p>
            </motion.div>
          </div>

          {/* Center Side: Luxury Image Frame (Scale & Fade In) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-100px" }}
              transition={{ ...transitionEffect }}
              className="w-full max-w-[360px]"
            >
              <div className="relative w-full aspect-square flex items-center justify-center group/img">
                {/* Outer Rotating Soft Dashed Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-[#09A45A]/30 rounded-full animate-[spin_60s_linear_infinite] group-hover/img:border-[#09A45A]/50 transition-colors duration-500"></div>

                {/* Premium Inner Colored Glow */}
                <div className="absolute w-64 h-64 bg-gradient-to-tr from-[#E2EFE4] to-[#C9E2CD] rounded-full opacity-60 blur-xl group-hover/img:scale-110 transition-transform duration-700"></div>

                {/* Grocery Image */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: -2 }}
                  transition={transitionEffect}
                >
                  <img
                    src="https://i.pinimg.com/736x/62/a5/49/62a549187cefa8c13bf040c87450f0b1.jpg"
                    alt="Fresh Groceries Bag"
                    className="relative rounded-xl z-10 w-full h-auto object-contain max-h-[380px] filter drop-shadow-[0_20px_35px_rgba(44,62,53,0.15)] transform group-hover/img:scale-105 group-hover/img:-rotate-2 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: 2 Premium Cards (Slide from Right) */}
          <div className="space-y-10 order-3">
            {/* Card 3: Best Market Prices */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ ...transitionEffect }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group bg-white/40 lg:bg-transparent p-6 lg:p-0 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none border border-white/60 lg:border-none shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white text-[#09A45A] rounded-2xl flex items-center justify-center shadow-md shadow-[#09A45A]/5 border border-gray-100/80 mb-5   group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 ease-out">
                <Image src={priceImg} alt="price" className="w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E35] mb-2 tracking-wide">
                Best Market Prices
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Enjoy top-quality groceries at unbeatable prices with amazing
                daily discounts and offers.
              </p>
            </motion.div>

            {/* Card 4: Easy Return Policy */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ ...transitionEffect }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group bg-white/40 lg:bg-transparent p-6 lg:p-0 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none border border-white/60 lg:border-none shadow-sm lg:shadow-none hover:shadow-md lg:hover:shadow-none transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white text-[#09A45A] rounded-2xl flex items-center justify-center shadow-md shadow-[#09A45A]/5 border border-gray-100/80 mb-5   group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 ease-out">
                <Image src={refundImg} alt="refund" className="w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2C3E35] mb-2 tracking-wide">
                Easy Return Policy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Not satisfied with the quality? Enjoy hassle-free, instant
                returns with no questions asked.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
