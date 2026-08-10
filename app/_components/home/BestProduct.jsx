import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import lefImg from "@/public/leef.png";
import { cardVariants } from "@/app/_animation";
import Heading from "../Heading";
import VerticalProductCard from "../product/VerticalProductCard";

const BestProduct = () => {
  return (
    <section className="py-10 relative z-10 overflow-x-hidden w-full">
      <motion.div
        initial={{ x: 60, opacity: 0, scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3, margin: "-50px" }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute right-0 -top-15 -z-1"
      >
        <Image src={lefImg} alt="" className="rotate-180 w-[200px]" />
      </motion.div>
      <div className="container mb-8">
        <Heading>Best Product</Heading>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="container grid grid-cols-2 gap-6"
      >
        {[...Array(4)].map((v, i) => (
          <motion.div key={i} variants={cardVariants}>
            <VerticalProductCard />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BestProduct;
