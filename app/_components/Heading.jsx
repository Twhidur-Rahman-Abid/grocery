import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/app/_utils/utils";

const Heading = ({ className, children }) => {
  return (
    <motion.h3
      initial={{ x: -120, opacity: 0, scale: 0.9 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      viewport={{ amount: 0.3, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "text-4xl md:text-[42px] lg:text-[50px] font-bold font-dancing italic text-primary",
        className,
      )}
    >
      {children}
    </motion.h3>
  );
};

export default Heading;
