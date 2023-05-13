import { ConfigProvider, Layout, theme as baseTheme } from 'antd';
import type { FC } from 'react';
import 'antd/dist/reset.css';

import { simulate } from './utils/simulate';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

const theme = {
  algorithm: baseTheme.darkAlgorithm,
  token: {
    colorPrimary: '#F4801A',
  },
};

const App: FC = () => (
  <ConfigProvider theme={theme}>
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Content />
      </Layout>
      <Footer />
    </Layout>
  </ConfigProvider>
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
