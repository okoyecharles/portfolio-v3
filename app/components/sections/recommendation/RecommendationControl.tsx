import { useRef } from "react";
import { RecommendationControlProps } from "./props";

export default function RecommendationControl({
  recommendations,
  recommendationCount,
  recommendationIndex,
  setRecommedationIndex,
}: RecommendationControlProps) {
  const recommendationTabTriggerRefs = recommendations.map(() =>
    useRef<HTMLButtonElement>(null)
  );
  function handleKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    let newRecommendationIndex = -1;
    if (event.key === "ArrowLeft") {
      newRecommendationIndex =
        (recommendationIndex + (recommendationCount - 1)) % recommendationCount;
    } else if (event.key === "ArrowRight") {
      newRecommendationIndex = (recommendationIndex + 1) % recommendationCount;
    } else return;
    setRecommedationIndex(newRecommendationIndex);
    recommendationTabTriggerRefs[newRecommendationIndex].current?.focus();
  }

  return (
    <aside>
      <ul
        className="flex justify-center gap-3 mb-6 md:my-8"
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {Array(recommendationCount)
          .fill(0)
          .map((_, index) => {
            const isActiveButton = index === recommendationIndex;
            return (
              <li key={index} role="presentation">
                <button
                  role="tab"
                  ref={recommendationTabTriggerRefs[index]}
                  id={`recommendation-item-${index + 1}-trigger`}
                  tabIndex={index === recommendationIndex ? 0 : -1}
                  name={`item ${index + 1} - from ${recommendations[index].author}`}
                  aria-label={`item ${index + 1} - from ${recommendations[index].author}`}
                  aria-controls={`recommendation-item-${index + 1}`}
                  aria-selected={index === recommendationIndex}
                  className={`w-[12px] aspect-square rounded-[50%] ring-grey-b dark:ring-grey-5 ${
                    isActiveButton
                      ? "bg-blue-100 dark:bg-blue-d-200"
                      : "bg-grey-d dark:bg-grey-2 hover:ring-1"
                  }`}
                  onClick={() => setRecommedationIndex(index)}
                />
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
