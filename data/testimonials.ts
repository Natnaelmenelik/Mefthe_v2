import testimonial1 from "../public/testimonials/testimonial1.jpg";
import testimonial2 from "../public/testimonials/testimonial2.jpg";
import testimonial3 from "../public/testimonials/testimonial3.jpg";
import { TestimonialProps } from "@/utils/types";

export const testimonials: TestimonialProps[] = [
  {
    id: 1,
    image: testimonial1,
    name: {
      en: "Saron Belachew ",
      am: "ሳሮን በላቸው",
    },
    testimony: {
      en: "Methe transformed the way I teach and learn physiotherapy. The simulations are incredibly lifelike.",
      am: "መፍትሄ ፊዚዮቴራፒን የማስተምርበትን እና የምማርበትን መንገድ ለውጦታል። ምሳሌዎቹ በማይታመን ሁኔታ መሬት ጋር ካለው ጋር የሚመስሉ ናቸው።",
    },
    stars: 5,
    role: {
      en: "Parent",
      am: "ወላጅ",
    },
  },
  {
    id: 2,
    image: testimonial3,
    name: {
      en: "Abel Tadesse",
      am: "አቤል ታደሰ",
    },
    testimony: {
      en: "As a student, Methe gave me access to quality resources I couldn’t find anywhere else in Ethiopia.",
      am: "ተማሪ እንደመሆኔ፣ መፍትሄ ኢትዮጵያ ውስጥ ሌላ ቦታ ማግኘት የማልችለውን ጥራት ያለው ግብአት እንዳገኝ ረድቶኛል።",
    },
    stars: 4,
    role: {
      en: "Parent",
      am: "ወላጅ",
    },
  },
  {
    id: 3,
    image: testimonial2,
    name: {
      en: "Hanna Lemma",
      am: "ሀና ለማ",
    },
    testimony: {
      en: "I improved my clinical skills quickly using Methe. It’s a must-have platform for every physiotherapist.",
      am: "መፍትሄ በመጠቀም የክሊኒካዊ ችሎታዬን በፍጥነት አሻሽያለሁ። ለእያንዳንዱ የፊዚዮቴራፒ ባለሙያም የግድ የምጋብዘው የመማሪያ መረብ ነው።",
    },
    stars: 5,
    role: {
      en: "Parent",
      am: "ወላጅ",
    },
  },
];
