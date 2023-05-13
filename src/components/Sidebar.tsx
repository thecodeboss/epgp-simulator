import { HomeFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import type { FC } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    icon: <HomeFilled />,
  },
];

export const Sidebar: FC = () => {
  return (
    <Layout.Sider style={{ backgroundColor: 'transparent' }}>
      <Menu items={items} style={{ backgroundColor: 'transparent', borderRight: 0 }} />
    </Layout.Sider>
  );
};
