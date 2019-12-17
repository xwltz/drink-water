import React from 'react';
import { Layout } from 'antd';

import SiderModule from './components/layout/Sider'
import HeaderModule from './components/layout/Header'
import FooterModule from './components/layout/Footer'

import Routers from './router/router'

import './App.css';

const { Content } = Layout;

interface IProps { }
interface IState { }

class App extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
          <SiderModule></SiderModule>
          <Layout>
            <HeaderModule></HeaderModule>
            <Content style={{ margin: '10px 15px' }}>
              <Routers></Routers>
            </Content>
            <FooterModule></FooterModule>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
