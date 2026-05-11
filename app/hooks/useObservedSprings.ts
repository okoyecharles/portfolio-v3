import { Lookup, SpringRef, useChain } from "@react-spring/web";
import { IntersectionOptions, useInView } from "react-intersection-observer";

const observerConfig: IntersectionOptions = {
  threshold: 0,
  rootMargin: "-48px 0px -128px",
};

export function useObservedSprings(
  springs: SpringRef<Lookup<any>>[],
  timesteps: number[] = [],
  baseTime: number = 1000,
) {
	const { ref: observedRef, inView } = useInView(observerConfig);

  useChain(
    inView ? springs : [],
    springs.map((_, index) => timesteps[index] ?? 0),
    baseTime,
  );

  return {
    observedRef,
  };
}
