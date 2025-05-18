import React, {useEffect, useRef, useState} from 'react';

import {View, TextInput, Button} from 'react-native';

const UseRefHookExample = () => {
  const [val, setVal] = useState('');
  const inputRef = useRef(null);
  const myValueRef = useRef(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  console.log('myValue in re-render: ', myValueRef.current);
  return (
    <>
      <TextInput
        ref={inputRef}
        value={val}
        onChangeText={setVal}
        placeholder={'Type to set value'}
      />
      <Button
        title="Press me"
        onPress={() => {
          myValueRef.current += 1;
        }}
      />
    </>
  );
};

export default UseRefHookExample;
