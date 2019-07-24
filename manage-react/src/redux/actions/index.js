/*
 * @Author: Tiny 
 * @Date: 2019-07-24 14:02:52 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-24 17:39:09
 */
import {
  INCREMENT,
  DECREMENT,
  RESET
} from './counter';
import { createAction } from 'redux-actions';

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
export const reset = createAction(RESET)