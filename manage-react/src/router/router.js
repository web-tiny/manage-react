/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:45:43 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-23 18:12:39
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../pages/Home/home';
import Login from '../pages/Login/login';

const getRouter = () => (
  <Router>
    <Route>
      <IndexRoute component={Home}/>
      <Route exact path='home' component={Home}></Route>
      <Route path='login' component={Login}></Route>
    </Route>
  </Router>
)

export default getRouter;