"use client";
import { useRef, useState } from "react";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import projectData, { Project } from "@/app/data/project";
import FeaturedProjects from "./FeaturedProjects";
import FeaturedProjectsDesktop from "./FeaturedProjectsDesktop";

export default function Featured() {
  const { current: projects } = useRef(
    projectData.slice(0, 3) as Required<Project>[]
  );
  const [projectIndex, setProjectIndex] = useState<number>(2);
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
        />
        <FeaturedProjectsDesktop
          projects={projects}
          projectIndex={projectIndex}
          setProjectIndex={setProjectIndex}
        />
      </div>
    </Section>
  );
}
