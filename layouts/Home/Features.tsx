import FeaturesCard from "@/components/Cards/FeaturesCard";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("features");
  return (
    <>
      <section className="mt-20 p-4">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Left Side */}
            <div className="w-full lg:max-w-[500px]">
              <h1 className="text-primary font-bold text-3xl md:text-4xl text-center lg:text-start">
                {t("title")}
              </h1>

              <div className="mt-6 px-6 lg:px-0 md:mt-10 space-y-4">
                <p className="text-center lg:text-start text-lg">
                  {t("descriptionOne")}
                </p>
                <p className="text-center lg:text-start text-lg">
                  {t("descriptionTwo")}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid md:grid-cols-2 gap-5">
              <FeaturesCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
