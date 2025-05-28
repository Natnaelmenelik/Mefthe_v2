import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
      <section className="mt-20 p-4">
        <div className="border-t-1 border-t-primary max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <div className="flex flex-col gap-12 md:gap-24 py-8 md:py-12">
            {/* Upper Side */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="w-full">
                <h1 className="text-3xl">{t("motto")}</h1>
              </div>
              <div className="w-full lg:max-w-[450px] space-y-4 md:ml-5">
                <p>{t("consultation")}</p>
                <a href="https://raphaphysiotherapy.com/">
                  <Button variant={"outline"}>{t("consultationButton")}</Button>
                </a>
              </div>
            </div>

            {/* Lower Side */}
            <div className="flex flex-col md:flex-row gap-8 ">
              <div className="w-full">
                <h1 className="text-5xl font-bold text-primary">Methe</h1>
              </div>
              <div className="w-full lg:max-w-[450px] space-y-4 md:ml-5">
                <div className="flex items-center space-x-4">
                  <a href="">
                    <BsTelegram className="w-9 h-9" />
                  </a>
                  <a href="">
                    <PiInstagramLogoFill className="w-10 h-10" />
                  </a>
                  <a href="">
                    <FaLinkedin className="w-9 h-9" />
                  </a>
                  <a href="">
                    <AiFillTikTok className="w-10 h-10" />
                  </a>
                </div>
                {/* Copyright */}
                <div>
                  <p>
                    Copyright @{new Date(Date.now()).getFullYear()} Methe. All
                    Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
