import type { FC } from 'react';

export const Sidebar: FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        borderRight: '1px solid rgba(255, 255, 255, 0.04)',
        padding: '1rem',
        width: '400px',
      }}
    >
      <h2>Config</h2>
    </div>
  );
};
