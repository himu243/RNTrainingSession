import {
  firebaseSignupWithEmailPassword,
  firebaseLogout,
} from '../../api/authApi';
import {
  COLLECTION_NAMES,
  getDocumentOnce,
  setDocument,
} from '../../helper/firestoreHelper';
import {setItem, STORAGE_KEYS} from '../../helper/LocalStorageHelper';
import {AUTH_ACTIONS} from './types';

const {LOGIN, LOGOUT, IS_LOGGING_IN, LOGIN_ERROR} = AUTH_ACTIONS;

const USER_DATA = {
  // GET THIS DATA from SIGNUP SCREEN
  first_name: 'Himanshu',
  last_name: 'Ahuja',
  age: 30,
  address: {
    city: 'Mumbai',
    pincode: 400706,
  },
};
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
      let objUser;
      const userData = await firebaseSignupWithEmailPassword(email, password);
      const {isLogin, user} = userData;
      if (user?.uid) {
        if (isLogin) {
          // Login Case
          // Fetch the details of logged - In user from Firestore
          const firebaseUserData = await getDocumentOnce(
            COLLECTION_NAMES.USERS,
            user?.uid,
          );
          objUser = {id: user?.uid, data: firebaseUserData};
        } else {
          // Signup Case
          // Set the details of Signin user in Firestore
          await setDocument(COLLECTION_NAMES.USERS, user.uid, USER_DATA);
          objUser = {id: user?.uid, data: USER_DATA};
        }
      }
      // 4. To Log user IN
      dispatch({
        type: LOGIN,
        payload: objUser,
      });
      // 5. Set data in Local Storage
      setItem(STORAGE_KEYS.USER_DATA, objUser);
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
