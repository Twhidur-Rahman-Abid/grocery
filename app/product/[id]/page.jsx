import Image from "next/image";
import React, { use } from "react";
import p1 from "@/public/images/p1.jpg";
import Description from "../_components/Description";
import {
  Button,
  ProductCard,
  Quantity,
  QueryBoundary,
} from "@/app/_components/common/Index";
import CustomSlider from "@/app/_components/home/Slide";
import { LightTwo } from "@/app/_components/common/svg";
import { fetchData } from "@/app/_fetch/fetchData";
import ProductImage from "../_components/ProductImage";
import { calculatePriceAndDiscountPercentage } from "@/app/_utils";

const page = ({ params }) => {
  const { id } = use(params) || {};
  const { data: product, status } =
    use(
      fetchData(`/inventory/public/available-stocks/${id}/`, { isBranch: true })
    ) || {};

  const {
    product_name,
    name,
    selling_price,
    description,
    product_img,
    category,
    product_web_images,
    is_buyOneGetOne,
    discount_percentage,
  } = product || {};
  console.log("==product==", product);

  // price and discount related calculation
  const { price, discountPercentage } =
    calculatePriceAndDiscountPercentage(product);

  return (
    <>
      <div className="pt-44 font-nexa bg-[#1E112C] pb-20 relative overflow-x-clip overflow-y-visible ">
        <LightTwo
          className={"absolute -top-52 left-1/2 -translate-x-1/2 z-0"}
        />
        <LightTwo
          className={"absolute  -left-34 top-1/2 -translate-y-1/2  z-0"}
        />
        <div className="grid xl:grid-cols-2   gap-10 container relative z-20 ">
          {/* Images */}
          <div className="min-w-fit z-10  w-full overflow-hidden  ">
            <ProductImage website_images={product_web_images} />
          </div>

          {/* Details */}
          <div className="z-10 ">
            {/*  offer, stock, share and Title  */}
            <div className="flex gap-2.5">
              {is_buyOneGetOne && (
                <span className="px-[18px] py-2 bg-[#09A45A] rounded-[32px]  text-sm font-extrabold">
                  1 Buy 1 Get
                </span>
              )}
              {discountPercentage && (
                <span className="px-[18px] py-2 bg-[#FE2CBF] rounded-[32px]  text-sm font-extrabold">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>

            <h1 className="text-[45px] mt-2.5 font-bold capitalize  leading-none line-clamp-2 whatespace-normal">
              {product_name || name}
            </h1>

            {/* Price */}
            <div className="mt-4 flex gap-4 items-center ">
              <p className="text-[48px] text-[#FF9923] font-[999]">{price}$</p>
              {discountPercentage && (
                <p className="text-[32px] text-[#FF9923]/50 font-[999] line-through">
                  {selling_price}$
                </p>
              )}
            </div>

            {/* Description */}
            <Description description={description} />

            {/* Quantity */}
            <Quantity price={price} product={product} />
          </div>
        </div>
      </div>
      <RelatedProduct category={category} />
    </>
  );
};

export default page;

function RelatedProduct({ category }) {
  const {
    data: { results, count } = {},
    status,
    message,
  } = use(
    fetchData(`/inventory/public/available-stocks/?category=${category}`, {
      isBranch: true,
    })
  ) || {};

  return (
    <section className="py-20 ">
      <div className="container mb-20">
        <div>
          <h1 className="heading-1 font-nexa">Related Products</h1>
        </div>
      </div>
      <div className={`${(count === 0 || status === "error") && "container"}`}>
        <QueryBoundary status={status} errorMsg={message} count={count}>
          <CustomSlider>
            {results?.map((p) => {
              return <ProductCard key={p.i} product={p} />;
            })}
          </CustomSlider>
        </QueryBoundary>
      </div>
    </section>
  );
}
