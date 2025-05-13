import React, {useState} from 'react';
import {Text, Button, TextInput} from 'react-native';

const NameComponent = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const setFirstName = val => {
    // const setStCallback = prevState => {
    //   return {...prevState, firstName: val};
    // };

    setName(prevState => ({...prevState, firstName: val}));
  };

  const setLastName = val => {
    setName(prevState => ({...prevState, lastName: val}));
  };

  return (
    <>
      <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
        }}
        value={name.firstName}
        placeholder={'Enter First Name'}
        onChangeText={setFirstName}
      />
      <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
        }}
        value={name.lastName}
        placeholder={'Enter Last Name'}
        onChangeText={setLastName}
      />
      <Text>{JSON.stringify(name)}</Text>
    </>
  );
};

export default NameComponent;
