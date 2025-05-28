"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  const t = useTranslations("loading");
  console.log("Loading screen active");

  return (
    <div className="flex items-center justify-center h-screen bg-white text-primary">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center space-y-4"
      >
        {/* App Logo or Name (optional) */}
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          {t("title")}
        </motion.h1>

        {/* Spinner */}
        <PulseLoader color="#129990" size={12} />
      </motion.div>
    </div>
  );
}
