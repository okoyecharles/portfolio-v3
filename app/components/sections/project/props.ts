import { Project } from "@/app/data/project";
import { Dispatch, SetStateAction } from "react";

type FeaturedProject = Required<Project>;

type FeaturedProjectProps = {
  projectIndex: number;
  setProjectIndex: Dispatch<SetStateAction<number>>;
  projects: FeaturedProject[];
}

export type FeaturedProjectListProps = FeaturedProjectProps;

export type FeaturedProjectDisplayProps = {
  project: FeaturedProject;
}

export type FeaturedProjectInfoProps = {
  project: FeaturedProject;
}

export type FeaturedProjectTagProps = {
  name: string
}

export default FeaturedProjectProps;