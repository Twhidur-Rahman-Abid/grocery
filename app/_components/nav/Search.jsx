"use client";
import React, { useRef, useState } from "react";
import searchIcon from "@/public/search.svg";
import Image from "next/image";

import { motion, AnimatePresence } from "motion/react";
import useOnOutsideClickClose from "@/app/_hooks/onOutsideClickClose";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { btnRef, triggerRef } = useOnOutsideClickClose(isOpen, setIsOpen);

  return (
    <div className="relative z-100">
      <Image
        ref={btnRef}
        src={searchIcon}
        onClick={() => setIsOpen(!isOpen)}
        alt="search icon"
        className="w-6 cursor-pointer active:scale-95 transition-transform"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={triggerRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-[999] top-full right-0 w-75 shadow-md rounded-xl bg-white pt-0 p-4 max-h-80 overflow-auto z-50 origin-top-right"
          >
            <div className="flex gap-2.5 items-center pb-3 border-b border-gray-200 sticky top-0 bg-white pt-4">
              <input
                className="border border-gray-300 shadow-xs rounded-md w-full px-2 py-1.5  outline-0"
                type="text"
                placeholder="Search..."
              />
              <button className="">
                <Image
                  src={searchIcon}
                  alt="search icon"
                  className="w-6 cursor-pointer active:scale-95 transition-transform"
                />
              </button>
            </div>
            {[...Array(8)].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex gap-4 items-center mt-3">
                  <div className="size-10 rounded-sm bg-gray-300"></div>
                  <div>
                    <p className="text-base truncate line-clamp-1 leading-tight font-medium">
                      Product One
                    </p>
                    <span className="text-sm text-gray-600 leading-tight -mt-0.5">
                      $500
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
