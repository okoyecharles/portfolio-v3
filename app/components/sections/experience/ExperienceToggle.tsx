import { a, useSpring } from "@react-spring/web";
import { ExperienceType, experienceTypes } from "@/app/data/experience";
import { useMemo } from "react";

export default function ExperienceToggle({
  experienceType,
  setExperienceType,
}: {
  experienceType: ExperienceType;
  setExperienceType: React.Dispatch<React.SetStateAction<ExperienceType>>;
}) {
  const MIN_TAB_WIDTH = 40;
  const tabsRectMap = useMemo(() => {
    const rectEntries: Array<[ExperienceType, { x: number; width: number }]> =
      [];
    for (let i = 0; i < experienceTypes.length; i++) {
      const type = experienceTypes[i];
      const typeX =
        i === 0 ? 0 : rectEntries[i - 1][1].x + rectEntries[i - 1][1].width;
      const typeWidth = Math.max(MIN_TAB_WIDTH + type.label.length * 8, 100);
      rectEntries.push([type.value, { x: typeX, width: typeWidth }]);
    }
    return new Map(rectEntries);
  }, [experienceTypes]);

  const toggleExpSpring = useSpring({
    from: { x: -MIN_TAB_WIDTH - 12, width: MIN_TAB_WIDTH },
    to: {
      x: tabsRectMap.get(experienceType)?.x ?? 0,
      width: tabsRectMap.get(experienceType)?.width ?? MIN_TAB_WIDTH,
    },
    config: {
      tension: 300,
    },
  });

  return (
    <div
      className="exp-toggle p-1 flex ring-1 ring-grey-d dark:ring-grey-2 rounded-[20px] relative isolate overflow-hidden self-start mb-4 ml-auto h-10"
      role="radiogroup"
      aria-label="experience toggle"
    >
      <a.div
        className="toggle-active h-8 bg-grey-ea dark:bg-grey-3 rounded-[16px] absolute top-1 -z-10"
        style={toggleExpSpring}
      ></a.div>
      {experienceTypes.map((type) => (
        <button
          key={type.label}
          role="radio"
          aria-label={`switch to ${type.label} experience`}
          aria-checked={type.value === experienceType}
          className={`
            toggle group/toggle transition-colors flex items-center justify-center gap-2
${type.value === experienceType ? " is-active text-grey-2 dark:text-grey-d" : "text-grey-8 dark:text-grey-6"}
          `}
          style={{
            width: tabsRectMap.get(type.value)?.width ?? MIN_TAB_WIDTH,
          }}
          onClick={() => setExperienceType(type.value)}
        >
          {type.icon}
          <span>{type.label}</span>
        </button>
      ))}
    </div>
  );
}
