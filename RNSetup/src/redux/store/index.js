import {applyMiddleware, combineReducers, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

console.log('thunk is: ', thunk);

import authReducer from '../reducers/authReducer';
import homeReducer from '../reducers/homeReducer';
import todoReducer from '../reducers/toDoReducer';

const rootReducer = combineReducers({
  authData: authReducer,
  homeData: homeReducer,
  todoData: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

// const b = 1;
// const obj = {a: 2, b}; // ==> {a: 2, b: 1};
