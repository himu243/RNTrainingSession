import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NAVIGATION_ROUTE_NAME} from '../../constants';

function ProfileScreen({route}) {
  const navigation = useNavigation();

  const {id, name} = route?.params;

  console.log('id in profile: ', id);
  console.log('naeme in profile: ', name);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title={'Go to Next Profile'}
        onPress={() => navigation.push(NAVIGATION_ROUTE_NAME.PROFILE)}
      />
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </View>
  );
}
export default ProfileScreen;
