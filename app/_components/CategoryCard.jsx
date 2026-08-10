import { cn } from "@/app/_utils/utils";
import Image from "next/image";
import React from "react";
import categoryImg from "@/public/category.png";

const CategoryCard = ({ className = "" }) => {
  return (
    <div className="min-w-[130px] w-[130px] cursor-pointer group">
      <div
        className={cn(
          " rounded-3xl rounded-tl-md bg-[#FFF3FF] grid place-items-center",
          className,
        )}
      >
        <Image
          src={categoryImg}
          width={100}
          height={100}
          alt=""
          className="object-contain rounded-4xl rounded-tl-md group-hover:scale-120 transition-all ease-out duration-200"
        />
      </div>
      <h4 className="mt-2.5 text-lg font-bold">Honey</h4>
    </div>
  );
};

export default CategoryCard;
