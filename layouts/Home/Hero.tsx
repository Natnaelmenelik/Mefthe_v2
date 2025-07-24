import { useTranslations } from "next-intl";
// import Illustration from "@/assets/Illustration.png";
import MeftheIllus from "@/public/MeftheIllus.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <>
      <section className="mt-32 p-4">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:mt-10 xl:md:mt-20 space-y-5">
              <h1 className="text-3xl font-bold text-center md:text-start md:text-4xl xl:text-5xl">
                <span className="text-primary">{t("titleStart")}</span>
                {t("titleEnd")}
              </h1>

              <p className="text-center md:text-start text-lg xl:text-xl">
                {t("description")}
              </p>

              <Button className="p-5 bg-primary text-lg text-white w-full md:w-40 font-semibold">
                {t("cta")}
              </Button>
            </div>
            <div className="m-auto">
              <Image src={MeftheIllus} alt="Ilustration" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
