import FeaturedIcon from "../components/svg/FeaturedIcon";
import FolderIcon from "../components/svg/FolderIcon";
import GithubIcon from "../components/svg/GithubIcon";
import GmailIcon from "../components/svg/GmailIcon";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import PathIcon from "../components/svg/PathIcon";
import ProfileIcon from "../components/svg/ProfileIcon";
import QuoteIcon from "../components/svg/QuoteIcon";
import XIcon from "../components/svg/XIcon";
import footerData from "./footer";

export type AnchorName =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "more-projects"
  | "recommendations"
  | "contact";

export interface Social {
  name: string;
  icon: React.ReactNode;
  link: string;
}
export interface Anchor {
  name: AnchorName;
  title: string;
  link: string;
}

export interface DropdownAnchor extends Anchor {
  icon: React.ReactNode;
}

interface NavigationData {
  anchors: (Anchor & { dropdownAnchors?: DropdownAnchor[] })[];
  socials: Social[];
}

export const socials: NavigationData["socials"] = [
  {
    name: "X",
    icon: <XIcon />,
    link: "https://x.com/okoyecharlesk",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/okoyecharles",
  },
  {
    name: "Gmail",
    icon: <GmailIcon />,
    link: "mailto:okoyecharles509@gmail.com",
  },
  {
    name: "Linkedin",
    icon: <LinkedinIcon />,
    link: "https://linkedin.com/in/okoyecharles",
  },
];

const navigationData: NavigationData = {
  anchors: [
    {
      name: "home",
      title: "HOME",
      link: "#home",
    },
    {
      name: "about",
      title: "ABOUT",
      link: "#about",
      dropdownAnchors: [
        {
          name: "about",
          title: "About Me",
          link: "#about",
          icon: <ProfileIcon />,
        },
        {
          name: "experience",
          title: "My Experience as a Developer",
          link: "#experience",
          icon: <PathIcon />,
        },
      ],
    },
    {
      name: "projects",
      title: "PROJECTS",
      link: "#projects",
      dropdownAnchors: [
        {
          name: "projects",
          title: "Featured Work",
          link: "#projects",
          icon: <FeaturedIcon />,
        },
        {
          name: "more-projects",
          title: "More Projects",
          link: "#more-projects",
          icon: <FolderIcon />,
        },
        {
          name: "recommendations",
          title: "Recommendations",
          link: "#recommendations",
          icon: <QuoteIcon />,
        },
      ],
    },
    {
      name: "contact",
      title: "CONTACT ME",
      link: "#contact",
    },
  ],
  socials: socials.slice(1, 3),
};

const mobileNavigationData: NavigationData = {
  ...navigationData,
  anchors: [
    {
      name: "home",
      title: "HOME",
      link: "#home",
    },
    {
      name: "about",
      title: "ABOUT ME",
      link: "#about",
    },
    {
      name: "experience",
      title: "experience",
      link: "#experience",
    },
    {
      name: "projects",
      title: "projects",
      link: "#projects",
    },
    {
      name: "recommendations",
      title: "recommendations",
      link: "#recommendations",
    },
    {
      name: "contact",
      title: "contact me",
      link: "#contact",
    },
  ],
};

export { navigationData };
export default mobileNavigationData;
