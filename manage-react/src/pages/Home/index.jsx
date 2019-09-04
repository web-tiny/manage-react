/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:42:41 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-04 14:33:34
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/home/index.scss';
import logo from '../../assets/images/logo.svg';
import { routerConfig } from '../../router/config';
import { map } from 'lodash';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu

class Home extends Component {
  state = {
    collapsed: false,
    component: '',
    path: ''
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };

  doRouter = (component, path) => {
    console.log(this.props.params);
    this.setState({
      component: component,
      path: path
    })
  }
  
  renderMenu = data => map(data, item => {
    console.log(item.component)
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          title={
            <span>
              <Icon type={ item.icon ? item.icon: '' }></Icon>
              <span>{ item.name }</span>
            </span>
          }
          key={item.id}
        >
          { this.renderMenu(item.children) }
        </SubMenu>
      )
    }
    return (
      <Menu.Item
        key={item.id}
        >
        <Link to={ item.path }>
          <Icon type={ item.icon ? item.icon: '' }></Icon>
          <span>{ item.name }</span>
        </Link>
      </Menu.Item>
    )
  })

  render() {
    const { name } = this.props.userInfo;
    return (
      <Layout>
        <Sider>
          <div className="logo"><img src={logo} alt="公司logo"/>React中后台应用</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { this.renderMenu(routerConfig) }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <i className="userInfo">你好{ name }</i>
          </Header>
          <Content className="contentStyle">
            component
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(state =>({userInfo: state.userInfo}))(Home);