import moment from "moment";

export function getMonthDifference(date1: moment.Moment, date2: moment.Moment) {
  const diffDuration = moment.duration(date2.diff(date1));
  const diff = diffDuration.asMonths();
  return Math.round(diff);
}

export function formatMonthYear(date: moment.Moment) {
  return date.format("MMM YYYY")
}

// format date (...) for <time datetime={...}>Certain time</time>
export function formatDateTimeAttribute(date: moment.Moment) {
  return date.format("YYYY-MM-DD hh:mm:ss")
}
