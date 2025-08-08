import { useTranslations } from "next-intl";
import MeftheIllus from "@/public/MeftheIllus.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="mt-32 p-4">
      <div className="max-w-md mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1350px]">
        <div className="grid gap-5 md:grid-cols-2">
          {/* LEFT: Text & Accordion */}
          <div className="md:mt-10 xl:md:mt-20 space-y-5 order-2 md:order-1">
            <h1 className="text-3xl font-bold text-center md:text-start md:text-4xl xl:text-5xl">
              <span className="text-primary">{t("titleStart")}</span>
              {t("titleEnd")}
            </h1>

            <p className="text-center md:text-start text-lg xl:text-xl">
              {t("description")}
            </p>

            <div id="accordion" className="-mt-5 -m">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="data-[state=open]:hidden [&>svg]:hidden w-full">
                    <p className="text-xl md:text-lg font-normal underline w-full text-center md:text-start">
                      See More...
                    </p>
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="text-center md:text-start text-lg xl:text-xl mt-4 mb-4">
                      Mefthe is your go-to online platform for parenting
                      education. We offer expert-led, evidence-based courses
                      designed to help parents support their child’s emotional,
                      social, and intellectual development anytime, anywhere.
                    </p>

                    {/* SEE LESS Trigger (bottom of open content) */}
                    <AccordionTrigger className="text-lg underline [&>svg]:hidden w-full">
                      <span className="w-full text-xl md:text-lg font-normal block text-center md:text-start">
                        See Less...
                      </span>
                    </AccordionTrigger>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Button className="p-5 bg-primary text-lg text-white w-full md:w-40 font-semibold">
              {t("cta")}
            </Button>
          </div>

          {/* RIGHT: Image */}
          <div className="m-auto order-1 md:order-2">
            <Image src={MeftheIllus} alt="Illustration" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
