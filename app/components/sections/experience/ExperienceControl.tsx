import { ExperienceControlProps } from "@/app/components/sections/experience/props";
import React, { useRef } from "react";

export default function ExperienceControl({
  currentIndex,
  setCurrentIndex,
  experiences,
}: ExperienceControlProps) {
	const experienceCount = experiences.length;
  const experienceTabTriggerRefs = experiences.map(() => useRef<HTMLButtonElement>(null));
  function handleKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    let newExpertiseIndex = -1;
    if (event.key === "ArrowLeft") {
      newExpertiseIndex = (currentIndex + (experienceCount - 1)) % experienceCount;
    } else if (event.key === "ArrowRight") {
      newExpertiseIndex = (currentIndex + 1) % experienceCount;
    } else return;
    setCurrentIndex(newExpertiseIndex);
    experienceTabTriggerRefs[newExpertiseIndex].current?.focus();
  }

  return (
    <aside>
      <ul
        className="flex justify-center gap-3 my-6 md:my-8"
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {Array(experienceCount)
          .fill(0)
          .map((_, index) => {
            const isActiveButton = index === currentIndex;
            return (
              <li key={index} role="presentation">
                <button
                  role="tab"
                  ref={experienceTabTriggerRefs[index]}
                  id={`experience-item-${index + 1}-trigger`}
                  tabIndex={index === currentIndex ? 0 : -1}
                  name={`item ${index + 1} - ${experiences[index].title}`}
                  aria-label={`item ${index + 1} - ${experiences[index].title}`}
                  aria-controls={`experience-item-${index + 1}`}
                  aria-selected={index === currentIndex}
                  className={`w-[12px] aspect-square rounded-[50%] ring-grey-b dark:ring-grey-5 ${
                    isActiveButton
                      ? "bg-blue-100 dark:bg-blue-d-200"
                      : "bg-grey-d dark:bg-grey-2 hover:ring-1"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
