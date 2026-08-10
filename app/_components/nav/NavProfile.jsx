"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import NavLink from "./NavLink";
import profileImg from "@/public/i-profile.svg";
import useOnOutsideClickClose from "@/app/_hooks/onOutsideClickClose";
import { AnimatePresence, motion } from "motion/react";

export const NavProfile = ({
  profileData = { name: "Abid", email: "abidrahman085@gmail.com" },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { btnRef, triggerRef } = useOnOutsideClickClose(isOpen, setIsOpen);

  const router = useRouter();
  const handleClick = (route) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <Image
        src={profileImg}
        alt="profile"
        className=" hidden lg:block cursor-pointer w-8"
        onClick={() => setIsOpen(!isOpen)}
        ref={btnRef}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            ref={triggerRef}
            className="absolute hidden lg:block  z-[9999] right-0 w-[340px] p-1 bg-[#36224B] shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.16),_0px_0px_1px_0px_rgba(0,0,0,0.40)] rounded-[12px] mt-2"
          >
            {profileData ? (
              <>
                <div className="flex gap-3 items-center p-3 text-white">
                  <Image src={profileImg} alt="user" />
                  <div>
                    <p className="text-sm font-extrabold">{profileData.name}</p>
                    <p className="text-xs text-[#D5BBF2]">
                      {profileData?.email}{" "}
                    </p>
                  </div>
                </div>

                <div className="w-full  flex flex-col text-white">
                  <button
                    onClick={() => handleClick("/profile")}
                    className="p-3 min-w-full hover:bg-[#4B3662] rounded-[8px] text-sm font-semibold text-left cursor-pointer"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => handleClick("/profile/order")}
                    className="p-3 min-w-full hover:bg-[#4B3662] rounded-[8px] text-sm font-semibold text-left cursor-pointer"
                  >
                    My Order
                  </button>
                  <button
                    onClick={() => handleClick("/profile/rewards")}
                    className="p-3 min-w-full hover:bg-[#4B3662] rounded-[8px] text-sm font-semibold text-left cursor-pointer"
                  >
                    Rewards
                  </button>

                  <button
                    onClick={async () => {
                      await logout();
                      setIsOpen(false);
                    }}
                    className="p-3 py-2.5 mt-2 min-w-full bg-[#4B3662] rounded-[8px] text-sm font-semibold border-none text-red-400 cursor-pointer active:scale-95 duration-300 transition-all"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="p-2.5 flex">
                <NavLink
                  href={"/login"}
                  label="Login"
                  className="p-3 min-w-full bg-[#4B3662] text-white rounded-[8px] text-sm font-semibold"
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
