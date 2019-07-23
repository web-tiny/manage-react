/*
 * @Author: Tiny 
 * @Date: 2019-07-23 15:12:47 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-23 15:13:58
 */

import counter from './reducers/counter';

export default function combineReducers (state = {}, action) {
  return {
    counter: counter(state.counter, action)
  }
}