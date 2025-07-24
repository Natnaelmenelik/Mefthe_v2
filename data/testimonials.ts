import testimonial1 from "../public/testimonials/testimonial1.jpg";
import testimonial2 from "../public/testimonials/testimonial2.jpg";
import testimonial3 from "../public/testimonials/testimonial3.jpg";
import { TestimonialProps } from "@/utils/types";

export const testimonials: TestimonialProps[] = [
  {
    id: 1,
    image: testimonial1,
    name: {
      en: "Dr. Sarah Thompson ",
      am: "ዶ/ር ሳራ ቶምፕሰን",
    },
    testimony: {
      en: "Methe transformed the way I teach and learn physiotherapy. The simulations are incredibly lifelike.",
      am: "መፍትሄ የፊዚዮተራፒ ትምህርትን እንዴት እንደማማረርና መማር አለው በሙሉ ቀየረው። ስምላምዎቹ እጅግ በሕይወት የተመሰሉ ናቸው።",
    },
    stars: 5,
    role: {
      en: "Student",
      am: "ተማሪ",
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
      am: "እንደ ተማሪ፣ መፍትሄ በኢትዮጵያ ሌላ ቦታ ማግኘት የማይቻል ጥራት ያላቸውን መረጃዎች አስተዋውቀኝ።",
    },
    stars: 4,
    role: {
      en: "Doctor",
      am: "ዶክተር",
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
      am: "በመፍትሄ እንደ ፊዚዮተራፒስት ክሊኒካዊ ክህሎቶቼን በፍጥነት አሻሻልኩ። ለእያንዳንዱ ፊዚዮተራፒስት የሚጠበቅ መድረክ ነው።",
    },
    stars: 5,
    role: {
      en: "Doctor",
      am: "ዶክተር",
    },
  },
];
