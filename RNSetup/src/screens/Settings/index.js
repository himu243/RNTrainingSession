import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NAVIGATION_ROUTE_NAME} from '../../constants';
import {AppContext} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../../redux/actions/authActions';
import {removeItem, STORAGE_KEYS} from '../../helper/LocalStorageHelper';

function SettingsScreen({route}) {
  const navigation = useNavigation();
  // const {appStateDispatch} = React.useContext(AppContext);
  const dispatch = useDispatch();

  const onLogout = () => {
    // const action = {
    //   type: 'SET_IS_LOGIN',
    //   payload: false,
    // };
    // appStateDispatch(action);
    const logoutAction = setIsLogin();

    dispatch(logoutAction);

    removeItem(STORAGE_KEYS.USER_DATA);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
      <Button title={'Logout'} onPress={onLogout} />
    </View>
  );
}
export default SettingsScreen;
