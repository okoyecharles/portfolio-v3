import { SpringValue } from '@react-spring/web';
import { Expertise } from './../../../data/experience';

export interface ExperienceImageProps {
  imageTransition: Function;
}

export interface ExperienceCardProps {
  expertise: Expertise;
  contentReveal: Record<string, SpringValue>[];
}

export interface ExperienceTimelineProps {
  expertise: Expertise;
  yearTimeLineScroll: Record<string, SpringValue>;
  monthTimeLineHeight: Record<string, SpringValue>;
  monthTimeLineMarker: Record<string, SpringValue>;
}

export interface ExperienceControlProps {
  expertiseIndex: number;
  setExpertiseIndex: Function;
  expertiseCount: number;
}