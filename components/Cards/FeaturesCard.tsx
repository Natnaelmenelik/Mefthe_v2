"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/data/features";
import { Award, BrainCircuit, Languages, Stethoscope } from "lucide-react";
import { useLocale } from "next-intl";
import { JSX } from "react";

const icons: { [key: number]: JSX.Element } = {
  1: <BrainCircuit color="#129990" size={60} />,
  2: <Languages color="#129990" size={60} />,
  3: <Award color="#129990" size={60} />,
  4: <Stethoscope color="#129990" size={60} />,
};
const FeaturesCard = () => {
  const locale = useLocale();
  return (
    <>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`${index % 2 === 1 ? "md:mt-16" : ""}`}
        >
          <Card className="!rounded-none py-6 !border-white shadow-lg hover:space-y-2 hover:!border-primary">
            <CardHeader>
              <CardTitle className="flex justify-center lg:justify-start items-center space-x-4">
                {icons[feature.id as number]}
              </CardTitle>
              <CardDescription className="mt-4">
                <h3 className="text-xl font-bold text-black text-center lg:text-start">
                  {feature.title[locale as "en" | "am"]}
                </h3>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center lg:text-start">
              {feature.description[locale as "en" | "am"]}
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
};

export default FeaturesCard;
