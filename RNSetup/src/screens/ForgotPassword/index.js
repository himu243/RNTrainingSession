import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

function ForgotPasswordScreen() {
  const [emai, setEmail] = useState('');
  const navigation = useNavigation();

  const onPressResetPassword = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{'Forget Passsword Screen'}</Text>
      <TextInput
        value={emai}
        onChangeText={setEmail}
        placeholder="Enter User Id or Email"
        style={{padding: 8, margin: 8, borderWidth: 1}}
      />
      <Button title="Reset Password" onPress={onPressResetPassword} />
    </View>
  );
}
export default ForgotPasswordScreen;
