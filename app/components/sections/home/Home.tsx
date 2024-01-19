"use client";
import { a, to, useTrail } from "@react-spring/web";
import Button from "../../clickable/Button";
import DownloadIcon from "../../svg/icons/DownloadIcon";
import { useObservedSprings } from "../../utils/useObservedSpring";
import Section from "../Section";
import HomeBackground from "./HomeBackground";
import animation from "../../animations/animations";

export default function Home() {
  const {
    observedRef,
    springAnimate: [
      layoutTransform,
      layoutOpacity,
      bgLineGlow,
      bgLineReveal,
    ],
  } = useObservedSprings(
    [
      ...animation.layout.reveal.start,
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
    ],
    [
      ...animation.layout.reveal.end.map((x) => x()),
      animation.bg.lineGlow.end({ delay: 750 }),
      animation.bg.lineReveal.end({ delay: 750 }),
    ],
    [
      (cb: Function) => useTrail(5, cb, []),
      (cb: Function) => useTrail(5, cb, []),
      (cb: Function) => useTrail(9, cb, []),
      (cb: Function) => useTrail(9, cb, []),
    ]
  );

  const layoutReveal = (index: number) => ({
    transform: to(layoutTransform[index].y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacity[index].opacity, (op: number) => `${op}`),
  });

  return (
    <Section
      name="home"
      id="home-section"
      padding="pt-[150px] pb-[200px] md:pt-[128px] md:pb-[256px]"
      sectionRef={observedRef}
    >
      <header className="relative md:self-center">
        <a.h1
          className="text-grey-1 dark:text-grey-d text-[64px] lg:text-[100px] leading-[1.1] font-visby uppercase font-extrabold"
          style={layoutReveal(1)}
        >
          Okoye Charles
        </a.h1>
        <a.div
          className="font-extrabold text-grey-2 dark:text-grey-b text-[24px] font-mono absolute leading-[1] -top-6 -left-0 md:-top-2 lg:-top-0 md:-left-10 select-none"
          style={layoutReveal(0)}
        >
          I<span className="text-blue-200 dark:text-blue-d-200">'</span>m
        </a.div>
        <a.h3
          className="uppercase dark:text-grey-6 font-lato font-semibold md:text-[18px] md:text-center"
          style={layoutReveal(2)}
        >
          I embrace the digital world
        </a.h3>
      </header>
      <a.p
        className="py-9 max-w-[700px] md:text-[18px] md:text-center md:self-center"
        style={layoutReveal(3)}
      >
        I can help you build a product, feature, or website. Look through my
        work and experience! If you are interested, I am available for hire
      </a.p>
      <a.div
        className="flex flex-wrap gap-6 call-to-action-buttons md:self-center"
        style={layoutReveal(4)}
      >
        <Button>Check out my work</Button>
        <Button variant="black">
          <span>Resume</span>
          <DownloadIcon />
        </Button>
      </a.div>
      <HomeBackground
        glowBackground={bgLineGlow}
        revealBackground={bgLineReveal}
      />
    </Section>
  );
}
