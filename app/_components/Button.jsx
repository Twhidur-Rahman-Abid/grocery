import React from "react";
import { cn } from "../_utils/utils";

const Button = ({
  outline = false,
  type = "button",
  children,
  size = "sm",
  className,
  ...props
}) => {
  let sizeClass = "px-8 py-5 text-xl font-extrabold";

  switch (size) {
    case "sm":
      sizeClass = "px-4 py-2.5 text-sm font-bold";
      break;

    default:
      break;
  }

  return (
    <button
      className={cn(
        "rounded-[100px] cursor-pointer  transition-all duration-300 border-2 border-primary active:scale-95 text-white",
        !outline
          ? "bg-primary hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary"
          : "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        sizeClass,
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
