"use client";
import React from "react";

// import { CartContext } from "@/app/_context/cartContext";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { cn } from "../_utils/utils";

export const Actions = ({ product, price, className }) => {
  //   const { onCartAdd } = use(CartContext);
  const onCartAdd = () => {};
  const router = useRouter();

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCartAdd({ ...product, price });
  };
  const toBuy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCartAdd({ ...product, price });
    router.push("/checkout");
  };
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Button type="button" size="sm" onClick={addToCart}>
        Add Card
      </Button>
      <Button
        className={"bg-amber-500 border-0  text-white "}
        type="button"
        size="sm"
        outline
        onClick={toBuy}
      >
        Buy Now
      </Button>
    </div>
  );
};
