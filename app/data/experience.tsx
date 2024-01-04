import { getMonthDifference } from "../components/utils/moment";

export interface Expertise {
  logo: string;
  title: string;
  subTitle: string;
  details: string;
  timeRange: [Date, Date];
  certificate: string;
  showcaseImage: string;
}

interface ExperienceData {
  expertise: Expertise[];
  startTime: Date;
  endTime: Date;
}

const expertise: Expertise[] = [
  {
    logo: "/assets/experience/microverse.png",
    showcaseImage: "/assets/experience/microverse-showcase.jpg",
    title: "Microverse",
    subTitle: "Remote Developer Bootcamp",
    details:
      "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [new Date(2022, 4), new Date(2022, 11)],
    certificate:
      "https://drive.google.com/file/d/1qmUspFThqBVWXYCytHKRpRAtw8oSLQ2r/view?usp=sharing",
  },
  {
    logo: "/assets/experience/minnesota.png",
    showcaseImage: "/assets/experience/minnesota-showcase.jpg",
    title: "University of Minnesota",
    subTitle: "Software Development Methodologies",
    details:
      "An online non-credit course authorized by the University of Minnesota and offered through Coursera, on Important Processes and Methodologies in Software Development.",
    timeRange: [new Date(2022, 3), new Date(2022, 6)],
    certificate:
      "https://drive.google.com/file/d/1mKBTBjbhJmdGc4j5JHFKhmthl9c6_8pQ/view?usp=sharing",
  },
  {
    logo: "/assets/experience/linkedin-learning.png",
    showcaseImage: "/assets/experience/linkedin-learning-showcase.jpg",
    title: "Linkedin Learning",
    subTitle: "Become a Software Developer",
    details:
      "A course that provides a broad perspective on core technologies for web development, software development, and databases. It introduced a bigger picture of how development careers work.",
    timeRange: [new Date(2022, 6), new Date(2022, 7)],
    certificate:
      "https://drive.google.com/file/d/1_TH9jAT91AS_A-2Unh74u9BlqPWzd3f-/view?usp=sharing",
  },
  {
    logo: "/assets/experience/gds.png",
    showcaseImage: "/assets/experience/gds-showcase.jpg",
    title: "Google Digital Skills for Africa",
    subTitle: "Fundamentals of Digital Marketing",
    details:
      "I mastered the basics of digital marketing. An Interactive Advertising Bureau-accredited course, created by Google trainers. Packed full of exercises and real-world examples to turn knowledge into action.",
    timeRange: [new Date(2022, 5), new Date(2022, 7)],
    certificate:
      "https://drive.google.com/file/d/1T6XkLXWlfkPqLkghNSmHvGYjakWjNA1i/view?usp=sharing",
  },
];

const experienceData: ExperienceData = {
  expertise,
  startTime: new Date(2021, 0),
  endTime: new Date(2024, 0),
};

export function experienceTimelineCalculator(expertise: Expertise) {
  const MONTH_HEIGHT = 32;
  const MONTH_DIFFERENCE = getMonthDifference(
    experienceData.startTime,
    experienceData.endTime
  );

  const ACTIVE_EXPERTISE_MONTH_DIFFERENCE = getMonthDifference(
    expertise.timeRange[0],
    expertise.timeRange[1]
  );
  const MONTH_TIMELINE_HEIGHT =
    MONTH_HEIGHT * ACTIVE_EXPERTISE_MONTH_DIFFERENCE;
  const MONTH_TIMELINE_POS =
    getMonthDifference(experienceData.startTime, expertise.timeRange[0]) *
    MONTH_HEIGHT;

  const YEAR_TIMELINE_HEIGHT = MONTH_HEIGHT * MONTH_DIFFERENCE;
  const YEAR_TIMELINE_POS = MONTH_TIMELINE_POS + MONTH_TIMELINE_HEIGHT / 2;

  return {
    YEAR_TIMELINE_POS,
    MONTH_TIMELINE_HEIGHT,
    YEAR_TIMELINE_HEIGHT,
    MONTH_DIFFERENCE,
    MONTH_HEIGHT
  }
}

export default experienceData;
