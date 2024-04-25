"use client";
import { a, to, useTrail } from "@react-spring/web";
import Button from "../../clickable/Button";
import DownloadIcon from "../../svg/icons/DownloadIcon";
import { useObservedSprings } from "../../utils/useObservedSpring";
import Section from "../Section";
import HomeBackground from "./HomeBackground";
import animation from "../../animations/animations";
import Link from "../../clickable/Link";

export default function Home() {
  const exportFormat = "pdf";
  const resumeDownloadLink = `https://docs.google.com/document/d/${process.env.NEXT_PUBLIC_RESUME_GOOGLE_DOC_ID}/export?format=${exportFormat}`;

  const {
    observedRef,
    springAnimate: [
      layoutTransformTrail,
      layoutOpacityTrail,
      bgLineGlowTrail,
      bgLineRevealTrail,
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
    transform: to(layoutTransformTrail[index].y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacityTrail[index].opacity, (op: number) => `${op}`),
  });

  return (
    <Section
      name="home"
      id="content"
      padding="pt-[246px] pb-[150px] mb-[50px] md:pt-[240px] md:pb-[192px] md:mb-[64px]"
      sectionRef={observedRef}
    >
      <header className="relative md:self-center">
        <a.div
          className="font-extrabold text-grey-2 dark:text-grey-b text-[24px] font-mono absolute leading-[1] -top-6 -left-0 md:-top-2 lg:-top-0 md:-left-10 select-none"
          style={layoutReveal(0)}
          aria-label={"I am"}
        >
          I<span className="text-blue-200 dark:text-blue-d-200">'</span>m
        </a.div>
        <a.h1
          className="text-grey-1 dark:text-grey-d text-[64px] lg:text-[100px] leading-[1.1] font-visby uppercase font-extrabold"
          style={layoutReveal(1)}
        >
          Okoye Charles
        </a.h1>

        <a.h2
          className="uppercase dark:text-grey-6 font-lato font-semibold md:text-[18px] md:text-center"
          style={layoutReveal(2)}
        >
          I embrace the digital world
        </a.h2>
      </header>
      <a.p
        className="py-9 max-w-[700px] md:text-[18px] md:text-center md:self-center"
        style={layoutReveal(3)}
      >
        I can help you build a product, feature, or website. Look through my work and
        experience! If you are interested, I am available for hire.
      </a.p>
      <a.div
        className="flex flex-wrap gap-6 call-to-action-buttons md:self-center"
        style={layoutReveal(4)}
      >
        <Link href="#projects" internal variant="plain">
          <Button variant="blue" tabIndex={-1}>
            Check out my work
          </Button>
        </Link>
        <Link href={resumeDownloadLink} variant="plain" download ariaLabel="download resume">
          <Button variant="black">
            <span>Resume</span>
            <DownloadIcon />
          </Button>
        </Link>
      </a.div>
      <HomeBackground
        glowBackground={bgLineGlowTrail}
        revealBackground={bgLineRevealTrail}
      />
    </Section>
  );
}
