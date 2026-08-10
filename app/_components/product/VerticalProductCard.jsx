import Image from "next/image";
import React from "react";

import { Actions } from "@/app/_components/ProductCardClient";
import Link from "next/link";
import p1 from "@/public/p1.png";

const VerticalProductCard = ({
  product,
  width = 362,
  height = 315,
  discountPercentage,
  is_buyOneGetOne = false,
}) => {
  const {
    id,
    product_img,
    product_name = "",
    name,
    selling_price,
    discount_price,

    branch_discount_percentage,
    branch_discount_price,
    product_web_images = [],
  } = product || {};

  // price and discount related calculation
  let discountPrice = null;

  // console.log("website_images[0]", website_images, website_images[0]);
  let Discount;
  if (is_buyOneGetOne) {
    Discount = (
      <span className="px-3 py-1.5 bg-[#09A45A] rounded-[32px] text-white  text-sm font-extrabold">
        Buy 1 Get 1
      </span>
    );
  } else if (discountPercentage) {
    Discount = (
      <span className="px-3 py-1.5 bg-[#FE2CBF] rounded-[32px] text-white  text-sm font-extrabold">
        {discountPercentage}% OFF
      </span>
    );
  }
  return (
    <>
      <Link href={`/products/${id}`}>
        <div className=" w-full bg-white rounded-[20px] ">
          <div className="relative z-10 p-5 group">
            <div className=" grid grid-cols-7 gap-6 justify-between items-center">
              <div className="flex gap-2 items-center absolute top-4 left-6">
                {Discount}
              </div>
              <div className="col-span-3">
                <Image
                  src={p1}
                  alt="product"
                  // width={width}
                  // height={height}
                  className="w-full aspect-square object-cover rounded-[20px]"
                />
              </div>

              <div className="col-span-4  w-full ">
                <h4 className="text-xl font-bold text-gray-800 line-clamp-3 ">
                  {"Gawa Ghee 1kg"}
                </h4>
                <div className="flex gap-2.5 items-center ">
                  <p className="text-xl font-extrabold text-primary">100$</p>
                  {discountPrice && (
                    <p className="text-base font-extrabold line-through">
                      ({selling_price}$)
                    </p>
                  )}
                </div>
                <Actions
                  className={"flex-row w-full [&_button]:flex-1 mt-5"}
                  product={product}
                  price={100}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VerticalProductCard;
