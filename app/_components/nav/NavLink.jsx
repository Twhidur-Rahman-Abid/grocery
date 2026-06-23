"use client";

import { cn } from "@/app/_utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href = "/", label = "", className }) => {
  const pathname = usePathname();

  // Fixed active route matching evaluation
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "py-1 cursor-pointer font-semibold hover:text-primary inline-block relative group",
        className,
        isActive && "text-primary",
      )}
    >
      <span>{label}</span>

      {/* Dual line custom structure */}
      <div className="flex justify-between mt-0.5 w-full overflow-hidden">
        {/* Long bar */}
        <div
          className={cn(
            "h-[2.5px] bg-current rounded-full transition-all duration-300 ease-in-out",
            isActive ? "w-[70%]" : "w-0 group-hover:w-[70%]",
          )}
        />
        {/* Short bar */}
        <div
          className={cn(
            "h-[2.5px] bg-current rounded-full transition-all duration-300 ease-in-out",
            isActive ? "w-[20%]" : "w-0 group-hover:w-[20%]",
          )}
        />
      </div>
    </Link>
  );
};

export default NavLink;
