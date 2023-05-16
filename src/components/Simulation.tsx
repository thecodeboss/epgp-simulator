import type { FC } from 'react';
import { simulate } from '../utils/simulate';
import { Chart } from './Chart';

const pp = simulate({
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-04-31'),
  epPerRaid: 1000,
  initialEP: 1000,
  initialGP: 10,
  minimumGP: 10,
  weeklyEPDecayPercent: 10,
  weeklyGPDecayPercent: 20,
});

const code = simulate({
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-04-31'),
  epPerRaid: 1000,
  initialEP: 1200,
  initialGP: 60,
  minimumGP: 10,
  weeklyEPDecayPercent: 10,
  weeklyGPDecayPercent: 20,
});

const lunch = simulate({
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-04-31'),
  epPerRaid: 1000,
  initialEP: 1400,
  initialGP: 10,
  minimumGP: 10,
  weeklyEPDecayPercent: 10,
  weeklyGPDecayPercent: 20,
});

export const Simulation: FC = () => {
  return (
    <div
      style={{
        height: '400px',
        padding: '1rem',
      }}
    >
      <h2>Simulation</h2>
      <Chart
        simulations={[
          {
            color: 'blue',
            name: 'Ppstorm',
            data: pp,
          },
          {
            color: 'green',
            name: 'Code',
            data: code,
          },
          {
            color: 'purple',
            name: 'Lunch',
            data: lunch,
          },
        ]}
      />
    </div>
  );
};
