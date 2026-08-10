import React from "react";
import ProductCard from "../ProductCard";
import Image from "next/image";
import groceryBg from "@/public/grocery-bg.png";
import Heading from "../Heading";
import * as motion from "motion/react-client";
import { cardVariants } from "@/app/_animation";

const OfferProduct = () => {
  return (
    <section className="py-15 md:py-20 relative z-10 ">
      {/* <div className="absolute -z-1 -right-5 -top-5 w-[20vw] h-[20vh] max-w-75 max-h-75 rounded-full bg-[#09A45A] blur-[155px]" /> */}
      <Image
        src={groceryBg}
        alt=""
        className="absolute right-0 bottom-6 w-full object-cover opacity-20"
      />
      <div className="relative container mb-8">
        <Heading>Discount Product</Heading>
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
            <ProductCard discountPercentage={10 * i + 1} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OfferProduct;
