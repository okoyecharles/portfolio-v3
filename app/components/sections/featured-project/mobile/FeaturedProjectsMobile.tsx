import { useRef } from "react";
import FeaturedProjectProps, {
  FeaturedProjectSwiperProps,
} from "../props";
import PrevIcon from "../../../svg/icons/PrevIcon";
import NextIcon from "../../../svg/icons/NextIcon";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import animation from "../../../animations/animations";
import { a, to, useSpring } from "@react-spring/web";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { useObservedSprings } from "../../../utils/useObservedSpring";
import FeaturedProjectSwiper from "./FeaturedProjectSwiper";

export default function FeaturedProjectsMobile(props: FeaturedProjectProps) {
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
