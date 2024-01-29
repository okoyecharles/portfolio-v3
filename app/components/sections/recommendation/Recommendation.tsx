"use client";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import recommendationData from "@/app/data/recommendation";
import { useState } from "react";
import RecommendationSwiper from "./RecommendationSwiper";
import RecommendationControl from "./RecommendationControl";

export default function Recommendation() {
  const recommedations = recommendationData;
  const [recommedationIndex, setRecommedationIndex] = useState<number>(2);

  return (
    <Section
      name="recommendations"
      id="recommendations"
      padding="pt-12 pb-16 md:py-8 md:pb-[224px]"
    >
      <SectionHeader mode="standalone">
        Collaborating{" "}
        <span className="text-blue-100 dark:blue-d-200">remotely</span> with
        professionals across the globe
      </SectionHeader>
      <SectionDescription>
        Recommendations from talented developers with whom I have had the
        privilege of collaborating
      </SectionDescription>
      <RecommendationSwiper
        recommendations={recommedations}
        recommendationIndex={recommedationIndex}
        setRecommedationIndex={setRecommedationIndex}
      />
      <RecommendationControl
        recommendationCount={recommedations.length}
        recommendationIndex={recommedationIndex}
        setRecommedationIndex={setRecommedationIndex}
      />
    </Section>
  );
}
