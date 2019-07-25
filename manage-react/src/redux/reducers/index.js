/*
 * @Author: Tiny 
 * @Date: 2019-07-23 15:07:52 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-25 13:22:49
 */

// import { handleActions, combineActions } from 'redux-actions';
import { handleActions } from 'redux-actions';
// handleAction(type, reducerMap, defaultState)
import { increment, decrement } from '../actions/index';

// 初始化state
const initState = {
  count: 0
}

// reducer
// const reducers = handleActions({
//   [combineActions(increment, decrement)]: (state, { payload: { amount } }) => {
//     return {
//       ...state,
//       count: state.count + amount
//     }
//   }
// }, initState)

const reducers = handleActions(
  {
    [increment]: state => ({
      ...state,
      count: state.count + 1
    }),
    
    [decrement]: state => ({
      ...state,
      count: state.count - 1
    })
  },
  initState
);

export { reducers as default }
