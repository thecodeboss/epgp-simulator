import { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { PlayerConfig } from './components/PlayerConfig';
import { Players } from './components/Players';
import { Sidebar } from './components/Sidebar';
import { Simulation } from './components/Simulation';
import { usePlayers } from './utils/players';
import { Config } from './utils/types';

const defaultConfig: Config = {
  startDate: '2023-01-01',
  endDate: '2023-04-31',
  epPerRaid: 1000,
  minimumGP: 10,
  weeklyEPDecayPercent: 10,
  weeklyGPDecayPercent: 20,
};

const App: FC = () => {
  const [config, setConfig] = useState<Config>(defaultConfig);
  const { players, updatePlayer } = usePlayers([
    {
      name: 'Code',
      color: 'blue',
      id: uuid(),
      initialEP: 1200,
      initialGP: 60,
    },
    {
      name: 'Lunch',
      color: 'purple',
      id: uuid(),
      initialEP: 1400,
      initialGP: 10,
    },
    {
      name: 'Ppstorm',
      color: 'green',
      id: uuid(),
      initialEP: 1000,
      initialGP: 10,
    },
  ]);
  const [selectedPlayer, setSelectedPlayer] = useState<string>(players[0].id);

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
        <Simulation />
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            display: 'flex',
            flexGrow: 1,
          }}
        >
          <Players
            players={players}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
          <PlayerConfig
            player={players.find((player) => player.id === selectedPlayer)!}
            updatePlayer={updatePlayer}
          />
        </div>
      </div>
    </div>
  );
};

// Add player button (with name, + form for simulation params)
// - Simulate them winning an item on a given day
// Add a chart showing each player's EP/GP over time
// Edit player button
// Hide player button
// Delete player button
// TODO: how to handle attendance?
// Save config profile button
// - are you sure you want to overwrite?
// Load config profile button

export default App;
