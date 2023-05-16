import { v4 as uuid } from 'uuid';
import { useCallback, useState } from 'react';
import { Player } from './types';

export const usePlayers = (defaultPlayers: Player[]) => {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);

  const addPlayer = useCallback(() => {
    setPlayers((players) => [
      ...players,
      {
        color: '#000000',
        id: uuid(),
        name: 'New Player',
        initialEP: 0,
        initialGP: 10, // TODO: use minimum GP from config
      },
    ]);
  }, [setPlayers]);

  const deletePlayer = useCallback(
    (id: string) => {
      setPlayers((players) => players.filter((p) => p.id !== id));
    },
    [setPlayers]
  );

  const updatePlayer = useCallback(
    (id: string, player: Player) => {
      setPlayers((players) => {
        const index = players.findIndex((p) => p.id === id);
        const newPlayers = [...players];
        newPlayers[index] = player;
        return newPlayers;
      });
    },
    [setPlayers]
  );

  return {
    players,
    addPlayer,
    deletePlayer,
    updatePlayer,
  };
};
