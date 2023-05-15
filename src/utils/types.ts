export interface Config {
  endDate: string;
  epPerRaid: number;
  minimumGP: number;
  startDate: string;
  weeklyEPDecayPercent: number;
  weeklyGPDecayPercent: number;
}

export interface Player {
  color: string;
  initialEP: number;
  initialGP: number;
  name: string;
}
