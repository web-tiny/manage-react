/*
 * @Author: Tiny 
 * @Date: 2019-07-23 15:18:18 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-09-02 10:46:37
 */
/** 
 * store的作用：
 * 1：维持应用的state；
 * 2：提供getState()方法获取state;
 * 3：提供dispatch(action)触发reducers方法更新state;
 * 4：通过subsribe(listener)注册监听器；
 * 5：通过subsribe(listener)返回的函数注销监听器；
*/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as result from './counter/reducer';
import * as userInfo from './login/reducer';


let store = createStore(
  combineReducers({
    ...result,
    ...userInfo
  }),
  applyMiddleware(thunk)
);

export default store;