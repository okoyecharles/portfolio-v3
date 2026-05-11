import FeaturedProjectProps from "../props";
import {
  a,
  to,
  useSpring,
  useSpringRef,
  useTrail,
  useTransition,
} from "@react-spring/web";
import { useEffect } from "react";
import { useObservedSprings } from "../../../../hooks/useObservedSprings";
import animation from "../../../animations/animations";
import FeaturedProjectTabList from "./FeaturedProjectTabList";
import FeaturedProjectTabPanel from "./FeaturedProjectTabPanel";
import FeaturedProjectTabDisplay from "./FeaturedProjectTabDisplay";

export default function FeaturedProjectsDesktop(props: FeaturedProjectProps) {
  const { projectIndex, projects, openProjectViewer } = props;

  // content animations
  const [contentRevealTrail, contentRevealTrailRef] = useTrail(
    4,
    { from: { y: 32, opacity: 0 } },
    [],
  );

  // display animations
  const displayPositions = {
    from: 48,
    enter: 1,
    leave: -64,
  };
  const [displayFrameTrail, displayFrameTrailRef] = useTrail(2, () => ({
    from: { y: 32 },
  }));
  const displayTransisitionRef = useSpringRef();
  const displayTransition = useTransition(projects[projectIndex], {
    ref: displayTransisitionRef,
    keys: null,
    from: { opacity: 0, y: displayPositions.from },
    enter: {
      opacity: 1,
      y: displayPositions.enter,
      onStart() {
        displayFrameTrailRef.set({ y: displayPositions.from });
        displayFrameTrailRef.start({ y: displayPositions.enter });
      },
    },
    leave: {
      opacity: 0,
      y: displayPositions.leave,
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

  const transformRef = useSpringRef();
  const opacityRef = useSpringRef();

  const layoutTransform = useSpring({
    ref: transformRef,
    from: animation.layout.revealSlow.start[0],
    ...animation.layout.revealSlow.end[0](),
  });

  const layoutOpacity = useSpring({
    ref: opacityRef,
    from: animation.layout.revealSlow.start[1],
    ...animation.layout.revealSlow.end[1](),
  });

  const { observedRef } = useObservedSprings([transformRef, opacityRef]);

  return (
    <a.div
      className="rounded-[10px] grid-cols-12 bg-white dark:bg-black isolate hidden md:grid"
      ref={observedRef}
      style={{
        transform: to(layoutTransform.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacity.opacity, (op: number) => `${op}`),
      }}
      aria-label={"featured projects carousel"}
    >
      <FeaturedProjectTabList {...props} />
      <FeaturedProjectTabPanel
        projectIndex={projectIndex}
        project={projects[projectIndex]}
        contentRevealTrail={contentRevealTrail}
      />
      <FeaturedProjectTabDisplay
        project={projects[projectIndex]}
        displayFrameTrail={displayFrameTrail}
        displayTransition={displayTransition}
        openProjectViewer={openProjectViewer}
      />
    </a.div>
  );
}
