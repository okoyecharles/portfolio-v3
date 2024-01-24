import Image from "next/image";
import { RecommendationCardProps } from "./props";
import QuoteIconLarge from "../../svg/abstract/QuoteIconLarge";

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <article
      className={`
      p-6 rounded-[10px] max-w-[360px] my-auto
      bg-grey-fb dark:bg-grey-15
      ring-1 ring-grey-b dark:ring-grey-3
    `}
    >
      <header className="relative flex gap-4 mb-4 isolate">
        <div className="image-container max-h-[64px] aspect-square rounded-[50%] overflow-hidden ring-1 ring-grey-b dark:ring-grey-3">
          <Image
            src={recommendation.image}
            width={64}
            height={64}
            alt={`A portrait image of ${recommendation.author}`}
            className="w-full h-full"
          />
        </div>
        <div className="grid gap-1">
          <h3 className="font-bold text-grey-1 dark:text-grey-b leading-[1.2]">
            {recommendation.author}
          </h3>
          <p className="text-[14px] leading-[1]">{recommendation.occupation}</p>
          <p className="text-[14px] leading-[1] text-blue-200 dark:text-blue-100">
            {recommendation.location}
          </p>
        </div>
        <div className="absolute top-0 right-0 quote-icon -z-10">
          <QuoteIconLarge />
        </div>
      </header>
      <p>{recommendation.description.join("\n")}</p>
    </article>
  );
}
