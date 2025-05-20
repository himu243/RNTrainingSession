import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NAVIGATION_ROUTE_NAME} from '../../constants';

function HomeScreen({route}) {
  const navigation = useNavigation();
  console.log('route.params: ', route.params);
  const [state, setState] = useState(1);
  const [name, setName] = useState('himanshu');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to Profile'}
        onPress={() =>
          navigation.navigate(NAVIGATION_ROUTE_NAME.PROFILE, {
            id: state,
            name: name,
          })
        }
      />
    </View>
  );
}
export default HomeScreen;
