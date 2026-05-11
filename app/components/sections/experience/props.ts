import { Experience } from '@/app/data/experience';
import { SpringValue } from '@react-spring/web';

export interface ExperienceImageProps {
	experiences: Experience[];
  imageTransition: Function;
}

export interface ExperienceCardProps {
  experiences: Experience[];
  currentIndex: number;
  setCurrentIndex: Function;
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
