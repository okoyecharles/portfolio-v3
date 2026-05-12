import { useRef } from "react";
import { FeaturedProjectSwiperProps } from "../props";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import FeaturedProjectCard from "./FeaturedProjectCard";
import PrevIcon from "@/app/components/svg/icons/PrevIcon";
import NextIcon from "@/app/components/svg/icons/NextIcon";

export default function FeaturedProjectSwiper({
  projects,
  projectIndex,
  setProjectIndex,
  openProjectViewer,
}: FeaturedProjectSwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const swiperApi = swiperRef.current?.swiper;
  const featuredProjectHeaderRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  function handleSwiperChange(swiper: SwiperClass) {
    setProjectIndex(swiper.activeIndex);
    featuredProjectHeaderRefs.current[swiper.activeIndex]?.focus();
  }

  return (
    <div className="relative swiper-container isolate w-full">
      <Swiper
        ref={swiperRef}
        grabCursor
        effect={"cards"}
        modules={[EffectCards]}
        cardsEffect={{
          slideShadows: false,
        }}
        initialSlide={projectIndex}
        onActiveIndexChange={handleSwiperChange}
        id="featured-projects-deck"
        aria-label="featured projects deck"
      >
        {projects.map((project, index) => (
          <SwiperSlide className="my-auto" key={project.name}>
            <FeaturedProjectCard
              project={project}
              active={projectIndex === index}
              activeOffset={Math.abs(projectIndex - index)}
              openProjectViewer={openProjectViewer}
              headerRef={(el) => {
                featuredProjectHeaderRefs.current[index] = el;
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute w-[48px] aspect-square grid justify-center items-center rounded-[50%] top-1/2 -translate-y-1/2 left-0 translate-x-1/4 z-10 group/icon backdrop-blur-sm

            ring-1 ring-grey-d dark:ring-grey-3
            bg-grey-fb dark:bg-grey-1a
            
            hover:bg-[#f9f9f9] dark:hover:bg-grey-2

        disabled:pointer-events-none
        disabled:opacity-0 disabled:scale-75
        transition"
        onClick={() => swiperApi?.slidePrev(500)}
        disabled={projectIndex === 0}
        aria-hidden={projectIndex === 0}
        name={`previous card - ${projects[projectIndex - 1]?.name}`}
        aria-label={`previous card - ${projects[projectIndex - 1]?.name}`}
        aria-controls="featured-projects-deck"
      >
        <PrevIcon />
      </button>
      <button
        className="absolute w-[48px] aspect-square grid justify-center items-center rounded-[50%] top-1/2 -translate-y-1/2 right-0 -translate-x-1/4 z-10 group/icon backdrop-blur-sm

            ring-1 ring-grey-d dark:ring-grey-3
            bg-grey-fb dark:bg-grey-1a
            
            hover:bg-[#f9f9f9] dark:hover:bg-grey-2

        disabled:pointer-events-none
        disabled:opacity-0 disabled:scale-75
        transition"
        onClick={() => swiperApi?.slideNext(500)}
        disabled={projectIndex === projects.length - 1}
        aria-hidden={projectIndex === projects.length - 1}
        name={`next card - ${projects[projectIndex + 1]?.name}`}
        aria-label={`next card - ${projects[projectIndex + 1]?.name}`}
        aria-controls="featured-projects-deck"
      >
        <NextIcon />
      </button>
    </div>
  );
}
