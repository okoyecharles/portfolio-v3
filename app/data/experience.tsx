import moment, { Moment } from "moment";
import BriefcaseIcon from "../components/svg/abstract/BriefcaseIcon";
import CertificationIcon from "../components/svg/abstract/CertificationIcon";

export enum ExperienceType {
  CERTIFICATE = "CERTIFICATE",
  WORK = "WORK",
}

export interface Experience {
  logo: string;
  title: string;
  subTitle: string;
  details: string;
  timeRange: [Moment, Moment];
  link: string;
  linkText?: string;
  showcaseImage: string;
}

export const experienceTypes = [
  {
    label: "Work",
    value: ExperienceType.WORK,
    icon: <BriefcaseIcon />,
  },
  {
    label: "Certifications",
    value: ExperienceType.CERTIFICATE,
    icon: <CertificationIcon />,
  },
];

export const certifications: Experience[] = [
  {
    logo: "/assets/experience/microverse.webp",
    showcaseImage: "/assets/experience/microverse-showcase.webp",
    title: "Microverse",
    subTitle: "Remote Developer Bootcamp",
    details:
      "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [
      moment({ year: 2022, month: 4 }),
      moment({ year: 2023, month: 0 }),
    ],
    link: "https://drive.google.com/file/d/1qmUspFThqBVWXYCytHKRpRAtw8oSLQ2r/view?usp=sharing",
  },
  {
    logo: "/assets/experience/minnesota.webp",
    showcaseImage: "/assets/experience/minnesota-showcase.webp",
    title: "University of Minnesota",
    subTitle: "Software Development Methodologies",
    details:
      "An online non-credit course authorized by the University of Minnesota and offered through Coursera, on Important Processes and Methodologies in Software Development.",
    timeRange: [
      moment({ year: 2022, month: 3 }),
      moment({ year: 2022, month: 6 }),
    ],
    link: "https://drive.google.com/file/d/1mKBTBjbhJmdGc4j5JHFKhmthl9c6_8pQ/view?usp=sharing",
  },
  {
    logo: "/assets/experience/linkedin-learning.webp",
    showcaseImage: "/assets/experience/linkedin-learning-showcase.webp",
    title: "Linkedin Learning",
    subTitle: "Become a Software Developer",
    details:
      "A course that provides a broad perspective on core technologies for web development, software development, and databases. It introduced a bigger picture of how development careers work.",
    timeRange: [
      moment({ year: 2022, month: 6 }),
      moment({ year: 2022, month: 7 }),
    ],
    link: "https://drive.google.com/file/d/1_TH9jAT91AS_A-2Unh74u9BlqPWzd3f-/view?usp=sharing",
  },
  {
    logo: "/assets/experience/gds.webp",
    showcaseImage: "/assets/experience/gds-showcase.webp",
    title: "Google Digital Skills for Africa",
    subTitle: "Fundamentals of Digital Marketing",
    details:
      "I mastered the basics of digital marketing. An Interactive Advertising Bureau-accredited course, created by Google trainers. Packed full of exercises and real-world examples to turn knowledge into action.",
    timeRange: [
      moment({ year: 2022, month: 5 }),
      moment({ year: 2022, month: 6 }),
    ],
    link: "https://drive.google.com/file/d/1T6XkLXWlfkPqLkghNSmHvGYjakWjNA1i/view?usp=sharing",
  },
];

export const works: Experience[] = [
  {
    logo: "/assets/experience/cm.webp",
    showcaseImage: "/assets/experience/cm-showcase.webp",
    title: "Citizen Monitors",
    subTitle: "Frontend Developer",
    details:
      'Collaborated closely with product designers and backend engineers to build responsive, user-focused interfaces for the civic-tech platform.<br class="my-1"> Developed all frontend experiences across the landing page, multi-step onboarding and verification systems, electoral dashboards, and data visualization interfaces.',
    timeRange: [
      moment({ year: 2024, month: 4 }),
      moment({ year: 2025, month: 4 }),
    ],
    link: "https://citizenmonitors.com",
    linkText: "View website",
  },
  {
    logo: "/assets/experience/clinops.webp",
    showcaseImage: "/assets/experience/clinops-showcase.webp",
    title: "Clinops Academy",
    subTitle: "Fullstack Developer",
    details:
      "Designed and built the Clinops Academy platform from the ground up, architecting both frontend and backend systems for authentication, question management, premium content paywalls, and subscription payments.",
    timeRange: [
      moment({ year: 2024, month: 11 }),
      moment({ year: 2025, month: 1 }),
    ],
    link: "https://www.clinopsacademy.net",
    linkText: "View website",
  },
];
