import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Flex } from 'antd';
import './comp/main_comp.scss';
import Custom_Header from './comp/header/Custom_Header';
import Pic from './assets/profile.jpeg';
import Add_task from './comp/add_tasks/Add_task';

const { Header, Sider, Content } = Layout;

const tabComponents = [
  () => <Add_task />,
  () => <div>Current Task</div>,
  () => <div>Completed Task</div>,
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    const index = parseInt(activeTab, 10) - 1;
    return tabComponents[index] ? tabComponents[index]() : null;
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical profile">
          <div className="pic"></div>
          {collapsed ? (
            ''
          ) : (
            <div className="pro-con" style={{ width: '70px' }}>
              <h4> BANDI HEMANTH</h4>
            </div>
          )}
          
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[activeTab]}
          onClick={({ key }) => setActiveTab(key)}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, height: '100px' }}>
          <Flex align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 54,
                height: 54,
              }}
            />
            <Custom_Header />
          </Flex>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
