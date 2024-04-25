import NavLinksMobile from "./NavLinksMobile";
import NavLinksDesktop from "./NavLinksDesktop";
import LogoIcon from "../svg/abstract/Logo";

export default function Navigation() {
  return (
    <>
      <div id="home" className="w-full max-w-[1504px] mx-auto h-0 overflow-visible">
        <div className="p-6 md:p-8">
          <LogoIcon />
        </div>
      </div>
      <header className="navigation-container max-w-[1504px] sticky top-0 mx-auto z-10 isolate">
        <NavLinksMobile />
        <NavLinksDesktop />
      </header>
    </>
  );
}
