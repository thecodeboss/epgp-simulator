import type { FC } from 'react';
import type { Player } from '../utils/types';
import { Input } from './Input';

interface PlayerConfigProps {
  player: Player;
  updatePlayer: (id: string, player: Player) => void;
}

export const PlayerConfig: FC<PlayerConfigProps> = ({ player, updatePlayer }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        width: '250px',
      }}
    >
      <h2>Player Config</h2>
      <Input label="Name" name="name" onChange={() => {}} type="string" value={player.name} />
      <Input label="Color" name="color" onChange={() => {}} type="string" value={player.color} />
      <Input
        label="Initial EP"
        name="initialEP"
        onChange={() => {}}
        type="number"
        value={player.initialEP}
      />
      <Input
        label="Initial GP"
        name="initialGP"
        onChange={() => {}}
        type="number"
        value={player.initialGP}
      />
      TODO: win items
    </div>
  );
};
