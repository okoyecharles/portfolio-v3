"use client";
import VerticalLineIcon from "../svg/abstract/VerticalLineIcon";
import { AnchorName, SubmenuAnchor, navigationData, } from "../../data/navigation";
import { a, to, useSpring } from "@react-spring/web";
import useScrollDirection from "../utils/useScrollDirection";
import useActiveSection from "../utils/useActiveSection";
import ExpandIcon from "../svg/submenu/ExpandIcon";
import { useEffect, useRef, useState } from "react";
import Link from "../clickable/Link";
import useUserScrolling from "@/app/components/utils/useUserScrolling";
import { toNormalCase } from "../utils/convertion";

export default function NavLinksDesktop() {
  const activeSection = useActiveSection();
  const { userScrolling } = useUserScrolling();

  const activeSectionMarkerMorph = [
    {pos: -24, width: 24},
    {pos: 24, width: 39.4},
    {pos: 95.4, width: 45.25},
    {pos: 190.65, width: 64.85},
    {pos: 305.5, width: 85.17},
  ];
  const activeSectionMarker = {
    unmounted: activeSectionMarkerMorph[0],
    home: activeSectionMarkerMorph[1],
    about: activeSectionMarkerMorph[2],
    experience: activeSectionMarkerMorph[2],
    projects: activeSectionMarkerMorph[3],
    "more-projects": activeSectionMarkerMorph[3],
    recommendations: activeSectionMarkerMorph[3],
    contact: activeSectionMarkerMorph[4],
  };
  const activeSectionMarkerSpring = useSpring({
    to: {
      width: activeSectionMarker[activeSection].width,
      x: activeSectionMarker[activeSection].pos,
    },
  });

  const scrollDirection = useScrollDirection();
  const activeNavSpring = useSpring({
    from: {y: 0},
    to: {
      y: scrollDirection == "down" ? -100 : 0,
    },
    delay: 250,
    config: {
      tension: 300,
      friction: 40,
    },
  });

  const [submenuOpen, setSubmenuOpen] = useState<AnchorName | null>(null);
  useEffect(() => {
    setSubmenuOpen(null);
  }, [scrollDirection]);

  return (
    <a.nav
      id={"main-menu"}
      className="absolute w-fit top-8 right-8 bg-white dark:bg-grey-2 ring-1 dark:ring-0 ring-grey-ea rounded-[10px] font-visby font-medium px-6 py-[7px] gap-6 hidden md:flex items-center select-none"
      style={activeNavSpring}
      aria-label={"Main Menu"}
    >
      { userScrolling }
      <ul className="flex text-sm gap-8 leading-[1.5] text-grey-6 dark:text-grey-b" role={"menubar"}>
        {navigationData.anchors.map((anchor) => (
          <li
            key={anchor.name}
            id={anchor.name + "-menu-item"}
            className={`flex items-center gap-2 group/nav-item transition-colors ${
              activeSection == anchor.name && "text-black dark:text-grey-d"
            }`}
          >
            <a
              href={anchor.link}
              className="transition-colors group-hover/nav-item:text-black dark:group-hover/nav-item:text-grey-d uppercase"
              role={"menuitem"}
            >
              {anchor.title}
            </a>
            {anchor.submenuAnchors && (
              <Submenu
                name={anchor.name}
                anchors={anchor.submenuAnchors}
                open={anchor.name === submenuOpen}
                setOpen={setSubmenuOpen}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="divider" aria-hidden>
        <VerticalLineIcon />
      </div>
      <ul className="flex gap-4 items-center">
        {navigationData.socials.map((social) => (
          <li key={social.name} className="h-[22px]">
            <Link href={social.link} variant="plain">
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="active-marker-bar absolute left-0 bottom-0 h-5 w-full overflow-hidden rounded-[10px] pointer-events-none">
        <div className="relative h-full">
          <a.div
            className="active-marker absolute left-0 bottom-0 h-[10px] rounded-[5px] bg-blue-100 dark:bg-blue-d-200"
            style={{
              width: to(activeSectionMarkerSpring.width, (w) => `${w}px`),
              transform: to(
                activeSectionMarkerSpring.x,
                (x) => `translateX(calc(${x}px)) translateY(50%)`
              ),
            }}
          />
        </div>
      </div>
    </a.nav>
  );
}

interface SubmenuProps<T> {
  name: AnchorName;
  anchors: T[];
  open: boolean;
  setOpen: Function;
}

function Submenu({
  name,
  anchors,
  open,
  setOpen,
}: SubmenuProps<SubmenuAnchor>) {
  const SUBMENU_ITEMS_HEIGHT = 34 * anchors.length;
  const SUBMENU_OPEN_HEIGHT = SUBMENU_ITEMS_HEIGHT + 24;
  const submenuName = toNormalCase(name + " submenu");
  const active = useActiveSection();

  const openSubmenuSpring = useSpring({
    y: open ? 0 : 16,
    x: -32,
    opacity: open ? 1 : 0,
    config: {
      tension: 300,
    },
  });

  function handleSubmenuToggle() {
    if (open) {
      setOpen(null);
    } else {
      setOpen(name);
    }
  }

  const submenuRef = useRef<any>(null);

  function handleClickOutside(event: Event) {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    // close submenu if click occurs elsewhere
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  return (
    <div className="relative submenu" ref={submenuRef}>
      <button
        className={`py-2 px-1 rounded-[5px] hover:bg-grey-ea dark:hover:bg-grey-3 group/submenu-button transition-colors -mr-[10px]${
          open ? " is-active" : ""
        }`}
        onClick={handleSubmenuToggle}
        name={open ? "Close " + submenuName : "Open " + submenuName}
        aria-label={open ? "Close " + submenuName : "Open " + submenuName}
        aria-expanded={open}
        aria-controls={name + "-submenu"}
      >
        <ExpandIcon />
      </button>

      <a.div
        id={name + "-submenu"}
        className={`submenu-items bg-white ring-1 ring-grey-d dark:ring-0 dark:bg-grey-2 absolute w-[256px] h-[${SUBMENU_OPEN_HEIGHT}px] top-[calc(100%+31px)] rounded-[10px] -translate-x-8 py-3 font-lato font-medium`}
        style={{...openSubmenuSpring, pointerEvents: open ? "all" : "none"}}
        role={"listbox"}
        aria-label={submenuName}
      >
        <div className="relative translate-x-8">
          <div
            className="submenu-pointer absolute w-[16.9px] h-[16.9px] bg-white ring-1 ring-grey-d dark:ring-0 dark:bg-grey-2 rotate-45 rounded-[2px] -top-[12px] -translate-y-1/2"></div>
          <div className="bg-white dark:bg-grey-2 absolute w-[34px] h-[12px] -top-[12px] -left-[8px]"></div>
        </div>
        <ul>
          {anchors.map((anchor) => (
            <li
              key={anchor.name}
              className={`px-4 ${
                anchor.name === active ? "is-active " : ""
              }group/submenu-item hover:bg-grey-ea dark:hover:bg-grey-3 transition-colors`}
            >
              <a
                href={anchor.link}
                className="flex gap-2 items-center py-2 text-grey-6 dark:text-grey-b group-hover/submenu-item:text-grey-2 dark:group-hover/submenu-item:text-grey-d group-[.is-active]/submenu-item:text-grey-2 dark:group-[.is-active]/submenu-item:text-grey-d"
                aria-selected={anchor.name === active}
                tabIndex={open ? 0 : -1}
              >
                {anchor.icon}
                <span className="leading-[1] block">{anchor.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </a.div>
    </div>
  );
}
