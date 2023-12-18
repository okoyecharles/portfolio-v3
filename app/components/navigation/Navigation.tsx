import NavLinks from "./NavLinks";
import DesktopNavLinks from "./DesktopNavLinks";
import LogoIcon from "../svg/Logo";

export default function Navigation() {
  const activeNavigationLink = 3;
  return (
    <>
      <div className="navigation-container max-w-[1504px] sticky top-0 mx-auto">
        <div className="relative">
          <NavLinks active={activeNavigationLink} />
          <DesktopNavLinks active={activeNavigationLink} />
        </div>
      </div>
      <header className="p-6 md:p-8 w-full max-w-[1504px] mx-auto">
        <div className="logo h-12 flex items-center w-fit">
          <LogoIcon />
        </div>
      </header>
    </>
  );
}