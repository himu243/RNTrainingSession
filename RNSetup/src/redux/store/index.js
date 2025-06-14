import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import authReducer from '../reducers/authReducer';
import homeReducer from '../reducers/homeReducer';

const rootReducer = combineReducers({
  authData: authReducer,
  homeData: homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

// const b = 1;
// const obj = {a: 2, b}; // ==> {a: 2, b: 1};
