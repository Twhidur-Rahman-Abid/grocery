"use client";

import { useState, useRef } from "react";

export function Collapse({
  title,
  children,
  defaultOpen = false,
  icon = true,
  isDisabled = false,
  className,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <details
      open={isOpen && !isDisabled}
      className={`group  disabled:cursor-not-allowed`}
      disabled={isDisabled}
      onClick={(e) => {
        if (isDisabled) e.preventDefault();
      }}
    >
      <summary
        disabled={isDisabled}
        onClick={(e) => {
          e.preventDefault();
          if (!isDisabled) setIsOpen(!isOpen);
        }}
        className={`flex justify-between items-center w-full  cursor-pointer  list-none ${className} ${
          isDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        {title}

        {icon && (
          <svg
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width={6}
            height={10}
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              d="M1 9L5 5L1 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </summary>

      <div
        ref={contentRef}
        // style={{ maxHeight }}
        className={`transition-all duration-300 ease-in-out  px-4 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </details>
  );
}
