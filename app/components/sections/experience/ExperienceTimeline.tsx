import { ExperienceTimelineProps } from "@/app/components/sections/experience/props";
import { a } from "@react-spring/web";
import moment from "moment/moment";
import ExperienceTimelineMarkers from "../../svg/experience/ExperienceTimelineMarkers";
import { experienceTimelineCalculator } from "@/app/util/components/experience/timelineCalculator";
import { useMemo } from "react";

export default function ExperienceTimeline({
  currentIndex,
  experiences,
  yearTimeLineScroll,
  monthTimeLineHeight,
  monthTimeLineMarker,
}: ExperienceTimelineProps) {
  const { startTime, totalYears, yearHeight } = useMemo(
    () => experienceTimelineCalculator(experiences),
    [experiences],
  );

  const firstYear = moment(startTime).year();

  return (
    <div className="relative h-[550px] w-[34px] md:w-[96px] flex overflow-hidden">
      <a.div
        className="absolute w-[34px] top-1/2 h-full"
        style={yearTimeLineScroll}
      >
        {Array(totalYears)
          .fill(null)
          .map((_, currentYear) => (
            <span
              key={currentYear}
              className={`
                absolute -left-[8px] top-0 -translate-y-1/2 -rotate-[.25turn] text-sm text-grey-6 dark:text-grey-9 leading-[1] select-none font-visby font-extrabold
              `}
              style={{ top: currentYear * yearHeight }}
            >
              {firstYear + currentYear}
            </span>
          ))}

        <div className="year-marker-container w-fit absolute top-0 right-0">
          <ExperienceTimelineMarkers yearCount={totalYears} />
        </div>
      </a.div>
      <div className="h-full hidden md:block flex-1" aria-hidden>
        <div className="relative h-full month-timeline-container ml-[34px]">
          <a.div
            className={`w-[2px] bg-blue-100 dark:bg-blue-d-200 md:bg-grey-ea dark:md:bg-grey-3 absolute left-[18px] top-1/2 -translate-y-1/2`}
            style={monthTimeLineHeight}
          >
            <div className="relative h-full text-[14px] text-grey-9">
              <a.span
                className="text-grey-6 dark:text-grey-9 absolute top-0 -translate-y-1/2 left-[calc(100%+16px)] hidden md:inline"
                style={monthTimeLineMarker}
              >
                {moment(experiences[currentIndex].timeRange[0]).format("MMM")}
              </a.span>
              <a.span
                className="text-grey-6 dark:text-grey-9 absolute bottom-0 translate-y-1/2 left-[calc(100%+16px)] hidden md:inline"
                style={monthTimeLineMarker}
              >
                {moment(experiences[currentIndex].timeRange[1]).format("MMM")}
              </a.span>
              <div className="absolute -translate-x-1/2 top-0 -translate-y-1/2 w-[10px] h-[1px] md:h-[10px] md:rounded-[5px] ring-0 md:ring-1 ring-blue-100 dark:ring-blue-d-200 bg-blue-100 md:bg-grey-ea dark:bg-blue-d-200 md:dark:bg-grey-2" />
              <div className="absolute -translate-x-1/2 bottom-0 translate-y-1/2 w-[10px] h-[1px] md:h-[10px] md:rounded-[5px] ring-0 md:ring-1 ring-blue-100 dark:ring-blue-d-200 bg-blue-100 md:bg-grey-ea dark:bg-blue-d-200 md:dark:bg-grey-2" />
            </div>
          </a.div>
        </div>
      </div>
      <div className="fade-up absolute -left-[8px] w-[calc(100%+16px)] h-5 top-0 bg-gradient-to-b from from-white dark:from-black" />
      <div className="fade-down absolute -left-[8px] w-[calc(100%+16px)] h-5 bottom-0 bg-gradient-to-t from-white dark:from-black" />
    </div>
  );
}
