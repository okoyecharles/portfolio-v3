import { AboutImageProps } from "@/app/components/sections/about/props";
import { a } from "@react-spring/web";
import Image from "next/image";
import HorizontalDottedLine from "@/app/components/background/HorizontalDottedLine";
import DottedLine from "@/app/components/background/DottedLine";
import Plus from "@/app/components/background/Plus";

export default function AboutImage({
  imageAnimate,
  plusReveal,
  lineAnimate,
}: AboutImageProps) {
  const plusPositions = [
    "top-0 left-0",
    "top-0 right-0",
    "bottom-0 right-0",
    "bottom-0 left-0",
  ];

  return (
    <picture
      className="group/picture about-image relative max-w-[350px] w-full aspect-square p-[25px] mx-auto lg:my-auto md:col-span-4">
      <a.div
        className="w-full rounded-[10px] max-w-[300px] aspect-square overflow-hidden"
        style={imageAnimate()}
      >
        <Image
          src="/assets/okoyecharles.webp"
          alt="A portrait image of Okoye Charles"
          width={300}
          height={300}
          className="transition-transform duration-500 delay-100 group-hover/picture:scale-105"
        />
      </a.div>
      <div className="absolute inset-0 aesthetics -z-10">
        <div className={`absolute top-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>
        <div className={`absolute right-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>
        <div className={`absolute bottom-[12.5px] left-1/2 -translate-x-1/2`}>
          <HorizontalDottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>
        <div className={`absolute left-[12.5px] top-1/2 -translate-y-1/2`}>
          <DottedLine
            variant="bold"
            animation={[lineAnimate[0], lineAnimate[1]]}
          />
        </div>

        {plusPositions.map((pos, index) => (
          <div
            key={pos}
            className={`absolute ${pos} duration-300 group-hover/picture:rotate-[.25turn] transition-transform`}
          >
            <Plus
              className="duration-300 stroke-grey-8 dark:stroke-grey-9 group-hover/picture:stroke-blue-100 dark:group-hover/picture:stroke-blue-d-200"
              animation={plusReveal[index]}
            />
          </div>
        ))}
      </div>
    </picture>
  );
}