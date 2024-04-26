import footerData from "@/app/data/footer";
import LogoSmall from "../svg/abstract/LogoSmall";
import ThemeToggle from "./ThemeToggle";
import Link from "../clickable/Link";
import HeartIcon from "../svg/abstract/HeartIcon";
import Logo from "../svg/abstract/Logo";

export default function Footer() {
  return (
    <div className="px-8 border-t footer-container bg-grey-fb dark:bg-grey-1 border-grey-d dark:border-grey-2">
      <footer className="flex flex-col w-full max-w-screen-xl gap-10 py-8 mx-auto md:flex-row md:justify-between">
        <div className="flex justify-between items-center md:items-start md:flex-col md:gap-8">
          <Link
            href="/"
            variant="plain"
            ariaLabel="Okoye Charles' Portfolio Logo"
            title="Okoye Charles' Portfolio"
          >
            <span className="inline-block md:hidden">
              <LogoSmall />
            </span>
            <span className="hidden md:inline-block">
              <Logo />
            </span>
          </Link>
          <ul className="flex gap-4 md:flex-col md:gap-3" aria-label="social links">
            {footerData.socials.map((social) => (
              <li key={social.name} className="group/icon">
                <a
                  href={social.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="md:flex md:gap-2 md:flex-end"
                  aria-label={social.name}
                >
                  <div className="flex w-[24px]">{social.icon}</div>
                  <span
                    className={`
                    hidden md:inline text-grey-6 dark:text-grey-9 text-[15px] relative
                    after:bg-grey-6 after:dark:bg-grey-9 after:pointer-events-none
                    after:absolute after:left-0 after:-bottom-[2px]
                    after:w-full after:h-[2px]
                    after:opacity-0 group-hover/icon:after:opacity-100
                  `}
                  >
                    {social.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 content-2 md:justify-between">
          <div className="self-center md:self-end">
            <ThemeToggle />
          </div>
          <p
            className="text-grey-6 dark:text-grey-9 text-[15px] text-center flex gap-[6px] items-center self-center md:self-end select-none"
            aria-label="Built with passion by Okoye Charles"
          >
            Built with
            <HeartIcon />
            by <Link href={footerData.sourceCode}>Okoye Charles</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
