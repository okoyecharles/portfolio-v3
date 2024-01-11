import Button from "../../clickable/Button";
import Link from "../../clickable/Link";
import GithubIcon from "../../svg/icons/GithubIcon";
import LiveIcon from "../../svg/icons/LiveIcon";
import NorthWestIcon from "../../svg/abstract/NorthWestIcon";
import { formatMonthYear } from "../../utils/moment";
import FeaturedProjectProps, {
  FeaturedProjectDisplayProps,
  FeaturedProjectInfoProps,
  FeaturedProjectListProps,
  FeaturedProjectTagProps,
} from "./props";
import Image from "next/image";
import DesktopFrame from "@/public/assets/projects/desktop-frame.png";
import MobileFrame from "@/public/assets/projects/mobile-frame.png";
import {
  a,
  useSpring,
  useSpringRef,
  useTrail,
  useTransition,
} from "@react-spring/web";
import { useEffect } from "react";
import { useObservedSprings } from "../../utils/useObservedSpring";
import animation from "../../animations/animations";
import HorizontalDottedLine from "../../background/HorizontalDottedLine";
import DottedLine from "../../background/DottedLine";
import Plus from "../../background/Plus";

export default function FeaturedProjectsDesktop(props: FeaturedProjectProps) {
  const { projectIndex, projects } = props;

  // content animations
  const [contentRevealTrail, contentRevealTrailRef] = useTrail(
    4,
    { from: { y: 32, opacity: 0 } },
    []
  );

  // display animations
  const [displayFrameTrail, displayFrameTrailRef] = useTrail(2, () => ({
    from: { y: 32 },
  }));
  const displayTransisitionRef = useSpringRef();
  const displayTransition = useTransition(projects[projectIndex], {
    ref: displayTransisitionRef,
    keys: null,
    from: { opacity: 0, y: 48 },
    enter: {
      opacity: 1,
      y: 0,
      onStart() {
        displayFrameTrailRef.set({ y: 32 });
        displayFrameTrailRef.start({ y: 0 });
      },
    },
    leave: {
      opacity: 0,
      y: -64,
      config: { tension: 300 },
    },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    displayTransisitionRef.start();
    contentRevealTrailRef.set({ y: 24, opacity: 0 });
    contentRevealTrailRef.start({
      y: 0,
      opacity: 1,
      config: { tension: 400, friction: 40 },
    });
  }, [projectIndex]);

  return (
    <div className="rounded-[10px] grid-cols-12 bg-white dark:bg-black isolate hidden md:grid">
      <FeaturedProjectList {...props} />
      <FeaturedProjectInfo
        project={projects[projectIndex]}
        contentRevealTrail={contentRevealTrail}
      />
      <FeaturedProjectDisplay
        project={projects[projectIndex]}
        displayFrameTrail={displayFrameTrail}
        displayTransition={displayTransition}
      />
    </div>
  );
}

