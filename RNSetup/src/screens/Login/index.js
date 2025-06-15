import {useNavigation} from '@react-navigation/native';
import React, {useState, useReducer} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NAVIGATION_ROUTE_NAME} from '../../constants';
import {AppContext} from '../../context';
import {setItem, STORAGE_KEYS} from '../../helper/LocalStorageHelper';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLogin, setIsLoginData} from '../../redux/actions/authActions';

const stateChangerFxn = (prevState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_EMAIL':
      return {...prevState, email: payload};
    case 'SET_PASSWORD':
      return {...prevState, password: payload};
    default:
      return prevState;
  }
};

// action -> Plain Javascript Object
const INITIAL_STATE = {
  email: '',
  password: '',
};

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const selectorFxn = (state) => {
  //   return state;
  // };

  //   const [myState, dispatch] = useReducer(stateChangerFxn, INITIAL_STATE);
  const {appStateDispatch} = React.useContext(AppContext);

  // Redux Hooks
  const authState = useSelector(state => state.authData);
  const dispatch = useDispatch();

  console.log('authState: ', authState);

  //   console.log('myState: ', myState);

  const navigation = useNavigation();

  const onPressLogin = () => {
    // 1. If email and Password feilds are empty. ->
    // 2. If user email, check if it is in correct format.
    // 3.
    // const action = {
    //   type: 'SET_IS_LOGIN',
    //   payload: true,
    // };
    // console.log('setting action: ', action);
    // appStateDispatch(action);

    // setItem(STORAGE_KEYS.IS_LOGGED_IN, true);

    // API Call
    // try {
    //   const userData = await simulatedApiCallForLogin();
    //   if (userData) {
    //     const loginAction = setIsLogin(userData); // actionCreator
    //     dispatch(loginAction);

    //     setItem(STORAGE_KEYS.USER_DATA, userData); // Async Storage
    //   }
    // } catch (error) {
    //   console.log('error in login: ', error);
    // }
    //
    dispatch(setIsLoginData());
  };

  const simulatedApiCallForLogin = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({userId: 1, name: 'Himanshu', phNo: '9199999999'});
      }, 1000);
    });
  };

  const onSetEmail = emailVal => {
    setEmail(emailVal);
    // setValState({
    //     ...valState,
    //     email: emailVal
    // })
    // const action = {
    //   type: 'SET_EMAIL',
    //   payload: emailVal,
    // };
    // dispatch(action);
  };

  const onSetPassword = passVal => {
    setPassword(passVal);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Login Screen'}</Text>

      {authState?.isLoggingIn && <Text>{'Please wait .....'}</Text>}

      {authState?.errorLogin && (
        <Text style={{color: 'red'}}>{`${authState?.errorLogin}`}</Text>
      )}
      <TextInput
        value={email}
        onChangeText={onSetEmail}
        placeholder="Enter User Id or Email"
        style={{padding: 8, margin: 8, borderWidth: 1}}
      />
      <TextInput
        value={password}
        onChangeText={onSetPassword}
        placeholder="Enter Password"
        style={{padding: 8, margin: 8, borderWidth: 1}}
      />
      <Button title="Login" onPress={onPressLogin} />
      <Button
        title="Forget Password"
        onPress={() =>
          navigation.navigate(NAVIGATION_ROUTE_NAME.FORGET_PASSWORD)
        }
      />
    </View>
  );
}
export default LoginScreen;
