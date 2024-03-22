"use client";
import { useEffect, useRef, useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import Link from "../../clickable/Link";
import projectData from "@/app/data/project";
import NorthWestIcon from "../../svg/abstract/NorthWestIcon";
import { ProjectCardLinksProps, ProjectCardProps, ProjectGridProps } from "./props";
import FeaturedProjectTag from "../featured-project/FeaturedProjectTag";
import { formatDateTimeAttribute, formatMonthYear } from "../../utils/moment";
import ProjectGithub from "../../svg/abstract/ProjectGithub";
import ProjectLive from "../../svg/abstract/ProjectLive";
import { a, useSpring, useSpringRef, useTransition } from "@react-spring/web";
import Button from "../../clickable/Button";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { current: projects } = useRef(projectData.slice(3));

  return (
    <Section
      id="more-projects"
      name="more-projects"
      padding="pt-12 pb-16 md:py-8 md:pb-[224px]"
    >
      <SectionHeader>More projects</SectionHeader>
      <SectionDescription>
        A variety of additional projects to provide a clearer view of my creative journey
      </SectionDescription>
      <ProjectGrid projects={projects} />
    </Section>
  );
}

function ProjectGrid({ projects }: ProjectGridProps) {
  const INITIAL_CARD_COUNT = 3;
  const [projectCount, setProjectCount] = useState(INITIAL_CARD_COUNT);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -128px",
  });

  const cardRevealTransRef = useSpringRef();
  const cardRevealTransition = useTransition(projects.slice(0, projectCount), {
    ref: cardRevealTransRef,
    from: { opacity: 0, y: -16, config: { tension: 400 } },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 1, config: { duration: 0 } },
  });
  const [buttonRevealSpring, buttonRevealSpringRef] = useSpring(() => ({
    opacity: 0,
  }));

  const [viewed, setViewed] = useState<boolean>(false);
  useEffect(() => {
    if (inView && !viewed) {
      setViewed(true);
    }
  }, [inView]);
  useEffect(() => {
    if (inView) {
      // card reveal animation
      cardRevealTransRef.start();
      // button reveal animation
      buttonRevealSpringRef.start({ opacity: 1, delay: 250 });
    }
  }, [viewed, projectCount]);

  function handleProjectCountToggle() {
    setProjectCount((prev) =>
      prev === INITIAL_CARD_COUNT ? projects.length : INITIAL_CARD_COUNT
    );
  }

  return (
    <>
      <div
        className="grid gap-6 my-8 md:gap-8 project-grid grid-rows-auto md:grid-cols-2 semi-lg:grid-cols-3 place-content-center"
        ref={ref}
      >
        {cardRevealTransition((style, project) => (
          <a.div className="project-card-container" style={style}>
            <ProjectCard project={project} />
          </a.div>
        ))}
      </div>
      <a.div className="flex justify-center grid-control" style={buttonRevealSpring}>
        <Button variant="black" onClick={handleProjectCountToggle}>
          {projectCount === INITIAL_CARD_COUNT ? "Show more" : "Show less"}
        </Button>
      </a.div>
    </>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`
      h-full relative group/project-card
      p-6 flex flex-col gap-[6px] rounded-[10px]
      bg-white dark:bg-grey-1 
      hover:bg-grey-fb dark:hover:bg-grey-15
      ring-1 ring-grey-d dark:ring-grey-2
      hover:ring-grey-b dark:hover:ring-grey-3
      md:hover:-translate-y-4
      transition duration-300 hover:delay-75
      
      before:absolute before:top-full before:left-0 before:w-full
      before:bg-white/0 before:h-4 before:-translate-y-4 hover:before:translate-y-0
    `}
    >
      <header className="grid gap-1">
        <Link href={project.link.live} variant="plain">
          <h3 className="font-visby font-extrabold text-[20px] leading-[1] text-grey-1 dark:text-grey-d inline-flex gap-[2px] group/header">
            <span>{project.name}</span>
            <span className="group-hover/header:translate-x-[2px] group-hover/header:-translate-y-[2px] transition-transform">
              <NorthWestIcon />
            </span>
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 tags pr-[36px]">
          {project.tags.map((tag) => (
            <FeaturedProjectTag name={tag} key={tag} />
          ))}
        </div>
        <span className="text-[14px] text-grey-9 dark:text-grey-5">
          <time dateTime={formatDateTimeAttribute(project.timeRange[0])}>
            {formatMonthYear(project.timeRange[0])}
          </time>
          -{" "}
          <time dateTime={formatDateTimeAttribute(project.timeRange[1])}>
            {formatMonthYear(project.timeRange[1])}
          </time>
        </span>
      </header>
      <p>{project.description}</p>
      <ProjectCardLinks link={project.link} />
    </article>
  );
}

function ProjectCardLinks({ link }: ProjectCardLinksProps) {
  function marker(linkName: keyof typeof link): React.ReactNode {
    return (
      <div
        className={`
          h-[12px] aspect-square rounded-[50%]
          bg-grey-fb dark:bg-grey-15
          ring-1 ring-grey-b dark:ring-grey-4
          scale-50 opacity-0
          group-hover/project-card:scale-100 group-hover/project-card:opacity-100
          transition duration-300
          ${
            linkName === "live"
              ? "group-hover/project-card:delay-150 delay-100"
              : "group-hover/project-card:delay-300 delay-100"
          }
        `}
      />
    );
  }

  return (
    <div className="absolute top-0 right-0 links pointer-events-none group-hover/project-card:pointer-events-auto">
      <ul
        className={`
          relative pt-8 mr-3 isolate
          grid gap-2 place-items-end

          after:absolute after:-z-10
          after:right-[5.5px] after:top-0
          after:h-[calc(100%-10px)] after:w-[1px]
          after:bg-grey-b dark:after:bg-grey-4

          after:scale-y-0 group-hover/project-card:after:scale-y-100
          after:transition-transform after:origin-top after:delay-150
          group-hover/project-card:after:delay-200 group-hover/project-card:after:duration-300
        `}
      >
        <li className="flex items-center gap-2 group/project-link">
          <Link
            href={link.live}
            variant="plain"
            className={`
              translate-x-1 opacity-0 transition
              group-hover/project-card:translate-x-0 group-hover/project-card:opacity-100
              group-hover/project-card:delay-150 group-hover/project-card:duration-300
            `}
          >
            <ProjectLive />
          </Link>
          {marker("live")}
        </li>
        <li className="flex items-center gap-2 group/project-link">
          <Link
            href={link.github}
            variant="plain"
            className={`
              translate-x-1 opacity-0 transition
              group-hover/project-card:translate-x-0 group-hover/project-card:opacity-100
              group-hover/project-card:delay-300 group-hover/project-card:duration-300
            `}
          >
            <ProjectGithub />
          </Link>
          {marker("github")}
        </li>
      </ul>
    </div>
  );
}
