import NavLinks from "./NavLinks";
import NavLinksDesktop from "./NavLinksDesktop";
import LogoIcon from "../svg/abstract/Logo";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container max-w-[1504px] sticky top-0 mx-auto z-10">
        <NavLinks />
        <NavLinksDesktop />
      </div>
      <header id="home" className="p-6 md:p-8 w-full max-w-[1504px] mx-auto">
        <div className="flex items-center h-12 logo w-fit">
          <LogoIcon />
        </div>
      </header>
    </>
  );
}
