/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:45:43 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-24 10:40:33
 */

import React from 'react';
/**
 * 1：web时应该用react-router-dom，而不是react-router
 * 2：react-router-dom没有Router，应该：BrowserRouter as Router
*/
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('../pages/Home/home'));
const Login = loadable(() => import('../pages/Login/login'));
const Counter = loadable(() => import('../pages/Counter/counter'));

export default () => (
  <Router>
    <Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/counter' component={Counter}></Route>
    </Route>
    <Route exact path='/' component={Login}></Route>
  </Router>
)
