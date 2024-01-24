"use client";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import recommendationData from "@/app/data/recommendation";
import { useState } from "react";
import RecommendationSwiper from "./RecommendationSwiper";

export default function Recommendation() {
  const recommedations = recommendationData;
  const [recommedationIndex, setRecommedationIndex] = useState<number>(2);

  return (
    <Section name="recommendations" id="recommendations">
      <SectionHeader mode="standalone">
        Collaborating{" "}
        <span className="text-blue-100 dark:blue-d-200">remotely</span> with
        developers across the globe
      </SectionHeader>
      <SectionDescription>
        Recommendations from talented developers with whom I have had the
        privilege to collaborate
      </SectionDescription>
      <RecommendationSwiper
        recommendations={recommedations}
        recommedationIndex={recommedationIndex}
        setRecommedationIndex={setRecommedationIndex}
      />
    </Section>
  );
}

