import { useLocale } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { Star } from "lucide-react";
import BigQuote from "@/public/bigquote.png";

const TestimonialCarousel = () => {
  const locale = useLocale();

  return (
    <>
      <div className="px-5 mx-auto">
        <Carousel className="h-[1050px] md:h-[620px] w-full">
          <CarouselContent className="mx-auto mb-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="bg-primary rounded-md !pl-0"
              >
                <div className="h-[980px] md:h-[540px] grid md:grid-cols-2 gap-8 p-9">
                  <div className="w-full max-w-[500px] mx-auto">
                    <Image
                      src={BigQuote}
                      alt="Testimonial Image"
                      loading="lazy"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col md:my-auto gap-5 md:gap-8">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.stars }, (_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-500 w-5 h-5 fill-yellow-500"
                        />
                      ))}
                    </div>

                    <p className="text-white text-start text-2xl lg:text-3xl font-semibold">
                      {testimonial.testimony[locale as "en" | "am"]}
                    </p>

                    <div>
                      <p className="mt-6 text-white text-xl">
                        {testimonial.name[locale as "en" | "am"]}
                      </p>

                      <p className="text-slate-300 text-lg">
                        {testimonial.role[locale as "en" | "am"]}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2">
            <CarouselPrevious
              // size={"default"}
              className="text-primary hover:bg-primary hover:text-white w-11 h-11"
            />

            <CarouselNext className="text-primary hover:bg-primary hover:text-white w-11 h-11" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialCarousel;
