"use client";

import Button from "@/app/_components/Button";
import Loading from "@/app/_components/Loading";
import React, { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const OrderCancel = ({ status, id }) => {
  const [state, action, pending] = useActionState(async () => {}, undefined);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(`status updated`);
    }
    if (state?.status === "error") {
      toast.error(state?.message || "There was an error!");
    }
  }, [state]);
  return (
    <form action={action} className="mt-4">
      <input
        type="text"
        hidden
        name="order_tracking_status"
        defaultValue={"cancelled"}
      />
      <Button
        type="submit"
        disabled={status === "out_for_delivery" || pending}
        className={
          "bg-red-500 border-red-500 text-white mt-4 w-full disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
        }
      >
        {pending ? <Loading /> : "Order Cancel"}
      </Button>
    </form>
  );
};

export default OrderCancel;
