/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:45:43 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-02 17:27:24
 */

import React, { Suspense } from 'react';
/**
 * 1：web时应该用react-router-dom，而不是react-router
 * 2：react-router-dom没有Router，应该：BrowserRouter as Router
*/
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('../pages/Home/home'));
const Login = loadable(() => import('../pages/Login/login'));
const Counter = loadable(() => import('../pages/Counter/counter'));
const BaseInfo = loadable(() => import('../pages/BaseInfo/baseInfo'));
const Vita = loadable(() => import('../pages/Vita/vita'));
const Diary = loadable(() => import('../pages/Diary/diary'));
// const NoMatch = loadable(() => import('../components/ErrorBoundary'));

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/counter' component={Counter}/>
        <Route path='/baseInfo/' component={BaseInfo}/>
        <Route path='/vita/' component={Vita}/>
        <Route path='/diary/' component={Diary}/>
        {/* when none of the above match, <NoMatch> will be rendered */}
        {/* <Route component={NoMatch}>404</Route>*/}
      </Switch>
      <Route exact path='/' component={Login}/>
    </Suspense>
  </Router>
)
