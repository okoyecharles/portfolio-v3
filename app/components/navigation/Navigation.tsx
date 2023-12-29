import NavLinks from "./NavLinks";
import DesktopNavLinks from "./DesktopNavLinks";
import LogoIcon from "../svg/Logo";

export default function Navigation() {
  return (
    <>
      <div className="navigation-container max-w-[1504px] sticky top-0 mx-auto z-10">
        <NavLinks />
        <DesktopNavLinks />
      </div>
      <header id="home" className="p-6 md:p-8 w-full max-w-[1504px] mx-auto">
        <div className="logo h-12 flex items-center w-fit">
          <LogoIcon />
        </div>
      </header>
    </>
  );
}
