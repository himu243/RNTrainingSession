import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../context';
import {getItem, STORAGE_KEYS} from '../../helper/LocalStorageHelper';
import {setIsLogin} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import {getAuth} from '@react-native-firebase/auth';
import {getCurrentFBUser} from '../../api/authApi';

const SplashScreen = () => {
  const {appStateDispatch} = React.useContext(AppContext);

  const dispatch = useDispatch();

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
    // const getDataOfLogin = await AsyncStorage.getItem('isLoggedIn');

    // Login
    // const action = {
    //   type: 'SET_IS_LOGIN',
    //   payload: !!getDataOfLogin,
    // };
    // appStateDispatch(action);
    try {
      // const userData = await getItem(STORAGE_KEYS.USER_DATA);
      const userData = getCurrentFBUser();
      console.log('Current user in firebase: ', userData);
      if (userData) {
        // const loginAction = setIsLogin(JSON.parse(userData)); // actionCreator
        const loginAction = setIsLogin(userData);
        dispatch(loginAction);
      }
    } catch (error) {
      console.log('error: ', error);
    }
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
