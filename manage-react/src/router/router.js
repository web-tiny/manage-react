/*
 * @Author: Tiny 
 * @Date: 2019-07-23 14:45:43 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-03 17:42:29
 */

import React, { Suspense } from 'react';
/**
 * 1：web时应该用react-router-dom，而不是react-router
 * 2：react-router-dom没有Router，应该：BrowserRouter as Router
*/
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { routerConfig } from './config';

export default (authed, authPath = '/login', extraProps = {}, switchProps = {}) => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch {...switchProps}>
        {routerConfig.map((route, i) => (
          <Route
            key={route.component}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              if (!route.requiresAuth || authed || route.path === authPath) {
                return <route.component {...props} {...extraProps} route={route}/>
              }
              return <Redirect to={{pathname: authPath, state: { from: props.location }}}/>
            }}
          />
        ))}
      </Switch>
    </Suspense>
  </Router>
);
