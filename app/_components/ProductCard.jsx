import Image from "next/image";
import React from "react";

import { Actions } from "./ProductCardClient";
import Link from "next/link";
import p2 from "@/public/p2.png";

const ProductCard = ({
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
        <div className=" w-full ">
          <div className="relative z-10 hover:border-2 rounded-[20px] border-[#807C84] duration-300 transition-all group">
            <div className="m-2">
              <div className="flex gap-2 items-center absolute top-4 left-6">
                {Discount}
              </div>

              <Image
                src={p2}
                alt="product"
                width={width}
                height={height}
                className="w-full aspect-square object-cover rounded-[20px]"
              />

              <div>
                <p className="text-base font-bold mt-5  line-clamp-2">
                  {"Gawa Ghee 1kg"}
                </p>
                <div className="flex gap-2.5 items-center">
                  <p className="text-xl font-extrabold">100$</p>
                  {discountPrice && (
                    <p className="text-base font-extrabold line-through">
                      ({selling_price}$)
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute inset-0  bg-black/20 backdrop-blur-[1px] hidden rounded-[20px]  group-hover:grid place-items-center duration-300 transition-all">
              <Actions product={product} price={100} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
