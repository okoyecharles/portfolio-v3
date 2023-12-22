import DarkmodeIcon from "../components/svg/DarkmodeIcon";
import GithubIcon from "../components/svg/GithubIcon";
import GmailIcon from "../components/svg/GmailIcon";
import LightmodeIcon from "../components/svg/LightmodeIcon";
import LinkedinIcon from "../components/svg/LinkedinIcon";
import SystemmodeIcon from "../components/svg/SystemmodeIcon";
import XIcon from "../components/svg/XIcon";

interface FooterData {
  creationYear: string;
  sourceCode: string;
  modes: { name: string; icon: React.ReactNode }[];
  socials: { name: string; icon: React.ReactNode; link: string }[];
}

const footerData: FooterData = {
  creationYear: "2023",
  sourceCode: "https://github.com/okoyecharles/portfolio-v3",
  modes: [
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
  socials: [
    {
      name: "X",
      icon: <XIcon />,
      link: "https://x.com/okoyecharlesk",
    },
    {
      name: "Gmail",
      icon: <GmailIcon />,
      link: "mailto:okoyecharles509@gmail.com"
    },
    {
      name: "Github",
      icon: <GithubIcon />,
      link: "https://github.com/okoyecharles",
    },
    {
      name: "Linkedin",
      icon: <LinkedinIcon />,
      link: "https://linkedin.com/in/okoyecharles",
    },
  ],
};

export default footerData;
