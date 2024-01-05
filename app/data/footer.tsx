import DarkmodeIcon from "../components/svg/DarkmodeIcon";
import GithubIcon from "../components/svg/GithubIcon";
import GmailIcon from "../components/svg/GmailIcon";
import LightmodeIcon from "../components/svg/LightmodeIcon";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import SystemmodeIcon from "../components/svg/SystemmodeIcon";
import XIcon from "../components/svg/XIcon";
import { Social, socials } from "./navigation";

interface FooterData {
  creationYear: string;
  sourceCode: string;
  themes: { name: string; icon: React.ReactNode }[];
  socials: Social[];
}

const footerData: FooterData = {
  creationYear: "2023",
  sourceCode: "https://github.com/okoyecharles/portfolio-v3",
  themes: [
    {
      name: "dark",
      icon: <DarkmodeIcon />,
    },
    {
      name: "light",
      icon: <LightmodeIcon />,
    },
    {
      name: "system",
      icon: <SystemmodeIcon />,
    },
  ],
  socials: socials,
};

export default footerData;
