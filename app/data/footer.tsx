import DarkmodeIcon from "../components/svg/theme/DarkmodeIcon";
import GithubIcon from "../components/svg/icons/GithubIcon";
import MailIcon from "../components/svg/icons/GmailIcon";
import LightmodeIcon from "../components/svg/theme/LightmodeIcon";
import LinkedinIcon from "../components/svg/icons/LinkedinIcon";
import SystemmodeIcon from "../components/svg/theme/SystemmodeIcon";
import XIcon from "../components/svg/icons/XIcon";
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
