import NavLinks from "./NavLinks";
import NavLinksDesktop from "./NavLinksDesktop";
import LogoIcon from "../svg/abstract/Logo";

export default function Navigation() {
  return (
    <>
      <div id="home" className="w-full max-w-[1504px] mx-auto h-0">
        <div className="p-6 md:p-8">
          <a
            className="flex items-center logo w-fit h-12"
            href={"/"}
            title={"Okoye Charles' Portfolio"}
            aria-label={"Home"}
          >
            <LogoIcon />
          </a>
        </div>
      </div>
      <header className="navigation-container max-w-[1504px] sticky top-0 mx-auto z-10 isolate">
        <NavLinks />
        <NavLinksDesktop />
      </header>
    </>
  );
}
