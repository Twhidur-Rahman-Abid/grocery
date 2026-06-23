"use client";
import React, { useRef, useState } from "react";
import cartIcon from "@/public/cart.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import useOnOutsideClickClose from "@/app/_hooks/onOutsideClickClose";

const Carts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { btnRef, triggerRef } = useOnOutsideClickClose(isOpen, setIsOpen);
  return (
    <div className="relative z-100 grid place-item-center">
      <button
        ref={btnRef}
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={cartIcon}
          alt="search icon"
          className="w-6 cursor-pointer"
        />
        <div className="absolute -right-2.5 -top-2.5 size-5.5 rounded-full bg-orange-500 grid place-items-center">
          <span className="text-xs text-white">0</span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={triggerRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-[999] top-full right-0 w-75 shadow-md rounded-xl bg-white  p-4 max-h-[80vh] overflow-auto z-50 origin-top-right"
          >
            <h5 className="text-lg font-playfair text-primary font-bold">
              Carts
            </h5>
            {[...Array(2)].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex gap-5 items-center mt-6 w-ful">
                  <div className="size-12 rounded-sm bg-gray-300"></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex gap-2.5 justify-between">
                      <p className="text-base truncate line-clamp-1 leading-tight font-medium">
                        Product One
                      </p>
                      <span className="text-sm text-gray-600 leading-tight ">
                        $500
                      </span>
                    </div>
                    <div className="flex gap-2.5 justify-between">
                      <div className="flex gap-1.5 items-center py-px px-1.5 rounded-md border border-gray-300 text-sm min-w-20">
                        <button className="font-bold cursor-pointer active:scale-95 transition-all">
                          -
                        </button>
                        <span className="flex-1 text-center ">2</span>
                        <button className="font-bold cursor-pointer active:scale-95 transition-all">
                          +
                        </button>
                      </div>
                      <span className="text-sm">1000</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <button className="w-full py-2 px-4 bg-primary rounded-xl mt-5 font-bold text-white cursor-pointer hover:bg-white hover:border hover:border-primary hover:text-primary active:scale-95 transition-all duration-300 ease-in">
              Buy Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carts;
