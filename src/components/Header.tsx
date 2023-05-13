import { Layout } from 'antd';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <Layout.Header
      style={{
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        height: '48px',
        lineHeight: '48px',
      }}
    >
      <h1 style={{ fontSize: '16px', fontWeight: 400 }}>EPGP Simulator</h1>
    </Layout.Header>
  );
};
