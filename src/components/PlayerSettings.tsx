import { FC, useCallback } from 'react';
import type { Player } from '../utils/types';
import { Input } from './Input';

interface PlayerSettingsProps {
  player: Player;
  updatePlayer: (id: string, player: Player) => void;
}

export const PlayerSettings: FC<PlayerSettingsProps> = ({ player, updatePlayer }) => {
  const handleChange = useCallback(
    (key: string, value: number | string) => {
      updatePlayer(player.id, { ...player, [key]: value });
    },
    [player, updatePlayer]
  );

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
      <h2>Player Settings</h2>
      <Input label="Name" name="name" onChange={handleChange} type="string" value={player.name} />
      <Input
        label="Initial EP"
        name="initialEP"
        onChange={handleChange}
        type="number"
        value={player.initialEP}
      />
      <Input
        label="Initial GP"
        name="initialGP"
        onChange={handleChange}
        type="number"
        value={player.initialGP}
      />
    </div>
  );
};
