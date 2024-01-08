"use client";
import { ExperienceCardProps, ExperienceControlProps, ExperienceImageProps, ExperienceTimelineProps } from "./props";
import experienceData, {
  experienceTimelineCalculator,
} from "@/app/data/experience";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import moment from "moment";
import Image from "next/image";
import Link from "../../clickable/Link";
import NorthWestIcon from "../../svg/NorthWestIcon";
import React, { useEffect, useState } from "react";
import {
  SpringValue,
  a,
  to,
  useSpring,
  useSpringRef,
  useTrail,
  useTransition,
} from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import SectionDescription from "../SectionDescription";

export default function Experience() {
  const [expertiseIndex, setExpertiseIndex] = useState<number>(0);
  const expertise = experienceData.expertise[expertiseIndex];
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-48px 0px -128px",
  });
  const [viewed, setViewed] = useState<boolean>(false);

  const { YEAR_TIMELINE_POS, MONTH_TIMELINE_HEIGHT } =
    experienceTimelineCalculator(expertise);
  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
    }
  }, [inView]);
  useEffect(() => {
    if (inView) {
      // image animations
      imageTransRef.start();
      // card animations
      CRApi.set({ y: 32, opacity: 0 });
      CRApi.start({
        y: 0,
        opacity: 1,
        delay: 500,
        config: { tension: 350, friction: 40 },
      });
      // timeline animations
      YTSApi.update({ y: -YEAR_TIMELINE_POS });
      YTSApi.start();
      MTHApi.update({ height: MONTH_TIMELINE_HEIGHT });
      MTHApi.start();
      MTMApi.set({ opacity: 0 });
      MTMApi.start({ opacity: 1 });
    }
  }, [viewed, expertiseIndex]);

  // Image Animations
  const imageTransRef = useSpringRef();
  const imageTransition = useTransition(expertiseIndex, {
    ref: imageTransRef,
    keys: null,
    from: { opacity: 0, rotateX: 0, rotateY: 0, rotateZ: 0, y: "-40%" },
    enter: {
      opacity: 1,
      rotateX: 4,
      rotateY: -24,
      rotateZ: 5,
      y: "-50%",
      delay: 500,
    },
    leave: {
      opacity: 0,
      rotateX: 0,
      rotateY: -48,
      rotateZ: 5,
      y: "-50%",
      config: { tension: 350 },
    },
  });

  // Card Animations
  const [contentReveal, CRApi] = useTrail(
    4,
    {
      from: { y: 32, opacity: 0 },
    },
    []
  );

  // Timeline Animations
  const [yearTimeLineScroll, YTSApi] = useSpring(
    () => ({
      from: { y: -275 },
    }),
    []
  );

  const [monthTimeLineHeight, MTHApi] = useSpring(
    () => ({
      from: { height: 0 },
    }),
    []
  );

  const [monthTimeLineMarker, MTMApi] = useSpring(() => ({
    opacity: 0,
  }));

  return (
    <Section name="experience" id="experience" sectionRef={ref}>
      <SectionHeader mode="standalone">
        My <span className="text-blue-100 dark:blue-d-200">experience</span> as
        a developer
      </SectionHeader>
      <SectionDescription>
        A display of my growth as a frontend developer, showcasing the progress
        I have achieved and the valuable experience I've acquired.
      </SectionDescription>
      <div
        className="relative flex experience-content"
        style={{ perspective: "800px" }}
      >
        <ExperienceTimeline
          expertise={expertise}
          yearTimeLineScroll={yearTimeLineScroll}
          monthTimeLineHeight={monthTimeLineHeight}
          monthTimeLineMarker={monthTimeLineMarker}
        />
        <ExperienceCard expertise={expertise} contentReveal={contentReveal} />
        <ExperienceImage imageTransition={imageTransition} />
      </div>
      <ExperienceControl
        expertiseIndex={expertiseIndex}
        setExpertiseIndex={setExpertiseIndex}
        expertiseCount={experienceData.expertise.length}
      />
    </Section>
  );
}

function ExperienceControl({
  expertiseIndex,
  setExpertiseIndex,
  expertiseCount,
}: ExperienceControlProps) {
  return (
    <aside className="flex justify-center gap-3 my-6 lg:my-8">
      {Array(expertiseCount)
        .fill(0)
        .map((_, index) => {
          const isActiveButton = index === expertiseIndex;
          return (
            <button
              key={index}
              className={`w-[12px] aspect-square rounded-[50%] ring-grey-b dark:ring-grey-5 ${
                isActiveButton
                  ? "bg-blue-100 dark:bg-blue-d-200"
                  : "bg-grey-d dark:bg-grey-2 hover:ring-1"
              }`}
              onClick={() => setExpertiseIndex(index)}
            />
          );
        })}
    </aside>
  );
}

