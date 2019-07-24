/*
 * @Author: Tiny 
 * @Date: 2019-07-24 11:24:38 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-24 16:19:54
 */
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as counter from './counter';

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...counter
})

export default rootReducer;