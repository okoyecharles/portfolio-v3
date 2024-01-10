import Button from "../../clickable/Button";
import Link from "../../clickable/Link";
import GithubIcon from "../../svg/icons/GithubIcon";
import LiveIcon from "../../svg/icons/LiveIcon";
import NorthWestIcon from "../../svg/abstract/NorthWestIcon";
import { formatMonthYear } from "../../utils/moment";
import FeaturedProjectProps, {
  FeaturedProjectDisplayProps,
  FeaturedProjectInfoProps,
  FeaturedProjectListProps,
  FeaturedProjectTagProps,
} from "./props";
import Image from "next/image";
import DesktopFrame from "@/public/assets/projects/desktop-frame.png";
import MobileFrame from "@/public/assets/projects/mobile-frame.png";
import { a, useSpring } from "@react-spring/web";

export default function FeaturedProjectsDesktop(props: FeaturedProjectProps) {
  const { projectIndex, projects } = props;
  return (
    <div className="ring-1ring-grey-eadark:ring-grey-2 rounded-[10px] grid grid-cols-12 bg-white dark:bg-black isolate">
      <FeaturedProjectList {...props} />
      <FeaturedProjectInfo project={projects[projectIndex]} />
      <FeaturedProjectDisplay project={projects[projectIndex]} />
    </div>
  );
}

function FeaturedProjectDisplay({ project }: FeaturedProjectDisplayProps) {
  return (
    <div
      className={`
        featured-project-display
        col-span-8 semi-lg:col-span-6 relative
        grid grid-cols-24
        ring-1 ring-grey-ea dark:ring-grey-2
        rounded-ee-[10px] semi-lg:rounded-e-[10px]
        overflow-hidden
      `}
    >
      <div
        className={`
          desktop-frame row-start-1
          col-start-3 col-[_span_16_/_span_16]
          flex flex-col
        `}
      >
        <div className="frame mt-auto mb-[32px] semi-lg:mb-[64px] relative">
          <Image
            className="-z-10 absolute w-[78.5%] top-[5.8%] left-1/2 -translate-x-1/2"
            src={project.image.desktop}
            width={351}
            height={216}
            alt="null"
          />
          <Image className="w-full" src={DesktopFrame} width={512} alt="null" />
        </div>
      </div>
      <div
        className={`
          mobile-frame row-start-1
          col-start-[18] col-span-5
          flex flex-col
        `}
      >
        <div className="frame mt-auto mb-[54px] semi-lg:mb-[96px] relative">
          <Image
            className="-z-10 absolute w-[92.4%] top-[6.95%] left-1/2 -translate-x-1/2 rounded-b-[8.2%]"
            src={project.image.mobile}
            width={351}
            height={216}
            alt="null"
          />
          <Image className="w-full" src={MobileFrame} width={256} alt="null" />
        </div>
      </div>
    </div>
  );
}

function FeaturedProjectInfo({ project }: FeaturedProjectInfoProps) {
  return (
    <article className="featured-project-info col-span-4 semi-lg:col-span-3 p-6 flex flex-col bg-grey-ea dark:bg-grey-12 ring-1 ring-grey-d dark:ring-grey-2">
      <Link href={project.link.live} variant="plain">
        <h3 className="font-visby font-extrabold text-[20px] leading-[1] text-grey-1 dark:text-grey-b inline-flex gap-[2px] group/header">
          <span>{project.name}</span>
          <span className="group-hover/header:translate-x-[2px] group-hover/header:-translate-y-[2px] transition-transform">
            <NorthWestIcon />
          </span>
        </h3>
      </Link>
      <span className="text-[14px] text-grey-9 dark:text-grey-5 mt-2">
        <time>{formatMonthYear(project.timeRange[0])}</time> -{" "}
        <time>{formatMonthYear(project.timeRange[1])}</time>
      </span>
      <p className="my-4">{project.description}</p>
      <div className="action-buttons mt-auto flex flex-wrap gap-4">
        <Link href={project.link.live} variant="plain">
          <Button>
            <span>Live Website</span>
            <LiveIcon />
          </Button>
        </Link>
        <Link href={project.link.github} variant="plain">
          <Button variant="black">
            <span>View on Github</span>
            <GithubIcon />
          </Button>
        </Link>
      </div>
    </article>
  );
}

function FeaturedProjectList({
  projects,
  projectIndex,
  setProjectIndex,
}: FeaturedProjectListProps) {
  const PROJECT_HEIGHT = (1 / projects.length) * 100;
  const projectMarkerPos = PROJECT_HEIGHT / 2 + projectIndex * PROJECT_HEIGHT;

  const projectMarkerSpring = useSpring({
    pos: projectMarkerPos,
  });
  return (
    <div className="featured-project-list border-b semi-lg:border-r semi-lg:border-b-0 last:border-none border-grey-d dark:border-grey-2  col-span-12 semi-lg:col-span-3 grid grid-cols-3 semi-lg:grid-cols-1 [grid-auto-rows:1fr] relative isolate">
      <a.span
        className={`
        absolute
        left-3 top-0 -translate-y-1/2
        w-[calc(100%-24px)] h-[calc(33%-24px)]
        bg-grey-ea dark:bg-grey-15
        ring-1 ring-grey-d dark:ring-grey-2
        rounded-[5px] -z-10
        hidden semi-lg:block
      `}
        style={{ top: projectMarkerSpring.pos.to((pos) => `${pos}%`) }}
      />
      <a.span
        className={`
        absolute
        top-3 left-0 -translate-x-1/2
        h-[calc(100%-24px)] w-[calc(33%-24px)]
        bg-grey-ea dark:bg-grey-15
        ring-1 ring-grey-d dark:ring-grey-2
        rounded-[5px] -z-10
        hidden md:block semi-lg:hidden
      `}
        style={{ left: projectMarkerSpring.pos.to((pos) => `${pos}%`) }}
      />
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="project-item ring-1 ring-grey-ea dark:ring-grey-2 hover:ring-grey-b dark:hover:ring-grey-4 p-6 flex flex-col gap-2 cursor-pointer first-of-type:rounded-ss-[10px] last-of-type:rounded-se-[10px] semi-lg:last-of-type:rounded-es-[10px] semi-lg:last-of-type:rounded-se-none transition-colors"
          onClick={() => setProjectIndex(index)}
        >
          <div className="logo mb-2">{project.logo}</div>
          <h3 className="font-visby font-extrabold text-[18px] text-grey-1 dark:text-grey-d">
            {project.name}
          </h3>
          <div className="tags flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <FeaturedProjectTag name={tag} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturedProjectTag({ name }: FeaturedProjectTagProps) {
  const color = `text-tag-${name} dark:text-tag-${name}-dark`;
  const bg = `bg-tag-${name}/20 dark:bg-tag-${name}-dark/25`;
  return (
    <span
      className={`${color} ${bg} text-[14px] rounded-[11px] leading-[1] py-1 px-2`}
    >
      {name}
    </span>
  );
}
