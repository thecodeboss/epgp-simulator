interface SimOptions {
  startDate: Date;
  endDate: Date;
  initialEP: number;
  initialGP: number;
  weeklyEPDecayPercent: number;
  weeklyGPDecayPercent: number;
  epPerRaid: number;
}

interface SimResult {
  data: Array<[Date, number]>;
}

const isRaidDay = (date: Date): boolean => {
  // Tuesday (2) and Thursday (4)
  return date.getDay() === 2 || date.getDay() === 4;
};

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getDateAtHour = (date: Date, hour: number): Date => {
  if (hour < 0 || hour > 23) {
    throw new Error('Invalid hour value, must be between 0 and 23.');
  }

  const result = new Date(date);
  result.setHours(hour, 0, 0, 0); // Set the time to the specified hour, and reset minutes, seconds and milliseconds to 0
  return result;
};

const calculatePR = (ep: number, gp: number): number => {
  return ep / (gp !== 0 ? gp : 1);
};

export const simulate = (options: SimOptions): SimResult => {
  let currentEP = options.initialEP;
  let currentGP = options.initialGP;

  let currentDate = new Date(options.startDate);
  const simulationData: Array<[Date, number]> = [];

  currentDate.setHours(0, 0, 0, 0);

  while (currentDate <= options.endDate) {
    if (isRaidDay(currentDate)) {
      // Award EP at 8:00pm every raid day
      currentEP += options.epPerRaid;
      simulationData.push([getDateAtHour(currentDate, 20), calculatePR(currentEP, currentGP)]);

      // Apply decay at 9:00pm every Thursday
      if (currentDate.getDay() === 4) {
        currentEP = Math.round(currentEP * (1 - options.weeklyEPDecayPercent / 100));
        currentGP = Math.round(currentGP * (1 - options.weeklyGPDecayPercent / 100));
        simulationData.push([getDateAtHour(currentDate, 21), calculatePR(currentEP, currentGP)]);
      }
    }

    currentDate = addDays(currentDate, 1);
  }

  return { data: simulationData };
};