function FeaturedProjectDisplay({
  displayFrameTrail,
  displayTransition,
}: FeaturedProjectDisplayProps) {
  // decorative animations (plus and dashes)
  const {
    observedRef,
    springAnimate: [bgLineGlowSpring, bgLineRevealSpring, bgPlusRevealTrail],
  } = useObservedSprings(
    [
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
      animation.bg.plusReveal.start,
    ],
    [
      animation.bg.lineGlow.end({ config: { tension: 75 }, delay: 450 }),
      animation.bg.lineReveal.end({ delay: 450 }),
      animation.bg.plusReveal.end({ delay: 0 }),
    ],
    [useSpring, useSpring, (cb: Function) => useTrail(4, cb, [])]
  );

  const plusPositions = [
    "top-0 left-0",
    "top-0 right-0",
    "bottom-0 right-0",
    "bottom-0 left-0",
  ];

  return (
    <div
      className={`
        featured-project-display
        col-span-8 semi-lg:col-span-6 relative
        grid grid-cols-24
        ring-1 ring-grey-ea dark:ring-grey-2
        rounded-ee-[10px] semi-lg:rounded-e-[10px]
        overflow-hidden isolate group/display
      `}
      ref={observedRef}
    >
      {displayTransition((style, project) => (
        <>
          <a.div
            className={`
          desktop-frame row-start-1
          col-start-3 col-[_span_16_/_span_16]
          flex flex-col
        `}
            style={style}
          >
            <a.div
              className="frame mt-auto mb-[32px] semi-lg:mb-[64px] relative"
              style={displayFrameTrail[0]}
            >
              <Image
                className="-z-10 absolute w-[79%] top-[5.5%] left-1/2 -translate-x-1/2"
                src={project.image.desktop}
                width={351}
                height={216}
                alt="null"
              />
              <Image
                className="w-full"
                src={DesktopFrame}
                width={512}
                alt="null"
              />
            </a.div>
          </a.div>
          <a.div
            className={`
        mobile-frame row-start-1
        col-start-[18] col-span-5
        flex flex-col
      `}
            style={style}
          >
            <a.div
              className="frame mt-auto mb-[54px] semi-lg:mb-[96px] relative"
              style={displayFrameTrail[1]}
            >
              <Image
                className="-z-10 absolute w-[92.4%] top-[6.95%] left-1/2 -translate-x-1/2 rounded-b-[8.2%]"
                src={project.image.mobile}
                width={351}
                height={216}
                alt="null"
              />
              <Image
                className="w-full"
                src={MobileFrame}
                width={256}
                alt="null"
              />
            </a.div>
          </a.div>
        </>
      ))}
      <div className="aesthetics -z-10">
        <div className={`absolute top-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[bgLineRevealSpring, bgLineGlowSpring]}
          />
        </div>
        <div className={`absolute right-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine
            variant="bold"
            animation={[bgLineRevealSpring, bgLineGlowSpring]}
          />
        </div>
        <div className={`absolute bottom-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[bgLineRevealSpring, bgLineGlowSpring]}
          />
        </div>
        <div className={`absolute left-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine
            variant="bold"
            animation={[bgLineRevealSpring, bgLineGlowSpring]}
          />
        </div>

        {plusPositions.map((pos, index) => (
          <div
            key={pos}
            className={`absolute ${pos} group-hover/display:rotate-[.25turn] transition-transform`}
          >
            <Plus
              className="duration-300 stroke-grey-8 dark:stroke-grey-9 group-hover/display:stroke-blue-100 dark:group-hover/display:stroke-blue-d-200"
              animation={bgPlusRevealTrail[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedProjectInfo({
  project,
  contentRevealTrail,
}: FeaturedProjectInfoProps) {
  return (
    <article className="featured-project-info col-span-4 semi-lg:col-span-3 p-6 flex flex-col bg-grey-ea dark:bg-grey-12 ring-1 ring-grey-d dark:ring-grey-2 min-h-[410px] rounded-es-[10px] semi-lg:rounded-es-none">
      <Link href={project.link.live} variant="plain">
        <a.h3
          className="font-visby font-extrabold text-[20px] leading-[1] text-grey-1 dark:text-grey-b inline-flex gap-[2px] group/header"
          style={contentRevealTrail[0]}
        >
          <span>{project.name}</span>
          <span className="group-hover/header:translate-x-[2px] group-hover/header:-translate-y-[2px] transition-transform">
            <NorthWestIcon />
          </span>
        </a.h3>
      </Link>
      <a.span
        className="text-[14px] text-grey-9 dark:text-grey-5 mt-2"
        style={contentRevealTrail[1]}
      >
        <time>{formatMonthYear(project.timeRange[0])}</time> -{" "}
        <time>{formatMonthYear(project.timeRange[1])}</time>
      </a.span>
      <a.p className="my-4" style={contentRevealTrail[2]}>
        {project.description}
      </a.p>
      <div className="action-buttons mt-auto flex flex-wrap gap-4">
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
  );
}

function FeaturedProjectList({
  projects,
  projectIndex,
  setProjectIndex,
}: FeaturedProjectListProps) {
  const PROJECT_HEIGHT = (1 / projects.length) * 100;
  const projectMarkerPos = PROJECT_HEIGHT / 2 + projectIndex * PROJECT_HEIGHT;
  const projectMarkerSpring = useSpring({ pos: projectMarkerPos });

  return (
    <div className="featured-project-list border-b semi-lg:border-r semi-lg:border-b-0 last:border-none border-grey-d dark:border-grey-2  col-span-12 semi-lg:col-span-3 grid grid-cols-3 semi-lg:grid-cols-1 [grid-auto-rows:1fr] relative isolate z-10">
      <a.span
        className={`
        absolute
        left-3 top-0 -translate-y-1/2
        w-[calc(100%-24px)] h-[calc(33%-24px)]
        bg-grey-ea dark:bg-grey-15
        ring-1 ring-grey-d dark:ring-grey-2
        rounded-[5px] -z-10
        hidden semi-lg:block
      `}
        style={{ top: projectMarkerSpring.pos.to((pos) => `${pos}%`) }}
      />
      <a.span
        className={`
        absolute
        top-3 left-0 -translate-x-1/2
        h-[calc(100%-24px)] w-[calc(33%-24px)]
        bg-grey-ea dark:bg-grey-15
        ring-1 ring-grey-d dark:ring-grey-2
        rounded-[5px] -z-10
        hidden md:block semi-lg:hidden
      `}
        style={{ left: projectMarkerSpring.pos.to((pos) => `${pos}%`) }}
      />
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="project-item ring-1 ring-grey-ea dark:ring-grey-2 hover:ring-grey-b dark:hover:ring-grey-4 p-6 flex flex-col gap-2 cursor-pointer first-of-type:rounded-ss-[10px] last-of-type:rounded-se-[10px] semi-lg:last-of-type:rounded-es-[10px] semi-lg:last-of-type:rounded-se-none transition-shadow"
          onClick={() => setProjectIndex(index)}
        >
          <div className="logo mb-2">{project.logo}</div>
          <h3 className="font-visby font-extrabold text-[18px] text-grey-1 dark:text-grey-d">
            {project.name}
          </h3>
          <div className="tags flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <FeaturedProjectTag name={tag} key={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturedProjectTag({ name }: FeaturedProjectTagProps) {
  const color = `text-tag-${name} dark:text-tag-${name}-dark`;
  const bg = `bg-tag-${name}/20 dark:bg-tag-${name}-dark/25`;
  return (
    <span
      className={`${color} ${bg} text-[14px] rounded-[11px] leading-[1] py-1 px-2`}
    >
      {name}
    </span>
  );
}
