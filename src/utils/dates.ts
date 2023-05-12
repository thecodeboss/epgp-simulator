export const isRaidDay = (date: Date): boolean => {
  // Tuesday (2) and Thursday (4)
  return date.getDay() === 2 || date.getDay() === 4;
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const getDateAtHour = (date: Date, hour: number): Date => {
  if (hour < 0 || hour > 23) {
    throw new Error('Invalid hour value, must be between 0 and 23.');
  }

  const result = new Date(date);
  result.setHours(hour, 0, 0, 0); // Set the time to the specified hour, and reset minutes, seconds and milliseconds to 0
  return result;
};
