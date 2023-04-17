import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faGamepad,faUser,faList} from '@fortawesome/free-solid-svg-icons';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";





  const { Header, Sider, Content } = Layout;
  const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  const navigate = useNavigate();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo'>
          <div className="sm-logo" >M.S</div>
          <div className="lg-logo" >Masbro.Store</div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={({ key }) => {
              if (key === "signout") {
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: 'dashboard',
                icon: <FontAwesomeIcon icon={faHouse} />,
                label: 'Dashboard',
              },
              {
                key: 'order',
                icon: <FontAwesomeIcon icon={faList} />,
                label: 'Orders',
                value: 'order',
              },
              
              {
                key: 'games',
                icon: <FontAwesomeIcon icon={faGamepad} />,
                label: 'Games',
                value : 'order',
              },
              {
                key: 'user',
                icon: <FontAwesomeIcon icon={faUser} />,
                label: 'Users',
              },
            ]}
          />
          
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            
           
            
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default MainLayout;
  