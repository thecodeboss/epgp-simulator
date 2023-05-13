import { Breadcrumb, Card, ConfigProvider, Layout, Menu, theme } from 'antd';
import { HomeFilled, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';

import { simulate } from './utils/simulate';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: <HomeFilled />,
  },
];

const App: FC = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#F4801A',
      },
    }}
  >
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: 'transparent',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          height: '48px',
          lineHeight: '48px',
        }}
      >
        <h1 style={{ fontSize: '16px', fontWeight: 400 }}>EPGP Simulator</h1>
      </Layout.Header>
      <Layout>
        <Layout.Sider style={{ backgroundColor: 'transparent' }}>
          <Menu items={items} style={{ backgroundColor: 'transparent', borderRight: 0 }} />
        </Layout.Sider>
        <Layout.Content style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: <HomeOutlined /> }, { title: 'Simulator' }]}
            style={{ padding: '12px' }}
          />
          <Card title="Sim time!"></Card>
        </Layout.Content>
      </Layout>
      <Layout.Footer
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}
      >
        Made by Code &lt;3
      </Layout.Footer>
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
