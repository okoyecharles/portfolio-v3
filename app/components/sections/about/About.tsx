"use client";
import { AboutImageProps, AboutListProps } from "./props";
import aboutData from "@/app/data/about";
import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Plus from "../../background/Plus";
import HorizontalDottedLine from "../../background/HorizontalDottedLine";
import DottedLine from "../../background/DottedLine";
import Link from "../../clickable/Link";
import { a, to, useSpring, useTrail } from "@react-spring/web";
import { useObservedSprings } from "../../utils/useObservedSpring";
import animation from "../../animations/animations";

export default function About() {
  const {
    observedRef,
    springAnimate: [
      headerTransform,
      headerOpacity,
      layoutTransform,
      layoutOpacity,
      imageTransform,
      imageOpacity,
      bgLineGlow,
      bgLineReveal,
      bgPlusReveal,
    ],
  } = useObservedSprings(
    [
      ...animation.layout.reveal.start,
      ...animation.layout.revealSlow.start,
      ...animation.layout.reveal.start,
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
      animation.bg.plusReveal.start,
    ],
    [
      ...animation.layout.reveal.end.map((x) => x()),
      ...animation.layout.revealSlow.end.map((x) => x({ delay: 500 })),
      ...animation.layout.reveal.end.map((x) => x()),
      animation.bg.lineGlow.end({ config: { tension: 75 }, delay: 450 }),
      animation.bg.lineReveal.end({ delay: 450 }),
      animation.bg.plusReveal.end({ delay: 0 }),
    ],
    [
      (cb: Function) => useTrail(3, cb, []),
      (cb: Function) => useTrail(3, cb, []),
      useSpring,
      useSpring,
      useSpring,
      useSpring,
      useSpring,
      useSpring,
      (cb: Function) => useTrail(4, cb, []),
    ]
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
    <Section name="about" id="about">
      <SectionHeader>About me</SectionHeader>
      <div className="grid gap-6 md:grid-cols-10 my-6 md:my-[96px] lg:mt-[128px] lg:mb-[256px]">
        <AboutImage
          imageAnimate={imageReveal}
          plusReveal={bgPlusReveal}
          lineAnimate={[bgLineReveal, bgLineGlow]}
        />
        <div
          className="grid gap-6 about-content md:col-span-6 md:grid-cols-2"
          ref={observedRef}
        >
          <article className="md:col-span-2">
            <a.h3
              className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2"
              style={headerReveal(0)}
            >
              Introduction
            </a.h3>
            <a.div style={layoutReveal()}>
              <a.p className="mb-4">
                My name is Okoye Charles Kosisochukwu \options\, a{" "}
                <strong className="text-grey-1 dark:text-grey-d whitespace-nowrap">
                  Full-Stack Developer
                </strong>{" "}
                (front-end heavy) based in Nigeria. I spend most of my time
                designing graphics, coding up things for the web, and learning
                algorithms.
              </a.p>
              <a.p>
                My goal is to deliver, through code, unique and innovative
                solutions to complex problems. If my portfolio interests you, or
                you need an enthusiastic developer on your team,{" "}
                <Link href="mailto:okoyecharles@gmail.com">
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

function AboutImage({
  imageAnimate,
  plusReveal,
  lineAnimate,
}: AboutImageProps) {
  const plusPositions = [
    "top-0 left-0",
    "top-0 right-0",
    "bottom-0 right-0",
    "bottom-0 left-0",
  ];

  return (
    <picture className="group/figure about-image relative max-w-[350px] aspect-square p-[25px] mx-auto lg:my-auto md:col-span-4">
      <a.div
        className="w-full rounded-[10px] max-w-[300px] aspect-square overflow-hidden"
        style={imageAnimate()}
      >
        <Image
          src="/assets/okoyecharles.webp"
          alt="A portrait image of Okoye Charles"
          width={300}
          height={300}
          className="transition-transform duration-500 delay-100 group-hover/figure:scale-105"
        />
      </a.div>
      <div className="absolute inset-0 aesthetics -z-10">
        <div className={`absolute top-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>
        <div className={`absolute right-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>
        <div className={`absolute bottom-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>
        <div className={`absolute left-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>

        {plusPositions.map((pos, index) => (
          <div
            key={pos}
            className={`absolute ${pos} group-hover/figure:rotate-[.25turn] transition-transform`}
          >
            <Plus
              className="duration-300 stroke-grey-8 dark:stroke-grey-9 group-hover/figure:stroke-blue-100 dark:group-hover/figure:stroke-blue-d-200"
              animation={plusReveal[index]}
            />
          </div>
        ))}
      </div>
    </picture>
  );
}

function AboutList({ items }: AboutListProps) {
  const LIST_HEIGHT = 32 * (items.length - 1);

  const { observedRef, springAnimate } = useObservedSprings(
    [{ height: 0 }, { y: "-50%", scale: 0 }, { opacity: 0 }],
    [
      {
        height: LIST_HEIGHT,
        config: { friction: 35, tension: 250 },
        delay: 250,
      },
      {
        y: "-50%",
        scale: 1,
        config: { friction: 35, tension: 500 },
        delay: 250,
      },
      { opacity: 1, delay: 450 },
    ],
    [
      useSpring,
      (cb: Function) => useTrail(items.length, cb),
      (cb: Function) => useTrail(items.length, cb),
    ]
  );

  return (
    <div className="relative" ref={observedRef}>
      <a.div
        className="list-marker-line absolute top-[12px] left-[12px] w-[2px] bg-grey-ea dark:bg-grey-2"
        style={springAnimate[0]}
      />
      <ul className="grid gap-2">
        {items.map((item, itemIndex) => (
          <li className="ps-[34px] relative" key={item}>
            <a.div
              className="list-marker h-[10px] aspect-square rounded-[5px] ring-1 ring-blue-100 dark:ring-blue-200 bg-grey-ea dark:bg-grey-2 absolute top-1/2 -translate-y-1/2 left-2"
              style={springAnimate[1][itemIndex]}
            />
            <a.span className="block" style={springAnimate[2][itemIndex]}>
              {item}
            </a.span>
          </li>
        ))}
      </ul>
    </div>
  );
}
