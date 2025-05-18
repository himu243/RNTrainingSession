import React from 'react';
import {Text, Button} from 'react-native';

const CountComponent = ({name, count, onHandleClick}) => {
  console.log(`On Render ${name}`);

  return (
    <>
      <Text style={{fontSize: 14}}>{`${name} - ${count}`}</Text>
      <Button title={`Increase ${name}`} onPress={onHandleClick} />
    </>
  );
};

export default React.memo(CountComponent);
