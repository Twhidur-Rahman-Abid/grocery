import React from "react";
import CategoryList from "./_components/home/CategoryList";
import Hero from "./_components/home/Hero";
import BestProduct from "./_components/home/BestProduct";
import OfferProduct from "./_components/home/OfferProduct";
import BuyOneGetOne from "./_components/home/BuyOneGetOne";
import ChooseUs from "./_components/home/ChooseUs";

const page = () => {
  return (
    <div className="py-8">
      <Hero />
      <CategoryList />
      <BestProduct />
      <OfferProduct />
      <ChooseUs />
      <BuyOneGetOne />
    </div>
  );
};

export default page;
