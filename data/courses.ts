import instructor1 from "../assets/instructors/instructor1.jpg";
import instructor2 from "../assets/instructors/instructor2.jpg";
import instructor3 from "../assets/instructors/instructor3.jpg";
import instructor4 from "../assets/instructors/instructor4.jpg";
import { CourseProps } from "@/utils/types";

export const courses: CourseProps[] = [
  {
    id: 1,
    image: instructor1,
    instructor: {
      en: "Dr. Selam Tesfaye",
      am: "ዶ/ር ሰላም ተስፋዬ",
    },
    courseTiitle: {
      en: "Introduction to Physiotherapy",
      am: "የፊዚዮቴራፒ መግቢያ ትምህርት",
    },
    courseDescription: {
      en: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore. bus dam et aut officiis debitis incididunt labore",
      am: "እንደ መሠረታዊ ትምህርት መነሻ፣ የዚህ ጽሑፍ ይዘት አልባ ነው። በስራ እና በማሰልጠኛ ዓላማ የተቀመጠ ተጠቃሚ ማስታወቂያ ነው። ",
    },
    date: {
      en: "12 Jan 2025",
      am: "4 ጥር 2017",
    },
    level: {
      en: "Beginner",
      am: "መጀመሪያ",
    },
    duration: {
      en: "4 weeks",
      am: "4 ሳምንታት",
    },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 2,
    image: instructor2,
    instructor: {
      en: "Mr. Yohannes Bekele",
      am: "አቶ ዮሐንስ በቀለ",
    },
    courseTiitle: {
      en: "Postural Care and Ergonomics",
      am: "የአካል ቅርፅ እንክብካቤ እና ኤርጎኖሚክስ",
    },
    courseDescription: {
      en: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore. bus dam et aut officiis debitis incididunt labore",
      am: "እንደ መሠረታዊ ትምህርት መነሻ፣ የዚህ ጽሑፍ ይዘት አልባ ነው። በስራ እና በማሰልጠኛ ዓላማ የተቀመጠ ተጠቃሚ ማስታወቂያ ነው። ",
    },
    date: {
      en: "25 Jan 2025",
      am: "17 ጥር 2017",
    },
    level: {
      en: "Advanced",
      am: "ከፍተኛ",
    },
    duration: {
      en: "4 weeks",
      am: "4 ሳምንታት",
    },
    requirements: {
      en: "Familiarity with basic ergonomic principles and postural assessment.",
      am: "የመሠረታዊ ኤርጎኖሚክ መሠረቶች እና የአካል ቅርፅ ጥናት መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 3,
    image: instructor3,
    instructor: {
      en: "Dr. Kalkidan Mekonnen",
      am: "ዶ/ር ቃልኪዳን መኮንን",
    },
    courseTiitle: {
      en: "Rehabilitation Techniques",
      am: "የመድኃኒታዊ መልሶ ማገዝ ቴክኒኮች",
    },
    courseDescription: {
      en: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore bus dam et aut officiis debitis incididunt labore.",
      am: "እንደ መሠረታዊ ትምህርት መነሻ፣ የዚህ ጽሑፍ ይዘት አልባ ነው። በስራ እና በማሰልጠኛ ዓላማ የተቀመጠ ተጠቃሚ ማስታወቂያ ነው። ",
    },
    date: {
      en: "19 Mar 2025",
      am: "	10 መጋ 2017",
    },
    level: {
      en: "Intermediate",
      am: "መካከለኛ",
    },
    duration: {
      en: "4 weeks",
      am: "4 ሳምንታት",
    },
    requirements: {
      en: "Basic knowledge of rehabilitation principles and techniques.",
      am: "የመሠረታዊ መድኃኒታዊ መልሶ ማገዝ መሠረቶች እና ቴክኒኮች መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 4,
    image: instructor4,
    instructor: {
      en: "Dr. Binyam Getachew",
      am: "ዶ/ር ቢንያም ጌታቸው",
    },
    courseTiitle: {
      en: "Pain Management in Physiotherapy",
      am: "በፊዚዮቴራፒ ውስጥ የህመም አስተዳደር",
    },
    courseDescription: {
      en: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore. bus dam et aut officiis debitis incididunt labore",
      am: "እንደ መሠረታዊ ትምህርት መነሻ፣ የዚህ ጽሑፍ ይዘት አልባ ነው። በስራ እና በማሰልጠኛ ዓላማ የተቀመጠ ተጠቃሚ ማስታወቂያ ነው። ",
    },
    date: {
      en: "03 Feb 2025",
      am: "26 ጥር 2017",
    },
    level: {
      en: "Beginner",
      am: "መጀመሪያ",
    },
    duration: {
      en: "4 weeks",
      am: "4 ሳምንታት",
    },
    requirements: {
      en: "Understanding of basic pain mechanisms and physiotherapy interventions.",
      am: "የመሠረታዊ የህመም መንገዶች እና ፊዚዮቴራፒ እንቅስቃሴዎች መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },
];
