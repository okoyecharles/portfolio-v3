import { AboutListProps } from "@/app/components/sections/about/props";
import { useObservedSprings } from "@/app/hooks/useObservedSprings";
import {
  a,
  config,
  useSpring,
  useSpringRef,
  useTrail,
} from "@react-spring/web";

export default function AboutList({ items }: AboutListProps) {
  const LIST_HEIGHT = 32 * (items.length - 1);
  const listLineRef = useSpringRef();
  const listLineAnimate = useSpring({
    ref: listLineRef,
    from: { height: 0 },
    to: { height: LIST_HEIGHT },
    config: { friction: 35, tension: 250 },
  });

  const listMarkersRef = useSpringRef();
  const listMarkersAnimate = useTrail(items.length, {
    ref: listMarkersRef,
    from: { y: "-50%", scale: 0 },
    to: {
      y: "-50%",
      scale: 1,
      config: { friction: 35, tension: 500 },
    },
    config: config.stiff,
  });

  const listItemsRef = useSpringRef();
  const listItemsAnimate = useTrail(items.length, {
    ref: listItemsRef,
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: config.stiff,
  });

  const { observedRef } = useObservedSprings(
    [listLineRef, listMarkersRef, listItemsRef],
    [.3, .3, .7],
  );

  return (
    <div className="relative" ref={observedRef}>
      <a.div
        className="list-marker-line absolute top-[12px] left-[12px] w-[2px] bg-grey-c dark:bg-grey-3"
        style={listLineAnimate}
      />
      <ul className="grid gap-2">
        {items.map((item, itemIndex) => (
          <li className="ps-[34px] relative" key={item}>
            <a.div
              className="list-marker h-[10px] aspect-square rounded-full ring-1 ring-blue-100 dark:ring-blue-200 bg-blue-ghost dark:bg-blue-d-ghost absolute top-1/2 -translate-y-1/2 left-2"
              style={listMarkersAnimate[itemIndex]}
            />
            <a.span className="block" style={listItemsAnimate[itemIndex]}>
              {item}
            </a.span>
          </li>
        ))}
      </ul>
    </div>
  );
}
