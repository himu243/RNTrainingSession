import React, {useState, useMemo, useCallback} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const UseMemoHookExample = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //   const incrementCounter1 = () => {
  //     setCounter1(counter1 + 1);
  //   };
  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };
  const isEven = useMemo(() => {
    let index = 0;
    while (index < 3000000000) {
      index++;
    }
    return counter1 % 2 === 0;
  }, [counter1]); // Returns the Cached value in case counter2 is rendered other wise it was making slow for counter 2 as well

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      <TouchableOpacity onPress={incrementCounter1}>
        <Text>{`Count1 is ${counter1} which is ${isEven}`}</Text>
      </TouchableOpacity>
      <View style={{height: 20}} />
      <TouchableOpacity onPress={incrementCounter2}>
        <Text>{`Count2 is ${counter2}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseMemoHookExample;
