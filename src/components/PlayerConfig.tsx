import { FC, useCallback } from 'react';
import { Player } from '../utils/types';
import { Input } from './Input';

interface PlayerConfigProps {
  player: Player;
  setPlayer: (player: Player) => void;
}

export const PlayerConfig: FC<PlayerConfigProps> = ({ player, setPlayer }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
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
