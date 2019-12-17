import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

export default (state: any) => {
  const location = useLocation();

  state = {
    selectedKeys: ["index"],
  }

  state.selectedKeys = location.pathname === "/" ? "index" : location.pathname

  return (
    <Sider className="left-menu xwltz">
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['index']} mode="inline" selectedKeys={state.selectedKeys}>
        <Menu.Item key="index">
          <NavLink to="/">
            <Icon type="pie-chart" />
            <span>首页</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="record">
          <NavLink exact to="/record">
            <Icon type="desktop" />
            <span>新增记录</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="statistics">
          <NavLink exact to="/statistics">
            <Icon type="line-chart" />
            <span>统计分析</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
