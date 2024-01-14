import FeaturedProjectProps, {
  FeaturedProjectCardProps,
  FeaturedProjectSwiperProps,
} from "./props";
import FeaturedProjectTag from "@/app/components/sections/project/FeaturedProjectsTag";
import { formatMonthYear } from "@/app/components/utils/moment";
import { a } from "@react-spring/web";
import DesktopIcon from "@/app/components/svg/icons/DesktopIcon";
import MobileIcon from "../../svg/icons/MobileIcon";
import Link from "../../clickable/Link";
import Button from "../../clickable/Button";
import LiveIcon from "../../svg/icons/LiveIcon";
import GithubIcon from "../../svg/icons/GithubIcon";

export default function FeaturedProjects(props: FeaturedProjectProps) {
  return (
    <div className="md:hidden">
      <FeaturedProjectSwiper {...props} />
    </div>
  );
}

function FeaturedProjectSwiper({ projects }: FeaturedProjectSwiperProps) {
  return (
    <div className="swiper relative">
      {projects.map((project) => (
        <FeaturedProjectCard project={project} />
      ))}
    </div>
  );
}

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article
      className={`
        bg-grey-d dark:bg-grey-4
        rounded-[10px] p-6
        rotating-gradient before:bg-gradient-to-b
        before:from-grey-ea dark:before:from-grey-2
        before:to-white dark:before:to-black max-w-[320px] mx-auto
        ${project.themeColor}`}
    >
      <header className={"grid gap-1"}>
        <div className="mb-6 logo">{project.logo}</div>
        <h3 className="font-visby font-extrabold text-[20px] text-grey-1 dark:text-grey-d">
          {project.name}
        </h3>
        <div className="flex flex-wrap gap-2 tags">
          {project.tags.map((tag) => (
            <FeaturedProjectTag name={tag} key={tag} />
          ))}
        </div>
        <span className="text-[14px] text-grey-9 dark:text-grey-5">
          <time>{formatMonthYear(project.timeRange[0])}</time>-{" "}
          <time>{formatMonthYear(project.timeRange[1])}</time>
        </span>
      </header>
      <div className={"flex gap-2 my-4"}>
        <button
          className={
            "bg-grey-ea dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-4 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-6 transition-colors"
          }
        >
          <div
            className={`
              p-2 text-sm text-grey-1 dark:text-grey-d 
              group-hover/icon:text-black dark:group-hover/icon:text-white 
              border-r border-grey-b dark:border-grey-4 
              group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-6 leading-[16px]  transition-all
            `}
          >
            Desktop
          </div>
          <div className={"p-2"}>
            <DesktopIcon />
          </div>
        </button>
        <button
          className={
            "bg-grey-ea dark:bg-grey-15 ring-1 ring-grey-b dark:ring-grey-4 rounded-[16px] flex group/icon items-center px-2 hover:bg-grey-d hover:ring-grey-9 dark:hover:bg-grey-2 dark:hover:ring-grey-6 transition-colors"
          }
        >
          <div
            className={`
              p-2 text-sm text-grey-1 dark:text-grey-d 
              group-hover/icon:text-black dark:group-hover/icon:text-white 
              border-r border-grey-b dark:border-grey-4 
              group-hover/icon:border-grey-9 dark:group-hover/icon:border-grey-6 leading-[16px]  transition-all
            `}
          >
            Mobile
          </div>
          <div className={"p-2"}>
            <MobileIcon />
          </div>
        </button>
      </div>
      <a.p className="mb-6">{project.description}</a.p>
      <div className="flex flex-wrap gap-4 action-buttons">
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
