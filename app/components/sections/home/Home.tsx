"use client";
import { a, to, useTrail } from "@react-spring/web";
import Button from "../../clickable/Button";
import DownloadIcon from "../../svg/icons/DownloadIcon";
import { useObservedSprings } from "../../utils/useObservedSpring";
import Section from "../Section";
import HomeBackground from "./HomeBackground";
import animation from "../../animations/animations";
import Link from "../../clickable/Link";
import BlueCursorIcon from "../../svg/home/BlueCursor";

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
    ],
  );

  const layoutReveal = (index: number) => ({
    transform: to(layoutTransformTrail[index].y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacityTrail[index].opacity, (op: number) => `${op}`),
  });

  return (
    <Section
      name="home"
      id="content"
      gap="32px"
      padding="py-[192px] md:py-[192px]"
      sectionRef={observedRef}
    >
      <header className="md:self-center md:text-center">
        <a.h1
          className="text-grey-1 dark:text-grey-d mb-2 relative"
          style={layoutReveal(1)}
        >
          <div className="inline-block w-0 absolute -top-6 md:-top-3 md:-left-9">
            <a.div
              className={`
                select-none font-bold font-fira text-grey-3 dark:text-grey-b text-lg md:text-xl lg:text-2xl
              `}
              style={layoutReveal(0)}
              aria-label={"I AM"}
            >
              I<span className="text-blue-200 dark:text-blue-d-200">'</span>m
            </a.div>
            <span className="invisible">I'm</span>
          </div>
          <div
            className="font-visby font-black text-grey-0a dark:text-white leading-none text-[60px] sm:text-[72px] lg:text-8xl"
            aria-label="OKOYE CHARLES"
          >
            <span>OKOYE </span>
            <span className="inline-block whitespace-nowrap">
              <span>CH</span>
              <span className="relative inline-block">
                <span className="opacity-0">A</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom  -translate-y-[5px] scale-[.625] sm:scale-75 lg:scale-100">
                  <BlueCursorIcon />
                </span>
              </span>
              <span>RLES</span>
            </span>
          </div>
        </a.h1>

        <a.h2
          className="text-grey-3 dark:text-grey-b font-fira font-bold tracking-wide text-lg md:text-xl lg:text-2xl md:text-center"
          style={layoutReveal(2)}
        >
          I EMBRACE THE DIGITAL WORLD
        </a.h2>
      </header>
      <a.p
        className="max-w-sm md:max-w-[650px] text-lg md:text-center md:self-center"
        style={layoutReveal(3)}
      >
        I can help you build a product, feature, or website. Look through my
        work and experience! If you are interested, I am available for hire.
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
        <Link
          href={resumeDownloadLink}
          variant="plain"
          download
          ariaLabel="download resume"
        >
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
