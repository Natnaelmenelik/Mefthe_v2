import C1 from "../public/courses/C1.jpg";
import C2 from "../public/courses/C2.jpg";
import C3 from "../public/courses/C3.jpg";
import C4 from "../public/courses/C4.jpg";
import C5 from "../public/courses/C5.jpg";
import C6 from "../public/courses/C6.jpg";
import C7 from "../public/courses/C7.jpg";
import C8 from "../public/courses/C8.jpg";
import C9 from "../public/courses/C9.jpg";
import C10 from "../public/courses/C10.jpg";
import C11 from "../public/courses/C11.jpg";
import C12 from "../public/courses/C12.jpg";

import { CourseProps } from "@/utils/types";

export const courses: CourseProps[] = [
  {
    id: 1,
    image: C1,
    isAvailable: true,
    instructor: {
      en: "Dr. MINTESNOT TSADIKU",
      am: "ዶ/ር ምንተስኖት ጻዲቁ",
    },
    courseTiitle: {
      en: "Speech Therapy for Toddlers",
      am: "የንግግር ሕክምና ለታዳጊዎች",
    },
    courseDescription: {
      en: "Learn effective, practical speech therapy techniques designed specifically for toddlers. Equip yourself with tools to support your child’s speech and language development.",
      am: "በተለይ ለታዳጊ ህጻናት የተነደፉ ውጤታማ እና ተግባራዊ የንግግር ህክምና ዘዴዎችን ይማሩ። የልጅዎን የንግግር እና የቋንቋ እድገትን የሚረዱ መሳሪያዎችን እራስዎን ያስታጥቁ።",
    },
    date: {
      en: "7 Aug 2025",
      am: "1 ነሃሴ 2017",
    },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "https://learning.acrossexpress.com/login#signup",
  },

  {
    id: 2,
    image: C2,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Prenatal & Postnatal Physiotherapy",
      am: "ከወሊድ በፊት እና ከወሊድ በኋላ ፊዚዮቴራፒ",
    },
    courseDescription: {
      en: "Support mothers through safe and effective physiotherapy during and after pregnancy, addressing pain, recovery, and strengthening.",
      am: "እናቶችን በእርግዝና ጊዜና ከወሊድ በኋላ በደህናና በውጤታማ ፊዚዮቴራፒ በመደገፍ ህመም ማስታገስ፣ ፈውስ ማፋጠን እና ጡንቻ መጠናከርን እናቀርባለን።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 3,
    image: C3,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Rehabilitation Techniques for Common Injuries",
      am: "ለመደበኛ ጉዳቶች የመልሶ ማቋቋም ዘዴዎች",
    },
    courseDescription: {
      en: "Master the fundamentals of rehabilitating common physical injuries through targeted physiotherapy exercises and expert guidance.",
      am: "በታሰበ የፊዚዮቴራፒ ልምምዶች እና በባለሙያ መመሪያ መሠረት መደበኛ አካላዊ ጉዳቶችን ለመልሶ ማቋቋም ያለዎትን መሠረታዊ ክህሎት ያጠናክሩ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 4,
    image: C4,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: { en: "Orthopedic Physiotherapy", am: "ኦርቶፔዲክ ፊዚዮቴራፒ" },
    courseDescription: {
      en: "Explore the principles and practices of orthopedic physiotherapy to treat bone, joint, and muscle conditions with precision and care.",
      am: "የኦርቶፔዲክ ፊዚዮቴራፒ መርሆና መሥራት መንገዶችን ተመልከቱ እና የአጥንት፣ መገጣጠሚያ እና ጡንቻ ችግኝ ሁኔታዎችን በትክክለኛነት እና በጥንቃቄ እንዴት መታከም እንደሚቻል ይማሩ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 5,
    image: C5,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Pediatric Physiotherapy Basics",
      am: "የሕፃናት ፊዚዮቴራፒ መሠረቶች",
    },
    courseDescription: {
      en: "Gain foundational knowledge in pediatric physiotherapy to support the physical development and rehabilitation of children with various conditions.",
      am: "ልጆች በተለያዩ ሁኔታዎች ላይ ሲገኙ የአካላዊ እድገታቸውን ለመደገፍ እና ለመመለስ የሚረዱ የሕፃናት ፊዚዮቴራፒ መሠረታዊ እውቀቶችን ያግኙ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 6,
    image: C6,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: { en: "Sports Physiotherapy", am: "የስፖርት ፊዚዮቴራፒ" },
    courseDescription: {
      en: "Learn how to assess, treat, and prevent sports-related injuries, and help athletes recover safely and perform at their best.",
      am: "ከስፖርት ጋር የተያያዙ ጉዳቶችን እንዴት መገመት፣ መታከም እና መከላከል እንደሚቻል ተማሩ፤ አትሌቶች በደህና እንዲድኑ እና ከፍተኛ ችሎታቸውን እንዲያበረታቱ ይርዱ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 7,
    image: C7,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Using Technology in Physiotherapy",
      am: "በፊዚዮቴራፒ ውስጥ ቴክኖሎጂ መጠቀም",
    },
    courseDescription: {
      en: "Discover how digital tools, apps, and devices are revolutionizing physiotherapy, enhancing both diagnostics and patient care.",
      am: "ዲጂታል መሳሪያዎች፣ መተግበሪያዎች እና መሳሪያዎች ፊዚዮቴራፒን እንዴት እየቀየሩት እና ምርመራን እና የታካሚ እንክብካቤን እንዴት እየሻሻሉ እንደሆነ ያግኙ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 8,
    image: C8,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Physiotherapy for Office Workers",
      am: "ለቢሮ ሠራተኞች ፊዚዮቴራፒ",
    },
    courseDescription: {
      en: "Understand and address common posture-related problems, repetitive strain injuries, and sedentary lifestyle effects experienced by desk workers.",
      am: "በመቀመጥ ብዙ ሰዓት የሚሰሩ ሰዎች የሚጋጥማቸውን የአቀማመጥ ችግር፣ የተደጋጋሚ ጭነት ጉዳቶች (RSI) እና የእንቅስቃሴ እጥረት ተፅእኖዎችን ለመረዳት እና ለመቆጣጠር ተማሩ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 9,
    image: C9,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Home-Based Physiotherapy Routines",
      am: "በቤት የሚከናወኑ የፊዚዮቴራፒ ስርአቶች",
    },
    courseDescription: {
      en: "Learn guided routines and strategies to help clients or family members recover from injury or improve mobility from the comfort of home.",
      am: "ለደንበኞች ወይም ለቤተሰብ አባላት ከጉዳት እንዲድኑ ወይም እንቅስቃሴያቸውን እንዲያሻሽሉ የሚረዱ በመመሪያ የተዘጋጀ ስርአት እና ስትራቴጂዎችን በቤትዎ በምቹ ሁኔታ ተማሩ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 10,
    image: C10,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: { en: "Neurological Physiotherapy", am: "ነሮሎጂካል ፊዚዮቴራፒ" },
    courseDescription: {
      en: "Understand techniques used in treating individuals with neurological disorders such as stroke, Parkinson’s, or spinal injuries through evidence-based rehab.",
      am: "ድብደባ (Stroke)፣ ፓርኪንሰን ወይም የጀርባ አካል ጉዳት ያሉ የነሮሎጂካል ችግር ባለቤቶችን በማስረጃ የተመሠረተ መልሶ ማቋቋም በመጠቀም ለማከም የሚጠቅሙ ቴክኒኮችን ይማሩ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 11,
    image: C11,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Gait Training & Balance Exercises",
      am: "የመራመድ ስልጠና እና የሚዛን ልምምዶች",
    },
    courseDescription: {
      en: "Dive into targeted exercises and assistive strategies designed to improve walking patterns, posture, and overall balance in children and adults.",
      am: "የመራመድ አቀራረብ፣ አቀማመጥ እና አጠቃላይ የሰውነት ሚዛን ለማሻሻል የታሰቡ ልምምዶችን እና የረዳት ስትራቴጂዎችን ተመልከቱ—ለህፃናትና ለዕድሜ ያሉ ሁሉም ተስማሚ ነው።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },

  {
    id: 12,
    image: C12,
    isAvailable: false,
    instructor: { en: "To Be Assigned", am: "ዶ/ር ሰላም ተስፋዬ" },
    courseTiitle: {
      en: "Therapeutic Exercises & Manual Therapy Techniques",
      am: "ቴራፒዩቲክ ልምምዶች እና የእጅ ህክምና ቴክኒኮች",
    },
    courseDescription: {
      en: "Learn hands-on techniques and structured exercises to manage pain, improve function, and promote healing through guided manual physiotherapy.",
      am: "ህመም ለመቆጣጠር፣ አገልግሎት ለማሻሻል እና ፈውስ ለማበረታት የሚረዱ የእጅ ህክምና ቴክኒኮችን እና የተዋቀሩ የልምምድ ስርአቶችን በመመሪያ ተማሩ።",
    },
    date: { en: "11 Sep 2025", am: "1 መስ 2018" },
    level: { en: "Beginner", am: "መጀመሪያ" },
    duration: { en: "4 weeks", am: "4 ሳምንታት" },
    requirements: {
      en: "Basic understanding of human anatomy and physiology.",
      am: "የሰውነት አካል እና ፊዚዮሎጂ መረጃ መረዳት ያስፈልጋል።",
    },
    link: "",
  },
];
