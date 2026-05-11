import { config } from "@/app/data/config";
import { Experience } from "@/app/data/experience";
import { getMonthDifference } from "@/app/util/dates/date";
import moment from "moment";

export function experienceTimelineCalculator(experiences: Array<Experience>) {
	const startTime = experiences.reduce((acc, curr) => {
    return curr.timeRange[0] < acc ? curr.timeRange[0] : acc;
	}, moment()).clone();
	const endTime = experiences.reduce((acc, curr) => {
    return curr.timeRange[1] > acc ? curr.timeRange[1] : acc;
	}, startTime).clone();
	startTime.set("month", 0);
	startTime.set("date", 1);
  endTime.set("month", 11);
  endTime.set("date", 31);

  const monthHeight = config.EXPERIENCE_MONTH_HEIGHT;
  const yearHeight = monthHeight * 12;
  const totalMonths = getMonthDifference(
    startTime,
    endTime
  );
  const totalHeight = monthHeight * totalMonths;
  const totalYears = Math.ceil(totalMonths / 12);

	const experiencesInfo = experiences.map((exp) => {
		const months = getMonthDifference(exp.timeRange[0], exp.timeRange[1]);
		const timelineHeight = monthHeight * months;
		const timelineY = monthHeight * getMonthDifference(startTime, exp.timeRange[0]);
		const timelineCenter = timelineY + timelineHeight / 2;
		return {
      months,
      timelineHeight,
      timelineY,
      timelineCenter,
		}
	});

  return {
		startTime,
		endTime,
    totalYears,
    totalMonths,
    monthHeight,
    yearHeight,
		totalHeight,
    experiencesInfo,
  };
}
