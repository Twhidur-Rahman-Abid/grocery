"use client";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import Loading from "@/app/_components/Loading";
// import { postUserRelatedData, putUserRelatedData } from "@/app/_actions";

import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const UserInfoForm = ({ initialData }) => {
  const { name, email, phone } = initialData || {};

  const [state, action, pending] = useActionState(async () => {}, undefined);

  // const [state, action, pending] = useActionState(async (_, formData) => {
  //   return await putUserRelatedData({
  //     url: `/client/update-profile/`,
  //     body: formData,
  //     revalidate: "/profile",
  //   });
  // });

  // useEffect(() => {
  //   if (state?.status === "success") {
  //     toast.success("User info updated successfully!");
  //   } else if (state?.status === "error") {
  //     toast.error(state?.message || "Failed to update user info.");
  //   }
  // }, [state]);

  return (
    <form action={action} className="mt-6 md:mt-10 space-y-6 md:space-y-10 ">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <Input label="First Name" name="name" defaultValue={name} />
        <Input label="Last Name" name="email" defaultValue={email} />
      </div>
      <Input label="Phone Number" name="phone" defaultValue={phone} />
      <Button
        type="submit"
        className={"min-w-full rounded-xl"}
        disabled={pending}
      >
        {pending ? <Loading /> : "Update"}
      </Button>
    </form>
  );
};

export default UserInfoForm;
