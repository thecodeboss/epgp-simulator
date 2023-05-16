import { FC, useState } from 'react';
import { Player } from '../utils/types';

interface PlayersProps {
  players: Player[];
  selectedPlayer: string;
  setSelectedPlayer: (player: string) => void;
}

export const Players: FC<PlayersProps> = ({ players, selectedPlayer, setSelectedPlayer }) => {
  return (
    <div
      style={{
        borderRight: '1px solid rgba(255, 255, 255, 0.04)',
        width: '400px',
      }}
    >
      <h2 style={{ padding: '1rem' }}>Players</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {players.map((player) => (
          <div
            key={player.name}
            style={{
              backgroundColor:
                player.name === selectedPlayer ? 'rgba(255, 255, 255, 0.08)' : undefined,
              padding: '0.5rem 1rem',
            }}
            onClick={() => setSelectedPlayer(player.name)}
          >
            {player.name}
          </div>
        ))}
      </div>
    </div>
  );
};
