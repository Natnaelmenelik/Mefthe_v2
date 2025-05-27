import { useTranslations } from "next-intl";
import TestimonialCarousel from "@/components/Carousel/TestimonialCarousel";

const Testimonials = () => {
  const t = useTranslations("testimonials");
  return (
    <>
      <section className="mt-24">
        <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
          <h1 className="text-primary font-bold text-center text-3xl md:text-4xl">
            {t("title")}
          </h1>

          <p className="mt-8 text-center text-lg">{t("description")}</p>

          <div className="mt-10">
            <TestimonialCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
