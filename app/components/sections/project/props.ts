import { Project } from "@/app/data/project";
import { LegacyRef } from "react";

export type ProjectGridProps = {
  projects: Array<Project>;
}

export type ProjectCardProps = {
  project: Project;
  headerRef: LegacyRef<HTMLAnchorElement>;
}

export type ProjectCardLinksProps = {
  link: Project['link'];
}
