'use strict';

const { createStore } = require('redux');

//-------------------------------------------------------------------------------------------
// REDUCER
//-------------------------------------------------------------------------------------------
const DEFAULT_STATE = 0; // Zachary - Important
// Zachary - a reducer is just a function
// const counterReducer = (previousState = DEFAULT_STATE, { type, payload }) => {
const counterReducer = (previousState = DEFAULT_STATE, action) => {

  const { type, payload = 1 } = action; // Zachary - The default value is important

  // Zachary - This function will return new state
  // Zachary - What types of actions will I support?
  //        INCREMENT_COUNTER
  //      DECREMENT_COUNTER
  switch (type) {
    case 'INCREMENT_COUNTER':
      return previousState + payload;
    case 'DECREMENT_COUNTER':
      return previousState - payload;
    default: // Zachary - this is  REQUIRED
      return previousState;
  }
};
//-------------------------------------------------------------------------------------------
// Vanilla Reducer
//-------------------------------------------------------------------------------------------
// let state = counterReducer(undefined, { type: undefined });
// counterReducerConsole.log(state);
//
// state = counterReducer(state, { type: 'INCREMENT_COUNTER', payload: 100 });
// state = counterReducer(state, { type: 'DECREMENT_COUNTER', payload: 0 });
// console.log(state);
//-------------------------------------------------------------------------------------------
// Redux Router
//-------------------------------------------------------------------------------------------

const store = createStore(counterReducer);
console.log(store.getStore());
store.dispatch({ type: 'INCREMENT_COUNTER', payload: 100 });
console.log(store.getState());
store.dispatch({ type: 'DECREMENT_COUNTER', payload: 1000 });
console.log(store.getState());
