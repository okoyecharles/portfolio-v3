import footerData from "@/app/data/footer";
import FooterLogo from "../svg/FooterLogo";
import navigationData from "@/app/data/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
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
        <ThemeToggle />
      </footer>
    </div>
  );
}
