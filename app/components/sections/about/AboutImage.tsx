import { AboutImageProps } from "@/app/components/sections/about/props";
import { a, animated, config, to, useSpring } from "@react-spring/web";
import InteractiveCanvasGrid from "../../background/Grid";
import Corner, { CornerPosition } from "../../background/Corner";
import { useRef, useEffect } from "react";
import {
  getReverseAngleFromCenter,
} from "@/app/util/math/angles";

export default function AboutImage({ imageAnimate }: AboutImageProps) {
  const pictureRef = useRef<HTMLPictureElement>(null);
  const [{ rx, ry }, api] = useSpring(() => ({
    rx: 0,
    ry: 0,
		config: {
      tension: 240,
      friction: 25,
		},
  }));

  const [{ gradient }, gradientApi] = useSpring(() => ({
    gradient: 180,
  }));

  useEffect(() => {
    if (!pictureRef.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!pictureRef.current) return;

      const pictureRect = pictureRef.current.getBoundingClientRect();
      const x = e.clientX - pictureRect.left;
      const y = e.clientY - pictureRect.top;

      const magnetStrength = 20;

      const xRatio = (x / pictureRect.width) * 2 - 1;
      const yRatio = (y / pictureRect.height) * 2 - 1;
      const rotateY =
        Math.sign(xRatio) * Math.pow(Math.abs(xRatio), 1.5) * magnetStrength;
      const rotateX =
        -Math.sign(yRatio) * Math.pow(Math.abs(yRatio), 1.5) * magnetStrength;

      // calculate gradient angle from mouse position around the origin center
      // 0deg top, 90deg right, 180deg bottom, 270deg left
      const gradientAngle = getReverseAngleFromCenter(
        x,
        y,
        pictureRect.width,
        pictureRect.height,
      );

      api.start({
        rx: rotateX,
        ry: rotateY,
      });
      gradientApi.start({
        gradient: gradientAngle,
				config: { duration: 100}
      });
    };

    const handleMouseOut = () => {
      api.start({
        rx: 0,
        ry: 0,
      });
      gradientApi.start({
        gradient: 180,
        config: config.stiff,
      });
    };

    pictureRef.current.addEventListener("mouseout", handleMouseOut);
    pictureRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      pictureRef.current?.removeEventListener("mouseout", handleMouseOut);
      pictureRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pictureRef]);

  return (
    <picture
      className="group/picture about-image relative max-w-[350px] w-full aspect-square mx-auto semi-lg:my-auto semi-lg:col-span-4 isolate overflow-hidden group/corners grid place-items-center"
      ref={pictureRef}
    >
      <a.div
        className="w-full max-w-[250px] aspect-square transition-all relative isolate"
        style={imageAnimate()}
      >
        <a.div
					className="z-10 inset-0 absolute rounded-[10px] opacity-25 dark:opacity-50"
          style={{
            background: to(
              [gradient],
              (gradient) =>
                `linear-gradient(
								${gradient}deg,
								rgba(255,255,255,0.15) 0%,
								rgba(255,255,255,0.08) 18%,
								rgba(255,255,255,0.02) 35%,
								rgba(0,0,0,0.00) 48%,
								rgba(0,0,0,0.08) 65%,
								rgba(0,0,0,0.22) 82%,
								rgba(0,0,0,0.38) 100%
							)`,
            ),
            transform: to(
              [rx, ry],
              (rx, ry) => `rotateX(${rx}deg) rotateY(${ry}deg)`,
            ),
          }}
        />
        <animated.img
          src="/assets/okoyecharles.webp"
          alt="A portrait image of Okoye Charles"
          width={250}
          height={250}
          className={"rounded-[10px]"}
          style={{
            transform: to(
              [rx, ry],
              (rx, ry) => `rotateX(${rx}deg) rotateY(${ry}deg)`,
            ),
          }}
        />
      </a.div>
      <div className="absolute top-3 left-3 w-[calc(100%-24px)] h-[calc(100%-24px)] -z-10 overflow-hidden">
        <InteractiveCanvasGrid width={350} height={350} baseDotAlpha={0} />
      </div>
      <Corner position={CornerPosition.TopLeft} />
      <Corner position={CornerPosition.TopRight} />
      <Corner position={CornerPosition.BottomRight} />
      <Corner position={CornerPosition.BottomLeft} />
    </picture>
  );
}
