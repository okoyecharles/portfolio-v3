import { Experience } from "@/app/data/experience";
import { SpringValue, TransitionFn } from "@react-spring/web";

export interface ExperienceImageProps {
  experiences: Experience[];
  imageTransition: TransitionFn<
    number,
    {
      opacity: number;
      rotateX: number;
      rotateY: number;
      rotateZ: number;
      y: string;
    }
  >;
}

export interface ExperienceCardProps {
  experiences: Experience[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  contentReveal: Record<string, SpringValue>[];
}

export interface ExperienceTimelineProps {
  currentIndex: number;
  experiences: Array<Experience>;
  yearTimeLineScroll: Record<string, SpringValue>;
  monthTimeLineHeight: Record<string, SpringValue>;
  monthTimeLineMarker: Record<string, SpringValue>;
}

export interface ExperienceControlProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  experiences: Experience[];
}
