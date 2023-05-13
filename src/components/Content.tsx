import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout } from 'antd';
import type { FC } from 'react';
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
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

const formatData = (data: ReturnType<typeof simulate>['data']) => {
  return data.map((d) => ({ ...d, x: d.date.getTime() }));
};

// TODO: type
const CustomTooltip: FC = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{new Date(payload[0].value).toLocaleDateString('en-US')}</span>
          <span>{payload[0].payload.note}</span>
        </div>
      </Card>
    );
  }
  return null;
};

export const Content: FC = () => {
  return (
    <Layout.Content style={{ padding: '0 24px 24px' }}>
      <Breadcrumb
        items={[{ title: <HomeOutlined /> }, { title: 'Simulator' }]}
        style={{ padding: '12px' }}
      />
      <Card title="Sim time!">
        <ScatterChart width={800} height={400} data={formatData(data)}>
          <XAxis
            type="number"
            dataKey="x"
            name="date"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(val) => new Date(val).toLocaleDateString('en-US')}
          />
          <YAxis type="number" dataKey="pr" />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A" line fill="#8884d8" />
        </ScatterChart>
      </Card>
    </Layout.Content>
  );
};
