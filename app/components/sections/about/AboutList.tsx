import { AboutListProps } from "@/app/components/sections/about/props";
import { useObservedSprings } from "@/app/components/utils/useObservedSpring";
import { a, useSpring, useTrail } from "@react-spring/web";

export default function AboutList({items}: AboutListProps) {
  const LIST_HEIGHT = 32 * (items.length - 1);
  const {observedRef, springAnimate} = useObservedSprings(
    [{height: 0}, {y: "-50%", scale: 0}, {opacity: 0}],
    [
      {
        height: LIST_HEIGHT,
        config: {friction: 35, tension: 250},
        delay: 250,
      },
      {
        y: "-50%",
        scale: 1,
        config: {friction: 35, tension: 500},
        delay: 250,
      },
      {opacity: 1, delay: 450},
    ],
    [
      useSpring,
      (cb: Function) => useTrail(items.length, cb),
      (cb: Function) => useTrail(items.length, cb),
    ]
  );

  return (
    <div className="relative" ref={observedRef}>
      <a.div
        className="list-marker-line absolute top-[12px] left-[12px] w-[2px] bg-grey-ea dark:bg-grey-2"
        style={springAnimate[0]}
      />
      <ul className="grid gap-2">
        {items.map((item, itemIndex) => (
          <li className="ps-[34px] relative" key={item}>
            <a.div
              className="list-marker h-[10px] aspect-square rounded-[5px] ring-1 ring-blue-100 dark:ring-blue-200 bg-grey-ea dark:bg-grey-2 absolute top-1/2 -translate-y-1/2 left-2"
              style={springAnimate[1][itemIndex]}
            />
            <a.span className="block" style={springAnimate[2][itemIndex]}>
              {item}
            </a.span>
          </li>
        ))}
      </ul>
    </div>
  );
}