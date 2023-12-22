import GithubIcon from "../components/svg/GithubIcon";
import GmailIcon from "../components/svg/GmailIcon";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import XIcon from "../components/svg/XIcon";
import footerData from "./footer";

interface NavigationData {
  anchors: { name: string; link: string }[];
  socials: { name: string; icon: React.ReactNode; link: string }[];
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
  socials: footerData.socials.slice(2, 4),
};
export default navigationData;
