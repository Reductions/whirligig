export const startOfWeek = (date: Date) => {
  let startOfWeekDate = new Date(date);
  let dayOfWeek = startOfWeekDate.getDay();
  let diff = startOfWeekDate.getDate() + 1 - dayOfWeek;

  startOfWeekDate.setDate(diff);
  startOfWeekDate.setHours(0, 0, 0, 0);

  return startOfWeekDate;
};
