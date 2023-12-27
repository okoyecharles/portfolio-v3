import { UseSpringProps } from "@react-spring/web";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  1: UseSpringProps['from'],
  2: UseSpringProps,
  3: Function
}

const observerConfig = {
  threshold: 0,
  rootMargin: "-125px",
};

export default function useObservedSpring(
  initialState: Props[1],
  finalState: Props[2],
  springHook: Props[3]
) {
  const { ref: observedRef, inView } = useInView(observerConfig);

  const [springAnimate, springApi] = springHook(() => initialState, []);

  const handleObserve = () => {
    springApi.start(finalState);
  };

  // execute spring when referenced element enters the viewport
  useEffect(() => {
    if (inView) handleObserve();
  }, [inView]);

  return { observedRef, springAnimate };
}

export function useObservedSprings(
  initialStates: Props[1][],
  finalStates: Props[2][],
  springHooks: Props[3][]
) {
  const { ref: observedRef, inView } = useInView(observerConfig);

  const springHookValues: any[] = [];

  for (let i = 0; i < springHooks.length; ++i) {
    springHookValues.push(springHooks[i](() => initialStates[i], []));
  }

  const handleObserve = () => {
    springHookValues.forEach(
      (
        [_springAnimate, springApi]: any,
        springIndex
      ) => springApi.start(finalStates[springIndex]));
  };

  // execute all springs when referenced element enters the viewport
  useEffect(() => {
    if (inView) handleObserve();
  }, [inView]);

  return { observedRef, springAnimate: springHookValues.map(([a]) => a) };
}