"use client";
import aboutData from "@/app/data/about";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import AboutImage from "./AboutImage";
import AboutList from "@/app/components/sections/about/AboutList";
import Link from "../../core/Link";
import { a, to, useSpring, useSpringRef, useTrail } from "@react-spring/web";
import { useObservedSprings } from "../../../hooks/useObservedSprings";
import animation from "../../animations/animations";

export default function About() {
  const headerTRef = useSpringRef();
  const headerORef = useSpringRef();
  const layoutTRef = useSpringRef();
  const layoutORef = useSpringRef();
  const imageTRef = useSpringRef();
  const imageORef = useSpringRef();

  const headerTransform = useTrail(3, {
    ref: headerTRef,
    from: animation.layout.reveal.start[0],
    ...animation.layout.reveal.end[0](),
  });

  const headerOpacity = useTrail(3, {
    ref: headerORef,
    from: animation.layout.reveal.start[1],
    ...animation.layout.reveal.end[1](),
  });

  const layoutTransform = useSpring({
    ref: layoutTRef,
    from: animation.layout.revealSlow.start[0],
    ...animation.layout.revealSlow.end[0](),
  });

  const layoutOpacity = useSpring({
    ref: layoutORef,
    from: animation.layout.revealSlow.start[1],
    ...animation.layout.revealSlow.end[1](),
  });

  const imageTransform = useSpring({
    ref: imageTRef,
    from: animation.layout.reveal.start[0],
    ...animation.layout.reveal.end[0](),
  });

  const imageOpacity = useSpring({
    ref: imageORef,
    from: animation.layout.reveal.start[1],
    ...animation.layout.reveal.end[1](),
  });

  const { observedRef } = useObservedSprings(
    [
      headerTRef,
      headerORef,
      layoutTRef,
      layoutORef,
      imageTRef,
      imageORef,
    ],
    [0.5, 0.5, 0.7, 0.7, 0, 0],
  );

  const headerReveal = (index: number) => ({
    transform: to(headerTransform[index].y, (y) => `translateY(${y}px)`),
    opacity: to(headerOpacity[index].opacity, (op: number) => `${op}`),
  });

  const layoutReveal = () => ({
    transform: to(layoutTransform.y, (y) => `translateY(${y}px)`),
    opacity: to(layoutOpacity.opacity, (op: number) => `${op}`),
  });

  const imageReveal = () => ({
    transform: to(imageTransform.y, (y) => `translateY(${y}px)`),
    opacity: to(imageOpacity.opacity, (op: number) => `${op}`),
  });

  return (
    <Section name="about" id="about" padding="pt-12 pb-16 md:py-8">
      <SectionHeader>About me</SectionHeader>
      <div className="grid gap-6 semi-lg:grid-cols-10 my-6 semi-lg:my-[96px] semi-lg:mt-[128px] semi-lg:mb-[256px]">
        <AboutImage
          imageAnimate={imageReveal}
        />
        <div
          className="grid gap-6 about-content semi-lg:col-span-6 semi-lg:grid-cols-2"
          ref={observedRef}
        >
          <article className="md:col-span-2">
            <a.h3
              className="text-lg leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(0)}
            >
              Introduction
            </a.h3>
            <a.div style={layoutReveal()} className={"leading-[1.5]"}>
              <a.p className="mb-4 ">
                My name is{" "}
                <strong
                  className="text-grey-1 dark:text-grey-d whitespace-nowrap"
                  aria-describedby="about-info-1"
                >
                  Okoye Charles Kosisochukwu
                </strong>
                , A{" "}
                <strong className="text-grey-1 dark:text-grey-d whitespace-nowrap">
                  Frontend Developer
                </strong>{" "}
                based in Nigeria
                <span className="h-4 w-6 inline-flex items-center align-middle ml-1">
                  <span className="w-2 h-4 bg-green/80 animate-[wave_2s_ease-in-out_infinite]" />

                  <span className="w-2 h-4 bg-grey-ea dark:bg-white animate-[wave_2s_ease-in-out_infinite] [animation-delay:0.5s]" />

                  <span className="w-2 h-4 bg-green/80 animate-[wave_2s_ease-in-out_infinite] [animation-delay:1s]" />
                </span>
                <span className="opacity-0 inline">.</span> I spend most of my
                time designing cool stuff and coding them up.
              </a.p>
              <a.p>
                My goal is to deliver, through code, unique and innovative
                solutions to complex problems. If my portfolio interests you, or
                you need an enthusiastic developer on your team,{" "}
                <Link href={`mailto:${aboutData.email}`}>
                  I am available for hire
                </Link>
                .
              </a.p>
            </a.div>
          </article>
          <article>
            <a.h3
              className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(1)}
            >
              Languages & Technologies
            </a.h3>
            <AboutList items={aboutData.technologies} />
          </article>
          <article>
            <a.h3
              className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(2)}
            >
              Tools & Methods
            </a.h3>
            <AboutList items={aboutData.tools} />
          </article>
        </div>
      </div>
    </Section>
  );
}
