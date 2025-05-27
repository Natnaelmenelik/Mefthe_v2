"use client";
import { useTranslations } from "next-intl";
import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <>
      <section className="mt-20 p-4">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <div className="grid gris-cols md:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className="w-full">
              <h1 className="text-primary font-bold text-3xl md:text-4xl text-start">
                {t("title")}
              </h1>

              <div className="mt-10 px-6 lg:px-0 md:mt-10 space-y-4">
                <p className="font-bold text-start text-2xl">
                  {t("description")}
                </p>
              </div>
              <div className="mt-10 space-y-5">
                <p className="text-xl">
                  <span className="font-bold">{t("phone")}:</span> +1 (123)
                  456-7890
                </p>
                <p className="text-xl">
                  <span className="font-bold">{t("email")}:</span>{" "}
                  info@consultagency.com
                </p>
                <p className="text-xl">
                  <span className="font-bold">{t("address")}:</span> 123
                  Business Street, Suite 100, City, State, ZIP
                </p>
                <p className="text-xl">
                  <span className="font-bold">{t("website")}:</span>{" "}
                  www.consultagency.com
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
