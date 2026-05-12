import FeaturedProjectProps from "../props";
import "swiper/css/effect-cards";
import animation from "../../../animations/animations";
import { a, to, useSpring, useSpringRef } from "@react-spring/web";
import { useObservedSprings } from "../../../../hooks/useObservedSprings";
import FeaturedProjectSwiper from "./FeaturedProjectSwiper";

export default function FeaturedProjectsMobile(props: FeaturedProjectProps) {
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
      className="md:hidden w-full"
      ref={observedRef}
      style={{
        transform: to(layoutTransform.y, (y) => `translateY(${y}px)`),
        opacity: to(layoutOpacity.opacity, (op: number) => `${op}`),
      }}
    >
      <FeaturedProjectSwiper {...props} />
    </a.div>
  );
}
