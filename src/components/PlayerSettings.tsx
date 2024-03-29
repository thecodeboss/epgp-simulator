import { FC, useCallback } from 'react';
import type { Player } from '../utils/types';
import { Input } from './Input';

interface PlayerSettingsProps {
  deletePlayer: (id: string) => void;
  player?: Player;
  updatePlayer: (id: string, player: Player) => void;
}

export const PlayerSettings: FC<PlayerSettingsProps> = ({ deletePlayer, player, updatePlayer }) => {
  const handleChange = useCallback(
    (key: string, value: number | string) => {
      if (!player) return;
      updatePlayer(player.id, { ...player, [key]: value });
    },
    [player, updatePlayer]
  );

  if (!player) return null;

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
      <button onClick={() => deletePlayer(player.id)}>Delete Player</button>
    </div>
  );
};
