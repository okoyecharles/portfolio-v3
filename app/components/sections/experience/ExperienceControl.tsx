import { ExperienceControlProps } from "@/app/components/sections/experience/props";
import React, { useRef } from "react";

export default function ExperienceControl({
  expertiseIndex,
  setExpertiseIndex,
  expertiseCount,
  expertiseData,
}: ExperienceControlProps) {
  const expertiseTabTriggerRefs = expertiseData.map(() => useRef<HTMLButtonElement>(null));
  function handleKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    let newExpertiseIndex = -1;
    if (event.key === "ArrowLeft") {
      newExpertiseIndex = (expertiseIndex + (expertiseCount - 1)) % expertiseCount;
    } else if (event.key === "ArrowRight") {
      newExpertiseIndex = (expertiseIndex + 1) % expertiseCount;
    } else return;
    setExpertiseIndex(newExpertiseIndex);
    expertiseTabTriggerRefs[newExpertiseIndex].current?.focus();
  }

  return (
    <aside>
      <ul
        className="flex justify-center gap-3 my-6 md:my-8"
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {Array(expertiseCount)
          .fill(0)
          .map((_, index) => {
            const isActiveButton = index === expertiseIndex;
            return (
              <li key={index} role="presentation">
                <button
                  role="tab"
                  ref={expertiseTabTriggerRefs[index]}
                  id={`experience-item-${index + 1}-trigger`}
                  tabIndex={index === expertiseIndex ? 0 : -1}
                  name={`item ${index + 1} - ${expertiseData[index].title}`}
                  aria-label={`item ${index + 1} - ${expertiseData[index].title}`}
                  aria-controls={`experience-item-${index + 1}`}
                  aria-selected={index === expertiseIndex}
                  className={`w-[12px] aspect-square rounded-[50%] ring-grey-b dark:ring-grey-5 ${
                    isActiveButton
                      ? "bg-blue-100 dark:bg-blue-d-200"
                      : "bg-grey-d dark:bg-grey-2 hover:ring-1"
                  }`}
                  onClick={() => setExpertiseIndex(index)}
                />
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
