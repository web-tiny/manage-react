/*
 * @Author: Tiny 
 * @Date: 2019-07-24 14:02:52 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-25 15:03:29
 */
import { createActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from './actionTypes';

// export const { increment, decrement } = createActions({
//   INCREMENT: (amount = 1) => ({ amount }),
//   DECREMENT: (amount = 1) => ({ amount: -amount })
// });
export const { increment, decrement } = createActions(INCREMENT, DECREMENT);
