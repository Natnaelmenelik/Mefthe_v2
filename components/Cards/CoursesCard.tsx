"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

type Course = {
  id: number;
  image: StaticImageData;
  courseTiitle: { en: string; am: string };
  instructor: { en: string; am: string };
  courseDescription: { en: string; am: string };
  date: { en: string; am: string };
  level: { en: string; am: string };
  duration: { en: string; am: string };
  isAvailable: boolean;
  link: string;
};

const CoursesCard = ({ course }: { course: Course }) => {
  const locale = useLocale();
  const t = useTranslations("courses");

  return (
    <div className="relative group">
      {/* ✅ OVERLAY only if not available */}
      {!course.isAvailable && (
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xl sm:text-2xl text-center font-bold text-white">
            {"Courses will be Available Soon"}
          </span>
        </div>
      )}

      <Card className="!rounded-lg !py-0 !border-white shadow-lg cursor-pointer">
        <CardHeader className="w-full !px-0 !py-0">
          <CardTitle>
            <div className="relative w-full h-[180px]">
              <Image
                className="rounded-t-lg object-cover"
                src={course.image}
                loading="lazy"
                alt="Course Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardTitle>
          <CardDescription className="mt-3 px-5 sm:!h-[205px] md:!h-[160px] lg:!h-[200px] xl:!h-[205px]">
            <h3 className="text-xl font-semibold text-black text-start">
              {course.courseTiitle[locale as "en" | "am"]}
            </h3>
            <p className="text-sm mt-2 text-black font-light">
              - {t("instructor")}: {course.instructor[locale as "en" | "am"]}
            </p>
            <p className="text-sm text-gray-500 mt-3">
              {course.courseDescription[locale as "en" | "am"]}
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent className="!px-0">
          <div className="flex gap-2 px-1 border-t-2 border-b-2 border-gray-200">
            <div className="w-1/3 flex flex-col items-center">
              <span className="text-sm text-gray-500">{t("date")}</span>
              <span className="text-sm font-semibold text-black">
                {course.date[locale as "en" | "am"]}
              </span>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <span className="text-sm text-gray-500">{t("level")}</span>
              <span className="text-sm font-semibold text-black">
                {course.level[locale as "en" | "am"]}
              </span>
            </div>
            <div className="w-1/3 flex flex-col items-center">
              <span className="text-sm text-gray-500">{t("duration")}</span>
              <span className="text-sm font-semibold text-black">
                {course.duration[locale as "en" | "am"]}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="mb-3">
          <Button
            variant={"outline"}
            className="w-full text-primary font-semibold"
          >
            <a href={course.link} target="blank">
              {" "}
              {t("enroll")}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CoursesCard;
