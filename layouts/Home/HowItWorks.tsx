import HowItWorksSection from "@/components/HowItWorksSection";
import { useTranslations } from "next-intl";

const HowItWorks = () => {
  const t = useTranslations("howItWorks");
  return (
    <>
      <section className="mt-24">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <h1 className="text-primary font-bold text-center text-3xl md:text-4xl">
            {t("title")}
          </h1>

          <div className="mt-10">
            <HowItWorksSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
