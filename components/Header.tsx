"use client";

import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("navbar");

  return (
    <header className="p-5">
      <h1 className="text-3xl font-bold text-primary">{t("title")}</h1>
    </header>
  );
}
