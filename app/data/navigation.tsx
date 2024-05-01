import FeaturedIcon from "../components/svg/submenu/FeaturedIcon";
import FolderIcon from "../components/svg/submenu/FolderIcon";
import GithubIcon from "../components/svg/icons/GithubIcon";
import MailIcon from "../components/svg/icons/GmailIcon";
import LinkedinIcon from "../components/svg/icons/LinkedinIcon";
import PathIcon from "../components/svg/submenu/PathIcon";
import ProfileIcon from "../components/svg/submenu/ProfileIcon";
import QuoteIcon from "../components/svg/submenu/QuoteIcon";
import XIcon from "../components/svg/icons/XIcon";

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

export interface SubmenuAnchor extends Anchor {
  icon: React.ReactNode;
}

interface NavigationData {
  anchors: (Anchor & { submenuAnchors?: SubmenuAnchor[] })[];
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
    icon: <MailIcon />,
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
      title: "Home",
      link: "#home",
    },
    {
      name: "about",
      title: "About",
      link: "#about",
      submenuAnchors: [
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
      title: "Projects",
      link: "#projects",
      submenuAnchors: [
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
      title: "Contact Me",
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
      title: "Home",
      link: "#home",
    },
    {
      name: "about",
      title: "About Me",
      link: "#about",
    },
    {
      name: "experience",
      title: "Experience",
      link: "#experience",
    },
    {
      name: "projects",
      title: "Projects",
      link: "#projects",
    },
    {
      name: "recommendations",
      title: "Recommendations",
      link: "#recommendations",
    },
    {
      name: "contact",
      title: "Contact Me",
      link: "#contact",
    },
  ],
};

export { navigationData };
export default mobileNavigationData;
