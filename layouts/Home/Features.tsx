import FeaturesCard from "@/components/Cards/FeaturesCard";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Vectors from "@/assets/VectorMain.png";

const Features = () => {
  const t = useTranslations("features");
  return (
    <>
      <section className="mt-20 p-4">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Left Side */}
            <div className="w-full lg:max-w-[550px]">
              <h1 className="text-primary font-bold text-3xl md:text-4xl text-center lg:text-start">
                {t("title")}
              </h1>

              <div className="mt-10 px-6 lg:px-0">
                <p className="text-2xl md:text-3xl text-center lg:text-start font-semibold">
                  {t("introduction")}
                </p>
              </div>

              <div className="mt-6 px-6 flex flex-col gap-3 lg:px-0 md:mt-10 ">
                {/* Feature 1 */}

                <div className="flex gap-5 items-center">
                  <MoveRight className="w-5 h-5 mt-1 shrink-0" />
                  <p className="text-start text-lg">{t("featureOne")}</p>
                </div>

                {/* Feature 2 */}

                <div className="flex gap-5 items-center">
                  <MoveRight className="w-5 h-5 mt-1 shrink-0" />
                  <p className="text-start text-lg">{t("featureTwo")}</p>
                </div>

                {/* Feature 3 */}

                <div className="flex gap-5 items-center">
                  <MoveRight className="w-5 h-5 mt-1 shrink-0" />
                  <p className="text-start text-lg">{t("featureThree")}</p>
                </div>

                <div className="flex gap-5 items-center">
                  <MoveRight className="w-5 h-5 mt-1 shrink-0" />
                  <p className="text-start text-lg font-bold">{t("more")}</p>
                  {/* <Image src={Vectors} alt="Vector" width={180} height={200} /> */}
                </div>
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
