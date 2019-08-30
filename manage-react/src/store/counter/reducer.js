/*
 * @Author: Tiny 
 * @Date: 2019-07-24 14:02:52 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-30 10:08:23
 */
import { INCREMENT, DECREMENT } from './action-types';

let defaultState = {
  count: 0
}

export const result = (state = defaultState, action = {}) => {
  
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}