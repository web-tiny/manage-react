/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:42:41 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-03 11:04:22
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/home/index.scss';
import logo from '../../assets/images/logo.svg'

const { Header, Sider, Content } = Layout;
class Home extends Component {
  state = {
    collapsed: false,
    sideBar: [
      { id: '1', type: 'hdd', content: '基础信息', path: './baseInfo' },
      { id: '2', type: 'file', content: '个人简历', path: './vita'},
      { id: '3', type: 'edit', content: '个人日记', path: './diary'},
    ],
    path: ''
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };

  doRouter = (path) => {
    console.log(this.props.params);
    this.setState({
      path: path
    })
  }

  render() {
    const { name } = this.props.userInfo
    const sideBar = this.state.sideBar.map(value =>
      <Menu.Item key={ value.id } onClick={ this.doRouter.bind(this, value.path) }>
        <Icon type={ value.type } />
        <span>{ value.content }</span>
      </Menu.Item>
    );

    return (
      <Layout>
        <Sider>
          <div className="logo"><img src={logo} alt="公司logo"/>React中后台应用</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { sideBar }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
            <i className="userInfo">你好{ name }</i>
          </Header>
          <Content className="contentStyle">
            {<Link to={`${this.state.path}`}></Link>}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(state =>({userInfo: state.userInfo}))(Home);