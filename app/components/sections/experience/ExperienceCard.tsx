import { ExperienceCardProps } from "@/app/components/sections/experience/props";
import moment from "moment/moment";
import { a } from "@react-spring/web";
import Image from "next/image";
import Link from "@/app/components/clickable/Link";
import NorthWestIcon from "@/app/components/svg/abstract/NorthWestIcon";

export default function ExperienceCard({
  expertise,
  contentReveal,
}: ExperienceCardProps) {
  const dates = expertise.timeRange.map((date) => moment(date).format("MMMM"));
  const [initialDate, endDate] = expertise.timeRange;
  const dateDescription = `${moment(initialDate).format("MMMM YYYY")} to ${moment(
    endDate
  ).format("MMMM YYYY")}`;

  return (
    <article className="ml-[24px] md:ml-[28px] font-normal flex-1 semi-lg:flex-none semi-lg:w-[384px] lg:w-[512px] flex flex-col">
      <a.header className="flex gap-4 mt-auto" style={contentReveal[0]}>
        <div className="logo rounded-[4px] overflow-hidden min-w-[48px] aspect-square h-fit ring-1 ring-grey-ea dark:ring-0">
          <Image
            src={expertise.logo}
            width={48}
            height={48}
            alt={`Logo of ${expertise.title}`}
          />
        </div>
        <div className="flex flex-col gap-1 heading">
          <h3 className="leading-[1] text-grey-1 dark:text-grey-d font-bold">
            {expertise.title}
          </h3>
          <p className="leading-[1.3] text-sm md:text-base">{expertise.subTitle}</p>
        </div>
      </a.header>
      <div className="flex flex-col gap-3 mb-auto content md:pl-16">
        <a.p className="mt-4" style={contentReveal[1]}>
          {expertise.details}
        </a.p>
        <a.button style={contentReveal[2]} className="w-fit" tabIndex={-1}>
          <Link href={expertise.certificate}>
            Certificate of completion <NorthWestIcon variant="link" />
          </Link>
        </a.button>
        <a.p
          className="text-sm text-grey-6 md:hidden"
          style={contentReveal[3]}
          aria-label={dateDescription}
          id="active-experience-date"
        >
          {dates[0]} - {dates[1]}
        </a.p>
      </div>
    </article>
  );
}
