"use client";
import { useRef, useState } from "react";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import projectData, { Project } from "@/app/data/project";
import FeaturedProjectsMobile from "./mobile/FeaturedProjectsMobile";
import FeaturedProjectsDesktop from "./desktop/FeaturedProjectsDesktop";
import FeaturedProjectViewer from "./FeaturedProjectViewer";
import { FeaturedProject } from "./props";

export default function FeaturedProjects() {
  const { current: projects } = useRef(projectData.slice(0, 3) as Required<Project>[]);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [projectViewMode, setProjectViewMode] =
    useState<keyof FeaturedProject["image"]>("desktop");
  const [projectViewerOpen, setProjectViewerOpen] = useState<boolean>(false);

  function openProjectViewer(mode: typeof projectViewMode) {
    setProjectViewMode(mode);
    setProjectViewerOpen(true);
  }

  return (
    <Section id="projects" name="projects" padding="pt-12 pb-16 md:py-8 md:pb-[224px]">
      <SectionHeader>Featured work</SectionHeader>
      <SectionDescription>
        A curated collection of my most exceptional work
      </SectionDescription>
      <div className="featured-projects-container my-8">
        <FeaturedProjectViewer
          open={projectViewerOpen}
          setOpen={setProjectViewerOpen}
          project={projects[projectIndex]}
          projectViewMode={projectViewMode}
          setProjectViewMode={setProjectViewMode}
        />
        <FeaturedProjectsMobile
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
      </div>
    </Section>
  );
}
