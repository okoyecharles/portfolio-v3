import RecommendationCard from "./RecommendationCard";
import { RecommendationSwiperProps } from "./props";

export default function RecommendationSwiper({
  recommendations,
  recommedationIndex,
  setRecommedationIndex,
}: RecommendationSwiperProps) {
  return (
    <div className="flex justify-between recommendations-swiper">
      <div className="ring-1 min-w-[500px] aspect-square">
        
      </div>
      <RecommendationCard
        recommendation={recommendations[recommedationIndex]}
      />
    </div>
  );
}