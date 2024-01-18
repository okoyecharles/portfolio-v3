import ThemeDarkIcon from "../components/svg/icons/ThemeDarkIcon";
import ThemeLightIcon from "../components/svg/icons/ThemeLightIcon";
import ThemeSystemIcon from "../components/svg/icons/ThemeSystemIcon";
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
      icon: <ThemeDarkIcon />,
    },
    {
      name: "light",
      icon: <ThemeLightIcon />,
    },
    {
      name: "system",
      icon: <ThemeSystemIcon />,
    },
  ],
  socials: socials,
};

export default footerData;
