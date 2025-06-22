import {
  firebaseEmailPasswordLogin,
  firebaseLogout,
  simulatedApiCallForLogin,
} from '../../api/authApi';
import {setItem, STORAGE_KEYS} from '../../helper/LocalStorageHelper';
import {AUTH_ACTIONS} from './types';

const {LOGIN, LOGOUT, IS_LOGGING_IN, LOGIN_ERROR} = AUTH_ACTIONS;

// action creators
export const setIsLogin = userObj => {
  return {
    type: userObj ? LOGIN : LOGOUT,
    payload: userObj,
  };
};

export const setIsLoginData =
  (email, password) => async (dispatch, getState) => {
    // 1. Loading
    dispatch({
      type: IS_LOGGING_IN,
    });

    // 2. API Call
    try {
      // const userData = await simulatedApiCallForLogin();
      const userData = await firebaseEmailPasswordLogin(email, password);
      // 3. To Log user IN
      dispatch({
        type: LOGIN,
        payload: userData,
      });
      // 4. Set data in Local Storage
      setItem(STORAGE_KEYS.USER_DATA, userData);
    } catch (error) {
      console.log('Error: ', error);
      dispatch({
        type: LOGIN_ERROR,
        payload: error,
      });
    }
  };

export const signoutUser = () => async dispatch => {
  try {
    await firebaseLogout();
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log('Error Logging out');
  }
};
// const b = 2;

// const obj = {a: 1, b}; // ==> {a: 1, b: b};
