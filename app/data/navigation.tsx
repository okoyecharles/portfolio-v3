import FeaturedIcon from "../components/svg/FeaturedIcon";
import FolderIcon from "../components/svg/FolderIcon";
import PathIcon from "../components/svg/PathIcon";
import ProfileIcon from "../components/svg/ProfileIcon";
import QuoteIcon from "../components/svg/QuoteIcon";
import footerData from "./footer";

export type AnchorName = 'home' | 'about' | 'experience' | 'projects' | 'more-projects' | 'recommendations' | 'contact';

export interface Anchor {
  name: AnchorName;
  title: string;
  link: string;
}

export interface SubAnchor extends Anchor {
  icon: React.ReactNode
}

interface NavigationData {
  anchors: (Anchor & { subAnchors?: SubAnchor[] })[];
  socials: { name: string; icon: React.ReactNode; link: string }[];
}

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
      subAnchors: [
        {
          name: "about",
          title: "About Me",
          link: "#about",
          icon: <ProfileIcon />
        },
        {
          name: "experience",
          title: "My Experience as a Developer",
          link: "#experience",
          icon: <PathIcon />
        },
      ],
    },
    {
      name: "projects",
      title: "PROJECTS",
      link: "#projects",
      subAnchors: [
        {
          name: "projects",
          title: "Featured Work",
          link: "#projects",
          icon: <FeaturedIcon />
        },
        {
          name: "more-projects",
          title: "More Projects",
          link: "#more-projects",
          icon: <FolderIcon />
        },
        {
          name: "recommendations",
          title: "Recommendations",
          link: "#recommendations",
          icon: <QuoteIcon />
        },
      ],
    },
    {
      name: "contact",
      title: "CONTACT ME",
      link: "#contact",
    },
  ],
  socials: footerData.socials.slice(2, 4),
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
