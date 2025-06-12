import {AUTH_ACTIONS} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  const {LOGIN, LOGOUT} = AUTH_ACTIONS;
  const {type, payload} = action;
  // isLogin, user: userObj
  switch (type) {
    case LOGIN:
      return {...state, isLoggedIn: true, user: payload};
    case LOGOUT:
      return {...state, isLoggedIn: false, user: null};
    default:
      return state;
    //   return {...state};// bad Code
  }
};

export default authReducer;
