import { SpringValue } from '@react-spring/web';
import { Experience } from './../../../data/experience';

export interface ExperienceImageProps {
	experiences: Experience[];
  imageTransition: Function;
}

export interface ExperienceCardProps {
  experience: Experience;
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
  setCurrentIndex: Function;
  experiences: Experience[];
}
