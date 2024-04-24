import { useEffect, useRef, useState } from "react";
import { ProjectGridProps } from "./props";
import { useInView } from "react-intersection-observer";
import { a, useSpring, useSpringRef, useTransition } from "@react-spring/web";
import Button from "../../clickable/Button";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const INITIAL_CARD_COUNT = 3;
  const projectCardHeaderRefs = projects.map(() => useRef<HTMLAnchorElement>(null));
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
    if (projectCount === projects.length) {
      projectCardHeaderRefs[INITIAL_CARD_COUNT].current?.focus();
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
        {cardRevealTransition((style, project, _transition, index) => (
          <a.div className="project-card-container" style={style}>
            <ProjectCard project={project} headerRef={projectCardHeaderRefs[index]} />
          </a.div>
        ))}
      </div>
      <a.div className="flex justify-center grid-control" style={buttonRevealSpring}>
        <Button
          variant="black"
          onClick={handleProjectCountToggle}
          ariaLabel="show additional projects"
          tabIndex={projectCount === INITIAL_CARD_COUNT ? 0 : -1}
        >
          {projectCount === INITIAL_CARD_COUNT ? "Show more" : "Show less"}
        </Button>
      </a.div>
    </>
  );
}