function ExperienceImage({ imageTransition }: ExperienceImageProps) {
  return imageTransition(
    (style: Record<string, SpringValue>, index: number) => {
      const expertise = experienceData.expertise[index];
      return (
        <a.div
          className="-z-10 absolute right-0 top-1/2 hidden semi-lg:block md:w-[256px] semi-lg:w-[384px] lg:w-[480px]"
          style={{
            opacity: style.opacity.to((o) => `${o}`),
            transform: to(
              [style.y, style.rotateX, style.rotateY, style.rotateZ],
              (y, rx, ry, rz) =>
                `translateY(${y}) translateX(-15%) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
            ),
          }}
        >
          <Image
            alt={`Certificate of ${expertise.title}`}
            className="rounded-[4px] relative after:absolute after:inset-0 after:bg-grey-5 -z-10 ring-1 ring-grey-ea dark:ring-0"
            src={expertise.showcaseImage}
            width={720}
            height={556.49}
          />
        </a.div>
      );
    }
  );
}

function ExperienceCard({ expertise, contentReveal }: ExperienceCardProps) {
  const dates = expertise.timeRange.map((date) => moment(date).format("MMMM"));
  return (
    <article className="ml-[24px] md:ml-[28px] font-normal flex-1 semi-lg:flex-none semi-lg:w-[384px] lg:w-[512px] flex flex-col">
      <a.header className="flex gap-4 mt-auto" style={contentReveal[0]}>
        <div className="logo rounded-[4px] overflow-clip min-w-[48px] aspect-square h-fit ring-1 ring-grey-ea dark:ring-0">
          <Image
            src={expertise.logo}
            width={48}
            height={48}
            alt={`Logo of ${expertise.title}`}
          />
        </div>
        <div className="flex flex-col gap-1 heading">
          <h3 className="leading-[1] text-grey-1 dark:text-grey-d font-bold">
            {expertise.title}
          </h3>
          <p className="leading-[1.3] text-sm md:text-base">
            {expertise.subTitle}
          </p>
        </div>
      </a.header>
      <div className="flex flex-col gap-3 mb-auto content md:pl-16">
        <a.p className="mt-4" style={contentReveal[1]}>
          {expertise.details}
        </a.p>
        <a.button style={contentReveal[2]} className="w-fit">
          <Link href={expertise.certificate}>
            Certificate of completion <NorthWestIcon />
          </Link>
        </a.button>
        <a.p className="text-sm text-grey-6 md:hidden" style={contentReveal[3]}>
          {dates[0]} - {dates[1]}
        </a.p>
      </div>
    </article>
  );
}



function ExperienceTimeline({
  expertise,
  yearTimeLineScroll,
  monthTimeLineHeight,
  monthTimeLineMarker,
}: ExperienceTimelineProps) {
  const { YEAR_TIMELINE_HEIGHT, MONTH_DIFFERENCE, MONTH_HEIGHT } =
    experienceTimelineCalculator(expertise);

  return (
    <div className="relative h-[550px] overflow-y-clip w-[28px] md:w-[96px]">
      <a.div
        className="year-timeline-container absolute top-1/2 left-[28px]"
        style={yearTimeLineScroll}
      >
        <div className="relative year-timeline">
          <div
            className={`w-[1px] bg-grey-d dark:bg-grey-3`}
            style={{ height: YEAR_TIMELINE_HEIGHT }}
          />

          {Array(MONTH_DIFFERENCE + 1)
            .fill(null)
            .map((_, index) => {
              // 34 (length year-timeline)
              const date = moment(experienceData.startTime);
              const month = date.add(index, "month");
              const isNewYear = month.format("MMMM") === "January";
              function lineStyles() {
                const styles: string[] = [];
                styles.push(isNewYear ? "w-[12px]" : "w-[8px]");
                styles.push(
                  isNewYear
                    ? "bg-grey-6 dark:bg-grey-5"
                    : "bg-grey-d dark:bg-grey-3"
                );
                return styles.join(" ");
              }
              return (
                <div
                  className={`h-[1px] absolute -translate-x-1/2 ${lineStyles()}`}
                  style={{ top: index * MONTH_HEIGHT }}
                  key={index}
                >
                  {isNewYear && (
                    <div className="relative year-container">
                      <span className="text-sm text-grey-6 dark:text-grey-9 leading-[1] select-none absolute top-0 -translate-y-1/2 -rotate-[.25turn] -left-[calc(100%+14px+8px)] font-visby font-extrabold">
                        {date.year()}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </a.div>
      <div className="month-timeline-container h-full absolute top-0 left-[27px] md:left-[calc(34px+16px)]">
        <div className="relative h-full month-timeline">
          <a.div
            className={`w-[2px] bg-blue-100 dark:bg-blue-d-200 md:bg-grey-ea dark:md:bg-grey-3 absolute left-[1px] top-1/2 -translate-y-1/2`}
            style={monthTimeLineHeight}
          >
            <div className="relative h-full text-[14px] text-grey-9">
              <a.span
                className="text-grey-6 dark:text-grey-9 absolute top-0 -translate-y-1/2 left-[calc(100%+16px)] hidden md:inline"
                style={monthTimeLineMarker}
              >
                {moment(expertise.timeRange[0]).format("MMM")}
              </a.span>
              <a.span
                className="text-grey-6 dark:text-grey-9 absolute bottom-0 translate-y-1/2 left-[calc(100%+16px)] hidden md:inline"
                style={monthTimeLineMarker}
              >
                {moment(expertise.timeRange[1]).format("MMM")}
              </a.span>
              <div className="absolute -translate-x-1/2 top-0 -translate-y-1/2 w-[10px] h-[1px] md:h-[10px] md:rounded-[5px] ring-0 md:ring-1 ring-blue-100 dark:ring-blue-d-200 bg-blue-100 md:bg-grey-ea dark:bg-blue-d-200 md:dark:bg-grey-2" />
              <div className="absolute -translate-x-1/2 bottom-0 translate-y-1/2 w-[10px] h-[1px] md:h-[10px] md:rounded-[5px] ring-0 md:ring-1 ring-blue-100 dark:ring-blue-d-200 bg-blue-100 md:bg-grey-ea dark:bg-blue-d-200 md:dark:bg-grey-2" />
            </div>
          </a.div>
        </div>
      </div>
      <div className="fade-up absolute -left-[8px] w-[calc(100%+16px)] h-5 top-0 bg-gradient-to-b from from-white dark:from-black" />
      <div className="fade-down absolute -left-[8px] w-[calc(100%+16px)] h-5 bottom-0 bg-gradient-to-t from-white dark:from-black" />
    </div>
  );
}
