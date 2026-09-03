import React from "react";
import CategoryList from "./_components/home/CategoryList";
import Hero from "./_components/home/Hero";
import BestProduct from "./_components/home/BestProduct";
import OfferProduct from "./_components/home/OfferProduct";
import ChooseUs from "./_components/home/ChooseUs";
import Marquee from "./_components/home/Marquee";
import NewArrivals from "./_components/home/NewArrivals";

const page = () => {
  return (
    <div className="py-8">
      <Hero />
      <CategoryList />
      <BestProduct />
      <Marquee />
      <OfferProduct />
      <ChooseUs />
      <NewArrivals />
    </div>
  );
};

export default page;
