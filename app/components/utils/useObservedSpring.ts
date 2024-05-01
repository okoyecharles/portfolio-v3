import { UseSpringProps } from "@react-spring/web";
import { useEffect, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

type InitialObservedSpringState = UseSpringProps['from'];
type FinalObservedSpringState = UseSpringProps;
type SpringInitializerFn = () => InitialObservedSpringState;
type SpringHook = (init: SpringInitializerFn, deps: Array<any>) => any;

const observerConfig: IntersectionOptions = {
  threshold: 0,
  rootMargin: "-48px 0px -128px",
};

export default function useObservedSpring(
  initialState: InitialObservedSpringState,
  finalState: FinalObservedSpringState,
  springHook: SpringHook
) {
  const [viewed, setViewed] = useState<boolean>(false);
  const { ref, inView } = useInView(observerConfig);
  const [springAnimate, springApi] = springHook(() => initialState, []);

  // execute spring when referenced element enters the viewport
  useEffect(() => {
    if (inView && !viewed) {
      springApi.start(finalState);
      setViewed(false);
    };
  }, [inView]);

  return { observedRef: ref, springAnimate };
}

export function useObservedSprings(
  initialStates: InitialObservedSpringState[],
  finalStates: FinalObservedSpringState[],
  springHooks: SpringHook[]
) {
  const { ref: observedRef, inView } = useInView(observerConfig);

  const springHookValues =
    springHooks.map((hook, hookIndex) => hook(() => initialStates[hookIndex], []));

  const handleObserve = () => {
    springHookValues.forEach(
      ([_, springApi], springIndex) => springApi.start(finalStates[springIndex]));
  };

  // execute all springs when referenced element enters the viewport
  useEffect(() => {
    if (inView) handleObserve();
  }, [inView]);

  return {
    observedRef,
    springAnimate: springHookValues.map(([springValue]) => springValue)
  };
}