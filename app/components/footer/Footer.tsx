import footerData from "@/app/data/footer";
import FooterLogo from "../svg/FooterLogo";
import navigationData from "@/app/data/navigation";

export default function Footer() {
  const activeMode = 1;

  return (
    <div className="footer-container bg-grey-ea dark:bg-grey-1 border-t border-grey-d dark:border-grey-2 px-8">
      <footer className="w-full max-w-screen-xl mx-auto flex justify-between py-8">
        <div className="content flex flex-col gap-4">
          <div className="logo">
            <FooterLogo />
          </div>
          <p className="text-sm leading-[16px] font-medium text-grey-6 dark:text-grey-9">
            @{footerData.creationYear}, Okoye Charles
          </p>
          <ul className="flex gap-4 py-1">
            {navigationData.socials.map((social) => (
              <li key={social.name}>
                <a href={social.link} rel="noopener noreferrer" target="_blank">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="dark-light-toggle p-1 flex ring-1 ring-grey-b dark:ring-grey-3 rounded-[20px] self-center">
          {footerData.modes.map((mode, modeIndex) => (
            <button key={mode.name} className={`rounded-[16px] group transition-colors ${modeIndex == activeMode && 'bg-grey-9/[35%] dark:bg-grey-2 is-active'}`}>
              { mode.icon }
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
