import type { FC } from 'react';
import { PlayerConfig } from './components/PlayerConfig';
import { Players } from './components/Players';
import { Sidebar } from './components/Sidebar';
import { Simulation } from './components/Simulation';

const App: FC = () => (
  <div style={{ display: 'flex', flexGrow: 1 }}>
    <Sidebar />
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
        <Players />
        <PlayerConfig />
      </div>
    </div>
  </div>
);

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
