"use client";
import { Button } from "@/components/ui/button";
import { Menu, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import React, { useState } from "react";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  console.log(toggleSidebar);
  const t = useTranslations("navbar");

  return (
    <>
      <nav className="sticky p-5 bg-background">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px] flex justify-between">
          {/* Left Side */}
          <div>
            <h1 className="text-3xl font-semibold lg:text-4xl text-primary">
              {t("home")}
            </h1>
          </div>
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button
              variant={"outline"}
              className="text-lg font-semibold px-4 py-5 rounded-sm cursor-pointer"
            >
              En
            </Button>
            <div className="hidden md:block space-x-4">
              <Button className="text-white font-semibold text-lg px-4 py-5 rounded-sm cursor-pointer">
                {t("signup")}
              </Button>
              <Button
                variant={"outline"}
                className=" text-lg font-semibold px-4 py-5 rounded-sm cursor-pointer"
              >
                {t("login")}
              </Button>
            </div>

            <div className="block md:hidden">
              <Menu className="cursor-pointer" onClick={handleToggleSidebar} />
            </div>
          </div>

          {/* Moblie Sidebar */}
          {toggleSidebar && (
            <div className="absolute top-0 bg-[#fafdff] left-0 p-5  w-full h-screen md:hidden">
              <div className="max-w-md mx-auto sm:max-w-xl">
                {/* Navbar */}
                <div className="flex justify-between">
                  <h1 className="text-3xl text-primary font-bold">Express</h1>

                  <div className="flex items-center space-x-3">
                    <Button
                      variant={"outline"}
                      className="text-lg font-bold px-4 py-5 rounded-sm cursor-pointer"
                    >
                      En
                    </Button>

                    <XIcon
                      className="cursor-pointer"
                      aria-label="close menu"
                      onClick={handleToggleSidebar}
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="mt-10 flex flex-col space-y-3">
                  <Button
                    variant={"outline"}
                    className="w-full text-lg font-bold px-4 py-5 rounded-sm cursor-pointer"
                  >
                    Log In
                  </Button>
                  <Button className="text-white text-lg font-bold px-4 py-5 rounded-sm cursor-pointer">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
