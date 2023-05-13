import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout } from 'antd';
import type { FC } from 'react';
import { Scatter, ScatterChart, XAxis, YAxis } from 'recharts';
import { simulate } from '../utils/simulate';

const { data } = simulate({
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-04-31'),
  epPerRaid: 1000,
  initialEP: 1000,
  initialGP: 10,
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
        <ScatterChart
          width={800}
          height={400}
          data={data.map((d) => ({ ...d, x: d.date.getTime() }))}
        >
          <XAxis
            type="number"
            dataKey="x"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(val) => new Date(val).toLocaleDateString('en-US')}
          />
          <YAxis type="number" dataKey="pr" />
          <Scatter name="A" line fill="#8884d8" />
        </ScatterChart>
      </Card>
    </Layout.Content>
  );
};
