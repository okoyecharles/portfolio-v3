import moment from "moment";

export function getMonthDifference(date1: Date, date2: Date) {
  const moment1 = moment(date1);
  const moment2 = moment(date2);

  const diffDuration = moment.duration(moment2.diff(moment1));
  const diff = diffDuration.as('months');
  return Number(diff.toFixed(0));
}

export function formatMonthYear(date: Date) {
  const momentDate = moment(date);
  return momentDate.format("MMM YYYY")
}

// format date (...) for <time datetime={...}>Certain time</time>
export function formatDateTimeAttribute(date: Date) {
  const momentDate = moment(date);
  return momentDate.format("YYYY-MM-DD hh:mm:ss")
}