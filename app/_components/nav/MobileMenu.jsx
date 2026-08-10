"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import menuIcon from "@/public/menu.svg";
import { createPortal } from "react-dom";
import Link from "next/link";
import useOnOutsideClickClose from "@/app/_hooks/onOutsideClickClose";
import { cn } from "@/app/_utils/utils";
// Import AnimatePresence
import { motion, AnimatePresence } from "motion/react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const triggerRef = useRef(null);

  useOnOutsideClickClose(triggerRef, btnRef, isOpen, setIsOpen);

  return (
    <div className="lg:hidden">
      <Image
        ref={btnRef} // Added ref here so outside click logic works properly
        src={menuIcon}
        alt="menu"
        className="size-7 hover:text-primary cursor-pointer active:scale-95 transition-transform"
        onClick={() => setIsOpen(true)}
      />

      {/* Wrap with AnimatePresence to enable exit animations */}

      {isOpen &&
        createPortal(
          <>
            {/* Animated Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-[999]"
              onClick={() => setIsOpen(false)}
            />

            {/* Animated Side Drawer */}
            <motion.div
              ref={triggerRef}
              initial={{ x: "-100%" }} // Percentage works cleaner across screen sizes
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a premium, snappy feel
              }}
              /* Removed "transition-all duration-300" to prevent conflicts with Framer Motion */
              className={cn(
                "fixed left-0 top-0 h-screen w-75 bg-white z-[999] shadow-2xl p-4 flex flex-col",
              )}
            >
              <div className="flex justify-between items-center">
                <img
                  src="https://inventory.niamahshop.com/_next/static/media/logo.114tgjs4-sixe.svg"
                  alt="logo"
                  className="w-26"
                />
              </div>

              <div
                className="flex flex-col gap-7 mt-20 
                    [&_a]:relative 
                    [&_a]:hover:text-primary
                    [&_a]:font-bold 
                    [&_a]:transition-transform 
                    [&_a]:duration-300
                    [&_a]:hover:scale-105
                    
                    /* Base line and circle styles using pseudo-elements */
                    [&_a::after]:content-['']
                    [&_a::after]:absolute
                    [&_a::after]:bottom-[-4px]
                    [&_a::after]:left-0
                    [&_a::after]:h-[2px]
                    [&_a::after]:w-0
                    [&_a::after]:bg-current
                    [&_a::after]:transition-all
                    [&_a::after]:duration-300
                    
                    /* Circle style at the end of the line */
                    [&_a::before]:content-['']
                    [&_a::before]:absolute
                    [&_a::before]:bottom-[-6px]
                    [&_a::before]:left-0
                    [&_a::before]:size-[6px]
                    [&_a::before]:rounded-full
                    [&_a::before]:bg-current
                    [&_a::before]:opacity-0
                    [&_a::before]:transition-all
                    [&_a::before]:duration-300
                    
                    /* Hover states */
                    [&_a:hover::after]:w-full
                    [&_a:hover::before]:left-full
                    [&_a:hover::before]:-translate-x-full
                    [&_a:hover::before]:opacity-100"
              >
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Product</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
              </div>
            </motion.div>
          </>,
          document.body,
        )}
    </div>
  );
};

export default MobileMenu;
