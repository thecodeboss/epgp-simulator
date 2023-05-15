import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout } from 'antd';
import type { FC } from 'react';
import { DataPoint, simulate } from '../utils/simulate';
import { Chart } from './Chart';

const pp = simulate({
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-04-31'),
  epPerRaid: 1000,
  initialEP: 1000,
  initialGP: 10,
  minimumGP: 10,
  weeklyEPDecayPercent: 10,
  weeklyGPDecayPercent: 20,
});

const code = simulate({
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-04-31'),
  epPerRaid: 1000,
  initialEP: 1200,
  initialGP: 60,
  minimumGP: 10,
  weeklyEPDecayPercent: 10,
  weeklyGPDecayPercent: 20,
});

export const Content: FC = () => {
  return (
    <Layout.Content style={{ padding: '0 24px 24px' }}>
      <Breadcrumb
        items={[{ title: <HomeOutlined /> }, { title: 'Simulator' }]}
        style={{ padding: '12px' }}
      />
      <Card title="Sim time!">
        <Chart
          simulations={[
            {
              name: 'Ppstorm',
              data: pp,
            },
            {
              name: 'Code',
              data: code,
            },
          ]}
        />
      </Card>
    </Layout.Content>
  );
};
