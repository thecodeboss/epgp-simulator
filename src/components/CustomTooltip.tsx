import { Card } from 'antd';
import type { FC } from 'react';
import type { TooltipProps } from 'recharts';

export const CustomTooltip: FC = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{new Date(payload[0].value!).toLocaleDateString('en-US')}</span>
          <span>{payload[0].payload.note}</span>
        </div>
      </Card>
    );
  }
  return null;
};
