import { Recommendation } from "@/app/data/recommendation"
import { SpringValue } from "@react-spring/web";
import { Dispatch, SetStateAction } from "react";

export type RecommendationSwiperProps = {
  recommendations: Array<Recommendation>;
  recommendationIndex: number;
  setRecommedationIndex: Dispatch<SetStateAction<number>>;
}

export type RecommendationCardProps = {
  recommendation: Recommendation;
  cardTransition: Record<string, SpringValue<number>>;
}

export type RecommendationControlProps = {
  recommendationCount: number;
  recommendationIndex: number;
  setRecommedationIndex: Dispatch<SetStateAction<number>>;
}