import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Card, Layout } from 'antd';
import type { FC } from 'react';

export const Content: FC = () => {
  return (
    <Layout.Content style={{ padding: '0 24px 24px' }}>
      <Breadcrumb
        items={[{ title: <HomeOutlined /> }, { title: 'Simulator' }]}
        style={{ padding: '12px' }}
      />
      <Card title="Sim time!"></Card>
    </Layout.Content>
  );
};
