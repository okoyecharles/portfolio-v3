import { ExperienceControlProps } from "@/app/components/sections/experience/props";
import React from "react";

export default function ExperienceControl({
  expertiseIndex,
  setExpertiseIndex,
  expertiseCount,
}: ExperienceControlProps) {
  return (
    <aside className="flex justify-center gap-3 my-6 md:my-8">
      {Array(expertiseCount)
        .fill(0)
        .map((_, index) => {
          const isActiveButton = index === expertiseIndex;
          return (
            <button
              key={index}
              className={`w-[12px] aspect-square rounded-[50%] ring-grey-b dark:ring-grey-5 ${
                isActiveButton
                  ? "bg-blue-100 dark:bg-blue-d-200"
                  : "bg-grey-d dark:bg-grey-2 hover:ring-1"
              }`}
              onClick={() => setExpertiseIndex(index)}
            />
          );
        })}
    </aside>
  );
}