import { useObservedSprings } from "@/app/components/utils/useObservedSpring";
import { FeaturedProjectTabDisplayProps } from "../props";
import animation from "@/app/components/animations/animations";
import { a, useSpring, useTrail } from "@react-spring/web";
import FullScreenIcon from "@/app/components/svg/icons/FullScreenIcon";
import Image from "next/image";
import DesktopFrame from "@/public/assets/projects/desktop-frame.png";
import MobileFrame from "@/public/assets/projects/mobile-frame.png";
import HorizontalDottedLine from "@/app/components/background/HorizontalDottedLine";
import DottedLine from "@/app/components/background/DottedLine";
import Plus from "@/app/components/background/Plus";

export default function FeaturedProjectTabDisplay({
  displayFrameTrail,
  displayTransition,
  openProjectViewer,
}: FeaturedProjectTabDisplayProps) {
  // decorative animations (plus and dashes)
  const {
    observedRef,
    springAnimate: [bgLineGlowSpring, bgLineRevealSpring, bgPlusRevealTrail],
  } = useObservedSprings(
    [
      animation.bg.lineGlow.start,
      animation.bg.lineReveal.start,
      animation.bg.plusReveal.start,
    ],
    [
      animation.bg.lineGlow.end({ config: { tension: 75 }, delay: 450 }),
      animation.bg.lineReveal.end({ delay: 450 }),
      animation.bg.plusReveal.end({ delay: 0 }),
    ],
    [useSpring, useSpring, (cb: Function) => useTrail(4, cb, [])]
  );

  const plusPositions = [
    "top-0 left-0",
    "top-0 right-0",
    "bottom-0 right-0",
    "bottom-0 left-0",
  ];

  return (
    <div
      className={`
        featured-project-display
        col-span-8 semi-lg:col-span-6 relative
        grid grid-cols-24
        ring-1 ring-grey-ea dark:ring-grey-2
        rounded-ee-[10px] semi-lg:rounded-e-[10px]
        overflow-hidden isolate group/display
      `}
      ref={observedRef}
    >
      {displayTransition((style, project) => (
        <>
          <a.div
            className={`
              desktop-frame row-start-1
              col-start-3 col-[_span_16_/_span_16]
              flex flex-col
            `}
            style={style}
          >
            <a.div
              className="frame mt-auto mb-[32px] semi-lg:mb-[64px] relative"
              style={displayFrameTrail[0]}
            >
              <button
                className={
                  "bg-grey-ea dark:bg-grey-2 ring-1 ring-grey-b dark:ring-grey-3 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-5 absolute -top-[48px] left-[10%] transition-all"
                }
                onClick={() => openProjectViewer("desktop")}
                aria-label="show desktop view"
              >
                <div
                  className={`
                    p-2 text-sm text-grey-1 dark:text-grey-d 
                    group-hover/icon:text-black dark:group-hover/icon:text-white 
                    border-r border-grey-b dark:border-grey-3 
                    group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-5 leading-[16px] transition-all whitespace-nowrap
                  `}
                >
                  Show Desktop
                </div>
                <div className={"p-2"}>
                  <FullScreenIcon />
                </div>
              </button>
              <Image
                className="-z-10 absolute w-[79%] top-[5.5%] left-1/2 -translate-x-1/2"
                src={project.image.desktop}
                width={351}
                height={216}
                alt="null"
              />
              <Image className="w-full" src={DesktopFrame} width={512} alt="null" />
            </a.div>
          </a.div>
          <a.div
            className={`
              mobile-frame row-start-1
              col-start-[18] col-span-5
              flex flex-col
            `}
            style={style}
          >
            <a.div
              className="frame mt-auto mb-[54px] semi-lg:mb-[96px] relative"
              style={displayFrameTrail[1]}
            >
              <button
                className={
                  "bg-grey-ea dark:bg-grey-2 ring-1 ring-grey-b dark:ring-grey-3 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-5 absolute -top-[48px] right-0 transition-all"
                }
                aria-label="show mobile view"
              >
                <div
                  className={`
                    p-2 text-sm text-grey-1 dark:text-grey-d 
                    group-hover/icon:text-black dark:group-hover/icon:text-white 
                    border-r border-grey-b dark:border-grey-3 
                    group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-5 leading-[16px] transition-all whitespace-nowrap
                  `}
                  onClick={() => openProjectViewer("mobile")}
                >
                  Show Mobile
                </div>
                <div className={"p-2"}>
                  <FullScreenIcon />
                </div>
              </button>
              <Image
                className="-z-10 absolute w-[92.4%] top-[6.95%] left-1/2 -translate-x-1/2 rounded-b-[8.2%]"
                src={project.image.mobile}
                width={351}
                height={216}
                alt="null"
              />
              <Image className="w-full" src={MobileFrame} width={256} alt="null" />
            </a.div>
          </a.div>
        </>
      ))}
      <div className="aesthetics -z-10">
        <div className={`absolute top-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[bgLineRevealSpring, bgLineGlowSpring]}
          />
        </div>
        <div className={`absolute right-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine variant="bold" animation={[bgLineRevealSpring, bgLineGlowSpring]} />
        </div>
        <div className={`absolute bottom-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[bgLineRevealSpring, bgLineGlowSpring]}
          />
        </div>
        <div className={`absolute left-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine variant="bold" animation={[bgLineRevealSpring, bgLineGlowSpring]} />
        </div>

        {plusPositions.map((pos, index) => (
          <div
            key={pos}
            className={`absolute duration-300 ${pos} group-hover/display:rotate-[.25turn] transition-transform`}
          >
            <Plus
              className="duration-300 stroke-grey-8 dark:stroke-grey-9 group-hover/display:stroke-blue-100 dark:group-hover/display:stroke-blue-d-200"
              animation={bgPlusRevealTrail[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
