import type { FC } from 'react';
import { Config } from '../utils/types';
import { Input } from './Input';

interface SidebarProps {
  config: Config;
  setConfig: (config: Config) => void;
}

export const Sidebar: FC<SidebarProps> = ({ config, setConfig }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRight: '1px solid rgba(255, 255, 255, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        width: '250px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Config</h2>
        <Input defaultValue="2023-01-01" name="startDate" label="Start Date" />
        <Input defaultValue="2023-04-01" name="endDate" label="End Date" />
        <Input defaultValue="1000" name="epPerRaid" label="EP Per Raid" />
        <Input defaultValue="10" name="minimumGP" label="Minimum GP" />
        <Input defaultValue="10" name="weeklyEPDecayPercent" label="Weekly EP Decay %" />
        <Input defaultValue="20" name="weeklyGPDecayPercent" label="Weekly GP Decay %" />
      </div>
      <div>Made by Code &lt;3</div>
    </div>
  );
};
