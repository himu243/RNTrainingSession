import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NAVIGATION_ROUTE_NAME} from '../../constants';

function DetailsScreen({route}) {
  const navigation = useNavigation();
  console.log('route.params: ', route.params);
  const [state, setState] = useState(1);
  const [name, setName] = useState('himanshu');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title={'Go to Profile'} onPress={() => navigation.goBack()} />
    </View>
  );
}
export default DetailsScreen;
