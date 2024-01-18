"use client";
import { useRef, useState } from "react";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import projectData, { Project } from "@/app/data/project";
import FeaturedProjects from "./FeaturedProjects";
import FeaturedProjectsDesktop from "./FeaturedProjectsDesktop";
import FeaturedProjectViewer from "./FeaturedProjectViewer";
import { FeaturedProject } from "./props";

export default function Featured() {
  const { current: projects } = useRef(
    projectData.slice(0, 3) as Required<Project>[]
  );
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [projectViewMode, setProjectViewMode] =
    useState<keyof FeaturedProject["image"]>("desktop");
  const [projectViewerOpen, setProjectViewerOpen] = useState<boolean>(true);

  function openProjectViewer(mode: typeof projectViewMode) {
    setProjectViewMode(mode);
    setProjectViewerOpen(true);
  }

  return (
    <Section id="projects" name="projects">
      <SectionHeader>Featured work</SectionHeader>
      <SectionDescription>
        A curated collection of my most exceptional work
      </SectionDescription>
      <div className="featured-projects-container my-8">
        <FeaturedProjects
          projects={projects}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
          openProjectViewer={openProjectViewer}
        />
        <FeaturedProjectsDesktop
          projects={projects}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
          openProjectViewer={openProjectViewer}
        />
        <FeaturedProjectViewer
          open={projectViewerOpen}
          setOpen={setProjectViewerOpen}
          project={projects[projectIndex]}
          projectViewMode={projectViewMode}
        />
      </div>
    </Section>
  );
}
