import { ExperienceTimelineProps } from "@/app/components/sections/experience/props";
import experienceData, { experienceTimelineCalculator } from "@/app/data/experience";
import { a } from "@react-spring/web";
import moment from "moment/moment";

export default function ExperienceTimeline({
  expertise,
  yearTimeLineScroll,
  monthTimeLineHeight,
  monthTimeLineMarker,
}: ExperienceTimelineProps) {
  const { YEAR_TIMELINE_HEIGHT, MONTH_DIFFERENCE, MONTH_HEIGHT } =
    experienceTimelineCalculator(expertise);

  return (
    <div
      className="relative h-[550px] overflow-y-clip w-[28px] md:w-[96px]"
      aria-hidden
    >
      <a.div
        className="year-timeline-container absolute top-1/2 left-[28px]"
        style={yearTimeLineScroll}
      >
        <div className="relative year-timeline">
          <div
            className={`w-[1px] bg-grey-d dark:bg-grey-3`}
            style={{ height: YEAR_TIMELINE_HEIGHT }}
          />

          {Array(MONTH_DIFFERENCE + 1)
            .fill(null)
            .map((_, index) => {
              // 34 (length year-timeline)
              const date = moment(experienceData.startTime);
              const month = date.add(index, "month");
              const isNewYear = month.format("MMMM") === "January";

              function lineStyles() {
                const styles: string[] = [];
                styles.push(isNewYear ? "w-[12px]" : "w-[8px]");
                styles.push(
                  isNewYear ? "bg-grey-6 dark:bg-grey-5" : "bg-grey-d dark:bg-grey-3"
                );
                return styles.join(" ");
              }

              return (
                <div
                  className={`h-[1px] absolute -translate-x-1/2 ${lineStyles()}`}
                  style={{ top: index * MONTH_HEIGHT }}
                  key={index}
                >
                  {isNewYear && (
                    <div className="relative year-container">
                      <span className="text-sm text-grey-6 dark:text-grey-9 leading-[1] select-none absolute top-0 -translate-y-1/2 -rotate-[.25turn] -left-[calc(100%+14px+8px)] font-visby font-extrabold">
                        {date.year()}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </a.div>
      <div
        className="month-timeline-container h-full absolute top-0 left-[27px] md:left-[calc(34px+16px)]"
        aria-hidden
      >
        <div className="relative h-full month-timeline">
          <a.div
            className={`w-[2px] bg-blue-100 dark:bg-blue-d-200 md:bg-grey-ea dark:md:bg-grey-3 absolute left-[1px] top-1/2 -translate-y-1/2`}
            style={monthTimeLineHeight}
          >
            <div className="relative h-full text-[14px] text-grey-9">
              <a.span
                className="text-grey-6 dark:text-grey-9 absolute top-0 -translate-y-1/2 left-[calc(100%+16px)] hidden md:inline"
                style={monthTimeLineMarker}
              >
                {moment(expertise.timeRange[0]).format("MMM")}
              </a.span>
              <a.span
                className="text-grey-6 dark:text-grey-9 absolute bottom-0 translate-y-1/2 left-[calc(100%+16px)] hidden md:inline"
                style={monthTimeLineMarker}
              >
                {moment(expertise.timeRange[1]).format("MMM")}
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
