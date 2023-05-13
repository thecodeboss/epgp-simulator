import { Layout } from 'antd';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Layout.Footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
      Made by Code &lt;3
    </Layout.Footer>
  );
};
