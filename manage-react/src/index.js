import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import zhCN from 'antd/es/locale-provider/zh_CN';
import './assets/styles/reset.css';
import Route from './router/router';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store} locale={zhCN}>
    <Route/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
