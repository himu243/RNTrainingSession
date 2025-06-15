import {AUTH_ACTIONS} from '../actions/types';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  user: null,
  errorLogin: null,
};

const authReducer = (state = initialState, action) => {
  const {IS_LOGGING_IN, LOGIN, LOGOUT, LOGIN_ERROR} = AUTH_ACTIONS;
  const {type, payload = null} = action;
  // isLogin, user: userObj
  switch (type) {
    case IS_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true,
        user: null,
        isLoggedIn: false,
        errorLogin: null,
      };
    case LOGIN:
      return {...state, isLoggedIn: true, user: payload, isLoggingIn: false};
    case LOGOUT:
      return {...state, isLoggedIn: false, user: null, isLoggingIn: false};
    case LOGIN_ERROR:
      return {...state, errorLogin: payload, isLoggingIn: false};
    default:
      return state;
    //   return {...state};// bad Code
  }
};

export default authReducer;
