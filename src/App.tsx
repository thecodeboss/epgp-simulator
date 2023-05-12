import type { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';

import { simulate } from './utils/simulate';

const App: FC = () => (
  <div className="layout">
    <div className="sidebar">sidebar</div>
    <div className="main">
      <div className="header">header</div>
      <div className="content">content</div>
      <div className="footer">Made by Code &lt;3</div>
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

console.log(
  simulate({
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-04-31'),
    epPerRaid: 1000,
    initialEP: 1000,
    initialGP: 10,
    weeklyEPDecayPercent: 10,
    weeklyGPDecayPercent: 20,
  })
);

export default App;
