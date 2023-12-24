"use client";
import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Plus from "../../background/Plus";
import HorizontalDottedLine from "../../background/HorizontalDottedLine";
import DottedLine from "../../background/DottedLine";
import Link from "../../clickable/Link";
import aboutData from "@/app/data/about";
import {
  a,
  useChain,
  useSpring,
  useSpringRef,
  useTrail,
} from "@react-spring/web";

export default function About() {
  return (
    <Section>
      <SectionHeader>About me</SectionHeader>
      <div className="grid gap-6 md:grid-cols-10 my-6 md:my-[96px] lg:mt-[128px] lg:mb-[256px]">
        <AboutImage />
        <div className="about-content md:col-span-6 grid gap-6 md:grid-cols-2">
          <article className="md:col-span-2">
            <h3 className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2">
              Introduction
            </h3>
            <p className="mb-2">
              My name is Okoye Charles Kosisochukwu \options\, a{" "}
              <strong className="text-grey-1 dark:text-grey-d whitespace-nowrap">
                Full-Stack Developer
              </strong>{" "}
              (front-end heavy) based in Nigeria. I spend most of my time
              designing graphics, coding up things for the web, and learning
              algorithms.
            </p>
            <p>
              My goal is to deliver, through code, unique and innovative
              solutions to complex problems. If my portfolio interests you, or
              you need an enthusiastic developer on your team,{" "}
              <Link href="mailto:okoyecharles@gmail.com">
                I am available for hire
              </Link>
              .
            </p>
          </article>
          <article>
            <h3 className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2">
              Languages & Technologies
            </h3>
            <AboutList items={aboutData.technologies} />
          </article>
          <article>
            <h3 className="text-[18px] leading-[1.3] font-semibold text-grey-1 dark:text-grey-d mb-2">
              Tools & Methods
            </h3>
            <AboutList items={aboutData.tools} />
          </article>
        </div>
      </div>
    </Section>
  );
}

function AboutImage() {
  return (
    <figure className="group/figure about-image relative max-w-[350px] aspect-square p-[25px] mx-auto lg:my-auto md:col-span-4">
      <div className="w-full rounded-[10px] max-w-[300px] aspect-square overflow-hidden">
        <Image
          src="/assets/okoyecharles.webp"
          alt="A portrait image of Okoye Charles"
          width={300}
          height={300}
          className="group-hover/figure:scale-105 transition-transform duration-500 delay-100"
        />
      </div>
      <div className="aesthetics absolute inset-0 -z-10">
        <div className="absolute top-[12.5px] left-1/2 -translate-x-1/2">
          <HorizontalDottedLine variant="bold" />
        </div>
        <div className="absolute right-[12.5px] top-1/2 -translate-y-1/2">
          <DottedLine variant="bold" />
        </div>
        <div className="absolute bottom-[12.5px] left-1/2 -translate-x-1/2">
          <HorizontalDottedLine variant="bold" />
        </div>
        <div className="absolute left-[12.5px] top-1/2 -translate-y-1/2">
          <DottedLine variant="bold" />
        </div>
        <div className="absolute top-0 left-0 group-hover/figure:rotate-[.25turn] transition-transform">
          <Plus className="stroke-grey-8 dark:stroke-grey-9 group-hover/figure:stroke-blue-100 dark:group-hover/figure:stroke-blue-d-200 duration-300" />
        </div>
        <div className="absolute top-0 right-0 group-hover/figure:rotate-[.25turn] transition-transform">
          <Plus className="stroke-grey-8 dark:stroke-grey-9 group-hover/figure:stroke-blue-100 dark:group-hover/figure:stroke-blue-d-200 duration-300" />
        </div>
        <div className="absolute bottom-0 right-0 group-hover/figure:rotate-[.25turn] transition-transform">
          <Plus className="stroke-grey-8 dark:stroke-grey-9 group-hover/figure:stroke-blue-100 dark:group-hover/figure:stroke-blue-d-200 duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 group-hover/figure:rotate-[.25turn] transition-transform">
          <Plus className="stroke-grey-8 dark:stroke-grey-9 group-hover/figure:stroke-blue-100 dark:group-hover/figure:stroke-blue-d-200 duration-300" />
        </div>
      </div>
    </figure>
  );
}

function AboutList({
  items,
}: {
  items: typeof aboutData.technologies | typeof aboutData.technologies;
}) {
  const LIST_HEIGHT = 32 * (items.length - 1);
  const ITEM_HIGHT = 24;

  const LERef = useSpringRef();
  const lineExtendSpring = useSpring({
    ref: LERef,
    from: { height: 0 },
    to: { height: LIST_HEIGHT },
    config: {
      friction: 35,
      tension: 150,
    },
  });

  const LMRef = useSpringRef();
  const listMarkerTrail = useTrail(items.length, {
    ref: LMRef,
    from: { y: "-50%", scale: 0 },
    to: { y: "-50%", scale: 1 },
    config: {
      friction: 35,
      tension: 400,
    },
  });

  const LIRef = useSpringRef();
  const listItemTrail = useTrail(items.length, {
    ref: LIRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useChain([LERef, LMRef, LIRef], [0, 0, 0.5]);

  return (
    <div className="relative">
      <a.div
        className="list-marker-line absolute top-[12px] left-[12px] w-[2px] bg-grey-ea dark:bg-grey-2"
        style={lineExtendSpring}
      />
      <ul className="grid gap-2">
        {items.map((item, itemIndex) => (
          <li className="ps-[34px] relative" key={item}>
            <a.div
              className="list-marker h-[10px] aspect-square rounded-[5px] ring-1 ring-blue-100 dark:ring-blue-200 bg-grey-ea dark:bg-grey-2 absolute top-1/2 -translate-y-1/2 left-2"
              style={listMarkerTrail[itemIndex]} 
            />
            <a.span className="block" style={listItemTrail[itemIndex]}>
              {item}
            </a.span>
          </li>
        ))}
      </ul>
    </div>
  );
}
