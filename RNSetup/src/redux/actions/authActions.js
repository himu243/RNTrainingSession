import {AUTH_ACTIONS} from './types';

const {LOGIN, LOGOUT} = AUTH_ACTIONS;

// action creators
export const setIsLogin = userObj => {
  return {
    type: userObj ? LOGIN : LOGOUT,
    payload: userObj,
  };
};

// const b = 2;

// const obj = {a: 1, b}; // ==> {a: 1, b: b};
