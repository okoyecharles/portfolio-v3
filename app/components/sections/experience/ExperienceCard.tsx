import { ExperienceCardProps } from "@/app/components/sections/experience/props";
import moment from "moment/moment";
import { a } from "@react-spring/web";
import Image from "next/image";
import Link from "@/app/components/clickable/Link";
import NorthWestIcon from "@/app/components/svg/abstract/NorthWestIcon";
import PrevIcon from "../../svg/icons/PrevIcon";
import NextIcon from "../../svg/icons/NextIcon";

export default function ExperienceCard({
  experiences,
  currentIndex,
  setCurrentIndex,
  contentReveal,
}: ExperienceCardProps) {
  const experience = experiences[currentIndex];
  const dates = experience.timeRange.map((date) => moment(date).format("MMMM"));
  const [initialDate, endDate] = experience.timeRange;
  const dateDescription = `${moment(initialDate).format("MMMM YYYY")} to ${moment(
    endDate,
  ).format("MMMM YYYY")}`;

  return (
    <article className="ml-[24px] md:ml-[28px] font-normal flex-1 semi-lg:flex-none semi-lg:w-[384px] lg:w-[512px] flex flex-col relative">
      <a.header className="flex gap-4 mt-auto" style={contentReveal[0]}>
        <div className="logo rounded-[4px] overflow-hidden min-w-[48px] aspect-square h-fit ring-1 ring-grey-ea dark:ring-0">
          <Image
            src={experience.logo}
            width={48}
            height={48}
            alt={`Logo of ${experience.title}`}
          />
        </div>
        <div className="flex flex-col gap-1 heading">
          <h3 className="leading-[1] text-grey-1 dark:text-grey-d font-bold">
            {experience.title}
          </h3>
          <p className="leading-[1.3] text-grey-2 dark:text-grey-c text-sm md:text-base">
            {experience.subTitle}
          </p>
        </div>
      </a.header>
      <div className="flex flex-col gap-3 mb-auto content md:pl-16">
        <a.p
          className="mt-4"
          style={contentReveal[1]}
          dangerouslySetInnerHTML={{ __html: experience.details }}
        />{" "}
        <a.button style={contentReveal[2]} className="w-fit" tabIndex={-1}>
          <Link href={experience.link}>
            {experience.linkText
              ? experience.linkText
              : "Certificate of completion"}{" "}
            <NorthWestIcon variant="link" />
          </Link>
        </a.button>
        <a.p
          className="text-sm text-grey-6 md:visually-hidden"
          style={contentReveal[3]}
          aria-label={dateDescription}
          id="active-experience-date"
        >
          {dates[0]} - {dates[1]}
        </a.p>
      </div>
      <div className="absolute bottom-0 w-full flex gap-2 justify-end items-center">
        <button
          className="w-[48px] aspect-square grid justify-center items-center rounded-[50%] group/icon backdrop-blur-sm

            ring-1 ring-grey-d dark:ring-grey-3
            bg-grey-fb dark:bg-grey-1a
            
            hover:bg-[#f9f9f9] dark:hover:bg-grey-2

        disabled:pointer-events-none
        disabled:opacity-35
        transition"
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-hidden={currentIndex === 0}
          name={`previous card - ${experiences[currentIndex - 1]?.title}`}
          aria-label={`previous card - ${experiences[currentIndex - 1]?.title}`}
          aria-controls="experiences-deck"
        >
          <PrevIcon />
        </button>
        <button
          className="w-[48px] aspect-square grid justify-center items-center rounded-[50%] group/icon backdrop-blur-sm

            ring-1 ring-grey-d dark:ring-grey-3
            bg-grey-fb dark:bg-grey-1a
            
            hover:bg-[#f9f9f9] dark:hover:bg-grey-2

        disabled:pointer-events-none
        disabled:opacity-35
        transition"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex === experiences.length - 1}
          aria-hidden={currentIndex === experiences.length - 1}
          name={`next card - ${experiences[currentIndex + 1]?.title}`}
          aria-label={`next card - ${experiences[currentIndex + 1]?.title}`}
          aria-controls="experiences-deck"
        >
          <NextIcon />
        </button>
      </div>
    </article>
  );
}
