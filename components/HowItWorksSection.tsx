import StepOne from "@/public/steps/StepOne.png";
import StepTwo from "@/public/steps/StepTwo.png";
import StepThree from "@/public/steps/StepThreee.png";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import OneToOneDialog from "./Dialog/AppDIalog";

const HowItWorksSection = () => {
  const t = useTranslations("howItWorks");

  const StepCard = ({
    img,
    title,
    desc,
  }: {
    img: StaticImageData;
    title: string;
    desc: string;
  }) => (
    <div className="flex h-full flex-col items-center text-center">
      {/* Fixed-height image box ensures same starting point for titles */}
      <div className="relative w-full h-40 md:h-44 lg:h-48">
        <Image src={img} alt="Illustration" fill className="object-contain" />
      </div>

      {/* Fixed, consistent spacing below the image */}
      <div className="mt-6 space-y-2">
        <p className="text-2xl font-semibold text-primary">{title}</p>
        <p className="text-xl font-medium text-orange-400">{desc}</p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <StepCard
          img={StepOne}
          title={t("stepOne.title")}
          desc={t("stepOne.description")}
        />
        <StepCard
          img={StepTwo}
          title={t("stepTwo.title")}
          desc={t("stepTwo.description")}
        />
        <StepCard
          img={StepThree}
          title={t("stepThree.title")}
          desc={t("stepThree.description")}
        />
      </div>

      <div className="flex items-center justify-center mt-10">
        <OneToOneDialog />
      </div>
    </div>
  );
};

export default HowItWorksSection;
