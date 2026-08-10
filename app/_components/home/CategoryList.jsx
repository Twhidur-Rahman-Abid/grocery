import React from "react";
import CategoryCard from "../CategoryCard";
import Image from "next/image";
import groceryBg from "@/public/bg-2.jpg";
import Slider from "../Slider";

const CategoryList = () => {
  return (
    <section className="py-10 my-10 bg-white relative z-10 overflow-hidden">
      <Image
        src={groceryBg}
        alt=""
        className="absolute right-0 -z-1 bottom-0 w-full object-cover opacity-30"
      />

      <Slider scrollAmount={130}>
        <div className=" flex gap-6 lg:gap-15 no-scrollbar">
          <CategoryCard className="bg-[#FFE9E2]" />
          <CategoryCard className="bg-[#FBD8E2]" />
          <CategoryCard className="bg-[#FFEDCB]" />
          <CategoryCard className="bg-[#E2F2D1]" />
          <CategoryCard className="bg-[#E3E3EF]" />
          <CategoryCard className="bg-[#DFF5EB]" />
        </div>
      </Slider>
    </section>
  );
};

export default CategoryList;
