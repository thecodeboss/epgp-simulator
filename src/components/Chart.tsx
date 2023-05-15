import { FC } from 'react';
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../utils/simulate';
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
      {simulations.map((simulation) => (
        <Scatter
          name={simulation.name}
          data={formatData(simulation.data)}
          line
          fill={simulation.color}
        />
      ))}
    </ScatterChart>
  );
};
