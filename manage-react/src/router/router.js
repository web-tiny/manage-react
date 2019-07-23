/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:45:43 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-24 00:05:12
 */

import React from 'react';
import { Router, Route, hashHistory } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('../pages/Home/home'));
const Login = loadable(() => import('../pages/Login/login'));

export default () => (
  <Router history={hashHistory}>
    <Route>
      <Route exact path='/home' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
    </Route>
    <Route exact path='/' component={Login}></Route>
  </Router>
)
