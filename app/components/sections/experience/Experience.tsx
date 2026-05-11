"use client";
import { useEffect, useMemo, useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import ExperienceImage from "./ExperienceImage";
import ExperienceControl from "./ExperienceControl";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";
import { useInView } from "react-intersection-observer";
import {
  useSpring,
  useSpringRef,
  useTrail,
  useTransition,
} from "@react-spring/web";
import {
  certifications,
  Experience as TExperience,
  ExperienceType,
  works,
} from "@/app/data/experience";
import { experienceTimelineCalculator } from "@/app/util/components/experience/timelineCalculator";
import ExperienceToggle from "./ExperienceToggle";
import { config } from "@/app/data/config";

export default function Experience() {
  const [experienceType, _setExperienceType] = useState<ExperienceType>(
    ExperienceType.WORK,
  );
  const {
    experiences,
    expCalc: { experiencesInfo },
  } = useMemo(() => {
    let exp: TExperience[] = [];
    if (experienceType === ExperienceType.CERTIFICATE) {
      exp = certifications;
    } else if (experienceType === ExperienceType.WORK) {
      exp = works;
    }
    return {
      experiences: exp,
      expCalc: experienceTimelineCalculator(exp),
    };
  }, [experienceType]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -512px",
  });
  const [viewed, setViewed] = useState<boolean>(false);

  function handleExperienceTypeChange(type: ExperienceType) {
    setCurrentIndex(0);
		_setExperienceType(type);
  }

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
      YTSApi.update({ y: -experiencesInfo[currentIndex].timelineCenter });
      YTSApi.start();
      MTHApi.update({ height: experiencesInfo[currentIndex].timelineHeight });
      MTHApi.start();
      MTMApi.set({ opacity: 0 });
      MTMApi.start({ opacity: 1 });
    }
  }, [viewed, currentIndex]);

  // Image Animations
  const imageTransRef = useSpringRef();
  const imageTransition = useTransition(currentIndex, {
    ref: imageTransRef,
    keys: null,
    from: { opacity: 0, rotateX: 0, rotateY: 0, rotateZ: 0, y: "-40%" },
    enter: {
      opacity: 1,
      rotateX: 4,
      rotateY: -24,
      rotateZ: 5,
      y: "-50%",
      delay: config.EXPERIENCE_IMAGE_DELAY,
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
    [],
  );

  // Timeline Animations
  const [yearTimeLineScroll, YTSApi] = useSpring(
    () => ({
      from: { y: -275 },
    }),
    [],
  );

  const [monthTimeLineHeight, MTHApi] = useSpring(
    () => ({
      from: { height: 0 },
    }),
    [],
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
        My <span className="text-blue-100 dark:blue-d-200">experience</span> as
        a developer
      </SectionHeader>
      <SectionDescription>
        A walkthrough of my progress as a frontend developer, combining the
        certifications I’ve achieved with the real-world work that brought those
        skills to life.
      </SectionDescription>
      <ExperienceToggle
        experienceType={experienceType}
        setExperienceType={handleExperienceTypeChange}
      />
      <div
        aria-label="experience carousel"
        className="w-full max-w-screen-lg mx-auto"
      >
        <div
          className="relative flex experience-content"
          id={`experience-item-${currentIndex + 1}`}
          role="tabpanel"
          style={{ perspective: "800px" }}
        >
          <ExperienceTimeline
            currentIndex={currentIndex}
            experiences={experiences}
            yearTimeLineScroll={yearTimeLineScroll}
            monthTimeLineHeight={monthTimeLineHeight}
            monthTimeLineMarker={monthTimeLineMarker}
          />
          <ExperienceCard
            experience={experiences[currentIndex]}
            contentReveal={contentReveal}
          />
          <ExperienceImage
            imageTransition={imageTransition}
            experiences={experiences}
          />
        </div>
      </div>
      <ExperienceControl
        experiences={experiences}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </Section>
  );
}
