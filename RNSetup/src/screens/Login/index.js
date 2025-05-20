import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

function LoginScreen() {
  const [emai, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {};

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        value={emai}
        onChangeText={setEmail}
        placeholder="Enter User Id or Email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
      />
      <Button title="Login" onPress={onPressLogin} />
    </View>
  );
}
export default LoginScreen;
