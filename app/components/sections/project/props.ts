import { Project } from "@/app/data/project";
import { SpringValue, TransitionFn } from "@react-spring/web";
import { Dispatch, SetStateAction } from "react";

type FeaturedProject = Required<Project>;
type SpringAnimation<T = number> = Record<string, SpringValue<T>>;

type FeaturedProjectProps = {
  projectIndex: number;
  setProjectIndex: Dispatch<SetStateAction<number>>;
  projects: FeaturedProject[];
}

export type FeaturedProjectSwiperProps = FeaturedProjectProps;

export type FeaturedProjectDisplayProps = {
  project: FeaturedProject;
  displayFrameTrail: Array<SpringAnimation>;
  displayTransition: TransitionFn<FeaturedProject, any>;
}

export type FeaturedProjectListProps = FeaturedProjectProps;

export type FeaturedProjectInfoProps = {
  project: FeaturedProject;
  contentRevealTrail: Array<SpringAnimation>;
}

export type FeaturedProjectTagProps = {
  name: string
}

export type FeaturedProjectCardProps = {
  project: FeaturedProject;
  active: boolean;
  activeOffset: number;
}

export default FeaturedProjectProps;