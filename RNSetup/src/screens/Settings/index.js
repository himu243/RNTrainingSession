import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NAVIGATION_ROUTE_NAME} from '../../constants';
import {AppContext} from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen({route}) {
  const navigation = useNavigation();
  const {appStateDispatch} = React.useContext(AppContext);

  const onLogout = () => {
    const action = {
      type: 'SET_IS_LOGIN',
      payload: false,
    };
    appStateDispatch(action);
    AsyncStorage.removeItem('isLoggedIn');
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
