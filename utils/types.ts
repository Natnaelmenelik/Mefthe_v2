import { StaticImageData } from "next/image";

export type TestimonialProps = {
  id: number;
  image: StaticImageData;
  name: {
    en: string;
    am: string;
  };
  testimony: {
    en: string;
    am: string;
  };
  stars: number;
  role: {
    en: string;
    am: string;
  };
};

export type CourseProps = {
  id: number;
  isAvailable: boolean;
  image: StaticImageData;
  instructor: {
    en: string;
    am: string;
  };
  courseTiitle: {
    en: string;
    am: string;
  };
  courseDescription: {
    en: string;
    am: string;
  };
  date: {
    en: string;
    am: string;
  };
  level: {
    en: string;
    am: string;
  };
  duration: {
    en: string;
    am: string;
  };
  requirements: {
    en: string;
    am: string;
  };
  link: string;
};

export type FeatureProps = {
  id: number;
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
};
