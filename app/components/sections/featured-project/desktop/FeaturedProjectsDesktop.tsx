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
import { useObservedSprings } from "../../../utils/useObservedSpring";
import animation from "../../../animations/animations";
import FeaturedProjectTabList from "./FeaturedProjectTabList";
import FeaturedProjectTabPanel from "./FeaturedProjectTabPanel";
import FeaturedProjectTabDisplay from "./FeaturedProjectTabDisplay";

export default function FeaturedProjectsDesktop(props: FeaturedProjectProps) {
  const {projectIndex, projects, openProjectViewer} = props;

  // content animations
  const [contentRevealTrail, contentRevealTrailRef] = useTrail(
    4,
    {from: {y: 32, opacity: 0}},
    []
  );

  // display animations
  const [displayFrameTrail, displayFrameTrailRef] = useTrail(2, () => ({
    from: {y: 32},
  }));
  const displayTransisitionRef = useSpringRef();
  const displayTransition = useTransition(projects[projectIndex], {
    ref: displayTransisitionRef,
    keys: null,
    from: {opacity: 0, y: 48},
    enter: {
      opacity: 1,
      y: 0,
      onStart() {
        displayFrameTrailRef.set({y: 32});
        displayFrameTrailRef.start({y: 0});
      },
    },
    leave: {
      opacity: 0,
      y: -64,
      config: {tension: 300},
    },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    displayTransisitionRef.start();
    contentRevealTrailRef.set({y: 24, opacity: 0});
    contentRevealTrailRef.start({
      y: 0,
      opacity: 1,
      config: {tension: 400, friction: 40},
    });
  }, [projectIndex]);

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
      className="rounded-[10px] grid-cols-12 bg-white dark:bg-black isolate hidden md:grid"
      ref={observedRef}
      style={{
        transform: to(layoutTransformSpring.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacitySpring.opacity, (op: number) => `${op}`),
      }}
      aria-label={'featured projects carousel'}
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





