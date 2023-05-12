import { addDays, getDateAtHour, isRaidDay } from './dates';

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

const calculatePR = (ep: number, gp: number): number => {
  return ep / (gp !== 0 ? gp : 1);
};

const decay = (value: number, percent: number): number => {
  return Math.round(value * (1 - percent / 100));
};

export const simulate = (options: SimOptions): SimResult => {
  let currentEP = options.initialEP;
  let currentGP = options.initialGP;

  let currentDate = new Date(options.startDate);
  const data: Array<[Date, number]> = [];

  currentDate.setHours(0, 0, 0, 0);

  while (currentDate <= options.endDate) {
    if (isRaidDay(currentDate)) {
      // Award EP at 8:00pm every raid day
      currentEP += options.epPerRaid;
      data.push([getDateAtHour(currentDate, 20), calculatePR(currentEP, currentGP)]);

      // Apply decay at 9:00pm every Thursday
      if (currentDate.getDay() === 4) {
        currentEP = decay(currentEP, options.weeklyEPDecayPercent);
        currentGP = decay(currentGP, options.weeklyGPDecayPercent);
        data.push([getDateAtHour(currentDate, 21), calculatePR(currentEP, currentGP)]);
      }
    }

    currentDate = addDays(currentDate, 1);
  }

  return { data };
};
