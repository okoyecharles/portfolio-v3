import ThemeDarkIcon from "../components/svg/icons/ThemeDarkIcon";
import ThemeLightIcon from "../components/svg/icons/ThemeLightIcon";
import ThemeSystemIcon from "../components/svg/icons/ThemeSystemIcon";
import { Social, socials } from "./navigation";
import { Theme } from "./theme";

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
      name: Theme.Dark,
      icon: <ThemeDarkIcon />,
    },
    {
      name: Theme.Light,
      icon: <ThemeLightIcon />,
    },
    {
      name: Theme.System,
      icon: <ThemeSystemIcon />,
    },
  ],
  socials: socials,
};

export default footerData;
