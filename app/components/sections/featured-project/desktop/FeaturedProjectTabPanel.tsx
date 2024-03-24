import Link from "@/app/components/clickable/Link";
import { FeaturedProjectTabPanelProps } from "../props";
import { a } from "@react-spring/web";
import NorthWestIcon from "@/app/components/svg/abstract/NorthWestIcon";
import { formatDateTimeAttribute, formatMonthYear } from "@/app/components/utils/moment";
import Button from "@/app/components/clickable/Button";
import LiveIcon from "@/app/components/svg/icons/LiveIcon";
import GithubIcon from "@/app/components/svg/icons/GithubIcon";

export default function FeaturedProjectTabPanel({
  project,
  projectIndex,
  contentRevealTrail,
}: FeaturedProjectTabPanelProps) {
  return (
    <article
      className="featured-project-info col-span-4 semi-lg:col-span-3 p-6 flex flex-col bg-grey-ea dark:bg-grey-12 ring-1 ring-grey-d dark:ring-grey-2 min-h-[410px] rounded-es-[10px] semi-lg:rounded-es-none"
      id={`featured-project-${projectIndex + 1}`}
      role="tabpanel">
      <Link href={project.link.live} variant="plain">
        <a.h3
          className="font-visby font-extrabold text-[20px] leading-[1] text-grey-1 dark:text-grey-b inline-flex gap-[2px] group/header"
          style={contentRevealTrail[0]}
        >
          <span>{project.name}</span>
          <span
            className="group-hover/header:translate-x-[2px] group-hover/header:-translate-y-[2px] transition-transform">
            <NorthWestIcon />
          </span>
        </a.h3>
      </Link>
      <a.span
        className="text-[14px] text-grey-9 dark:text-grey-5 mt-2"
        style={contentRevealTrail[1]}
      >
        <time dateTime={formatDateTimeAttribute(project.timeRange[0])}>
          {formatMonthYear(project.timeRange[0])}
        </time>
        {" "}
        -{" "}
        <time dateTime={formatDateTimeAttribute(project.timeRange[1])}>
          {formatMonthYear(project.timeRange[1])}
        </time>
      </a.span>
      <a.p className="my-4" style={contentRevealTrail[2]}>
        {project.description}
      </a.p>
      <div className="flex flex-wrap gap-4 mt-auto action-buttons">
        <Link href={project.link.live} variant="plain">
          <Button tabIndex={-1}>
            <span>Live Website</span>
            <LiveIcon />
          </Button>
        </Link>
        <Link href={project.link.github} variant="plain">
          <Button variant="black" tabIndex={-1}>
            <span>View on Github</span>
            <GithubIcon />
          </Button>
        </Link>
      </div>
    </article>
  );
}