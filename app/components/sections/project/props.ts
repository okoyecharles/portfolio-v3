import { Project } from "@/app/data/project";

export type ProjectGridProps = {
  projects: Array<Project>;
}

export type ProjectCardProps = {
  project: Project;
}

export type ProjectCardLinksProps = {
  link: Project['link'];
}