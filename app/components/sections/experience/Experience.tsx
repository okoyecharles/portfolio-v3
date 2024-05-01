"use client";
import { useEffect, useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import ExperienceImage from "./ExperienceImage";
import ExperienceControl from "./ExperienceControl";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";
import { useInView } from "react-intersection-observer";
import experienceData, { experienceTimelineCalculator } from "@/app/data/experience";
import { useSpring, useSpringRef, useTrail, useTransition } from "@react-spring/web";

export default function Experience() {
  const [expertiseIndex, setExpertiseIndex] = useState<number>(0);
  const expertise = experienceData.expertise[expertiseIndex];
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -512px",
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
        config: { tension: 400, friction: 40 },
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
    <Section
      name="experience"
      id="experience"
      sectionRef={ref}
      padding="pt-12 pb-16 md:pt-8 md:pb-[224px]"
    >
      <SectionHeader mode="standalone">
        My <span className="text-blue-100 dark:blue-d-200">experience</span> as a
        developer
      </SectionHeader>
      <SectionDescription>
        A display of my growth as a frontend developer, showcasing the progress I have
        achieved and the valuable experience I've acquired
      </SectionDescription>
      <div aria-label="experience carousel">
        <div
          className="relative flex experience-content"
          id={`experience-item-${expertiseIndex + 1}`}
          role="tabpanel"
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
      </div>
      <ExperienceControl
        expertiseData={experienceData.expertise}
        expertiseIndex={expertiseIndex}
        setExpertiseIndex={setExpertiseIndex}
        expertiseCount={experienceData.expertise.length}
      />
    </Section>
  );
}
