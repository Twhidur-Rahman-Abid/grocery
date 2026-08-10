"use client";
import React, { useState } from "react";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import Link from "next/link";
import Image from "next/image";
import userImg from "@/public/user.svg";
import passwordImg from "@/public/password.svg";
import eyeImg from "@/public/eye.svg";
import emailImg from "@/public/email.svg";
import eyeLockImg from "@/public/eye-lock.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full h-[91vh] grid place-items-center">
      <div className="bg-gray-50 rounded-2xl shadow-2xl p-6 space-y-6 md:min-w-[450px]">
        <h3 className="text-2xl font-bold text-center">Bismillah! Register</h3>

        {/* EMAIL / USERNAME */}
        <Input
          name="Name"
          placeholder="Name"
          left={<Image src={userImg} alt="" className="w-5" />}
        />
        <Input
          name="email"
          placeholder="Email or phone"
          left={<Image src={emailImg} alt="" className="w-5" />}
        />

        {/* PASSWORD */}
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          left={<Image src={passwordImg} alt="" className="w-6" />}
          right={
            <button
              type="button"
              className="cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <Image src={eyeLockImg} className="w-6" alt="" />
              ) : (
                <Image src={eyeImg} className="w-6" alt="" />
              )}
            </button>
          }
        />

        {/* BUTTON */}
        <Button className="rounded-xl min-w-full">Login</Button>

        {/* LINKS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/reset-password" className="text-primary">
            Forgot Password?
          </Link>

          <p className="text-base">
            Don’t have an account?{" "}
            <Link href="/register" className="text-primary">
              Register!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
