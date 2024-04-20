import { useEffect, useState } from "react";
import EarthThree from "../../react-three/EarthThree";
import RecommendationCard from "./RecommendationCard";
import { RecommendationSwiperProps } from "./props";
import LocationIcon from "../../svg/abstract/LocationIcon";
import { a, useSpring, useSpringRef, useTransition } from "@react-spring/web";
import { useSpring as useThreeSpring } from "@react-spring/three";
import { useInView } from "react-intersection-observer";
import { percentToRadians } from "../../utils/convertion";
import PrevIcon from "../../svg/icons/PrevIcon";
import NextIcon from "../../svg/icons/NextIcon";
import CustomTooltip from "../../clickable/CustomTooltip";

export default function RecommendationSwiper({
  recommendations,
  recommendationIndex,
  setRecommedationIndex,
}: RecommendationSwiperProps) {
  const [earthRotating, setEarthRotating] = useState<boolean>(true);
  const [viewed, setViewed] = useState<boolean>(false);
  const { inView, ref: observedRef } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -128px",
  });

  const cardTransitionRef = useSpringRef();
  const cardTransition = useTransition(recommendationIndex, {
    keys: null,
    ref: cardTransitionRef,
    from: { opacity: 0, y: 48 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -64, config: { tension: 300 } },
    exitBeforeEnter: true,
  });

  const [earthRotationSpring, earthRotationSpringRef] = useThreeSpring(() => ({
    rotation: [0, 0, 0],
  }));

  const [earthViewedSpring, earthViewedSpringRef] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      cardTransitionRef.start();
      earthRotationSpringRef.start({
        rotation: recommendations[recommendationIndex].coordinates.map((coord) =>
          percentToRadians(coord)
        ),
        onStart: () => setEarthRotating(true),
        onRest: () => setEarthRotating(false),
        config: { tension: 350, friction: 75 },
      });
      earthViewedSpringRef.start({
        opacity: 1,
      });
    }
  }, [viewed, recommendationIndex]);

  function previousRecommendation() {
    if (recommendationIndex > 0) {
      setRecommedationIndex((prevIndex) => prevIndex - 1);
    }
  }

  function nextRecommendation() {
    if (recommendationIndex < recommendations.length) {
      setRecommedationIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <div
      className="flex flex-col gap-[36px] md:flex-row justify-between recommendations-swiper my-8 md:my-2 semi-lg:mx-12 relative"
      id="recommendation-carousel"
      aria-label="recommendation carousel"
    >
      <a.div
        className="aspect-square w-full h-full max-w-[375px] max-h-[375px] semi-lg:max-w-[450px] semi-lg:max-h-[450px] relative self-center"
        ref={observedRef}
        style={earthViewedSpring}
      >
        <EarthThree rotationSpring={earthRotationSpring} />
        <div
          className={`
            group/earth-pointer
            ${earthRotating ? "is-disabled" : "is-active"}
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
          `}
        >
          <div
            className="relative isolate"
            data-tooltip-id="active-recommendation-location"
            aria-describedby="active-recommendation-location"
          >
            <LocationIcon />
            <div
              className={`
              absolute -z-10
              h-[14px] aspect-square rounded-[50%]
              bg-grey-9 dark:bg-black
              ring-2 ring-blue-100 dark:ring-blue-d-200
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              ${earthRotating ? "scale-0" : "scale-100"}
              transition duration-300
            `}
            />
            <div
              className={`
              absolute -z-20
              h-[12px] aspect-square rounded-[50%]
              bg-black/20 dark:bg-white/30
              top-1/2 left-1/2 opacity-0
              ${earthRotating ? "" : "expanding-scale"}
            `}
            />
          </div>
          <CustomTooltip id="active-recommendation-location">
            <span>
              {recommendations[recommendationIndex].location}
            </span>
          </CustomTooltip>
        </div>
      </a.div>
      <div className="card-container min-h-[400px] grid place-items-center relative mr-0 md:mr-[24px] semi-lg:mr-0 px-[12px] md:px-0">
        {cardTransition((style, cardIndex) => (
          <RecommendationCard
            recommendation={recommendations[cardIndex]}
            recommendationIndex={cardIndex}
            cardTransition={style}
          />
        ))}
        <button
          className={`
            z-10 group/icon 
            w-[48px] aspect-square rounded-[50%] grid place-items-center 
            absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[12px] md:-translate-x-[36px] semi-lg:-translate-x-[60px]
            bg-grey-6/20 dark:bg-grey-9/20 
            hover:bg-grey-6/30 dark:hover:bg-grey-9/30 
            disabled:cursor-not-allowed disabled:opacity-80
          `}
          onClick={previousRecommendation}
          disabled={recommendationIndex === 0}
          aria-hidden={recommendationIndex === 0}
          name={`previous recommendation`}
          aria-label={`previous recommendation`}
          aria-controls="recommendation-carousel"
        >
          <PrevIcon />
        </button>
        <button
          className={`
            z-10 group/icon 
            w-[48px] aspect-square rounded-[50%] grid place-items-center 
            absolute top-1/2 right-0 -translate-y-1/2 translate-x-[12px] md:translate-x-[36px] semi-lg:translate-x-[60px]
            bg-grey-6/20 dark:bg-grey-9/20 
            hover:bg-grey-6/30 dark:hover:bg-grey-9/30 
            disabled:cursor-not-allowed disabled:opacity-80
          `}
          onClick={nextRecommendation}
          disabled={recommendationIndex === recommendations.length - 1}
          aria-hidden={recommendationIndex === recommendations.length - 1}
          name={`next recommendation`}
          aria-label={`next recommendation`}
          aria-controls="recommendation-carousel"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
}
