import Image from "next/image";
import { RecommendationCardProps } from "./props";
import QuoteIconLarge from "../../svg/abstract/QuoteIconLarge";
import { a } from "@react-spring/web";

export default function RecommendationCard({
  cardTransition,
  recommendation,
}: RecommendationCardProps) {
  return (
    <a.article
      className={`
        p-6 rounded-[10px] max-w-[480px] md:max-w-[320px] semi-lg:max-w-[360px]
        bg-grey-fb dark:bg-grey-15
        ring-1 ring-grey-b dark:ring-grey-3
      `}
      style={cardTransition}
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
      <div className="grid gap-2">
        {recommendation.description.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </a.article>
  );
}
