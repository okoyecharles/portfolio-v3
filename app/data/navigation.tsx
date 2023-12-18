import GithubIcon from "../components/svg/GithubIcon";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import XIcon from "../components/svg/XIcon";

interface NavigationData {
  anchors: { name: string; link: string }[];
  socials: { name: string; icon: React.JSX.Element; link: string }[];
}

const navigationData: NavigationData = {
  anchors: [
    {
      name: "home",
      link: "#",
    },
    {
      name: "about",
      link: "#",
    },
    {
      name: "projects",
      link: "#",
    },
    {
      name: "contact me",
      link: "#",
    },
  ],
  socials: [
    {
      name: "github",
      icon: <GithubIcon />,
      link: "https://github.com/okoyecharles",
    },
    {
      name: "linkedin",
      icon: <LinkedinIcon />,
      link: "https://linkedin.com/in/okoyecharles",
    },
    {
      name: "x",
      icon: <XIcon />,
      link: "https://x.com/okoyecharlesk",
    },
  ],
};
export default navigationData;