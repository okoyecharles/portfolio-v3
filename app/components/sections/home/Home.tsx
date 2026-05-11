"use client";
import { a, to, useSpringRef, useTrail } from "@react-spring/web";
import Button from "../../core/Button";
import DownloadIcon from "../../svg/icons/DownloadIcon";
import { useObservedSprings } from "../../../hooks/useObservedSprings";
import Section from "../Section";
import animation from "../../animations/animations";
import Link from "../../core/Link";
import MagneticCursor from "../../background/MagneticCursor";

export default function Home() {
  const exportFormat = "pdf";
  const resumeDownloadLink = `https://docs.google.com/document/d/${process.env.NEXT_PUBLIC_RESUME_GOOGLE_DOC_ID}/export?format=${exportFormat}`;

  const transformRef = useSpringRef();
  const opacityRef = useSpringRef();

  const layoutTransformTrail = useTrail(5, {
    ref: transformRef,
    from: animation.layout.reveal.start[0],
    ...animation.layout.reveal.end[0](),
  });

  const layoutOpacityTrail = useTrail(5, {
    ref: opacityRef,
    from: animation.layout.reveal.start[1],
    ...animation.layout.reveal.end[1](),
  });

  const { observedRef } = useObservedSprings(
    [transformRef, opacityRef],
		[.1, .1, .1, .1, .1],
  );

  return (
    <Section
      name="home"
      id="content"
      gap="32px"
      padding="justify-center relative -top-[96px] md:-top-[112px]"
      fillScreen
      sectionRef={observedRef}
    >
      <header className="md:self-center md:text-center">
        <a.h1
          className="text-grey-1 dark:text-grey-d mb-2 relative z-10"
					style={{
            transform: to(layoutTransformTrail[1].y, (y) => `translateY(${y}px)`),
            opacity: to(layoutOpacityTrail[1].opacity, (op: number) => `${op}`),
					}}
        >
          <div className="inline-block w-0 absolute -top-6 md:-top-3 md:-left-9">
            <a.div
              className={`
                select-none font-bold font-fira text-grey-3 dark:text-grey-b text-lg md:text-xl lg:text-2xl
              `}
							style={{
                transform: to(layoutTransformTrail[0].y, (y) => `translateY(${y}px)`),
                opacity: to(layoutOpacityTrail[0].opacity, (op: number) => `${op}`),
							}}
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
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  {/* .625 sm:75 lg:100 */}
                  <MagneticCursor />
                </span>
              </span>
              <span>RLES</span>
            </span>
          </div>
        </a.h1>

        <a.h2
          className="text-grey-3 dark:text-grey-b font-fira font-bold tracking-wide text-lg md:text-xl lg:text-2xl md:text-center"
					style={{
            transform: to(layoutTransformTrail[2].y, (y) => `translateY(${y}px)`),
            opacity: to(layoutOpacityTrail[2].opacity, (op: number) => `${op}`),
					}}
        >
          I EMBRACE THE DIGITAL WORLD
        </a.h2>
      </header>
      <a.p
        className="max-w-sm md:max-w-[550px] md:text-center md:self-center"
				style={{
          transform: to(layoutTransformTrail[3].y, (y) => `translateY(${y}px)`),
          opacity: to(layoutOpacityTrail[3].opacity, (op: number) => `${op}`),
				}}
      >
        I can help you build a product, feature, or website. Look through my
        work and experience! If you are interested, I am available for hire.
      </a.p>
      <a.div
        className="flex flex-wrap gap-6 call-to-action-buttons md:self-center"
				style={{
          transform: to(layoutTransformTrail[4].y, (y) => `translateY(${y}px)`),
          opacity: to(layoutOpacityTrail[4].opacity, (op: number) => `${op}`),
				}}
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
    </Section>
  );
}
