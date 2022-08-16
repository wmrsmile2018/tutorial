import { combineReducers } from 'redux';

import todos from './todos/reducer';

const appReducer = combineReducers({ todos });

export function rootReducer(state, action) {
  if (action.type === 'CLEAR_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
}
