/*
 * @Author: Tiny 
 * @Date: 2019-07-23 15:07:52 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-24 17:22:35
 */

import { handleActions } from 'redux-actions';
// handleAction(type, reducerMap, defaultState)

// 初始化state
const initState = {
  count: 0
}

// reducer
const handleCounter = handleActions({
  INCREMENT (state, action) {
    console.log('add')
    return {
      count: state.count + 1
    }
  },
  DECREMENT (state, action) {
    return {
      count: state.count - 1
    }
  },
  RESET (state, action) {
    return {
      count: 0
    }
  }
}, initState)

export { handleCounter as default }
