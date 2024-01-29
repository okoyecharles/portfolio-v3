import { RecommendationControlProps } from "./props";

export default function RecommendationControl({
  recommendationCount,
  recommendationIndex,
  setRecommedationIndex
}: RecommendationControlProps) {
  return (
    <aside className="flex justify-center gap-3 mb-6 md:my-8">
      {Array(recommendationCount)
        .fill(0)
        .map((_, index) => {
          const isActiveButton = index === recommendationIndex;
          return (
            <button
              key={index}
              className={`w-[12px] aspect-square rounded-[50%] ring-grey-b dark:ring-grey-5 ${
                isActiveButton
                  ? "bg-blue-100 dark:bg-blue-d-200"
                  : "bg-grey-d dark:bg-grey-2 hover:ring-1"
              }`}
              onClick={() => setRecommedationIndex(index)}
            />
          );
        })}
    </aside>
  );
}
