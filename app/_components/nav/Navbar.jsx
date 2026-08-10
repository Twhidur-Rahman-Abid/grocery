import Link from "next/link";
import React from "react";

import Search from "./Search";
import Carts from "./Carts";
import MobileMenu from "./MobileMenu";
import ProductNav from "./ProductNav";
import NavLink from "./NavLink";
import logoImg from "@/public/logo.svg";
import Image from "next/image";
import { NavProfile } from "./NavProfile";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-[999] py-2.5 bg-white shadow-sm">
      <div className="container flex justify-between items-center">
        <MobileMenu />
        <Image src={logoImg} alt="logo" className="w-30 lg:w-34" />
        <div className="hidden lg:flex gap-20 ">
          <NavLink href="/" label="Home" />
          <ProductNav />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </div>

        <div className="flex gap-3 items-center ">
          <Search />
          <div className="w-0.5 h-6 bg-gray-700 rounded-full" />
          <Carts />
          <NavProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
