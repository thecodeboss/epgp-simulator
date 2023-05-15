import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Config } from '../utils/types';
import { Input } from './Input';

interface SidebarProps {
  config: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
}

export const Sidebar: FC<SidebarProps> = ({ config, setConfig }) => {
  const handleChange = useCallback(
    (key: string, value: number | string) => {
      setConfig((prevConfig: Config) => ({
        ...prevConfig,
        [key]: value,
      }));
    },
    [setConfig]
  );

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
        <Input
          label="Start Date"
          name="startDate"
          onChange={handleChange}
          type="string"
          value={config.startDate}
        />
        <Input
          label="End Date"
          name="endDate"
          onChange={handleChange}
          type="string"
          value={config.endDate}
        />
        <Input
          label="EP Per Raid"
          name="epPerRaid"
          onChange={handleChange}
          type="number"
          value={config.epPerRaid}
        />
        <Input
          label="Minimum GP"
          name="minimumGP"
          onChange={handleChange}
          type="number"
          value={config.minimumGP}
        />
        <Input
          label="Weekly EP Decay %"
          name="weeklyEPDecayPercent"
          onChange={handleChange}
          type="number"
          value={config.weeklyEPDecayPercent}
        />
        <Input
          label="Weekly GP Decay %"
          name="weeklyGPDecayPercent"
          onChange={handleChange}
          type="number"
          value={config.weeklyGPDecayPercent}
        />
      </div>
      <div>Made by Code &lt;3</div>
    </div>
  );
};
