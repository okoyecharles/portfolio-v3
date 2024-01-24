import { Recommendation } from "@/app/data/recommendation"
import { Dispatch, SetStateAction } from "react";

export type RecommendationSwiperProps = {
  recommendations: Array<Recommendation>;
  recommedationIndex: number;
  setRecommedationIndex: Dispatch<SetStateAction<number>>;
}

export type RecommendationCardProps = {
  recommendation: Recommendation;
}