import { FC } from 'react';
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../utils/simulate';
import { CustomTooltip } from './CustomTooltip';

interface Simulation {
  name: string;
  data: DataPoint[];
}

interface ChartProps {
  simulations: Simulation[];
}

const formatData = (data: any): any => {
  return data.map((d: any) => ({ ...d, x: d.date.getTime() }));
};

export const Chart: FC<ChartProps> = ({ simulations }) => {
  console.log(simulations);
  return (
    <ScatterChart width={800} height={400}>
      <XAxis
        type="number"
        dataKey="x"
        name="date"
        domain={['dataMin', 'dataMax']}
        tickFormatter={(val) => new Date(val).toLocaleDateString('en-US')}
      />
      <YAxis type="number" dataKey="pr" />
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="Code" data={formatData(simulations[1].data)} line fill="#8884d8" />
      <Scatter name="Ppstorm" data={formatData(simulations[0].data)} line fill="#cdeffa" />
    </ScatterChart>
  );
};
