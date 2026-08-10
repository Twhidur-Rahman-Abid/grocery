"use client";

import { useRef } from "react";
import Heading from "./Heading";

export default function Slider({
  scrollAmount = 200,
  title = "Slider",
  children,
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      {/* Header with arrows */}
      <div className="flex mb-8 justify-between items-center">
        <Heading>{title}</Heading>
        <div className="flex gap-4">
          <button onClick={() => scroll("left")} className="cursor-pointer">
            <svg
              width={24}
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
            </svg>
          </button>
          <button onClick={() => scroll("right")} className="cursor-pointer">
            <svg
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              viewBox="0 0 512 512"
            >
              <path d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="w-full scroll overflow-x-auto whitespace-nowrap pb-10 no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}
