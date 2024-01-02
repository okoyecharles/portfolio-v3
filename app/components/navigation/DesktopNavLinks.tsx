"use client";
import VerticalLineIcon from "../svg/VerticalLineIcon";
import { AnchorName, SubAnchor, navigationData } from "../../data/navigation";
import { a, to, useSpring } from "@react-spring/web";
import useScrollDirection from "../utils/useScrollDirection";
import useActiveSection from "../utils/useActiveSection";
import ExpandIcon from "../svg/ExpandIcon";
import { useEffect, useState } from "react";

export default function DesktopNavLinks() {
  const active = useActiveSection();
  const AMM_POS = [
    { pos: -24, width: 24 },
    { pos: 24, width: 39.4 },
    { pos: 95.4, width: 45.25 },
    { pos: 172.65, width: 64.85 },
    { pos: 269.5, width: 85.17 },
  ];
  const activeMarkerMorph = {
    unmounted: AMM_POS[0],
    home: AMM_POS[1],
    about: AMM_POS[2],
    experience: AMM_POS[2],
    projects: AMM_POS[3],
    "more-projects": AMM_POS[3],
    recommendations: AMM_POS[3],
    contact: AMM_POS[4],
  };
  const activeMarkerSpring = useSpring({
    to: {
      width: activeMarkerMorph[active].width,
      x: activeMarkerMorph[active].pos,
    },
  });

  const scrollDirection = useScrollDirection();
  const activeNavSpring = useSpring({
    from: { y: 0 },
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
      className="absolute w-fit top-8 right-8 bg-white dark:bg-grey-2 ring-1 dark:ring-0 ring-grey-ea rounded-[10px] font-visby font-medium px-6 py-[7px] gap-6 hidden md:flex items-center select-none overflow-x-clip overflow-y-visible"
      style={activeNavSpring}
    >
      <a.div
        className="active-marker absolute left-0 top-[calc(100%-7.5px)] h-[5px] overflow-hidden"
        style={{
          width: to(activeMarkerSpring.width, (w) => `${w}px`),
          transform: to(
            activeMarkerSpring.x,
            (x) => `translateX(calc(${x}px)) translateY(50%)`
          ),
        }}
      >
        <div className="h-[10px] bg-blue-100 dark:bg-blue-d-200 rounded-[4px] w-full" />
      </a.div>
      <ul className="flex items-center text-sm gap-8 leading-[1.5] text-grey-6  dark:text-grey-b">
        {navigationData.anchors.map((anchor) => (
          <li
            key={anchor.name}
            className={`flex items-center gap-2 group/nav-item transition-colors ${
              active == anchor.name && "text-black dark:text-grey-d"
            }`}
          >
            <a
              href={anchor.link}
              className="group-hover/nav-item:text-black dark:group-hover/nav-item:text-grey-d transition-colors"
            >
              {anchor.title}
            </a>
            {anchor.subAnchors && (
              <Dropdown
                name={anchor.name}
                anchors={anchor.subAnchors}
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
      <ul className="flex gap-4">
        {navigationData.socials.map((social) => (
          <li key={social.name}>
            <a href={social.link} rel="noopener noreferrer" target="_blank">
              {social.icon}
            </a>
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
function Dropdown({ name, anchors, open, setOpen }: DropdownProps<SubAnchor>) {
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

  return (
    <div className="dropdown relative">
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
        style={{ ...openDropdownSpring, pointerEvents: open ? "all" : "none" }}
      >
        <div className="relative translate-x-8">
          <div className="dropdown-pointer absolute w-[16.9px] h-[16.9px] bg-white ring-1 ring-grey-d dark:ring-0 dark:bg-grey-2 rotate-45 rounded-[2px] -top-[12px] -translate-y-1/2"></div>
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
