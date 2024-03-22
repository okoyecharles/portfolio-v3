import { useSpring } from "@react-spring/web";
import { FeaturedProjectTabListProps } from "../props";
import { a } from "@react-spring/web";
import FeaturedProjectTag from "../FeaturedProjectTag";

export default function FeaturedProjectTabList({
  projects,
  projectIndex,
  setProjectIndex,
}: FeaturedProjectTabListProps) {
  const PROJECT_HEIGHT = (1 / projects.length) * 100;
  const projectMarkerPos = PROJECT_HEIGHT / 2 + projectIndex * PROJECT_HEIGHT;
  const projectMarkerSpring = useSpring({pos: projectMarkerPos});

  const rotatingGradientStyles = `
    rotating-gradient
    bg-grey-d dark:bg-grey-3
    before:bg-grey-ea dark:before:bg-grey-15
    ${projects[projectIndex].themeColor}`;

  return (
    <div
      className="featured-project-list border-b semi-lg:border-r semi-lg:border-b-0 last:border-none border-grey-d dark:border-grey-2  col-span-12 semi-lg:col-span-3 grid grid-cols-3 semi-lg:grid-cols-1 [grid-auto-rows:1fr] relative isolate z-10">
      <a.span
        className={`
        absolute
        left-3 top-0 -translate-y-1/2
        w-[calc(100%-24px)] h-[calc(33%-24px)]
        rounded-[5px] -z-10
        hidden semi-lg:block
        ${rotatingGradientStyles}
      `}
        style={{top: projectMarkerSpring.pos.to((pos) => `${pos}%`)}}
      />
      <a.span
        className={`
        absolute
        top-3 left-0 -translate-x-1/2
        h-[calc(100%-24px)] w-[calc(33%-24px)]
        rounded-[5px] -z-10
        hidden md:block semi-lg:hidden
        ${rotatingGradientStyles}
      `}
        style={{left: projectMarkerSpring.pos.to((pos) => `${pos}%`)}}
      />
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="project-item ring-1 ring-grey-ea dark:ring-grey-2 hover:ring-grey-b dark:hover:ring-grey-4 p-6 flex flex-col gap-2 cursor-pointer first-of-type:rounded-ss-[10px] last-of-type:rounded-se-[10px] semi-lg:last-of-type:rounded-es-[10px] semi-lg:last-of-type:rounded-se-none transition-shadow"
          onClick={() => setProjectIndex(index)}
        >
          <div className="mb-2 logo">{project.logo}</div>
          <h3 className="font-visby font-extrabold text-[18px] text-grey-1 dark:text-grey-d">
            {project.name}
          </h3>
          <div className="flex flex-wrap gap-2 tags">
            {project.tags.map((tag) => (
              <FeaturedProjectTag name={tag} key={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
