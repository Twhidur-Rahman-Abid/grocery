import React from "react";
import ctg from "@/public/category.png";
import cover from "@/public/cover.png";
import Image from "next/image";
import HeroSlider from "./HeroSliders";
const Hero = () => {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-6 w-full">
      {/* Left Column (Category) */}
      <div className="hidden lg:block col-span-3 bg-white rounded-2xl p-3 shadow-sm h-full">
        <div className="bg-primary text-white text-center p-2.5 rounded-md">
          <h4 className="text-lg font-bold">Featured Category</h4>
        </div>
        <div className="mt-4 space-y-2.5">
          {[...Array(6)].map((v, i) => (
            <div
              key={i}
              className="flex gap-2.5 items-center border-b border-gray-200 pb-1.5"
            >
              <Image
                src={ctg}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-sm bg-gray-50"
              />

              <p className="text-base">Categroy</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (Banner Image) */}
      <div className="col-span-12 lg:col-span-9 w-full">
        {/* <Image
          src={cover}
          className="w-full h-full object-cover rounded-3xl"
          alt="Featured Banner"
        /> */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
