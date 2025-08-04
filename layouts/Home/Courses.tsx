import CoursesCard from "@/components/Cards/CoursesCard";
import { useTranslations } from "next-intl";

const Courses = () => {
  const t = useTranslations("courses");
  return (
    <section className="mt-20 p-4">
      <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
        {/* Upper Side */}
        <div className="px-12">
          <h1 className="text-primary font-bold text-center text-3xl md:text-4xl">
            {t("title")}
          </h1>

          <p className="mt-8 text-center text-lg">{t("description")}</p>
        </div>

        {/* Lower Side */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <CoursesCard />
        </div>
      </div>
    </section>
  );
};

export default Courses;
