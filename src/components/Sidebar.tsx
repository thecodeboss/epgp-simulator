import type { FC } from 'react';

export const Sidebar: FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRight: '1px solid rgba(255, 255, 255, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
        width: '400px',
      }}
    >
      <div>
        <h2>Config</h2>
      </div>
      <div>Made by Code &lt;3</div>
    </div>
  );
};
