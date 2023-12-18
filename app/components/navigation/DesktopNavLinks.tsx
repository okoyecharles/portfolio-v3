"use client";
import VerticalLineIcon from "../svg/VerticalLineIcon";
import navigationData from "../../data/navigation";
import { a, to, useSpring } from "@react-spring/web";

export default function DesktopNavLinks({ active }: { active: number }) {
  const activeMarkerMorph = [
    { pos: 24, width: 39.4 },
    { pos: 95.4, width: 45.25 },
    { pos: 172.65, width: 64.85 },
    { pos: 269.5, width: 85.17 },
  ];
  const activeMarkerSpring = useSpring({
    to: {
      width: activeMarkerMorph[active].width,
      x: activeMarkerMorph[active].pos,
    },
  });

  return (
    <nav className="absolute w-fit top-9 right-9 bg-white dark:bg-grey-2 ring-1 dark:ring-0 ring-grey-ea rounded-[10px] font-visby font-medium px-6 py-[13px] gap-6 hidden md:flex items-center overflow-hidden">
      <a.div
        className="active-marker absolute left-0 bottom-0 translate-y-1/2 h-[10px] bg-blue-100 dark:bg-blue-d-200 rounded-[4px]"
        style={{
          width: to(activeMarkerSpring.width, (w) => `${w}px`),
          transform: to(
            activeMarkerSpring.x,
            (x) => `translateX(calc(${x}px)) translateY(50%)`
          ),
        }}
      ></a.div>
      <ul className="flex text-sm gap-8 leading-[22px] text-grey-6  dark:text-grey-b">
        {navigationData.anchors.map((anchor, anchorIndex) => (
          <li
            key={anchor.name}
            className={`uppercase hover:text-black dark:hover:text-grey-d transition-colors ${
              active == anchorIndex && "text-black dark:text-grey-d"
            }`}
          >
            <a href={anchor.link}>{anchor.name}</a>
          </li>
        ))}
      </ul>
      <div className="divider">
        <VerticalLineIcon />
      </div>
      <ul className="flex gap-4">
        {navigationData.socials.slice(0, 2).map((social) => (
          <li key={social.name}>
            <a href={social.link} rel="noopener noreferrer" target="_blank">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
