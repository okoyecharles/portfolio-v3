interface Expertise {
  logo: string;
  title: string;
  subTitle: string;
  details: string;
  timeRange: [Date, Date];
  certificate: string;
}

interface ExperienceData {
  expertise: Expertise[];
  startTime: Date;
  endTime: Date;
}

const expertise: Expertise[] = [
  {
    logo: "/assets/experience/microverse.png",
    title: "Microverse",
    subTitle: "Remote Developer Bootcamp",
    details: "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [new Date(2022, 4), new Date(2022, 11)],
    certificate: "https://drive.google.com"
  },
  {
    logo: "/assets/experience/google.png",
    title: "Google Digital Skills for Africa",
    subTitle: "The Fundamentals of Digital Marketing",
    details: "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
    timeRange: [new Date(2022, 5), new Date(2022, 6)],
    certificate: "https://drive.google.com"
  },
  {
    logo: "/assets/experience/minnesota.png",
    title: "...",
    subTitle: "Software Development Processes and Methodologies",
    details: "An online non-credit course authorized by the University of Minnesota and offered through Coursera, on Important Processes and Methodologies in Software Development.",
    timeRange: [new Date(2022, 6), new Date(2022, 7)],
    certificate: "https://drive.google.com"
  },
]

const experienceData: ExperienceData = {
  expertise,
  startTime: new Date(2021, 0),
  endTime: new Date(2024, 0)
}

export default experienceData;