import { Line } from '@nivo/line';
import { FC } from 'react';
import { DataPoint } from '../utils/simulate';

interface Simulation {
  color: string;
  name: string;
  data: DataPoint[];
}

interface ChartProps {
  simulations: Simulation[];
}

const commonProperties = {
  width: 1000,
  height: 500,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  enableSlices: 'x',
};

export const Chart: FC<ChartProps> = ({ simulations }) => {
  return (
    <Line
      {...commonProperties}
      colors={{ scheme: 'category10' }}
      data={simulations.map((simulation) => ({
        id: simulation.name,
        data: simulation.data.map((d) => ({ x: d.date, y: d.pr })),
      }))}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        useUTC: false,
        precision: 'hour',
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{ type: 'linear' }}
      axisBottom={{
        format: '%b %d',
        tickValues: 'every 1 week',
        legendOffset: -12,
      }}
      curve="linear"
      pointSize={4}
      pointBorderWidth={1}
      pointColor={{ theme: 'background' }}
      pointBorderColor={{ from: 'serieColor' }}
      useMesh={true}
      enableSlices="x"
      theme={{
        axis: {
          domain: {
            line: {
              strokeWidth: 0,
              stroke: '#526271',
            },
          },
          ticks: {
            line: {
              strokeWidth: 1,
              stroke: '#526271',
            },
            text: {
              fill: '#8d9cab',
              fontSize: 11,
            },
          },
          legend: {
            text: {
              fill: '#ccd7e2',
              fontSize: 13,
              fontWeight: 500,
            },
          },
        },
        grid: {
          line: {
            stroke: '#444',
          },
        },
        tooltip: {
          container: {
            color: 'black',
          },
        },
      }}
    />
  );
};
