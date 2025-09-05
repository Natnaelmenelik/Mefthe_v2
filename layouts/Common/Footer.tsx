import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { MapPin } from "lucide-react";

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
                <a href="https://raphaphysiotherapy.com/" target="blank">
                  <Button variant={"outline"}>{t("consultationButton")}</Button>
                </a>
              </div>
            </div>

            {/* Lower Side */}
            <div className="flex flex-col md:flex-row gap-8 ">
              <div className="w-full">
                <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-primary">
                  {t("title")}
                </h1>
              </div>
              <div className="w-full lg:max-w-[450px] space-y-4 md:ml-5">
                <div className="flex justify-center md:justify-start items-center space-x-4">
                  <a href="https://t.me/Raphaphsiotherapy" target="blank">
                    <BsTelegram className="w-9 h-9" />
                  </a>
                  <a
                    href="https://www.instagram.com/raphaphysiotheraphy/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
                    target="blank"
                  >
                    <PiInstagramLogoFill className="w-10 h-10" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/rapha-physiotherapy-center/?originalSubdomain=et"
                    target="blank"
                  >
                    <FaLinkedin className="w-9 h-9" />
                  </a>

                  <a
                    href="https://web.facebook.com/raphaphysiotherapycenter/"
                    target="blank"
                  >
                    <FaFacebook className="w-9 h-9" />
                  </a>
                  <a
                    href="https://www.tiktok.com/link/v2?aid=1988&lang=en&scene=bio_url&target=https%3A%2F%2Ft.me%2FRaphaphsiotherapy"
                    target="blank"
                  >
                    <AiFillTikTok className="w-10 h-10" />
                  </a>
                </div>
                {/* Copyright */}
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex gap-2">
                    <MapPin /> <p>{t("location")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>
            {t("copyrightFront")} @{new Date().getFullYear()}{" "}
            {t("copyrightBack")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
