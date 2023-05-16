import { FC } from 'react';
import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../utils/simulate';
import { Config } from '../utils/types';
import { CustomTooltip } from './CustomTooltip';

interface Simulation {
  color: string;
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
  return (
    <ScatterChart width={1000} height={500}>
      <XAxis
        type="number"
        dataKey="x"
        name="date"
        domain={['dataMin', 'dataMax']}
        tickFormatter={(val) => new Date(val).toLocaleDateString('en-US')}
        tickCount={13}
      />
      <YAxis type="number" dataKey="pr" />
      <CartesianGrid strokeDasharray="1 10" />
      <Tooltip content={<CustomTooltip />} />
      {simulations.map((simulation) => (
        <Scatter
          key={simulation.name}
          name={simulation.name}
          data={formatData(simulation.data)}
          line
          fill={simulation.color}
        />
      ))}
    </ScatterChart>
  );
};
