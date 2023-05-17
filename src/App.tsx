import { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { PlayerSettings } from './components/PlayerSettings';
import { Players } from './components/Players';
import { Sidebar } from './components/Sidebar';
import { Simulation } from './components/Simulation';
import { usePlayers } from './utils/players';
import { Config, Player } from './utils/types';

const defaultConfig: Config = {
  startDate: '2023-01-03',
  endDate: '2023-04-31',
  epPerRaid: 1000,
  minimumGP: 200,
  weeklyEPDecayPercent: 20,
  weeklyGPDecayPercent: 25,
};

const defaultPlayers: Player[] = [
  {
    name: 'Code',
    id: uuid(),
    initialEP: 1200,
    initialGP: 6000,
  },
  {
    name: 'Lunch',
    id: uuid(),
    initialEP: 1400,
    initialGP: 200,
  },
  {
    name: 'Ppstorm',
    id: uuid(),
    initialEP: 1000,
    initialGP: 200,
  },
];

const App: FC = () => {
  const [config, setConfig] = useState<Config>(defaultConfig);
  const { players, addPlayer, deletePlayer, updatePlayer } = usePlayers(defaultPlayers);
  const [selectedPlayer, setSelectedPlayer] = useState<string>(players[0]?.id);

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <Sidebar config={config} setConfig={setConfig} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Simulation config={config} players={players} />
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            display: 'flex',
            flexGrow: 1,
          }}
        >
          <Players
            addPlayer={() => setSelectedPlayer(addPlayer())}
            players={players}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
          <PlayerSettings
            deletePlayer={(id) => {
              deletePlayer(id);
              if (id === players[0].id && players.length > 1) {
                setSelectedPlayer(players[1].id);
              } else {
                setSelectedPlayer(players[0].id);
              }
            }}
            player={players.find((player) => player.id === selectedPlayer)}
            updatePlayer={updatePlayer}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
