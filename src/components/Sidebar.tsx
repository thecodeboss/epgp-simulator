import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { Config } from '../utils/types';
import { Input } from './Input';

interface SidebarProps {
  config: Config;
  setConfig: Dispatch<SetStateAction<Config>>;
}

export const Sidebar: FC<SidebarProps> = ({ config, setConfig }) => {
  const handleNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfig((prevConfig: Config) => ({
        ...prevConfig,
        [event.target.name]: parseInt(event.target.value, 10),
      }));
    },
    [setConfig]
  );

  const handleStringChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfig((prevConfig: Config) => ({
        ...prevConfig,
        [event.target.name]: event.target.value,
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
          onChange={handleStringChange}
          value="2023-01-01"
        />
        <Input label="End Date" name="endDate" onChange={handleStringChange} value="2023-04-01" />
        <Input
          label="EP Per Raid"
          name="epPerRaid"
          onChange={handleNumberChange}
          value={config.epPerRaid}
        />
        <Input
          label="Minimum GP"
          name="minimumGP"
          onChange={handleNumberChange}
          value={config.minimumGP}
        />
        <Input
          label="Weekly EP Decay %"
          name="weeklyEPDecayPercent"
          onChange={handleNumberChange}
          value={config.weeklyEPDecayPercent}
        />
        <Input
          label="Weekly GP Decay %"
          name="weeklyGPDecayPercent"
          onChange={handleNumberChange}
          value={config.weeklyGPDecayPercent}
        />
      </div>
      <div>Made by Code &lt;3</div>
    </div>
  );
};
