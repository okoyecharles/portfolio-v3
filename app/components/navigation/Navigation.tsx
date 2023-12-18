import NavLinks from "./NavLinks";
import DesktopNavLinks from "./DesktopNavLinks";
import LogoIcon from "../svg/LogoIcon";

export default function Navigation() {
  const activeNavigationLink = 0;
  return (
    <>
      <header className="p-6 md:p-9">
        <div className="logo h-12 flex items-center w-fit">
          <LogoIcon />
        </div>
      </header>
      <NavLinks active={activeNavigationLink} />
      <DesktopNavLinks active={activeNavigationLink} />
    </>
  );
}
