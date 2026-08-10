"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import Loading from "@/app/_components/Loading";
import Modal from "@/app/_components/Modal";
import React, { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddressForm = ({ isOpen, setIsOpen, editable }) => {
  const isEditable = editable?.id;

  const [state, action, pending] = useActionState(async () => {}, undefined);

  // const [state, action, pending] = useActionState(async (_, formData) => {
  //   if (isEditable) {
  //     return await addressAction({
  //       url: `/client/addresses/${isEditable}/`,
  //       body: formData,
  //       revalidate: "/profile",
  //       edit: true,
  //     });
  //   } else {
  //     return await addressAction({
  //       url: `/client/addresses/`,
  //       body: formData,
  //       revalidate: "/profile",
  //       edit: false,
  //     });
  //   }
  // });

  const {
    name,
    email,
    company,
    phone,
    address,
    city,
    zip_code,
    state: stateValue,
    is_default,
  } = (state?.prev && Object.fromEntries(state?.prev)) || {};

  const {
    name: editableFirstName,
    email: editableLastName,
    company: editableCompany,
    phone: editablePhone,
    address: editableAddress,
    city: editableCity,
    zip_code: editableZipCode,
    state: editableState,
    is_default: editableIsDefault,
  } = editable || {};

  useEffect(() => {
    if (state?.status === "success") {
      setIsOpen(false);
      toast.success(editable ? "Address edited!" : "Address added!");
    }

    if (state?.status === "error") {
      toast.error(state?.message || "There was an error");
    }
  }, [state]);
  return (
    <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="grid place-items-center relative border-b-2 mb-5 border-[#7B6198] pb-5 text-2xl font-bold ">
            <p>{isEditable ? "Edit" : "Add New"} Address</p>
            <span
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer right-0 top-0 rotate-45 text-5xl leading-0"
            >
              +
            </span>
          </div>
          <form action={action} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Input
                label="First Name"
                name="name"
                required
                defaultValue={editableFirstName || name}
              />
              <Input
                label="Last Name"
                name="email"
                defaultValue={editableLastName || email}
              />
            </div>

            <Input
              label="Company Name"
              name="company"
              defaultValue={editableCompany || company}
            />
            <Input
              label="Phone Number"
              name="phone"
              required
              defaultValue={editablePhone || phone}
            />
            <Input
              label="Address "
              name="address"
              required
              defaultValue={editableAddress || address}
            />

            <div className="flex flex-col md:flex-row gap-6">
              <Input
                label="City"
                name="city"
                required
                defaultValue={editableCity || city}
              />
              <Input
                label="State"
                name="state"
                required
                defaultValue={editableState || stateValue}
              />
              <Input
                label="Zip Code"
                name="zip_code"
                required
                defaultValue={editableZipCode || zip_code}
              />
            </div>

            <div className="flex gap-2.5 items-center">
              <input
                type="checkbox"
                name="is_default"
                defaultChecked={is_default || editableIsDefault}
                id=""
                value={true}
                className="size-5 bg-none border border-[#7B6198]"
              />
              <p>Make this my default address</p>
            </div>
            <Button className={"w-full"} type="submit" disabled={pending}>
              {pending ? <Loading /> : "Submit"}
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddressForm;
