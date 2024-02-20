"use client";
import VerticalLineIcon from "../svg/abstract/VerticalLineIcon";
import {
  AnchorName,
  DropdownAnchor,
  navigationData,
} from "../../data/navigation";
import { a, to, useSpring } from "@react-spring/web";
import useScrollDirection from "../utils/useScrollDirection";
import useActiveSection from "../utils/useActiveSection";
import ExpandIcon from "../svg/dropdown/ExpandIcon";
import { useEffect, useRef, useState } from "react";
import Link from "../clickable/Link";

export default function NavLinksDesktop() {
  const activeSection = useActiveSection();

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

  const [dropdownOpen, setDropdownOpen] = useState<AnchorName | null>(null);
  useEffect(() => {
    setDropdownOpen(null);
  }, [scrollDirection]);

  return (
    <a.nav
      className="absolute w-fit top-8 right-8 bg-white dark:bg-grey-2 ring-1 dark:ring-0 ring-grey-ea rounded-[10px] font-visby font-medium px-6 py-[7px] gap-6 hidden md:flex items-center select-none"
      style={activeNavSpring}
    >
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
      <ul className="flex text-sm gap-8 leading-[1.5] text-grey-6 dark:text-grey-b">
        {navigationData.anchors.map((anchor) => (
          <li
            key={anchor.name}
            className={`flex items-center gap-2 group/nav-item transition-colors ${
              activeSection == anchor.name && "text-black dark:text-grey-d"
            }`}
          >
            <a
              href={anchor.link}
              className="transition-colors group-hover/nav-item:text-black dark:group-hover/nav-item:text-grey-d"
            >
              {anchor.title}
            </a>
            {anchor.dropdownAnchors && (
              <Dropdown
                name={anchor.name}
                anchors={anchor.dropdownAnchors}
                open={anchor.name === dropdownOpen}
                setOpen={setDropdownOpen}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="divider">
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
    </a.nav>
  );
}

interface DropdownProps<T> {
  name: AnchorName;
  anchors: T[];
  open: boolean;
  setOpen: Function;
}

function Dropdown({
  name,
  anchors,
  open,
  setOpen,
}: DropdownProps<DropdownAnchor>) {
  const DROPDOWN_ITEMS_HEIGHT = 34 * anchors.length;
  const DROPDOWN_OPEN_HEIGHT = DROPDOWN_ITEMS_HEIGHT + 24;
  const active = useActiveSection();

  const openDropdownSpring = useSpring({
    y: open ? 0 : 16,
    x: -32,
    opacity: open ? 1 : 0,
    config: {
      tension: 300,
    },
  });

  function handleDropdownToggle() {
    if (open) {
      setOpen(null);
    } else {
      setOpen(name);
    }
  }

  const dropdownRef = useRef<any>(null);

  function handleClickOutside(event: Event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    // close dropdown if click occurs elsewhere
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [open]);

  return (
    <div className="relative dropdown" ref={dropdownRef}>
      <button
        className={`py-2 px-1 rounded-[5px] hover:bg-grey-ea dark:hover:bg-grey-3 group/dropdown-button transition-colors -mr-[10px]${
          open ? " is-active" : ""
        }`}
        onClick={handleDropdownToggle}
      >
        <ExpandIcon />
      </button>

      <a.nav
        className={`dropdown-items bg-white ring-1 ring-grey-d dark:ring-0 dark:bg-grey-2 absolute w-[256px] h-[${DROPDOWN_OPEN_HEIGHT}px] top-[calc(100%+31px)] rounded-[10px] -translate-x-8 py-3 font-lato font-medium`}
        style={{...openDropdownSpring, pointerEvents: open ? "all" : "none"}}
      >
        <div className="relative translate-x-8">
          <div
            className="dropdown-pointer absolute w-[16.9px] h-[16.9px] bg-white ring-1 ring-grey-d dark:ring-0 dark:bg-grey-2 rotate-45 rounded-[2px] -top-[12px] -translate-y-1/2"></div>
          <div className="bg-white dark:bg-grey-2 absolute w-[34px] h-[12px] -top-[12px] -left-[8px]"></div>
        </div>
        <ul>
          {anchors.map((anchor) => (
            <li
              key={anchor.name}
              className={`px-4 ${
                anchor.name === active ? "is-active " : ""
              }group/dropdown-item hover:bg-grey-ea dark:hover:bg-grey-3 transition-colors`}
            >
              <a
                href={anchor.link}
                className="flex gap-2 items-center py-2 text-grey-6 dark:text-grey-b group-hover/dropdown-item:text-grey-2 dark:group-hover/dropdown-item:text-grey-d group-[.is-active]/dropdown-item:text-grey-2 dark:group-[.is-active]/dropdown-item:text-grey-d"
              >
                {anchor.icon}
                <span className="leading-[1] block">{anchor.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </a.nav>
    </div>
  );
}
