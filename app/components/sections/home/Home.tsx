"use client";
import { a, to, useTrail } from "@react-spring/web";
import Button from "../../clickable/Button";
import DownloadIcon from "../../svg/DownloadIcon";
import { useObservedSprings } from "../../utils/useObservedSpring";
import Section from "../Section";
import HomeBackground from "./HomeBackground";
import { homeBgAnimation as hba } from "./homeBackgroundData";

export default function Home() {
  const {
    observedRef,
    springAnimate: [
      transformTrail,
      opacityTrail,
      glowBackground,
      revealBackground,
      revealBackgroundPlus,
    ],
  } = useObservedSprings(
    [
      { y: 32 },
      { opacity: 0 },
      hba.glowBackground.start,
      hba.revealBackground.start,
      hba.revealBackgroundPlus.start,
    ],
    [
      { to: { y: 0 }, config: { tension: 420, friction: 35 } },
      { to: { opacity: 1 }, config: { tension: 250, friction: 40 } },
      hba.glowBackground.end,
      hba.revealBackground.end,
      hba.revealBackgroundPlus.end,
    ],
    [
      (cb: Function) => useTrail(5, cb),
      (cb: Function) => useTrail(5, cb),
      (cb: Function) => useTrail(9, cb),
      (cb: Function) => useTrail(9, cb),
      (cb: Function) => useTrail(9, cb),
    ]
  );

  const trailInterpolate = (index: number) => ({
    transform: to(transformTrail[index].y, (y) => `translateY(${y}px)`),
    opacity: to(opacityTrail[index].opacity, (op: number) => `${op}`),
  });

  return (
    <Section
      name="home"
      padding="pt-[150px] pb-[200px] md:pt-[128px] md:pb-[256px]"
      sectionRef={observedRef}
    >
      <header className="relative md:self-center">
        <a.h1
          className="text-grey-1 dark:text-grey-d text-[64px] lg:text-[100px] leading-[1.1] font-visby uppercase font-extrabold"
          style={trailInterpolate(1)}
        >
          Okoye Charles
        </a.h1>
        <a.div
          className="font-extrabold text-grey-2 dark:text-grey-b text-[24px] font-mono absolute leading-[1] -top-6 -left-0 md:-top-2 lg:-top-0 md:-left-10 select-none"
          style={trailInterpolate(0)}
        >
          I<span className="text-blue-200 dark:text-blue-d-200">'</span>m
        </a.div>
        <a.h3
          className="uppercase dark:text-grey-6 font-lato font-semibold md:text-[18px] md:text-center"
          style={trailInterpolate(2)}
        >
          I embrace the digital world
        </a.h3>
      </header>
      <a.p
        className="py-9 max-w-[700px] md:text-[18px] md:text-center md:self-center"
        style={trailInterpolate(3)}
      >
        I can help you build a product, feature, or website. Look through my
        work and experience! If you are interested, I am available for hire
      </a.p>
      <a.div
        className="call-to-action-buttons flex flex-wrap gap-6 md:self-center"
        style={trailInterpolate(4)}
      >
        <Button>Check out my work</Button>
        <Button variant="black">
          <span>Resume</span>
          <DownloadIcon />
        </Button>
      </a.div>
      <HomeBackground
        glowBackground={glowBackground}
        revealBackground={revealBackground}
        revealBackgroundPlus={revealBackgroundPlus}
      />
    </Section>
  );
}
