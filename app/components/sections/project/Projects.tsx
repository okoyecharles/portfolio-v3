"use client";
import { useRef } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import SectionDescription from "../SectionDescription";
import projectData from "@/app/data/project";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  const { current: projects } = useRef(projectData.slice(3));

  return (
    <Section
      id="more-projects"
      name="more-projects"
      padding="pt-12 pb-16 md:py-8 md:pb-[224px]"
    >
      <SectionHeader>More projects</SectionHeader>
      <SectionDescription>
        A variety of additional projects to provide a clearer view of my creative journey
      </SectionDescription>
      <ProjectGrid projects={projects} />
    </Section>
  );
}
