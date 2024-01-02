"use client";
import CloseMenuIcon from "../svg/CloseMenuIcon";
import MenuIcon from "../svg/MenuIcon";
import { useState } from "react";
import VerticalLineIcon from "../svg/VerticalLineIcon";
import {
  a,
  to,
  useChain,
  useSpring,
  useSpringRef,
  useTrail,
} from "@react-spring/web";
import mobileNavigationData from "@/app/data/navigation";
import useScrollDirection from "../utils/useScrollDirection";
import useActiveSection from "../utils/useActiveSection";

export default function NavLinks() {
  const [open, setOpen] = useState<boolean>(false);
  const active = useActiveSection();

  function toggleMenu() {
    setOpen((state) => !state);
  }

  const NAV_HEADER_HEIGHT = 48;
  const NAV_ITEMS_HEIGHT = 48 * mobileNavigationData.anchors.length;
  const NAV_OPEN_HEIGHT = NAV_ITEMS_HEIGHT + NAV_HEADER_HEIGHT + 6;

  const TMSRef = useSpringRef();
  const toggleMenuSpring = useSpring({
    ref: TMSRef,
    to: {
      width: open ? 100 : 0,
      widthoffset: open ? 48 : -48,
      height: open ? NAV_OPEN_HEIGHT : NAV_HEADER_HEIGHT,
    },
    config: {
      friction: 27.5,
      tension: 300,
    },
  });

  const LERef = useSpringRef();
  const lineExtendSpring = useSpring({
    ref: LERef,
    to: {
      scale: open ? 100 : 0,
    },
  });

  const LMRef = useSpringRef();
  const listMarkerTrail = useTrail(mobileNavigationData.anchors.length, {
    ref: LMRef,
    to: {
      scale: open ? 1 : 0,
    },
    config: {
      friction: 25,
      tension: 300,
    },
  });

  const LIRef = useSpringRef();
  const listItemTrail = useTrail(mobileNavigationData.anchors.length, {
    ref: LIRef,
    to: {
      y: open ? 0 : -20,
    },
    config: {
      friction: 35,
      tension: 400,
    },
  });

  useChain([TMSRef, LERef, LMRef, LIRef], [0, 0.25, 0.25, 0]);

  const scrollDirection = useScrollDirection();
  const activeNavSpring = useSpring({
    from: { y: 0 },
    to: {
      y: scrollDirection == "down" && !open ? -100 : 0,
    },
    delay: 250,
    config: {
      tension: 300,
      friction: 40,
    },
  });

  return (
    <a.div
      className={`absolute top-6 right-6 h-12 w-12 bg-grey-ea dark:bg-grey-2 ring-1 dark:ring-0 ring-grey-b rounded-[10px] md:hidden overflow-hidden`}
      style={{
        width: to(
          [toggleMenuSpring.width, toggleMenuSpring.widthoffset],
          (w, offset) => `calc(${w}vw - ${offset}px)`
        ),
        height: to(toggleMenuSpring.height, (h) => h),
        transform: to(activeNavSpring.y, (y) => `translateY(${y}px)`),
      }}
    >
      <div className="nav-positioner w-[calc(100vw-48px)] bg-grey-ea dark:bg-grey-2 absolute right-0 top-0">
        <div className="flex flex-col items-end">
          <button className="h-12 w-12 relative" onClick={toggleMenu}>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ${
                open ? "-rotate-45 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <MenuIcon />
            </div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition ${
                open ? "rotate-0 opacity-100" : "rotate-45 opacity-0"
              }`}
            >
              <CloseMenuIcon />
            </div>
          </button>
        </div>
        <a.div
          className="menu-line absolute top-0 left-[29px]"
          style={{
            transform: to(
              lineExtendSpring.scale,
              (scale) => `scaleY(${scale}%)`
            ),
            transformOrigin: "top",
          }}
        >
          <VerticalLineIcon
            color="stroke-grey-b dark:stroke-grey-5"
            height={NAV_OPEN_HEIGHT - 24}
          />
        </a.div>
        <nav className="px-6">
          <ul className="flex flex-col text-base text-grey-6 dark:text-grey-b ms-[25px] font-visby font-medium">
            {mobileNavigationData.anchors.map((anchor, anchorIndex) => (
              <li className="flex relative" key={anchor.name}>
                <a.a
                  href={anchor.link}
                  style={listItemTrail[anchorIndex]}
                  className={`peer py-3 uppercase hover:text-black dark:hover:text-grey-d transition-colors ${
                    active == anchor.name && "text-black dark:text-grey-d"
                  }`}
                >
                  {anchor.name}
                </a.a>
                <a.div
                  style={{
                    transform: to(
                      listMarkerTrail[anchorIndex].scale,
                      (scale) => `translateY(-50%) scale(${scale * 100}%)`
                    ),
                  }}
                  className={`list-marker ring-1 ring-grey-6/0 peer-hover:ring-grey-6 dark:peer-hover:ring-grey-9 absolute top-1/2  -left-[25px] w-[10px] h-[10px]  rounded-[2.5px] bg-grey-b dark:bg-grey-5 transition-colors ${
                    active == anchor.name &&
                    "!bg-blue-200 dark:!bg-blue-d-200 !ring-0"
                  }`}
                ></a.div>
              </li>
            ))}
          </ul>
          <ul className="flex 1 gap-4 absolute bottom-[12px] right-[12px]">
            {mobileNavigationData.socials.map((social) => (
              <li key={social.name}>
                <a href={social.link} rel="noopener noreferrer" target="_blank">
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </a.div>
  );
}
