import { Project } from "@/app/data/project";
import { RefObject } from "react";

export type ProjectGridProps = {
  projects: Array<Project>;
}

export type ProjectCardProps = {
  project: Project;
  headerRef: RefObject<HTMLAnchorElement>;
}

export type ProjectCardLinksProps = {
  link: Project['link'];
}