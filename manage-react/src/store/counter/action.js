/*
 * @Author: Tiny 
 * @Date: 2019-08-29 17:51:12 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-30 10:08:59
 */
import { INCREMENT, DECREMENT }  from './action-types';

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}