// import StepOne from "@/public/steps/stepOne.png";
// import StepTwo from "@/public/steps/stepTwo.png";
// import StepThree from "@/public/steps/stepThreee.png";
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import OneToOneDialog from "./Dialog/AppDIalog";

// const HowItWorksSection = () => {
//   const t = useTranslations("howItWorks");
//   return (
//     <>
//       <div>
//         <div className="grid gap-15 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           <div>
//             <div className="flex flex-col items-center h-full gap-5">
//               <Image
//                 src={StepOne}
//                 alt="Illustration"
//                 width={200}
//                 height={200}
//                 loading="lazy"
//               />

//               <p className="text-2xl text-center font-semibold text-primary">
//                 {t("stepOne.title")}
//               </p>

//               <p className="text-xl text-center font-medium text-orange-400">
//                 {t("stepOne.description")}
//               </p>
//             </div>
//           </div>

//           {/* step-two */}
//           <div>
//             <div className="flex flex-col items-center h-full gap-5">
//               <Image
//                 src={StepTwo}
//                 alt="Illustration"
//                 width={175}
//                 height={200}
//                 loading="lazy"
//               />

//               <p className="text-2xl text-center font-semibold text-primary">
//                 {t("stepTwo.title")}
//               </p>

//               <p className="text-xl text-center font-medium text-orange-400">
//                 {t("stepTwo.description")}
//               </p>
//             </div>
//           </div>

//           {/* step-three */}
//           <div>
//             <div className="flex flex-col items-center h-full gap-5">
//               <Image
//                 src={StepThree}
//                 alt="Illustration"
//                 width={175}
//                 height={200}
//                 loading="lazy"
//               />

//               <p className="text-2xl text-center font-semibold text-primary">
//                 {t("stepThree.title")}
//               </p>

//               <p className="text-xl text-center font-medium text-orange-400">
//                 {t("stepThree.description")}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center mt-10">
//           {<OneToOneDialog />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HowItWorksSection;

import StepOne from "@/public/steps/StepOnee.png";
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
        <Image
          src={img}
          alt="Illustration"
          fill
          className="object-contain"
          priority={false}
        />
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
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import OneToOneDialog from "./Dialog/AppDIalog";

// const HowItWorksSection = () => {
//   const t = useTranslations("howItWorks");

//   const StepCard = ({
//     imgSrc,
//     title,
//     desc,
//   }: {
//     imgSrc: string;
//     title: string;
//     desc: string;
//   }) => (
//     <div className="flex h-full flex-col items-center text-center">
//       {/* Fixed-height image box ensures same starting point for titles */}
//       <div className="relative w-full h-40 md:h-44 lg:h-48">
//         <Image
//           src={imgSrc} // served from /public
//           alt={title}
//           fill
//           className="object-contain"
//           sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
//           priority={false}
//         />
//       </div>

//       {/* Fixed, consistent spacing below the image */}
//       <div className="mt-6 space-y-2">
//         <p className="text-2xl font-semibold text-primary">{title}</p>
//         <p className="text-xl font-medium text-orange-400">{desc}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
//         <StepCard
//           imgSrc="/steps/stepOnee.png"
//           title={t("stepOne.title")}
//           desc={t("stepOne.description")}
//         />
//         <StepCard
//           imgSrc="/steps/stepTwo.png"
//           title={t("stepTwo.title")}
//           desc={t("stepTwo.description")}
//         />
//         <StepCard
//           imgSrc="/steps/stepThreee.png"
//           title={t("stepThree.title")}
//           desc={t("stepThree.description")}
//         />
//       </div>

//       <div className="flex items-center justify-center mt-10">
//         <OneToOneDialog />
//       </div>
//     </div>
//   );
// };

// export default HowItWorksSection;
