import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../context';

const SplashScreen = () => {
  const {appStateDispatch} = React.useContext(AppContext);
  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    setTimeout(async () => {
      await updateLoginData();
      setSplashLoadingData();
    }, 2000);
  };

  const updateLoginData = async () => {
    const getDataOfLogin = await AsyncStorage.getItem('isLoggedIn');
    // Login
    const action = {
      type: 'SET_IS_LOGIN',
      payload: getDataOfLogin === 'true',
    };
    appStateDispatch(action);
  };

  const setSplashLoadingData = () => {
    const action = {
      type: 'SET_IS_SPLASH_LOADING',
      payload: false,
    };
    appStateDispatch(action);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{'Splash Screen'}</Text>
    </View>
  );
};

export default SplashScreen;
