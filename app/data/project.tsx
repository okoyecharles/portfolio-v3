import AmazonCloneLogo from "../components/svg/projects/AmazonCloneLogo";
import BuggoLogo from "../components/svg/projects/BuggoLogo";
import LavishCuisineLogo from "../components/svg/projects/LavishCuisineLogo";
import SaveAChildLogo from "../components/svg/projects/SaveAChildLogo";

type ProjectTag =
  | "react"
  | "next-js"
  | "typescript"
  | "javascript"
  | "redux"
  | "mongodb"
  | "node-js"
  | "firebase"
  | "html"
  | "css"
  | "scss"
  | (string & {});

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  link: Record<"github" | "live", string>;
  timeRange: [Date, Date];
  logo?: React.ReactNode;
  image?: Record<"desktop" | "mobile", string>;
  themeColor?: string;
}

const projectData: Array<Project> = [
  {
    name: "Buggo",
    logo: <BuggoLogo />,
    image: {
      desktop: "/assets/projects/buggo.webp",
      mobile: "/assets/projects/buggo-mobile.webp",
    },
    timeRange: [new Date(2023, 1), new Date(2023, 2)],
    description:
      "A real-time bug tracking application that allows you to create projects and tickets, while offering advanced filtering and search options, along with secure user authentication",
    tags: ["next-js", "redux", "node-js", "mongodb"],
    link: {
      github: "https://github.com/okoyecharles/buggo",
      live: "https://buggo.vercel.app",
    },
    themeColor: "[--rotating-gradient-border-color:#0079C9]",
  },
  // {
  //   name: "Amazon Clone",
  //   logo: <AmazonCloneLogo />,
  //   image: {
  //     desktop: "/assets/projects/amazon-clone.webp",
  //     mobile: "/assets/projects/amazon-clone-mobile.webp",
  //   },
  //   timeRange: [new Date(2022, 9), new Date(2022, 11)],
  //   description:
  //     "Explore an Amazon-inspired clone website with authentication, purchase capabilities, and a Redux-powered cart system",
  //   tags: ["react", "redux", "firebase"],
  //   link: {
  //     github: "https://github.com/okoyecharles/amazon-clone",
  //     live: "https://clone-f50ae.web.app",
  //   },
  //   themeColor:
  //     "[--rotating-gradient-border-color:#666] dark:[--rotating-gradient-border-color:#999]",
  // },
  {
    name: "Save A Child",
    logo: <SaveAChildLogo />,
    timeRange: [new Date(2022, 5), new Date(2022, 6)],
    image: {
      desktop: "/assets/projects/save-a-child.webp",
      mobile: "/assets/projects/save-a-child-mobile.webp",
    },
    description:
      "A website dedicated to supporting underprivileged children in developing countries worldwide, facilitating a positive impact on the lives of these children",
    tags: ["html", "css", "javascript"],
    link: {
      github: "https://github.com/okoyecharles/save-a-child",
      live: "https://saveachild.vercel.app",
    },
    themeColor:
      "[--rotating-gradient-border-color:#EC5242]",
  },
  {
    name: "Lavish Cuisine",
    logo: <LavishCuisineLogo />,
    image: {
      desktop: "/assets/projects/lavish-cuisine.webp",
      mobile: "/assets/projects/lavish-cuisine-mobile.webp",
    },
    timeRange: [new Date(2022, 7), new Date(2022, 8)],
    description:
      "Explore global cuisines with a meal-based website, categorizing dishes by countries and enabling ingredient-based meal searches",
    tags: ["react", "redux", "typescript"],
    link: {
      github: "https://github.com/okoyecharles/lavish-cuisine",
      live: "https://lavish-cuisine.web.app",
    },
    themeColor: "[--rotating-gradient-border-color:#C0841D]",
  },
  {
    name: "To do List",
    timeRange: [new Date(2023, 7), new Date(2023, 8)],
    description:
      "To do list app using Express, MongoDB, and Google authentication for seamless task management across devices",
    tags: ["next-js", "mongodb", "node-js"],
    link: {
      github: "https://github.com/okoyecharles/todo-list-nextjs",
      live: "https://the-tasks.vercel.app",
    },
  },
  {
    name: "Ex Portfolio",
    timeRange: [new Date(2022, 11), new Date(2023, 1)],
    description: "My previous portfolio",
    tags: ["next-js", "redux", "typescript", "scss"],
    link: {
      github: "https://github.com/okoyecharles/portfolio-v2",
      live: "https://okoyecharles-v2.vercel.app",
    },
  },
  {
    name: "Nethub",
    timeRange: [new Date(2022, 6), new Date(2022, 8)],
    description:
      "A dynamic website featuring an extensive collection of movies sourced from a movie API implemented with robust filter and search capabilities",
    tags: ["html", "css", "javascript"],
    link: {
      github: "https://github.com/okoyecharles/Nethub",
      live: "https://okoyecharles.github.io/Nethub",
    },
  },
  {
    name: "Space Traveler Hub",
    timeRange: [new Date(2022, 6), new Date(2022, 7)],
    description:
      "An application that fetches and displays real-time rocket information, join missions and reserve rockets in this intuitive SPA",
    tags: ["react", "redux"],
    link: {
      github: "https://github.com/okoyecharles/space-travelers-hub",
      live: "https://charles-space-travelers.netlify.app",
    },
  },
  {
    name: "Type Effect Library",
    timeRange: [new Date(2022, 5), new Date(2022, 6)],
    description:
      "A light-weight, open-source typing-effect library that enables users to add typing effects to DOM text elements",
    tags: ["javascript"],
    link: {
      github: "https://github.com/okoyecharles/Type-Effect-Library",
      live: "https://okoyecharles.github.io/Type-Effect-Library",
    },
  },
];

export default projectData;
