import { useEffect, useRef, useState } from "react";
import FeaturedProjectProps, {
  FeaturedProjectCardProps,
  FeaturedProjectSwiperProps,
} from "./props.featured";
import FeaturedProjectTag from "@/app/components/sections/project/FeaturedProjectsTag";
import { formatMonthYear } from "@/app/components/utils/moment";
import MobileIcon from "../../svg/icons/MobileIcon";
import DesktopIcon from "@/app/components/svg/icons/DesktopIcon";
import Link from "../../clickable/Link";
import Button from "../../clickable/Button";
import LiveIcon from "../../svg/icons/LiveIcon";
import GithubIcon from "../../svg/icons/GithubIcon";
import NextIcon from "../../svg/icons/NextIcon";
import PrevIcon from "../../svg/icons/PrevIcon";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
import animation from "../../animations/animations";
import { a, to, useSpring } from "@react-spring/web";
import { useObservedSprings } from "../../utils/useObservedSpring";

export default function FeaturedProjects(props: FeaturedProjectProps) {
  const {
    observedRef,
    springAnimate: [layoutTransformSpring, layoutOpacitySpring],
  } = useObservedSprings(
    [...animation.layout.revealSlow.start],
    [...animation.layout.revealSlow.end.map((x) => x())],
    [useSpring, useSpring]
  );

  return (
    <a.div
      className="md:hidden"
      ref={observedRef}
      style={{
        transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
      }}
    >
      <FeaturedProjectSwiper {...props} />
    </a.div>
  );
}

function FeaturedProjectSwiper({
  projects,
  projectIndex,
  setProjectIndex,
  openProjectViewer,
}: FeaturedProjectSwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperApi = swiperRef.current?.swiper;

  function handleSwiperChange(swiper: SwiperClass) {
    setProjectIndex(swiper.activeIndex);
  }

  return (
    <div className="relative swiper-container isolate">
      <Swiper
        ref={swiperRef}
        grabCursor
        effect={"cards"}
        modules={[EffectCards]}
        cardsEffect={{
          slideShadows: false,
        }}
        initialSlide={projectIndex}
        onActiveIndexChange={handleSwiperChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide className="my-auto" key={project.name}>
            <FeaturedProjectCard
              project={project}
              active={projectIndex === index}
              activeOffset={Math.abs(projectIndex - index)}
              openProjectViewer={openProjectViewer}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute w-[48px] aspect-square grid justify-center items-center bg-grey-6/20 dark:bg-grey-9/20 hover:bg-grey-6/30 dark:hover:bg-grey-9/30 rounded-[50%] top-1/2 -translate-y-1/2 left-0 -translate-x-1/4 z-10 group/icon"
        onClick={() => swiperApi?.slidePrev(500)}
      >
        <PrevIcon />
      </button>
      <button
        className="absolute w-[48px] aspect-square grid justify-center items-center bg-grey-6/20 dark:bg-grey-9/20 hover:bg-grey-6/30 dark:hover:bg-grey-9/30 rounded-[50%] top-1/2 -translate-y-1/2 right-0 translate-x-1/4 z-10 group/icon"
        onClick={() => swiperApi?.slideNext(500)}
      >
        <NextIcon />
      </button>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  active,
  activeOffset,
  openProjectViewer,
}: FeaturedProjectCardProps) {
  const cardShadowByOffset: Record<string, `after:bg-black/${string}`> = {
    "0": "after:bg-black/0",
    "1": "after:bg-black/5 dark:after:bg-black/20",
    "2": "after:bg-black/10 dark:after:bg-black/30",
  };

  return (
    <div
      className={`
        card-container m-auto w-fit relative after:absolute after:inset-0 after:rounded-[10px]
        after:transition-colors after:pointer-events-none
        ${cardShadowByOffset[String(activeOffset)]}`}
    >
      <article
        className={`
        rounded-[10px] p-6
        rotating-gradient
        before:bg-gradient-to-b
        bg-grey-d dark:bg-grey-4
        before:from-grey-ea dark:before:from-grey-2
        before:to-white dark:before:to-black max-w-[320px]
        ${project.themeColor}
        ${active ? "after:opacity-100" : "after:opacity-0"}`}
      >
        <header className={"grid gap-1"}>
          <div className="mb-6 logo">{project.logo}</div>
          <h3 className="font-visby font-extrabold text-[20px] text-grey-1 dark:text-grey-d">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2 tags">
            {project.tags.map((tag) => (
              <FeaturedProjectTag name={tag} key={tag} />
            ))}
          </div>
          <span className="text-[14px] text-grey-9 dark:text-grey-5">
            <time>{formatMonthYear(project.timeRange[0])}</time>-{" "}
            <time>{formatMonthYear(project.timeRange[1])}</time>
          </span>
        </header>
        <div className={"flex gap-2 my-4"}>
          <button
            className={
              "bg-grey-ea dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-4 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-6 transition-colors"
            }
            onClick={() => openProjectViewer("desktop")}
          >
            <div
              className={`
              p-2 text-sm text-grey-1 dark:text-grey-d 
              group-hover/icon:text-black dark:group-hover/icon:text-white 
              border-r border-grey-b dark:border-grey-4 
              group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-6 leading-[16px]  transition-all
            `}
            >
              Desktop
            </div>
            <div className={"p-2"}>
              <DesktopIcon />
            </div>
          </button>
          <button
            className={
              "bg-grey-ea dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-4 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-6 transition-colors"
            }
            onClick={() => openProjectViewer("mobile")}
          >
            <div
              className={`
              p-2 text-sm text-grey-1 dark:text-grey-d 
              group-hover/icon:text-black dark:group-hover/icon:text-white 
              border-r border-grey-b dark:border-grey-4 
              group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-6 leading-[16px]  transition-all
            `}
            >
              Mobile
            </div>
            <div className={"p-2"}>
              <MobileIcon />
            </div>
          </button>
        </div>
        <a.p className="mb-6">{project.description}</a.p>
        <div className="flex flex-wrap gap-4 action-buttons">
          <Link href={project.link.live} variant="plain">
            <Button>
              <span>Live Website</span>
              <LiveIcon />
            </Button>
          </Link>
          <Link href={project.link.github} variant="plain">
            <Button variant="black">
              <span>View on Github</span>
              <GithubIcon />
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
