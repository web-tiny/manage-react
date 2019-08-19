/*
 * @Author: tiny.jiao@aliyun.com 
 * @Date: 2019-07-24 21:20:24 
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-07-26 13:49:22
 */
const defaultState = {
  counter: 0
};

const content = document.getElementById('content');

// store
const { createStore } = window.Redux;
// redux-actions
const { createActions, createAction, handleActions, handleAction, combineActions } = window.ReduxActions;
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


/**
 * createAction:
 *  createAction(type)
 *  createAction(type, payloadCreator)
 *  createAction(type, payloadCreator, metaCreator)
*/
const updateAdminUser1 = createAction('UPDATE_ADMIN_USER')
console.log(updateAdminUser1()) // {type: "UPDATE_ADMIN_USER"}
console.log(updateAdminUser1(10)) // {type: "UPDATE_ADMIN_USER", payload: 10}
console.log(updateAdminUser1([1, 2])) // {type: "UPDATE_ADMIN_USER", payload: [1, 2]}

const updateAdminUser2 = createAction('UPDATE_ADMIN_USER', amount => amount)
console.log(updateAdminUser2(10)) // {type: "UPDATE_ADMIN_USER", payload: 10}

const updateAdminUser3 = createAction(
  'UPDATE_ADMIN_USER',
  updates => updates,
  () => ({ admin: true }),
)
// {
//   type: 'UPDATE_ADMIN_USER',
//   payload: { name: 'jiao' },
//   meta: { admin: true }
// }
console.log(updateAdminUser3({ name: 'jiao' }));

/** 
 * createActions:
 *  createActions(actionMap[, options])
 *  createActions(actionMap, ...identityActions[, options])
*/
const actionCreators1 = createActions({
  ADD_Number: todo => ({ todo }),
  REMOVE_NUMBER: [
    todo => ({ todo }),
    (todo, warn) => ({ todo, warn })
  ]
})
// {type: "ADD_Number", payload: { todo: 1 }}
console.log(actionCreators1.addNumber(1));
// {
//   type: "REMOVE_NUMBER",
//   payload: { todo: 1 },
//   meta: { 
//     todo: 1,
//     warn: 'ok'
//   }
// }
console.log(actionCreators1.removeNumber(1, 'ok'));

const { actionOne, actionTwo, actionThree } = createActions(
  {
    ACTION_ONE: (key, value) => ({ [key]: value }),
    ACTION_TWO: [
      first => [first],
      (first, second) => ({ second })
    ]
  },
  'ACTION_THREE'
)
// { type: 'ACTION_ONE', payload: { name: 'Tiny' } }
console.log(actionOne('name', 'Tiny'));
// { type: 'ACTION_TWO', payload: ['age'], meta: { second: "address" } }
console.log(actionTwo('age', 'address'));
// {type: "ACTION_THREE", payload: 30}
console.log(actionThree(30));

/** 
 * handleAction:
 *  handleAction(type, reducer, defaultState)
 *  handleAction(type, reducerMap, defaultState)
*/
// handleAction(type, reducer, defaultState)
handleAction(
  'CHANGE_NAME',
  (state, action) => ({
    count: state.count + action.payload.amount
  }),
  defaultState
);
// handleAction(type, reducerMap, defaultState)
handleAction('FETCH_DATA', {
  next(state, action) {},
  throw(state, action) {}
}, defaultState);

/** 
 * handleActions:
 *  handleActions(reducerMap, defaultState[, options])
 *  handleActions(actionMap[, defaultState], options)
*/
// handleActions(reducerMap, defaultState[, options])
const reducer2 = handleActions({
  INCREMENT: (state, action) => ({
    count: state.count + action.payload
  }),
  DECREMENT: (state, action) => ({
    count: state.count - action.payload
  })
}, { count: 0 })

const { increment3, decrement3 } = createAction('INCREMENT', 'DECREMENT')
const reducer3 = handleActions(
  new Map([
    [
      // 'INCREMENT',
      increment3,
      (state, action) => ({
        count: state.count + action.payload
      })
    ],
    [
      // 'DECREMENT',
      decrement3,
      (state, action) => ({
        count: state.count + action.payload
      })
    ]
  ]),
  { count: 0 }
)

// handleActions(actionMap[, defaultState], options)
