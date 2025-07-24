"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { courses } from "@/data/courses";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../ui/button";

const CoursesCard = () => {
  const locale = useLocale();
  const t = useTranslations("courses");
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Card className="!rounded-lg !py-0 !border-white shadow-lg cursor-pointer">
            <CardHeader className="w-full !px-0 !py-0">
              <CardTitle>
                <Image
                  className="rounded-t-lg"
                  src={course.image}
                  alt="Course Image"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                  priority
                />
              </CardTitle>
              <CardDescription className="mt-3 px-5 lg:!h-[180px]">
                <h3 className="text-xl font-normal text-black text-start">
                  {course.courseTiitle[locale as "en" | "am"]}
                </h3>

                <p className="text-sm mt-2 text-black font-light">
                  - {t("instructor")}:{" "}
                  {course.instructor[locale as "en" | "am"]}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  {course.courseDescription[locale as "en" | "am"]}
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="!px-0">
              <div className="flex gap-2 px-1 border-t-2 border-b-2 border-gray-200">
                {/**Date */}
                <div className="w-1/3 flex flex-col items-center">
                  <span className="text-sm text-gray-500 mx-auto">
                    {t("date")}:
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {course.date[locale as "en" | "am"]}
                  </span>
                </div>
                {/* Level */}
                <div className="w-1/3 flex flex-col items-center">
                  <span className="text-sm text-gray-500">{t("level")}:</span>
                  <span className="text-sm font-semibold text-black">
                    {course.level[locale as "en" | "am"]}
                  </span>
                </div>
                {/* Duration */}
                <div className="w-1/3 flex flex-col items-center">
                  <span className="text-sm text-gray-500">
                    {t("duration")}:
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {course.duration[locale as "en" | "am"]}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mb-3 ">
              <Button
                variant={"outline"}
                className="w-full text-primary font-semibold"
              >
                {t("enroll")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
};

export default CoursesCard;
