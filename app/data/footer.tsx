import DarkmodeIcon from "../components/svg/DarkmodeIcon";
import LightmodeIcon from "../components/svg/LightmodeIcon";
import SystemmodeIcon from "../components/svg/SystemmodeIcon";

interface FooterData {
  creationYear: string,
  modes: { name: string, icon: React.JSX.Element }[]
}

const footerData: FooterData = {
  creationYear: '2023',
  modes: [
    {
      name: 'dark',
      icon: <DarkmodeIcon />
    },
    {
      name: 'light',
      icon: <LightmodeIcon />
    },
    {
      name: 'system',
      icon: <SystemmodeIcon />
    },
  ]
}

export default footerData;