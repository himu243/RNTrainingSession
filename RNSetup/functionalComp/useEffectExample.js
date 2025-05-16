import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native';

const UseEffectExamples = () => {
  const [text, setText] = useState('');
  //   const [text1, setText1] = useState('');

  //   const [myTimerVal, setMyTimerVal] = useState(0);

  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    val: 1,
  });

  useEffect(() => {
    console.log('Only after component mount');
    // setTimeout
    // let valInterval = setInterval(() => {
    //   console.log('called after every 5 seconds');
    //   setMyTimerVal(Date.now()); // Milliseconds
    // }, 5000);

    // return () => {
    //   // Acting like Component will Unmount
    //   console.log('UseEffectExamples Is about to Unmount');
    //   clearInterval(valInterval); // Cleanup in component will unmount
    // };
    return () => {
      console.log('UseEffectExamples Is about to Unmount ');
    };
  }, []); // Component Did Mount

  useEffect(() => {
    console.log('Updated count is: ', count);
    return () => {
      console.log(`Count ${count} is cleared`);
    };
  }, [count]);

  // Count: 0
  // Count: 1
  //   useEffect(() => {
  //     console.log('Component Did Update');
  //     console.log('Did Update Count is: ', count);
  //   }); // Component Did Update

  return (
    <>
      <TouchableOpacity onPress={() => setCount(prevCount => prevCount + 1)}>
        <Text>{`Count is: ${count}`}</Text>
      </TouchableOpacity>
      <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
          marginTop: 100,
        }}
        value={text}
        placeholder={'Enter Item'}
        onChangeText={setText}
      />

      {/* <TextInput
        style={{
          margin: 6,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 4,
          padding: 8,
          marginTop: 100,
        }}
        value={text1}
        placeholder={'Enter Item 1'}
        onChangeText={setText1}
      />
      <Text>{myTimerVal}</Text> */}
    </>
  );
};

export default UseEffectExamples;
