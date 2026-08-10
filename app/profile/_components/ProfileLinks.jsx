"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const profileLinks = [
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "My order",
    href: "/profile/order",
  },
  {
    label: "Rewards",
    href: "/profile/rewards",
  },
];

const ProfileLinks = () => {
  const pathName = usePathname();
  return (
    <div className="w-75 overflow-hidden rounded-[20px]  flex flex-row md:flex-col  bg-gray-50 shadow divide-x-2 md:divide-x-0 md:divide-y-2 divide-primary">
      {profileLinks.map((link) => {
        const { label, href } = link;
        return (
          <Link
            href={href}
            key={href}
            className={`p-5 w-full whitespace-nowrap  text-base font-extrabold ${
              pathName === href && "bg-primary text-white"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
