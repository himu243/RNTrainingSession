import {useNavigation} from '@react-navigation/native';
import React, {useState, useReducer} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NAVIGATION_ROUTE_NAME} from '../../constants';

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
  //   const [emai, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  // const [valState, setValState] = useState({
  //     email: '',
  //     pass: '',
  // })
  const [myState, dispatch] = useReducer(stateChangerFxn, INITIAL_STATE);

  console.log('myState: ', myState);

  const navigation = useNavigation();
  const onPressLogin = () => {};

  const onSetEmail = emailVal => {
    // setValState({
    //     ...valState,
    //     email: emailVal
    // })
    const action = {
      type: 'SET_EMAIL',
      payload: emailVal,
    };
    dispatch(action);
  };

  const onSetPassword = passVal => {
    const action = {
      type: 'SET_PASSWORD',
      payload: passVal,
    };
    dispatch(action);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Login Screen'}</Text>
      <TextInput
        value={myState.email}
        onChangeText={onSetEmail}
        placeholder="Enter User Id or Email"
        style={{padding: 8, margin: 8, borderWidth: 1}}
      />
      <TextInput
        value={myState.password}
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
