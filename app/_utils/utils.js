import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getCategoryColor = (index) => {
  const colors = [
    "#FFE9E2",
    "#FBD8E2",
    "#FFEDCB",
    "#E2F2D1",
    "#E3E3EF",
    "#DFF5EB",
  ];

  return colors[index % colors.length];
};
