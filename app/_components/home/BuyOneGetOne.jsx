import React from "react";
import ProductCard from "../ProductCard";
import Image from "next/image";
import groceryBg from "@/public/grocery-bg-2.png";
import Heading from "../Heading";
import * as motion from "motion/react-client";
import { cardVariants } from "@/app/_animation";

const BuyOneGetOne = () => {
  return (
    <section className="py-15 md:py-20 relative z-10 ">
      <motion.div
        initial={{ x: -120, y: 0, opacity: 0, scale: 0.9 }}
        whileInView={{ x: 0, y: 20, opacity: 1, scale: 1 }}
        viewport={{ amount: 0.3, margin: "-50px" }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src={groceryBg}
          alt=""
          className="absolute left-0  opacity-20 w-[200px]"
        />
      </motion.div>
      <div className="container mb-8">
        <Heading>Buy One Get One</Heading>
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
        className="container grid grid-cols-4 gap-6"
      >
        {[...Array(4)].map((v, i) => (
          <motion.div key={i} variants={cardVariants}>
            <ProductCard is_buyOneGetOne />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BuyOneGetOne;
