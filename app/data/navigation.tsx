import footerData from "./footer";

interface NavigationData {
  anchors: { name: string; link: string }[];
  socials: { name: string; icon: React.ReactNode; link: string }[];
}

const navigationData: NavigationData = {
  anchors: [
    {
      name: "home",
      link: "#home",
    },
    {
      name: "about",
      link: "#about",
    },
    {
      name: "projects",
      link: "#projects",
    },
    {
      name: "contact me",
      link: "#contact",
    },
  ],
  socials: footerData.socials.slice(2, 4),
};
export default navigationData;
