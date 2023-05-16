import type { FC } from 'react';
import { simulate } from '../utils/simulate';
import { Config, Player } from '../utils/types';
import { Chart } from './Chart';

interface SimulationProps {
  config: Config;
  players: Player[];
}

export const Simulation: FC<SimulationProps> = ({ config, players }) => {
  const simulations = players.map((player) => ({
    color: player.color,
    name: player.name,
    data: simulate({
      ...config,
      startDate: new Date(config.startDate),
      endDate: new Date(config.endDate),
      initialEP: player.initialEP,
      initialGP: player.initialGP,
    }),
  }));
  return (
    <div style={{ padding: '1rem', height: '532px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <h2>Simulation</h2>
      {/* <Chart simulations={simulations} /> */}
      <Chart simulations={simulations} />
    </div>
  );
};
