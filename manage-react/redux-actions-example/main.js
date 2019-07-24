/*
 * @Author: tiny.jiao@aliyun.com 
 * @Date: 2019-07-24 21:20:24 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-24 23:28:54
 */
const defaultState = {
  counter: 0
};

const content = document.getElementById('content');

// store
const { createStore } = window.Redux;
// redux-actions
const { createActions, handleActions, combineActions } = window.ReduxActions;
// const { increment, decrement } = createActions('INCREMENT', 'DECREMENT');
const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

const reducer = handleActions({
  [combineActions(increment, decrement)]: (state, { payload: { amount } }) => {
    return {
      ...state,
      counter: state.counter + amount
    }
  }
}, defaultState);

// const reducer = handleActions({
//   [increment]: (state, { payload: { amount } }) => {
//     return {
//       ...state,
//       counter: state.counter + amount
//     };
//   },
//   [decrement]: (state, { payload: { amount } }) => {
//     return {
//       ...state,
//       counter: state.counter + amount
//     };
//   },
// }, defaultState);

// const reducer = handleActions(
//   {
//     [increment]: state => ({
//       ...state,
//       counter: state.counter + 1
//     }),
//     [decrement]: state => ({
//       ...state,
//       counter: state.counter - 1
//     })
//   },
//   defaultState
// );

const store = createStore(reducer, defaultState);

const render = () => {
  content.innerHTML = store.getState().counter;
};
// render();
store.subscribe(render)

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});
